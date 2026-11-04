param(
    [ValidateRange(1024, 65515)][int]$Port = 5186,
    [switch]$NoBrowser
)
$ErrorActionPreference = 'Stop'
$webRoot = [IO.Path]::GetFullPath((Join-Path (Split-Path $PSScriptRoot -Parent) 'dist'))
if (-not (Test-Path -LiteralPath (Join-Path $webRoot 'index.html'))) {
    throw '找不到 dist/index.html。请先完整解压 ZIP，勿单独移动启动文件。'
}
$rootPrefix = $webRoot.TrimEnd('\') + '\'
$hasher = [Security.Cryptography.SHA256]::Create()
try { $instanceId = ([BitConverter]::ToString($hasher.ComputeHash([Text.Encoding]::UTF8.GetBytes($webRoot.ToLowerInvariant())))).Replace('-', '').ToLowerInvariant() }
finally { $hasher.Dispose() }
$appId = 'untraveled-road-entry-flow-local-v1'
$listener = $null
$demoUrl = $null
for ($candidatePort = $Port; $candidatePort -le $Port + 20; $candidatePort++) {
    $candidate = [Net.Sockets.TcpListener]::new([Net.IPAddress]::Loopback, $candidatePort)
    try {
        $candidate.Start()
        $listener = $candidate
        $demoUrl = 'http://127.0.0.1:' + $candidatePort + '/'
        break
    } catch {
        $candidate.Stop()
        # Reuse only this exact extracted copy, never an unrelated service.
        try {
            $existing = Invoke-RestMethod -Uri ('http://127.0.0.1:' + $candidatePort + '/__entry_flow_status') -TimeoutSec 1 -UseBasicParsing
            if ($existing.app -eq $appId -and $existing.instance -eq $instanceId) {
                $demoUrl = 'http://127.0.0.1:' + $candidatePort + '/'
                Write-Host ('试玩已在运行：' + $demoUrl)
                if (-not $NoBrowser) { Start-Process -FilePath $demoUrl }
                exit 0
            }
        } catch { }
    }
}
if ($null -eq $listener) { throw '未找到可用的本地端口，请关闭旧试玩窗口后重试。' }

function Send-Response {
    param($Stream, [int]$Status, [string]$Mime, [byte[]]$Bytes, [bool]$HeadOnly = $false)
    $reason = switch ($Status) { 200 {'OK'} 400 {'Bad Request'} 403 {'Forbidden'} 404 {'Not Found'} 405 {'Method Not Allowed'} default {'Error'} }
    $header = "HTTP/1.1 $Status $reason`r`nContent-Type: $Mime`r`nContent-Length: $($Bytes.Length)`r`nConnection: close`r`nX-Content-Type-Options: nosniff`r`n`r`n"
    $headerBytes = [Text.Encoding]::ASCII.GetBytes($header)
    $Stream.Write($headerBytes, 0, $headerBytes.Length)
    if (-not $HeadOnly -and $Bytes.Length -gt 0) { $Stream.Write($Bytes, 0, $Bytes.Length) }
    $Stream.Flush()
}

Write-Host ''
Write-Host '未行之路 · 开局准备独立试玩' -ForegroundColor Magenta
Write-Host ('试玩地址：' + $demoUrl)
Write-Host '请保持本窗口打开。关闭窗口或按 Ctrl+C，停止试玩。'
Write-Host '如浏览器未自动打开，请复制上方地址到 Chrome 或 Edge。'
Write-Host ''
Write-Host ('DEMO_URL=' + $demoUrl)
try {
    if (-not $NoBrowser) {
        try { Start-Process -FilePath $demoUrl }
        catch { Write-Host '浏览器未能自动打开，请手动打开上方试玩地址。' }
    }
    while ($true) {
        $client = $listener.AcceptTcpClient()
        $reader = $null
        try {
            $client.ReceiveTimeout = 4000
            $client.SendTimeout = 4000
            $stream = $client.GetStream()
            $reader = [IO.StreamReader]::new($stream, [Text.Encoding]::ASCII, $false, 1024, $true)
            $requestLine = $reader.ReadLine()
            if ([string]::IsNullOrWhiteSpace($requestLine)) { continue }
            $parts = $requestLine.Split(' ')
            if ($parts.Length -ne 3 -or $requestLine.Length -gt 8192) {
                Send-Response $stream 400 'text/plain; charset=utf-8' ([Text.Encoding]::UTF8.GetBytes('Invalid request'))
                continue
            }
            $headerCount = 0
            do {
                $headerLine = $reader.ReadLine()
                $headerCount++
                if ($headerCount -gt 100) { throw 'Too many request headers' }
            } while (-not [string]::IsNullOrEmpty($headerLine))
            $method = $parts[0]
            $headOnly = $method -eq 'HEAD'
            if ($method -ne 'GET' -and -not $headOnly) {
                Send-Response $stream 405 'text/plain; charset=utf-8' ([Text.Encoding]::UTF8.GetBytes('Only GET and HEAD are supported'))
                continue
            }
            $urlPath = [Uri]::UnescapeDataString(($parts[1].Split('?')[0]))
            if (-not $urlPath.StartsWith('/')) {
                Send-Response $stream 400 'text/plain; charset=utf-8' ([Text.Encoding]::UTF8.GetBytes('Invalid path'))
                continue
            }
            if ($urlPath -eq '/__entry_flow_status') {
                $statusJson = @{app=$appId; instance=$instanceId} | ConvertTo-Json -Compress
                Send-Response $stream 200 'application/json; charset=utf-8' ([Text.Encoding]::UTF8.GetBytes($statusJson)) $headOnly
                continue
            }
            if ($urlPath -eq '/') { $urlPath = '/index.html' }
            $relative = $urlPath.TrimStart('/').Replace('/', '\')
            $filePath = [IO.Path]::GetFullPath((Join-Path $webRoot $relative))
            if (-not $filePath.StartsWith($rootPrefix, [StringComparison]::OrdinalIgnoreCase)) {
                Send-Response $stream 403 'text/plain; charset=utf-8' ([Text.Encoding]::UTF8.GetBytes('Forbidden'))
                continue
            }
            if (-not [IO.File]::Exists($filePath)) {
                Send-Response $stream 404 'text/plain; charset=utf-8' ([Text.Encoding]::UTF8.GetBytes('Not found'))
                continue
            }
            $mime = switch ([IO.Path]::GetExtension($filePath).ToLowerInvariant()) {
                '.html' {'text/html; charset=utf-8'}
                '.js' {'text/javascript; charset=utf-8'}
                '.css' {'text/css; charset=utf-8'}
                '.json' {'application/json; charset=utf-8'}
                '.png' {'image/png'}
                '.jpg' {'image/jpeg'}
                '.svg' {'image/svg+xml'}
                '.ttf' {'font/ttf'}
                '.ico' {'image/x-icon'}
                '.txt' {'text/plain; charset=utf-8'}
                default {'application/octet-stream'}
            }
            Send-Response $stream 200 $mime ([IO.File]::ReadAllBytes($filePath)) $headOnly
        } catch {
            # A tab closing mid-request should not terminate the local server.
        } finally {
            if ($null -ne $reader) { $reader.Dispose() }
            $client.Close()
        }
    }
} finally {
    $listener.Stop()
}
