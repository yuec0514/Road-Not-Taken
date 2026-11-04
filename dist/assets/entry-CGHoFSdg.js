(function(){"use strict";var As=document.createElement("style");As.textContent=':root{font-family:Segoe UI,Microsoft YaHei,sans-serif;color:#4d435c;background:#e7e0ed;font-synthesis:none;--ink:#4d435c;--muted:#897c94;--accent:#806b99;--paper:#fbf8f1;--line:#ded5e3}*{box-sizing:border-box}body{margin:0;overflow:hidden}button,input,select{font:inherit}button,select,summary{cursor:pointer}button{color:inherit;background:transparent;border:1px solid var(--line);border-radius:9px;padding:10px 14px;min-height:42px;transition:background .16s,border-color .16s,transform .16s}button:hover:not(:disabled){background:#ece4f0;border-color:#b7a5c7}button:active:not(:disabled){transform:translateY(1px)}button:disabled{opacity:.45;cursor:default}button:focus-visible,input:focus-visible,select:focus-visible,summary:focus-visible,canvas:focus-visible{outline:3px solid #b699cb;outline-offset:3px}h1,h2,h3,p{margin:0}h1,h2,.wordmark{font-family:STSong,SimSun,serif;font-weight:400}h1{font-size:30px;line-height:1.55}h2{font-size:21px}p{line-height:1.9;color:#7b6d87;font-size:14px}small{font-size:11px;color:var(--muted)}[hidden]{display:none!important}.eyebrow{font-size:10px;letter-spacing:2px;color:#97849f;line-height:1.8}.primary{background:var(--accent);color:#fff!important;border-color:var(--accent);width:100%;font-size:14px;min-height:49px;display:flex;align-items:center;justify-content:space-between;gap:20px}.primary:hover:not(:disabled){background:#715c8b;border-color:#715c8b}.secondary{background:#f7f2f9;display:flex;flex-direction:column;align-items:flex-start;gap:5px;width:100%;font-size:14px}.text-button{border:0;background:none;padding:8px;color:#8a779a;font-size:12px}.small-copy{font-size:11px;line-height:1.9;color:#9b8ea4}#stage{position:fixed;inset:90px 372px 22px 20px;border:1px solid #a99ab8;border-radius:9px;overflow:hidden;background:#eae5ef;box-shadow:0 2px #b3a9bd50;transition:left .35s,right .35s,top .35s,bottom .35s}#world{width:100%;height:100%;display:block;outline:none;touch-action:none;cursor:grab}#labels{position:absolute;inset:0;pointer-events:none}.place{position:absolute;transform:translate(-50%,-100%);font-size:10px;min-height:30px;padding:7px 9px;background:#fffaf1dd;border:1px solid #cfc4d6;pointer-events:auto;border-radius:6px;white-space:nowrap;box-shadow:0 2px 4px #7868880b}.place i{display:inline-block;width:5px;height:5px;border-radius:50%;margin-right:4px;vertical-align:middle}.place small{display:none;font-size:9px;color:#978b9f;margin-top:4px}.place.near small{display:block}.place.visited span:after{content:" ✓";color:#a399aa}.place.destination{background:#e5d9ef;border-color:#a189b5}.place.locked{color:#aaa0ae}.place.locked i{opacity:.4}#cameraHint{position:absolute;left:18px;bottom:14px;font-size:10px;color:#9c8ca8;pointer-events:none}#sceneBadge{position:absolute;left:18px;top:17px;font-size:10px;letter-spacing:1px;color:#9d8aa8;pointer-events:none}#topbar{position:fixed;top:16px;left:22px;right:22px;height:54px;display:flex;align-items:center;gap:24px}.wordmark{border:0;font-size:26px;letter-spacing:4px;padding:0;display:flex;gap:20px;align-items:center}.wordmark small{font-family:sans-serif;font-size:8px;letter-spacing:2px}.wordmark:hover:not(:disabled){background:none}#chapterName{color:#96869f;font-size:11px;letter-spacing:1px}#topbar nav{margin-left:auto;display:flex;gap:7px}#topbar nav button{font-size:12px;background:#f7f2f9;padding:8px 15px;min-height:36px}#sidebar{position:fixed;right:20px;top:90px;bottom:22px;width:334px;border-radius:10px;background:var(--paper);border:1px solid #d3c8dc;box-shadow:0 3px 8px #88729b08;padding:24px 22px;overflow:auto;scrollbar-width:thin;scrollbar-color:#c4b5cd transparent}#sidebar h1{font-size:25px;margin:13px 0 16px}#sidebar .primary{margin-top:20px}.chapter-progress{margin-top:15px;color:#a294aa;font-size:10px}.chapter-progress>div{display:flex;gap:4px;margin-top:9px}.chapter-progress i{height:5px;flex:1;background:#e7dfe9;border-radius:2px}.chapter-progress i.filled{background:#ab95ba}.chapter-progress i.break{margin-left:7px}.life-heading{margin-top:26px}.life-heading>small{color:#a190ab;font-size:11px}.life-heading p{font-size:13px}.focus-tabs{display:flex;gap:5px;margin-top:24px}.focus-tabs button,.presets button{font-size:12px;flex:1;background:#f5eff8;min-height:38px}.focus-tabs button[aria-pressed=true],.presets button[aria-pressed=true]{background:#dfd2e9;border-color:#b59cc6}.living-note{font-size:10px;line-height:1.9;color:#a294ab;margin-top:24px;border-top:1px solid #e7dfe8;padding-top:18px}.balance{margin-top:27px;border-top:1px solid #e5dce8;padding-top:20px}.balance>div{font-size:11px;display:flex;gap:9px;color:#8c7c96}.balance>div>span:last-child{margin-left:auto}.balance b{font-weight:500}.balance section{display:flex;gap:15px;margin-top:17px}.trait{flex:1;display:grid;grid-template-columns:1fr auto;gap:7px}.trait span{font-size:11px;color:#82738d}.trait b{font-family:Georgia,serif;font-size:22px;color:#6c567d}.trait meter{width:100%;height:5px;grid-column:1/-1;appearance:none}.trait meter::-webkit-meter-bar{background:#e8e0eb;border:0;border-radius:5px}.trait meter::-webkit-meter-optimum-value{background:#ab96bb}.trait-1 meter::-webkit-meter-optimum-value{background:#a6b8a8}.trait-2 meter::-webkit-meter-optimum-value{background:#c8a2aa}.leave-choice{padding-left:0;margin-bottom:9px}.event-lead{font-size:13px;line-height:1.95}.choices{display:flex;flex-direction:column;gap:10px;margin-top:23px}.choices button{text-align:left;background:#f4eff7;padding:15px 13px}.choices button strong{font-size:13px;line-height:1.8;font-weight:500;display:block}.choices button span{font-size:11px;line-height:1.9;display:block;color:#9a8ba5;margin-top:8px}.choices button small{font-size:10px;line-height:1.8;display:block;margin-top:8px;color:#8e7c9b}.choices button.selected{background:#e6d9ee;border-color:#ac91bc}.choices button:disabled{opacity:.45}.result-change{border-left:3px solid #b098c0;background:#eee5f3;padding:14px;margin:22px 0}.result-change strong{font-size:12px;font-weight:500}.result-change p{font-size:11px;margin-top:9px}.result-change small{line-height:1.8;display:block;margin-top:7px}.meanwhile{border-top:1px solid #e8e0eb;padding-top:19px;margin-top:23px}.meanwhile p{font-size:11px;margin-top:10px}#screen{position:fixed;inset:0;pointer-events:none;z-index:20}.title-card{pointer-events:auto;position:absolute;left:6vw;top:14vh;width:390px}.title-card h1{font-size:69px;letter-spacing:13px;line-height:1.8;margin-top:15px}.title-line{font-family:SimSun,serif;color:#6d597b;font-size:22px;line-height:1.9;margin-top:14px}.title-sub{font-size:12px;margin-top:23px;color:#9a86a6}.title-actions{width:270px;display:flex;flex-direction:column;gap:11px;margin-top:35px}.title-actions .primary{font-size:14px}.title-actions>.text-button{align-self:flex-start}.edition{font-size:9px;letter-spacing:1px;color:#b09cba;line-height:2;margin-top:30px}.title-caption{position:absolute;right:6vw;bottom:7vh;text-align:right}.title-caption span{font-size:9px;letter-spacing:3px;color:#a38bae}.title-caption p{font-family:SimSun,serif;font-size:16px;color:#897197;margin-top:11px}body[data-mode=title] #stage{inset:0 0 0 28vw;border:0;border-radius:0;background:#e7e0ed;box-shadow:none}body[data-mode=title] #topbar,body[data-mode=setup] #topbar,body[data-mode=gate] #topbar,body[data-mode=transition] #topbar,body[data-mode=title] #labels,body[data-mode=setup] #labels,body[data-mode=end] #labels,body[data-mode=gate] #labels,body[data-mode=transition] #labels,body[data-mode=title] #sceneBadge,body[data-mode=setup] #sceneBadge,body[data-mode=end] #sceneBadge{display:none}.setup-card{position:absolute;left:5vw;top:6vh;bottom:5vh;width:450px;padding:24px 30px 0;background:#fcf9f2f5;border:1px solid #d3c5dc;border-radius:12px;pointer-events:auto;overflow:auto;scrollbar-width:thin;box-shadow:0 8px 30px #7d66860b}.setup-card>.back{padding:0;min-height:30px;font-size:11px}.setup-steps{display:flex;justify-content:space-between;font-size:9px;color:#b3a3be;padding:20px 0;border-bottom:1px solid #e1d5e7;margin-bottom:26px}.setup-steps .active{color:#826092}.setup-card h1{font-size:29px;margin:12px 0 14px}.setup-card p{font-size:12px}.context-cards{display:flex;flex-direction:column;gap:12px;margin-top:26px}.selection-card{display:flex;flex-direction:column;align-items:flex-start;gap:10px;text-align:left;padding:17px 16px;background:#f8f3f9}.selection-card strong{font-size:14px;font-weight:500}.selection-card span{font-size:11px;color:#a08daa;line-height:1.8}.selection-card small{font-size:10px}.selection-card.active{background:#e9dfee;border-color:#b69dc5}.setup-footer{position:sticky;bottom:0;padding:22px 0 18px;background:#fcf9f2;display:flex;align-items:center;gap:20px;margin-top:24px}.setup-footer .primary{width:190px;min-height:46px;font-size:13px}.setup-footer>span{font-size:10px;color:#a995b1}.setup-caption{position:absolute;bottom:7vh;right:6vw;font-family:SimSun,serif;font-size:15px;color:#947c9e}.presets{display:flex;gap:8px;margin-top:27px}.sliders{display:flex;flex-direction:column;gap:27px;margin-top:35px}.sliders label{display:grid;grid-template-columns:58px 1fr 22px;align-items:center;gap:15px;font-size:12px;color:#8a749a}.sliders input{width:100%;accent-color:#a58ab7}.sliders output{font-family:Georgia,serif;font-size:23px;color:#725382}.setup-balance{padding:22px;background:#eee6f2;text-align:center;font-family:Georgia,serif;font-size:26px;color:#8c6e9f;letter-spacing:6px;border-radius:9px;margin:30px 0 17px}.appearance{display:grid;grid-template-columns:1fr 1fr;gap:24px 18px;margin-top:30px}.appearance label,.drawer-card>label{font-size:12px;color:#937f9f;display:flex;flex-direction:column;gap:10px}.appearance select,.drawer-card select{min-height:40px;border:1px solid #d7c7e0;background:#f5eff8;border-radius:6px;padding:8px;color:#836a91;font-size:12px}.appearance input[type=color]{width:100%;height:40px;border:1px solid #d7c7e0;border-radius:6px;background:#f5eff8;padding:5px}.conditions{margin-top:25px;padding:17px 0;border-top:1px solid #e3d7e8;border-bottom:1px solid #e3d7e8;font-size:11px;color:#9980a6}.conditions p{font-size:11px;line-height:1.9;margin-top:15px}.setup-summary{font-size:11px;color:#9c85a8;margin-top:22px}body[data-mode=setup] #stage{inset:0 0 0 35vw;border:0;box-shadow:none}#portraitWrap{display:none;position:fixed;pointer-events:none;z-index:22;left:62vw;top:28vh;width:250px;height:340px;text-align:center}#portrait{width:250px;height:290px;display:block}#portraitWrap>span{display:block;color:#aa93b5;font-size:10px;letter-spacing:1px;line-height:1.8;margin-top:13px}body[data-mode=setup][data-page=appearance] #portraitWrap{display:block}body[data-mode=setup][data-page=appearance] #stage{opacity:.48}body[data-mode=setup][data-page=appearance] .setup-caption{display:none}.gate-card{position:absolute;left:8vw;top:14vh;width:435px;pointer-events:auto;background:#fbf8f1ed;padding:35px;border:1px solid #d5c5dd;border-radius:12px}.gate-card h1{font-size:35px;margin:15px 0 22px}.gate-card p{font-size:12px}.gate-carry{font-size:12px;line-height:2.3;padding:19px 18px;background:#ece3f1;margin:24px 0;border-left:3px solid #b19ac0;color:#937a9e}.gate-card>small{display:block;text-align:center;margin-top:13px;font-size:10px}body[data-mode=gate] #stage{inset:0;border:0;box-shadow:none}.transition-label{position:absolute;bottom:11vh;left:0;right:0;text-align:center;pointer-events:auto}.transition-label h1{font-size:44px;letter-spacing:10px}.transition-label p{font-size:12px;margin-top:7px}.transition-label button{margin-top:13px}body[data-mode=transition] #stage{inset:0;border:0;box-shadow:none}body[data-mode=transition] #cameraHint,body[data-mode=transition] #sceneBadge{display:none}body[data-mode=end] #stage{right:47vw;opacity:.66}body[data-mode=end] #portraitWrap{display:block;left:8vw;top:27vh;width:290px;height:360px}body[data-mode=end] #portrait{width:290px;height:338px}.review{position:absolute;pointer-events:auto;top:90px;bottom:22px;right:20px;width:44vw;background:var(--paper);border:1px solid #d7c9df;border-radius:12px;padding:29px 26px;overflow:auto;scrollbar-width:thin}.review>h1{font-size:32px;margin:13px 0 16px}.review>p{font-size:12px}.route-pair{display:flex;gap:14px;margin:25px 0}.route-pair figure{margin:0;flex:1;min-width:0}.route-pair svg{width:100%;max-height:145px;display:block}.route-pair figcaption{font-size:10px;text-align:center;color:#a38baf;margin-top:7px}.final-form{padding:19px;background:#eee5f2;border-radius:8px;margin:22px 0}.final-form strong{font-size:14px;font-weight:400}.final-form small{font-size:11px;margin-left:8px}.final-form p{font-size:11px;margin-top:11px}.end-log,.comparison details{font-size:12px;margin:22px 0;color:#917a9e}.review article{padding:17px 0;border-bottom:1px solid #e8dfea}.review article h3{font-size:13px;font-weight:500;margin:9px 0}.review article p{font-size:11px;line-height:1.9}.review article small{line-height:1.9;display:block}.comparison{border-left:3px solid #c1a9c7;padding:14px 20px;background:#f2ebf4;margin:20px 0}.comparison p{font-size:11px;margin-top:12px}.comparison h2{font-size:20px}.comparison details p{font-size:10px}.review-actions{position:sticky;bottom:-29px;background:#fbf8f1ee;padding:15px 0 9px;margin-top:20px;display:flex;gap:12px;align-items:center}.review-actions .primary{width:auto;flex:1;font-size:12px;white-space:nowrap}.review-actions .text-button{font-size:11px;white-space:nowrap}.final-caption{position:absolute;left:7vw;bottom:9vh;font-size:24px;font-family:SimSun,serif;color:#94749e}.final-caption span{display:block;font-family:sans-serif;font-size:10px;margin-top:15px;letter-spacing:1px;color:#a58aaf}#drawer{position:fixed;inset:0;z-index:60;background:#4f405975;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);display:flex;justify-content:center;align-items:center;padding:25px}.drawer-card{background:var(--paper);border:1px solid #d5c4de;border-radius:12px;padding:25px;width:390px;max-height:85vh;overflow:auto;box-shadow:0 12px 60px #4f3e5820}.close-drawer{display:block;margin-left:auto;font-size:11px}.drawer-card h1{font-size:28px;margin:12px 0 29px}.drawer-card>label{margin:22px 0}.setting-row{width:100%;display:flex;justify-content:space-between;margin:20px 0;font-size:13px}.drawer-card .check-row{flex-direction:row;align-items:center}.check-row input{accent-color:#9778ad;width:16px;height:16px}.journal-card{width:560px}.journal-card article{padding:20px 0;border-bottom:1px solid #e4d7e9}.journal-card h2{font-size:20px;margin:10px 0}.journal-card p{font-size:12px}.journal-card .others{color:#a58cae;font-size:11px;margin-top:12px}.season-recovery{margin-top:22px;padding:17px;background:#eee5f2}#notice{position:fixed;bottom:30px;left:50%;transform:translate(-50%,15px);padding:12px 22px;background:#79618c;color:#fff;font-size:12px;line-height:1.8;border-radius:8px;opacity:0;pointer-events:none;z-index:80;transition:opacity .2s,transform .2s;max-width:80vw}#notice.show{opacity:1;transform:translate(-50%)}@media(max-width:1100px){.wordmark small{display:none}#stage{right:337px}#sidebar{width:299px;padding:20px 18px}#chapterName{font-size:9px}.title-card{left:4vw;width:340px}.title-card h1{font-size:57px}.title-line{font-size:20px}.setup-card{left:3vw;width:400px;padding:21px 24px 0}.setup-card h1{font-size:27px}body[data-mode=setup] #stage{left:38vw}.setup-caption{right:4vw;font-size:12px}.review{width:46vw;padding:24px 20px}.review-actions .primary{font-size:10px}.final-caption{font-size:20px}.review>h1{font-size:28px}}@media(max-height:760px){.title-card{top:7vh}.title-card h1{font-size:53px;margin-top:4px}.title-line{font-size:18px}.title-sub{margin-top:15px}.title-actions{margin-top:23px}.edition{margin-top:15px}.setup-card{top:3vh;bottom:3vh}.setup-steps{padding:14px 0;margin-bottom:17px}.setup-card h1{font-size:25px}.context-cards{gap:9px;margin-top:19px}.selection-card{padding:13px;gap:7px}.setup-footer{margin-top:13px;padding:15px 0}.gate-card{top:6vh;padding:28px}.gate-card h1{font-size:29px}.gate-carry{margin:17px 0;padding:12px 15px}#sidebar{top:77px}.balance{margin-top:21px}.meanwhile{margin-top:17px}.choices{margin-top:18px}.choices button{padding:12px}.review{top:77px}}@media(max-width:760px){#stage{inset:75px 12px 42vh}#sidebar{inset:auto 12px 12px;width:auto;max-height:40vh;padding:17px}#topbar{left:13px;right:13px;gap:12px}.wordmark{font-size:20px}#chapterName{display:none}#topbar nav{gap:3px}#topbar nav button{font-size:10px;padding:7px 10px}.balance{margin-top:15px}.living-note,.life-heading p{display:none}.life-heading{margin-top:13px}#sidebar h1{font-size:21px;margin:8px 0}.title-card{left:7vw;top:8vh;width:330px}.title-sub{max-width:250px}body[data-mode=title] #stage{inset:25vh -25vw 0 0}.title-caption{display:none}.setup-card{inset:3vh 5vw auto;width:90vw;max-height:80vh}.setup-caption{display:none}body[data-mode=setup] #stage{inset:0;opacity:.22}body[data-mode=setup][data-page=appearance] #portraitWrap{display:none}.gate-card{left:5vw;top:10vh;width:90vw;max-height:85vh;overflow:auto}body[data-mode=end] #portraitWrap{display:none}body[data-mode=end] #stage{inset:0;opacity:.2}.review{left:4vw;right:4vw;width:92vw;top:75px}.final-caption{display:none}.review-actions .primary{font-size:12px}.review-actions .text-button{font-size:10px}}#stage{transition:none}.choices button span,.choices button small{color:#6f5d7b}.choices button.selected span,.choices button.selected small{color:#64516f}.choices button:disabled{opacity:.68}.selection-card span,.selection-card small{color:#715e7e}.selection-card.active span,.selection-card.active small{color:#64516f}.setup-card p,.appearance label,.sliders label,.setup-summary,.conditions{color:#715e7e}.trait span,.balance>div,.chapter-progress,.small-copy,.living-note{color:#796584}.title-sub,.edition,.setup-footer>span{color:#7d6789}.booting #stage{transition:none!important}@media(prefers-reduced-motion:reduce){*{transition:none!important}}#playLayout{display:contents}body:is([data-mode=life],[data-mode=choice],[data-mode=result]) #playLayout{position:fixed;inset:90px max(18px,calc((100vw - 1760px)/2)) 22px;display:grid;grid-template-columns:220px minmax(0,1fr) 280px;gap:18px}body:is([data-mode=life],[data-mode=choice],[data-mode=result]) #stage{position:relative;inset:auto;width:100%;height:100%;min-width:0;min-height:0}body:is([data-mode=life],[data-mode=choice],[data-mode=result]) #sidebar{position:relative;inset:auto;width:auto;max-height:none;padding:22px 20px;min-height:0}#identityBoard{min-height:0;overflow:auto;background:var(--paper);border:1px solid #d3c8dc;border-radius:10px;padding:20px 18px;scrollbar-width:thin;scrollbar-color:#c4b5cd transparent}#identityBoard>header{font-size:15px;display:flex;flex-direction:column;gap:8px;border-bottom:1px solid var(--line);padding-bottom:14px}#identityBoard>header span{font-size:10px;color:#796584;letter-spacing:1px}#identityBoard #portraitWrap{position:relative;display:block;inset:auto;width:100%;height:165px;z-index:auto}#identityBoard #portrait{display:block;width:145px;height:165px;margin:auto}#identityBoard #portraitWrap>span{display:none}.profile-context h2{font-size:21px;line-height:1.5}.profile-context p{font-size:11px;margin-top:6px}#identityBoard .balance{margin-top:20px;padding-top:17px}#identityBoard .balance>div{flex-wrap:wrap;gap:6px;font-size:11px}#identityBoard .balance>div>span:last-child{margin-left:0;flex-basis:100%;margin-top:8px}#identityBoard .balance section{display:grid;grid-template-columns:1fr;gap:18px}#identityBoard .trait span{font-size:12px;align-self:center}#identityBoard .trait b{font-size:25px}#identityBoard .trait meter{height:6px}#identityBoard .chapter-progress{padding-top:19px;border-top:1px solid var(--line);margin-top:23px;line-height:1.7}#sidebar h1{font-size:24px;line-height:1.5;margin:10px 0 14px}#sidebar .activity-info>p{font-size:12px;line-height:1.85}#sidebar .focus-tabs{margin-top:20px}#sidebar .focus-tabs button{padding:9px 7px}#sidebar .primary{margin-top:18px}.info-section{border-top:1px solid var(--line);padding-top:20px;margin-top:25px}.info-section h2{font-family:inherit;font-size:14px;font-weight:500;margin-bottom:14px}.parallel-info p{font-size:12px;line-height:1.85;margin-top:10px}.recent-info>button{display:block;width:100%;text-align:left;border:0;border-bottom:1px solid #e7dfe8;border-radius:0;padding:12px 0;background:none}.recent-info>button strong{display:block;font-size:12px;font-weight:400;line-height:1.7}.recent-info>button small{display:block;font-size:10px;margin-top:7px;color:#796584}#sidebar .event-lead{font-size:12px}#sidebar .result-change{padding:13px 12px;margin:19px 0}#sidebar .meanwhile{margin-top:20px}#choiceDialog{width:min(640px,calc(100vw - 40px));max-height:calc(100dvh - 40px);padding:0;border:1px solid #cdbed7;border-radius:12px;background:var(--paper);color:var(--ink);box-shadow:0 22px 80px #31233930;overflow:auto;scrollbar-width:thin;overscroll-behavior:contain}#choiceDialog::backdrop{background:#30263c61;-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px)}.decision-top{position:sticky;top:0;display:flex;align-items:center;justify-content:space-between;padding:14px 25px;border-bottom:1px solid var(--line);background:var(--paper);z-index:1}.decision-top>span{font-size:11px;color:#796584;letter-spacing:1px}.decision-top .text-button{font-size:12px;color:#6f5d7b}.decision-body{padding:24px 28px 28px}.decision-body h1{font-size:30px;line-height:1.5;margin:0 0 14px}.decision-body>.event-lead{font-size:14px;color:#6f5d7b;line-height:1.85}#choiceDialog .choices{gap:12px;margin-top:24px}#choiceDialog .choices button{position:relative;padding:17px 19px;background:#f4eff7;border-color:#dbcfe3;overflow:hidden}#choiceDialog .choices button strong{font-size:15px;color:#4d435c;line-height:1.65}#choiceDialog .choices button span,#choiceDialog .choices button small{font-size:12px;line-height:1.8;color:#6f5d7b;margin-top:9px}#choiceDialog .choices button:hover:not(:disabled){background:#e9dfef;border-color:#b49bc5}#choiceDialog .choices button.executing{opacity:1;background:#e6d9ee;border-color:#ac91bc}#choiceDialog .choices button.executing:after{content:"";position:absolute;bottom:0;left:0;height:3px;background:#9274a7;animation:choice-action .9s linear forwards}@keyframes choice-action{0%{width:0}to{width:100%}}@media(max-width:1190px)and (min-width:1001px){body:is([data-mode=life],[data-mode=choice],[data-mode=result]) #playLayout{grid-template-columns:188px minmax(0,1fr) 248px;gap:14px}#identityBoard{padding:17px 14px}body:is([data-mode=life],[data-mode=choice],[data-mode=result]) #sidebar{padding:20px 17px}}@media(max-width:1000px)and (min-width:701px){body:is([data-mode=life],[data-mode=choice],[data-mode=result]) #playLayout{grid-template-columns:minmax(0,1fr) 250px;grid-template-rows:130px minmax(0,1fr);gap:14px}#identityBoard{grid-column:1/-1;display:grid;grid-template-columns:130px 85px minmax(0,1fr);gap:12px;overflow:hidden;padding:12px 16px}#identityBoard>header{border:0;justify-content:center}#identityBoard #portraitWrap{height:106px}#identityBoard #portrait{width:90px;height:106px}#identityBody{display:grid;grid-template-columns:130px minmax(0,1fr);align-items:center;column-gap:18px}.profile-context h2{font-size:18px}#identityBoard .balance{border:0;margin:0;padding:0}#identityBoard .balance>div>span:last-child{margin:0 0 0 auto;flex-basis:auto}#identityBoard .balance section{display:flex;gap:14px;margin-top:12px}#identityBoard .trait span{font-size:10px}#identityBoard .trait b{font-size:21px}#identityBoard .chapter-progress{grid-column:1/-1;margin:0;padding-top:0;border:0}#identityBoard .chapter-progress>div{margin-top:5px}}@media(max-height:760px)and (min-width:1001px){body:is([data-mode=life],[data-mode=choice],[data-mode=result]) #playLayout{top:77px}#identityBoard #portraitWrap{height:140px}#identityBoard #portrait{width:123px;height:140px}#identityBoard .balance section{gap:12px}#identityBoard .chapter-progress{margin-top:18px;padding-top:15px}}@media(max-width:700px){body:is([data-mode=life],[data-mode=choice],[data-mode=result]){overflow:auto}body:is([data-mode=life],[data-mode=choice],[data-mode=result]) #playLayout{position:relative;inset:auto;display:flex;flex-direction:column;gap:14px;margin:76px 12px 18px}#identityBoard{display:flex;align-items:center;gap:12px;padding:12px;overflow:visible}#identityBoard>header{display:none}#profilePortraitSlot{width:72px;flex:none}#identityBoard #portraitWrap{height:86px}#identityBoard #portrait{width:72px;height:86px}#identityBody{min-width:0;flex:1}.profile-context h2{font-size:16px}.profile-context p{margin-top:2px;font-size:10px}#identityBoard .balance{border:0;margin:7px 0 0;padding:0}#identityBoard .balance>div{font-size:10px;flex-wrap:nowrap}#identityBoard .balance>div>span:last-child{margin:0 0 0 auto;flex-basis:auto}#identityBoard .balance section{display:flex;gap:10px;margin-top:8px}#identityBoard .trait span{font-size:10px}#identityBoard .trait b{font-size:19px}#identityBoard .chapter-progress{border:0;padding:0;margin-top:10px}body:is([data-mode=life],[data-mode=choice],[data-mode=result]) #stage{height:390px;flex:none}body:is([data-mode=life],[data-mode=choice],[data-mode=result]) #sidebar{overflow:visible;padding:20px}.decision-top{padding:10px 17px}.decision-body{padding:20px}.decision-body h1{font-size:26px}#choiceDialog{width:calc(100vw - 24px);max-height:calc(100dvh - 24px)}#choiceDialog .choices button{padding:15px}}@media(prefers-reduced-motion:reduce){#choiceDialog .choices button.executing:after{animation:none;width:100%}}@font-face{font-family:Audiowide;src:url(data:font/ttf;base64,AAEAAAARAQAABAAQR1BPU7aCM1sAAKxwAABhikdTVUKmNsSVAAEN/AAAAyBPUy8ya487mQAAAZgAAABgY21hcMIETfIAAAe8AAAFZGN2dCAAKgAAAAAOmAAAAAJmcGdtBlmcNwAADSAAAAFzZ2FzcAAXAAkAAKxgAAAAEGdseWYzCesVAAARgAAAXGxoZWFkCLOaSQAAARwAAAA2aGhlYRC6CQMAAAFUAAAAJGhtdHiK/YU1AAAB+AAABcRrZXJuO4s6VAAAbewAADASbG9jYf78F3YAAA6cAAAC5G1heHADiQJJAAABeAAAACBuYW1lbWZRqQAAngAAAAbbcG9zdGX47WgAAKTcAAAHhHByZXC4AAArAAAOlAAAAAQAAQAAAAEAxaYv1uVfDzz1AAkIAAAAAADLmUVkAAAAANUxCX/+Qf24CosH6wAAAAkAAgAAAAAAAAABAAAH6/24AAAK7P5B/u0KiwABAAAAAAAAAAAAAAAAAAABcQABAAABcQB8AAcAWAAEAAEAAAAAAAoAAAIAAXMAAgABAAMEggGQAAUAAAWaBTMAAAEfBZoFMwAAA9EAZgIAAAACAAUDAAAAAgAEoAAAb0AAAEoAAAAAAAAAAEFPRUYAQAAg+wIH6/24AAAH6wJIAAAAkwAAAAAEOwWaAAAAIAAEApoAAAAAAAACmgAAApoAAARAAEsG7gBPBV8AfANrAE0DawAOBFcAhARQAFMEkgB0BUYAVQdnAHIC1gBHBgUAagXBAIYGMABsBgEAgAX0AHoFIQBDBfgAagX0AFUEuwCIBVMATwatAHwGeQCVBfoAhAaWAJUGCwCRBegAlwaWAIQGywCZAjYAmQXgACgGggCZBeQAlwezAJcGxwCXBuIAagZzAJMG4gBqBp4AlwY6AGAFzwAoBqsAegYu//sIBQBHBkwAEAZAAFMFtQBEAuwAhgVGAFEC7ABHBToANQWGAHQE7gBkBZoAbgU6AGQEZwB+BYYAZAWgAH4CAQB+AgH+QQWIAH4CggB0Bv0AegWSAHoFdQBkBYYAdAWGAGQEXQB0BMsAVQSCADIFkgBqBWcAegdOAHoFkAAHBaAAdATPAEYDZQAWAhUAiANlAEcDXwBPBBUAZAcJAEsGcQB2BkQAfgbkAFkGcQBwBbMAkQTSAGYE4gB2BXUAVQXBAFkEcQBkBz4AaAOCAGIEdQBmBHUAZgQJANwECQEBBHUBGAR1AOEEdQCjBHUA6wR1ALEB3ABBAdgATwNMAEEDSABPAc0ALgM+AC4EdQDEBHUBYgR1ANIC2gBLBKYAfgSgAGoCqwCNBHUBugGkAFEBzQAuAgMAPQHyAHgB/wBoBUoAUQYPAGAGUABgAeoAVwdZAHIDFwB8Az4AbAMPAGAF1gBHAbMAYAQ0AEcENABmA3EAHgVzAH4FEQBuBUoAfgqMAHwItwA1COwAZArsAGoHjABVBZwAfAWcAHwGbQB0BY4AWwWSAEEFkgBZBBsAdAdOAHQDfgBBA34AWQQTABwJ2ABPAgEAfgWQAH4CmgAABVsAjwG1AFkGjAA3A60AOQY6AGAEywBVBkAAUwWgAHQFtQBEBM8ARgatAHwGrQB8BfoAhAYLAJEGxwCXBuIAagarAHoFOgA1BToANQU6ADUFOgA1BToANQU6ADUE7gBkBToAZAU6AGQFOgBkBToAZAIBAH4CAf74AgH/LgIB/5oFkgB6BXUAZAV1AGQFdQBkBXUAZAV1AGQFkgBqBZIAagWSAGoFkgBqBq0AfAatAHwG4gBqBaAAdAZAAFMGrQB8BgsAkQatAHwGCwCRBgsAkQI2AJkCNv9IAjb/tAI2/wkG4gBqBuIAagbiAGoGqwB6BqsAegarAHoHgAAsBYYAZAZ+AJkEdQBRBiwAfgatAH4BfgAqAYgAOQGGAEUEkgB0A4IARwIB/kEGrQB8Bq0AfAatAHwF+gCEBfoAhAX6AIQF+gCEBpYAlQeAACwGCwCRBgsAkQYLAJEGCwCRBgsAkQaWAIQGlgCEBpYAhAaWAIQGywCZBssAMgI2/5MCNv/NAjb/hQI2ACoCNgCZB9oAmQXgACgGggCZBeQAlwXkAJcG2ACXBeQAlwbHAJcGxwCXBscAlwbHAJcG4gBqBuIAagbiAGoGngCXBp4AlwaeAJcGOgBgBjoAYAY6AGAFzwAoBc8AKAXPACgGqwB6BqsAegarAHoGqwB6BqsAegarAHoIBQBHCAUARwgFAEcIBQBHBkAAUwZAAFMFtQBEBbUARAqMAHwG5ABZBToANQU6ADUFOgA1BO4AZATuAGQE7gBkBO4AZAbPAGUFhgBkBToAZAU6AGQFOgBkBToAZAU6AGQFhgBkBYYAZAWGAGQFhgBkBaAAfgWg/+cCAf95AgH/swIB/2sCAQAU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AyZTWLBAG7AAWYqKILADJlNYIyGwgIqKG4ojWSCwAyZTWCMhuADAioobiiNZILADJlNYIyG4AQCKihuKI1kgsAMmU1gjIbgBQIqKG4ojWSC4AAMmU1iwAyVFuAGAUFgjIbgBgCMhG7ADJUUjISMhWRshWUQtuAAJLEtTWEVEGyEhWS0AuAAAKwAqAAAAAAAAAAAAAAAAAEYAwAESAUIBcgGUAa4BvAHMAj4CTgKKArgC1AMMA1gDdAPeBCwEQASKBLwFDgU4BXIFngW+BfwGFgYkBkAGYAZ2BqwG1AcaB1YHogfgCCIINghgCH4ItAjWCQwJNAlYCWYJiAnECf4KJgpeCpwKwAsICywLQgtmC4oLpAvcDAQMQgx8DLQM0g0UDS4NVg1+Db4N4A4SDjoOhg6UDuQO/A8mD2AP3hBAEJwQ2hECEUYRiBHUEgQSSBKGEqYSuhLOEwATLBNcE3YTnhOsE9wT6hP4FA4UJBQyFEgUWBRoFKQU2hT4FQgVKhVMFWwVehWiFdwWBBZOFooWuhbKFxAXNhdgF3YXrBe6F9YX9BgQGB4YThjCGQgZcBnaGjoaihsEG4YbxBwKHDocahx4HIYcohy+HM4dfB2KHcIdwh4cHj4eZB6OHpoeph6yHr4eyh7WHuIe7h9CH04fWh9mH3Iffh+KH5Yfoh+uH7ogDCAYICQgMCA8IEggVCBgIGwgeCCEIJAgnCCoILQgwCDMINgg5CDwIPwhCCEUISAhLCE4IUQhUCFcIWghdCGAIYwhmCGkIbAhvCHIIdQiGiJqIqgi/CMsI2AjbiN8I4ojmCPoJAQkECQcJHAkfCSIJJQkoCSsJLQkwCTMJNglJiUyJT4lSiVWJWIlbiWYJaQlsCW8Jewl+CYEJhAmHCYoJjQmQCZMJlgmZCZwJp4mqia2JsImzibaJuYm8ib+J2gndCeAJ6AnrCe4J8Qn0CfcKCgoNChAKEwoWChkKHAofCiIKJQooCisKLgpFikiKS4pOilGKVIpkimeKaoptioWKiIqLio6KkYqUipeKowqmCqkKrAq5iryKv4rCisuKzorRitSK14rait2K4IrjivGK9Ir3ivqK/YsAiwOLBosJiyQLJwsqCzOLNos5izyLP4tCi1ULWAtbC14LYQtkC2cLagttC3ALcwt6i4ALg4uNgABAEsAAAP1BZoAMgAAARQOBCMV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ACQALP5eACQALf9kACQALv6aACQAL/9iACQAMf7TACQANP7+ACQASf7jACQASv+YACQAa/9EACQAbP9CACQAbf9EACQAbv9CACQAhf81ACQAh/81ACQAlf8XACQAmf+BACQAmv+BACQAo/97ACQAqP7TACQAsv9kACQAyP+YACQAyf+YACQAyv+YACQAy/+YACQA0P7TACQA3f9kACQA3v9kACQA3/9kACQBGf5eACQBGv5eACQBG/5eACQBHP9kACQBHf9kACQBHv9kACQBH/9kACQBIP9kACQBIf9kACQBIv9iACQBI/9iACQBJP9iACQBJf9iACQBJv7TACQBJ/7TACQBWv7jACQBXP7jACQBXf+YACQBXv+YACQBX/+YACQBYP+YACQBYf+YACQBYv+YACcACP95ACgACP99ACgADP93ACgAIv8SACgAMP+cACgAb/+PACgAcP+PACgAef+PACgAev+PACgA4/+PACgBBv8SACsACP+eACsBWv+iACsBXP+iACwAC/+BACwADP83ACwAGf+aACwAIv5eACwANv6oACwAOP8XACwAOf8XACwAOv8XACwAPP8ZACwAQv9mACwAQ/9mACwARP8XACwARf8KACwARv8XACwAR/8KACwASP8xACwASf+iACwASv+RACwAS/+RACwATP+TACwATf91ACwATv+YACwAT/9vACwAXf8XACwAb/9vACwAcP9vACwAef9vACwAev9vACwAjf+LACwAjv+aACwAj/6oACwAkP8XACwAl/9KACwAmP+PACwAmf+BACwAmv+BACwAm/9KACwAnP+PACwAp/8xACwAqf+YACwAq/9vACwArP+aACwArf+aACwAs/6oACwAtP6oACwAtf6oACwAtv6oACwAt/6oACwAuP6oACwAuf8XACwAuv8XACwAu/8XACwAvP8XACwAvf8XACwAwv9mACwAw/8XACwAxP8XACwAxf8XACwAxv8XACwAx/8XACwAyP+RACwAyf+RACwAyv+RACwAy/+RACwAzP+aACwAzf+aACwAz/+YACwA0f+aACwA0/+aACwA4f8XACwA4/9vACwA7P+aACwA7f+aACwA7v+aACwBBv5eACwBKv+aACwBLP6oACwBLf6oACwBLv6oACwBL/8XACwBMP8XACwBMf8XACwBMv8XACwBM/8XACwBNf8XACwBNv8XACwBN/8XACwBOP8XACwBOf8XACwBOv8ZACwBO/8ZACwBPP8ZACwBPf8ZACwBTP9mACwBTf9mACwBTv9mACwBUP9mACwBUf8XACwBUv8XACwBU/8XACwBVP8KACwBVf8KACwBVv8KACwBV/8xACwBWP8xACwBWf8xACwBXf+RACwBXv+RACwBX/+RACwBYP+RACwBYf+RACwBYv+RACwBY/+TACwBZP+TACwBZf+TACwBZv+TACwBZ/+YACwBaP+YACwBaf9vACwBav9vACwBa/6oACwBbP8XAC4ADP8vAC4AIv6RAC4ANv8KAC4AOP9vAC4AOf9vAC4AOv9vAC4APP9vAC4AQv+FAC4AQ/+FAC4ARP9vAC4ARf9xAC4ARv9vAC4AR/9xAC4ASP9zAC4AXf9vAC4Ab/9tAC4AcP9tAC4Aef9tAC4Aev9tAC4Aj/8KAC4AkP9vAC4Al/+RAC4Am/+RAC4Ap/9zAC4As/8KAC4AtP8KAC4Atf8KAC4Atv8KAC4At/8KAC4AuP8KAC4Auf9vAC4Auv9vAC4Au/9vAC4AvP9vAC4Avf9vAC4Awv+FAC4Aw/9vAC4AxP9vAC4Axf9vAC4Axv9vAC4Ax/9vAC4A4f9vAC4A4/9tAC4BBv6RAC4BLP8KAC4BLf8KAC4BLv8KAC4BL/9vAC4BMP9vAC4BMf9vAC4BMv9vAC4BM/9vAC4BNf9vAC4BNv9vAC4BN/9vAC4BOP9vAC4BOf9vAC4BOv9vAC4BO/9vAC4BPP9vAC4BPf9vAC4BTP+FAC4BTf+FAC4BTv+FAC4BUP+FAC4BUf9vAC4BUv9vAC4BU/9vAC4BVP9xAC4BVf9xAC4BVv9xAC4BV/9zAC4BWP9zAC4BWf9zAC4Ba/8KAC4BbP9vAC8AIv9iAC8BBv9iADAAC/+eADAASf+aADAAk/+iADAAmf+eADAAmv+eADABWv+aADABXP+aADEADP9WADEAIv7TADEANv93ADEAb/9gADEAcP9gADEAef9gADEAev9gADEAj/93ADEAs/93ADEAtP93ADEAtf93ADEAtv93ADEAt/93ADEAuP93ADEA4/9gADEBBv7TADEBLP93ADEBLf93ADEBLv93ADEBa/93ADMAPwHZADMA6wHZADMBRQHZADQAEf9kADQALP83ADQALf+eADQALv8xADQAMf9WADQASf+WADQAbP9gADQAbv9gADQAhf9WADQAh/9WADQAqP9WADQAsv+eADQA0P9WADQA3f+eADQA3v+eADQA3/+eADQBGf83ADQBGv83ADQBG/83ADQBHP+eADQBHf+eADQBHv+eADQBH/+eADQBIP+eADQBIf+eADQBJv9WADQBJ/9WADQBWv+WADQBXP+WADYACP+LADYANP+JADcACP+LADcANP+HADoACP9mADoANP+cADoAUv+iADsADP9WADsANv9UADsAb/9QADsAcP9QADsAef9QADsAev9QADsAj/9UADsAs/9UADsAtP9UADsAtf9UADsAtv9UADsAt/9UADsAuP9UADsA4/9QADsBLP9UADsBLf9UADsBLv9UADsBa/9UADwANP+DAD0ANP+BAEAAl/+TAEAAm/+TAEEAo/8tAEIANP+DAEMANP95AEQACP+LAEQANP+HAEUACP+LAEUANP+HAEYANP+DAEcACP91AEcADP9WAEcANv9UAEcAb/9QAEcAcP9QAEcAef9QAEcAev9QAEcAj/9UAEcAs/9UAEcAtP9UAEcAtf9UAEcAtv9UAEcAt/9UAEcAuP9UAEcA4/9QAEcBLP9UAEcBLf9UAEcBLv9UAEcBa/9UAEgACP+aAEgANP+LAEkACP93AEkADP9vAEkANv+BAEkAb/+LAEkAcP+LAEkAef+LAEkAev+LAEkAj/+BAEkAs/+BAEkAtP+BAEkAtf+BAEkAtv+BAEkAt/+BAEkAuP+BAEkA4/+LAEkBLP+BAEkBLf+BAEkBLv+BAEkBa/+BAEoACP+gAEsADP9kAEsAb/95AEsAcP95AEsAef95AEsAev95AEsA4/95AEwADP9YAEwAb/9zAEwAcP9zAEwAef9zAEwAev9zAEwA4/9zAE0Al/+YAE0Am/+YAFAAPwHbAFAA6wHbAFABRQHbAFEAPwGcAFEA6wGcAFEBRQGcAFIACP+YAFUAFP+aAFcACP+cAFcAGP+RAFcALP85AFcALv89AFcAMf99AFcANP9vAFcASf+YAFcAlf+eAFcAqP99AFcA0P99AFcBGf85AFcBGv85AFcBG/85AFcBJv99AFcBJ/99AFcBWv+YAFcBXP+YAFgACP95AF0ACP+LAF0ANP+HAGsAIv8tAGsANv+eAGsAb/8ZAGsAcP8ZAGsAef8ZAGsAev8ZAGsAj/+eAGsAs/+eAGsAtP+eAGsAtf+eAGsAtv+eAGsAt/+eAGsAuP+eAGsA4/8ZAGsBBv8tAGsBLP+eAGsBLf+eAGsBLv+eAGsBa/+eAGwADP9KAGwAIv8jAGwANv+YAGwAb/8OAGwAcP8OAGwAef8OAGwAev8OAGwAj/+YAGwAs/+YAGwAtP+YAGwAtf+YAGwAtv+YAGwAt/+YAGwAuP+YAGwA4/8OAGwBBv8jAGwBLP+YAGwBLf+YAGwBLv+YAGwBa/+YAG0AIv8tAG0ANv+eAG0Ab/8ZAG0AcP8ZAG0Aef8ZAG0Aev8ZAG0Aj/+eAG0As/+eAG0AtP+eAG0Atf+eAG0Atv+eAG0At/+eAG0AuP+eAG0A4/8ZAG0BBv8tAG0BLP+eAG0BLf+eAG0BLv+eAG0Ba/+eAG4ADP9KAG4AIv8jAG4ANv+YAG4Ab/8OAG4AcP8OAG4Aef8OAG4Aev8OAG4Aj/+YAG4As/+YAG4AtP+YAG4Atf+YAG4Atv+YAG4At/+YAG4AuP+YAG4A4/8OAG4BBv8jAG4BLP+YAG4BLf+YAG4BLv+YAG4Ba/+YAG8AC/91AG8AEf95AG8ALP9vAG8ALv9vAG8AMf9gAG8Aa/8xAG8AbP8tAG8Abf8xAG8Abv8tAG8Ahf8hAG8Ah/8hAG8Amf91AG8Amv91AG8AqP9gAG8A0P9gAG8BGf9vAG8BGv9vAG8BG/9vAG8BJv9gAG8BJ/9gAHAAC/91AHAAEf95AHAALP9vAHAALv9vAHAAMf9gAHAAa/8xAHAAbP8tAHAAbf8xAHAAbv8tAHAAhf8hAHAAh/8hAHAAmf91AHAAmv91AHAAqP9gAHAA0P9gAHABGf9vAHABGv9vAHABG/9vAHABJv9gAHABJ/9gAHkAC/91AHkAEf95AHkALP9vAHkALv9vAHkAMf9gAHkAa/8xAHkAbP8tAHkAbf8xAHkAbv8tAHkAhf8hAHkAh/8hAHkAmf91AHkAmv91AHkAqP9gAHkA0P9gAHkBGf9vAHkBGv9vAHkBG/9vAHkBJv9gAHkBJ/9gAHoAC/91AHoAEf95AHoALP9vAHoALv9vAHoAMf9gAHoAa/8xAHoAbP8tAHoAbf8xAHoAbv8tAHoAhf8hAHoAh/8hAHoAmf91AHoAmv91AHoAqP9gAHoA0P9gAHoBGf9vAHoBGv9vAHoBG/9vAHoBJv9gAHoBJ/9gAH0ALP+HAH0APwG6AH0A6wG6AH0BGf+HAH0BGv+HAH0BG/+HAH0BRQG6AH4AGf+YAH4AGv+TAH4AG/9/AH4AHP+TAH4AHf99AH4AHv+TAH4AH/9/AH4AIP+TAH4AIf+TAH4AI/+TAH4AJP+TAH4AJf+TAH4AJv+TAH4AJ/9/AH4AKP+WAH4AKf9/AH4AKv+TAH4AK/+eAH4ALP8SAH4ALf93AH4ALv89AH4AL/9kAH4AMf91AH4AMv+PAH4ANv+DAH4AN/99AH4AOP99AH4AOf99AH4AOv99AH4AO/+YAH4APP+DAH4APf+YAH4APv+YAH4APwHZAH4AQP+YAH4AQf99AH4AQv+YAH4AQ/+YAH4ARP99AH4ARv99AH4AR/+aAH4ASP+eAH4ASf9/AH4ASv99AH4AS/+DAH4ATP+BAH4ATv+BAH4AT/+JAH4AV/+YAH4AWP9/AH4AXf99AH4Ajv+YAH4Aj/+DAH4AkP99AH4Akf9/AH4An/+YAH4ApP+TAH4Apf99AH4Apv+eAH4Ap/+eAH4AqP91AH4Aqf+BAH4Aqv+PAH4Aq/+JAH4ArP+YAH4Arf+YAH4Arv9/AH4Ar/99AH4AsP+TAH4Asf9/AH4Asv93AH4As/+DAH4AtP+DAH4Atf+DAH4Atv+DAH4At/+DAH4AuP+DAH4Auf99AH4Auv99AH4Au/99AH4AvP99AH4Avf99AH4Avv+YAH4Av/+YAH4AwP+YAH4Awf+YAH4Awv+YAH4Aw/99AH4AxP99AH4Axf99AH4Axv99AH4Ax/99AH4AyP99AH4Ayf99AH4Ayv99AH4Ay/99AH4AzP+YAH4Azf+YAH4Azv9/AH4Az/+BAH4A0P91AH4A0f+YAH4A0v99AH4A0/+YAH4A1P99AH4A1f99AH4A1v+TAH4A1/+TAH4A2P+TAH4A2f+TAH4A2v9/AH4A2/9/AH4A3P9/AH4A3f93AH4A3v93AH4A3/93AH4A4P+TAH4A4f99AH4A6wHZAH4A7P+YAH4A7f+YAH4A7v+YAH4A7/9/AH4A8P9/AH4A8f9/AH4A8v9/AH4A8/+TAH4A9P+TAH4A9f99AH4A9v99AH4A9/99AH4A+P99AH4A+f99AH4A+v9/AH4A+/9/AH4A/P9/AH4A/f9/AH4A/v+TAH4A//+TAH4BAP+TAH4BAf+TAH4BAv+TAH4BA/+TAH4BBP+TAH4BB/+TAH4BCP+TAH4BCf+TAH4BDP+TAH4BDf+TAH4BDv+TAH4BD/+TAH4BEP9/AH4BEf9/AH4BEv9/AH4BE/+TAH4BFP+TAH4BFf+TAH4BFv+eAH4BF/+eAH4BGP+eAH4BGf8SAH4BGv8SAH4BG/8SAH4BHP93AH4BHf93AH4BHv93AH4BH/93AH4BIP93AH4BIf93AH4BIv9kAH4BI/9kAH4BJP9kAH4BJf9kAH4BJv91AH4BJ/91AH4BKP+PAH4BKf+PAH4BKv+YAH4BK/9/AH4BLP+DAH4BLf+DAH4BLv+DAH4BL/99AH4BMP99AH4BMf99AH4BMv99AH4BM/99AH4BNf99AH4BNv99AH4BN/99AH4BOP99AH4BOf99AH4BOv+DAH4BO/+DAH4BPP+DAH4BPf+DAH4BPv+YAH4BP/+YAH4BQP+YAH4BQf+YAH4BQv+YAH4BQ/+YAH4BRQHZAH4BRv+YAH4BR/+YAH4BSP99AH4BSf99AH4BTP+YAH4BTf+YAH4BTv+YAH4BUP+YAH4BUf99AH4BUv99AH4BU/99AH4BVP+aAH4BVf+aAH4BVv+aAH4BV/+eAH4BWP+eAH4BWf+eAH4BWv9/AH4BXP9/AH4BXf99AH4BXv99AH4BX/99AH4BYP99AH4BYf99AH4BYv99AH4BY/+BAH4BZP+BAH4BZf+BAH4BZv+BAH4BZ/+BAH4BaP+BAH4Baf+JAH4Bav+JAH4Ba/+DAH4BbP99AIUADP9WAIUAIv81AIUANv+iAIUAb/8hAIUAcP8hAIUAef8hAIUAev8hAIUAj/+iAIUAs/+iAIUAtf+iAIUAtv+iAIUAt/+iAIUAuP+iAIUA4/8hAIUBBv81AIUBLP+iAIUBa/+iAIcADP9WAIcAIv81AIcAb/8hAIcAcP8hAIcAef8hAIcAev8hAIcAj/+iAIcAtv+iAIcA4/8hAIcBBv81AIcBLP+iAIcBLf+iAIcBLv+iAI0ALP+PAI0BGf+PAI0BGv+PAI0BG/+PAJUAIv89AJUBBv89AJcALP+PAJcBGf+PAJcBGv+PAJcBG/+PAJgALP9KAJgALv+RAJgATf+YAJgBGf9KAJgBGv9KAJgBG/9KAJkAIv+BAJkALP+BAJkAMP+eAJkBBv+BAJkBGf+BAJkBGv+BAJkBG/+B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ARkAIv5eARkANv6oARkAOP8XARkAOf8XARkAOv8XARkAPP8ZARkAQv9mARkAQ/9mARkARP8XARkARf8KARkARv8XARkAR/8KARkASP8xARkASf+iARkASv+RARkAS/+RARkATP+TARkATf91ARkATv+YARkAT/9vARkAXf8XARkAb/9vARkAcP9vARkAef9vARkAev9vARkAjf+LARkAjv+aARkAj/6oARkAkP8XARkAl/9KARkAmP+PARkAmf+BARkAmv+BARkAm/9KARkAnP+PARkAp/8xARkAqf+YARkAq/9vARkArP+aARkArf+aARkAs/6oARkAtP6oARkAtf6oARkAtv6oARkAt/6oARkAuP6oARkAuf8XARkAuv8XARkAu/8XARkAvP8XARkAvf8XARkAwv9mARkAw/8XARkAxP8XARkAxf8XARkAxv8XARkAx/8XARkAyP+RARkAyf+RARkAyv+RARkAy/+RARkAzP+aARkAzf+aARkAz/+YARkA0f+aARkA0/+aARkA4f8XARkA4/9vARkA7P+aARkA7f+aARkA7v+aARkBBv5eARkBKv+aARkBLP6oARkBLf6oARkBLv6oARkBL/8XARkBMP8XARkBMf8XARkBMv8XARkBM/8XARkBNf8XARkBNv8XARkBN/8XARkBOP8XARkBOf8XARkBOv8ZARkBO/8ZARkBPP8ZARkBPf8ZARkBTP9mARkBTf9mARkBTv9mARkBUP9mARkBUf8XARkBUv8XARkBU/8XARkBVP8KARkBVf8KARkBVv8KARkBV/8xARkBWP8xARkBWf8xARkBWv+iARkBXP+iARkBXf+RARkBXv+RARkBX/+RARkBYP+RARkBYf+RARkBYv+RARkBY/+TARkBZP+TARkBZf+TARkBZv+TARkBZ/+YARkBaP+YARkBaf9vARkBav9vARkBa/6oARkBbP8XARoAC/+BARoADP83ARoAGf+aARoAIv5eARoANv6oARoAOP8XARoAOf8XARoAOv8XARoAPP8ZARoAQv9mARoAQ/9mARoARP8XARoARf8KARoARv8XARoAR/8KARoASP8xARoASf+iARoASv+RARoAS/+RARoATP+TARoATf91ARoATv+YARoAT/9vARoAXf8XARoAb/9vARoAcP9vARoAef9vARoAev9vARoAjf+LARoAjv+aARoAj/6oARoAkP8XARoAl/9KARoAmP+PARoAmf+BARoAmv+BARoAm/9KARoAnP+PARoAp/8xARoAqf+YARoAq/9vARoArP+aARoArf+aARoAs/6oARoAtP6oARoAtf6oARoAtv6oARoAt/6oARoAuP6oARoAuf8XARoAuv8XARoAu/8XARoAvP8XARoAvf8XARoAwv9mARoAw/8XARoAxP8XARoAxf8XARoAxv8XARoAx/8XARoAyP+RARoAyf+RARoAyv+RARoAy/+RARoAzP+aARoAzf+aARoAz/+YARoA0f+aARoA0/+aARoA4f8XARoA4/9vARoA7P+aARoA7f+aARoA7v+aARoBBv5eARoBKv+aARoBLP6oARoBLf6oARoBLv6oARoBL/8XARoBMP8XARoBMf8XARoBMv8XARoBM/8XARoBNf8XARoBNv8XARoBN/8XARoBOP8XARoBOf8XARoBOv8ZARoBO/8ZARoBPP8ZARoBPf8ZARoBTP9mARoBTf9mARoBTv9mARoBUP9mARoBUf8XARoBUv8XARoBU/8XARoBVP8KARoBVf8KARoBVv8KARoBV/8xARoBWP8xARoBWf8xARoBWv+iARoBXP+iARoBXf+RARoBXv+RARoBX/+RARoBYP+RARoBYf+RARoBYv+RARoBY/+TARoBZP+TARoBZf+TARoBZv+TARoBZ/+YARoBaP+YARoBaf9vARoBav9vARoBa/6oARoBbP8XARsAC/+BARsADP83ARsAGf+aARsAIv5eARsANv6oARsAOP8XARsAOf8XARsAOv8XARsAPP8ZARsAQv9mARsAQ/9mARsARP8XARsARf8KARsARv8XARsAR/8KARsASP8xARsASf+iARsASv+RARsAS/+RARsATP+TARsATf91ARsATv+YARsAT/9vARsAXf8XARsAb/9vARsAcP9vARsAef9vARsAev9vARsAjf+LARsAjv+aARsAj/6oARsAkP8XARsAl/9KARsAmP+PARsAmf+BARsAmv+BARsAm/9KARsAnP+PARsAp/8xARsAqf+YARsAq/9vARsArP+aARsArf+aARsAs/6oARsAtP6oARsAtf6oARsAtv6oARsAt/6oARsAuP6oARsAuf8XARsAuv8XARsAu/8XARsAvP8XARsAvf8XARsAwv9mARsAw/8XARsAxP8XARsAxf8XARsAxv8XARsAx/8XARsAyP+RARsAyf+RARsAyv+RARsAy/+RARsAzP+aARsAzf+aARsAz/+YARsA0f+aARsA0/+aARsA4f8XARsA4/9vARsA7P+aARsA7f+aARsA7v+aARsBBv5eARsBKv+aARsBLP6oARsBLf6oARsBLv6oARsBL/8XARsBMP8XARsBMf8XARsBMv8XARsBM/8XARsBNf8XARsBNv8XARsBN/8XARsBOP8XARsBOf8XARsBOv8ZARsBO/8ZARsBPP8ZARsBPf8ZARsBTP9mARsBTf9mARsBTv9mARsBUP9mARsBUf8XARsBUv8XARsBU/8XARsBVP8KARsBVf8KARsBVv8KARsBV/8xARsBWP8xARsBWf8xARsBWv+iARsBXf+RARsBXv+RARsBX/+RARsBYP+RARsBYf+RARsBYv+RARsBY/+TARsBZP+TARsBZf+TARsBZv+TARsBZ/+YARsBaP+YARsBaf9vARsBav9vARsBa/6oARsBbP8XASIAIv9iASIBBv9iASMAIv9iASMBBv9iASQAIv9iASQBBv9iASUAIv9iASUBBv9iASYADP9WASYAIv7TASYANv93ASYAb/9gASYAcP9gASYAef9gASYAev9gASYAj/93ASYAs/93ASYAtP93ASYAtf93ASYAtv93ASYAt/93ASYAuP93ASYA4/9gASYBBv7TASYBLP93ASYBLf93ASYBLv93ASYBa/93AScADP9WAScAIv7TAScANv93AScAb/9gAScAcP9gAScAef9gAScAev9gAScAj/93AScAs/93AScAtP93AScAtf93AScAtv93AScAt/93AScAuP93AScA4/9gAScBBv7TAScBLP93AScBLf93AScBLv93AScBa/93ASsACP95ASwACP+LASwANP+JAS0ACP+LAS0ANP+JAS4ACP+LAS4ANP+JATUACP9mATUANP+cATYACP9mATYANP+cATcACP9mATcANP+cATcAUv+iATgACP9mATgANP+cATgAUv+iATkACP9mATkANP+cATkAUv+iAToANP+DATsANP+DATwANP+DAT0ANP+DAT4ANP+BAT8ANP+BAUYAl/+TAUYAm/+TAUcAl/+TAUcAm/+TAUgAo/8tAUkAo/8tAUwANP95AU0ANP95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dABpAGcAbQBhAEAAYQBzAHQAaQBnAG0AYQB0AGkAYwAuAGMAbwBtACkALAAgAHcAaQB0AGgAIABSAGUAcwBlAHIAdgBlAGQADQBGAG8AbgB0ACAATgBhAG0AZQAgACIAQQB1AGQAaQBvAHcAaQBkAGUAIgBBAHUAZABpAG8AdwBpAGQAZQBSAGUAZwB1AGwAYQByADEALgAwADAAMwA7AEEATwBFAEYAOwBBAHUAZABpAG8AdwBpAGQAZQAtAFIAZQBnAHUAbABhAHIAQQB1AGQAaQBvAHcAaQBkAGUAIABSAGUAZwB1AGwAYQByAFYAZQByAHMAaQBvAG4AIAAxAC4AMAAwADMAQQB1AGQAaQBvAHcAaQBkAGUALQBSAGUAZwB1AGwAYQByAEEAdQBkAGkAbwB3AGkAZABlACAAaQBzACAAYQAgAHQAcgBhAGQAZQBtAGEAcgBrACAAbwBmACAAQQBzAHQAaQBnAG0AYQB0AGkAYwAuAEEAcwB0AGkAZwBtAGEAdABpAGMAIAAoAEEATwBFAFQASQApAGgAdAB0AHAAOgAvAC8AdwB3AHcALgBhAHMAdABpAGcAbQBhAHQAaQBjAC4AYwBvAG0ALwBUAGgAaQBzACAARgBvAG4AdAAgAFMAbwBmAHQAdwBhAHIAZQAgAGkAcwAgAGwAaQBjAGUAbgBzAGUAZAAgAHUAbgBkAGUAcgAgAHQAaABlACAAUwBJAEwAIABPAHAAZQBuACAARgBvAG4AdAAgAEwAaQBjAGUAbgBzAGUALAANAFYAZQByAHMAaQBvAG4AIAAxAC4AMQAuACAAVABoAGkAcwAgAGwAaQBjAGUAbgBzAGUAIABpAHMAIABhAHYAYQBpAGwAYQBiAGwAZQAgAHcAaQB0AGgAIABhACAARgBBAFEAIABhAHQAOgANAGgAdAB0AHAAOgAvAC8AcwBjAHIAaQBwAHQAcwAuAHMAaQBsAC4AbwByAGcALwBPAEYATABoAHQAdABwADoALwAvAHMAYwByAGkAcAB0AHMALgBzAGkAbAAuAG8AcgBnAC8ATwBGAEwAAAIAAAAAAAD/ZgBmAAAAAAAAAAAAAAAAAAAAAAAAAAABcQAAAQIAAgADAAcACAAJAAsADAANAA4AEAASABMAFAAVABYAFwAYABkAGgAbABwAIAAiACQAJQAmACcAKAApACoAKwAsAC0ALgAvADAAMQAyADMANAA1ADYANwA4ADkAOgA7ADwAPQA+AD8AQABEAEUARgBHAEgASQBKAEsATABNAE4ATwBQAFEAUgBTAFQAVQBWAFcAWABZAFoAWwBcAF0AXgBfAGAAggCEAIUAhgCJAJEAlgCXAJ0AngChAKYAuAEDAMIA2ADhAN4A4ADdAN8A2wEEANkAtgC3ALQAtQDEAMUAQwCNAI4AgwCTAKQAhwDcABEADwAeAB0AowCiAPQA9QDxAPYA8wDyAAUABgAKAB8AIQBBAEIAYQAjAJAAoACxALAAiACKAIsAjACYAKkAqgCyALMAvgC/ALwAxgDXAO4ArACnAQUA4gDjAOQA5QDrAOwA5gDnAGIAYwBkAGUAZgBnAGgAaQBqAGsAbABtAG4AbwBwAHEAcgBzAHQAdQB2AHcAeAB5AHoAewB8AH0AfgB/AIAAgQCtAK4ArwC6ALsAxwDIAMkAygDLAMwAzQDOAM8A0ADRANMA1ADVANYA6QDqAO0AqwDAAMEBBgEHAQgBCQC9AQoBCwEMAQ0A/QEOAQ8A/wEQAREBEgETARQBFQEWARcA+AEYARkBGgEbARwBHQEeAR8BIAEhASIBIwEkASUBJgEnASgBKQEqASsBLAEtAS4BLwEwATEBMgEzAPsBNAE1ATYBNwE4ATkBOgE7ATwBPQE+AT8BQAFBAUIBQwFEAUUBRgFHAUgBSQD+AUoBSwEAAUwBTQFOAU8BUAFRAVIBUwD5AVQBVQFWAVcBWAFZAVoBWwFcAV0BXgFfAWABYQFiAWMBZAFlAWYBZwFoAWkBagFrAWwBbQFuAW8BcAD8AXEBcgFzAXQBdQF2AXcBeAF5AXoBewF8AX0BfgF/AYABgQGCAYMA8ADoAO8ABAUubnVsbARFdXJvBm1hY3Jvbg5wZXJpb2RjZW50ZXJlZAd1bmkwMzI2B3VuaTAzMTIHdW5pMDMxNQd1bmkwMEFECGRvdGxlc3NqB0FtYWNyb24GQWJyZXZlB0FvZ29uZWsLQ2NpcmN1bWZsZXgKQ2RvdGFjY2VudAZEY2Fyb24GRGNyb2F0B0VtYWNyb24GRWJyZXZlCkVkb3RhY2NlbnQHRW9nb25lawZFY2Fyb24LR2NpcmN1bWZsZXgKR2RvdGFjY2VudAxHY29tbWFhY2NlbnQLSGNpcmN1bWZsZXgESGJhcgZJdGlsZGUHSW1hY3JvbgZJYnJldmUHSW9nb25lawpJZG90YWNjZW50AklKC0pjaXJjdW1mbGV4DEtjb21tYWFjY2VudAZMYWN1dGUMTGNvbW1hYWNjZW50BExkb3QGTGNhcm9uBk5hY3V0ZQxOY29tbWFhY2NlbnQGTmNhcm9uA0VuZwdPbWFjcm9uBk9icmV2ZQ1PaHVuZ2FydW1sYXV0BlJhY3V0ZQxSY29tbWFhY2NlbnQGUmNhcm9uBlNhY3V0ZQtTY2lyY3VtZmxleAxUY29tbWFhY2NlbnQGVGNhcm9uBFRiYXIGVXRpbGRlB1VtYWNyb24GVWJyZXZlBVVyaW5nDVVodW5nYXJ1bWxhdXQHVW9nb25lawtXY2lyY3VtZmxleAZXZ3JhdmUGV2FjdXRlCVdkaWVyZXNpcwtZY2lyY3VtZmxleAZZZ3JhdmUGWmFjdXRlClpkb3RhY2NlbnQHQUVhY3V0ZQtPc2xhc2hhY3V0ZQdhbWFjcm9uBmFicmV2ZQdhb2dvbmVrC2NjaXJjdW1mbGV4CmNkb3RhY2NlbnQGZGNhcm9uBmRjcm9hdAdlbWFjcm9uBmVicmV2ZQplZG90YWNjZW50B2VvZ29uZWsGZWNhcm9uC2djaXJjdW1mbGV4Cmdkb3RhY2NlbnQMZ2NvbW1hYWNjZW50C2hjaXJjdW1mbGV4BGhiYXIGaXRpbGRlB2ltYWNyb24GaWJyZXZlB2lvZ29uZWsCaWoLamNpcmN1bWZsZXgMa2NvbW1hYWNjZW50DGtncmVlbmxhbmRpYwZsYWN1dGUMbGNvbW1hYWNjZW50Cmxkb3RhY2NlbnQGbGNhcm9uBm5hY3V0ZQxuY29tbWFhY2NlbnQGbmNhcm9uC25hcG9zdHJvcGhlA2VuZwdvbWFjcm9uBm9icmV2ZQ1vaHVuZ2FydW1sYXV0BnJhY3V0ZQxyY29tbWFhY2NlbnQGcmNhcm9uBnNhY3V0ZQtzY2lyY3VtZmxleAx0Y29tbWFhY2NlbnQGdGNhcm9uBHRiYXIGdXRpbGRlB3VtYWNyb24GdWJyZXZlBXVyaW5nDXVodW5nYXJ1bWxhdXQHdW9nb25lawt3Y2lyY3VtZmxleAZ3Z3JhdmUGd2FjdXRlCXdkaWVyZXNpcwt5Y2lyY3VtZmxleAZ5Z3JhdmUGemFjdXRlCnpkb3RhY2NlbnQHYWVhY3V0ZQtvc2xhc2hhY3V0ZQAAAAMACAACABAAAf//AAMAAQAAAAoAHgAsAAFsYXRuAAgABAAAAAD//wABAAAAAWtlcm4ACAAAAAEAAAABAAQAAgAAAAMADCaGSwwAAVowAAQAAAEZAjwCTgJYAmoCsAK+AsgC0gL4AyIDKAMyA0wDUgOEA7YD/AQuBFQEWgRoBKIExAT2BRQFVgVcBWYFcAWKBeQGSgZUBl4GkAa2BugHAgdAB44HnAgOCFAIpgjUCPIJEAlGCWwJkgmoCbIJ2An2CgwKJgosCjIKUAqaCrQK4gsICy4LRAt2C6wL3gv4DAoMHAxWDGQMhgykDLIMxA0KDTwNYg1oDXYNnA2qDdAODg5MDlYOlA7SDugPDg8UDzoPTA9WD2APcg+ED4oPlA/6EEQQghC4EOYQ9BESETQRQhFQEXIRkBGaEcwR2hIAEiYSTBJyEpgSvhLUEvoTIBNGE2wTchN4E34ThBOyE9gT/hQkFEoUcBSKFKQUvhTYFOYU9BUmFTQVYhVwFY4VnBW6FdgV4hXsFfYWABYyFmQWlhakFrIWwBbyFxgXHhcsFzoXSBdqF4wXrhfQGAIYNBhSGHAYjhisGMoY0BjWGNwY4hjsGPYZABkKGRQZHhkoGUIZnBoCGmgachp8GoYakBrCGvQbJhtAG1obdBuyG/AcLhx8HModGB0mHTQdQh1QHV4dbB2uHfAeMh50HqIe0B7uHwwfPh9kH4ofsB/GH9wf8iAIIBIgOCBeIIQgqiDQIOYg/CESISghQiFcIWIhaCFuIXQheiGYIbYiACJKIngipiLUIwIjKCNOI3QjpiPYJAokQCR2JKwk3iUQJSolRCVeJXglkiWsJb4l0CXiJfQmAiYQJjImVAAEAGz/9gBu//YAhf/1AIf/9QACAA7/8gAU//QABABs/+UAbv/lAIX/5QCH/+UAEQAH/8gADf+7AA7/4QAP/+QAEP/lABH/3gAS/+YAE//CABT/6wAV/8YAFv/MABr/4AAp/74AN//tAEL/1wBQ/8wAV//uAAMACP/IADX/3QBS/9wAAgAO/+kAFP/rAAIADv/gABT/4gAJAAz+wQAN/9cAD//tABP/4gAV/9QAFv/0ACn/2QBC/9AARf/CAAoACP+7AAz/1gAO/+8AFP/vADT/1wA1/9UAUv/UAG//7gBw/+4Anf/bAAEACP/jAAIACP/hADT/7gAGAAj/yAAM/+oANP/qADX/5wBS/+cAnf/tAAEACP/jAAwACP/QAAz/8gAO//MAFP/2ABb/9AA0//AANf/uAFL/7gB0//MAhf/1AIf/9QCd//UADAAI/8wADP/0AA7/5wAU/+cAFv/wADT/4AA1/+kAUv/pAHT/6gCF/+sAh//rAJ3/9gARAAj/2gAK/+AADP+SAA3/7AAP/+8AE//zABX/5AAX//AAKf/rAFT/5ABv/6wAcP+sAIb/0QCZ/9cAmv/XAJ3/mACj/9gADAAI/8YADP/vAA7/6gAU/+wAFv/2ADT/1AA1/+MAUv/jAHT/9QCF//IAh//yAJ3/8QAJAAj/wgAM/+EADv/2ADT/4gA1/94AUv/eAG//9gBw//YAnf/kAAEADv/1AAMACP/dADT/9ABF//sADgAI/8oACf/tAAz/8AAO/+0AEf/2ABT/7gAW//UAGP/rADT/1QA1/+gAUv/oAGv/9wBt//cAlf/vAAgACP/rAA3/9AAp/+sAQv/5AEX/+gCT/+oAmf/jAJr/4wAMAAj/vAAM/9UADv/vABT/8gAY/+8ANP/WADX/1wBF//sAUv/WAG//7QBw/+0Alf/uAAcACP/qACn/8ABC//kARf/6AJP/8wCZ/+8Amv/vABAAA//uAAj/5gAM/7EAFf/2ACn/9wBC/+UARf/ZAG//wABw/8AAjf/0AJf/9ACY/+0Amf/0AJr/9ACb//QAnP/tAAEACP/eAAIACP/gAEX/+wACAAj/4ABF//sABgAI/9gADP/jAEL/+wBF//gAb//4AHD/+AAWAAP/9QAG/+4ACf/lAAwABQAN/9wADgALABP/6gAUAA0AFf/zABgACAAp/9MANAAGADUACwBSAAoAa//0AG3/9ACT/8wAlQAMAJf/7QCZ/8sAmv/LAJv/7QAZAAP/6wAI/+wACf+OAA3/8gAO/+IAEf+tABT/7AAW/+gAGP/DACn/6gA0/4IAN//7AGv/pABs/6MAbf+kAG7/owCF/50Ah/+dAJP/4wCV/44Al//0AJn/wgCa/8IAm//0AKP/vwACAAj/4ABF//sAAgAI/+AARf/7AAwACP++AAz/2AAO//EAFP/2ABj/8gA0/9kANf/ZAEX/+wBS/9gAb//vAHD/7wCV/+8ACQAD/+4ACP/AAAz/vQA0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AJr/9gCb/+gAAwAI/90ANP/0AEX/+wADAAj/3QA0//QARf/7AAgACP/rAA3/9AAp/+sAQv/5AEX/+gCT/+oAmf/jAJr/4wAHAAj/6gAp//AAQv/5AEX/+gCT//MAmf/vAJr/7wACAAj/4ABF//sADAAI/74ADP/YAA7/8QAU//YAGP/yADT/2QA1/9kARf/7AFL/2ABv/+8AcP/vAJX/7wADAAj/3AAM//MARf/7AAkACP/HAAz/8wAY/+AANP/GADX/6ABS/+kAhf/3AIf/9wCV/+AACQAI/8cADP/zABj/4AA0/8YANf/oAFL/6QCF//cAh//3AJX/4AAJAAj/xwAM//MAGP/gADT/xgA1/+gAUv/pAIX/9wCH//cAlf/gAAkACP/HAAz/8wAY/+AANP/GADX/6ABS/+kAhf/3AIf/9wCV/+AACQAI/8cADP/zABj/4AA0/8YANf/oAFL/6QCF//cAh//3AJX/4AAJAAj/xwAM//MAGP/gADT/xgA1/+gAUv/pAIX/9wCH//cAlf/gAAUACP/dADT/3ACV/+oAl//qAJv/6gAJAAj/tQAM/9MAGP/qADT/zwA1/9QAUv/SAG//1QBw/9UAlf/oAAkACP+1AAz/0wAY/+oANP/PADX/1ABS/9IAb//VAHD/1QCV/+gACQAI/7UADP/TABj/6gA0/88ANf/UAFL/0gBv/9UAcP/VAJX/6AAJAAj/tQAM/9MAGP/qADT/zwA1/9QAUv/SAG//1QBw/9UAlf/oAAEACP/uAAEACP/uAAEACP/uAAEACP/uAAsACP/YAAn/9AAY/9MANP++AGv/9wBs//UAbf/3AG7/9QCF/+4Ah//uAJX/2AAJAAj/xwAM//IAGP/fADT/xQA1/+kAUv/pAIX/9gCH//YAlf/fAAkACP/HAAz/8gAY/98ANP/FADX/6QBS/+kAhf/2AIf/9gCV/98ACQAI/8cADP/yABj/3wA0/8UANf/pAFL/6QCF//YAh//2AJX/3wAJAAj/xwAM//IAGP/fADT/xQA1/+kAUv/pAIX/9gCH//YAlf/fAAkACP/HAAz/8gAY/98ANP/FADX/6QBS/+kAhf/2AIf/9gCV/98ABgAI/9EAGP/yADT/1wA1//QAUv/0AJX/6AAGAAj/0QAY//IANP/XADX/9ABS//QAlf/oAAYACP/RABj/8gA0/9cANf/0AFL/9ACV/+gABgAI/9EAGP/yADT/1wA1//QAUv/0AJX/6AADAAj/3QA0//QARf/7AAMACP/dADT/9ABF//sADAAI/74ADP/YAA7/8QAU//YAGP/yADT/2QA1/9kARf/7AFL/2ABv/+8AcP/vAJX/7wADABj/8QA0/9YAlf/oAAsAA//vAAj/3wAM/60AD//2ABX/9gBC//gARf/vAG//sgBw/7IAl//xAJv/8QADAAj/3QA0//QARf/7AAcACP/qACn/8ABC//kARf/6AJP/8wCZ/+8Amv/vAAMACP/dADT/9ABF//sABwAI/+oAKf/wAEL/+QBF//oAk//zAJn/7wCa/+8ABwAI/+oAKf/wAEL/+QBF//oAk//zAJn/7wCa/+8AAgAI/+AARf/7AAIACP/gAEX/+wACAAj/4ABF//sAAgAI/+AARf/7AAwACP++AAz/2AAO//EAFP/2ABj/8gA0/9kANf/ZAEX/+wBS/9gAb//vAHD/7wCV/+8ADAAI/74ADP/YAA7/8QAU//YAGP/yADT/2QA1/9kARf/7AFL/2ABv/+8AcP/vAJX/7wAMAAj/vgAM/9gADv/xABT/9gAY//IANP/ZADX/2QBF//sAUv/YAG//7wBw/+8Alf/vAAMACP/cAAz/8wBF//sAAwAI/9wADP/zAEX/+wADAAj/3AAM//MARf/7AAwACP+8AAz/1QAO/+8AFP/yABj/7wA0/9YANf/XAEX/+wBS/9YAb//tAHD/7QCV/+4ACQAI/8cADP/yABj/3wA0/8UANf/pAFL/6QCF//YAh//2AJX/3wABAAj/7gADAAj/3QA0//QARf/7AAMACP/dADT/9ABF//sAAwAI/90ANP/0AEX/+wAIAAj/6wAN//QAKf/rAEL/+QBF//oAk//qAJn/4wCa/+MACAAI/+sADf/0ACn/6wBC//kARf/6AJP/6gCZ/+MAmv/jAAgACP/rAA3/9AAp/+sAQv/5AEX/+gCT/+oAmf/jAJr/4wAIAAj/6wAN//QAKf/rAEL/+QBF//oAk//qAJn/4wCa/+MADAAI/7wADP/VAA7/7wAU//IAGP/vADT/1gA1/9cARf/7AFL/1gBv/+0AcP/tAJX/7gAMAAj/vAAM/9UADv/vABT/8gAY/+8ANP/WADX/1wBF//sAUv/WAG//7QBw/+0Alf/uAAcACP/qACn/8ABC//kARf/6AJP/8wCZ/+8Amv/vAAcACP/qACn/8ABC//kARf/6AJP/8wCZ/+8Amv/vAAcACP/qACn/8ABC//kARf/6AJP/8wCZ/+8Amv/vAAcACP/qACn/8ABC//kARf/6AJP/8wCZ/+8Amv/vAAcACP/qACn/8ABC//kARf/6AJP/8wCZ/+8Amv/vAAEACP/eAAEACP/eAAEACP/eAAEACP/eAAIACP/gAEX/+wACAAj/4ABF//sAAgAI/+AARf/7AAIACP/gAEX/+wACAAj/4ABF//sAAgAI/+AARf/7AAIACP/gAEX/+wAGAAj/2AAM/+MAQv/7AEX/+ABv//gAcP/4ABYAA//1AAb/7gAJ/+UADAAFAA3/3AAOAAsAE//qABQADQAV//MAGAAIACn/0wA0AAYANQALAFIACgBr//QAbf/0AJP/zACVAAwAl//tAJn/ywCa/8sAm//tABkAA//rAAj/7AAJ/44ADf/yAA7/4gAR/60AFP/sABb/6AAY/8MAKf/qADT/ggA3//sAa/+kAGz/owBt/6QAbv+jAIX/nQCH/50Ak//jAJX/jgCX//QAmf/CAJr/wgCb//QAo/+/ABkAA//rAAj/7AAJ/44ADf/yAA7/4gAR/60AFP/sABb/6AAY/8MAKf/qADT/ggA3//sAa/+kAGz/owBt/6QAbv+jAIX/nQCH/50Ak//jAJX/jgCX//QAmf/CAJr/wgCb//QAo/+/AAIACP/gAEX/+wACAAj/4ABF//sAAgAI/+AARf/7AAIACP/gAEX/+wAMAAj/vgAM/9gADv/xABT/9gAY//IANP/ZADX/2QBF//sAUv/YAG//7wBw/+8Alf/vAAwACP++AAz/2AAO//EAFP/2ABj/8gA0/9kANf/ZAEX/+wBS/9gAb//vAHD/7wCV/+8ADAAI/74ADP/YAA7/8QAU//YAGP/yADT/2QA1/9kARf/7AFL/2ABv/+8AcP/vAJX/7wAGAAP/9QAI/+gAFf/1ADT/7QCX/+4Am//uAAYAA//1AAj/6AAV//UANP/tAJf/7gCb/+4ABgAD//UACP/oABX/9QA0/+0Al//uAJv/7gAPAAP/9gAI/9AACf/wAAz/7wAO//MAFv/2ADT/7wA1//AAUv/wAGv/7gBs//EAbf/uAG7/8QCF//YAh//2AA8AA//2AAj/0AAJ//AADP/vAA7/8wAW//YANP/vADX/8ABS//AAa//uAGz/8QBt/+4Abv/xAIX/9gCH//YADwAD//YACP/QAAn/8AAM/+8ADv/zABb/9gA0/+8ANf/wAFL/8ABr/+4AbP/xAG3/7gBu//EAhf/2AIf/9gATAAP/6gAI/+oADP+eAA3/9AAP//YAFf/uACn/7ABC/7UARf+IAG//uQBw/7kAjf/HAJP/5QCX/6cAmP/JAJn/wgCa/8IAm/+nAJz/yQATAAP/6gAI/+oADP+eAA3/9AAP//YAFf/uACn/7ABC/7UARf+IAG//uQBw/7kAjf/HAJP/5QCX/6cAmP/JAJn/wgCa/8IAm/+nAJz/yQATAAP/6gAI/+oADP+eAA3/9AAP//YAFf/uACn/7ABC/7UARf+IAG//uQBw/7kAjf/HAJP/5QCX/6cAmP/JAJn/wgCa/8IAm/+nAJz/yQADAAj/3AAM//MARf/7AAMACP/cAAz/8wBF//sAAwAI/9wADP/zAEX/+wADAAj/3AAM//MARf/7AAMACP/cAAz/8wBF//sAAwAI/9wADP/zAEX/+wAQAAj/4wAM/9kAD//2ABX/8AAp//UAN//7AEL/7ABF/+kAV//6AG//5ABw/+QAjf/yAJf/7gCZ//MAmv/zAJv/7gAQAAj/4wAM/9kAD//2ABX/8AAp//UAN//7AEL/7ABF/+kAV//6AG//5ABw/+QAjf/yAJf/7gCZ//MAmv/zAJv/7gAQAAj/4wAM/9kAD//2ABX/8AAp//UAN//7AEL/7ABF/+kAV//6AG//5ABw/+QAjf/yAJf/7gCZ//MAmv/zAJv/7gAQAAj/4wAM/9kAD//2ABX/8AAp//UAN//7AEL/7ABF/+kAV//6AG//5ABw/+QAjf/yAJf/7gCZ//MAmv/zAJv/7gALAAP/7wAI/98ADP+tAA//9gAV//YAQv/4AEX/7wBv/7IAcP+yAJf/8QCb//EACwAD/+8ACP/fAAz/rQAP//YAFf/2AEL/+ABF/+8Ab/+yAHD/sgCX//EAm//xAAcACP/qAA3/8gAp//AAQv/7AJP/6QCZ/+IAmv/iAAcACP/qAA3/8gAp//AAQv/7AJP/6QCZ/+IAmv/iAAwACP++AAz/2AAO//EAFP/2ABj/8gA0/9kANf/ZAEX/+wBS/9gAb//vAHD/7wCV/+8ACQAI/8cADP/zABj/4AA0/8YANf/oAFL/6QCF//cAh//3AJX/4AAJAAj/xwAM//MAGP/gADT/xgA1/+gAUv/pAIX/9wCH//cAlf/gAAkACP/HAAz/8wAY/+AANP/GADX/6ABS/+kAhf/3AIf/9wCV/+AABQAI/90ANP/cAJX/6gCX/+oAm//qAAUACP/dADT/3ACV/+oAl//qAJv/6gAFAAj/3QA0/9wAlf/qAJf/6gCb/+oABQAI/90ANP/cAJX/6gCX/+oAm//qAAIACP/tAAz/7QAJAAj/tQAM/9MAGP/qADT/zwA1/9QAUv/SAG//1QBw/9UAlf/oAAkACP+1AAz/0wAY/+oANP/PADX/1ABS/9IAb//VAHD/1QCV/+gACQAI/7UADP/TABj/6gA0/88ANf/UAFL/0gBv/9UAcP/VAJX/6AAJAAj/tQAM/9MAGP/qADT/zwA1/9QAUv/SAG//1QBw/9UAlf/oAAkACP+1AAz/0wAY/+oANP/PADX/1ABS/9IAb//VAHD/1QCV/+gABQAY/90ANP/DAIX/9QCH//UAlf/eAAUAGP/dADT/wwCF//UAh//1AJX/3gAFABj/3QA0/8MAhf/1AIf/9QCV/94ABQAY/90ANP/DAIX/9QCH//UAlf/eAAYACP/YABj/2wA0/8IAhf/yAIf/8gCV/9sABgAI/9gAGP/bADT/wgCF//IAh//yAJX/2wABAAj/7gABAAj/7gABAAj/7gABAAj/7gABAAj/7gAHAAj/7wA0/+sAlf/0AJf/ywCZ/9wAmv/cAJv/ywAHAAj/7wA0/+sAlf/0AJf/ywCZ/9wAmv/cAJv/ywASAAP/8wAI/+wACf/dABj/5gA0/+gAa//tAGz/7QBt/+0Abv/tAIX/7QCH/+0Ak//uAJX/7gCX/+sAmf/pAJr/6QCb/+sAo/+ZABIAA//zAAj/7AAJ/90AGP/mADT/6ABr/+0AbP/tAG3/7QBu/+0Ahf/tAIf/7QCT/+4Alf/uAJf/6wCZ/+kAmv/pAJv/6wCj/5kACwAI/9gACf/0ABj/0wA0/74Aa//3AGz/9QBt//cAbv/1AIX/7gCH/+4Alf/YAAsACP/YAAn/9AAY/9MANP++AGv/9wBs//UAbf/3AG7/9QCF/+4Ah//uAJX/2AALAAj/2AAJ//QAGP/TADT/vgBr//cAbP/1AG3/9wBu//UAhf/uAIf/7gCV/9gACwAI/9gACf/0ABj/0wA0/74Aa//3AGz/9QBt//cAbv/1AIX/7gCH/+4Alf/YAAkACP/HAAz/8gAY/98ANP/FADX/6QBS/+kAhf/2AIf/9gCV/98ACQAI/8cADP/yABj/3wA0/8UANf/pAFL/6QCF//YAh//2AJX/3wAJAAj/xwAM//IAGP/fADT/xQA1/+kAUv/pAIX/9gCH//YAlf/fAAwAA//wAAj/vAAM/60ANP/nADX/2wBF//oAUv/bAG//qgBw/6oAlf/yAJf/1gCb/9YADAAD//AACP+8AAz/rQA0/+cANf/bAEX/+gBS/9sAb/+qAHD/qgCV//IAl//WAJv/1gAMAAP/8AAI/7wADP+tADT/5wA1/9sARf/6AFL/2wBv/6oAcP+qAJX/8gCX/9YAm//WAA0ACP/OAAn/7QAY/+EANP/HADX/8QBS//EAbP/4AG7/+ACF//QAh//0AJX/2QCZ//gAmv/4AA0ACP/OAAn/7QAY/+EANP/HADX/8QBS//EAbP/4AG7/+ACF//QAh//0AJX/2QCZ//gAmv/4AA0ACP/OAAn/7QAY/+EANP/HADX/8QBS//EAbP/4AG7/+ACF//QAh//0AJX/2QCZ//gAmv/4AAwAA//wAAj/vQAM/7kANP/nADX/3QBF//oAUv/dAG//xwBw/8cAlf/wAJf/1wCb/9cADAAD//AACP+9AAz/uQA0/+cANf/dAEX/+gBS/90Ab//HAHD/xwCV//AAl//XAJv/1wAGAAj/0QAY//IANP/XADX/9ABS//QAlf/oAAYACP/RABj/8gA0/9cANf/0AFL/9ACV/+gABgAI/9EAGP/yADT/1wA1//QAUv/0AJX/6AAGAAj/0QAY//IANP/XADX/9ABS//QAlf/oAAYACP/RABj/8gA0/9cANf/0AFL/9ACV/+gABgAI/9EAGP/yADT/1wA1//QAUv/0AJX/6AAEAAP/6gAM/64Ab/+7AHD/uwAEAAP/6gAM/64Ab/+7AHD/uwAEAAP/6gAM/64Ab/+7AHD/uwAEAAP/6gAM/64Ab/+7AHD/uwADABj/8QA0/9YAlf/oAAMAGP/xADT/1gCV/+gACAAI/94AGP/1ADT/2QCV/+oAl//oAJn/9gCa//YAm//oAAgACP/eABj/9QA0/9kAlf/qAJf/6ACZ//YAmv/2AJv/6AAJAAj/xwAM//IAGP/fADT/xQA1/+kAUv/pAIX/9gCH//YAlf/fAAE0aAAEAAAALQBkANoBVAUGBVQHqgfoCCYI+Ak6CVAJ7gpUDBoN/A4eDiwOThAUECIReBKqE/QVJhZwF24YbBlqGmgakhq8GvIeqB/CINwhDiFUIZYhrCImIqAjGiMwI6ojvAAdACL/6wAs/+oALv/lADD/9gAx/+8ANv/2AEn/8ABN//YAj//2AKj/7wCz//YAtP/2ALX/9gC2//YAt//2ALj/9gDQ/+8BBv/rARn/6gEa/+oBG//qASb/7wEn/+8BLP/2AS3/9gEu//YBWv/wAVz/8AFr//YAHgAi//UAK//2ACz/3gAu/9gAL//vADD/4wAx/+0AMv/vAEn/7wCm//YAqP/tAKr/7wDQ/+0BBv/1ARb/9gEX//YBGP/2ARn/3gEa/94BG//eASL/7wEj/+8BJP/vASX/7wEm/+0BJ//tASj/7wEp/+8BWv/vAVz/7wDsABn/2gAb/8kAHP/gAB3/0QAe/+AAH//JACD/4AAh/+AAIv/rACP/4AAk/+AAJf/gACb/4AAn/74AKP/ZACr/4AAr/98ALP/qAC3/2AAu//EAL//jADH/3wAy/+kANv/OADj/xwA5/8cAOv/HADv/3QA8/8cAPf/uAD7/7gA/AQUAQP/uAEH/7QBD/9cARP/HAEb/xwBH/9gASP/bAEn/vwBK/8EAS//RAEz/0QBN//EATv/GAE//1wBY/74AXf/HAI7/2gCP/84AkP/HAJH/vgCf/+4ApP/gAKX/7QCm/98Ap//bAKj/3wCp/8YAqv/pAKv/1wCs/9oArf/aAK7/yQCv/9EAsP/gALH/vgCy/9gAs//OALT/zgC1/84Atv/OALf/zgC4/84Auf/HALr/xwC7/8cAvP/HAL3/xwC+/+4Av//uAMD/7gDB/+4Awv/XAMP/xwDE/8cAxf/HAMb/xwDH/8cAyP/BAMn/wQDK/8EAy//BAMz/2gDN/9oAzv++AM//xgDQ/98A0f/aANL/0QDT/9oA1P/RANX/0QDW/+AA1//gANj/4ADZ/+AA2v++ANv/vgDc/74A3f/YAN7/2ADf/9gA4P/gAOH/xwDrAQUA7P/aAO3/2gDu/9oA7//JAPD/yQDx/8kA8v/JAPP/4AD0/+AA9f/RAPb/0QD3/9EA+P/RAPn/0QD6/8kA+//JAPz/yQD9/8kA/v/gAP//4AEA/+ABAf/gAQL/4AED/+ABBP/gAQb/6wEH/+ABCP/gAQn/4AEM/+ABDf/gAQ7/4AEP/+ABEP++ARH/vgES/74BE//gART/4AEV/+ABFv/fARf/3wEY/98BGf/qARr/6gEb/+oBHP/YAR3/2AEe/9gBH//YASD/2AEh/9gBIv/jASP/4wEk/+MBJf/jASb/3wEn/98BKP/pASn/6QEq/9oBK/++ASz/zgEt/84BLv/OAS//xwEw/8cBMf/HATL/xwEz/8cBNf/HATb/xwE3/8cBOP/HATn/xwE6/8cBO//HATz/xwE9/8cBPv/uAT//7gFA/+4BQf/uAUL/7gFD/+4BRQEFAUb/7gFH/+4BSP/tAUn/7QFM/9cBTf/XAU7/1wFQ/9cBUf/HAVL/xwFT/8cBVP/YAVX/2AFW/9gBV//bAVj/2wFZ/9sBWv+/AVz/vwFd/8EBXv/BAV//wQFg/8EBYf/BAWL/wQFj/9EBZP/RAWX/0QFm/9EBZ//GAWj/xgFp/9cBav/XAWv/zgFs/8cAEwAi/44ALAAFADD/6gA2/9oAj//aALP/2gC0/9oAtf/aALb/2gC3/9oAuP/aAQb/jgEZAAUBGgAFARsABQEs/9oBLf/aAS7/2gFr/9oAlQAZ/9AAG//mAB3/9AAf/+YAIv+CACf/2QAo/+QAK//nAC4ADgA2/6kAOP/GADn/xgA6/8YAO//zADz/xQBD/9AARP/GAEb/xgBH/8IASP/KAEn/5wBK/9oAS//XAEz/1wBN/+EATv/ZAE//3gBY/9kAXf/GAI7/0ACP/6kAkP/GAJH/2QCm/+cAp//KAKn/2QCr/94ArP/QAK3/0ACu/+YAr//0ALH/2QCz/6kAtP+pALX/qQC2/6kAt/+pALj/qQC5/8YAuv/GALv/xgC8/8YAvf/GAML/0ADD/8YAxP/GAMX/xgDG/8YAx//GAMj/2gDJ/9oAyv/aAMv/2gDM/9AAzf/QAM7/2QDP/9kA0f/QANL/9ADT/9AA1P/0ANX/9ADa/9kA2//ZANz/2QDh/8YA7P/QAO3/0ADu/9AA7//mAPD/5gDx/+YA8v/mAPX/9AD2//QA9//0APj/9AD5//QA+v/mAPv/5gD8/+YA/f/mAQb/ggEQ/9kBEf/ZARL/2QEW/+cBF//nARj/5wEq/9ABK//ZASz/qQEt/6kBLv+pAS//xgEw/8YBMf/GATL/xgEz/8YBNf/GATb/xgE3/8YBOP/GATn/xgE6/8UBO//FATz/xQE9/8UBTP/QAU3/0AFO/9ABUP/QAVH/xgFS/8YBU//GAVT/wgFV/8IBVv/CAVf/ygFY/8oBWf/KAVr/5wFc/+cBXf/aAV7/2gFf/9oBYP/aAWH/2gFi/9oBY//XAWT/1wFl/9cBZv/XAWf/2QFo/9kBaf/eAWr/3gFr/6kBbP/GAA8AIv/xACz/8gAu/+oAMP/gADL/8gB5/+4Aev/uAKr/8gDj/+4BBv/xARn/8gEa//IBG//yASj/8gEp//IADwAs/+kALv/rAC//8AAx//EAqP/xAND/8QEZ/+kBGv/pARv/6QEi//ABI//wAST/8AEl//ABJv/xASf/8QA0AAv/1wAZ/+MAG//zAB//8wAi/5kAJ//rACj/8gAr//UALAAKAC4ACgBY/+sAef+sAHr/rACO/+MAkf/rAKb/9QCs/+MArf/jAK7/8wCx/+sAzP/jAM3/4wDO/+sA0f/jANP/4wDa/+sA2//rANz/6wDj/6wA7P/jAO3/4wDu/+MA7//zAPD/8wDx//MA8v/zAPr/8wD7//MA/P/zAP3/8wEG/5kBEP/rARH/6wES/+sBFv/1ARf/9QEY//UBGQAKARoACgEbAAoBKv/jASv/6wAQACz/7QAu/+MAL//vADD/9AAx//UAqP/1AND/9QEZ/+0BGv/tARv/7QEi/+8BI//vAST/7wEl/+8BJv/1ASf/9QAFAC7/8gAw/+0Aef/2AHr/9gDj//YAJwAs/+QALf/4AC7/4QAv//IAMP/jADH/7QAy//sASf/hAE3/6ABP//sAqP/tAKr/+wCr//sAsv/4AND/7QDd//gA3v/4AN//+AEZ/+QBGv/kARv/5AEc//gBHf/4AR7/+AEf//gBIP/4ASH/+AEi//IBI//yAST/8gEl//IBJv/tASf/7QEo//sBKf/7AVr/4QFc/+EBaf/7AWr/+wAZACL/6gAs/+wALv/iAC//9AAw/9oAMv/wAEf/+wBN/+gAef/vAHr/7wCq//AA4//vAQb/6gEZ/+wBGv/sARv/7AEi//QBI//0AST/9AEl//QBKP/wASn/8AFU//sBVf/7AVb/+wBxABv/5wAd//MAH//nACf/2QAuABIAMAAJADb/8QA4/+gAOf/oADr/6AA8/+gAPwDnAET/6ABG/+gASf/fAEr/4ABL//QATP/0AE0ACQBO/+cAWP/ZAF3/6ACP//EAkP/oAJH/2QCp/+cArv/nAK//8wCx/9kAs//xALT/8QC1//EAtv/xALf/8QC4//EAuf/oALr/6AC7/+gAvP/oAL3/6ADD/+gAxP/oAMX/6ADG/+gAx//oAMj/4ADJ/+AAyv/gAMv/4ADO/9kAz//nANL/8wDU//MA1f/zANr/2QDb/9kA3P/ZAOH/6ADrAOcA7//nAPD/5wDx/+cA8v/nAPX/8wD2//MA9//zAPj/8wD5//MA+v/nAPv/5wD8/+cA/f/nARD/2QER/9kBEv/ZASv/2QEs//EBLf/xAS7/8QEv/+gBMP/oATH/6AEy/+gBM//oATX/6AE2/+gBN//oATj/6AE5/+gBOv/oATv/6AE8/+gBPf/oAUUA5wFR/+gBUv/oAVP/6AFa/98BXP/fAV3/4AFe/+ABX//gAWD/4AFh/+ABYv/gAWP/9AFk//QBZf/0AWb/9AFn/+cBaP/nAWv/8QFs/+gAeAAb/+UAHf/kAB//5QAn/9gALP+eAC3/0AAu/5sAL//YADH/rQA4//IAOf/yADr/8gA8//IAQf/tAET/8gBG//IASf/MAEr/6wBNAAUATv/uAFj/2ABd//IAkP/yAJH/2ACl/+0AqP+tAKn/7gCu/+UAr//kALH/2ACy/9AAuf/yALr/8gC7//IAvP/yAL3/8gDD//IAxP/yAMX/8gDG//IAx//yAMj/6wDJ/+sAyv/rAMv/6wDO/9gAz//uAND/rQDS/+QA1P/kANX/5ADa/9gA2//YANz/2ADd/9AA3v/QAN//0ADh//IA7//lAPD/5QDx/+UA8v/lAPX/5AD2/+QA9//kAPj/5AD5/+QA+v/lAPv/5QD8/+UA/f/lARD/2AER/9gBEv/YARn/ngEa/54BG/+eARz/0AEd/9ABHv/QAR//0AEg/9ABIf/QASL/2AEj/9gBJP/YASX/2AEm/60BJ/+tASv/2AEv//IBMP/yATH/8gEy//IBM//yATX/8gE2//IBN//yATj/8gE5//IBOv/yATv/8gE8//IBPf/yAUj/7QFJ/+0BUf/yAVL/8gFT//IBWv/MAVz/zAFd/+sBXv/rAV//6wFg/+sBYf/rAWL/6wFn/+4BaP/uAWz/8gAIAEn/+wBN/9wAT//7AKv/+wFa//sBXP/7AWn/+wFq//sAAwBJ//oBWv/6AVz/+gAIAEn/+wBN/9wAT//7AKv/+wFa//sBXP/7AWn/+wFq//sAcQAb/+cAHf/zAB//5wAn/9gALgASADAACAA2//EAOP/pADn/6QA6/+kAPP/oAD8A6ABE/+kARv/pAEn/3gBK/+AAS//0AEz/9ABNAAkATv/nAFj/2ABd/+kAj//xAJD/6QCR/9gAqf/nAK7/5wCv//MAsf/YALP/8QC0//EAtf/xALb/8QC3//EAuP/xALn/6QC6/+kAu//pALz/6QC9/+kAw//pAMT/6QDF/+kAxv/pAMf/6QDI/+AAyf/gAMr/4ADL/+AAzv/YAM//5wDS//MA1P/zANX/8wDa/9gA2//YANz/2ADh/+kA6wDoAO//5wDw/+cA8f/nAPL/5wD1//MA9v/zAPf/8wD4//MA+f/zAPr/5wD7/+cA/P/nAP3/5wEQ/9gBEf/YARL/2AEr/9gBLP/xAS3/8QEu//EBL//pATD/6QEx/+kBMv/pATP/6QE1/+kBNv/pATf/6QE4/+kBOf/pATr/6AE7/+gBPP/oAT3/6AFFAOgBUf/pAVL/6QFT/+kBWv/eAVz/3gFd/+ABXv/gAV//4AFg/+ABYf/gAWL/4AFj//QBZP/0AWX/9AFm//QBZ//nAWj/5wFr//EBbP/pAAMAPwDJAOsAyQFFAMkAVQAL//cAHP/7AB3/+wAe//sAIP/7ACH/+wAj//sAJP/7ACX/+wAm//sAKv/7ACz/nwAt/+4ALv+hAC//2gAw//QAMf/AADL/+gBJ/80ATf/kAE//+wCk//sAqP/AAKr/+gCr//sAr//7ALD/+wCy/+4A0P/AANL/+wDU//sA1f/7ANb/+wDX//sA2P/7ANn/+wDd/+4A3v/uAN//7gDg//sA8//7APT/+wD1//sA9v/7APf/+wD4//sA+f/7AP7/+wD///sBAP/7AQH/+wEC//sBA//7AQT/+wEH//sBCP/7AQn/+wEM//sBDf/7AQ7/+wEP//sBE//7ART/+wEV//sBGf+fARr/nwEb/58BHP/uAR3/7gEe/+4BH//uASD/7gEh/+4BIv/aASP/2gEk/9oBJf/aASb/wAEn/8ABKP/6ASn/+gFa/80BXP/NAWn/+wFq//sATAAZ//UAIv+ZAC4ABwA2/9AAOP/zADn/8wA6//MAPP/yAET/8wBG//MAR//xAEj/+ABd//MAef+PAHr/jwCO//UAj//QAJD/8wCn//gArP/1AK3/9QCz/9AAtP/QALX/0AC2/9AAt//QALj/0AC5//MAuv/zALv/8wC8//MAvf/zAMP/8wDE//MAxf/zAMb/8wDH//MAzP/1AM3/9QDR//UA0//1AOH/8wDj/48A7P/1AO3/9QDu//UBBv+ZASr/9QEs/9ABLf/QAS7/0AEv//MBMP/zATH/8wEy//MBM//zATX/8wE2//MBN//zATj/8wE5//MBOv/yATv/8gE8//IBPf/yAVH/8wFS//MBU//zAVT/8QFV//EBVv/xAVf/+AFY//gBWf/4AWv/0AFs//MAUgAZ//EAIv+UAC4ADQA2/80AOP/tADn/7QA6/+0APP/tAEP/9gBE/+0ARv/tAEf/6wBI//IAXf/tAHn/igB6/4oAjv/xAI//zQCQ/+0Ap//yAKz/8QCt//EAs//NALT/zQC1/80Atv/NALf/zQC4/80Auf/tALr/7QC7/+0AvP/tAL3/7QDC//YAw//tAMT/7QDF/+0Axv/tAMf/7QDM//EAzf/xANH/8QDT//EA4f/tAOP/igDs//EA7f/xAO7/8QEG/5QBKv/xASz/zQEt/80BLv/NAS//7QEw/+0BMf/tATL/7QEz/+0BNf/tATb/7QE3/+0BOP/tATn/7QE6/+0BO//tATz/7QE9/+0BTP/2AU3/9gFO//YBUP/2AVH/7QFS/+0BU//tAVT/6wFV/+sBVv/rAVf/8gFY//IBWf/yAWv/zQFs/+0ATAAZ//UAIv+ZAC4ABwA2/9AAOP/zADn/8wA6//MAPP/yAET/8wBG//MAR//xAEj/+ABd//MAef+PAHr/jwCO//UAj//QAJD/8wCn//gArP/1AK3/9QCz/9AAtP/QALX/0AC2/9AAt//QALj/0AC5//MAuv/zALv/8wC8//MAvf/zAMP/8wDE//MAxf/zAMb/8wDH//MAzP/1AM3/9QDR//UA0//1AOH/8wDj/48A7P/1AO3/9QDu//UBBv+ZASr/9QEs/9ABLf/QAS7/0AEv//MBMP/zATH/8wEy//MBM//zATX/8wE2//MBN//zATj/8wE5//MBOv/yATv/8gE8//IBPf/yAVH/8wFS//MBU//zAVT/8QFV//EBVv/xAVf/+AFY//gBWf/4AWv/0AFs//MAUgAZ//EAIv+UAC4ADQA2/80AOP/tADn/7QA6/+0APP/tAEP/9gBE/+0ARv/tAEf/6wBI//IAXf/tAHn/igB6/4oAjv/xAI//zQCQ/+0Ap//yAKz/8QCt//EAs//NALT/zQC1/80Atv/NALf/zQC4/80Auf/tALr/7QC7/+0AvP/tAL3/7QDC//YAw//tAMT/7QDF/+0Axv/tAMf/7QDM//EAzf/xANH/8QDT//EA4f/tAOP/igDs//EA7f/xAO7/8QEG/5QBKv/xASz/zQEt/80BLv/NAS//7QEw/+0BMf/tATL/7QEz/+0BNf/tATb/7QE3/+0BOP/tATn/7QE6/+0BO//tATz/7QE9/+0BTP/2AU3/9gFO//YBUP/2AVH/7QFS/+0BU//tAVT/6wFV/+sBVv/rAVf/8gFY//IBWf/yAWv/zQFs/+0APwAL/7wAHf/4ACf/7wAs/7kALf/hAC7/uQAv/+MAMf+yAEn/1QBK//UAWP/vAJH/7wCo/7IAr//4ALH/7wCy/+EAyP/1AMn/9QDK//UAy//1AM7/7wDQ/7IA0v/4ANT/+ADV//gA2v/vANv/7wDc/+8A3f/hAN7/4QDf/+EA9f/4APb/+AD3//gA+P/4APn/+AEQ/+8BEf/vARL/7wEZ/7kBGv+5ARv/uQEc/+EBHf/hAR7/4QEf/+EBIP/hASH/4QEi/+MBI//jAST/4wEl/+MBJv+yASf/sgEr/+8BWv/VAVz/1QFd//UBXv/1AV//9QFg//UBYf/1AWL/9QA/AAv/vAAd//gAJ//vACz/uQAt/+EALv+5AC//4wAx/7IASf/VAEr/9QBY/+8Akf/vAKj/sgCv//gAsf/vALL/4QDI//UAyf/1AMr/9QDL//UAzv/vAND/sgDS//gA1P/4ANX/+ADa/+8A2//vANz/7wDd/+EA3v/hAN//4QD1//gA9v/4APf/+AD4//gA+f/4ARD/7wER/+8BEv/vARn/uQEa/7kBG/+5ARz/4QEd/+EBHv/hAR//4QEg/+EBIf/hASL/4wEj/+MBJP/jASX/4wEm/7IBJ/+yASv/7wFa/9UBXP/VAV3/9QFe//UBX//1AWD/9QFh//UBYv/1AD8AC/+8AB3/+AAn/+8ALP+5AC3/4QAu/7kAL//jADH/sgBJ/9UASv/1AFj/7wCR/+8AqP+yAK//+ACx/+8Asv/hAMj/9QDJ//UAyv/1AMv/9QDO/+8A0P+yANL/+ADU//gA1f/4ANr/7wDb/+8A3P/vAN3/4QDe/+EA3//hAPX/+AD2//gA9//4APj/+AD5//gBEP/vARH/7wES/+8BGf+5ARr/uQEb/7kBHP/hAR3/4QEe/+EBH//hASD/4QEh/+EBIv/jASP/4wEk/+MBJf/jASb/sgEn/7IBK//vAVr/1QFc/9UBXf/1AV7/9QFf//UBYP/1AWH/9QFi//UAPwAL/7wAHf/4ACf/7wAs/7kALf/hAC7/uQAv/+MAMf+yAEn/1QBK//UAWP/vAJH/7wCo/7IAr//4ALH/7wCy/+EAyP/1AMn/9QDK//UAy//1AM7/7wDQ/7IA0v/4ANT/+ADV//gA2v/vANv/7wDc/+8A3f/hAN7/4QDf/+EA9f/4APb/+AD3//gA+P/4APn/+AEQ/+8BEf/vARL/7wEZ/7kBGv+5ARv/uQEc/+EBHf/hAR7/4QEf/+EBIP/hASH/4QEi/+MBI//jAST/4wEl/+MBJv+yASf/sgEr/+8BWv/VAVz/1QFd//UBXv/1AV//9QFg//UBYf/1AWL/9QAKACz/2wAu/+kAL//3ARn/2wEa/9sBG//bASL/9wEj//cBJP/3ASX/9wAKACz/2wAu/+kAL//3ARn/2wEa/9sBG//bASL/9wEj//cBJP/3ASX/9wANACz/xQAu/9YAL//uAD8A2ADrANgBGf/FARr/xQEb/8UBIv/uASP/7gEk/+4BJf/uAUUA2ADtABn/zQAb/8EAHP/LAB3/wAAe/8sAH//BACD/ywAh/8sAIv/eACP/ywAk/8sAJf/LACb/ywAn/8EAKP/MACr/ywAr/9AALP+MAC3/vQAu/6EAL/+0ADD/5QAx/7wAMv/JADb/wwA4/8AAOf/AADr/wAA7/80APP/DAD3/zQA+/80APwDnAED/zQBB/8AAQ//NAET/wABG/8AAR//OAEj/0ABJ/8EASv/AAEv/wwBM/8IATf/mAE7/wgBP/8YAWP/BAF3/wACO/80Aj//DAJD/wACR/8EAn//NAKT/ywCl/8AApv/QAKf/0ACo/7wAqf/CAKr/yQCr/8YArP/NAK3/zQCu/8EAr//AALD/ywCx/8EAsv+9ALP/wwC0/8MAtf/DALb/wwC3/8MAuP/DALn/wAC6/8AAu//AALz/wAC9/8AAvv/NAL//zQDA/80Awf/NAML/zQDD/8AAxP/AAMX/wADG/8AAx//AAMj/wADJ/8AAyv/AAMv/wADM/80Azf/NAM7/wQDP/8IA0P+8ANH/zQDS/8AA0//NANT/wADV/8AA1v/LANf/ywDY/8sA2f/LANr/wQDb/8EA3P/BAN3/vQDe/70A3/+9AOD/ywDh/8AA6wDnAOz/zQDt/80A7v/NAO//wQDw/8EA8f/BAPL/wQDz/8sA9P/LAPX/wAD2/8AA9//AAPj/wAD5/8AA+v/BAPv/wQD8/8EA/f/BAP7/ywD//8sBAP/LAQH/ywEC/8sBA//LAQT/ywEG/94BB//LAQj/ywEJ/8sBDP/LAQ3/ywEO/8sBD//LARD/wQER/8EBEv/BARP/ywEU/8sBFf/LARb/0AEX/9ABGP/QARn/jAEa/4wBG/+MARz/vQEd/70BHv+9AR//vQEg/70BIf+9ASL/tAEj/7QBJP+0ASX/tAEm/7wBJ/+8ASj/yQEp/8kBKv/NASv/wQEs/8MBLf/DAS7/wwEv/8ABMP/AATH/wAEy/8ABM//AATX/wAE2/8ABN//AATj/wAE5/8ABOv/DATv/wwE8/8MBPf/DAT7/zQE//80BQP/NAUH/zQFC/80BQ//NAUUA5wFG/80BR//NAUj/wAFJ/8ABTP/NAU3/zQFO/80BUP/NAVH/wAFS/8ABU//AAVT/zgFV/84BVv/OAVf/0AFY/9ABWf/QAVr/wQFc/8EBXf/AAV7/wAFf/8ABYP/AAWH/wAFi/8ABY//CAWT/wgFl/8IBZv/CAWf/wgFo/8IBaf/GAWr/xgFr/8MBbP/AAEYAGf/4ACL/nQA2/9IAOP/3ADn/9wA6//cAPP/2AET/9wBG//cAR//1AF3/9wB5/5MAev+TAI7/+ACP/9IAkP/3AKz/+ACt//gAs//SALT/0gC1/9IAtv/SALf/0gC4/9IAuf/3ALr/9wC7//cAvP/3AL3/9wDD//cAxP/3AMX/9wDG//cAx//3AMz/+ADN//gA0f/4ANP/+ADh//cA4/+TAOz/+ADt//gA7v/4AQb/nQEq//gBLP/SAS3/0gEu/9IBL//3ATD/9wEx//cBMv/3ATP/9wE1//cBNv/3ATf/9wE4//cBOf/3ATr/9gE7//YBPP/2AT3/9gFR//cBUv/3AVP/9wFU//UBVf/1AVb/9QFr/9IBbP/3AEYAGf/4ACL/nQA2/9IAOP/3ADn/9wA6//cAPP/2AET/9wBG//cAR//1AF3/9wB5/5MAev+TAI7/+ACP/9IAkP/3AKz/+ACt//gAs//SALT/0gC1/9IAtv/SALf/0gC4/9IAuf/3ALr/9wC7//cAvP/3AL3/9wDD//cAxP/3AMX/9wDG//cAx//3AMz/+ADN//gA0f/4ANP/+ADh//cA4/+TAOz/+ADt//gA7v/4AQb/nQEq//gBLP/SAS3/0gEu/9IBL//3ATD/9wEx//cBMv/3ATP/9wE1//cBNv/3ATf/9wE4//cBOf/3ATr/9gE7//YBPP/2AT3/9gFR//cBUv/3AVP/9wFU//UBVf/1AVb/9QFr/9IBbP/3AAwALP/JAC7/2wAv//YAMP/tAE3/7QEZ/8kBGv/JARv/yQEi//YBI//2AST/9gEl//YAEQAi/+QALP/mAC7/4wAv//YAMP/SADL/6QCq/+kBBv/kARn/5gEa/+YBG//mASL/9gEj//YBJP/2ASX/9gEo/+kBKf/pABAAIv+hAC4ADwAwAAwANv/UAI//1ACz/9QAtP/UALX/1AC2/9QAt//UALj/1AEG/6EBLP/UAS3/1AEu/9QBa//UAAUALP/JAC7/3wEZ/8kBGv/JARv/yQAeACL/9AAs/6cALv/KAC//7gAw/+sAMf/xADL/8gBJ/9kATf/NAE//5wCo//EAqv/yAKv/5wDQ//EBBv/0ARn/pwEa/6cBG/+nASL/7gEj/+4BJP/uASX/7gEm//EBJ//xASj/8gEp//IBWv/ZAVz/2QFp/+cBav/nAB4AIv/CACz/wgAu/9sAL//zADD/0AAy/+EANv/2AE3/3QCP//YAqv/hALP/9gC0//YAtf/2ALb/9gC3//YAuP/2AQb/wgEZ/8IBGv/CARv/wgEi//MBI//zAST/8wEl//MBKP/hASn/4QEs//YBLf/2AS7/9gFr//YAHgAi/8IALP/CAC7/2wAv//MAMP/QADL/4QA2//YATf/dAI//9gCq/+EAs//2ALT/9gC1//YAtv/2ALf/9gC4//YBBv/CARn/wgEa/8IBG//CASL/8wEj//MBJP/zASX/8wEo/+EBKf/hASz/9gEt//YBLv/2AWv/9gAFACz/yQAu/98BGf/JARr/yQEb/8kAHgAi//QALP+nAC7/ygAv/+4AMP/rADH/8QAy//IASf/ZAE3/zQBP/+cAqP/xAKr/8gCr/+cA0P/xAQb/9AEZ/6cBGv+nARv/pwEi/+4BI//uAST/7gEl/+4BJv/xASf/8QEo//IBKf/yAVr/2QFc/9kBaf/nAWr/5wAEAEH/2wCl/9sBSP/bAUn/2wAyAAv/3AA2/90AOP/dADn/3QA6/90APP/dAET/3QBG/90AXf/dAI//3QCQ/90As//dALT/3QC1/90Atv/dALf/3QC4/90Auf/dALr/3QC7/90AvP/dAL3/3QDD/90AxP/dAMX/3QDG/90Ax//dAOH/3QEs/90BLf/dAS7/3QEv/90BMP/dATH/3QEy/90BM//dATX/3QE2/90BN//dATj/3QE5/90BOv/dATv/3QE8/90BPf/dAVH/3QFS/90BU//dAWv/3QFs/90AAhBAAAQAABD4E4QALAAsAAD/+v/6//r/+v/6//r/+//7//sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//P/8//z//P/8//z//r/8v/1/+P/9f/1/+v/+//6//n/+v/w//n/+QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7AAAAAAAAAAAAAAAAAAD/+wAAAAAAAAAAAAD/7f/m/+3/6f/0/9//2P/t/+cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9P/0//T/9P/0//T/+v/z//X/7//3//f/8P/7//r/+f/6//L/+f/5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/+L/4v/i/+H/4v/i/9n/8//w//QAAAAA//cAAP+2/+X/5P/7/+3/7f/A/2r/wAAAAAAAAAAAAAD/9P/0/+3/9P/0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+wAAAAAAAAAAAAAAAAAAAAD/8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+f/5//n/+f/5//n/+//7//sAAAAAAAAAAAAA//sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//n/+f/5//n/+f/5//v/+//7AAAAAAAAAAAAAP/7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/6//r/+v/6//r/+v/4//v/+gAAAAAAAAAAAAD/+//7//oAAP/6//v/+P/5//gAAAAAAAAAAAAA//YAAAAAAAD/+//7AAAAAAAAAAAAAAAAAAAAAAAAAAD/2//b/9v/2//b/9sAAP/a/+P/y//d/93/0wAA//cAAAAA/8j/+P/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/zf/7/8IAAAAA/+oAAAAAAAAAAP91AAAAAAAAAAAAAP80/7P/UQAAAAAABgAAAAAAAAAAAAD/+v+0/23/+wAAAAAAAAAAAAAAAP/5//n/+f/5//n/+f/7//v/+wAAAAAAAAAAAAD/+wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+f/5//n/+f/5//n/+//7//sAAAAAAAAAAAAA//sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/v/+r/7//s//T/4v/a//D/6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7AAAAAAAAAAAAAAAAAAD/3wAAAAAAAAAAAAD/yf+M/8kAAAAA//X/z//3//gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9f/1//X/9P/1//UAAP/7//sAAAAAAAAAAAAA//IAAAAAAAAAAAAAAAAAAAAA//UAAP/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/SAAAAAAAAAAAAAP/x//L/7P/rAAD/8AAAAAAAAP/6AAAAAAAA//MAAAAAAAAAAAAAAAAAAP+O/47/jv+P/47/jv+I/8r/zf/CAAAAAP/sAAD/WP+1/5v/0v/L/8r/uf80/7kAAAAAAAsAAAAA/7z/2//O/9v/uQAAAAAAAAAAAAD/+wAAAAAAAAAAAAD/+v/6//r/+v/6//r/+//7//sAAAAAAAAAAAAAAAAAAP/7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/7n/uf+5/7n/uf+5/7r/3P/X/9v/8P/w/+L/8/+I/8T/u//q/9T/1P+4/03/uAALAAAAAAAAAAD/3P/p/9v/6f/X//gAAAAAAAAAAP/tAAAAAAAAAAAAAP/k/+T/5P/k/+T/5P/p/+7/6//z//j/+P/1//r/2v/s/+X/+v/s/+z/5P+z/+QAAAAAAAAAAAAA//H/9//w//f/8v/2AAAAAAAA//v/9//5//r/+v/5AAD/4f/h/+H/4f/h/+EAAP/e/+b/0P/h/+H/2wAA//QAAAAA/87/9//4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/4AAAAAAAAAAAAAAAAAAAAAAAA//T/9P/0//T/9P/0/+8AAAAAAAAAAAAAAAAAAP+9//j/+gAA//v/+/+y/23/sgAAAAAAAAAAAAAAAAAA//kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/3//f/9//3//f/9wAA//H/9f/iAAAAAP/wAAAAAP/7AAD/5v/6//oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//wAAAAAAAAAAAAAAAAAAAAAAAAAAP/cAAAAAAAA//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//j/+P/4//f/+P/4AAAAAAAAAAAAAAAAAAAAAP/5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//gAAAAAAAAAAAAA/9UAAP/VAAAAAAAAAAAAAP/WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//z//P/8//v//P/8//oAAAAAAAAAAAAAAAAAAP+sAAAAAAAAAAAAAP+qAAD/qgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/93/3f/d/93/3f/dAAAAAAAA/9wAAAAAAAAAAP/dAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//AAAP/pAAAAAAAAAAAAAAAAAAD/2QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7AAAAAAAAAAAAAAAAAAAAAAAAAAD/3AAAAAAAAP/7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//P/8//z/+//8//z/+gAAAAAAAAAAAAAAAAAA/6wAAAAAAAAAAAAA/6oAAP+qAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//gAAAAAAAAAAAAAAAAAAP/uAAAAAAAAAAAAAAAAAAAAAAAAAAD/6QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/8//z//P/7//z//P/6AAAAAAAAAAAAAAAAAAD/wgAAAAAAAAAAAAD/xwAA/8cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/98AAAAAAAAAAAAA/74AAP++AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/UAAAAAAAAAAAAAP+7AAD/uwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/c/9z/3P/c/9z/3AAA//j/+P/dAAAAAAAAAAD/5QAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//gAAAAAAAAAAAAAAAD//P/8//z/+//8//wAAAAAAAD/9gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/2AAAAAAAAAAAAAAAA/8IAAP/C//P/2//Q/+H/3QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAdAAMABAAAAAYACAACAAoAFwAFABkANAATADYAUAAvAFIAUgBKAFUAVQBLAFcAWABMAF0AXQBOAGAAYABPAGsAcABQAHQAdABWAHkAegBXAH4AfgBZAIUAhwBaAJgAmgBdAJwAnQBgAJ8AnwBiAKMA4QBjAOsBBACiAQYBCQC8AQwBKQDAASsBMwDeATUBQwDnAUUBSQD2AUwBTgD7AVABWgD+AVwBagEJAWwBbAEYAAEALQADAAYABwAJAAwADQATABQAFQAWABoAKQAzADQANwBCAEUAUABRAFcAawBsAG0AbgBvAHAAeQB6AHsAfAB9AH4AhQCHAI0AkwCVAJcAmACZAJoAmwCcAKMBRwACAB4ACwALAAAAGQAZAAEAGwAoAAIAKgAyABAANgA2ABkAOAA9ABoAQABBACAAQwBEACIARgBJACQASwBNACgATwBPACsAWABYACwAXQBdAC0ApACoAC4AqgC9ADMAwgDHAEcAzADOAE0A0ADhAFAA7AEEAGIBBgEJAHsBDAEpAH8BKwEzAJ0BNQE/AKYBRgFJALEBTAFOALUBUAFaALgBXAFcAMMBYwFmAMQBaQFqAMgBbAFsAMoAAgBsAAsACwArABsAGwABABwAHAACAB0AHQADAB4AHgAEAB8AHwAFACAAIAAGACEAIQAHACIAIgAIACMAIwAJACQAJAAKACUAJQALACYAJgAMACcAJwANACgAKAAOACoAKgAPACsAKwAQACwALAARAC0ALQASAC4ALgATAC8ALwAUADAAMAAVADEAMQAWADIAMgAXADYANgAYADgAOAAZADkAOQAaADoAOgAbADsAOwAcADwAPAAdAD0APQAeAEAAQAAfAEEAQQAgAEMAQwAhAEQARAAiAEYARgAjAEcARwAkAEgASAAlAEkASQAmAEsASwAnAEwATAAoAE0ATQApAE8ATwAqAFgAWAANAF0AXQAiAKQApAAKAKUApQAgAKYApgAQAKcApwAlAKgAqAAWAKoAqgAXAKsAqwAqAK4ArgABAK8ArwADALAAsAAMALEAsQANALIAsgASALMAuAAYALkAuQAZALoAvQAbAMIAwgAhAMMAxwAiAM4AzgANANAA0AAWANIA0gADANQA1QADANYA2QAHANoA3AANAN0A3wASAOAA4AACAOEA4QAiAO8A8gABAPMA9AACAPUA+QADAPoA/QAFAP4A/wAGAQABBAAHAQYBBgAIAQcBBwAJAQgBCQAKAQwBDwAMARABEgANARMBFQAPARYBGAAQARkBGwARARwBIQASASIBJQAUASYBJwAWASgBKQAXASsBKwANASwBLgAYAS8BMgAZATMBMwAaATUBOQAbAToBPQAdAT4BPwAeAUYBRwAfAUgBSQAgAUwBTgAhAVABUAAhAVEBUwAiAVQBVgAkAVcBWQAlAVoBWgAmAVwBXAAmAWMBZgAoAWkBagAqAWwBbAAi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) format("truetype");font-weight:400;font-style:normal;font-display:swap}:root{--ink:#45345b;--muted:#79638f;--accent:#7651b6;--paper:#fffdf5;--line:#c7b6d9;background:#ede6fa;color:var(--ink);font-family:Trebuchet MS,Microsoft YaHei,Segoe UI,sans-serif}#storybookBackdrop{position:fixed;inset:0;z-index:0;background:url('+new URL("../art/cloud-islands-background.png",document.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"&&document.currentScript.src||document.baseURI).href+") center/cover no-repeat;pointer-events:none;opacity:.4}body[data-mode=title]:has(#drawer[hidden]) #storybookBackdrop{opacity:1}body[data-mode=title] #stage,body[data-mode=setup] #stage{display:none}button{border-radius:4px;border-color:#b9a7cc;min-height:44px}button:focus-visible,input:focus-visible,select:focus-visible,summary:focus-visible{outline:3px solid #7e53be;outline-offset:4px}button:hover:not(:disabled){background:#e9ddf7;border-color:#8564aa}.primary{background:#7651b6;border-color:#664198;box-shadow:2px 3px #49345e20;min-height:48px}.primary:hover:not(:disabled){background:#65409f;border-color:#553285}.eyebrow{color:#6d5388;font-size:11px;letter-spacing:1.5px}p{color:#6a567d}.small-copy,small{color:#776187}.wordmark{font-family:Microsoft YaHei,sans-serif;font-size:25px;font-weight:700;letter-spacing:2px;color:#684899}#topbar{z-index:5}#topbar nav button{background:#fffbf3;border:1px solid #b5a1ca;border-radius:4px;box-shadow:1px 2px #b9a4cf40;min-height:42px}#chapterName{color:#6f568a}#identityBoard,#sidebar{background:#fffdf5f5!important;border:1.5px solid #8f77a7!important;border-radius:3px!important;box-shadow:3px 4px #a18ab727!important}#identityBoard>header{font-weight:700;border-bottom:1px dashed #baa7cd;padding-bottom:13px}#identityBoard #portraitWrap{background:#f0e8f8;border:1px solid #d7c8e5;margin:14px 0 18px}#identityBoard .balance{border-top:1px dashed #c8b6d8}#identityBoard .trait b{font-family:Trebuchet MS,sans-serif;font-size:26px;font-weight:700}#identityBoard .chapter-progress{border-top-style:dashed}body:is([data-mode=life],[data-mode=choice],[data-mode=result]) #stage{border:1.5px solid #8f77a7;border-radius:4px;box-shadow:3px 4px #a18ab727}.profile-context h2,#sidebar h1,.decision-body h1,.review h1,.drawer-card h1{font-family:Microsoft YaHei,sans-serif;font-weight:700;letter-spacing:.4px}#sidebar h1{font-size:22px}.info-section h2{font-weight:700;font-size:14px}.info-section{border-top-style:dashed}.focus-tabs button{border-radius:3px;background:#f5eefb;font-weight:500}.focus-tabs button[aria-pressed=true]{background:#e0cff1;border-color:#8a64ad;box-shadow:inset 0 -3px #8a64ad}.place{border:1px solid #b19ac7;background:#fffcf3ee;border-radius:3px;box-shadow:1px 2px #a793b52b;font-size:11px}.place.destination{background:#eadcf8;border-color:#8663a4}#choiceDialog,.drawer-card,.review{background:#fffcf4;border:2px solid #8d73a4;border-radius:5px;box-shadow:5px 7px #5d426335,0 15px 60px #3a254525}.decision-top{background:#f4ecfb;border-bottom:1px dashed #b69cc9;padding:13px 25px}.decision-body{padding:25px 28px 28px}.decision-body h1{font-size:29px;color:#563775}#choiceDialog .choices button{background:#fffdf7;border:1.5px solid #b39ac8;border-radius:3px;box-shadow:2px 3px #b29bc92b;padding:17px 20px}#choiceDialog .choices button:hover:not(:disabled){background:#eee2fa;border-color:#81609f;box-shadow:3px 4px #b29bc94f}#choiceDialog .choices button strong{font-weight:700;color:#4d355f}#choiceDialog .choices button small{border-top:1px dashed #d2c1df;padding-top:10px;color:#674b7f}#choiceDialog .choices button.executing{background:#e9d8f7;border-color:#79539a}.result-change{background:#eee2f8;border-left-color:#9168b5}.meanwhile{border-top-style:dashed}.ticket{background:transparent url("+new URL("../art/travel-ticket.png",document.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"&&document.currentScript.src||document.baseURI).href+') center/100% 145% no-repeat!important;box-shadow:none!important;border:0!important;border-radius:0!important;color:#4b365f!important;min-height:76px;padding:14px 30px;text-align:left;display:flex;align-items:center;justify-content:flex-start;transition:transform .16s,filter .16s}.ticket:hover:not(:disabled){transform:translate(6px);filter:drop-shadow(0 3px 2px #67468120)}.ticket:active:not(:disabled){transform:translate(6px) translateY(2px)}.ticket>span{display:block;font-size:18px;font-weight:700;letter-spacing:1px;line-height:1.4}.ticket small{display:block;font-size:10px;letter-spacing:1.6px;margin-top:4px;color:#765e8a}.ticket.primary{color:#6739a7!important}.ticket:disabled{opacity:.5;filter:grayscale(.6)}.title-card{left:7vw;top:18vh;width:min(970px,85vw)}.title-card>.eyebrow{font-size:15px;font-weight:700;letter-spacing:3px;color:#705096}.title-card h1{font-family:Arial Rounded MT Bold,Trebuchet MS,Microsoft YaHei,sans-serif;font-size:clamp(49px,7.4vw,112px);font-weight:800;letter-spacing:-3px;line-height:1.12;color:#8053d1;margin:20px 0 0;text-shadow:0 2px #fff4}.title-card h1{font-family:Audiowide,Trebuchet MS,sans-serif;font-weight:400;letter-spacing:-1.5px}.ticket small,.wordmark small{font-family:Audiowide,Trebuchet MS,sans-serif}.title-line{font:500 19px Microsoft YaHei,sans-serif;letter-spacing:3px;color:#6d5288;margin-top:24px}.title-actions{width:310px;gap:8px;margin-top:34px}.title-actions .primary{font-size:18px}.title-actions .secondary{flex-direction:row}.title-settings{font-size:12px;color:#684b87;margin:17px 0 0 20px;min-height:32px}.edition{margin:6px 0 0 23px;font-size:10px;color:#7b6492;letter-spacing:1px}.setup-card{left:5vw;right:5vw;top:5vh;bottom:5vh;width:auto;padding:26px 30px 0;background:#fffcf3f0;border:1.5px solid #9379a9;border-radius:4px;box-shadow:5px 6px #9b83b72b}.setup-card>.back{font-size:13px;min-height:36px;padding:4px 12px;border:1px solid #b29ac8;background:#fffdf7;color:#65467e}.setup-steps{position:absolute;top:33px;right:30px;width:440px;border:0;padding:0;margin:0;font-size:11px;gap:20px;color:#8b739d}.setup-steps .active{font-weight:700;color:#6c3ba1;border-bottom:2px solid #9164b7;padding-bottom:8px}#setupBody{margin-top:22px}.setup-card h1{font-family:Microsoft YaHei,sans-serif;font-size:31px;font-weight:700;color:#56366f;line-height:1.45;margin:10px 0 12px}.setup-card p{font-size:13px;color:#715a84}.context-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:34px}.selection-card{min-height:208px;padding:27px 24px;background:#fffdf7;border:1.5px solid #b9a3ce;border-radius:3px;box-shadow:3px 4px #ad95c12b;gap:20px}.selection-card strong{font-size:20px;font-weight:700;color:#59406f}.selection-card span{font-size:13px;line-height:1.9}.selection-card small{font-size:12px;font-weight:700;margin-top:auto}.selection-card.active{background:#ede0f9;border:2px solid #8a5aaf;box-shadow:4px 5px #ae94c14a}.setup-footer{background:#fffcf3f5;padding:18px 0 20px;justify-content:flex-end;margin-top:23px;gap:22px}.setup-footer .primary{order:2;min-width:196px;min-height:48px;font-size:15px;border-radius:3px}.setup-footer>span{font-size:11px}.setup-caption{display:none}.focus-card-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:26px}.focus-card{min-width:0;position:relative;display:flex;align-items:center;flex-direction:column;padding:15px 16px 18px;background:#fffdf5;border:1.5px solid #b39bc7;box-shadow:3px 4px #a990bb2b;border-radius:2px}.focus-card canvas{display:block;width:120px;height:140px;margin:0 auto 6px}.focus-card strong{display:block;font-size:18px;font-weight:700;color:#553868;letter-spacing:1px}.focus-card>span{font-size:11px;line-height:1.8;color:#7b628c;margin:9px 0 13px}.preset-points{width:100%;display:flex;justify-content:center;gap:18px;border-top:1px dashed #cdbada;padding-top:11px}.preset-points>span{font-size:10px;color:#7b638d}.preset-points b{display:block;font-size:20px;line-height:1.5;color:#5b3a78;margin-top:3px}.focus-card[aria-pressed=true]{border:2px solid #8053aa;background:#eee1fa;box-shadow:4px 5px #a78bbb4a}.focus-card[aria-pressed=true]:before{content:"已选";position:absolute;top:10px;right:11px;color:#724398;font-size:11px;font-weight:700}.focus-summary{display:flex;justify-content:center;align-items:center;gap:20px;font-size:12px;color:#7f6395;margin-top:23px}.focus-summary strong{font-size:21px;color:#68428c;letter-spacing:4px}.focus-summary>span{border-left:1px solid #cbb5dc;padding-left:20px}.focus-designer{display:flex;flex-direction:column;gap:17px;margin-top:26px}.attribute-paper{display:grid;grid-template-columns:minmax(0,1fr) 190px;gap:14px 30px;padding:18px 24px;background:#fffdf7;border:1.5px solid #aa90c0;border-radius:2px;box-shadow:3px 4px #aa90c028}.attribute-paper h2{font-family:Microsoft YaHei,sans-serif;font-size:25px;font-weight:700;color:#5e3d7b}.attribute-paper p{font-size:12px;margin-top:6px}.attribute-number{display:flex;align-items:center;justify-content:space-between;gap:15px}.attribute-number button{font-size:23px;color:#845ca7;background:#f1e7fa;width:44px;min-height:44px;padding:0;border:1px solid #baa2cd}.attribute-number output{min-width:38px;text-align:center;font-size:42px;font-weight:700;color:#67428b;font-family:Trebuchet MS,sans-serif}.attribute-paper input{grid-column:1/-1;width:100%;accent-color:#9065b7;height:14px;margin:0}body[data-focus-view=custom] .setup-balance{padding:11px 20px;margin:22px 0 0;font-size:22px;background:#eadcf5;color:#6b428d;border-radius:2px}body[data-mode=setup][data-page=appearance] .setup-card{right:auto;width:520px;left:6vw}body[data-mode=setup][data-page=appearance] .setup-steps{position:static;width:auto;margin:16px 0 0;gap:12px}body[data-mode=setup][data-page=appearance] #setupBody{margin-top:18px}body[data-mode=setup][data-page=appearance] #portraitWrap{display:block!important;left:62vw;top:24vh;width:270px;height:360px;background:#fffcf1e8;border:1.5px solid #a28bb5;box-shadow:5px 6px #a38bb52b;border-radius:3px;padding:10px}body[data-mode=setup][data-page=appearance] #portrait{width:250px;height:290px}body[data-mode=setup][data-page=appearance] #portraitWrap>span{color:#755b8b}.appearance{gap:18px;margin-top:24px}.appearance label{font-size:13px}.appearance select{background:#fffdf7;border:1px solid #bba4ce;border-radius:3px;color:#65457e;font-size:13px}.gallery-card{width:680px}.gallery-card article{border-top:1px dashed #c8b5d7;margin-top:18px;padding-top:17px}.gallery-card article h2{font-family:Microsoft YaHei,sans-serif;font-size:16px;font-weight:700}.gallery-card article p{font-size:13px;margin-top:10px}.gallery-card summary{font-size:13px;color:#70518b}.collection-empty{padding:30px 10px 40px;border-top:1px dashed #c5afd6}body[data-mode=setup][data-page=focus] .setup-card{background:transparent;border-color:transparent;box-shadow:none}body[data-mode=setup][data-page=focus] .setup-footer{background:transparent}body[data-mode=setup][data-page=focus] .focus-card{background:#fffdf5f5}body[data-mode=setup][data-page=focus] .focus-card[aria-pressed=true]{background:#eadcf8f5}body[data-mode=setup][data-page=focus] .focus-summary{width:fit-content;margin-left:auto;margin-right:auto;padding:9px 20px;background:#fffdf5e8;border:1px solid #c6b1d8;border-radius:3px}body[data-mode=setup][data-page=focus][data-focus-view=custom] .focus-designer,body[data-mode=setup][data-page=focus][data-focus-view=custom] #setupBalance{margin-left:260px}body[data-mode=setup][data-page=focus][data-focus-view=custom] #portraitWrap{display:block;left:calc(5vw + 30px);top:32vh;width:220px;height:300px;background:#fffdf5ee;border:1.5px solid #aa90c0;border-radius:3px;box-shadow:3px 4px #aa90c030;padding:10px}body[data-mode=setup][data-page=focus][data-focus-view=custom] #portrait{width:200px;height:240px}body[data-mode=setup][data-page=focus][data-focus-view=custom] #portraitWrap>span{color:#755b8b;font-size:11px;margin-top:8px}.setup-footer .primary{background:transparent url('+new URL("../art/travel-ticket.png",document.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"&&document.currentScript.src||document.baseURI).href+") center/100% 145% no-repeat;color:#644085!important;border:0;box-shadow:none;min-height:58px;justify-content:center;font-weight:700}.setup-footer .primary:hover:not(:disabled){background:transparent url("+new URL("../art/travel-ticket.png",document.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"&&document.currentScript.src||document.baseURI).href+") center/100% 145% no-repeat;color:#58337e!important;filter:drop-shadow(0 3px 2px #67468120)}.setup-card{display:flex;flex-direction:column;overflow:hidden}.setup-card>.back{align-self:flex-start;flex:none}#setupBody{flex:1;min-height:0;overflow:auto;padding:0 2px 5px 0;scrollbar-width:thin;scrollbar-color:#b59aca transparent}.setup-footer{position:static;flex:none}body[data-mode=setup][data-page=focus][data-focus-view=custom] .setup-footer #setupBalance{margin:0;padding:8px 16px;background:#fffdf5f0;border:1px solid #c6b1d8;font-size:20px;letter-spacing:4px;flex:1;text-align:center}.focus-card>span{font-size:12px!important}.preset-points>span{font-size:11px}.focus-card>span,.preset-points>span{color:#684c7b}#cameraHint,#sceneBadge{font-size:11px;color:#705986}.edition{color:#684c7b}.gate-card{background:#fffdf4f2;border:1.5px solid #a78bbd;border-radius:4px;box-shadow:4px 5px #a58ab62a}.gate-card h1{font-family:Microsoft YaHei,sans-serif;font-weight:700;color:#62417c}@media(min-height:850px){.focus-card canvas{width:145px;height:170px}.focus-card{padding-top:25px;padding-bottom:25px}.title-actions{margin-top:45px;gap:14px}}@media(max-height:760px){.title-card{top:10vh}.title-card h1{font-size:clamp(48px,6.5vw,90px);margin-top:13px}.title-line{margin-top:16px;font-size:17px}.title-actions{margin-top:25px;gap:5px}.ticket{min-height:69px}.title-settings{margin-top:8px}.setup-card{top:3vh;bottom:3vh;padding-top:21px}.setup-steps{top:29px}.setup-card h1{font-size:28px}.focus-card-grid{margin-top:20px}.focus-card{padding:10px 12px 13px}.focus-card canvas{width:105px;height:123px}.focus-card>span{margin:7px 0 10px;font-size:10px}.preset-points{padding-top:8px}.focus-summary{margin-top:16px}.setup-footer{padding:15px 0;margin-top:17px}.attribute-paper{padding:13px 20px;gap:10px 25px}.focus-designer{gap:13px;margin-top:20px}.attribute-paper h2{font-size:23px}.attribute-number output{font-size:35px}}@media(max-width:1000px){.setup-steps{width:390px;font-size:10px;gap:12px}.setup-card{left:3vw;right:3vw;padding-left:23px;padding-right:23px}.setup-card h1{font-size:26px}.focus-card-grid{gap:12px}.focus-card strong{font-size:16px}.focus-card>span{font-size:10px;text-align:center}.preset-points,.context-cards{gap:12px}.selection-card{padding:22px 17px}.selection-card strong{font-size:17px}body[data-mode=setup][data-page=appearance] .setup-card{left:3vw;width:480px}body[data-mode=setup][data-page=appearance] #portraitWrap{left:auto;right:3vw;width:230px;height:310px}body[data-mode=setup][data-page=appearance] #portrait{width:210px;height:250px}#identityBoard #portraitWrap{margin:0;background:transparent;border:0}}@media(max-width:760px){.title-card{left:7vw;width:88vw;top:13vh}.title-card>.eyebrow{font-size:12px;letter-spacing:2px}.title-card h1{font-size:clamp(38px,8vw,58px);letter-spacing:-1px}.title-line{font-size:15px}.title-actions{width:270px}.ticket{min-height:67px}.setup-card{inset:16px 14px;max-height:none;width:auto!important;left:14px!important;right:14px!important;transform:none;padding:18px 20px 0}.setup-steps{position:static;width:auto;margin:17px 0 0;font-size:9px}.context-cards{grid-template-columns:1fr;gap:11px;margin-top:20px}.selection-card{min-height:0;padding:17px;gap:11px}.focus-card-grid{grid-template-columns:repeat(2,1fr)}.focus-card canvas{width:90px;height:105px}.focus-card strong{font-size:15px}.focus-card>span{font-size:10px}.setup-footer>span{display:none}.setup-footer .primary{width:100%}.attribute-paper{grid-template-columns:minmax(0,1fr) 130px;padding:13px;gap:12px}.attribute-paper p{font-size:11px}.attribute-paper h2{font-size:21px}.attribute-number{gap:8px}.attribute-number button{width:34px;min-height:40px;font-size:20px}.attribute-number output{font-size:31px;min-width:28px}body[data-mode=setup][data-page=appearance] #portraitWrap{display:none!important}.focus-summary{gap:12px;font-size:11px}.focus-summary strong{font-size:18px;letter-spacing:2px}}@media(max-width:1000px)and (min-width:761px){body[data-mode=setup][data-page=focus][data-focus-view=custom] .focus-designer,body[data-mode=setup][data-page=focus][data-focus-view=custom] #setupBalance{margin-left:205px}body[data-mode=setup][data-page=focus][data-focus-view=custom] #portraitWrap{left:calc(3vw + 23px);width:178px;height:275px}body[data-mode=setup][data-page=focus][data-focus-view=custom] #portrait{width:158px;height:215px}}@media(max-width:760px){body[data-mode=setup][data-page=focus][data-focus-view=custom] #portraitWrap{display:none}body[data-mode=setup][data-page=focus][data-focus-view=custom] .focus-designer,body[data-mode=setup][data-page=focus][data-focus-view=custom] #setupBalance{margin-left:0}}@media(max-width:760px){.focus-card>span{font-size:11px!important}.setup-footer{flex-wrap:wrap;gap:10px;padding:12px 0}.setup-footer #setupBalance{flex-basis:100%!important}.setup-footer .primary{min-width:0}.setup-card h1{font-size:24px}#setupBody{flex:none;overflow:visible}.setup-card{overflow:auto}.setup-footer{position:sticky;bottom:0;background:#fffdf5e8!important}}@media(max-height:760px)and (min-width:1001px){#identityBoard{padding:17px 16px}#identityBoard #portraitWrap{height:124px;margin:10px 0 12px}#identityBoard #portrait{width:110px;height:124px}#identityBoard .balance{margin-top:16px;padding-top:15px}#identityBoard .balance section{gap:11px;margin-top:14px}#identityBoard .chapter-progress{margin-top:14px;padding-top:12px}}.entry-actions{display:flex;justify-content:flex-end;gap:12px;align-items:center;margin-top:24px}.drawer-card .small-copy{margin-top:18px}body[data-mode=setup][data-page=focus][data-focus-view=presets] .setup-card{inset:0;width:auto;padding:0;overflow:auto;border:0;border-radius:0;background:transparent;box-shadow:none}body[data-page=focus][data-focus-view=presets] .setup-steps{display:none}body[data-page=focus][data-focus-view=presets] .setup-card>.back,body[data-page=focus][data-focus-view=presets] .setup-footer .primary{position:fixed;z-index:2;width:clamp(180px,18vw,360px);height:clamp(48px,7.2vh,82px);min-height:48px;padding:0 22px;border:0;border-radius:0;box-shadow:none;background:transparent url("+new URL("../art/focus-nav.svg",document.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"&&document.currentScript.src||document.baseURI).href+') center/100% 100% no-repeat;color:#111!important;font:700 clamp(13px,1.1vw,22px) "Arial","Microsoft YaHei",sans-serif}body[data-page=focus][data-focus-view=presets] .setup-card>.back{left:-1.5vw;top:6vh}body[data-page=focus][data-focus-view=presets] .setup-footer .primary{right:9vw;bottom:8.5vh;min-width:0}body[data-page=focus][data-focus-view=presets] .setup-footer .primary:hover,body[data-page=focus][data-focus-view=presets] .setup-card>.back:hover{background-image:url('+new URL("../art/focus-nav.svg",document.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"&&document.currentScript.src||document.baseURI).href+");background-color:transparent;filter:drop-shadow(0 3px 1px #0002)}body[data-page=focus][data-focus-view=presets] #setupBody{flex:none;overflow:visible;margin:0;padding:0}body[data-page=focus][data-focus-view=presets] .setup-footer{position:static;background:transparent!important;margin:0;padding:0}body[data-page=focus][data-focus-view=presets] .focus-card-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4.5vw;width:82vw;max-width:1680px;margin:15.5vh auto 0;padding:0 0 21vh}.focus-card-slot{position:relative;min-width:0;padding-top:6.5vh}body[data-page=focus][data-focus-view=presets] .focus-card{position:relative;width:100%;aspect-ratio:327/563.4;display:block;margin:0;padding:0;min-height:0;background:transparent url("+new URL("../art/focus-card-default.svg",document.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"&&document.currentScript.src||document.baseURI).href+") center/100% 100% no-repeat;border:0;border-radius:0;box-shadow:none;color:#111;transition:filter .15s}body[data-page=focus][data-focus-view=presets] .focus-card[aria-pressed=true]{background:transparent url("+new URL("../art/focus-card-selected.svg",document.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"&&document.currentScript.src||document.baseURI).href+') center/100% 100% no-repeat;border:0;box-shadow:none}body[data-page=focus][data-focus-view=presets] .focus-card[aria-pressed=true]:before{content:none}body[data-page=focus][data-focus-view=presets] .focus-card:hover{filter:drop-shadow(0 4px 3px #0002)}body[data-page=focus][data-focus-view=presets] .focus-card:active{transform:none}body[data-page=focus][data-focus-view=presets] .focus-card canvas{position:absolute;left:16%;top:10%;width:68%;height:auto;aspect-ratio:180/210;margin:0;pointer-events:none}body[data-page=focus][data-focus-view=presets] .focus-card strong{position:absolute;left:8%;right:8%;top:84.5%;height:12%;display:flex;align-items:center;justify-content:center;font-family:Microsoft YaHei,Segoe UI,sans-serif;font-size:clamp(20px,2.1vw,43px);font-weight:400;letter-spacing:0;color:#111}.focus-selection-marker{position:absolute;top:0;left:50%;transform:translate(-50%);width:clamp(24px,2.4vw,48px);height:clamp(22px,2.15vw,43px);background:#171717;clip-path:polygon(0 0,100% 0,50% 100%);visibility:hidden}.focus-selection-marker:after{content:"";position:absolute;inset:3px 4px 6px;background:#fff;clip-path:polygon(0 0,100% 0,50% 100%)}.focus-card-slot[data-selected=true] .focus-selection-marker{visibility:visible}body[data-page=focus][data-focus-view=presets] .preset-points{position:absolute;top:calc(100% + 2.8vh);left:7%;right:7%;width:auto;padding:0;display:flex;justify-content:space-between;gap:8px;border:0}body[data-page=focus][data-focus-view=presets] .preset-points[hidden]{display:none}body[data-page=focus][data-focus-view=presets] .preset-points>span{display:grid;place-items:center;width:28%;aspect-ratio:1;background:#fff;border:1.7px solid #222;color:#111;font:400 clamp(22px,2.5vw,50px) "Arial",sans-serif}@media(min-width:761px)and (max-aspect-ratio:3/2){body[data-page=focus][data-focus-view=presets] .focus-card-grid{width:88vw;gap:3vw;margin-top:15vh}body[data-page=focus][data-focus-view=presets] .setup-footer .primary{right:6vw;bottom:5vh}}@media(min-width:761px)and (max-height:650px){body[data-page=focus][data-focus-view=presets] .focus-card-grid{width:min(76vw,245vh);gap:3vw;margin-top:10vh;padding-bottom:27vh}.focus-card-slot{padding-top:7vh}body[data-page=focus][data-focus-view=presets] .setup-footer .primary{bottom:3vh;right:3vw}}@media(max-width:760px){body[data-mode=setup][data-page=focus][data-focus-view=presets] .setup-card{inset:0!important;width:100%!important;padding:0}body[data-page=focus][data-focus-view=presets] .setup-card>.back{position:absolute;top:18px;left:-6px;width:155px;height:48px}body[data-page=focus][data-focus-view=presets] .focus-card-grid{width:90%;grid-template-columns:repeat(2,minmax(0,1fr));gap:88px 18px;margin:100px auto 0;padding-bottom:160px}.focus-card-slot{padding-top:30px}.focus-selection-marker{width:25px;height:24px}body[data-page=focus][data-focus-view=presets] .focus-card strong{font-size:clamp(19px,5vw,29px)}body[data-page=focus][data-focus-view=presets] .preset-points{top:calc(100% + 12px);gap:6px}body[data-page=focus][data-focus-view=presets] .preset-points>span{font-size:24px}body[data-page=focus][data-focus-view=presets] .setup-footer .primary{right:18px;bottom:18px;width:190px;height:50px;filter:drop-shadow(0 2px 5px #ede6fa)}}@media(max-width:760px){body[data-page=focus][data-focus-view=presets] .focus-card-grid{padding-bottom:90px}body[data-page=focus][data-focus-view=presets] .setup-footer{display:flex;justify-content:flex-end;padding:0 18px 24px}body[data-page=focus][data-focus-view=presets] .setup-footer .primary{position:relative;right:auto;bottom:auto}}.visually-hidden{position:absolute!important;width:1px!important;height:1px!important;margin:-1px!important;padding:0!important;overflow:hidden!important;clip-path:inset(50%)!important;white-space:nowrap!important;border:0!important}body[data-mode=setup][data-page=focus][data-focus-view=custom] .setup-card{inset:0;width:auto;padding:0;overflow:auto;border:0;border-radius:0;background:transparent;box-shadow:none}body[data-page=focus][data-focus-view=custom] .setup-steps{display:none}body[data-page=focus][data-focus-view=custom] #setupBody{flex:none;overflow:visible;margin:0;padding:0}body[data-page=focus][data-focus-view=custom] .setup-card>.back,body[data-page=focus][data-focus-view=custom] .setup-footer .primary{position:fixed;z-index:3;width:clamp(180px,18vw,360px);height:clamp(48px,7.2vh,82px);min-height:48px;min-width:0;padding:0 22px;border:0;border-radius:0;box-shadow:none;background:transparent url('+new URL("../art/focus-nav.svg",document.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"&&document.currentScript.src||document.baseURI).href+") center/100% 100% no-repeat;color:#111!important;font:700 clamp(13px,1.1vw,22px) Arial,sans-serif}body[data-page=focus][data-focus-view=custom] .setup-card>.back{left:-1.5vw;top:6vh}body[data-page=focus][data-focus-view=custom] .setup-footer .primary{right:6vw;bottom:5vh}body[data-page=focus][data-focus-view=custom] .setup-card>.back:hover,body[data-page=focus][data-focus-view=custom] .setup-footer .primary:hover{background-color:transparent;background-image:url("+new URL("../art/focus-nav.svg",document.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"&&document.currentScript.src||document.baseURI).href+");filter:drop-shadow(0 3px 1px #0002)}body[data-page=focus][data-focus-view=custom] .setup-footer{position:static;margin:0;padding:0;background:transparent!important}.custom-focus-layout{display:grid;grid-template-columns:24% 1fr;width:94vw;height:71vh;min-height:420px;margin:14.5vh 2vw 14.5vh 4vw}.custom-preview{position:relative;z-index:1;min-width:0;height:100%;background:url("+new URL("../art/custom-portrait-frame.svg",document.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"&&document.currentScript.src||document.baseURI).href+') center/100% 100% no-repeat}.custom-preview>strong{position:absolute;top:84.5%;left:8%;right:8%;height:12%;display:flex;align-items:center;justify-content:center;color:#111;font:400 clamp(24px,2.7vw,55px) "Microsoft YaHei",sans-serif}body[data-page=focus][data-focus-view=custom] .custom-preview #portraitWrap{position:absolute;inset:4% 9% 19%;width:82%;height:77%;display:flex!important;align-items:center;justify-content:center;margin:0;padding:0;border:0;border-radius:0;background:transparent;box-shadow:none}body[data-page=focus][data-focus-view=custom] .custom-preview #portrait{width:100%;height:auto;aspect-ratio:240/280}body[data-page=focus][data-focus-view=custom] .custom-preview #portraitWrap>span{display:none}.custom-stat-list{display:grid;grid-template-rows:repeat(3,minmax(0,1fr));gap:3vh;margin-left:-1.8vw}.custom-stat-row{display:grid;grid-template-columns:43% 17% 1fr;gap:1.5vw;align-items:center;min-width:0;padding:7px 4vw 7px 8vw;background:url('+new URL("../art/custom-stat-paper.svg",document.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"&&document.currentScript.src||document.baseURI).href+`) center/100% 100% no-repeat}.custom-stat-description{text-align:center;min-width:0}.custom-stat-description h2{font:400 clamp(38px,6.5vw,132px)/1.08 "Microsoft YaHei","Segoe UI",sans-serif;color:#050505;white-space:nowrap}body[data-page=focus][data-focus-view=custom] .custom-stat-description p{font:400 clamp(11px,1.05vw,22px)/1.55 "Microsoft YaHei",sans-serif;color:#999;margin-top:4px;white-space:nowrap}.custom-stat-control{display:grid;grid-template-columns:26% 48% 26%;align-items:center;width:auto;height:100%;aspect-ratio:1;max-width:100%;border:2px solid #222;outline:1px solid #555;outline-offset:-7px;background:#fff}.custom-stat-control output{font:400 clamp(50px,6.5vw,135px)/1 Arial,sans-serif;color:#000;text-align:center;min-width:0}.custom-stat-control button{display:grid;place-items:center;min-width:0;min-height:44px;width:100%;height:70%;padding:0;border:0;border-radius:0;background:transparent;color:#999;font:400 clamp(34px,4.3vw,88px)/1 Arial,sans-serif}.custom-stat-control button:hover:not(:disabled){background:transparent;color:#222}.custom-stat-control button:active:not(:disabled){transform:scale(.92)}.custom-stat-control button:disabled{opacity:.22;cursor:default}@media(min-width:761px)and (max-width:1200px){.custom-stat-row{padding-left:4vw;grid-template-columns:48% 23% 1fr;gap:2vw}.custom-stat-description h2{font-size:6.8vw}body[data-page=focus][data-focus-view=custom] .custom-stat-description p{font-size:11px;white-space:normal}.custom-stat-control{height:auto;width:100%;aspect-ratio:1}}@media(max-width:760px){body[data-mode=setup][data-page=focus][data-focus-view=custom] .setup-card{inset:0!important;width:100%!important;padding:0}body[data-page=focus][data-focus-view=custom] .setup-card>.back{position:absolute;left:-6px;top:18px;width:155px;height:48px}.custom-focus-layout{grid-template-columns:1fr;width:94%;height:auto;min-height:0;margin:88px auto 0;gap:22px}.custom-preview{width:180px;height:282px;margin:0 auto}.custom-preview>strong{font-size:23px}.custom-stat-list{margin-left:0;gap:16px}.custom-stat-row{min-height:124px;grid-template-columns:minmax(0,1fr) 106px;gap:12px;padding:10px 22px 10px 16px}.custom-stat-description h2{font-size:43px}body[data-page=focus][data-focus-view=custom] .custom-stat-description p{font-size:10px;white-space:normal;line-height:1.6}.custom-stat-control{width:106px;height:106px}.custom-stat-control output{font-size:59px}.custom-stat-control button{font-size:38px;min-height:44px}body[data-page=focus][data-focus-view=custom] .setup-footer{display:flex;justify-content:flex-end;padding:24px 18px}body[data-page=focus][data-focus-view=custom] .setup-footer .primary{position:relative;right:auto;bottom:auto;width:190px;height:50px}}
/*$vite$:1*/`,document.head.appendChild(As);const Di={rent:{name:"独自租住",text:"刚毕业，房租需要自己承担。工坊试工多耗 1 份精力。",energy:7},local:{name:"暂住亲友家",text:"有人接住你的日常。邻里帮忙少耗 1 份精力，但别人也期待你的回应。",energy:6},fresh:{name:"带着积蓄迁来",text:"生活暂有余裕，街区却很陌生。初始精力较充裕。",energy:8}};function rs(i,t){let e=i|0;for(const n of t)e=Math.imul(e^n.charCodeAt(0),16777619);return(e>>>0)%3}const mA="180",eo=0,ss=1,no=2,as=1,io=2,tn=3,dn=0,Me=1,en=2,fn=0,kn=1,os=2,cs=3,ls=4,Ao=5,_n=100,ro=101,so=102,ao=103,oo=104,co=200,lo=201,fo=202,ho=203,vA=204,xA=205,uo=206,po=207,go=208,mo=209,vo=210,xo=211,Eo=212,Bo=213,Mo=214,EA=0,BA=1,MA=2,Gn=3,wA=4,_A=5,SA=6,bA=7,ds=0,wo=1,_o=2,hn=0,So=1,bo=2,Co=3,yo=4,To=5,Ro=6,Po=7,fs=300,On=301,zn=302,CA=303,yA=304,Ui=306,TA=1e3,Sn=1001,RA=1002,Qe=1003,Io=1004,Li=1005,Ye=1006,PA=1007,bn=1008,We=1009,hs=1010,us=1011,fi=1012,IA=1013,Cn=1014,nn=1015,hi=1016,DA=1017,UA=1018,ui=1020,ps=35902,gs=35899,ms=1021,vs=1022,He=1023,pi=1026,gi=1027,xs=1028,LA=1029,Es=1030,FA=1031,NA=1033,Fi=33776,Ni=33777,Qi=33778,Hi=33779,QA=35840,HA=35841,kA=35842,GA=35843,OA=36196,zA=37492,VA=37496,YA=37808,WA=37809,XA=37810,jA=37811,JA=37812,KA=37813,ZA=37814,qA=37815,$A=37816,tr=37817,er=37818,nr=37819,ir=37820,Ar=37821,rr=36492,sr=36494,ar=36495,or=36283,cr=36284,lr=36285,dr=36286,Do=3200,Uo=3201,Bs=0,Lo=1,un="",Ce="srgb",Vn="srgb-linear",ki="linear",jt="srgb",Yn=7680,Ms=519,Fo=512,No=513,Qo=514,ws=515,Ho=516,ko=517,Go=518,Oo=519,_s=35044,Ss="300 es",Xe=2e3,Gi=2001;class Wn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const A=n[t];if(A!==void 0){const r=A.indexOf(e);r!==-1&&A.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const A=n.slice(0);for(let r=0,s=A.length;r<s;r++)A[r].call(this,t);t.target=null}}}const me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fr=Math.PI/180,hr=180/Math.PI;function mi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(me[i&255]+me[i>>8&255]+me[i>>16&255]+me[i>>24&255]+"-"+me[t&255]+me[t>>8&255]+"-"+me[t>>16&15|64]+me[t>>24&255]+"-"+me[e&63|128]+me[e>>8&255]+"-"+me[e>>16&255]+me[e>>24&255]+me[n&255]+me[n>>8&255]+me[n>>16&255]+me[n>>24&255]).toLowerCase()}function kt(i,t,e){return Math.max(t,Math.min(e,i))}function zo(i,t){return(i%t+t)%t}function ur(i,t,e){return(1-e)*i+e*t}function vi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function we(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Gt{constructor(t=0,e=0){Gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,A=t.elements;return this.x=A[0]*e+A[3]*n+A[6],this.y=A[1]*e+A[4]*n+A[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),A=Math.sin(e),r=this.x-t.x,s=this.y-t.y;return this.x=r*n-s*A+t.x,this.y=r*A+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xi{constructor(t=0,e=0,n=0,A=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=A}static slerpFlat(t,e,n,A,r,s,a){let c=n[A+0],o=n[A+1],d=n[A+2],f=n[A+3];const h=r[s+0],u=r[s+1],m=r[s+2],M=r[s+3];if(a===0){t[e+0]=c,t[e+1]=o,t[e+2]=d,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=u,t[e+2]=m,t[e+3]=M;return}if(f!==M||c!==h||o!==u||d!==m){let p=1-a;const l=c*h+o*u+d*m+f*M,S=l>=0?1:-1,_=1-l*l;if(_>Number.EPSILON){const y=Math.sqrt(_),b=Math.atan2(y,l*S);p=Math.sin(p*b)/y,a=Math.sin(a*b)/y}const B=a*S;if(c=c*p+h*B,o=o*p+u*B,d=d*p+m*B,f=f*p+M*B,p===1-a){const y=1/Math.sqrt(c*c+o*o+d*d+f*f);c*=y,o*=y,d*=y,f*=y}}t[e]=c,t[e+1]=o,t[e+2]=d,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,A,r,s){const a=n[A],c=n[A+1],o=n[A+2],d=n[A+3],f=r[s],h=r[s+1],u=r[s+2],m=r[s+3];return t[e]=a*m+d*f+c*u-o*h,t[e+1]=c*m+d*h+o*f-a*u,t[e+2]=o*m+d*u+a*h-c*f,t[e+3]=d*m-a*f-c*h-o*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,A){return this._x=t,this._y=e,this._z=n,this._w=A,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,A=t._y,r=t._z,s=t._order,a=Math.cos,c=Math.sin,o=a(n/2),d=a(A/2),f=a(r/2),h=c(n/2),u=c(A/2),m=c(r/2);switch(s){case"XYZ":this._x=h*d*f+o*u*m,this._y=o*u*f-h*d*m,this._z=o*d*m+h*u*f,this._w=o*d*f-h*u*m;break;case"YXZ":this._x=h*d*f+o*u*m,this._y=o*u*f-h*d*m,this._z=o*d*m-h*u*f,this._w=o*d*f+h*u*m;break;case"ZXY":this._x=h*d*f-o*u*m,this._y=o*u*f+h*d*m,this._z=o*d*m+h*u*f,this._w=o*d*f-h*u*m;break;case"ZYX":this._x=h*d*f-o*u*m,this._y=o*u*f+h*d*m,this._z=o*d*m-h*u*f,this._w=o*d*f+h*u*m;break;case"YZX":this._x=h*d*f+o*u*m,this._y=o*u*f+h*d*m,this._z=o*d*m-h*u*f,this._w=o*d*f-h*u*m;break;case"XZY":this._x=h*d*f-o*u*m,this._y=o*u*f-h*d*m,this._z=o*d*m+h*u*f,this._w=o*d*f+h*u*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,A=Math.sin(n);return this._x=t.x*A,this._y=t.y*A,this._z=t.z*A,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],A=e[4],r=e[8],s=e[1],a=e[5],c=e[9],o=e[2],d=e[6],f=e[10],h=n+a+f;if(h>0){const u=.5/Math.sqrt(h+1);this._w=.25/u,this._x=(d-c)*u,this._y=(r-o)*u,this._z=(s-A)*u}else if(n>a&&n>f){const u=2*Math.sqrt(1+n-a-f);this._w=(d-c)/u,this._x=.25*u,this._y=(A+s)/u,this._z=(r+o)/u}else if(a>f){const u=2*Math.sqrt(1+a-n-f);this._w=(r-o)/u,this._x=(A+s)/u,this._y=.25*u,this._z=(c+d)/u}else{const u=2*Math.sqrt(1+f-n-a);this._w=(s-A)/u,this._x=(r+o)/u,this._y=(c+d)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(kt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const A=Math.min(1,e/n);return this.slerp(t,A),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,A=t._y,r=t._z,s=t._w,a=e._x,c=e._y,o=e._z,d=e._w;return this._x=n*d+s*a+A*o-r*c,this._y=A*d+s*c+r*a-n*o,this._z=r*d+s*o+n*c-A*a,this._w=s*d-n*a-A*c-r*o,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,A=this._y,r=this._z,s=this._w;let a=s*t._w+n*t._x+A*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=s,this._x=n,this._y=A,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const u=1-e;return this._w=u*s+e*this._w,this._x=u*n+e*this._x,this._y=u*A+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}const o=Math.sqrt(c),d=Math.atan2(o,a),f=Math.sin((1-e)*d)/o,h=Math.sin(e*d)/o;return this._w=s*f+this._w*h,this._x=n*f+this._x*h,this._y=A*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),A=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(A*Math.sin(t),A*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bs.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bs.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,A=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*A,this.y=r[1]*e+r[4]*n+r[7]*A,this.z=r[2]*e+r[5]*n+r[8]*A,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,A=this.z,r=t.elements,s=1/(r[3]*e+r[7]*n+r[11]*A+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*A+r[12])*s,this.y=(r[1]*e+r[5]*n+r[9]*A+r[13])*s,this.z=(r[2]*e+r[6]*n+r[10]*A+r[14])*s,this}applyQuaternion(t){const e=this.x,n=this.y,A=this.z,r=t.x,s=t.y,a=t.z,c=t.w,o=2*(s*A-a*n),d=2*(a*e-r*A),f=2*(r*n-s*e);return this.x=e+c*o+s*f-a*d,this.y=n+c*d+a*o-r*f,this.z=A+c*f+r*d-s*o,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,A=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*A,this.y=r[1]*e+r[5]*n+r[9]*A,this.z=r[2]*e+r[6]*n+r[10]*A,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,A=t.y,r=t.z,s=e.x,a=e.y,c=e.z;return this.x=A*c-r*a,this.y=r*s-n*c,this.z=n*a-A*s,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return pr.copy(this).projectOnVector(t),this.sub(pr)}reflect(t){return this.sub(pr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,A=this.z-t.z;return e*e+n*n+A*A}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const A=Math.sin(e)*t;return this.x=A*Math.sin(n),this.y=Math.cos(e)*t,this.z=A*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),A=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=A,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pr=new L,bs=new xi;class Ut{constructor(t,e,n,A,r,s,a,c,o){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,A,r,s,a,c,o)}set(t,e,n,A,r,s,a,c,o){const d=this.elements;return d[0]=t,d[1]=A,d[2]=a,d[3]=e,d[4]=r,d[5]=c,d[6]=n,d[7]=s,d[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,A=e.elements,r=this.elements,s=n[0],a=n[3],c=n[6],o=n[1],d=n[4],f=n[7],h=n[2],u=n[5],m=n[8],M=A[0],p=A[3],l=A[6],S=A[1],_=A[4],B=A[7],y=A[2],b=A[5],T=A[8];return r[0]=s*M+a*S+c*y,r[3]=s*p+a*_+c*b,r[6]=s*l+a*B+c*T,r[1]=o*M+d*S+f*y,r[4]=o*p+d*_+f*b,r[7]=o*l+d*B+f*T,r[2]=h*M+u*S+m*y,r[5]=h*p+u*_+m*b,r[8]=h*l+u*B+m*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],A=t[2],r=t[3],s=t[4],a=t[5],c=t[6],o=t[7],d=t[8];return e*s*d-e*a*o-n*r*d+n*a*c+A*r*o-A*s*c}invert(){const t=this.elements,e=t[0],n=t[1],A=t[2],r=t[3],s=t[4],a=t[5],c=t[6],o=t[7],d=t[8],f=d*s-a*o,h=a*c-d*r,u=o*r-s*c,m=e*f+n*h+A*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/m;return t[0]=f*M,t[1]=(A*o-d*n)*M,t[2]=(a*n-A*s)*M,t[3]=h*M,t[4]=(d*e-A*c)*M,t[5]=(A*r-a*e)*M,t[6]=u*M,t[7]=(n*c-o*e)*M,t[8]=(s*e-n*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,A,r,s,a){const c=Math.cos(r),o=Math.sin(r);return this.set(n*c,n*o,-n*(c*s+o*a)+s+t,-A*o,A*c,-A*(-o*s+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(gr.makeScale(t,e)),this}rotate(t){return this.premultiply(gr.makeRotation(-t)),this}translate(t,e){return this.premultiply(gr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let A=0;A<9;A++)if(e[A]!==n[A])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const gr=new Ut;function Cs(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Oi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vo(){const i=Oi("canvas");return i.style.display="block",i}const ys={};function Ei(i){i in ys||(ys[i]=!0,console.warn(i))}function Yo(i,t,e){return new Promise(function(n,A){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:A();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Ts=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rs=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wo(){const i={enabled:!0,workingColorSpace:Vn,spaces:{},convert:function(A,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===jt&&(A.r=An(A.r),A.g=An(A.g),A.b=An(A.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(A.applyMatrix3(this.spaces[r].toXYZ),A.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===jt&&(A.r=Xn(A.r),A.g=Xn(A.g),A.b=Xn(A.b))),A},workingToColorSpace:function(A,r){return this.convert(A,this.workingColorSpace,r)},colorSpaceToWorking:function(A,r){return this.convert(A,r,this.workingColorSpace)},getPrimaries:function(A){return this.spaces[A].primaries},getTransfer:function(A){return A===un?ki:this.spaces[A].transfer},getToneMappingMode:function(A){return this.spaces[A].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(A,r=this.workingColorSpace){return A.fromArray(this.spaces[r].luminanceCoefficients)},define:function(A){Object.assign(this.spaces,A)},_getMatrix:function(A,r,s){return A.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(A){return this.spaces[A].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(A=this.workingColorSpace){return this.spaces[A].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(A,r){return Ei("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(A,r)},toWorkingColorSpace:function(A,r){return Ei("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(A,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Vn]:{primaries:t,whitePoint:n,transfer:ki,toXYZ:Ts,fromXYZ:Rs,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:t,whitePoint:n,transfer:jt,toXYZ:Ts,fromXYZ:Rs,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}}),i}const zt=Wo();function An(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xn(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let jn;class Xo{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{jn===void 0&&(jn=Oi("canvas")),jn.width=t.width,jn.height=t.height;const A=jn.getContext("2d");t instanceof ImageData?A.putImageData(t,0,0):A.drawImage(t,0,0,t.width,t.height),n=jn}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Oi("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const A=n.getImageData(0,0,t.width,t.height),r=A.data;for(let s=0;s<r.length;s++)r[s]=An(r[s]/255)*255;return n.putImageData(A,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(An(e[n]/255)*255):e[n]=An(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let jo=0;class mr{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jo++}),this.uuid=mi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},A=this.data;if(A!==null){let r;if(Array.isArray(A)){r=[];for(let s=0,a=A.length;s<a;s++)A[s].isDataTexture?r.push(vr(A[s].image)):r.push(vr(A[s]))}else r=vr(A);n.url=r}return e||(t.images[this.uuid]=n),n}}function vr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jo=0;const xr=new L;class _e extends Wn{constructor(t=_e.DEFAULT_IMAGE,e=_e.DEFAULT_MAPPING,n=Sn,A=Sn,r=Ye,s=bn,a=He,c=We,o=_e.DEFAULT_ANISOTROPY,d=un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jo++}),this.uuid=mi(),this.name="",this.source=new mr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=A,this.magFilter=r,this.minFilter=s,this.anisotropy=o,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xr).x}get height(){return this.source.getSize(xr).y}get depth(){return this.source.getSize(xr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const A=this[e];if(A===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}A&&n&&A.isVector2&&n.isVector2||A&&n&&A.isVector3&&n.isVector3||A&&n&&A.isMatrix3&&n.isMatrix3?A.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fs)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case TA:t.x=t.x-Math.floor(t.x);break;case Sn:t.x=t.x<0?0:1;break;case RA:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case TA:t.y=t.y-Math.floor(t.y);break;case Sn:t.y=t.y<0?0:1;break;case RA:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}_e.DEFAULT_IMAGE=null,_e.DEFAULT_MAPPING=fs,_e.DEFAULT_ANISOTROPY=1;class re{constructor(t=0,e=0,n=0,A=1){re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=A}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,A){return this.x=t,this.y=e,this.z=n,this.w=A,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,A=this.z,r=this.w,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*A+s[12]*r,this.y=s[1]*e+s[5]*n+s[9]*A+s[13]*r,this.z=s[2]*e+s[6]*n+s[10]*A+s[14]*r,this.w=s[3]*e+s[7]*n+s[11]*A+s[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,A,r;const c=t.elements,o=c[0],d=c[4],f=c[8],h=c[1],u=c[5],m=c[9],M=c[2],p=c[6],l=c[10];if(Math.abs(d-h)<.01&&Math.abs(f-M)<.01&&Math.abs(m-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+M)<.1&&Math.abs(m+p)<.1&&Math.abs(o+u+l-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(o+1)/2,B=(u+1)/2,y=(l+1)/2,b=(d+h)/4,T=(f+M)/4,I=(m+p)/4;return _>B&&_>y?_<.01?(n=0,A=.707106781,r=.707106781):(n=Math.sqrt(_),A=b/n,r=T/n):B>y?B<.01?(n=.707106781,A=0,r=.707106781):(A=Math.sqrt(B),n=b/A,r=I/A):y<.01?(n=.707106781,A=.707106781,r=0):(r=Math.sqrt(y),n=T/r,A=I/r),this.set(n,A,r,e),this}let S=Math.sqrt((p-m)*(p-m)+(f-M)*(f-M)+(h-d)*(h-d));return Math.abs(S)<.001&&(S=1),this.x=(p-m)/S,this.y=(f-M)/S,this.z=(h-d)/S,this.w=Math.acos((o+u+l-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this.w=kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this.w=kt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ko extends Wn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);const A={width:t,height:e,depth:n.depth},r=new _e(A);this.textures=[];const s=n.count;for(let a=0;a<s;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Ye,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let A=0,r=this.textures.length;A<r;A++)this.textures[A].image.width=t,this.textures[A].image.height=e,this.textures[A].image.depth=n,this.textures[A].isArrayTexture=this.textures[A].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const A=Object.assign({},t.textures[e].image);this.textures[e].source=new mr(A)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pn extends Ko{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ps extends _e{constructor(t=null,e=1,n=1,A=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:A},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zo extends _e{constructor(t=null,e=1,n=1,A=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:A},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bi{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,a=r.count;s<a;s++)t.isMesh===!0?t.getVertexPosition(s,ke):ke.fromBufferAttribute(r,s),ke.applyMatrix4(t.matrixWorld),this.expandByPoint(ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zi.copy(n.boundingBox)),zi.applyMatrix4(t.matrixWorld),this.union(zi)}const A=t.children;for(let r=0,s=A.length;r<s;r++)this.expandByObject(A[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ke),ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mi),Vi.subVectors(this.max,Mi),Jn.subVectors(t.a,Mi),Kn.subVectors(t.b,Mi),Zn.subVectors(t.c,Mi),gn.subVectors(Kn,Jn),mn.subVectors(Zn,Kn),yn.subVectors(Jn,Zn);let e=[0,-gn.z,gn.y,0,-mn.z,mn.y,0,-yn.z,yn.y,gn.z,0,-gn.x,mn.z,0,-mn.x,yn.z,0,-yn.x,-gn.y,gn.x,0,-mn.y,mn.x,0,-yn.y,yn.x,0];return!Er(e,Jn,Kn,Zn,Vi)||(e=[1,0,0,0,1,0,0,0,1],!Er(e,Jn,Kn,Zn,Vi))?!1:(Yi.crossVectors(gn,mn),e=[Yi.x,Yi.y,Yi.z],Er(e,Jn,Kn,Zn,Vi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const rn=[new L,new L,new L,new L,new L,new L,new L,new L],ke=new L,zi=new Bi,Jn=new L,Kn=new L,Zn=new L,gn=new L,mn=new L,yn=new L,Mi=new L,Vi=new L,Yi=new L,Tn=new L;function Er(i,t,e,n,A){for(let r=0,s=i.length-3;r<=s;r+=3){Tn.fromArray(i,r);const a=A.x*Math.abs(Tn.x)+A.y*Math.abs(Tn.y)+A.z*Math.abs(Tn.z),c=t.dot(Tn),o=e.dot(Tn),d=n.dot(Tn);if(Math.max(-Math.max(c,o,d),Math.min(c,o,d))>a)return!1}return!0}const qo=new Bi,wi=new L,Br=new L;class Mr{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):qo.setFromPoints(t).getCenter(n);let A=0;for(let r=0,s=t.length;r<s;r++)A=Math.max(A,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(A),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wi.subVectors(t,this.center);const e=wi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),A=(n-this.radius)*.5;this.center.addScaledVector(wi,A/n),this.radius+=A}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Br.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wi.copy(t.center).add(Br)),this.expandByPoint(wi.copy(t.center).sub(Br))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const sn=new L,wr=new L,Wi=new L,vn=new L,_r=new L,Xi=new L,Sr=new L;class $o{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(sn.copy(this.origin).addScaledVector(this.direction,e),sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,A){wr.copy(t).add(e).multiplyScalar(.5),Wi.copy(e).sub(t).normalize(),vn.copy(this.origin).sub(wr);const r=t.distanceTo(e)*.5,s=-this.direction.dot(Wi),a=vn.dot(this.direction),c=-vn.dot(Wi),o=vn.lengthSq(),d=Math.abs(1-s*s);let f,h,u,m;if(d>0)if(f=s*c-a,h=s*a-c,m=r*d,f>=0)if(h>=-m)if(h<=m){const M=1/d;f*=M,h*=M,u=f*(f+s*h+2*a)+h*(s*f+h+2*c)+o}else h=r,f=Math.max(0,-(s*h+a)),u=-f*f+h*(h+2*c)+o;else h=-r,f=Math.max(0,-(s*h+a)),u=-f*f+h*(h+2*c)+o;else h<=-m?(f=Math.max(0,-(-s*r+a)),h=f>0?-r:Math.min(Math.max(-r,-c),r),u=-f*f+h*(h+2*c)+o):h<=m?(f=0,h=Math.min(Math.max(-r,-c),r),u=h*(h+2*c)+o):(f=Math.max(0,-(s*r+a)),h=f>0?r:Math.min(Math.max(-r,-c),r),u=-f*f+h*(h+2*c)+o);else h=s>0?-r:r,f=Math.max(0,-(s*h+a)),u=-f*f+h*(h+2*c)+o;return n&&n.copy(this.origin).addScaledVector(this.direction,f),A&&A.copy(wr).addScaledVector(Wi,h),u}intersectSphere(t,e){sn.subVectors(t.center,this.origin);const n=sn.dot(this.direction),A=sn.dot(sn)-n*n,r=t.radius*t.radius;if(A>r)return null;const s=Math.sqrt(r-A),a=n-s,c=n+s;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,A,r,s,a,c;const o=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return o>=0?(n=(t.min.x-h.x)*o,A=(t.max.x-h.x)*o):(n=(t.max.x-h.x)*o,A=(t.min.x-h.x)*o),d>=0?(r=(t.min.y-h.y)*d,s=(t.max.y-h.y)*d):(r=(t.max.y-h.y)*d,s=(t.min.y-h.y)*d),n>s||r>A||((r>n||isNaN(n))&&(n=r),(s<A||isNaN(A))&&(A=s),f>=0?(a=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),n>c||a>A)||((a>n||n!==n)&&(n=a),(c<A||A!==A)&&(A=c),A<0)?null:this.at(n>=0?n:A,e)}intersectsBox(t){return this.intersectBox(t,sn)!==null}intersectTriangle(t,e,n,A,r){_r.subVectors(e,t),Xi.subVectors(n,t),Sr.crossVectors(_r,Xi);let s=this.direction.dot(Sr),a;if(s>0){if(A)return null;a=1}else if(s<0)a=-1,s=-s;else return null;vn.subVectors(this.origin,t);const c=a*this.direction.dot(Xi.crossVectors(vn,Xi));if(c<0)return null;const o=a*this.direction.dot(_r.cross(vn));if(o<0||c+o>s)return null;const d=-a*vn.dot(Sr);return d<0?null:this.at(d/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,n,A,r,s,a,c,o,d,f,h,u,m,M,p){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,A,r,s,a,c,o,d,f,h,u,m,M,p)}set(t,e,n,A,r,s,a,c,o,d,f,h,u,m,M,p){const l=this.elements;return l[0]=t,l[4]=e,l[8]=n,l[12]=A,l[1]=r,l[5]=s,l[9]=a,l[13]=c,l[2]=o,l[6]=d,l[10]=f,l[14]=h,l[3]=u,l[7]=m,l[11]=M,l[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,A=1/qn.setFromMatrixColumn(t,0).length(),r=1/qn.setFromMatrixColumn(t,1).length(),s=1/qn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*A,e[1]=n[1]*A,e[2]=n[2]*A,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,A=t.y,r=t.z,s=Math.cos(n),a=Math.sin(n),c=Math.cos(A),o=Math.sin(A),d=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=s*d,u=s*f,m=a*d,M=a*f;e[0]=c*d,e[4]=-c*f,e[8]=o,e[1]=u+m*o,e[5]=h-M*o,e[9]=-a*c,e[2]=M-h*o,e[6]=m+u*o,e[10]=s*c}else if(t.order==="YXZ"){const h=c*d,u=c*f,m=o*d,M=o*f;e[0]=h+M*a,e[4]=m*a-u,e[8]=s*o,e[1]=s*f,e[5]=s*d,e[9]=-a,e[2]=u*a-m,e[6]=M+h*a,e[10]=s*c}else if(t.order==="ZXY"){const h=c*d,u=c*f,m=o*d,M=o*f;e[0]=h-M*a,e[4]=-s*f,e[8]=m+u*a,e[1]=u+m*a,e[5]=s*d,e[9]=M-h*a,e[2]=-s*o,e[6]=a,e[10]=s*c}else if(t.order==="ZYX"){const h=s*d,u=s*f,m=a*d,M=a*f;e[0]=c*d,e[4]=m*o-u,e[8]=h*o+M,e[1]=c*f,e[5]=M*o+h,e[9]=u*o-m,e[2]=-o,e[6]=a*c,e[10]=s*c}else if(t.order==="YZX"){const h=s*c,u=s*o,m=a*c,M=a*o;e[0]=c*d,e[4]=M-h*f,e[8]=m*f+u,e[1]=f,e[5]=s*d,e[9]=-a*d,e[2]=-o*d,e[6]=u*f+m,e[10]=h-M*f}else if(t.order==="XZY"){const h=s*c,u=s*o,m=a*c,M=a*o;e[0]=c*d,e[4]=-f,e[8]=o*d,e[1]=h*f+M,e[5]=s*d,e[9]=u*f-m,e[2]=m*f-u,e[6]=a*d,e[10]=M*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tc,t,ec)}lookAt(t,e,n){const A=this.elements;return ye.subVectors(t,e),ye.lengthSq()===0&&(ye.z=1),ye.normalize(),xn.crossVectors(n,ye),xn.lengthSq()===0&&(Math.abs(n.z)===1?ye.x+=1e-4:ye.z+=1e-4,ye.normalize(),xn.crossVectors(n,ye)),xn.normalize(),ji.crossVectors(ye,xn),A[0]=xn.x,A[4]=ji.x,A[8]=ye.x,A[1]=xn.y,A[5]=ji.y,A[9]=ye.y,A[2]=xn.z,A[6]=ji.z,A[10]=ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,A=e.elements,r=this.elements,s=n[0],a=n[4],c=n[8],o=n[12],d=n[1],f=n[5],h=n[9],u=n[13],m=n[2],M=n[6],p=n[10],l=n[14],S=n[3],_=n[7],B=n[11],y=n[15],b=A[0],T=A[4],I=A[8],E=A[12],x=A[1],R=A[5],F=A[9],k=A[13],z=A[2],W=A[6],V=A[10],et=A[14],G=A[3],rt=A[7],ct=A[11],wt=A[15];return r[0]=s*b+a*x+c*z+o*G,r[4]=s*T+a*R+c*W+o*rt,r[8]=s*I+a*F+c*V+o*ct,r[12]=s*E+a*k+c*et+o*wt,r[1]=d*b+f*x+h*z+u*G,r[5]=d*T+f*R+h*W+u*rt,r[9]=d*I+f*F+h*V+u*ct,r[13]=d*E+f*k+h*et+u*wt,r[2]=m*b+M*x+p*z+l*G,r[6]=m*T+M*R+p*W+l*rt,r[10]=m*I+M*F+p*V+l*ct,r[14]=m*E+M*k+p*et+l*wt,r[3]=S*b+_*x+B*z+y*G,r[7]=S*T+_*R+B*W+y*rt,r[11]=S*I+_*F+B*V+y*ct,r[15]=S*E+_*k+B*et+y*wt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],A=t[8],r=t[12],s=t[1],a=t[5],c=t[9],o=t[13],d=t[2],f=t[6],h=t[10],u=t[14],m=t[3],M=t[7],p=t[11],l=t[15];return m*(+r*c*f-A*o*f-r*a*h+n*o*h+A*a*u-n*c*u)+M*(+e*c*u-e*o*h+r*s*h-A*s*u+A*o*d-r*c*d)+p*(+e*o*f-e*a*u-r*s*f+n*s*u+r*a*d-n*o*d)+l*(-A*a*d-e*c*f+e*a*h+A*s*f-n*s*h+n*c*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const A=this.elements;return t.isVector3?(A[12]=t.x,A[13]=t.y,A[14]=t.z):(A[12]=t,A[13]=e,A[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],A=t[2],r=t[3],s=t[4],a=t[5],c=t[6],o=t[7],d=t[8],f=t[9],h=t[10],u=t[11],m=t[12],M=t[13],p=t[14],l=t[15],S=f*p*o-M*h*o+M*c*u-a*p*u-f*c*l+a*h*l,_=m*h*o-d*p*o-m*c*u+s*p*u+d*c*l-s*h*l,B=d*M*o-m*f*o+m*a*u-s*M*u-d*a*l+s*f*l,y=m*f*c-d*M*c-m*a*h+s*M*h+d*a*p-s*f*p,b=e*S+n*_+A*B+r*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return t[0]=S*T,t[1]=(M*h*r-f*p*r-M*A*u+n*p*u+f*A*l-n*h*l)*T,t[2]=(a*p*r-M*c*r+M*A*o-n*p*o-a*A*l+n*c*l)*T,t[3]=(f*c*r-a*h*r-f*A*o+n*h*o+a*A*u-n*c*u)*T,t[4]=_*T,t[5]=(d*p*r-m*h*r+m*A*u-e*p*u-d*A*l+e*h*l)*T,t[6]=(m*c*r-s*p*r-m*A*o+e*p*o+s*A*l-e*c*l)*T,t[7]=(s*h*r-d*c*r+d*A*o-e*h*o-s*A*u+e*c*u)*T,t[8]=B*T,t[9]=(m*f*r-d*M*r-m*n*u+e*M*u+d*n*l-e*f*l)*T,t[10]=(s*M*r-m*a*r+m*n*o-e*M*o-s*n*l+e*a*l)*T,t[11]=(d*a*r-s*f*r-d*n*o+e*f*o+s*n*u-e*a*u)*T,t[12]=y*T,t[13]=(d*M*A-m*f*A+m*n*h-e*M*h-d*n*p+e*f*p)*T,t[14]=(m*a*A-s*M*A-m*n*c+e*M*c+s*n*p-e*a*p)*T,t[15]=(s*f*A-d*a*A+d*n*c-e*f*c-s*n*h+e*a*h)*T,this}scale(t){const e=this.elements,n=t.x,A=t.y,r=t.z;return e[0]*=n,e[4]*=A,e[8]*=r,e[1]*=n,e[5]*=A,e[9]*=r,e[2]*=n,e[6]*=A,e[10]*=r,e[3]*=n,e[7]*=A,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],A=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,A))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),A=Math.sin(e),r=1-n,s=t.x,a=t.y,c=t.z,o=r*s,d=r*a;return this.set(o*s+n,o*a-A*c,o*c+A*a,0,o*a+A*c,d*a+n,d*c-A*s,0,o*c-A*a,d*c+A*s,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,A,r,s){return this.set(1,n,r,0,t,1,s,0,e,A,1,0,0,0,0,1),this}compose(t,e,n){const A=this.elements,r=e._x,s=e._y,a=e._z,c=e._w,o=r+r,d=s+s,f=a+a,h=r*o,u=r*d,m=r*f,M=s*d,p=s*f,l=a*f,S=c*o,_=c*d,B=c*f,y=n.x,b=n.y,T=n.z;return A[0]=(1-(M+l))*y,A[1]=(u+B)*y,A[2]=(m-_)*y,A[3]=0,A[4]=(u-B)*b,A[5]=(1-(h+l))*b,A[6]=(p+S)*b,A[7]=0,A[8]=(m+_)*T,A[9]=(p-S)*T,A[10]=(1-(h+M))*T,A[11]=0,A[12]=t.x,A[13]=t.y,A[14]=t.z,A[15]=1,this}decompose(t,e,n){const A=this.elements;let r=qn.set(A[0],A[1],A[2]).length();const s=qn.set(A[4],A[5],A[6]).length(),a=qn.set(A[8],A[9],A[10]).length();this.determinant()<0&&(r=-r),t.x=A[12],t.y=A[13],t.z=A[14],Ge.copy(this);const o=1/r,d=1/s,f=1/a;return Ge.elements[0]*=o,Ge.elements[1]*=o,Ge.elements[2]*=o,Ge.elements[4]*=d,Ge.elements[5]*=d,Ge.elements[6]*=d,Ge.elements[8]*=f,Ge.elements[9]*=f,Ge.elements[10]*=f,e.setFromRotationMatrix(Ge),n.x=r,n.y=s,n.z=a,this}makePerspective(t,e,n,A,r,s,a=Xe,c=!1){const o=this.elements,d=2*r/(e-t),f=2*r/(n-A),h=(e+t)/(e-t),u=(n+A)/(n-A);let m,M;if(c)m=r/(s-r),M=s*r/(s-r);else if(a===Xe)m=-(s+r)/(s-r),M=-2*s*r/(s-r);else if(a===Gi)m=-s/(s-r),M=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return o[0]=d,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=f,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=m,o[14]=M,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,A,r,s,a=Xe,c=!1){const o=this.elements,d=2/(e-t),f=2/(n-A),h=-(e+t)/(e-t),u=-(n+A)/(n-A);let m,M;if(c)m=1/(s-r),M=s/(s-r);else if(a===Xe)m=-2/(s-r),M=-(s+r)/(s-r);else if(a===Gi)m=-1/(s-r),M=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return o[0]=d,o[4]=0,o[8]=0,o[12]=h,o[1]=0,o[5]=f,o[9]=0,o[13]=u,o[2]=0,o[6]=0,o[10]=m,o[14]=M,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let A=0;A<16;A++)if(e[A]!==n[A])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const qn=new L,Ge=new ae,tc=new L(0,0,0),ec=new L(1,1,1),xn=new L,ji=new L,ye=new L,Is=new ae,Ds=new xi;class je{constructor(t=0,e=0,n=0,A=je.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=A}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,A=this._order){return this._x=t,this._y=e,this._z=n,this._order=A,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const A=t.elements,r=A[0],s=A[4],a=A[8],c=A[1],o=A[5],d=A[9],f=A[2],h=A[6],u=A[10];switch(e){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,u),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(h,o),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(c,o)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-s,o)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-s,o));break;case"YZX":this._z=Math.asin(kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,o),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-kt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,o),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Is.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Is,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ds.setFromEuler(this),this.setFromQuaternion(Ds,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}je.DEFAULT_ORDER="XYZ";class Us{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let nc=0;const Ls=new L,$n=new xi,an=new ae,Ji=new L,_i=new L,ic=new L,Ac=new xi,Fs=new L(1,0,0),Ns=new L(0,1,0),Qs=new L(0,0,1),Hs={type:"added"},rc={type:"removed"},ti={type:"childadded",child:null},br={type:"childremoved",child:null};class ge extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nc++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new L,e=new je,n=new xi,A=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function s(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:A},modelViewMatrix:{value:new ae},normalMatrix:{value:new Ut}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Us,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $n.setFromAxisAngle(t,e),this.quaternion.multiply($n),this}rotateOnWorldAxis(t,e){return $n.setFromAxisAngle(t,e),this.quaternion.premultiply($n),this}rotateX(t){return this.rotateOnAxis(Fs,t)}rotateY(t){return this.rotateOnAxis(Ns,t)}rotateZ(t){return this.rotateOnAxis(Qs,t)}translateOnAxis(t,e){return Ls.copy(t).applyQuaternion(this.quaternion),this.position.add(Ls.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fs,t)}translateY(t){return this.translateOnAxis(Ns,t)}translateZ(t){return this.translateOnAxis(Qs,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ji.copy(t):Ji.set(t,e,n);const A=this.parent;this.updateWorldMatrix(!0,!1),_i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(_i,Ji,this.up):an.lookAt(Ji,_i,this.up),this.quaternion.setFromRotationMatrix(an),A&&(an.extractRotation(A.matrixWorld),$n.setFromRotationMatrix(an),this.quaternion.premultiply($n.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hs),ti.child=t,this.dispatchEvent(ti),ti.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rc),br.child=t,this.dispatchEvent(br),br.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),an.multiply(t.parent.matrixWorld)),t.applyMatrix4(an),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hs),ti.child=t,this.dispatchEvent(ti),ti.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,A=this.children.length;n<A;n++){const s=this.children[n].getObjectByProperty(t,e);if(s!==void 0)return s}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const A=this.children;for(let r=0,s=A.length;r<s;r++)A[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_i,t,ic),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_i,Ac,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,A=e.length;n<A;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,A=e.length;n<A;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,A=e.length;n<A;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const A=this.children;for(let r=0,s=A.length;r<s;r++)A[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const A={};A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),this.castShadow===!0&&(A.castShadow=!0),this.receiveShadow===!0&&(A.receiveShadow=!0),this.visible===!1&&(A.visible=!1),this.frustumCulled===!1&&(A.frustumCulled=!1),this.renderOrder!==0&&(A.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(A.userData=this.userData),A.layers=this.layers.mask,A.matrix=this.matrix.toArray(),A.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(A.matrixAutoUpdate=!1),this.isInstancedMesh&&(A.type="InstancedMesh",A.count=this.count,A.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(A.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(A.type="BatchedMesh",A.perObjectFrustumCulled=this.perObjectFrustumCulled,A.sortObjects=this.sortObjects,A.drawRanges=this._drawRanges,A.reservedRanges=this._reservedRanges,A.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),A.instanceInfo=this._instanceInfo.map(a=>({...a})),A.availableInstanceIds=this._availableInstanceIds.slice(),A.availableGeometryIds=this._availableGeometryIds.slice(),A.nextIndexStart=this._nextIndexStart,A.nextVertexStart=this._nextVertexStart,A.geometryCount=this._geometryCount,A.maxInstanceCount=this._maxInstanceCount,A.maxVertexCount=this._maxVertexCount,A.maxIndexCount=this._maxIndexCount,A.geometryInitialized=this._geometryInitialized,A.matricesTexture=this._matricesTexture.toJSON(t),A.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(A.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(A.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(A.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?A.background=this.background.toJSON():this.background.isTexture&&(A.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(A.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){A.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let o=0,d=c.length;o<d;o++){const f=c[o];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(A.bindMode=this.bindMode,A.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),A.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,o=this.material.length;c<o;c++)a.push(r(t.materials,this.material[c]));A.material=a}else A.material=r(t.materials,this.material);if(this.children.length>0){A.children=[];for(let a=0;a<this.children.length;a++)A.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){A.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];A.animations.push(r(t.animations,c))}}if(e){const a=s(t.geometries),c=s(t.materials),o=s(t.textures),d=s(t.images),f=s(t.shapes),h=s(t.skeletons),u=s(t.animations),m=s(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),o.length>0&&(n.textures=o),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=A,n;function s(a){const c=[];for(const o in a){const d=a[o];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const A=t.children[n];this.add(A.clone())}return this}}ge.DEFAULT_UP=new L(0,1,0),ge.DEFAULT_MATRIX_AUTO_UPDATE=!0,ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Oe=new L,on=new L,Cr=new L,cn=new L,ei=new L,ni=new L,ks=new L,yr=new L,Tr=new L,Rr=new L,Pr=new re,Ir=new re,Dr=new re;class ze{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,A){A.subVectors(n,e),Oe.subVectors(t,e),A.cross(Oe);const r=A.lengthSq();return r>0?A.multiplyScalar(1/Math.sqrt(r)):A.set(0,0,0)}static getBarycoord(t,e,n,A,r){Oe.subVectors(A,e),on.subVectors(n,e),Cr.subVectors(t,e);const s=Oe.dot(Oe),a=Oe.dot(on),c=Oe.dot(Cr),o=on.dot(on),d=on.dot(Cr),f=s*o-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,u=(o*c-a*d)*h,m=(s*d-a*c)*h;return r.set(1-u-m,m,u)}static containsPoint(t,e,n,A){return this.getBarycoord(t,e,n,A,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(t,e,n,A,r,s,a,c){return this.getBarycoord(t,e,n,A,cn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,cn.x),c.addScaledVector(s,cn.y),c.addScaledVector(a,cn.z),c)}static getInterpolatedAttribute(t,e,n,A,r,s){return Pr.setScalar(0),Ir.setScalar(0),Dr.setScalar(0),Pr.fromBufferAttribute(t,e),Ir.fromBufferAttribute(t,n),Dr.fromBufferAttribute(t,A),s.setScalar(0),s.addScaledVector(Pr,r.x),s.addScaledVector(Ir,r.y),s.addScaledVector(Dr,r.z),s}static isFrontFacing(t,e,n,A){return Oe.subVectors(n,e),on.subVectors(t,e),Oe.cross(on).dot(A)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,A){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[A]),this}setFromAttributeAndIndices(t,e,n,A){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,A),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Oe.subVectors(this.c,this.b),on.subVectors(this.a,this.b),Oe.cross(on).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ze.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ze.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,A,r){return ze.getInterpolation(t,this.a,this.b,this.c,e,n,A,r)}containsPoint(t){return ze.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ze.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,A=this.b,r=this.c;let s,a;ei.subVectors(A,n),ni.subVectors(r,n),yr.subVectors(t,n);const c=ei.dot(yr),o=ni.dot(yr);if(c<=0&&o<=0)return e.copy(n);Tr.subVectors(t,A);const d=ei.dot(Tr),f=ni.dot(Tr);if(d>=0&&f<=d)return e.copy(A);const h=c*f-d*o;if(h<=0&&c>=0&&d<=0)return s=c/(c-d),e.copy(n).addScaledVector(ei,s);Rr.subVectors(t,r);const u=ei.dot(Rr),m=ni.dot(Rr);if(m>=0&&u<=m)return e.copy(r);const M=u*o-c*m;if(M<=0&&o>=0&&m<=0)return a=o/(o-m),e.copy(n).addScaledVector(ni,a);const p=d*m-u*f;if(p<=0&&f-d>=0&&u-m>=0)return ks.subVectors(r,A),a=(f-d)/(f-d+(u-m)),e.copy(A).addScaledVector(ks,a);const l=1/(p+M+h);return s=M*l,a=h*l,e.copy(n).addScaledVector(ei,s).addScaledVector(ni,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Gs={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},Ki={h:0,s:0,l:0};function Ur(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const A=t;A&&A.isColor?this.copy(A):typeof A=="number"?this.setHex(A):typeof A=="string"&&this.setStyle(A)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,zt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,A=zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,zt.colorSpaceToWorking(this,A),this}setHSL(t,e,n,A=zt.workingColorSpace){if(t=zo(t,1),e=kt(e,0,1),n=kt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,s=2*n-r;this.r=Ur(s,r,t+1/3),this.g=Ur(s,r,t),this.b=Ur(s,r,t-1/3)}return zt.colorSpaceToWorking(this,A),this}setStyle(t,e=Ce){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let A;if(A=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=A[1],a=A[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(A=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=A[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){const n=Gs[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=An(t.r),this.g=An(t.g),this.b=An(t.b),this}copyLinearToSRGB(t){return this.r=Xn(t.r),this.g=Xn(t.g),this.b=Xn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return zt.workingToColorSpace(ve.copy(this),t),Math.round(kt(ve.r*255,0,255))*65536+Math.round(kt(ve.g*255,0,255))*256+Math.round(kt(ve.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=zt.workingColorSpace){zt.workingToColorSpace(ve.copy(this),e);const n=ve.r,A=ve.g,r=ve.b,s=Math.max(n,A,r),a=Math.min(n,A,r);let c,o;const d=(a+s)/2;if(a===s)c=0,o=0;else{const f=s-a;switch(o=d<=.5?f/(s+a):f/(2-s-a),s){case n:c=(A-r)/f+(A<r?6:0);break;case A:c=(r-n)/f+2;break;case r:c=(n-A)/f+4;break}c/=6}return t.h=c,t.s=o,t.l=d,t}getRGB(t,e=zt.workingColorSpace){return zt.workingToColorSpace(ve.copy(this),e),t.r=ve.r,t.g=ve.g,t.b=ve.b,t}getStyle(t=Ce){zt.workingToColorSpace(ve.copy(this),t);const e=ve.r,n=ve.g,A=ve.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${A.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(A*255)})`}offsetHSL(t,e,n){return this.getHSL(En),this.setHSL(En.h+t,En.s+e,En.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(En),t.getHSL(Ki);const n=ur(En.h,Ki.h,e),A=ur(En.s,Ki.s,e),r=ur(En.l,Ki.l,e);return this.setHSL(n,A,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,A=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*A,this.g=r[1]*e+r[4]*n+r[7]*A,this.b=r[2]*e+r[5]*n+r[8]*A,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ve=new Vt;Vt.NAMES=Gs;let sc=0;class Si extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sc++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=kn,this.side=dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vA,this.blendDst=xA,this.blendEquation=_n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Gn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ms,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yn,this.stencilZFail=Yn,this.stencilZPass=Yn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const A=this[e];if(A===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}A&&A.isColor?A.set(n):A&&A.isVector3&&n&&n.isVector3?A.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==kn&&(n.blending=this.blending),this.side!==dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vA&&(n.blendSrc=this.blendSrc),this.blendDst!==xA&&(n.blendDst=this.blendDst),this.blendEquation!==_n&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gn&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ms&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function A(r){const s=[];for(const a in r){const c=r[a];delete c.metadata,s.push(c)}return s}if(e){const r=A(t.textures),s=A(t.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const A=e.length;n=new Array(A);for(let r=0;r!==A;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Os extends Si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new je,this.combine=ds,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const le=new L,Zi=new Gt;let ac=0;class Je{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ac++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_s,this.updateRanges=[],this.gpuType=nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let A=0,r=this.itemSize;A<r;A++)this.array[t+A]=e.array[n+A];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Zi.fromBufferAttribute(this,e),Zi.applyMatrix3(t),this.setXY(e,Zi.x,Zi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyMatrix3(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyMatrix4(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyNormalMatrix(t),this.setXYZ(e,le.x,le.y,le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.transformDirection(t),this.setXYZ(e,le.x,le.y,le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=vi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vi(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vi(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vi(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,A){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),A=we(A,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=A,this}setXYZW(t,e,n,A,r){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),A=we(A,this.array),r=we(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=A,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_s&&(t.usage=this.usage),t}}class zs extends Je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Vs extends Je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class de extends Je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let oc=0;const Ie=new ae,Lr=new ge,ii=new L,Te=new Bi,bi=new Bi,ue=new L;class Ve extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oc++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cs(t)?Vs:zs)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const A=this.attributes.tangent;return A!==void 0&&(A.transformDirection(t),A.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ie.makeRotationFromQuaternion(t),this.applyMatrix4(Ie),this}rotateX(t){return Ie.makeRotationX(t),this.applyMatrix4(Ie),this}rotateY(t){return Ie.makeRotationY(t),this.applyMatrix4(Ie),this}rotateZ(t){return Ie.makeRotationZ(t),this.applyMatrix4(Ie),this}translate(t,e,n){return Ie.makeTranslation(t,e,n),this.applyMatrix4(Ie),this}scale(t,e,n){return Ie.makeScale(t,e,n),this.applyMatrix4(Ie),this}lookAt(t){return Lr.lookAt(t),Lr.updateMatrix(),this.applyMatrix4(Lr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ii).negate(),this.translate(ii.x,ii.y,ii.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let A=0,r=t.length;A<r;A++){const s=t[A];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new de(n,3))}else{const n=Math.min(t.length,e.count);for(let A=0;A<n;A++){const r=t[A];e.setXYZ(A,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,A=e.length;n<A;n++){const r=e[n];Te.setFromBufferAttribute(r),this.morphTargetsRelative?(ue.addVectors(this.boundingBox.min,Te.min),this.boundingBox.expandByPoint(ue),ue.addVectors(this.boundingBox.max,Te.max),this.boundingBox.expandByPoint(ue)):(this.boundingBox.expandByPoint(Te.min),this.boundingBox.expandByPoint(Te.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Te.setFromBufferAttribute(t),e)for(let r=0,s=e.length;r<s;r++){const a=e[r];bi.setFromBufferAttribute(a),this.morphTargetsRelative?(ue.addVectors(Te.min,bi.min),Te.expandByPoint(ue),ue.addVectors(Te.max,bi.max),Te.expandByPoint(ue)):(Te.expandByPoint(bi.min),Te.expandByPoint(bi.max))}Te.getCenter(n);let A=0;for(let r=0,s=t.count;r<s;r++)ue.fromBufferAttribute(t,r),A=Math.max(A,n.distanceToSquared(ue));if(e)for(let r=0,s=e.length;r<s;r++){const a=e[r],c=this.morphTargetsRelative;for(let o=0,d=a.count;o<d;o++)ue.fromBufferAttribute(a,o),c&&(ii.fromBufferAttribute(t,o),ue.add(ii)),A=Math.max(A,n.distanceToSquared(ue))}this.boundingSphere.radius=Math.sqrt(A),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,A=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Je(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new L,c[I]=new L;const o=new L,d=new L,f=new L,h=new Gt,u=new Gt,m=new Gt,M=new L,p=new L;function l(I,E,x){o.fromBufferAttribute(n,I),d.fromBufferAttribute(n,E),f.fromBufferAttribute(n,x),h.fromBufferAttribute(r,I),u.fromBufferAttribute(r,E),m.fromBufferAttribute(r,x),d.sub(o),f.sub(o),u.sub(h),m.sub(h);const R=1/(u.x*m.y-m.x*u.y);isFinite(R)&&(M.copy(d).multiplyScalar(m.y).addScaledVector(f,-u.y).multiplyScalar(R),p.copy(f).multiplyScalar(u.x).addScaledVector(d,-m.x).multiplyScalar(R),a[I].add(M),a[E].add(M),a[x].add(M),c[I].add(p),c[E].add(p),c[x].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let I=0,E=S.length;I<E;++I){const x=S[I],R=x.start,F=x.count;for(let k=R,z=R+F;k<z;k+=3)l(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const _=new L,B=new L,y=new L,b=new L;function T(I){y.fromBufferAttribute(A,I),b.copy(y);const E=a[I];_.copy(E),_.sub(y.multiplyScalar(y.dot(E))).normalize(),B.crossVectors(b,E);const R=B.dot(c[I])<0?-1:1;s.setXYZW(I,_.x,_.y,_.z,R)}for(let I=0,E=S.length;I<E;++I){const x=S[I],R=x.start,F=x.count;for(let k=R,z=R+F;k<z;k+=3)T(t.getX(k+0)),T(t.getX(k+1)),T(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,u=n.count;h<u;h++)n.setXYZ(h,0,0,0);const A=new L,r=new L,s=new L,a=new L,c=new L,o=new L,d=new L,f=new L;if(t)for(let h=0,u=t.count;h<u;h+=3){const m=t.getX(h+0),M=t.getX(h+1),p=t.getX(h+2);A.fromBufferAttribute(e,m),r.fromBufferAttribute(e,M),s.fromBufferAttribute(e,p),d.subVectors(s,r),f.subVectors(A,r),d.cross(f),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,M),o.fromBufferAttribute(n,p),a.add(d),c.add(d),o.add(d),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(p,o.x,o.y,o.z)}else for(let h=0,u=e.count;h<u;h+=3)A.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),s.fromBufferAttribute(e,h+2),d.subVectors(s,r),f.subVectors(A,r),d.cross(f),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ue.fromBufferAttribute(t,e),ue.normalize(),t.setXYZ(e,ue.x,ue.y,ue.z)}toNonIndexed(){function t(a,c){const o=a.array,d=a.itemSize,f=a.normalized,h=new o.constructor(c.length*d);let u=0,m=0;for(let M=0,p=c.length;M<p;M++){a.isInterleavedBufferAttribute?u=c[M]*a.data.stride+a.offset:u=c[M]*d;for(let l=0;l<d;l++)h[m++]=o[u++]}return new Je(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ve,n=this.index.array,A=this.attributes;for(const a in A){const c=A[a],o=t(c,n);e.setAttribute(a,o)}const r=this.morphAttributes;for(const a in r){const c=[],o=r[a];for(let d=0,f=o.length;d<f;d++){const h=o[d],u=t(h,n);c.push(u)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,c=s.length;a<c;a++){const o=s[a];e.addGroup(o.start,o.count,o.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const o in c)c[o]!==void 0&&(t[o]=c[o]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const o=n[c];t.data.attributes[c]=o.toJSON(t.data)}const A={};let r=!1;for(const c in this.morphAttributes){const o=this.morphAttributes[c],d=[];for(let f=0,h=o.length;f<h;f++){const u=o[f];d.push(u.toJSON(t.data))}d.length>0&&(A[c]=d,r=!0)}r&&(t.data.morphAttributes=A,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const A=t.attributes;for(const o in A){const d=A[o];this.setAttribute(o,d.clone(e))}const r=t.morphAttributes;for(const o in r){const d=[],f=r[o];for(let h=0,u=f.length;h<u;h++)d.push(f[h].clone(e));this.morphAttributes[o]=d}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let o=0,d=s.length;o<d;o++){const f=s[o];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ys=new ae,Rn=new $o,qi=new Mr,Ws=new L,$i=new L,tA=new L,eA=new L,Fr=new L,nA=new L,Xs=new L,iA=new L;class Ke extends ge{constructor(t=new Ve,e=new Os){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const A=e[n[0]];if(A!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=A.length;r<s;r++){const a=A[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,A=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(A,t);const a=this.morphTargetInfluences;if(r&&a){nA.set(0,0,0);for(let c=0,o=r.length;c<o;c++){const d=a[c],f=r[c];d!==0&&(Fr.fromBufferAttribute(f,t),s?nA.addScaledVector(Fr,d):nA.addScaledVector(Fr.sub(e),d))}e.add(nA)}return e}raycast(t,e){const n=this.geometry,A=this.material,r=this.matrixWorld;A!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qi.copy(n.boundingSphere),qi.applyMatrix4(r),Rn.copy(t.ray).recast(t.near),!(qi.containsPoint(Rn.origin)===!1&&(Rn.intersectSphere(qi,Ws)===null||Rn.origin.distanceToSquared(Ws)>(t.far-t.near)**2))&&(Ys.copy(r).invert(),Rn.copy(t.ray).applyMatrix4(Ys),!(n.boundingBox!==null&&Rn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Rn)))}_computeIntersections(t,e,n){let A;const r=this.geometry,s=this.material,a=r.index,c=r.attributes.position,o=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,h=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(s))for(let m=0,M=h.length;m<M;m++){const p=h[m],l=s[p.materialIndex],S=Math.max(p.start,u.start),_=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let B=S,y=_;B<y;B+=3){const b=a.getX(B),T=a.getX(B+1),I=a.getX(B+2);A=AA(this,l,t,n,o,d,f,b,T,I),A&&(A.faceIndex=Math.floor(B/3),A.face.materialIndex=p.materialIndex,e.push(A))}}else{const m=Math.max(0,u.start),M=Math.min(a.count,u.start+u.count);for(let p=m,l=M;p<l;p+=3){const S=a.getX(p),_=a.getX(p+1),B=a.getX(p+2);A=AA(this,s,t,n,o,d,f,S,_,B),A&&(A.faceIndex=Math.floor(p/3),e.push(A))}}else if(c!==void 0)if(Array.isArray(s))for(let m=0,M=h.length;m<M;m++){const p=h[m],l=s[p.materialIndex],S=Math.max(p.start,u.start),_=Math.min(c.count,Math.min(p.start+p.count,u.start+u.count));for(let B=S,y=_;B<y;B+=3){const b=B,T=B+1,I=B+2;A=AA(this,l,t,n,o,d,f,b,T,I),A&&(A.faceIndex=Math.floor(B/3),A.face.materialIndex=p.materialIndex,e.push(A))}}else{const m=Math.max(0,u.start),M=Math.min(c.count,u.start+u.count);for(let p=m,l=M;p<l;p+=3){const S=p,_=p+1,B=p+2;A=AA(this,s,t,n,o,d,f,S,_,B),A&&(A.faceIndex=Math.floor(p/3),e.push(A))}}}}function cc(i,t,e,n,A,r,s,a){let c;if(t.side===Me?c=n.intersectTriangle(s,r,A,!0,a):c=n.intersectTriangle(A,r,s,t.side===dn,a),c===null)return null;iA.copy(a),iA.applyMatrix4(i.matrixWorld);const o=e.ray.origin.distanceTo(iA);return o<e.near||o>e.far?null:{distance:o,point:iA.clone(),object:i}}function AA(i,t,e,n,A,r,s,a,c,o){i.getVertexPosition(a,$i),i.getVertexPosition(c,tA),i.getVertexPosition(o,eA);const d=cc(i,t,e,n,$i,tA,eA,Xs);if(d){const f=new L;ze.getBarycoord(Xs,$i,tA,eA,f),A&&(d.uv=ze.getInterpolatedAttribute(A,a,c,o,f,new Gt)),r&&(d.uv1=ze.getInterpolatedAttribute(r,a,c,o,f,new Gt)),s&&(d.normal=ze.getInterpolatedAttribute(s,a,c,o,f,new L),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:c,c:o,normal:new L,materialIndex:0};ze.getNormal($i,tA,eA,h.normal),d.face=h,d.barycoord=f}return d}class Ai extends Ve{constructor(t=1,e=1,n=1,A=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:A,heightSegments:r,depthSegments:s};const a=this;A=Math.floor(A),r=Math.floor(r),s=Math.floor(s);const c=[],o=[],d=[],f=[];let h=0,u=0;m("z","y","x",-1,-1,n,e,t,s,r,0),m("z","y","x",1,-1,n,e,-t,s,r,1),m("x","z","y",1,1,t,n,e,A,s,2),m("x","z","y",1,-1,t,n,-e,A,s,3),m("x","y","z",1,-1,t,e,n,A,r,4),m("x","y","z",-1,-1,t,e,-n,A,r,5),this.setIndex(c),this.setAttribute("position",new de(o,3)),this.setAttribute("normal",new de(d,3)),this.setAttribute("uv",new de(f,2));function m(M,p,l,S,_,B,y,b,T,I,E){const x=B/T,R=y/I,F=B/2,k=y/2,z=b/2,W=T+1,V=I+1;let et=0,G=0;const rt=new L;for(let ct=0;ct<V;ct++){const wt=ct*R-k;for(let Qt=0;Qt<W;Qt++){const Zt=Qt*x-F;rt[M]=Zt*S,rt[p]=wt*_,rt[l]=z,o.push(rt.x,rt.y,rt.z),rt[M]=0,rt[p]=0,rt[l]=b>0?1:-1,d.push(rt.x,rt.y,rt.z),f.push(Qt/T),f.push(1-ct/I),et+=1}}for(let ct=0;ct<I;ct++)for(let wt=0;wt<T;wt++){const Qt=h+wt+W*ct,Zt=h+wt+W*(ct+1),te=h+(wt+1)+W*(ct+1),Wt=h+(wt+1)+W*ct;c.push(Qt,Zt,Wt),c.push(Zt,te,Wt),G+=6}a.addGroup(u,G,E),u+=G,h+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ai(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ri(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const A=i[e][n];A&&(A.isColor||A.isMatrix3||A.isMatrix4||A.isVector2||A.isVector3||A.isVector4||A.isTexture||A.isQuaternion)?A.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=A.clone():Array.isArray(A)?t[e][n]=A.slice():t[e][n]=A}}return t}function Ee(i){const t={};for(let e=0;e<i.length;e++){const n=ri(i[e]);for(const A in n)t[A]=n[A]}return t}function lc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function js(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:zt.workingColorSpace}const dc={clone:ri,merge:Ee};var fc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends Si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fc,this.fragmentShader=hc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ri(t.uniforms),this.uniformsGroups=lc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const A in this.uniforms){const s=this.uniforms[A].value;s&&s.isTexture?e.uniforms[A]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[A]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[A]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[A]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[A]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[A]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[A]={type:"m4",value:s.toArray()}:e.uniforms[A]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const A in this.extensions)this.extensions[A]===!0&&(n[A]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Js extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=Xe,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mn=new L,Ks=new Gt,Zs=new Gt;class De extends Js{constructor(t=50,e=1,n=.1,A=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=A,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=hr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hr*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Mn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Mn.x,Mn.y).multiplyScalar(-t/Mn.z),Mn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mn.x,Mn.y).multiplyScalar(-t/Mn.z)}getViewSize(t,e){return this.getViewBounds(t,Ks,Zs),e.subVectors(Zs,Ks)}setViewOffset(t,e,n,A,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=A,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fr*.5*this.fov)/this.zoom,n=2*e,A=this.aspect*n,r=-.5*A;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,o=s.fullHeight;r+=s.offsetX*A/c,e-=s.offsetY*n/o,A*=s.width/c,n*=s.height/o}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+A,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const si=-90,ai=1;class uc extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const A=new De(si,ai,t,e);A.layers=this.layers,this.add(A);const r=new De(si,ai,t,e);r.layers=this.layers,this.add(r);const s=new De(si,ai,t,e);s.layers=this.layers,this.add(s);const a=new De(si,ai,t,e);a.layers=this.layers,this.add(a);const c=new De(si,ai,t,e);c.layers=this.layers,this.add(c);const o=new De(si,ai,t,e);o.layers=this.layers,this.add(o)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,A,r,s,a,c]=e;for(const o of e)this.remove(o);if(t===Xe)n.up.set(0,1,0),n.lookAt(1,0,0),A.up.set(0,1,0),A.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Gi)n.up.set(0,-1,0),n.lookAt(-1,0,0),A.up.set(0,-1,0),A.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const o of e)this.add(o),o.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:A}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,c,o,d]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,A),t.render(e,r),t.setRenderTarget(n,1,A),t.render(e,s),t.setRenderTarget(n,2,A),t.render(e,a),t.setRenderTarget(n,3,A),t.render(e,c),t.setRenderTarget(n,4,A),t.render(e,o),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,A),t.render(e,d),t.setRenderTarget(f,h,u),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class qs extends _e{constructor(t=[],e=On,n,A,r,s,a,c,o,d){super(t,e,n,A,r,s,a,c,o,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class pc extends pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},A=[n,n,n,n,n,n];this.texture=new qs(A),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},A=new Ai(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Me,blending:fn});r.uniforms.tEquirect.value=e;const s=new Ke(A,r),a=e.minFilter;return e.minFilter===bn&&(e.minFilter=Ye),new uc(1,10,this).update(t,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(t,e=!0,n=!0,A=!0){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,A);t.setRenderTarget(r)}}class Ue extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gc={type:"move"};class Nr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let A=null,r=null,s=null;const a=this._targetRay,c=this._grip,o=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(o&&t.hand){s=!0;for(const M of t.hand.values()){const p=e.getJointPose(M,n),l=this._getHandJoint(o,M);p!==null&&(l.matrix.fromArray(p.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,l.jointRadius=p.radius),l.visible=p!==null}const d=o.joints["index-finger-tip"],f=o.joints["thumb-tip"],h=d.position.distanceTo(f.position),u=.02,m=.005;o.inputState.pinching&&h>u+m?(o.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!o.inputState.pinching&&h<=u-m&&(o.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(A=e.getPose(t.targetRaySpace,n),A===null&&r!==null&&(A=r),A!==null&&(a.matrix.fromArray(A.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,A.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(A.linearVelocity)):a.hasLinearVelocity=!1,A.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(A.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gc)))}return a!==null&&(a.visible=A!==null),c!==null&&(c.visible=r!==null),o!==null&&(o.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ue;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class $s extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new je,this.environmentIntensity=1,this.environmentRotation=new je,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Qr=new L,mc=new L,vc=new Ut;class Pn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,A){return this.normal.set(t,e,n),this.constant=A,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const A=Qr.subVectors(n,e).cross(mc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(A,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Qr),A=this.normal.dot(n);if(A===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/A;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||vc.getNormalMatrix(t),A=this.coplanarPoint(Qr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-A.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const In=new Mr,xc=new Gt(.5,.5),rA=new L;class Hr{constructor(t=new Pn,e=new Pn,n=new Pn,A=new Pn,r=new Pn,s=new Pn){this.planes=[t,e,n,A,r,s]}set(t,e,n,A,r,s){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(A),a[4].copy(r),a[5].copy(s),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xe,n=!1){const A=this.planes,r=t.elements,s=r[0],a=r[1],c=r[2],o=r[3],d=r[4],f=r[5],h=r[6],u=r[7],m=r[8],M=r[9],p=r[10],l=r[11],S=r[12],_=r[13],B=r[14],y=r[15];if(A[0].setComponents(o-s,u-d,l-m,y-S).normalize(),A[1].setComponents(o+s,u+d,l+m,y+S).normalize(),A[2].setComponents(o+a,u+f,l+M,y+_).normalize(),A[3].setComponents(o-a,u-f,l-M,y-_).normalize(),n)A[4].setComponents(c,h,p,B).normalize(),A[5].setComponents(o-c,u-h,l-p,y-B).normalize();else if(A[4].setComponents(o-c,u-h,l-p,y-B).normalize(),e===Xe)A[5].setComponents(o+c,u+h,l+p,y+B).normalize();else if(e===Gi)A[5].setComponents(c,h,p,B).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(t){In.center.set(0,0,0);const e=xc.distanceTo(t.center);return In.radius=.7071067811865476+e,In.applyMatrix4(t.matrixWorld),this.intersectsSphere(In)}intersectsSphere(t){const e=this.planes,n=t.center,A=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<A)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const A=e[n];if(rA.x=A.normal.x>0?t.max.x:t.min.x,rA.y=A.normal.y>0?t.max.y:t.min.y,rA.z=A.normal.z>0?t.max.z:t.min.z,A.distanceToPoint(rA)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ta extends _e{constructor(t,e,n=Cn,A,r,s,a=Qe,c=Qe,o,d=pi,f=1){if(d!==pi&&d!==gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:f};super(h,A,r,s,a,c,d,n,o),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new mr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ea extends _e{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class kr extends Ve{constructor(t=1,e=1,n=1,A=32,r=1,s=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:A,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:c};const o=this;A=Math.floor(A),r=Math.floor(r);const d=[],f=[],h=[],u=[];let m=0;const M=[],p=n/2;let l=0;S(),s===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(d),this.setAttribute("position",new de(f,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(u,2));function S(){const B=new L,y=new L;let b=0;const T=(e-t)/n;for(let I=0;I<=r;I++){const E=[],x=I/r,R=x*(e-t)+t;for(let F=0;F<=A;F++){const k=F/A,z=k*c+a,W=Math.sin(z),V=Math.cos(z);y.x=R*W,y.y=-x*n+p,y.z=R*V,f.push(y.x,y.y,y.z),B.set(W,T,V).normalize(),h.push(B.x,B.y,B.z),u.push(k,1-x),E.push(m++)}M.push(E)}for(let I=0;I<A;I++)for(let E=0;E<r;E++){const x=M[E][I],R=M[E+1][I],F=M[E+1][I+1],k=M[E][I+1];(t>0||E!==0)&&(d.push(x,R,k),b+=3),(e>0||E!==r-1)&&(d.push(R,F,k),b+=3)}o.addGroup(l,b,0),l+=b}function _(B){const y=m,b=new Gt,T=new L;let I=0;const E=B===!0?t:e,x=B===!0?1:-1;for(let F=1;F<=A;F++)f.push(0,p*x,0),h.push(0,x,0),u.push(.5,.5),m++;const R=m;for(let F=0;F<=A;F++){const z=F/A*c+a,W=Math.cos(z),V=Math.sin(z);T.x=E*V,T.y=p*x,T.z=E*W,f.push(T.x,T.y,T.z),h.push(0,x,0),b.x=W*.5+.5,b.y=V*.5*x+.5,u.push(b.x,b.y),m++}for(let F=0;F<A;F++){const k=y+F,z=R+F;B===!0?d.push(z,z+1,k):d.push(z+1,z,k),I+=3}o.addGroup(l,I,B===!0?1:2),l+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Gr extends Ve{constructor(t=[],e=[],n=1,A=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:A};const r=[],s=[];a(A),o(n),d(),this.setAttribute("position",new de(r,3)),this.setAttribute("normal",new de(r.slice(),3)),this.setAttribute("uv",new de(s,2)),A===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const _=new L,B=new L,y=new L;for(let b=0;b<e.length;b+=3)u(e[b+0],_),u(e[b+1],B),u(e[b+2],y),c(_,B,y,S)}function c(S,_,B,y){const b=y+1,T=[];for(let I=0;I<=b;I++){T[I]=[];const E=S.clone().lerp(B,I/b),x=_.clone().lerp(B,I/b),R=b-I;for(let F=0;F<=R;F++)F===0&&I===b?T[I][F]=E:T[I][F]=E.clone().lerp(x,F/R)}for(let I=0;I<b;I++)for(let E=0;E<2*(b-I)-1;E++){const x=Math.floor(E/2);E%2===0?(h(T[I][x+1]),h(T[I+1][x]),h(T[I][x])):(h(T[I][x+1]),h(T[I+1][x+1]),h(T[I+1][x]))}}function o(S){const _=new L;for(let B=0;B<r.length;B+=3)_.x=r[B+0],_.y=r[B+1],_.z=r[B+2],_.normalize().multiplyScalar(S),r[B+0]=_.x,r[B+1]=_.y,r[B+2]=_.z}function d(){const S=new L;for(let _=0;_<r.length;_+=3){S.x=r[_+0],S.y=r[_+1],S.z=r[_+2];const B=p(S)/2/Math.PI+.5,y=l(S)/Math.PI+.5;s.push(B,1-y)}m(),f()}function f(){for(let S=0;S<s.length;S+=6){const _=s[S+0],B=s[S+2],y=s[S+4],b=Math.max(_,B,y),T=Math.min(_,B,y);b>.9&&T<.1&&(_<.2&&(s[S+0]+=1),B<.2&&(s[S+2]+=1),y<.2&&(s[S+4]+=1))}}function h(S){r.push(S.x,S.y,S.z)}function u(S,_){const B=S*3;_.x=t[B+0],_.y=t[B+1],_.z=t[B+2]}function m(){const S=new L,_=new L,B=new L,y=new L,b=new Gt,T=new Gt,I=new Gt;for(let E=0,x=0;E<r.length;E+=9,x+=6){S.set(r[E+0],r[E+1],r[E+2]),_.set(r[E+3],r[E+4],r[E+5]),B.set(r[E+6],r[E+7],r[E+8]),b.set(s[x+0],s[x+1]),T.set(s[x+2],s[x+3]),I.set(s[x+4],s[x+5]),y.copy(S).add(_).add(B).divideScalar(3);const R=p(y);M(b,x+0,S,R),M(T,x+2,_,R),M(I,x+4,B,R)}}function M(S,_,B,y){y<0&&S.x===1&&(s[_]=S.x-1),B.x===0&&B.z===0&&(s[_]=y/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function l(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gr(t.vertices,t.indices,t.radius,t.details)}}class Or extends Gr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,A=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(A,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Or(t.radius,t.detail)}}class sA extends Ve{constructor(t=1,e=1,n=1,A=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:A};const r=t/2,s=e/2,a=Math.floor(n),c=Math.floor(A),o=a+1,d=c+1,f=t/a,h=e/c,u=[],m=[],M=[],p=[];for(let l=0;l<d;l++){const S=l*h-s;for(let _=0;_<o;_++){const B=_*f-r;m.push(B,-S,0),M.push(0,0,1),p.push(_/a),p.push(1-l/c)}}for(let l=0;l<c;l++)for(let S=0;S<a;S++){const _=S+o*l,B=S+o*(l+1),y=S+1+o*(l+1),b=S+1+o*l;u.push(_,B,b),u.push(B,y,b)}this.setIndex(u),this.setAttribute("position",new de(m,3)),this.setAttribute("normal",new de(M,3)),this.setAttribute("uv",new de(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sA(t.width,t.height,t.widthSegments,t.heightSegments)}}class zr extends Ve{constructor(t=1,e=32,n=16,A=0,r=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:A,phiLength:r,thetaStart:s,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(s+a,Math.PI);let o=0;const d=[],f=new L,h=new L,u=[],m=[],M=[],p=[];for(let l=0;l<=n;l++){const S=[],_=l/n;let B=0;l===0&&s===0?B=.5/e:l===n&&c===Math.PI&&(B=-.5/e);for(let y=0;y<=e;y++){const b=y/e;f.x=-t*Math.cos(A+b*r)*Math.sin(s+_*a),f.y=t*Math.cos(s+_*a),f.z=t*Math.sin(A+b*r)*Math.sin(s+_*a),m.push(f.x,f.y,f.z),h.copy(f).normalize(),M.push(h.x,h.y,h.z),p.push(b+B,1-_),S.push(o++)}d.push(S)}for(let l=0;l<n;l++)for(let S=0;S<e;S++){const _=d[l][S+1],B=d[l][S],y=d[l+1][S],b=d[l+1][S+1];(l!==0||s>0)&&u.push(_,B,b),(l!==n-1||c<Math.PI)&&u.push(B,y,b)}this.setIndex(u),this.setAttribute("position",new de(m,3)),this.setAttribute("normal",new de(M,3)),this.setAttribute("uv",new de(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ci extends Ve{constructor(t=1,e=.4,n=12,A=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:A,arc:r},n=Math.floor(n),A=Math.floor(A);const s=[],a=[],c=[],o=[],d=new L,f=new L,h=new L;for(let u=0;u<=n;u++)for(let m=0;m<=A;m++){const M=m/A*r,p=u/n*Math.PI*2;f.x=(t+e*Math.cos(p))*Math.cos(M),f.y=(t+e*Math.cos(p))*Math.sin(M),f.z=e*Math.sin(p),a.push(f.x,f.y,f.z),d.x=t*Math.cos(M),d.y=t*Math.sin(M),h.subVectors(f,d).normalize(),c.push(h.x,h.y,h.z),o.push(m/A),o.push(u/n)}for(let u=1;u<=n;u++)for(let m=1;m<=A;m++){const M=(A+1)*u+m-1,p=(A+1)*(u-1)+m-1,l=(A+1)*(u-1)+m,S=(A+1)*u+m;s.push(M,p,S),s.push(p,l,S)}this.setIndex(s),this.setAttribute("position",new de(a,3)),this.setAttribute("normal",new de(c,3)),this.setAttribute("uv",new de(o,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ci(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ec extends Si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bs,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new je,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Bc extends Si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Do,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Mc extends Si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class na extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class ia extends na{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Vr=new ae,Aa=new L,ra=new L;class wc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.mapType=We,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hr,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Aa.setFromMatrixPosition(t.matrixWorld),e.position.copy(Aa),ra.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ra),e.updateMatrixWorld(),Vr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vr,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class sa extends Js{constructor(t=-1,e=1,n=1,A=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=A,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,A,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=A,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,A=(this.top+this.bottom)/2;let r=n-t,s=n+t,a=A+e,c=A-e;if(this.view!==null&&this.view.enabled){const o=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=o*this.view.offsetX,s=r+o*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class _c extends wc{constructor(){super(new sa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class aa extends na{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new _c}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Sc extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function oa(i,t,e,n){const A=bc(n);switch(e){case ms:return i*t;case xs:return i*t/A.components*A.byteLength;case LA:return i*t/A.components*A.byteLength;case Es:return i*t*2/A.components*A.byteLength;case FA:return i*t*2/A.components*A.byteLength;case vs:return i*t*3/A.components*A.byteLength;case He:return i*t*4/A.components*A.byteLength;case NA:return i*t*4/A.components*A.byteLength;case Fi:case Ni:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qi:case Hi:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case HA:case GA:return Math.max(i,16)*Math.max(t,8)/4;case QA:case kA:return Math.max(i,8)*Math.max(t,8)/2;case OA:case zA:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case VA:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case YA:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case WA:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case XA:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case jA:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case JA:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case KA:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ZA:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case qA:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case $A:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case tr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case er:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case nr:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ir:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ar:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case rr:case sr:case ar:return Math.ceil(i/4)*Math.ceil(t/4)*16;case or:case cr:return Math.ceil(i/4)*Math.ceil(t/4)*8;case lr:case dr:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function bc(i){switch(i){case We:case hs:return{byteLength:1,components:1};case fi:case us:case hi:return{byteLength:2,components:1};case DA:case UA:return{byteLength:2,components:4};case Cn:case IA:case nn:return{byteLength:4,components:1};case ps:case gs:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mA}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mA);function ca(){let i=null,t=!1,e=null,n=null;function A(r,s){e(r,s),n=i.requestAnimationFrame(A)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(A),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Cc(i){const t=new WeakMap;function e(a,c){const o=a.array,d=a.usage,f=o.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,o,d),a.onUploadCallback();let u;if(o instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)u=i.HALF_FLOAT;else if(o instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=i.SHORT;else if(o instanceof Uint32Array)u=i.UNSIGNED_INT;else if(o instanceof Int32Array)u=i.INT;else if(o instanceof Int8Array)u=i.BYTE;else if(o instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(o instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,o){const d=c.array,f=c.updateRanges;if(i.bindBuffer(o,a),f.length===0)i.bufferSubData(o,0,d);else{f.sort((u,m)=>u.start-m.start);let h=0;for(let u=1;u<f.length;u++){const m=f[h],M=f[u];M.start<=m.start+m.count+1?m.count=Math.max(m.count,M.start+M.count-m.start):(++h,f[h]=M)}f.length=h+1;for(let u=0,m=f.length;u<m;u++){const M=f[u];i.bufferSubData(o,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function A(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function s(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const o=t.get(a);if(o===void 0)t.set(a,e(a,c));else if(o.version<a.version){if(o.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(o.buffer,a,c),o.version=a.version}}return{get:A,remove:r,update:s}}var yc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Rc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ic=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fc=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Nc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kc=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Gc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Oc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Zc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$c=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,el=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,il=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Al="gl_FragColor = linearToOutputTexel( gl_FragColor );",rl=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,al=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ol=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cl=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ll=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dl=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fl=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hl=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ul=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pl=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gl=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ml=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vl=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xl=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,El=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Bl=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ml=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wl=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_l=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sl=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bl=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cl=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yl=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tl=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rl=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pl=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Il=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dl=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ul=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ll=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fl=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Nl=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ql=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hl=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kl=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gl=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ol=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zl=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Vl=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yl=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Wl=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xl=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jl=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jl=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kl=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zl=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ql=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$l=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,td=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ed=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,id=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ad=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ad=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,od=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ld=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ud=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,md=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ed=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Md=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_d=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ft={alphahash_fragment:yc,alphahash_pars_fragment:Tc,alphamap_fragment:Rc,alphamap_pars_fragment:Pc,alphatest_fragment:Ic,alphatest_pars_fragment:Dc,aomap_fragment:Uc,aomap_pars_fragment:Lc,batching_pars_vertex:Fc,batching_vertex:Nc,begin_vertex:Qc,beginnormal_vertex:Hc,bsdfs:kc,iridescence_fragment:Gc,bumpmap_pars_fragment:Oc,clipping_planes_fragment:zc,clipping_planes_pars_fragment:Vc,clipping_planes_pars_vertex:Yc,clipping_planes_vertex:Wc,color_fragment:Xc,color_pars_fragment:jc,color_pars_vertex:Jc,color_vertex:Kc,common:Zc,cube_uv_reflection_fragment:qc,defaultnormal_vertex:$c,displacementmap_pars_vertex:tl,displacementmap_vertex:el,emissivemap_fragment:nl,emissivemap_pars_fragment:il,colorspace_fragment:Al,colorspace_pars_fragment:rl,envmap_fragment:sl,envmap_common_pars_fragment:al,envmap_pars_fragment:ol,envmap_pars_vertex:cl,envmap_physical_pars_fragment:El,envmap_vertex:ll,fog_vertex:dl,fog_pars_vertex:fl,fog_fragment:hl,fog_pars_fragment:ul,gradientmap_pars_fragment:pl,lightmap_pars_fragment:gl,lights_lambert_fragment:ml,lights_lambert_pars_fragment:vl,lights_pars_begin:xl,lights_toon_fragment:Bl,lights_toon_pars_fragment:Ml,lights_phong_fragment:wl,lights_phong_pars_fragment:_l,lights_physical_fragment:Sl,lights_physical_pars_fragment:bl,lights_fragment_begin:Cl,lights_fragment_maps:yl,lights_fragment_end:Tl,logdepthbuf_fragment:Rl,logdepthbuf_pars_fragment:Pl,logdepthbuf_pars_vertex:Il,logdepthbuf_vertex:Dl,map_fragment:Ul,map_pars_fragment:Ll,map_particle_fragment:Fl,map_particle_pars_fragment:Nl,metalnessmap_fragment:Ql,metalnessmap_pars_fragment:Hl,morphinstance_vertex:kl,morphcolor_vertex:Gl,morphnormal_vertex:Ol,morphtarget_pars_vertex:zl,morphtarget_vertex:Vl,normal_fragment_begin:Yl,normal_fragment_maps:Wl,normal_pars_fragment:Xl,normal_pars_vertex:jl,normal_vertex:Jl,normalmap_pars_fragment:Kl,clearcoat_normal_fragment_begin:Zl,clearcoat_normal_fragment_maps:ql,clearcoat_pars_fragment:$l,iridescence_pars_fragment:td,opaque_fragment:ed,packing:nd,premultiplied_alpha_fragment:id,project_vertex:Ad,dithering_fragment:rd,dithering_pars_fragment:sd,roughnessmap_fragment:ad,roughnessmap_pars_fragment:od,shadowmap_pars_fragment:cd,shadowmap_pars_vertex:ld,shadowmap_vertex:dd,shadowmask_pars_fragment:fd,skinbase_vertex:hd,skinning_pars_vertex:ud,skinning_vertex:pd,skinnormal_vertex:gd,specularmap_fragment:md,specularmap_pars_fragment:vd,tonemapping_fragment:xd,tonemapping_pars_fragment:Ed,transmission_fragment:Bd,transmission_pars_fragment:Md,uv_pars_fragment:wd,uv_pars_vertex:_d,uv_vertex:Sd,worldpos_vertex:bd,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},At={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},Ze={basic:{uniforms:Ee([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Ee([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Ee([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Ee([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Ee([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Ee([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Ee([At.points,At.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Ee([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Ee([At.common,At.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Ee([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Ee([At.sprite,At.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Ee([At.common,At.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Ee([At.lights,At.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};Ze.physical={uniforms:Ee([Ze.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const aA={r:0,b:0,g:0},Dn=new je,Cd=new ae;function yd(i,t,e,n,A,r,s){const a=new Vt(0);let c=r===!0?0:1,o,d,f=null,h=0,u=null;function m(_){let B=_.isScene===!0?_.background:null;return B&&B.isTexture&&(B=(_.backgroundBlurriness>0?e:t).get(B)),B}function M(_){let B=!1;const y=m(_);y===null?l(a,c):y&&y.isColor&&(l(y,1),B=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||B)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(_,B){const y=m(B);y&&(y.isCubeTexture||y.mapping===Ui)?(d===void 0&&(d=new Ke(new Ai(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:ri(Ze.backgroundCube.uniforms),vertexShader:Ze.backgroundCube.vertexShader,fragmentShader:Ze.backgroundCube.fragmentShader,side:Me,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(b,T,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),A.update(d)),Dn.copy(B.backgroundRotation),Dn.x*=-1,Dn.y*=-1,Dn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Dn.y*=-1,Dn.z*=-1),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Cd.makeRotationFromEuler(Dn)),d.material.toneMapped=zt.getTransfer(y.colorSpace)!==jt,(f!==y||h!==y.version||u!==i.toneMapping)&&(d.material.needsUpdate=!0,f=y,h=y.version,u=i.toneMapping),d.layers.enableAll(),_.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(o===void 0&&(o=new Ke(new sA(2,2),new Bn({name:"BackgroundMaterial",uniforms:ri(Ze.background.uniforms),vertexShader:Ze.background.vertexShader,fragmentShader:Ze.background.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),A.update(o)),o.material.uniforms.t2D.value=y,o.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,o.material.toneMapped=zt.getTransfer(y.colorSpace)!==jt,y.matrixAutoUpdate===!0&&y.updateMatrix(),o.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||u!==i.toneMapping)&&(o.material.needsUpdate=!0,f=y,h=y.version,u=i.toneMapping),o.layers.enableAll(),_.unshift(o,o.geometry,o.material,0,0,null))}function l(_,B){_.getRGB(aA,js(i)),n.buffers.color.setClear(aA.r,aA.g,aA.b,B,s)}function S(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,B=1){a.set(_),c=B,l(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,l(a,c)},render:M,addToRenderList:p,dispose:S}}function Td(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},A=h(null);let r=A,s=!1;function a(x,R,F,k,z){let W=!1;const V=f(k,F,R);r!==V&&(r=V,o(r.object)),W=u(x,k,F,z),W&&m(x,k,F,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(W||s)&&(s=!1,B(x,R,F,k),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function c(){return i.createVertexArray()}function o(x){return i.bindVertexArray(x)}function d(x){return i.deleteVertexArray(x)}function f(x,R,F){const k=F.wireframe===!0;let z=n[x.id];z===void 0&&(z={},n[x.id]=z);let W=z[R.id];W===void 0&&(W={},z[R.id]=W);let V=W[k];return V===void 0&&(V=h(c()),W[k]=V),V}function h(x){const R=[],F=[],k=[];for(let z=0;z<e;z++)R[z]=0,F[z]=0,k[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:F,attributeDivisors:k,object:x,attributes:{},index:null}}function u(x,R,F,k){const z=r.attributes,W=R.attributes;let V=0;const et=F.getAttributes();for(const G in et)if(et[G].location>=0){const ct=z[G];let wt=W[G];if(wt===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(wt=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(wt=x.instanceColor)),ct===void 0||ct.attribute!==wt||wt&&ct.data!==wt.data)return!0;V++}return r.attributesNum!==V||r.index!==k}function m(x,R,F,k){const z={},W=R.attributes;let V=0;const et=F.getAttributes();for(const G in et)if(et[G].location>=0){let ct=W[G];ct===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(ct=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(ct=x.instanceColor));const wt={};wt.attribute=ct,ct&&ct.data&&(wt.data=ct.data),z[G]=wt,V++}r.attributes=z,r.attributesNum=V,r.index=k}function M(){const x=r.newAttributes;for(let R=0,F=x.length;R<F;R++)x[R]=0}function p(x){l(x,0)}function l(x,R){const F=r.newAttributes,k=r.enabledAttributes,z=r.attributeDivisors;F[x]=1,k[x]===0&&(i.enableVertexAttribArray(x),k[x]=1),z[x]!==R&&(i.vertexAttribDivisor(x,R),z[x]=R)}function S(){const x=r.newAttributes,R=r.enabledAttributes;for(let F=0,k=R.length;F<k;F++)R[F]!==x[F]&&(i.disableVertexAttribArray(F),R[F]=0)}function _(x,R,F,k,z,W,V){V===!0?i.vertexAttribIPointer(x,R,F,z,W):i.vertexAttribPointer(x,R,F,k,z,W)}function B(x,R,F,k){M();const z=k.attributes,W=F.getAttributes(),V=R.defaultAttributeValues;for(const et in W){const G=W[et];if(G.location>=0){let rt=z[et];if(rt===void 0&&(et==="instanceMatrix"&&x.instanceMatrix&&(rt=x.instanceMatrix),et==="instanceColor"&&x.instanceColor&&(rt=x.instanceColor)),rt!==void 0){const ct=rt.normalized,wt=rt.itemSize,Qt=t.get(rt);if(Qt===void 0)continue;const Zt=Qt.buffer,te=Qt.type,Wt=Qt.bytesPerElement,X=te===i.INT||te===i.UNSIGNED_INT||rt.gpuType===IA;if(rt.isInterleavedBufferAttribute){const K=rt.data,ft=K.stride,Pt=rt.offset;if(K.isInstancedInterleavedBuffer){for(let Mt=0;Mt<G.locationSize;Mt++)l(G.location+Mt,K.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Mt=0;Mt<G.locationSize;Mt++)p(G.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let Mt=0;Mt<G.locationSize;Mt++)_(G.location+Mt,wt/G.locationSize,te,ct,ft*Wt,(Pt+wt/G.locationSize*Mt)*Wt,X)}else{if(rt.isInstancedBufferAttribute){for(let K=0;K<G.locationSize;K++)l(G.location+K,rt.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let K=0;K<G.locationSize;K++)p(G.location+K);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let K=0;K<G.locationSize;K++)_(G.location+K,wt/G.locationSize,te,ct,wt*Wt,wt/G.locationSize*K*Wt,X)}}else if(V!==void 0){const ct=V[et];if(ct!==void 0)switch(ct.length){case 2:i.vertexAttrib2fv(G.location,ct);break;case 3:i.vertexAttrib3fv(G.location,ct);break;case 4:i.vertexAttrib4fv(G.location,ct);break;default:i.vertexAttrib1fv(G.location,ct)}}}}S()}function y(){I();for(const x in n){const R=n[x];for(const F in R){const k=R[F];for(const z in k)d(k[z].object),delete k[z];delete R[F]}delete n[x]}}function b(x){if(n[x.id]===void 0)return;const R=n[x.id];for(const F in R){const k=R[F];for(const z in k)d(k[z].object),delete k[z];delete R[F]}delete n[x.id]}function T(x){for(const R in n){const F=n[R];if(F[x.id]===void 0)continue;const k=F[x.id];for(const z in k)d(k[z].object),delete k[z];delete F[x.id]}}function I(){E(),s=!0,r!==A&&(r=A,o(r.object))}function E(){A.geometry=null,A.program=null,A.wireframe=!1}return{setup:a,reset:I,resetDefaultState:E,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfProgram:T,initAttributes:M,enableAttribute:p,disableUnusedAttributes:S}}function Rd(i,t,e){let n;function A(o){n=o}function r(o,d){i.drawArrays(n,o,d),e.update(d,n,1)}function s(o,d,f){f!==0&&(i.drawArraysInstanced(n,o,d,f),e.update(d,n,f))}function a(o,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,o,0,d,0,f);let u=0;for(let m=0;m<f;m++)u+=d[m];e.update(u,n,1)}function c(o,d,f,h){if(f===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let m=0;m<o.length;m++)s(o[m],d[m],h[m]);else{u.multiDrawArraysInstancedWEBGL(n,o,0,d,0,h,0,f);let m=0;for(let M=0;M<f;M++)m+=d[M]*h[M];e.update(m,n,1)}}this.setMode=A,this.render=r,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Pd(i,t,e,n){let A;function r(){if(A!==void 0)return A;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");A=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else A=0;return A}function s(T){return!(T!==He&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const I=T===hi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==We&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==nn&&!I)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=e.precision!==void 0?e.precision:"highp";const d=c(o);d!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",d,"instead."),o=d);const f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),l=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),B=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=m>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:a,precision:o,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:u,maxVertexTextures:m,maxTextureSize:M,maxCubemapSize:p,maxAttributes:l,maxVertexUniforms:S,maxVaryings:_,maxFragmentUniforms:B,vertexTextures:y,maxSamples:b}}function Id(i){const t=this;let e=null,n=0,A=!1,r=!1;const s=new Pn,a=new Ut,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const u=f.length!==0||h||n!==0||A;return A=h,n=f.length,u},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=d(f,h,0)},this.setState=function(f,h,u){const m=f.clippingPlanes,M=f.clipIntersection,p=f.clipShadows,l=i.get(f);if(!A||m===null||m.length===0||r&&!p)r?d(null):o();else{const S=r?0:n,_=S*4;let B=l.clippingState||null;c.value=B,B=d(m,h,_,u);for(let y=0;y!==_;++y)B[y]=e[y];l.clippingState=B,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function o(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(f,h,u,m){const M=f!==null?f.length:0;let p=null;if(M!==0){if(p=c.value,m!==!0||p===null){const l=u+M*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<l)&&(p=new Float32Array(l));for(let _=0,B=u;_!==M;++_,B+=4)s.copy(f[_]).applyMatrix4(S,a),s.normal.toArray(p,B),p[B+3]=s.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,p}}function Dd(i){let t=new WeakMap;function e(s,a){return a===CA?s.mapping=On:a===yA&&(s.mapping=zn),s}function n(s){if(s&&s.isTexture){const a=s.mapping;if(a===CA||a===yA)if(t.has(s)){const c=t.get(s).texture;return e(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const o=new pc(c.height);return o.fromEquirectangularTexture(i,s),t.set(s,o),s.addEventListener("dispose",A),e(o.texture,s.mapping)}else return null}}return s}function A(s){const a=s.target;a.removeEventListener("dispose",A);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const oi=4,la=[.125,.215,.35,.446,.526,.582],Un=20,Yr=new sa,da=new Vt;let Wr=null,Xr=0,jr=0,Jr=!1;const Ln=(1+Math.sqrt(5))/2,ci=1/Ln,fa=[new L(-Ln,ci,0),new L(Ln,ci,0),new L(-ci,0,Ln),new L(ci,0,Ln),new L(0,Ln,-ci),new L(0,Ln,ci),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Ud=new L;class ha{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,A=100,r={}){const{size:s=256,position:a=Ud}=r;Wr=this._renderer.getRenderTarget(),Xr=this._renderer.getActiveCubeFace(),jr=this._renderer.getActiveMipmapLevel(),Jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,A,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ga(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Wr,Xr,jr),this._renderer.xr.enabled=Jr,t.scissorTest=!1,oA(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===On||t.mapping===zn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wr=this._renderer.getRenderTarget(),Xr=this._renderer.getActiveCubeFace(),jr=this._renderer.getActiveMipmapLevel(),Jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:hi,format:He,colorSpace:Vn,depthBuffer:!1},A=ua(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ua(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ld(r)),this._blurMaterial=Fd(r,t,e)}return A}_compileMaterial(t){const e=new Ke(this._lodPlanes[0],t);this._renderer.compile(e,Yr)}_sceneToCubeUV(t,e,n,A,r){const c=new De(90,1,e,n),o=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,u=f.toneMapping;f.getClearColor(da),f.toneMapping=hn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(A),f.clearDepth(),f.setRenderTarget(null));const M=new Os({name:"PMREM.Background",side:Me,depthWrite:!1,depthTest:!1}),p=new Ke(new Ai,M);let l=!1;const S=t.background;S?S.isColor&&(M.color.copy(S),t.background=null,l=!0):(M.color.copy(da),l=!0);for(let _=0;_<6;_++){const B=_%3;B===0?(c.up.set(0,o[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[_],r.y,r.z)):B===1?(c.up.set(0,0,o[_]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[_],r.z)):(c.up.set(0,o[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[_]));const y=this._cubeSize;oA(A,B*y,_>2?y:0,y,y),f.setRenderTarget(A),l&&f.render(p,c),f.render(t,c)}p.geometry.dispose(),p.material.dispose(),f.toneMapping=u,f.autoClear=h,t.background=S}_textureToCubeUV(t,e){const n=this._renderer,A=t.mapping===On||t.mapping===zn;A?(this._cubemapMaterial===null&&(this._cubemapMaterial=ga()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pa());const r=A?this._cubemapMaterial:this._equirectMaterial,s=new Ke(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;oA(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(s,Yr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const A=this._lodPlanes.length;for(let r=1;r<A;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=fa[(A-r-1)%fa.length];this._blur(t,r-1,r,s,a)}e.autoClear=n}_blur(t,e,n,A,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,e,n,A,"latitudinal",r),this._halfBlur(s,t,n,n,A,"longitudinal",r)}_halfBlur(t,e,n,A,r,s,a){const c=this._renderer,o=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Ke(this._lodPlanes[A],o),h=o.uniforms,u=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Un-1),M=r/m,p=isFinite(r)?1+Math.floor(d*M):Un;p>Un&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Un}`);const l=[];let S=0;for(let T=0;T<Un;++T){const I=T/M,E=Math.exp(-I*I/2);l.push(E),T===0?S+=E:T<p&&(S+=2*E)}for(let T=0;T<l.length;T++)l[T]=l[T]/S;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=l,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=m,h.mipInt.value=_-n;const B=this._sizeLods[A],y=3*B*(A>_-oi?A-_+oi:0),b=4*(this._cubeSize-B);oA(e,y,b,3*B,2*B),c.setRenderTarget(e),c.render(f,Yr)}}function Ld(i){const t=[],e=[],n=[];let A=i;const r=i-oi+1+la.length;for(let s=0;s<r;s++){const a=Math.pow(2,A);e.push(a);let c=1/a;s>i-oi?c=la[s-i+oi-1]:s===0&&(c=0),n.push(c);const o=1/(a-2),d=-o,f=1+o,h=[d,d,f,d,f,f,d,d,f,f,d,f],u=6,m=6,M=3,p=2,l=1,S=new Float32Array(M*m*u),_=new Float32Array(p*m*u),B=new Float32Array(l*m*u);for(let b=0;b<u;b++){const T=b%3*2/3-1,I=b>2?0:-1,E=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];S.set(E,M*m*b),_.set(h,p*m*b);const x=[b,b,b,b,b,b];B.set(x,l*m*b)}const y=new Ve;y.setAttribute("position",new Je(S,M)),y.setAttribute("uv",new Je(_,p)),y.setAttribute("faceIndex",new Je(B,l)),t.push(y),A>oi&&A--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ua(i,t,e){const n=new pn(i,t,e);return n.texture.mapping=Ui,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oA(i,t,e,n,A){i.viewport.set(t,e,n,A),i.scissor.set(t,e,n,A)}function Fd(i,t,e){const n=new Float32Array(Un),A=new L(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:Un,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:A}},vertexShader:Kr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function pa(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function ga(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Kr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Nd(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,o=c===CA||c===yA,d=c===On||c===zn;if(o||d){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new ha(i)),f=o?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const u=a.image;return o&&u&&u.height>0||d&&u&&A(u)?(e===null&&(e=new ha(i)),f=o?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function A(a){let c=0;const o=6;for(let d=0;d<o;d++)a[d]!==void 0&&c++;return c===o}function r(a){const c=a.target;c.removeEventListener("dispose",r);const o=t.get(c);o!==void 0&&(t.delete(c),o.dispose())}function s(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:s}}function Qd(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let A;switch(n){case"WEBGL_depth_texture":A=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":A=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":A=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":A=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:A=i.getExtension(n)}return t[n]=A,A}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const A=e(n);return A===null&&Ei("THREE.WebGLRenderer: "+n+" extension not supported."),A}}}function Hd(i,t,e,n){const A={},r=new WeakMap;function s(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const m in h.attributes)t.remove(h.attributes[m]);h.removeEventListener("dispose",s),delete A[h.id];const u=r.get(h);u&&(t.remove(u),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return A[h.id]===!0||(h.addEventListener("dispose",s),A[h.id]=!0,e.memory.geometries++),h}function c(f){const h=f.attributes;for(const u in h)t.update(h[u],i.ARRAY_BUFFER)}function o(f){const h=[],u=f.index,m=f.attributes.position;let M=0;if(u!==null){const S=u.array;M=u.version;for(let _=0,B=S.length;_<B;_+=3){const y=S[_+0],b=S[_+1],T=S[_+2];h.push(y,b,b,T,T,y)}}else if(m!==void 0){const S=m.array;M=m.version;for(let _=0,B=S.length/3-1;_<B;_+=3){const y=_+0,b=_+1,T=_+2;h.push(y,b,b,T,T,y)}}else return;const p=new(Cs(h)?Vs:zs)(h,1);p.version=M;const l=r.get(f);l&&t.remove(l),r.set(f,p)}function d(f){const h=r.get(f);if(h){const u=f.index;u!==null&&h.version<u.version&&o(f)}else o(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:d}}function kd(i,t,e){let n;function A(h){n=h}let r,s;function a(h){r=h.type,s=h.bytesPerElement}function c(h,u){i.drawElements(n,u,r,h*s),e.update(u,n,1)}function o(h,u,m){m!==0&&(i.drawElementsInstanced(n,u,r,h*s,m),e.update(u,n,m))}function d(h,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,h,0,m);let p=0;for(let l=0;l<m;l++)p+=u[l];e.update(p,n,1)}function f(h,u,m,M){if(m===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let l=0;l<h.length;l++)o(h[l]/s,u[l],M[l]);else{p.multiDrawElementsInstancedWEBGL(n,u,0,r,h,0,M,0,m);let l=0;for(let S=0;S<m;S++)l+=u[S]*M[S];e.update(l,n,1)}}this.setMode=A,this.setIndex=a,this.render=c,this.renderInstances=o,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function Gd(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,a){switch(e.calls++,s){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function A(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:A,update:n}}function Od(i,t,e){const n=new WeakMap,A=new re;function r(s,a,c){const o=s.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let E=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();const u=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],l=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let _=0;u===!0&&(_=1),m===!0&&(_=2),M===!0&&(_=3);let B=a.attributes.position.count*_,y=1;B>t.maxTextureSize&&(y=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const b=new Float32Array(B*y*4*f),T=new Ps(b,B,y,f);T.type=nn,T.needsUpdate=!0;const I=_*4;for(let x=0;x<f;x++){const R=p[x],F=l[x],k=S[x],z=B*y*4*x;for(let W=0;W<R.count;W++){const V=W*I;u===!0&&(A.fromBufferAttribute(R,W),b[z+V+0]=A.x,b[z+V+1]=A.y,b[z+V+2]=A.z,b[z+V+3]=0),m===!0&&(A.fromBufferAttribute(F,W),b[z+V+4]=A.x,b[z+V+5]=A.y,b[z+V+6]=A.z,b[z+V+7]=0),M===!0&&(A.fromBufferAttribute(k,W),b[z+V+8]=A.x,b[z+V+9]=A.y,b[z+V+10]=A.z,b[z+V+11]=k.itemSize===4?A.w:1)}}h={count:f,texture:T,size:new Gt(B,y)},n.set(a,h),a.addEventListener("dispose",E)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",s.morphTexture,e);else{let u=0;for(let M=0;M<o.length;M++)u+=o[M];const m=a.morphTargetsRelative?1:1-u;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",o)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function zd(i,t,e,n){let A=new WeakMap;function r(c){const o=n.render.frame,d=c.geometry,f=t.get(c,d);if(A.get(f)!==o&&(t.update(f),A.set(f,o)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),A.get(c)!==o&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),A.set(c,o))),c.isSkinnedMesh){const h=c.skeleton;A.get(h)!==o&&(h.update(),A.set(h,o))}return f}function s(){A=new WeakMap}function a(c){const o=c.target;o.removeEventListener("dispose",a),e.remove(o.instanceMatrix),o.instanceColor!==null&&e.remove(o.instanceColor)}return{update:r,dispose:s}}const ma=new _e,va=new ta(1,1),xa=new Ps,Ea=new Zo,Ba=new qs,Ma=[],wa=[],_a=new Float32Array(16),Sa=new Float32Array(9),ba=new Float32Array(4);function li(i,t,e){const n=i[0];if(n<=0||n>0)return i;const A=t*e;let r=Ma[A];if(r===void 0&&(r=new Float32Array(A),Ma[A]=r),t!==0){n.toArray(r,0);for(let s=1,a=0;s!==t;++s)a+=e,i[s].toArray(r,a)}return r}function fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function he(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function cA(i,t){let e=wa[t];e===void 0&&(e=new Int32Array(t),wa[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Vd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Yd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2fv(this.addr,t),he(e,t)}}function Wd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fe(e,t))return;i.uniform3fv(this.addr,t),he(e,t)}}function Xd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4fv(this.addr,t),he(e,t)}}function jd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),he(e,t)}else{if(fe(e,n))return;ba.set(n),i.uniformMatrix2fv(this.addr,!1,ba),he(e,n)}}function Jd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),he(e,t)}else{if(fe(e,n))return;Sa.set(n),i.uniformMatrix3fv(this.addr,!1,Sa),he(e,n)}}function Kd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),he(e,t)}else{if(fe(e,n))return;_a.set(n),i.uniformMatrix4fv(this.addr,!1,_a),he(e,n)}}function Zd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function qd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2iv(this.addr,t),he(e,t)}}function $d(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;i.uniform3iv(this.addr,t),he(e,t)}}function tf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4iv(this.addr,t),he(e,t)}}function ef(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function nf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2uiv(this.addr,t),he(e,t)}}function Af(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;i.uniform3uiv(this.addr,t),he(e,t)}}function rf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4uiv(this.addr,t),he(e,t)}}function sf(i,t,e){const n=this.cache,A=e.allocateTextureUnit();n[0]!==A&&(i.uniform1i(this.addr,A),n[0]=A);let r;this.type===i.SAMPLER_2D_SHADOW?(va.compareFunction=ws,r=va):r=ma,e.setTexture2D(t||r,A)}function af(i,t,e){const n=this.cache,A=e.allocateTextureUnit();n[0]!==A&&(i.uniform1i(this.addr,A),n[0]=A),e.setTexture3D(t||Ea,A)}function of(i,t,e){const n=this.cache,A=e.allocateTextureUnit();n[0]!==A&&(i.uniform1i(this.addr,A),n[0]=A),e.setTextureCube(t||Ba,A)}function cf(i,t,e){const n=this.cache,A=e.allocateTextureUnit();n[0]!==A&&(i.uniform1i(this.addr,A),n[0]=A),e.setTexture2DArray(t||xa,A)}function lf(i){switch(i){case 5126:return Vd;case 35664:return Yd;case 35665:return Wd;case 35666:return Xd;case 35674:return jd;case 35675:return Jd;case 35676:return Kd;case 5124:case 35670:return Zd;case 35667:case 35671:return qd;case 35668:case 35672:return $d;case 35669:case 35673:return tf;case 5125:return ef;case 36294:return nf;case 36295:return Af;case 36296:return rf;case 35678:case 36198:case 36298:case 36306:case 35682:return sf;case 35679:case 36299:case 36307:return af;case 35680:case 36300:case 36308:case 36293:return of;case 36289:case 36303:case 36311:case 36292:return cf}}function df(i,t){i.uniform1fv(this.addr,t)}function ff(i,t){const e=li(t,this.size,2);i.uniform2fv(this.addr,e)}function hf(i,t){const e=li(t,this.size,3);i.uniform3fv(this.addr,e)}function uf(i,t){const e=li(t,this.size,4);i.uniform4fv(this.addr,e)}function pf(i,t){const e=li(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function gf(i,t){const e=li(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function mf(i,t){const e=li(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function vf(i,t){i.uniform1iv(this.addr,t)}function xf(i,t){i.uniform2iv(this.addr,t)}function Ef(i,t){i.uniform3iv(this.addr,t)}function Bf(i,t){i.uniform4iv(this.addr,t)}function Mf(i,t){i.uniform1uiv(this.addr,t)}function wf(i,t){i.uniform2uiv(this.addr,t)}function _f(i,t){i.uniform3uiv(this.addr,t)}function Sf(i,t){i.uniform4uiv(this.addr,t)}function bf(i,t,e){const n=this.cache,A=t.length,r=cA(e,A);fe(n,r)||(i.uniform1iv(this.addr,r),he(n,r));for(let s=0;s!==A;++s)e.setTexture2D(t[s]||ma,r[s])}function Cf(i,t,e){const n=this.cache,A=t.length,r=cA(e,A);fe(n,r)||(i.uniform1iv(this.addr,r),he(n,r));for(let s=0;s!==A;++s)e.setTexture3D(t[s]||Ea,r[s])}function yf(i,t,e){const n=this.cache,A=t.length,r=cA(e,A);fe(n,r)||(i.uniform1iv(this.addr,r),he(n,r));for(let s=0;s!==A;++s)e.setTextureCube(t[s]||Ba,r[s])}function Tf(i,t,e){const n=this.cache,A=t.length,r=cA(e,A);fe(n,r)||(i.uniform1iv(this.addr,r),he(n,r));for(let s=0;s!==A;++s)e.setTexture2DArray(t[s]||xa,r[s])}function Rf(i){switch(i){case 5126:return df;case 35664:return ff;case 35665:return hf;case 35666:return uf;case 35674:return pf;case 35675:return gf;case 35676:return mf;case 5124:case 35670:return vf;case 35667:case 35671:return xf;case 35668:case 35672:return Ef;case 35669:case 35673:return Bf;case 5125:return Mf;case 36294:return wf;case 36295:return _f;case 36296:return Sf;case 35678:case 36198:case 36298:case 36306:case 35682:return bf;case 35679:case 36299:case 36307:return Cf;case 35680:case 36300:case 36308:case 36293:return yf;case 36289:case 36303:case 36311:case 36292:return Tf}}class Pf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=lf(e.type)}}class If{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Rf(e.type)}}class Df{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const A=this.seq;for(let r=0,s=A.length;r!==s;++r){const a=A[r];a.setValue(t,e[a.id],n)}}}const Zr=/(\w+)(\])?(\[|\.)?/g;function Ca(i,t){i.seq.push(t),i.map[t.id]=t}function Uf(i,t,e){const n=i.name,A=n.length;for(Zr.lastIndex=0;;){const r=Zr.exec(n),s=Zr.lastIndex;let a=r[1];const c=r[2]==="]",o=r[3];if(c&&(a=a|0),o===void 0||o==="["&&s+2===A){Ca(e,o===void 0?new Pf(a,i,t):new If(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new Df(a),Ca(e,f)),e=f}}}class lA{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let A=0;A<n;++A){const r=t.getActiveUniform(e,A),s=t.getUniformLocation(e,r.name);Uf(r,s,this)}}setValue(t,e,n,A){const r=this.map[e];r!==void 0&&r.setValue(t,n,A)}setOptional(t,e,n){const A=e[n];A!==void 0&&this.setValue(t,n,A)}static upload(t,e,n,A){for(let r=0,s=e.length;r!==s;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,A)}}static seqWithValue(t,e){const n=[];for(let A=0,r=t.length;A!==r;++A){const s=t[A];s.id in e&&n.push(s)}return n}}function ya(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Lf=37297;let Ff=0;function Nf(i,t){const e=i.split(`
`),n=[],A=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let s=A;s<r;s++){const a=s+1;n.push(`${a===t?">":" "} ${a}: ${e[s]}`)}return n.join(`
`)}const Ta=new Ut;function Qf(i){zt._getMatrix(Ta,zt.workingColorSpace,i);const t=`mat3( ${Ta.elements.map(e=>e.toFixed(4))} )`;switch(zt.getTransfer(i)){case ki:return[t,"LinearTransferOETF"];case jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ra(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Nf(i.getShaderSource(t),a)}else return r}function Hf(i,t){const e=Qf(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function kf(i,t){let e;switch(t){case So:e="Linear";break;case bo:e="Reinhard";break;case Co:e="Cineon";break;case yo:e="ACESFilmic";break;case Ro:e="AgX";break;case Po:e="Neutral";break;case To:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const dA=new L;function Gf(){zt.getLuminanceCoefficients(dA);const i=dA.x.toFixed(4),t=dA.y.toFixed(4),e=dA.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Of(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yi).join(`
`)}function zf(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Vf(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let A=0;A<n;A++){const r=i.getActiveAttrib(t,A),s=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[s]={type:r.type,location:i.getAttribLocation(t,s),locationSize:a}}return e}function yi(i){return i!==""}function Pa(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ia(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Yf=/^[ \t]*#include +<([\w\d./]+)>/gm;function qr(i){return i.replace(Yf,Xf)}const Wf=new Map;function Xf(i,t){let e=Ft[t];if(e===void 0){const n=Wf.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return qr(e)}const jf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Da(i){return i.replace(jf,Jf)}function Jf(i,t,e,n){let A="";for(let r=parseInt(t);r<parseInt(e);r++)A+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return A}function Ua(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Kf(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===as?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===io?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===tn&&(t="SHADOWMAP_TYPE_VSM"),t}function Zf(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case On:case zn:t="ENVMAP_TYPE_CUBE";break;case Ui:t="ENVMAP_TYPE_CUBE_UV";break}return t}function qf(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===zn&&(t="ENVMAP_MODE_REFRACTION"),t}function $f(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ds:t="ENVMAP_BLENDING_MULTIPLY";break;case wo:t="ENVMAP_BLENDING_MIX";break;case _o:t="ENVMAP_BLENDING_ADD";break}return t}function th(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function eh(i,t,e,n){const A=i.getContext(),r=e.defines;let s=e.vertexShader,a=e.fragmentShader;const c=Kf(e),o=Zf(e),d=qf(e),f=$f(e),h=th(e),u=Of(e),m=zf(r),M=A.createProgram();let p,l,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(yi).join(`
`),p.length>0&&(p+=`
`),l=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(yi).join(`
`),l.length>0&&(l+=`
`)):(p=[Ua(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yi).join(`
`),l=[Ua(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+o:"",e.envMap?"#define "+d:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hn?"#define TONE_MAPPING":"",e.toneMapping!==hn?Ft.tonemapping_pars_fragment:"",e.toneMapping!==hn?kf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,Hf("linearToOutputTexel",e.outputColorSpace),Gf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(yi).join(`
`)),s=qr(s),s=Pa(s,e),s=Ia(s,e),a=qr(a),a=Pa(a,e),a=Ia(a,e),s=Da(s),a=Da(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,l=["#define varying in",e.glslVersion===Ss?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ss?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);const _=S+p+s,B=S+l+a,y=ya(A,A.VERTEX_SHADER,_),b=ya(A,A.FRAGMENT_SHADER,B);A.attachShader(M,y),A.attachShader(M,b),e.index0AttributeName!==void 0?A.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&A.bindAttribLocation(M,0,"position"),A.linkProgram(M);function T(R){if(i.debug.checkShaderErrors){const F=A.getProgramInfoLog(M)||"",k=A.getShaderInfoLog(y)||"",z=A.getShaderInfoLog(b)||"",W=F.trim(),V=k.trim(),et=z.trim();let G=!0,rt=!0;if(A.getProgramParameter(M,A.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(A,M,y,b);else{const ct=Ra(A,y,"vertex"),wt=Ra(A,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+A.getError()+" - VALIDATE_STATUS "+A.getProgramParameter(M,A.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+W+`
`+ct+`
`+wt)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(V===""||et==="")&&(rt=!1);rt&&(R.diagnostics={runnable:G,programLog:W,vertexShader:{log:V,prefix:p},fragmentShader:{log:et,prefix:l}})}A.deleteShader(y),A.deleteShader(b),I=new lA(A,M),E=Vf(A,M)}let I;this.getUniforms=function(){return I===void 0&&T(this),I};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=A.getProgramParameter(M,Lf)),x},this.destroy=function(){n.releaseStatesOfProgram(this),A.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ff++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=y,this.fragmentShader=b,this}let nh=0;class ih{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,A=this._getShaderStage(e),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(t);return s.has(A)===!1&&(s.add(A),A.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ah(t),e.set(t,n)),n}}class Ah{constructor(t){this.id=nh++,this.code=t,this.usedTimes=0}}function rh(i,t,e,n,A,r,s){const a=new Us,c=new ih,o=new Set,d=[],f=A.logarithmicDepthBuffer,h=A.vertexTextures;let u=A.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return o.add(E),E===0?"uv":`uv${E}`}function p(E,x,R,F,k){const z=F.fog,W=k.geometry,V=E.isMeshStandardMaterial?F.environment:null,et=(E.isMeshStandardMaterial?e:t).get(E.envMap||V),G=et&&et.mapping===Ui?et.image.height:null,rt=m[E.type];E.precision!==null&&(u=A.getMaxPrecision(E.precision),u!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",u,"instead."));const ct=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,wt=ct!==void 0?ct.length:0;let Qt=0;W.morphAttributes.position!==void 0&&(Qt=1),W.morphAttributes.normal!==void 0&&(Qt=2),W.morphAttributes.color!==void 0&&(Qt=3);let Zt,te,Wt,X;if(rt){const Xt=Ze[rt];Zt=Xt.vertexShader,te=Xt.fragmentShader}else Zt=E.vertexShader,te=E.fragmentShader,c.update(E),Wt=c.getVertexShaderID(E),X=c.getFragmentShaderID(E);const K=i.getRenderTarget(),ft=i.state.buffers.depth.getReversed(),Pt=k.isInstancedMesh===!0,Mt=k.isBatchedMesh===!0,Ot=!!E.map,xe=!!E.matcap,C=!!et,ee=!!E.aoMap,Dt=!!E.lightMap,Tt=!!E.bumpMap,gt=!!E.normalMap,ne=!!E.displacementMap,mt=!!E.emissiveMap,Nt=!!E.metalnessMap,pe=!!E.roughnessMap,ce=E.anisotropy>0,w=E.clearcoat>0,g=E.dispersion>0,N=E.iridescence>0,Y=E.sheen>0,J=E.transmission>0,O=ce&&!!E.anisotropyMap,Bt=w&&!!E.clearcoatMap,nt=w&&!!E.clearcoatNormalMap,vt=w&&!!E.clearcoatRoughnessMap,xt=N&&!!E.iridescenceMap,$=N&&!!E.iridescenceThicknessMap,ot=Y&&!!E.sheenColorMap,yt=Y&&!!E.sheenRoughnessMap,Et=!!E.specularMap,st=!!E.specularColorMap,Lt=!!E.specularIntensityMap,P=J&&!!E.transmissionMap,tt=J&&!!E.thicknessMap,it=!!E.gradientMap,dt=!!E.alphaMap,Z=E.alphaTest>0,j=!!E.alphaHash,pt=!!E.extensions;let It=hn;E.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(It=i.toneMapping);const qt={shaderID:rt,shaderType:E.type,shaderName:E.name,vertexShader:Zt,fragmentShader:te,defines:E.defines,customVertexShaderID:Wt,customFragmentShaderID:X,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:u,batching:Mt,batchingColor:Mt&&k._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&k.instanceColor!==null,instancingMorph:Pt&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Vn,alphaToCoverage:!!E.alphaToCoverage,map:Ot,matcap:xe,envMap:C,envMapMode:C&&et.mapping,envMapCubeUVHeight:G,aoMap:ee,lightMap:Dt,bumpMap:Tt,normalMap:gt,displacementMap:h&&ne,emissiveMap:mt,normalMapObjectSpace:gt&&E.normalMapType===Lo,normalMapTangentSpace:gt&&E.normalMapType===Bs,metalnessMap:Nt,roughnessMap:pe,anisotropy:ce,anisotropyMap:O,clearcoat:w,clearcoatMap:Bt,clearcoatNormalMap:nt,clearcoatRoughnessMap:vt,dispersion:g,iridescence:N,iridescenceMap:xt,iridescenceThicknessMap:$,sheen:Y,sheenColorMap:ot,sheenRoughnessMap:yt,specularMap:Et,specularColorMap:st,specularIntensityMap:Lt,transmission:J,transmissionMap:P,thicknessMap:tt,gradientMap:it,opaque:E.transparent===!1&&E.blending===kn&&E.alphaToCoverage===!1,alphaMap:dt,alphaTest:Z,alphaHash:j,combine:E.combine,mapUv:Ot&&M(E.map.channel),aoMapUv:ee&&M(E.aoMap.channel),lightMapUv:Dt&&M(E.lightMap.channel),bumpMapUv:Tt&&M(E.bumpMap.channel),normalMapUv:gt&&M(E.normalMap.channel),displacementMapUv:ne&&M(E.displacementMap.channel),emissiveMapUv:mt&&M(E.emissiveMap.channel),metalnessMapUv:Nt&&M(E.metalnessMap.channel),roughnessMapUv:pe&&M(E.roughnessMap.channel),anisotropyMapUv:O&&M(E.anisotropyMap.channel),clearcoatMapUv:Bt&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:nt&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:$&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:yt&&M(E.sheenRoughnessMap.channel),specularMapUv:Et&&M(E.specularMap.channel),specularColorMapUv:st&&M(E.specularColorMap.channel),specularIntensityMapUv:Lt&&M(E.specularIntensityMap.channel),transmissionMapUv:P&&M(E.transmissionMap.channel),thicknessMapUv:tt&&M(E.thicknessMap.channel),alphaMapUv:dt&&M(E.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(gt||ce),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!W.attributes.uv&&(Ot||dt),fog:!!z,useFog:E.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ft,skinning:k.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:Qt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:It,decodeVideoTexture:Ot&&E.map.isVideoTexture===!0&&zt.getTransfer(E.map.colorSpace)===jt,decodeVideoTextureEmissive:mt&&E.emissiveMap.isVideoTexture===!0&&zt.getTransfer(E.emissiveMap.colorSpace)===jt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===en,flipSided:E.side===Me,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:pt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&E.extensions.multiDraw===!0||Mt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return qt.vertexUv1s=o.has(1),qt.vertexUv2s=o.has(2),qt.vertexUv3s=o.has(3),o.clear(),qt}function l(E){const x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(const R in E.defines)x.push(R),x.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(S(x,E),_(x,E),x.push(i.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function S(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function _(E,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),E.push(a.mask)}function B(E){const x=m[E.type];let R;if(x){const F=Ze[x];R=dc.clone(F.uniforms)}else R=E.uniforms;return R}function y(E,x){let R;for(let F=0,k=d.length;F<k;F++){const z=d[F];if(z.cacheKey===x){R=z,++R.usedTimes;break}}return R===void 0&&(R=new eh(i,x,E,r),d.push(R)),R}function b(E){if(--E.usedTimes===0){const x=d.indexOf(E);d[x]=d[d.length-1],d.pop(),E.destroy()}}function T(E){c.remove(E)}function I(){c.dispose()}return{getParameters:p,getProgramCacheKey:l,getUniforms:B,acquireProgram:y,releaseProgram:b,releaseShaderCache:T,programs:d,dispose:I}}function sh(){let i=new WeakMap;function t(s){return i.has(s)}function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function n(s){i.delete(s)}function A(s,a,c){i.get(s)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:A,dispose:r}}function ah(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function La(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Fa(){const i=[];let t=0;const e=[],n=[],A=[];function r(){t=0,e.length=0,n.length=0,A.length=0}function s(f,h,u,m,M,p){let l=i[t];return l===void 0?(l={id:f.id,object:f,geometry:h,material:u,groupOrder:m,renderOrder:f.renderOrder,z:M,group:p},i[t]=l):(l.id=f.id,l.object=f,l.geometry=h,l.material=u,l.groupOrder=m,l.renderOrder=f.renderOrder,l.z=M,l.group=p),t++,l}function a(f,h,u,m,M,p){const l=s(f,h,u,m,M,p);u.transmission>0?n.push(l):u.transparent===!0?A.push(l):e.push(l)}function c(f,h,u,m,M,p){const l=s(f,h,u,m,M,p);u.transmission>0?n.unshift(l):u.transparent===!0?A.unshift(l):e.unshift(l)}function o(f,h){e.length>1&&e.sort(f||ah),n.length>1&&n.sort(h||La),A.length>1&&A.sort(h||La)}function d(){for(let f=t,h=i.length;f<h;f++){const u=i[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:A,init:r,push:a,unshift:c,finish:d,sort:o}}function oh(){let i=new WeakMap;function t(n,A){const r=i.get(n);let s;return r===void 0?(s=new Fa,i.set(n,[s])):A>=r.length?(s=new Fa,r.push(s)):s=r[A],s}function e(){i=new WeakMap}return{get:t,dispose:e}}function ch(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Vt};break;case"SpotLight":e={position:new L,direction:new L,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function lh(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let dh=0;function fh(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function hh(i){const t=new ch,e=lh(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new L);const A=new L,r=new ae,s=new ae;function a(o){let d=0,f=0,h=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let u=0,m=0,M=0,p=0,l=0,S=0,_=0,B=0,y=0,b=0,T=0;o.sort(fh);for(let E=0,x=o.length;E<x;E++){const R=o[E],F=R.color,k=R.intensity,z=R.distance,W=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=F.r*k,f+=F.g*k,h+=F.b*k;else if(R.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(R.sh.coefficients[V],k);T++}else if(R.isDirectionalLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const et=R.shadow,G=e.get(R);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,n.directionalShadow[u]=G,n.directionalShadowMap[u]=W,n.directionalShadowMatrix[u]=R.shadow.matrix,S++}n.directional[u]=V,u++}else if(R.isSpotLight){const V=t.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(F).multiplyScalar(k),V.distance=z,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,n.spot[M]=V;const et=R.shadow;if(R.map&&(n.spotLightMap[y]=R.map,y++,et.updateMatrices(R),R.castShadow&&b++),n.spotLightMatrix[M]=et.matrix,R.castShadow){const G=e.get(R);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,n.spotShadow[M]=G,n.spotShadowMap[M]=W,B++}M++}else if(R.isRectAreaLight){const V=t.get(R);V.color.copy(F).multiplyScalar(k),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=V,p++}else if(R.isPointLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){const et=R.shadow,G=e.get(R);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,G.shadowCameraNear=et.camera.near,G.shadowCameraFar=et.camera.far,n.pointShadow[m]=G,n.pointShadowMap[m]=W,n.pointShadowMatrix[m]=R.shadow.matrix,_++}n.point[m]=V,m++}else if(R.isHemisphereLight){const V=t.get(R);V.skyColor.copy(R.color).multiplyScalar(k),V.groundColor.copy(R.groundColor).multiplyScalar(k),n.hemi[l]=V,l++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=At.LTC_FLOAT_1,n.rectAreaLTC2=At.LTC_FLOAT_2):(n.rectAreaLTC1=At.LTC_HALF_1,n.rectAreaLTC2=At.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=h;const I=n.hash;(I.directionalLength!==u||I.pointLength!==m||I.spotLength!==M||I.rectAreaLength!==p||I.hemiLength!==l||I.numDirectionalShadows!==S||I.numPointShadows!==_||I.numSpotShadows!==B||I.numSpotMaps!==y||I.numLightProbes!==T)&&(n.directional.length=u,n.spot.length=M,n.rectArea.length=p,n.point.length=m,n.hemi.length=l,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=B,n.spotShadowMap.length=B,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=B+y-b,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=T,I.directionalLength=u,I.pointLength=m,I.spotLength=M,I.rectAreaLength=p,I.hemiLength=l,I.numDirectionalShadows=S,I.numPointShadows=_,I.numSpotShadows=B,I.numSpotMaps=y,I.numLightProbes=T,n.version=dh++)}function c(o,d){let f=0,h=0,u=0,m=0,M=0;const p=d.matrixWorldInverse;for(let l=0,S=o.length;l<S;l++){const _=o[l];if(_.isDirectionalLight){const B=n.directional[f];B.direction.setFromMatrixPosition(_.matrixWorld),A.setFromMatrixPosition(_.target.matrixWorld),B.direction.sub(A),B.direction.transformDirection(p),f++}else if(_.isSpotLight){const B=n.spot[u];B.position.setFromMatrixPosition(_.matrixWorld),B.position.applyMatrix4(p),B.direction.setFromMatrixPosition(_.matrixWorld),A.setFromMatrixPosition(_.target.matrixWorld),B.direction.sub(A),B.direction.transformDirection(p),u++}else if(_.isRectAreaLight){const B=n.rectArea[m];B.position.setFromMatrixPosition(_.matrixWorld),B.position.applyMatrix4(p),s.identity(),r.copy(_.matrixWorld),r.premultiply(p),s.extractRotation(r),B.halfWidth.set(_.width*.5,0,0),B.halfHeight.set(0,_.height*.5,0),B.halfWidth.applyMatrix4(s),B.halfHeight.applyMatrix4(s),m++}else if(_.isPointLight){const B=n.point[h];B.position.setFromMatrixPosition(_.matrixWorld),B.position.applyMatrix4(p),h++}else if(_.isHemisphereLight){const B=n.hemi[M];B.direction.setFromMatrixPosition(_.matrixWorld),B.direction.transformDirection(p),M++}}}return{setup:a,setupView:c,state:n}}function Na(i){const t=new hh(i),e=[],n=[];function A(d){o.camera=d,e.length=0,n.length=0}function r(d){e.push(d)}function s(d){n.push(d)}function a(){t.setup(e)}function c(d){t.setupView(e,d)}const o={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:A,state:o,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:s}}function uh(i){let t=new WeakMap;function e(A,r=0){const s=t.get(A);let a;return s===void 0?(a=new Na(i),t.set(A,[a])):r>=s.length?(a=new Na(i),s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const ph=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gh=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mh(i,t,e){let n=new Hr;const A=new Gt,r=new Gt,s=new re,a=new Bc({depthPacking:Uo}),c=new Mc,o={},d=e.maxTextureSize,f={[dn]:Me,[Me]:dn,[en]:en},h=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:ph,fragmentShader:gh}),u=h.clone();u.defines.HORIZONTAL_PASS=1;const m=new Ve;m.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Ke(m,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=as;let l=this.type;this.render=function(b,T,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const E=i.getRenderTarget(),x=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),F=i.state;F.setBlending(fn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const k=l!==tn&&this.type===tn,z=l===tn&&this.type!==tn;for(let W=0,V=b.length;W<V;W++){const et=b[W],G=et.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;A.copy(G.mapSize);const rt=G.getFrameExtents();if(A.multiply(rt),r.copy(G.mapSize),(A.x>d||A.y>d)&&(A.x>d&&(r.x=Math.floor(d/rt.x),A.x=r.x*rt.x,G.mapSize.x=r.x),A.y>d&&(r.y=Math.floor(d/rt.y),A.y=r.y*rt.y,G.mapSize.y=r.y)),G.map===null||k===!0||z===!0){const wt=this.type!==tn?{minFilter:Qe,magFilter:Qe}:{};G.map!==null&&G.map.dispose(),G.map=new pn(A.x,A.y,wt),G.map.texture.name=et.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const ct=G.getViewportCount();for(let wt=0;wt<ct;wt++){const Qt=G.getViewport(wt);s.set(r.x*Qt.x,r.y*Qt.y,r.x*Qt.z,r.y*Qt.w),F.viewport(s),G.updateMatrices(et,wt),n=G.getFrustum(),B(T,I,G.camera,et,this.type)}G.isPointLightShadow!==!0&&this.type===tn&&S(G,I),G.needsUpdate=!1}l=this.type,p.needsUpdate=!1,i.setRenderTarget(E,x,R)};function S(b,T){const I=t.update(M);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,u.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,u.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new pn(A.x,A.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(T,null,I,h,M,null),u.uniforms.shadow_pass.value=b.mapPass.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(T,null,I,u,M,null)}function _(b,T,I,E){let x=null;const R=I.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)x=R;else if(x=I.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const F=x.uuid,k=T.uuid;let z=o[F];z===void 0&&(z={},o[F]=z);let W=z[k];W===void 0&&(W=x.clone(),z[k]=W,T.addEventListener("dispose",y)),x=W}if(x.visible=T.visible,x.wireframe=T.wireframe,E===tn?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:f[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const F=i.properties.get(x);F.light=I}return x}function B(b,T,I,E,x){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===tn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,b.matrixWorld);const k=t.update(b),z=b.material;if(Array.isArray(z)){const W=k.groups;for(let V=0,et=W.length;V<et;V++){const G=W[V],rt=z[G.materialIndex];if(rt&&rt.visible){const ct=_(b,rt,E,x);b.onBeforeShadow(i,b,T,I,k,ct,G),i.renderBufferDirect(I,null,k,ct,b,G),b.onAfterShadow(i,b,T,I,k,ct,G)}}}else if(z.visible){const W=_(b,z,E,x);b.onBeforeShadow(i,b,T,I,k,W,null),i.renderBufferDirect(I,null,k,W,b,null),b.onAfterShadow(i,b,T,I,k,W,null)}}const F=b.children;for(let k=0,z=F.length;k<z;k++)B(F[k],T,I,E,x)}function y(b){b.target.removeEventListener("dispose",y);for(const I in o){const E=o[I],x=b.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}const vh={[EA]:BA,[MA]:SA,[wA]:bA,[Gn]:_A,[BA]:EA,[SA]:MA,[bA]:wA,[_A]:Gn};function xh(i,t){function e(){let P=!1;const tt=new re;let it=null;const dt=new re(0,0,0,0);return{setMask:function(Z){it!==Z&&!P&&(i.colorMask(Z,Z,Z,Z),it=Z)},setLocked:function(Z){P=Z},setClear:function(Z,j,pt,It,qt){qt===!0&&(Z*=It,j*=It,pt*=It),tt.set(Z,j,pt,It),dt.equals(tt)===!1&&(i.clearColor(Z,j,pt,It),dt.copy(tt))},reset:function(){P=!1,it=null,dt.set(-1,0,0,0)}}}function n(){let P=!1,tt=!1,it=null,dt=null,Z=null;return{setReversed:function(j){if(tt!==j){const pt=t.get("EXT_clip_control");j?pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.ZERO_TO_ONE_EXT):pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.NEGATIVE_ONE_TO_ONE_EXT),tt=j;const It=Z;Z=null,this.setClear(It)}},getReversed:function(){return tt},setTest:function(j){j?K(i.DEPTH_TEST):ft(i.DEPTH_TEST)},setMask:function(j){it!==j&&!P&&(i.depthMask(j),it=j)},setFunc:function(j){if(tt&&(j=vh[j]),dt!==j){switch(j){case EA:i.depthFunc(i.NEVER);break;case BA:i.depthFunc(i.ALWAYS);break;case MA:i.depthFunc(i.LESS);break;case Gn:i.depthFunc(i.LEQUAL);break;case wA:i.depthFunc(i.EQUAL);break;case _A:i.depthFunc(i.GEQUAL);break;case SA:i.depthFunc(i.GREATER);break;case bA:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}dt=j}},setLocked:function(j){P=j},setClear:function(j){Z!==j&&(tt&&(j=1-j),i.clearDepth(j),Z=j)},reset:function(){P=!1,it=null,dt=null,Z=null,tt=!1}}}function A(){let P=!1,tt=null,it=null,dt=null,Z=null,j=null,pt=null,It=null,qt=null;return{setTest:function(Xt){P||(Xt?K(i.STENCIL_TEST):ft(i.STENCIL_TEST))},setMask:function(Xt){tt!==Xt&&!P&&(i.stencilMask(Xt),tt=Xt)},setFunc:function(Xt,ln,$e){(it!==Xt||dt!==ln||Z!==$e)&&(i.stencilFunc(Xt,ln,$e),it=Xt,dt=ln,Z=$e)},setOp:function(Xt,ln,$e){(j!==Xt||pt!==ln||It!==$e)&&(i.stencilOp(Xt,ln,$e),j=Xt,pt=ln,It=$e)},setLocked:function(Xt){P=Xt},setClear:function(Xt){qt!==Xt&&(i.clearStencil(Xt),qt=Xt)},reset:function(){P=!1,tt=null,it=null,dt=null,Z=null,j=null,pt=null,It=null,qt=null}}}const r=new e,s=new n,a=new A,c=new WeakMap,o=new WeakMap;let d={},f={},h=new WeakMap,u=[],m=null,M=!1,p=null,l=null,S=null,_=null,B=null,y=null,b=null,T=new Vt(0,0,0),I=0,E=!1,x=null,R=null,F=null,k=null,z=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,et=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=et>=1):G.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=et>=2);let rt=null,ct={};const wt=i.getParameter(i.SCISSOR_BOX),Qt=i.getParameter(i.VIEWPORT),Zt=new re().fromArray(wt),te=new re().fromArray(Qt);function Wt(P,tt,it,dt){const Z=new Uint8Array(4),j=i.createTexture();i.bindTexture(P,j),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let pt=0;pt<it;pt++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(tt,0,i.RGBA,1,1,dt,0,i.RGBA,i.UNSIGNED_BYTE,Z):i.texImage2D(tt+pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Z);return j}const X={};X[i.TEXTURE_2D]=Wt(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=Wt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=Wt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=Wt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),K(i.DEPTH_TEST),s.setFunc(Gn),Tt(!1),gt(ss),K(i.CULL_FACE),ee(fn);function K(P){d[P]!==!0&&(i.enable(P),d[P]=!0)}function ft(P){d[P]!==!1&&(i.disable(P),d[P]=!1)}function Pt(P,tt){return f[P]!==tt?(i.bindFramebuffer(P,tt),f[P]=tt,P===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=tt),P===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=tt),!0):!1}function Mt(P,tt){let it=u,dt=!1;if(P){it=h.get(tt),it===void 0&&(it=[],h.set(tt,it));const Z=P.textures;if(it.length!==Z.length||it[0]!==i.COLOR_ATTACHMENT0){for(let j=0,pt=Z.length;j<pt;j++)it[j]=i.COLOR_ATTACHMENT0+j;it.length=Z.length,dt=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,dt=!0);dt&&i.drawBuffers(it)}function Ot(P){return m!==P?(i.useProgram(P),m=P,!0):!1}const xe={[_n]:i.FUNC_ADD,[ro]:i.FUNC_SUBTRACT,[so]:i.FUNC_REVERSE_SUBTRACT};xe[ao]=i.MIN,xe[oo]=i.MAX;const C={[co]:i.ZERO,[lo]:i.ONE,[fo]:i.SRC_COLOR,[vA]:i.SRC_ALPHA,[vo]:i.SRC_ALPHA_SATURATE,[go]:i.DST_COLOR,[uo]:i.DST_ALPHA,[ho]:i.ONE_MINUS_SRC_COLOR,[xA]:i.ONE_MINUS_SRC_ALPHA,[mo]:i.ONE_MINUS_DST_COLOR,[po]:i.ONE_MINUS_DST_ALPHA,[xo]:i.CONSTANT_COLOR,[Eo]:i.ONE_MINUS_CONSTANT_COLOR,[Bo]:i.CONSTANT_ALPHA,[Mo]:i.ONE_MINUS_CONSTANT_ALPHA};function ee(P,tt,it,dt,Z,j,pt,It,qt,Xt){if(P===fn){M===!0&&(ft(i.BLEND),M=!1);return}if(M===!1&&(K(i.BLEND),M=!0),P!==Ao){if(P!==p||Xt!==E){if((l!==_n||B!==_n)&&(i.blendEquation(i.FUNC_ADD),l=_n,B=_n),Xt)switch(P){case kn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case os:i.blendFunc(i.ONE,i.ONE);break;case cs:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ls:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case kn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case cs:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ls:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,_=null,y=null,b=null,T.set(0,0,0),I=0,p=P,E=Xt}return}Z=Z||tt,j=j||it,pt=pt||dt,(tt!==l||Z!==B)&&(i.blendEquationSeparate(xe[tt],xe[Z]),l=tt,B=Z),(it!==S||dt!==_||j!==y||pt!==b)&&(i.blendFuncSeparate(C[it],C[dt],C[j],C[pt]),S=it,_=dt,y=j,b=pt),(It.equals(T)===!1||qt!==I)&&(i.blendColor(It.r,It.g,It.b,qt),T.copy(It),I=qt),p=P,E=!1}function Dt(P,tt){P.side===en?ft(i.CULL_FACE):K(i.CULL_FACE);let it=P.side===Me;tt&&(it=!it),Tt(it),P.blending===kn&&P.transparent===!1?ee(fn):ee(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),s.setFunc(P.depthFunc),s.setTest(P.depthTest),s.setMask(P.depthWrite),r.setMask(P.colorWrite);const dt=P.stencilWrite;a.setTest(dt),dt&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),mt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(P){x!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),x=P)}function gt(P){P!==eo?(K(i.CULL_FACE),P!==R&&(P===ss?i.cullFace(i.BACK):P===no?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ft(i.CULL_FACE),R=P}function ne(P){P!==F&&(V&&i.lineWidth(P),F=P)}function mt(P,tt,it){P?(K(i.POLYGON_OFFSET_FILL),(k!==tt||z!==it)&&(i.polygonOffset(tt,it),k=tt,z=it)):ft(i.POLYGON_OFFSET_FILL)}function Nt(P){P?K(i.SCISSOR_TEST):ft(i.SCISSOR_TEST)}function pe(P){P===void 0&&(P=i.TEXTURE0+W-1),rt!==P&&(i.activeTexture(P),rt=P)}function ce(P,tt,it){it===void 0&&(rt===null?it=i.TEXTURE0+W-1:it=rt);let dt=ct[it];dt===void 0&&(dt={type:void 0,texture:void 0},ct[it]=dt),(dt.type!==P||dt.texture!==tt)&&(rt!==it&&(i.activeTexture(it),rt=it),i.bindTexture(P,tt||X[P]),dt.type=P,dt.texture=tt)}function w(){const P=ct[rt];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Y(){try{i.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{i.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function O(){try{i.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Bt(){try{i.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function nt(){try{i.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function vt(){try{i.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xt(){try{i.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{i.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ot(P){Zt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Zt.copy(P))}function yt(P){te.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),te.copy(P))}function Et(P,tt){let it=o.get(tt);it===void 0&&(it=new WeakMap,o.set(tt,it));let dt=it.get(P);dt===void 0&&(dt=i.getUniformBlockIndex(tt,P.name),it.set(P,dt))}function st(P,tt){const dt=o.get(tt).get(P);c.get(tt)!==dt&&(i.uniformBlockBinding(tt,dt,P.__bindingPointIndex),c.set(tt,dt))}function Lt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},rt=null,ct={},f={},h=new WeakMap,u=[],m=null,M=!1,p=null,l=null,S=null,_=null,B=null,y=null,b=null,T=new Vt(0,0,0),I=0,E=!1,x=null,R=null,F=null,k=null,z=null,Zt.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:K,disable:ft,bindFramebuffer:Pt,drawBuffers:Mt,useProgram:Ot,setBlending:ee,setMaterial:Dt,setFlipSided:Tt,setCullFace:gt,setLineWidth:ne,setPolygonOffset:mt,setScissorTest:Nt,activeTexture:pe,bindTexture:ce,unbindTexture:w,compressedTexImage2D:g,compressedTexImage3D:N,texImage2D:xt,texImage3D:$,updateUBOMapping:Et,uniformBlockBinding:st,texStorage2D:nt,texStorage3D:vt,texSubImage2D:Y,texSubImage3D:J,compressedTexSubImage2D:O,compressedTexSubImage3D:Bt,scissor:ot,viewport:yt,reset:Lt}}function Eh(i,t,e,n,A,r,s){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),o=new Gt,d=new WeakMap;let f;const h=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,g){return u?new OffscreenCanvas(w,g):Oi("canvas")}function M(w,g,N){let Y=1;const J=ce(w);if((J.width>N||J.height>N)&&(Y=N/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const O=Math.floor(Y*J.width),Bt=Math.floor(Y*J.height);f===void 0&&(f=m(O,Bt));const nt=g?m(O,Bt):f;return nt.width=O,nt.height=Bt,nt.getContext("2d").drawImage(w,0,0,O,Bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+O+"x"+Bt+")."),nt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function p(w){return w.generateMipmaps}function l(w){i.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(w,g,N,Y,J=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let O=g;if(g===i.RED&&(N===i.FLOAT&&(O=i.R32F),N===i.HALF_FLOAT&&(O=i.R16F),N===i.UNSIGNED_BYTE&&(O=i.R8)),g===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(O=i.R8UI),N===i.UNSIGNED_SHORT&&(O=i.R16UI),N===i.UNSIGNED_INT&&(O=i.R32UI),N===i.BYTE&&(O=i.R8I),N===i.SHORT&&(O=i.R16I),N===i.INT&&(O=i.R32I)),g===i.RG&&(N===i.FLOAT&&(O=i.RG32F),N===i.HALF_FLOAT&&(O=i.RG16F),N===i.UNSIGNED_BYTE&&(O=i.RG8)),g===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(O=i.RG8UI),N===i.UNSIGNED_SHORT&&(O=i.RG16UI),N===i.UNSIGNED_INT&&(O=i.RG32UI),N===i.BYTE&&(O=i.RG8I),N===i.SHORT&&(O=i.RG16I),N===i.INT&&(O=i.RG32I)),g===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(O=i.RGB8UI),N===i.UNSIGNED_SHORT&&(O=i.RGB16UI),N===i.UNSIGNED_INT&&(O=i.RGB32UI),N===i.BYTE&&(O=i.RGB8I),N===i.SHORT&&(O=i.RGB16I),N===i.INT&&(O=i.RGB32I)),g===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(O=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(O=i.RGBA16UI),N===i.UNSIGNED_INT&&(O=i.RGBA32UI),N===i.BYTE&&(O=i.RGBA8I),N===i.SHORT&&(O=i.RGBA16I),N===i.INT&&(O=i.RGBA32I)),g===i.RGB&&(N===i.UNSIGNED_INT_5_9_9_9_REV&&(O=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(O=i.R11F_G11F_B10F)),g===i.RGBA){const Bt=J?ki:zt.getTransfer(Y);N===i.FLOAT&&(O=i.RGBA32F),N===i.HALF_FLOAT&&(O=i.RGBA16F),N===i.UNSIGNED_BYTE&&(O=Bt===jt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(O=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(O=i.RGB5_A1)}return(O===i.R16F||O===i.R32F||O===i.RG16F||O===i.RG32F||O===i.RGBA16F||O===i.RGBA32F)&&t.get("EXT_color_buffer_float"),O}function B(w,g){let N;return w?g===null||g===Cn||g===ui?N=i.DEPTH24_STENCIL8:g===nn?N=i.DEPTH32F_STENCIL8:g===fi&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Cn||g===ui?N=i.DEPTH_COMPONENT24:g===nn?N=i.DEPTH_COMPONENT32F:g===fi&&(N=i.DEPTH_COMPONENT16),N}function y(w,g){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==Qe&&w.minFilter!==Ye?Math.log2(Math.max(g.width,g.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?g.mipmaps.length:1}function b(w){const g=w.target;g.removeEventListener("dispose",b),I(g),g.isVideoTexture&&d.delete(g)}function T(w){const g=w.target;g.removeEventListener("dispose",T),x(g)}function I(w){const g=n.get(w);if(g.__webglInit===void 0)return;const N=w.source,Y=h.get(N);if(Y){const J=Y[g.__cacheKey];J.usedTimes--,J.usedTimes===0&&E(w),Object.keys(Y).length===0&&h.delete(N)}n.remove(w)}function E(w){const g=n.get(w);i.deleteTexture(g.__webglTexture);const N=w.source,Y=h.get(N);delete Y[g.__cacheKey],s.memory.textures--}function x(w){const g=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(g.__webglFramebuffer[Y]))for(let J=0;J<g.__webglFramebuffer[Y].length;J++)i.deleteFramebuffer(g.__webglFramebuffer[Y][J]);else i.deleteFramebuffer(g.__webglFramebuffer[Y]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[Y])}else{if(Array.isArray(g.__webglFramebuffer))for(let Y=0;Y<g.__webglFramebuffer.length;Y++)i.deleteFramebuffer(g.__webglFramebuffer[Y]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Y=0;Y<g.__webglColorRenderbuffer.length;Y++)g.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[Y]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const N=w.textures;for(let Y=0,J=N.length;Y<J;Y++){const O=n.get(N[Y]);O.__webglTexture&&(i.deleteTexture(O.__webglTexture),s.memory.textures--),n.remove(N[Y])}n.remove(w)}let R=0;function F(){R=0}function k(){const w=R;return w>=A.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+A.maxTextures),R+=1,w}function z(w){const g=[];return g.push(w.wrapS),g.push(w.wrapT),g.push(w.wrapR||0),g.push(w.magFilter),g.push(w.minFilter),g.push(w.anisotropy),g.push(w.internalFormat),g.push(w.format),g.push(w.type),g.push(w.generateMipmaps),g.push(w.premultiplyAlpha),g.push(w.flipY),g.push(w.unpackAlignment),g.push(w.colorSpace),g.join()}function W(w,g){const N=n.get(w);if(w.isVideoTexture&&Nt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&N.__version!==w.version){const Y=w.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(N,w,g);return}}else w.isExternalTexture&&(N.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+g)}function V(w,g){const N=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){X(N,w,g);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+g)}function et(w,g){const N=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){X(N,w,g);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+g)}function G(w,g){const N=n.get(w);if(w.version>0&&N.__version!==w.version){K(N,w,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+g)}const rt={[TA]:i.REPEAT,[Sn]:i.CLAMP_TO_EDGE,[RA]:i.MIRRORED_REPEAT},ct={[Qe]:i.NEAREST,[Io]:i.NEAREST_MIPMAP_NEAREST,[Li]:i.NEAREST_MIPMAP_LINEAR,[Ye]:i.LINEAR,[PA]:i.LINEAR_MIPMAP_NEAREST,[bn]:i.LINEAR_MIPMAP_LINEAR},wt={[Fo]:i.NEVER,[Oo]:i.ALWAYS,[No]:i.LESS,[ws]:i.LEQUAL,[Qo]:i.EQUAL,[Go]:i.GEQUAL,[Ho]:i.GREATER,[ko]:i.NOTEQUAL};function Qt(w,g){if(g.type===nn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Ye||g.magFilter===PA||g.magFilter===Li||g.magFilter===bn||g.minFilter===Ye||g.minFilter===PA||g.minFilter===Li||g.minFilter===bn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,rt[g.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,rt[g.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,rt[g.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ct[g.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ct[g.minFilter]),g.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,wt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Qe||g.minFilter!==Li&&g.minFilter!==bn||g.type===nn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,A.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Zt(w,g){let N=!1;w.__webglInit===void 0&&(w.__webglInit=!0,g.addEventListener("dispose",b));const Y=g.source;let J=h.get(Y);J===void 0&&(J={},h.set(Y,J));const O=z(g);if(O!==w.__cacheKey){J[O]===void 0&&(J[O]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,N=!0),J[O].usedTimes++;const Bt=J[w.__cacheKey];Bt!==void 0&&(J[w.__cacheKey].usedTimes--,Bt.usedTimes===0&&E(g)),w.__cacheKey=O,w.__webglTexture=J[O].texture}return N}function te(w,g,N){return Math.floor(Math.floor(w/N)/g)}function Wt(w,g,N,Y){const O=w.updateRanges;if(O.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,N,Y,g.data);else{O.sort(($,ot)=>$.start-ot.start);let Bt=0;for(let $=1;$<O.length;$++){const ot=O[Bt],yt=O[$],Et=ot.start+ot.count,st=te(yt.start,g.width,4),Lt=te(ot.start,g.width,4);yt.start<=Et+1&&st===Lt&&te(yt.start+yt.count-1,g.width,4)===st?ot.count=Math.max(ot.count,yt.start+yt.count-ot.start):(++Bt,O[Bt]=yt)}O.length=Bt+1;const nt=i.getParameter(i.UNPACK_ROW_LENGTH),vt=i.getParameter(i.UNPACK_SKIP_PIXELS),xt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let $=0,ot=O.length;$<ot;$++){const yt=O[$],Et=Math.floor(yt.start/4),st=Math.ceil(yt.count/4),Lt=Et%g.width,P=Math.floor(Et/g.width),tt=st,it=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Lt),i.pixelStorei(i.UNPACK_SKIP_ROWS,P),e.texSubImage2D(i.TEXTURE_2D,0,Lt,P,tt,it,N,Y,g.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,nt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,vt),i.pixelStorei(i.UNPACK_SKIP_ROWS,xt)}}function X(w,g,N){let Y=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Y=i.TEXTURE_3D);const J=Zt(w,g),O=g.source;e.bindTexture(Y,w.__webglTexture,i.TEXTURE0+N);const Bt=n.get(O);if(O.version!==Bt.__version||J===!0){e.activeTexture(i.TEXTURE0+N);const nt=zt.getPrimaries(zt.workingColorSpace),vt=g.colorSpace===un?null:zt.getPrimaries(g.colorSpace),xt=g.colorSpace===un||nt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let $=M(g.image,!1,A.maxTextureSize);$=pe(g,$);const ot=r.convert(g.format,g.colorSpace),yt=r.convert(g.type);let Et=_(g.internalFormat,ot,yt,g.colorSpace,g.isVideoTexture);Qt(Y,g);let st;const Lt=g.mipmaps,P=g.isVideoTexture!==!0,tt=Bt.__version===void 0||J===!0,it=O.dataReady,dt=y(g,$);if(g.isDepthTexture)Et=B(g.format===gi,g.type),tt&&(P?e.texStorage2D(i.TEXTURE_2D,1,Et,$.width,$.height):e.texImage2D(i.TEXTURE_2D,0,Et,$.width,$.height,0,ot,yt,null));else if(g.isDataTexture)if(Lt.length>0){P&&tt&&e.texStorage2D(i.TEXTURE_2D,dt,Et,Lt[0].width,Lt[0].height);for(let Z=0,j=Lt.length;Z<j;Z++)st=Lt[Z],P?it&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,st.width,st.height,ot,yt,st.data):e.texImage2D(i.TEXTURE_2D,Z,Et,st.width,st.height,0,ot,yt,st.data);g.generateMipmaps=!1}else P?(tt&&e.texStorage2D(i.TEXTURE_2D,dt,Et,$.width,$.height),it&&Wt(g,$,ot,yt)):e.texImage2D(i.TEXTURE_2D,0,Et,$.width,$.height,0,ot,yt,$.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){P&&tt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Et,Lt[0].width,Lt[0].height,$.depth);for(let Z=0,j=Lt.length;Z<j;Z++)if(st=Lt[Z],g.format!==He)if(ot!==null)if(P){if(it)if(g.layerUpdates.size>0){const pt=oa(st.width,st.height,g.format,g.type);for(const It of g.layerUpdates){const qt=st.data.subarray(It*pt/st.data.BYTES_PER_ELEMENT,(It+1)*pt/st.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,It,st.width,st.height,1,ot,qt)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,st.width,st.height,$.depth,ot,st.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Et,st.width,st.height,$.depth,0,st.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?it&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,st.width,st.height,$.depth,ot,yt,st.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,Et,st.width,st.height,$.depth,0,ot,yt,st.data)}else{P&&tt&&e.texStorage2D(i.TEXTURE_2D,dt,Et,Lt[0].width,Lt[0].height);for(let Z=0,j=Lt.length;Z<j;Z++)st=Lt[Z],g.format!==He?ot!==null?P?it&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,st.width,st.height,ot,st.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,Et,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?it&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,st.width,st.height,ot,yt,st.data):e.texImage2D(i.TEXTURE_2D,Z,Et,st.width,st.height,0,ot,yt,st.data)}else if(g.isDataArrayTexture)if(P){if(tt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Et,$.width,$.height,$.depth),it)if(g.layerUpdates.size>0){const Z=oa($.width,$.height,g.format,g.type);for(const j of g.layerUpdates){const pt=$.data.subarray(j*Z/$.data.BYTES_PER_ELEMENT,(j+1)*Z/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,$.width,$.height,1,ot,yt,pt)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ot,yt,$.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Et,$.width,$.height,$.depth,0,ot,yt,$.data);else if(g.isData3DTexture)P?(tt&&e.texStorage3D(i.TEXTURE_3D,dt,Et,$.width,$.height,$.depth),it&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ot,yt,$.data)):e.texImage3D(i.TEXTURE_3D,0,Et,$.width,$.height,$.depth,0,ot,yt,$.data);else if(g.isFramebufferTexture){if(tt)if(P)e.texStorage2D(i.TEXTURE_2D,dt,Et,$.width,$.height);else{let Z=$.width,j=$.height;for(let pt=0;pt<dt;pt++)e.texImage2D(i.TEXTURE_2D,pt,Et,Z,j,0,ot,yt,null),Z>>=1,j>>=1}}else if(Lt.length>0){if(P&&tt){const Z=ce(Lt[0]);e.texStorage2D(i.TEXTURE_2D,dt,Et,Z.width,Z.height)}for(let Z=0,j=Lt.length;Z<j;Z++)st=Lt[Z],P?it&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,ot,yt,st):e.texImage2D(i.TEXTURE_2D,Z,Et,ot,yt,st);g.generateMipmaps=!1}else if(P){if(tt){const Z=ce($);e.texStorage2D(i.TEXTURE_2D,dt,Et,Z.width,Z.height)}it&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot,yt,$)}else e.texImage2D(i.TEXTURE_2D,0,Et,ot,yt,$);p(g)&&l(Y),Bt.__version=O.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function K(w,g,N){if(g.image.length!==6)return;const Y=Zt(w,g),J=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+N);const O=n.get(J);if(J.version!==O.__version||Y===!0){e.activeTexture(i.TEXTURE0+N);const Bt=zt.getPrimaries(zt.workingColorSpace),nt=g.colorSpace===un?null:zt.getPrimaries(g.colorSpace),vt=g.colorSpace===un||Bt===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const xt=g.isCompressedTexture||g.image[0].isCompressedTexture,$=g.image[0]&&g.image[0].isDataTexture,ot=[];for(let j=0;j<6;j++)!xt&&!$?ot[j]=M(g.image[j],!0,A.maxCubemapSize):ot[j]=$?g.image[j].image:g.image[j],ot[j]=pe(g,ot[j]);const yt=ot[0],Et=r.convert(g.format,g.colorSpace),st=r.convert(g.type),Lt=_(g.internalFormat,Et,st,g.colorSpace),P=g.isVideoTexture!==!0,tt=O.__version===void 0||Y===!0,it=J.dataReady;let dt=y(g,yt);Qt(i.TEXTURE_CUBE_MAP,g);let Z;if(xt){P&&tt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Lt,yt.width,yt.height);for(let j=0;j<6;j++){Z=ot[j].mipmaps;for(let pt=0;pt<Z.length;pt++){const It=Z[pt];g.format!==He?Et!==null?P?it&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt,0,0,It.width,It.height,Et,It.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt,Lt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt,0,0,It.width,It.height,Et,st,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt,Lt,It.width,It.height,0,Et,st,It.data)}}}else{if(Z=g.mipmaps,P&&tt){Z.length>0&&dt++;const j=ce(ot[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Lt,j.width,j.height)}for(let j=0;j<6;j++)if($){P?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ot[j].width,ot[j].height,Et,st,ot[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Lt,ot[j].width,ot[j].height,0,Et,st,ot[j].data);for(let pt=0;pt<Z.length;pt++){const qt=Z[pt].image[j].image;P?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt+1,0,0,qt.width,qt.height,Et,st,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt+1,Lt,qt.width,qt.height,0,Et,st,qt.data)}}else{P?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Et,st,ot[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Lt,Et,st,ot[j]);for(let pt=0;pt<Z.length;pt++){const It=Z[pt];P?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt+1,0,0,Et,st,It.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt+1,Lt,Et,st,It.image[j])}}}p(g)&&l(i.TEXTURE_CUBE_MAP),O.__version=J.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function ft(w,g,N,Y,J,O){const Bt=r.convert(N.format,N.colorSpace),nt=r.convert(N.type),vt=_(N.internalFormat,Bt,nt,N.colorSpace),xt=n.get(g),$=n.get(N);if($.__renderTarget=g,!xt.__hasExternalTextures){const ot=Math.max(1,g.width>>O),yt=Math.max(1,g.height>>O);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,O,vt,ot,yt,g.depth,0,Bt,nt,null):e.texImage2D(J,O,vt,ot,yt,0,Bt,nt,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),mt(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,J,$.__webglTexture,0,ne(g)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,J,$.__webglTexture,O),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(w,g,N){if(i.bindRenderbuffer(i.RENDERBUFFER,w),g.depthBuffer){const Y=g.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,O=B(g.stencilBuffer,J),Bt=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=ne(g);mt(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,O,g.width,g.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,O,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,O,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Bt,i.RENDERBUFFER,w)}else{const Y=g.textures;for(let J=0;J<Y.length;J++){const O=Y[J],Bt=r.convert(O.format,O.colorSpace),nt=r.convert(O.type),vt=_(O.internalFormat,Bt,nt,O.colorSpace),xt=ne(g);N&&mt(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,vt,g.width,g.height):mt(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt,vt,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,vt,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Mt(w,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(g.depthTexture);Y.__renderTarget=g,(!Y.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),W(g.depthTexture,0);const J=Y.__webglTexture,O=ne(g);if(g.depthTexture.format===pi)mt(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,O):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(g.depthTexture.format===gi)mt(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,O):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ot(w){const g=n.get(w),N=w.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==w.depthTexture){const Y=w.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),Y){const J=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),g.__depthDisposeCallback=J}g.__boundDepthTexture=Y}if(w.depthTexture&&!g.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");const Y=w.texture.mipmaps;Y&&Y.length>0?Mt(g.__webglFramebuffer[0],w):Mt(g.__webglFramebuffer,w)}else if(N){g.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[Y]),g.__webglDepthbuffer[Y]===void 0)g.__webglDepthbuffer[Y]=i.createRenderbuffer(),Pt(g.__webglDepthbuffer[Y],w,!1);else{const J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,O=g.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,O),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,O)}}else{const Y=w.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Pt(g.__webglDepthbuffer,w,!1);else{const J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,O=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,O),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,O)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(w,g,N){const Y=n.get(w);g!==void 0&&ft(Y.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Ot(w)}function C(w){const g=w.texture,N=n.get(w),Y=n.get(g);w.addEventListener("dispose",T);const J=w.textures,O=w.isWebGLCubeRenderTarget===!0,Bt=J.length>1;if(Bt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=g.version,s.memory.textures++),O){N.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer[nt]=[];for(let vt=0;vt<g.mipmaps.length;vt++)N.__webglFramebuffer[nt][vt]=i.createFramebuffer()}else N.__webglFramebuffer[nt]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer=[];for(let nt=0;nt<g.mipmaps.length;nt++)N.__webglFramebuffer[nt]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(Bt)for(let nt=0,vt=J.length;nt<vt;nt++){const xt=n.get(J[nt]);xt.__webglTexture===void 0&&(xt.__webglTexture=i.createTexture(),s.memory.textures++)}if(w.samples>0&&mt(w)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let nt=0;nt<J.length;nt++){const vt=J[nt];N.__webglColorRenderbuffer[nt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[nt]);const xt=r.convert(vt.format,vt.colorSpace),$=r.convert(vt.type),ot=_(vt.internalFormat,xt,$,vt.colorSpace,w.isXRRenderTarget===!0),yt=ne(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,ot,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,N.__webglColorRenderbuffer[nt])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),Pt(N.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(O){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Qt(i.TEXTURE_CUBE_MAP,g);for(let nt=0;nt<6;nt++)if(g.mipmaps&&g.mipmaps.length>0)for(let vt=0;vt<g.mipmaps.length;vt++)ft(N.__webglFramebuffer[nt][vt],w,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt);else ft(N.__webglFramebuffer[nt],w,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);p(g)&&l(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Bt){for(let nt=0,vt=J.length;nt<vt;nt++){const xt=J[nt],$=n.get(xt);let ot=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ot=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,$.__webglTexture),Qt(ot,xt),ft(N.__webglFramebuffer,w,xt,i.COLOR_ATTACHMENT0+nt,ot,0),p(xt)&&l(ot)}e.unbindTexture()}else{let nt=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(nt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(nt,Y.__webglTexture),Qt(nt,g),g.mipmaps&&g.mipmaps.length>0)for(let vt=0;vt<g.mipmaps.length;vt++)ft(N.__webglFramebuffer[vt],w,g,i.COLOR_ATTACHMENT0,nt,vt);else ft(N.__webglFramebuffer,w,g,i.COLOR_ATTACHMENT0,nt,0);p(g)&&l(nt),e.unbindTexture()}w.depthBuffer&&Ot(w)}function ee(w){const g=w.textures;for(let N=0,Y=g.length;N<Y;N++){const J=g[N];if(p(J)){const O=S(w),Bt=n.get(J).__webglTexture;e.bindTexture(O,Bt),l(O),e.unbindTexture()}}}const Dt=[],Tt=[];function gt(w){if(w.samples>0){if(mt(w)===!1){const g=w.textures,N=w.width,Y=w.height;let J=i.COLOR_BUFFER_BIT;const O=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Bt=n.get(w),nt=g.length>1;if(nt)for(let xt=0;xt<g.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer);const vt=w.texture.mipmaps;vt&&vt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let xt=0;xt<g.length;xt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),nt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Bt.__webglColorRenderbuffer[xt]);const $=n.get(g[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$,0)}i.blitFramebuffer(0,0,N,Y,0,0,N,Y,J,i.NEAREST),c===!0&&(Dt.length=0,Tt.length=0,Dt.push(i.COLOR_ATTACHMENT0+xt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Dt.push(O),Tt.push(O),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Tt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Dt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),nt)for(let xt=0;xt<g.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,Bt.__webglColorRenderbuffer[xt]);const $=n.get(g[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,$,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const g=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function ne(w){return Math.min(A.maxSamples,w.samples)}function mt(w){const g=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Nt(w){const g=s.render.frame;d.get(w)!==g&&(d.set(w,g),w.update())}function pe(w,g){const N=w.colorSpace,Y=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||N!==Vn&&N!==un&&(zt.getTransfer(N)===jt?(Y!==He||J!==We)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),g}function ce(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(o.width=w.naturalWidth||w.width,o.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(o.width=w.displayWidth,o.height=w.displayHeight):(o.width=w.width,o.height=w.height),o}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=W,this.setTexture2DArray=V,this.setTexture3D=et,this.setTextureCube=G,this.rebindTextures=xe,this.setupRenderTarget=C,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=mt}function Bh(i,t){function e(n,A=un){let r;const s=zt.getTransfer(A);if(n===We)return i.UNSIGNED_BYTE;if(n===DA)return i.UNSIGNED_SHORT_4_4_4_4;if(n===UA)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ps)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gs)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===hs)return i.BYTE;if(n===us)return i.SHORT;if(n===fi)return i.UNSIGNED_SHORT;if(n===IA)return i.INT;if(n===Cn)return i.UNSIGNED_INT;if(n===nn)return i.FLOAT;if(n===hi)return i.HALF_FLOAT;if(n===ms)return i.ALPHA;if(n===vs)return i.RGB;if(n===He)return i.RGBA;if(n===pi)return i.DEPTH_COMPONENT;if(n===gi)return i.DEPTH_STENCIL;if(n===xs)return i.RED;if(n===LA)return i.RED_INTEGER;if(n===Es)return i.RG;if(n===FA)return i.RG_INTEGER;if(n===NA)return i.RGBA_INTEGER;if(n===Fi||n===Ni||n===Qi||n===Hi)if(s===jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fi)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ni)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qi)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Hi)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fi)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ni)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qi)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Hi)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===QA||n===HA||n===kA||n===GA)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===QA)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===HA)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===kA)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===GA)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===OA||n===zA||n===VA)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===OA||n===zA)return s===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===VA)return s===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===YA||n===WA||n===XA||n===jA||n===JA||n===KA||n===ZA||n===qA||n===$A||n===tr||n===er||n===nr||n===ir||n===Ar)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===YA)return s===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===WA)return s===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===XA)return s===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jA)return s===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===JA)return s===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===KA)return s===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ZA)return s===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qA)return s===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$A)return s===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tr)return s===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===er)return s===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nr)return s===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ir)return s===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ar)return s===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rr||n===sr||n===ar)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===rr)return s===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ar)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===or||n===cr||n===lr||n===dr)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===or)return r.COMPRESSED_RED_RGTC1_EXT;if(n===cr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===lr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ui?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Mh=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wh=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _h{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new ea(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Bn({vertexShader:Mh,fragmentShader:wh,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ke(new sA(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Sh extends Wn{constructor(t,e){super();const n=this;let A=null,r=1,s=null,a="local-floor",c=1,o=null,d=null,f=null,h=null,u=null,m=null;const M=typeof XRWebGLBinding<"u",p=new _h,l={},S=e.getContextAttributes();let _=null,B=null;const y=[],b=[],T=new Gt;let I=null;const E=new De;E.viewport=new re;const x=new De;x.viewport=new re;const R=[E,x],F=new Sc;let k=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let K=y[X];return K===void 0&&(K=new Nr,y[X]=K),K.getTargetRaySpace()},this.getControllerGrip=function(X){let K=y[X];return K===void 0&&(K=new Nr,y[X]=K),K.getGripSpace()},this.getHand=function(X){let K=y[X];return K===void 0&&(K=new Nr,y[X]=K),K.getHandSpace()};function W(X){const K=b.indexOf(X.inputSource);if(K===-1)return;const ft=y[K];ft!==void 0&&(ft.update(X.inputSource,X.frame,o||s),ft.dispatchEvent({type:X.type,data:X.inputSource}))}function V(){A.removeEventListener("select",W),A.removeEventListener("selectstart",W),A.removeEventListener("selectend",W),A.removeEventListener("squeeze",W),A.removeEventListener("squeezestart",W),A.removeEventListener("squeezeend",W),A.removeEventListener("end",V),A.removeEventListener("inputsourceschange",et);for(let X=0;X<y.length;X++){const K=b[X];K!==null&&(b[X]=null,y[X].disconnect(K))}k=null,z=null,p.reset();for(const X in l)delete l[X];t.setRenderTarget(_),u=null,h=null,f=null,A=null,B=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||s},this.setReferenceSpace=function(X){o=X},this.getBaseLayer=function(){return h!==null?h:u},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(A,e)),f},this.getFrame=function(){return m},this.getSession=function(){return A},this.setSession=async function(X){if(A=X,A!==null){if(_=t.getRenderTarget(),A.addEventListener("select",W),A.addEventListener("selectstart",W),A.addEventListener("selectend",W),A.addEventListener("squeeze",W),A.addEventListener("squeezestart",W),A.addEventListener("squeezeend",W),A.addEventListener("end",V),A.addEventListener("inputsourceschange",et),S.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(T),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ft=null,Pt=null,Mt=null;S.depth&&(Mt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=S.stencil?gi:pi,Pt=S.stencil?ui:Cn);const Ot={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Ot),A.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),B=new pn(h.textureWidth,h.textureHeight,{format:He,type:We,depthTexture:new ta(h.textureWidth,h.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ft={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(A,e,ft),A.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),B=new pn(u.framebufferWidth,u.framebufferHeight,{format:He,type:We,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(c),o=null,s=await A.requestReferenceSpace(a),Wt.setContext(A),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(A!==null)return A.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function et(X){for(let K=0;K<X.removed.length;K++){const ft=X.removed[K],Pt=b.indexOf(ft);Pt>=0&&(b[Pt]=null,y[Pt].disconnect(ft))}for(let K=0;K<X.added.length;K++){const ft=X.added[K];let Pt=b.indexOf(ft);if(Pt===-1){for(let Ot=0;Ot<y.length;Ot++)if(Ot>=b.length){b.push(ft),Pt=Ot;break}else if(b[Ot]===null){b[Ot]=ft,Pt=Ot;break}if(Pt===-1)break}const Mt=y[Pt];Mt&&Mt.connect(ft)}}const G=new L,rt=new L;function ct(X,K,ft){G.setFromMatrixPosition(K.matrixWorld),rt.setFromMatrixPosition(ft.matrixWorld);const Pt=G.distanceTo(rt),Mt=K.projectionMatrix.elements,Ot=ft.projectionMatrix.elements,xe=Mt[14]/(Mt[10]-1),C=Mt[14]/(Mt[10]+1),ee=(Mt[9]+1)/Mt[5],Dt=(Mt[9]-1)/Mt[5],Tt=(Mt[8]-1)/Mt[0],gt=(Ot[8]+1)/Ot[0],ne=xe*Tt,mt=xe*gt,Nt=Pt/(-Tt+gt),pe=Nt*-Tt;if(K.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(pe),X.translateZ(Nt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Mt[10]===-1)X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const ce=xe+Nt,w=C+Nt,g=ne-pe,N=mt+(Pt-pe),Y=ee*C/w*ce,J=Dt*C/w*ce;X.projectionMatrix.makePerspective(g,N,Y,J,ce,w),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function wt(X,K){K===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(K.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(A===null)return;let K=X.near,ft=X.far;p.texture!==null&&(p.depthNear>0&&(K=p.depthNear),p.depthFar>0&&(ft=p.depthFar)),F.near=x.near=E.near=K,F.far=x.far=E.far=ft,(k!==F.near||z!==F.far)&&(A.updateRenderState({depthNear:F.near,depthFar:F.far}),k=F.near,z=F.far),F.layers.mask=X.layers.mask|6,E.layers.mask=F.layers.mask&3,x.layers.mask=F.layers.mask&5;const Pt=X.parent,Mt=F.cameras;wt(F,Pt);for(let Ot=0;Ot<Mt.length;Ot++)wt(Mt[Ot],Pt);Mt.length===2?ct(F,E,x):F.projectionMatrix.copy(E.projectionMatrix),Qt(X,F,Pt)};function Qt(X,K,ft){ft===null?X.matrix.copy(K.matrixWorld):(X.matrix.copy(ft.matrixWorld),X.matrix.invert(),X.matrix.multiply(K.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=hr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(h===null&&u===null))return c},this.setFoveation=function(X){c=X,h!==null&&(h.fixedFoveation=X),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=X)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(X){return l[X]};let Zt=null;function te(X,K){if(d=K.getViewerPose(o||s),m=K,d!==null){const ft=d.views;u!==null&&(t.setRenderTargetFramebuffer(B,u.framebuffer),t.setRenderTarget(B));let Pt=!1;ft.length!==F.cameras.length&&(F.cameras.length=0,Pt=!0);for(let C=0;C<ft.length;C++){const ee=ft[C];let Dt=null;if(u!==null)Dt=u.getViewport(ee);else{const gt=f.getViewSubImage(h,ee);Dt=gt.viewport,C===0&&(t.setRenderTargetTextures(B,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(B))}let Tt=R[C];Tt===void 0&&(Tt=new De,Tt.layers.enable(C),Tt.viewport=new re,R[C]=Tt),Tt.matrix.fromArray(ee.transform.matrix),Tt.matrix.decompose(Tt.position,Tt.quaternion,Tt.scale),Tt.projectionMatrix.fromArray(ee.projectionMatrix),Tt.projectionMatrixInverse.copy(Tt.projectionMatrix).invert(),Tt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),C===0&&(F.matrix.copy(Tt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Pt===!0&&F.cameras.push(Tt)}const Mt=A.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&A.depthUsage=="gpu-optimized"&&M){f=n.getBinding();const C=f.getDepthInformation(ft[0]);C&&C.isValid&&C.texture&&p.init(C,A.renderState)}if(Mt&&Mt.includes("camera-access")&&M){t.state.unbindTexture(),f=n.getBinding();for(let C=0;C<ft.length;C++){const ee=ft[C].camera;if(ee){let Dt=l[ee];Dt||(Dt=new ea,l[ee]=Dt);const Tt=f.getCameraImage(ee);Dt.sourceTexture=Tt}}}}for(let ft=0;ft<y.length;ft++){const Pt=b[ft],Mt=y[ft];Pt!==null&&Mt!==void 0&&Mt.update(Pt,K,o||s)}Zt&&Zt(X,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),m=null}const Wt=new ca;Wt.setAnimationLoop(te),this.setAnimationLoop=function(X){Zt=X},this.dispose=function(){}}}const Fn=new je,bh=new ae;function Ch(i,t){function e(p,l){p.matrixAutoUpdate===!0&&p.updateMatrix(),l.value.copy(p.matrix)}function n(p,l){l.color.getRGB(p.fogColor.value,js(i)),l.isFog?(p.fogNear.value=l.near,p.fogFar.value=l.far):l.isFogExp2&&(p.fogDensity.value=l.density)}function A(p,l,S,_,B){l.isMeshBasicMaterial||l.isMeshLambertMaterial?r(p,l):l.isMeshToonMaterial?(r(p,l),f(p,l)):l.isMeshPhongMaterial?(r(p,l),d(p,l)):l.isMeshStandardMaterial?(r(p,l),h(p,l),l.isMeshPhysicalMaterial&&u(p,l,B)):l.isMeshMatcapMaterial?(r(p,l),m(p,l)):l.isMeshDepthMaterial?r(p,l):l.isMeshDistanceMaterial?(r(p,l),M(p,l)):l.isMeshNormalMaterial?r(p,l):l.isLineBasicMaterial?(s(p,l),l.isLineDashedMaterial&&a(p,l)):l.isPointsMaterial?c(p,l,S,_):l.isSpriteMaterial?o(p,l):l.isShadowMaterial?(p.color.value.copy(l.color),p.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}function r(p,l){p.opacity.value=l.opacity,l.color&&p.diffuse.value.copy(l.color),l.emissive&&p.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(p.map.value=l.map,e(l.map,p.mapTransform)),l.alphaMap&&(p.alphaMap.value=l.alphaMap,e(l.alphaMap,p.alphaMapTransform)),l.bumpMap&&(p.bumpMap.value=l.bumpMap,e(l.bumpMap,p.bumpMapTransform),p.bumpScale.value=l.bumpScale,l.side===Me&&(p.bumpScale.value*=-1)),l.normalMap&&(p.normalMap.value=l.normalMap,e(l.normalMap,p.normalMapTransform),p.normalScale.value.copy(l.normalScale),l.side===Me&&p.normalScale.value.negate()),l.displacementMap&&(p.displacementMap.value=l.displacementMap,e(l.displacementMap,p.displacementMapTransform),p.displacementScale.value=l.displacementScale,p.displacementBias.value=l.displacementBias),l.emissiveMap&&(p.emissiveMap.value=l.emissiveMap,e(l.emissiveMap,p.emissiveMapTransform)),l.specularMap&&(p.specularMap.value=l.specularMap,e(l.specularMap,p.specularMapTransform)),l.alphaTest>0&&(p.alphaTest.value=l.alphaTest);const S=t.get(l),_=S.envMap,B=S.envMapRotation;_&&(p.envMap.value=_,Fn.copy(B),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),p.envMapRotation.value.setFromMatrix4(bh.makeRotationFromEuler(Fn)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=l.reflectivity,p.ior.value=l.ior,p.refractionRatio.value=l.refractionRatio),l.lightMap&&(p.lightMap.value=l.lightMap,p.lightMapIntensity.value=l.lightMapIntensity,e(l.lightMap,p.lightMapTransform)),l.aoMap&&(p.aoMap.value=l.aoMap,p.aoMapIntensity.value=l.aoMapIntensity,e(l.aoMap,p.aoMapTransform))}function s(p,l){p.diffuse.value.copy(l.color),p.opacity.value=l.opacity,l.map&&(p.map.value=l.map,e(l.map,p.mapTransform))}function a(p,l){p.dashSize.value=l.dashSize,p.totalSize.value=l.dashSize+l.gapSize,p.scale.value=l.scale}function c(p,l,S,_){p.diffuse.value.copy(l.color),p.opacity.value=l.opacity,p.size.value=l.size*S,p.scale.value=_*.5,l.map&&(p.map.value=l.map,e(l.map,p.uvTransform)),l.alphaMap&&(p.alphaMap.value=l.alphaMap,e(l.alphaMap,p.alphaMapTransform)),l.alphaTest>0&&(p.alphaTest.value=l.alphaTest)}function o(p,l){p.diffuse.value.copy(l.color),p.opacity.value=l.opacity,p.rotation.value=l.rotation,l.map&&(p.map.value=l.map,e(l.map,p.mapTransform)),l.alphaMap&&(p.alphaMap.value=l.alphaMap,e(l.alphaMap,p.alphaMapTransform)),l.alphaTest>0&&(p.alphaTest.value=l.alphaTest)}function d(p,l){p.specular.value.copy(l.specular),p.shininess.value=Math.max(l.shininess,1e-4)}function f(p,l){l.gradientMap&&(p.gradientMap.value=l.gradientMap)}function h(p,l){p.metalness.value=l.metalness,l.metalnessMap&&(p.metalnessMap.value=l.metalnessMap,e(l.metalnessMap,p.metalnessMapTransform)),p.roughness.value=l.roughness,l.roughnessMap&&(p.roughnessMap.value=l.roughnessMap,e(l.roughnessMap,p.roughnessMapTransform)),l.envMap&&(p.envMapIntensity.value=l.envMapIntensity)}function u(p,l,S){p.ior.value=l.ior,l.sheen>0&&(p.sheenColor.value.copy(l.sheenColor).multiplyScalar(l.sheen),p.sheenRoughness.value=l.sheenRoughness,l.sheenColorMap&&(p.sheenColorMap.value=l.sheenColorMap,e(l.sheenColorMap,p.sheenColorMapTransform)),l.sheenRoughnessMap&&(p.sheenRoughnessMap.value=l.sheenRoughnessMap,e(l.sheenRoughnessMap,p.sheenRoughnessMapTransform))),l.clearcoat>0&&(p.clearcoat.value=l.clearcoat,p.clearcoatRoughness.value=l.clearcoatRoughness,l.clearcoatMap&&(p.clearcoatMap.value=l.clearcoatMap,e(l.clearcoatMap,p.clearcoatMapTransform)),l.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=l.clearcoatRoughnessMap,e(l.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),l.clearcoatNormalMap&&(p.clearcoatNormalMap.value=l.clearcoatNormalMap,e(l.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),l.side===Me&&p.clearcoatNormalScale.value.negate())),l.dispersion>0&&(p.dispersion.value=l.dispersion),l.iridescence>0&&(p.iridescence.value=l.iridescence,p.iridescenceIOR.value=l.iridescenceIOR,p.iridescenceThicknessMinimum.value=l.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=l.iridescenceThicknessRange[1],l.iridescenceMap&&(p.iridescenceMap.value=l.iridescenceMap,e(l.iridescenceMap,p.iridescenceMapTransform)),l.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=l.iridescenceThicknessMap,e(l.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),l.transmission>0&&(p.transmission.value=l.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),l.transmissionMap&&(p.transmissionMap.value=l.transmissionMap,e(l.transmissionMap,p.transmissionMapTransform)),p.thickness.value=l.thickness,l.thicknessMap&&(p.thicknessMap.value=l.thicknessMap,e(l.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=l.attenuationDistance,p.attenuationColor.value.copy(l.attenuationColor)),l.anisotropy>0&&(p.anisotropyVector.value.set(l.anisotropy*Math.cos(l.anisotropyRotation),l.anisotropy*Math.sin(l.anisotropyRotation)),l.anisotropyMap&&(p.anisotropyMap.value=l.anisotropyMap,e(l.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=l.specularIntensity,p.specularColor.value.copy(l.specularColor),l.specularColorMap&&(p.specularColorMap.value=l.specularColorMap,e(l.specularColorMap,p.specularColorMapTransform)),l.specularIntensityMap&&(p.specularIntensityMap.value=l.specularIntensityMap,e(l.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,l){l.matcap&&(p.matcap.value=l.matcap)}function M(p,l){const S=t.get(l).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:A}}function yh(i,t,e,n){let A={},r={},s=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,_){const B=_.program;n.uniformBlockBinding(S,B)}function o(S,_){let B=A[S.id];B===void 0&&(m(S),B=d(S),A[S.id]=B,S.addEventListener("dispose",p));const y=_.program;n.updateUBOMapping(S,y);const b=t.render.frame;r[S.id]!==b&&(h(S),r[S.id]=b)}function d(S){const _=f();S.__bindingPointIndex=_;const B=i.createBuffer(),y=S.__size,b=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,B),i.bufferData(i.UNIFORM_BUFFER,y,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,B),B}function f(){for(let S=0;S<a;S++)if(s.indexOf(S)===-1)return s.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const _=A[S.id],B=S.uniforms,y=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let b=0,T=B.length;b<T;b++){const I=Array.isArray(B[b])?B[b]:[B[b]];for(let E=0,x=I.length;E<x;E++){const R=I[E];if(u(R,b,E,y)===!0){const F=R.__offset,k=Array.isArray(R.value)?R.value:[R.value];let z=0;for(let W=0;W<k.length;W++){const V=k[W],et=M(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,F+z,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,z),z+=et.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(S,_,B,y){const b=S.value,T=_+"_"+B;if(y[T]===void 0)return typeof b=="number"||typeof b=="boolean"?y[T]=b:y[T]=b.clone(),!0;{const I=y[T];if(typeof b=="number"||typeof b=="boolean"){if(I!==b)return y[T]=b,!0}else if(I.equals(b)===!1)return I.copy(b),!0}return!1}function m(S){const _=S.uniforms;let B=0;const y=16;for(let T=0,I=_.length;T<I;T++){const E=Array.isArray(_[T])?_[T]:[_[T]];for(let x=0,R=E.length;x<R;x++){const F=E[x],k=Array.isArray(F.value)?F.value:[F.value];for(let z=0,W=k.length;z<W;z++){const V=k[z],et=M(V),G=B%y,rt=G%et.boundary,ct=G+rt;B+=rt,ct!==0&&y-ct<et.storage&&(B+=y-ct),F.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=B,B+=et.storage}}}const b=B%y;return b>0&&(B+=y-b),S.__size=B,S.__cache={},this}function M(S){const _={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(_.boundary=4,_.storage=4):S.isVector2?(_.boundary=8,_.storage=8):S.isVector3||S.isColor?(_.boundary=16,_.storage=12):S.isVector4?(_.boundary=16,_.storage=16):S.isMatrix3?(_.boundary=48,_.storage=48):S.isMatrix4?(_.boundary=64,_.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),_}function p(S){const _=S.target;_.removeEventListener("dispose",p);const B=s.indexOf(_.__bindingPointIndex);s.splice(B,1),i.deleteBuffer(A[_.id]),delete A[_.id],delete r[_.id]}function l(){for(const S in A)i.deleteBuffer(A[S]);s=[],A={},r={}}return{bind:c,update:o,dispose:l}}class Th{constructor(t={}){const{canvas:e=Vo(),context:n=null,depth:A=!0,stencil:r=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:o=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=s;const m=new Uint32Array(4),M=new Int32Array(4);let p=null,l=null;const S=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let y=!1;this._outputColorSpace=Ce;let b=0,T=0,I=null,E=-1,x=null;const R=new re,F=new re;let k=null;const z=new Vt(0);let W=0,V=e.width,et=e.height,G=1,rt=null,ct=null;const wt=new re(0,0,V,et),Qt=new re(0,0,V,et);let Zt=!1;const te=new Hr;let Wt=!1,X=!1;const K=new ae,ft=new L,Pt=new re,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ot=!1;function xe(){return I===null?G:1}let C=n;function ee(v,D){return e.getContext(v,D)}try{const v={alpha:!0,depth:A,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:o,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${mA}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",Z,!1),C===null){const D="webgl2";if(C=ee(D,v),C===null)throw ee(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Dt,Tt,gt,ne,mt,Nt,pe,ce,w,g,N,Y,J,O,Bt,nt,vt,xt,$,ot,yt,Et,st,Lt;function P(){Dt=new Qd(C),Dt.init(),Et=new Bh(C,Dt),Tt=new Pd(C,Dt,t,Et),gt=new xh(C,Dt),Tt.reversedDepthBuffer&&h&&gt.buffers.depth.setReversed(!0),ne=new Gd(C),mt=new sh,Nt=new Eh(C,Dt,gt,mt,Tt,Et,ne),pe=new Dd(B),ce=new Nd(B),w=new Cc(C),st=new Td(C,w),g=new Hd(C,w,ne,st),N=new zd(C,g,w,ne),$=new Od(C,Tt,Nt),nt=new Id(mt),Y=new rh(B,pe,ce,Dt,Tt,st,nt),J=new Ch(B,mt),O=new oh,Bt=new uh(Dt),xt=new yd(B,pe,ce,gt,N,u,c),vt=new mh(B,N,Tt),Lt=new yh(C,ne,Tt,gt),ot=new Rd(C,Dt,ne),yt=new kd(C,Dt,ne),ne.programs=Y.programs,B.capabilities=Tt,B.extensions=Dt,B.properties=mt,B.renderLists=O,B.shadowMap=vt,B.state=gt,B.info=ne}P();const tt=new Sh(B,C);this.xr=tt,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const v=Dt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Dt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(v){v!==void 0&&(G=v,this.setSize(V,et,!1))},this.getSize=function(v){return v.set(V,et)},this.setSize=function(v,D,Q=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=v,et=D,e.width=Math.floor(v*G),e.height=Math.floor(D*G),Q===!0&&(e.style.width=v+"px",e.style.height=D+"px"),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(V*G,et*G).floor()},this.setDrawingBufferSize=function(v,D,Q){V=v,et=D,G=Q,e.width=Math.floor(v*Q),e.height=Math.floor(D*Q),this.setViewport(0,0,v,D)},this.getCurrentViewport=function(v){return v.copy(R)},this.getViewport=function(v){return v.copy(wt)},this.setViewport=function(v,D,Q,H){v.isVector4?wt.set(v.x,v.y,v.z,v.w):wt.set(v,D,Q,H),gt.viewport(R.copy(wt).multiplyScalar(G).round())},this.getScissor=function(v){return v.copy(Qt)},this.setScissor=function(v,D,Q,H){v.isVector4?Qt.set(v.x,v.y,v.z,v.w):Qt.set(v,D,Q,H),gt.scissor(F.copy(Qt).multiplyScalar(G).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(v){gt.setScissorTest(Zt=v)},this.setOpaqueSort=function(v){rt=v},this.setTransparentSort=function(v){ct=v},this.getClearColor=function(v){return v.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(v=!0,D=!0,Q=!0){let H=0;if(v){let U=!1;if(I!==null){const q=I.texture.format;U=q===NA||q===FA||q===LA}if(U){const q=I.texture.type,at=q===We||q===Cn||q===fi||q===ui||q===DA||q===UA,ht=xt.getClearColor(),lt=xt.getClearAlpha(),Ct=ht.r,Rt=ht.g,_t=ht.b;at?(m[0]=Ct,m[1]=Rt,m[2]=_t,m[3]=lt,C.clearBufferuiv(C.COLOR,0,m)):(M[0]=Ct,M[1]=Rt,M[2]=_t,M[3]=lt,C.clearBufferiv(C.COLOR,0,M))}else H|=C.COLOR_BUFFER_BIT}D&&(H|=C.DEPTH_BUFFER_BIT),Q&&(H|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",Z,!1),xt.dispose(),O.dispose(),Bt.dispose(),mt.dispose(),pe.dispose(),ce.dispose(),N.dispose(),st.dispose(),Lt.dispose(),Y.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",$e),tt.removeEventListener("sessionend",Ja),Qn.stop()};function it(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const v=ne.autoReset,D=vt.enabled,Q=vt.autoUpdate,H=vt.needsUpdate,U=vt.type;P(),ne.autoReset=v,vt.enabled=D,vt.autoUpdate=Q,vt.needsUpdate=H,vt.type=U}function Z(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function j(v){const D=v.target;D.removeEventListener("dispose",j),pt(D)}function pt(v){It(v),mt.remove(v)}function It(v){const D=mt.get(v).programs;D!==void 0&&(D.forEach(function(Q){Y.releaseProgram(Q)}),v.isShaderMaterial&&Y.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,Q,H,U,q){D===null&&(D=Mt);const at=U.isMesh&&U.matrixWorld.determinant()<0,ht=Qh(v,D,Q,H,U);gt.setMaterial(H,at);let lt=Q.index,Ct=1;if(H.wireframe===!0){if(lt=g.getWireframeAttribute(Q),lt===void 0)return;Ct=2}const Rt=Q.drawRange,_t=Q.attributes.position;let Ht=Rt.start*Ct,Jt=(Rt.start+Rt.count)*Ct;q!==null&&(Ht=Math.max(Ht,q.start*Ct),Jt=Math.min(Jt,(q.start+q.count)*Ct)),lt!==null?(Ht=Math.max(Ht,0),Jt=Math.min(Jt,lt.count)):_t!=null&&(Ht=Math.max(Ht,0),Jt=Math.min(Jt,_t.count));const se=Jt-Ht;if(se<0||se===1/0)return;st.setup(U,H,ht,Q,lt);let $t,Kt=ot;if(lt!==null&&($t=w.get(lt),Kt=yt,Kt.setIndex($t)),U.isMesh)H.wireframe===!0?(gt.setLineWidth(H.wireframeLinewidth*xe()),Kt.setMode(C.LINES)):Kt.setMode(C.TRIANGLES);else if(U.isLine){let St=H.linewidth;St===void 0&&(St=1),gt.setLineWidth(St*xe()),U.isLineSegments?Kt.setMode(C.LINES):U.isLineLoop?Kt.setMode(C.LINE_LOOP):Kt.setMode(C.LINE_STRIP)}else U.isPoints?Kt.setMode(C.POINTS):U.isSprite&&Kt.setMode(C.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ei("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Kt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Dt.get("WEBGL_multi_draw"))Kt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const St=U._multiDrawStarts,ie=U._multiDrawCounts,Yt=U._multiDrawCount,Re=lt?w.get(lt).bytesPerElement:1,di=mt.get(H).currentProgram.getUniforms();for(let Pe=0;Pe<Yt;Pe++)di.setValue(C,"_gl_DrawID",Pe),Kt.render(St[Pe]/Re,ie[Pe])}else if(U.isInstancedMesh)Kt.renderInstances(Ht,se,U.count);else if(Q.isInstancedBufferGeometry){const St=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,ie=Math.min(Q.instanceCount,St);Kt.renderInstances(Ht,se,ie)}else Kt.render(Ht,se)};function qt(v,D,Q){v.transparent===!0&&v.side===en&&v.forceSinglePass===!1?(v.side=Me,v.needsUpdate=!0,gA(v,D,Q),v.side=dn,v.needsUpdate=!0,gA(v,D,Q),v.side=en):gA(v,D,Q)}this.compile=function(v,D,Q=null){Q===null&&(Q=v),l=Bt.get(Q),l.init(D),_.push(l),Q.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(l.pushLight(U),U.castShadow&&l.pushShadow(U))}),v!==Q&&v.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(l.pushLight(U),U.castShadow&&l.pushShadow(U))}),l.setupLights();const H=new Set;return v.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const q=U.material;if(q)if(Array.isArray(q))for(let at=0;at<q.length;at++){const ht=q[at];qt(ht,Q,U),H.add(ht)}else qt(q,Q,U),H.add(q)}),l=_.pop(),H},this.compileAsync=function(v,D,Q=null){const H=this.compile(v,D,Q);return new Promise(U=>{function q(){if(H.forEach(function(at){mt.get(at).currentProgram.isReady()&&H.delete(at)}),H.size===0){U(v);return}setTimeout(q,10)}Dt.get("KHR_parallel_shader_compile")!==null?q():setTimeout(q,10)})};let Xt=null;function ln(v){Xt&&Xt(v)}function $e(){Qn.stop()}function Ja(){Qn.start()}const Qn=new ca;Qn.setAnimationLoop(ln),typeof self<"u"&&Qn.setContext(self),this.setAnimationLoop=function(v){Xt=v,tt.setAnimationLoop(v),v===null?Qn.stop():Qn.start()},tt.addEventListener("sessionstart",$e),tt.addEventListener("sessionend",Ja),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(D),D=tt.getCamera()),v.isScene===!0&&v.onBeforeRender(B,v,D,I),l=Bt.get(v,_.length),l.init(D),_.push(l),K.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),te.setFromProjectionMatrix(K,Xe,D.reversedDepth),X=this.localClippingEnabled,Wt=nt.init(this.clippingPlanes,X),p=O.get(v,S.length),p.init(),S.push(p),tt.enabled===!0&&tt.isPresenting===!0){const q=B.xr.getDepthSensingMesh();q!==null&&ns(q,D,-1/0,B.sortObjects)}ns(v,D,0,B.sortObjects),p.finish(),B.sortObjects===!0&&p.sort(rt,ct),Ot=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,Ot&&xt.addToRenderList(p,v),this.info.render.frame++,Wt===!0&&nt.beginShadows();const Q=l.state.shadowsArray;vt.render(Q,v,D),Wt===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=p.opaque,U=p.transmissive;if(l.setupLights(),D.isArrayCamera){const q=D.cameras;if(U.length>0)for(let at=0,ht=q.length;at<ht;at++){const lt=q[at];Za(H,U,v,lt)}Ot&&xt.render(v);for(let at=0,ht=q.length;at<ht;at++){const lt=q[at];Ka(p,v,lt,lt.viewport)}}else U.length>0&&Za(H,U,v,D),Ot&&xt.render(v),Ka(p,v,D);I!==null&&T===0&&(Nt.updateMultisampleRenderTarget(I),Nt.updateRenderTargetMipmap(I)),v.isScene===!0&&v.onAfterRender(B,v,D),st.resetDefaultState(),E=-1,x=null,_.pop(),_.length>0?(l=_[_.length-1],Wt===!0&&nt.setGlobalState(B.clippingPlanes,l.state.camera)):l=null,S.pop(),S.length>0?p=S[S.length-1]:p=null};function ns(v,D,Q,H){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)Q=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLight)l.pushLight(v),v.castShadow&&l.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||te.intersectsSprite(v)){H&&Pt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(K);const at=N.update(v),ht=v.material;ht.visible&&p.push(v,at,ht,Q,Pt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||te.intersectsObject(v))){const at=N.update(v),ht=v.material;if(H&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Pt.copy(v.boundingSphere.center)):(at.boundingSphere===null&&at.computeBoundingSphere(),Pt.copy(at.boundingSphere.center)),Pt.applyMatrix4(v.matrixWorld).applyMatrix4(K)),Array.isArray(ht)){const lt=at.groups;for(let Ct=0,Rt=lt.length;Ct<Rt;Ct++){const _t=lt[Ct],Ht=ht[_t.materialIndex];Ht&&Ht.visible&&p.push(v,at,Ht,Q,Pt.z,_t)}}else ht.visible&&p.push(v,at,ht,Q,Pt.z,null)}}const q=v.children;for(let at=0,ht=q.length;at<ht;at++)ns(q[at],D,Q,H)}function Ka(v,D,Q,H){const U=v.opaque,q=v.transmissive,at=v.transparent;l.setupLightsView(Q),Wt===!0&&nt.setGlobalState(B.clippingPlanes,Q),H&&gt.viewport(R.copy(H)),U.length>0&&pA(U,D,Q),q.length>0&&pA(q,D,Q),at.length>0&&pA(at,D,Q),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function Za(v,D,Q,H){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;l.state.transmissionRenderTarget[H.id]===void 0&&(l.state.transmissionRenderTarget[H.id]=new pn(1,1,{generateMipmaps:!0,type:Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float")?hi:We,minFilter:bn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:zt.workingColorSpace}));const q=l.state.transmissionRenderTarget[H.id],at=H.viewport||R;q.setSize(at.z*B.transmissionResolutionScale,at.w*B.transmissionResolutionScale);const ht=B.getRenderTarget(),lt=B.getActiveCubeFace(),Ct=B.getActiveMipmapLevel();B.setRenderTarget(q),B.getClearColor(z),W=B.getClearAlpha(),W<1&&B.setClearColor(16777215,.5),B.clear(),Ot&&xt.render(Q);const Rt=B.toneMapping;B.toneMapping=hn;const _t=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),l.setupLightsView(H),Wt===!0&&nt.setGlobalState(B.clippingPlanes,H),pA(v,Q,H),Nt.updateMultisampleRenderTarget(q),Nt.updateRenderTargetMipmap(q),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let Jt=0,se=D.length;Jt<se;Jt++){const $t=D[Jt],Kt=$t.object,St=$t.geometry,ie=$t.material,Yt=$t.group;if(ie.side===en&&Kt.layers.test(H.layers)){const Re=ie.side;ie.side=Me,ie.needsUpdate=!0,qa(Kt,Q,H,St,ie,Yt),ie.side=Re,ie.needsUpdate=!0,Ht=!0}}Ht===!0&&(Nt.updateMultisampleRenderTarget(q),Nt.updateRenderTargetMipmap(q))}B.setRenderTarget(ht,lt,Ct),B.setClearColor(z,W),_t!==void 0&&(H.viewport=_t),B.toneMapping=Rt}function pA(v,D,Q){const H=D.isScene===!0?D.overrideMaterial:null;for(let U=0,q=v.length;U<q;U++){const at=v[U],ht=at.object,lt=at.geometry,Ct=at.group;let Rt=at.material;Rt.allowOverride===!0&&H!==null&&(Rt=H),ht.layers.test(Q.layers)&&qa(ht,D,Q,lt,Rt,Ct)}}function qa(v,D,Q,H,U,q){v.onBeforeRender(B,D,Q,H,U,q),v.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),U.onBeforeRender(B,D,Q,H,v,q),U.transparent===!0&&U.side===en&&U.forceSinglePass===!1?(U.side=Me,U.needsUpdate=!0,B.renderBufferDirect(Q,D,H,U,v,q),U.side=dn,U.needsUpdate=!0,B.renderBufferDirect(Q,D,H,U,v,q),U.side=en):B.renderBufferDirect(Q,D,H,U,v,q),v.onAfterRender(B,D,Q,H,U,q)}function gA(v,D,Q){D.isScene!==!0&&(D=Mt);const H=mt.get(v),U=l.state.lights,q=l.state.shadowsArray,at=U.state.version,ht=Y.getParameters(v,U.state,q,D,Q),lt=Y.getProgramCacheKey(ht);let Ct=H.programs;H.environment=v.isMeshStandardMaterial?D.environment:null,H.fog=D.fog,H.envMap=(v.isMeshStandardMaterial?ce:pe).get(v.envMap||H.environment),H.envMapRotation=H.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,Ct===void 0&&(v.addEventListener("dispose",j),Ct=new Map,H.programs=Ct);let Rt=Ct.get(lt);if(Rt!==void 0){if(H.currentProgram===Rt&&H.lightsStateVersion===at)return to(v,ht),Rt}else ht.uniforms=Y.getUniforms(v),v.onBeforeCompile(ht,B),Rt=Y.acquireProgram(ht,lt),Ct.set(lt,Rt),H.uniforms=ht.uniforms;const _t=H.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(_t.clippingPlanes=nt.uniform),to(v,ht),H.needsLights=kh(v),H.lightsStateVersion=at,H.needsLights&&(_t.ambientLightColor.value=U.state.ambient,_t.lightProbe.value=U.state.probe,_t.directionalLights.value=U.state.directional,_t.directionalLightShadows.value=U.state.directionalShadow,_t.spotLights.value=U.state.spot,_t.spotLightShadows.value=U.state.spotShadow,_t.rectAreaLights.value=U.state.rectArea,_t.ltc_1.value=U.state.rectAreaLTC1,_t.ltc_2.value=U.state.rectAreaLTC2,_t.pointLights.value=U.state.point,_t.pointLightShadows.value=U.state.pointShadow,_t.hemisphereLights.value=U.state.hemi,_t.directionalShadowMap.value=U.state.directionalShadowMap,_t.directionalShadowMatrix.value=U.state.directionalShadowMatrix,_t.spotShadowMap.value=U.state.spotShadowMap,_t.spotLightMatrix.value=U.state.spotLightMatrix,_t.spotLightMap.value=U.state.spotLightMap,_t.pointShadowMap.value=U.state.pointShadowMap,_t.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=Rt,H.uniformsList=null,Rt}function $a(v){if(v.uniformsList===null){const D=v.currentProgram.getUniforms();v.uniformsList=lA.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function to(v,D){const Q=mt.get(v);Q.outputColorSpace=D.outputColorSpace,Q.batching=D.batching,Q.batchingColor=D.batchingColor,Q.instancing=D.instancing,Q.instancingColor=D.instancingColor,Q.instancingMorph=D.instancingMorph,Q.skinning=D.skinning,Q.morphTargets=D.morphTargets,Q.morphNormals=D.morphNormals,Q.morphColors=D.morphColors,Q.morphTargetsCount=D.morphTargetsCount,Q.numClippingPlanes=D.numClippingPlanes,Q.numIntersection=D.numClipIntersection,Q.vertexAlphas=D.vertexAlphas,Q.vertexTangents=D.vertexTangents,Q.toneMapping=D.toneMapping}function Qh(v,D,Q,H,U){D.isScene!==!0&&(D=Mt),Nt.resetTextureUnits();const q=D.fog,at=H.isMeshStandardMaterial?D.environment:null,ht=I===null?B.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Vn,lt=(H.isMeshStandardMaterial?ce:pe).get(H.envMap||at),Ct=H.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Rt=!!Q.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),_t=!!Q.morphAttributes.position,Ht=!!Q.morphAttributes.normal,Jt=!!Q.morphAttributes.color;let se=hn;H.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(se=B.toneMapping);const $t=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Kt=$t!==void 0?$t.length:0,St=mt.get(H),ie=l.state.lights;if(Wt===!0&&(X===!0||v!==x)){const Be=v===x&&H.id===E;nt.setState(H,v,Be)}let Yt=!1;H.version===St.__version?(St.needsLights&&St.lightsStateVersion!==ie.state.version||St.outputColorSpace!==ht||U.isBatchedMesh&&St.batching===!1||!U.isBatchedMesh&&St.batching===!0||U.isBatchedMesh&&St.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&St.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&St.instancing===!1||!U.isInstancedMesh&&St.instancing===!0||U.isSkinnedMesh&&St.skinning===!1||!U.isSkinnedMesh&&St.skinning===!0||U.isInstancedMesh&&St.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&St.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&St.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&St.instancingMorph===!1&&U.morphTexture!==null||St.envMap!==lt||H.fog===!0&&St.fog!==q||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==nt.numPlanes||St.numIntersection!==nt.numIntersection)||St.vertexAlphas!==Ct||St.vertexTangents!==Rt||St.morphTargets!==_t||St.morphNormals!==Ht||St.morphColors!==Jt||St.toneMapping!==se||St.morphTargetsCount!==Kt)&&(Yt=!0):(Yt=!0,St.__version=H.version);let Re=St.currentProgram;Yt===!0&&(Re=gA(H,D,U));let di=!1,Pe=!1,Ii=!1;const Ae=Re.getUniforms(),Fe=St.uniforms;if(gt.useProgram(Re.program)&&(di=!0,Pe=!0,Ii=!0),H.id!==E&&(E=H.id,Pe=!0),di||x!==v){gt.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),Ae.setValue(C,"projectionMatrix",v.projectionMatrix),Ae.setValue(C,"viewMatrix",v.matrixWorldInverse);const be=Ae.map.cameraPosition;be!==void 0&&be.setValue(C,ft.setFromMatrixPosition(v.matrixWorld)),Tt.logarithmicDepthBuffer&&Ae.setValue(C,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ae.setValue(C,"isOrthographic",v.isOrthographicCamera===!0),x!==v&&(x=v,Pe=!0,Ii=!0)}if(U.isSkinnedMesh){Ae.setOptional(C,U,"bindMatrix"),Ae.setOptional(C,U,"bindMatrixInverse");const Be=U.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),Ae.setValue(C,"boneTexture",Be.boneTexture,Nt))}U.isBatchedMesh&&(Ae.setOptional(C,U,"batchingTexture"),Ae.setValue(C,"batchingTexture",U._matricesTexture,Nt),Ae.setOptional(C,U,"batchingIdTexture"),Ae.setValue(C,"batchingIdTexture",U._indirectTexture,Nt),Ae.setOptional(C,U,"batchingColorTexture"),U._colorsTexture!==null&&Ae.setValue(C,"batchingColorTexture",U._colorsTexture,Nt));const Ne=Q.morphAttributes;if((Ne.position!==void 0||Ne.normal!==void 0||Ne.color!==void 0)&&$.update(U,Q,Re),(Pe||St.receiveShadow!==U.receiveShadow)&&(St.receiveShadow=U.receiveShadow,Ae.setValue(C,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Fe.envMap.value=lt,Fe.flipEnvMap.value=lt.isCubeTexture&&lt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&D.environment!==null&&(Fe.envMapIntensity.value=D.environmentIntensity),Pe&&(Ae.setValue(C,"toneMappingExposure",B.toneMappingExposure),St.needsLights&&Hh(Fe,Ii),q&&H.fog===!0&&J.refreshFogUniforms(Fe,q),J.refreshMaterialUniforms(Fe,H,G,et,l.state.transmissionRenderTarget[v.id]),lA.upload(C,$a(St),Fe,Nt)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(lA.upload(C,$a(St),Fe,Nt),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ae.setValue(C,"center",U.center),Ae.setValue(C,"modelViewMatrix",U.modelViewMatrix),Ae.setValue(C,"normalMatrix",U.normalMatrix),Ae.setValue(C,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Be=H.uniformsGroups;for(let be=0,is=Be.length;be<is;be++){const Hn=Be[be];Lt.update(Hn,Re),Lt.bind(Hn,Re)}}return Re}function Hh(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function kh(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(v,D,Q){const H=mt.get(v);H.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),mt.get(v.texture).__webglTexture=D,mt.get(v.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:Q,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,D){const Q=mt.get(v);Q.__webglFramebuffer=D,Q.__useDefaultFramebuffer=D===void 0};const Gh=C.createFramebuffer();this.setRenderTarget=function(v,D=0,Q=0){I=v,b=D,T=Q;let H=!0,U=null,q=!1,at=!1;if(v){const lt=mt.get(v);if(lt.__useDefaultFramebuffer!==void 0)gt.bindFramebuffer(C.FRAMEBUFFER,null),H=!1;else if(lt.__webglFramebuffer===void 0)Nt.setupRenderTarget(v);else if(lt.__hasExternalTextures)Nt.rebindTextures(v,mt.get(v.texture).__webglTexture,mt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const _t=v.depthTexture;if(lt.__boundDepthTexture!==_t){if(_t!==null&&mt.has(_t)&&(v.width!==_t.image.width||v.height!==_t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Nt.setupDepthRenderbuffer(v)}}const Ct=v.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(at=!0);const Rt=mt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Rt[D])?U=Rt[D][Q]:U=Rt[D],q=!0):v.samples>0&&Nt.useMultisampledRTT(v)===!1?U=mt.get(v).__webglMultisampledFramebuffer:Array.isArray(Rt)?U=Rt[Q]:U=Rt,R.copy(v.viewport),F.copy(v.scissor),k=v.scissorTest}else R.copy(wt).multiplyScalar(G).floor(),F.copy(Qt).multiplyScalar(G).floor(),k=Zt;if(Q!==0&&(U=Gh),gt.bindFramebuffer(C.FRAMEBUFFER,U)&&H&&gt.drawBuffers(v,U),gt.viewport(R),gt.scissor(F),gt.setScissorTest(k),q){const lt=mt.get(v.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+D,lt.__webglTexture,Q)}else if(at){const lt=D;for(let Ct=0;Ct<v.textures.length;Ct++){const Rt=mt.get(v.textures[Ct]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Ct,Rt.__webglTexture,Q,lt)}}else if(v!==null&&Q!==0){const lt=mt.get(v.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,lt.__webglTexture,Q)}E=-1},this.readRenderTargetPixels=function(v,D,Q,H,U,q,at,ht=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let lt=mt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&at!==void 0&&(lt=lt[at]),lt){gt.bindFramebuffer(C.FRAMEBUFFER,lt);try{const Ct=v.textures[ht],Rt=Ct.format,_t=Ct.type;if(!Tt.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(_t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-H&&Q>=0&&Q<=v.height-U&&(v.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+ht),C.readPixels(D,Q,H,U,Et.convert(Rt),Et.convert(_t),q))}finally{const Ct=I!==null?mt.get(I).__webglFramebuffer:null;gt.bindFramebuffer(C.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(v,D,Q,H,U,q,at,ht=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let lt=mt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&at!==void 0&&(lt=lt[at]),lt)if(D>=0&&D<=v.width-H&&Q>=0&&Q<=v.height-U){gt.bindFramebuffer(C.FRAMEBUFFER,lt);const Ct=v.textures[ht],Rt=Ct.format,_t=Ct.type;if(!Tt.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Tt.textureTypeReadable(_t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ht=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ht),C.bufferData(C.PIXEL_PACK_BUFFER,q.byteLength,C.STREAM_READ),v.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+ht),C.readPixels(D,Q,H,U,Et.convert(Rt),Et.convert(_t),0);const Jt=I!==null?mt.get(I).__webglFramebuffer:null;gt.bindFramebuffer(C.FRAMEBUFFER,Jt);const se=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Yo(C,se,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ht),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,q),C.deleteBuffer(Ht),C.deleteSync(se),q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,D=null,Q=0){const H=Math.pow(2,-Q),U=Math.floor(v.image.width*H),q=Math.floor(v.image.height*H),at=D!==null?D.x:0,ht=D!==null?D.y:0;Nt.setTexture2D(v,0),C.copyTexSubImage2D(C.TEXTURE_2D,Q,0,0,at,ht,U,q),gt.unbindTexture()};const Oh=C.createFramebuffer(),zh=C.createFramebuffer();this.copyTextureToTexture=function(v,D,Q=null,H=null,U=0,q=null){q===null&&(U!==0?(Ei("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),q=U,U=0):q=0);let at,ht,lt,Ct,Rt,_t,Ht,Jt,se;const $t=v.isCompressedTexture?v.mipmaps[q]:v.image;if(Q!==null)at=Q.max.x-Q.min.x,ht=Q.max.y-Q.min.y,lt=Q.isBox3?Q.max.z-Q.min.z:1,Ct=Q.min.x,Rt=Q.min.y,_t=Q.isBox3?Q.min.z:0;else{const Ne=Math.pow(2,-U);at=Math.floor($t.width*Ne),ht=Math.floor($t.height*Ne),v.isDataArrayTexture?lt=$t.depth:v.isData3DTexture?lt=Math.floor($t.depth*Ne):lt=1,Ct=0,Rt=0,_t=0}H!==null?(Ht=H.x,Jt=H.y,se=H.z):(Ht=0,Jt=0,se=0);const Kt=Et.convert(D.format),St=Et.convert(D.type);let ie;D.isData3DTexture?(Nt.setTexture3D(D,0),ie=C.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Nt.setTexture2DArray(D,0),ie=C.TEXTURE_2D_ARRAY):(Nt.setTexture2D(D,0),ie=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,D.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,D.unpackAlignment);const Yt=C.getParameter(C.UNPACK_ROW_LENGTH),Re=C.getParameter(C.UNPACK_IMAGE_HEIGHT),di=C.getParameter(C.UNPACK_SKIP_PIXELS),Pe=C.getParameter(C.UNPACK_SKIP_ROWS),Ii=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,$t.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,$t.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ct),C.pixelStorei(C.UNPACK_SKIP_ROWS,Rt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,_t);const Ae=v.isDataArrayTexture||v.isData3DTexture,Fe=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){const Ne=mt.get(v),Be=mt.get(D),be=mt.get(Ne.__renderTarget),is=mt.get(Be.__renderTarget);gt.bindFramebuffer(C.READ_FRAMEBUFFER,be.__webglFramebuffer),gt.bindFramebuffer(C.DRAW_FRAMEBUFFER,is.__webglFramebuffer);for(let Hn=0;Hn<lt;Hn++)Ae&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,mt.get(v).__webglTexture,U,_t+Hn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,mt.get(D).__webglTexture,q,se+Hn)),C.blitFramebuffer(Ct,Rt,at,ht,Ht,Jt,at,ht,C.DEPTH_BUFFER_BIT,C.NEAREST);gt.bindFramebuffer(C.READ_FRAMEBUFFER,null),gt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(U!==0||v.isRenderTargetTexture||mt.has(v)){const Ne=mt.get(v),Be=mt.get(D);gt.bindFramebuffer(C.READ_FRAMEBUFFER,Oh),gt.bindFramebuffer(C.DRAW_FRAMEBUFFER,zh);for(let be=0;be<lt;be++)Ae?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ne.__webglTexture,U,_t+be):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ne.__webglTexture,U),Fe?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Be.__webglTexture,q,se+be):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Be.__webglTexture,q),U!==0?C.blitFramebuffer(Ct,Rt,at,ht,Ht,Jt,at,ht,C.COLOR_BUFFER_BIT,C.NEAREST):Fe?C.copyTexSubImage3D(ie,q,Ht,Jt,se+be,Ct,Rt,at,ht):C.copyTexSubImage2D(ie,q,Ht,Jt,Ct,Rt,at,ht);gt.bindFramebuffer(C.READ_FRAMEBUFFER,null),gt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Fe?v.isDataTexture||v.isData3DTexture?C.texSubImage3D(ie,q,Ht,Jt,se,at,ht,lt,Kt,St,$t.data):D.isCompressedArrayTexture?C.compressedTexSubImage3D(ie,q,Ht,Jt,se,at,ht,lt,Kt,$t.data):C.texSubImage3D(ie,q,Ht,Jt,se,at,ht,lt,Kt,St,$t):v.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,q,Ht,Jt,at,ht,Kt,St,$t.data):v.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,q,Ht,Jt,$t.width,$t.height,Kt,$t.data):C.texSubImage2D(C.TEXTURE_2D,q,Ht,Jt,at,ht,Kt,St,$t);C.pixelStorei(C.UNPACK_ROW_LENGTH,Yt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Re),C.pixelStorei(C.UNPACK_SKIP_PIXELS,di),C.pixelStorei(C.UNPACK_SKIP_ROWS,Pe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ii),q===0&&D.generateMipmaps&&C.generateMipmap(ie),gt.unbindTexture()},this.initRenderTarget=function(v){mt.get(v).__webglFramebuffer===void 0&&Nt.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Nt.setTextureCube(v,0):v.isData3DTexture?Nt.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Nt.setTexture2DArray(v,0):Nt.setTexture2D(v,0),gt.unbindTexture()},this.resetState=function(){b=0,T=0,I=null,gt.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xe}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=zt._getUnpackColorSpace()}}class Qa{constructor(t,e,n={}){this.initial=t,this.state=e,this.props=n;const A=e?.stats||t.stats;this.loaded=!!e?.flags.includes("parcel"),this.glasses=t.accessory===1||A[1]>=5,this.leaf=t.accessory===2||A[0]>=5,this.fatigue=e?1-e.energy/Di[t.context].energy:0;const r=.65+t.body*.11+A[2]*.035,s=1+t.height*.18+A[1]*.05;this.group.add(this.torso),this.torso.position.y=this.loaded?.64:.83,this.sphere(this.torso,0,.18,0,.67,t.color,1).scale.set(r,this.loaded?.75:1.02,r*.8),this.head.position.set(0,this.loaded?s*.68:s*.82,.02),this.torso.add(this.head),this.sphere(this.head,0,0,0,.47,15781551,1).scale.set(1,1.04,.94);const o=this.mesh(new zr(.48,8,4,0,Math.PI*2,0,Math.PI/2),6446200);o.position.set(0,.16,-.025),this.head.add(o),this.box(this.head,0,.17,.17,.69,.11,.58,6446200);for(const d of[-1,1])this.sphere(this.head,d*.16,.02,.413,.065,4341074,1),this.sphere(this.head,d*.27,-.09,.38,.055,14395804,1);if(t.face===1){const d=this.mesh(new Ci(.1,.018,4,10,Math.PI),7951721);d.rotation.z=Math.PI,d.position.set(0,-.12,.45),this.head.add(d)}else this.box(this.head,0,-.14,.45,.15,.025,.025,7951721);for(let d=0;d<2;d++){const f=d===0?-1:1,h=this.legs[d],u=this.arms[d];h.position.set(f*(this.loaded?.31:.25),.48,0),this.group.add(h),this.box(h,0,-.18,0,.27,.4,.3,7628670),this.box(h,0,-.37,.08,.3,.16,.43,5590115),u.position.set(f*(r*.66+.11),.43,0),this.torso.add(u),this.box(u,0,-.22,0,.24,.48,.27,t.color),this.sphere(u,0,-.48,.015,.145,15714725,1)}if(this.glasses){for(const d of[-1,1]){const f=this.mesh(new Ci(.135,.028,5,12),5260631);f.position.set(d*.165,.025,.46),this.head.add(f)}this.box(this.head,0,.035,.46,.1,.035,.04,5260631)}if(this.leaf&&this.addLeaf(this.head,.35,.5,.05,.45),this.torso.add(this.cargo),Rh(this.cargo,this),this.cargo.position.set(0,.2,-.64),this.cargo.visible=this.loaded,this.loaded)for(const d of[-1,1])this.box(this.torso,d*.32,.27,.48,.09,.92,.065,15258803);n.book&&(this.box(this.arms[0],0,-.41,.15,.43,.55,.13,9271710),this.box(this.arms[0],0,-.41,.23,.33,.42,.03,15325621)),n.photo&&(this.box(this.arms[0],0,-.4,.2,.47,.42,.04,16115664),this.box(this.arms[0],0,-.4,.23,.34,.28,.03,10402219));for(const d of new Set(e?.traces||[]))this.trace(d);if(e?.flags.includes("invited")){const d=this.mesh(new kr(.18,.18,.065,12),14858335);d.rotation.x=Math.PI/2,d.position.set(.25,.38,.52),this.torso.add(d)}this.group.scale.setScalar(1.12)}initial;state;props;group=new Ue;torso=new Ue;head=new Ue;arms=[new Ue,new Ue];legs=[new Ue,new Ue];cargo=new Ue;phase=0;reaction=0;loaded;glasses;leaf;fatigue;materials=[];geometries=[];mesh(t,e){const n=new Ec({color:e,roughness:.92,flatShading:!0}),A=new Ke(t,n);return A.castShadow=!0,this.materials.push(n),this.geometries.push(t),A}box(t,e,n,A,r,s,a,c){const o=this.mesh(new Ai(r,s,a),c);return o.position.set(e,n,A),t.add(o),o}sphere(t,e,n,A,r,s,a=0){const c=this.mesh(new Or(r,a),s);return c.position.set(e,n,A),t.add(c),c}addLeaf(t,e,n,A,r){const s=this.sphere(t,e,n,A,1,6921084,1);s.scale.set(r*.3,r,r*.15),s.rotation.z=-.65;const a=this.sphere(t,e+.12,n-.1,A,1,9876618);a.scale.set(r*.27,r*.65,r*.13),a.rotation.z=.8}trace(t){if(t==="邮票贴片"&&(this.box(this.torso,-.22,.15,.51,.38,.32,.055,15917502),this.box(this.torso,-.22,.15,.55,.24,.21,.025,12684680)),t==="肩头压痕")for(const e of[-1,1]){const n=this.box(this.torso,e*.33,.49,.38,.11,.48,.055,7828106);n.rotation.z=e*.2}if(t==="袖口线迹"||t==="手心补丁")for(const e of this.arms)for(let n=0;n<3;n++){const A=this.box(e,-.075+n*.075,-.22,.15,.035,.18,.035,15913356);A.rotation.z=.45}if(t==="珊瑚色结绳"){const e=this.arms[1];for(const n of[-1,1]){const A=this.mesh(new Ci(.115,.04,4,10),14322831);A.position.set(n*.09,-.4,.16),e.add(A)}this.box(e,0,-.55,.15,.09,.3,.06,14322831)}if(t==="叶片发饰"&&this.addLeaf(this.head,-.34,.38,.18,.27),t==="河岸风纹")for(const e of this.legs)this.box(e,0,-.24,.18,.3,.13,.06,14009248);t==="一枚空白贴纸"&&this.box(this.torso,.24,-.12,.5,.27,.23,.045,15128516)}animate(t,e,n,A=null,r=!1){this.phase+=e*(this.loaded?7.8:6.4),this.reaction=Math.max(0,this.reaction-t);const s=e>1e-4,a=s?Math.sin(this.phase):0;for(let c=0;c<2;c++){const o=c===0?1:-1;this.legs[c].rotation.x=a*o*(this.loaded?.28:.62),this.arms[c].rotation.x=-a*o*(this.loaded?.12:.52)-(this.loaded?.6:0),this.arms[c].rotation.z=(c===0?1:-1)*(this.loaded?.23:.05)}if(this.torso.rotation.x=(this.loaded?.25:0)+this.fatigue*.09,this.torso.rotation.z=s?Math.cos(this.phase)*.035:Math.sin(n*1.6)*(.012+this.fatigue*.015),this.head.rotation.x=this.loaded?.12:Math.sin(n*.8)*.025+this.fatigue*.08,this.group.position.y=(s?Math.abs(Math.cos(this.phase))*(this.loaded?.025:.065):Math.sin(n*2)*.016)+Math.sin(this.reaction*14)*this.reaction*.1,r&&!s?(this.arms[1].rotation.z=-2.1+Math.sin(n*7)*.3,this.arms[1].rotation.x=-.1,this.head.rotation.z=Math.sin(n*2)*.04):this.head.rotation.z=0,A){const c=Math.sin(n*12);A==="plant"?(this.group.position.y-=.22,this.torso.rotation.x+=.65,this.legs[0].rotation.x=-.6,this.legs[1].rotation.x=.55,this.arms.forEach(o=>o.rotation.x=-.35+c*.14)):A==="try"?(this.torso.rotation.x+=.22,this.arms[0].rotation.x=-.65,this.arms[1].rotation.x=-1.55+c*.5):A==="help"?(this.torso.rotation.x+=.12,this.arms[0].rotation.x=-1.25,this.arms[1].rotation.x=-.65+c*.14):A==="pass"||A==="around"?(this.arms[1].rotation.x=-.4,this.arms[1].rotation.z=-1.7+c*.15):(this.torso.rotation.x+=.25,this.arms[0].rotation.x=-1.1+c*.1,this.arms[1].rotation.x=-1.1-c*.1)}}dispose(){this.materials.forEach(t=>t.dispose()),this.geometries.forEach(t=>t.dispose())}}function Rh(i,t){t.box(i,0,0,0,1.03,1.03,.68,12424812),t.box(i,0,0,.355,1.06,.12,.04,15784374),t.box(i,0,0,-.355,1.06,.12,.04,15784374),t.box(i,0,.53,0,.13,.04,.72,15784374),t.box(i,0,0,.38,.13,1.06,.035,15784374),t.box(i,.23,.25,.4,.28,.24,.04,16247246)}class Ph{scene=new $s;camera=new De(30,240/280,.1,20);renderer;rig;elapsed=0;last=0;reduceMotion=!1;pixel=2;constructor(t){this.renderer=new Th({canvas:t,antialias:!0,alpha:!0}),this.renderer.setSize(240,280,!1),this.camera.position.set(0,2,7.2),this.camera.lookAt(0,1.45,0),this.scene.add(new ia(16774895,10259119,2.3));const e=new aa(16772053,2);e.position.set(-3,5,4),this.scene.add(e)}update(t){this.rig?.dispose(),this.rig&&this.scene.remove(this.rig.group),this.rig=new Qa(t),this.scene.add(this.rig.group),this.render()}resize(){const t=this.pixel===1?2:this.pixel===3?.6:1;this.renderer.setSize(Math.round(240*t),Math.round(280*t),!1),this.render()}render(){this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera)}thumbnail(t,e){const n=this.renderer,A=180,r=210,s=new pn(A,r),a=new $s,c=new Qa(e),o=this.camera.clone();o.aspect=A/r,o.updateProjectionMatrix(),a.add(c.group,new ia(16774895,10259119,2.3));const d=new aa(16772053,2);d.position.set(-3,5,4),a.add(d),c.group.rotation.y=.12,s.texture.colorSpace=Ce;const f=new Uint8Array(A*r*4);n.setRenderTarget(s),n.clear(),n.render(a,o),n.readRenderTargetPixels(s,0,0,A,r,f),n.setRenderTarget(null),t.width=A,t.height=r;const h=t.getContext("2d");if(h){const u=h.createImageData(A,r);for(let m=0;m<r;m++)u.data.set(f.subarray((r-m-1)*A*4,(r-m)*A*4),m*A*4);h.putImageData(u,0,0)}c.dispose(),s.dispose(),this.render()}frame=t=>{const e=Math.min(Math.max(0,(t-this.last)/1e3),.05);this.last=t,this.elapsed+=e,this.rig&&(this.rig.group.rotation.y=this.reduceMotion?0:Math.sin(this.elapsed*.6)*.3,this.rig.animate(this.reduceMotion?0:e,0,this.reduceMotion?0:this.elapsed)),document.body.dataset.mode==="setup"&&this.render(),requestAnimationFrame(this.frame)}}const ut=i=>document.querySelector(i),Ha=i=>{try{return JSON.parse(localStorage.getItem(i)||"null")}catch{return null}};function ka(i,t){try{localStorage.setItem(i,JSON.stringify(t))}catch{}}const Ih=["自由","能力","归属"],Ga={context:"rent",stats:[3,3,3],color:"#a99ac6",body:1,height:1,face:0,accessory:0,seed:42719};let bt=structuredClone(Ga),oe=1,Le=!1,$r="title",Ti=null,Nn=!1,wn;const Oa=Ha("road-entry-settings-v1");let Ri=Number(Oa?.pixel)||2,Pi=Oa?.reduceMotion??matchMedia("(prefers-reduced-motion: reduce)").matches;ut("#app").innerHTML='<div id="storybookBackdrop" aria-hidden="true"></div><div id="screen"></div><div id="portraitWrap"><canvas id="portrait" aria-label="当前旅人形象"></canvas><span>每段经历，都留下一点形状。</span></div><div id="drawer" hidden></div><div id="notice" role="status"></div>';const Se=new Ph(ut("#portrait"));Se.reduceMotion=Pi,Se.pixel=Ri,Se.resize(),Se.update(bt);function za(i){ut("#app").append(ut("#portraitWrap")),$r=i,document.body.dataset.mode=i,document.body.dataset.step=String(oe),document.body.dataset.page=["focus","appearance","context"][oe-1],document.body.classList.toggle("at-intro",i==="setup")}function Va(i=440){if(!Nn)return;wn??=new AudioContext,wn.resume();const t=wn.createOscillator(),e=wn.createGain();t.frequency.value=i,e.gain.setValueAtTime(.04,wn.currentTime),e.gain.exponentialRampToValueAtTime(.001,wn.currentTime+.4),t.connect(e).connect(wn.destination),t.start(),t.stop(wn.currentTime+.45)}function ts(i){const t=i?.initial;return!!t&&Object.hasOwn(Di,t.context)&&Array.isArray(t.stats)&&t.stats.length===3&&t.stats.every(e=>Number.isInteger(e)&&Number(e)>=0)&&t.stats.reduce((e,n)=>e+n,0)===9&&/^#[0-9a-f]{6}$/i.test(t.color)&&[0,1,2].includes(t.body)&&[0,1,2].includes(t.height)&&[0,1].includes(t.face)&&[0,1,2].includes(t.accessory)&&Number.isInteger(t.seed)&&[1,2,3].includes(i.step)}function fA(){$r==="setup"&&ka("road-entry-draft-v1",{initial:bt,step:oe,focusCustom:Le,flowVersion:2})}function hA(){fA(),za("title"),ut("#drawer").hidden=!0;const i=Ha("road-entry-draft-v1");ut("#screen").innerHTML=`<section class="title-card"><div class="eyebrow">未行之路 · 一段由你走出的生活</div><h1>Road Not Taken</h1><p class="title-line">未走的路，还在世界里。</p><div class="title-actions"><button class="ticket primary" id="newJourney"><span>开启旅程<small>NEW JOURNEY</small></span></button><button class="ticket secondary" id="resumeJourney" ${ts(i)?"":"disabled"}><span>继续旅程<small>${ts(i)?"继续开局准备":"CONTINUE"}</small></span></button><button class="ticket secondary" id="gallery"><span>旅程收藏<small>COLLECTION</small></span></button></div><button class="text-button title-settings" id="titleSettings">画面与声音</button><p class="edition">开局准备独立演示 · 基于 0.6.0</p></section>`,ut("#newJourney").onclick=()=>{bt=structuredClone(Ga),oe=1,Le=!1,qe()},ts(i)&&(ut("#resumeJourney").onclick=()=>{bt=structuredClone(i.initial),oe=i.flowVersion===2?i.step:[3,1,2][i.step-1],Le=!!i.focusCustom,es(),qe()}),ut("#gallery").onclick=Lh,ut("#titleSettings").onclick=Nh}function qe(){if(document.body.dataset.focusView=Le?"custom":"presets",za("setup"),Se.update(bt),ut("#screen").innerHTML=`<section class="setup-card"><button class="back text-button" id="setupBack">← ${oe===1?"返回标题":"上一步"}</button><div class="setup-steps">${["生活重心","旅人形象","生活处境"].map((i,t)=>`<span class="${t+1===oe?"active":""}">${String(t+1).padStart(2,"0")} ${i}</span>`).join("")}</div><div id="setupBody"></div><div class="setup-footer"><button class="primary" id="setupNext">${oe===3?"开始生活 ↗":"下一步 →"}</button></div></section><div class="setup-caption">${oe===1?"此刻的重心，会慢慢长成你的样子。":oe===2?"你选择的外观，和一路留下的痕迹。":"外部条件影响机会与付出。"}</div>`,oe===3)ut("#setupBody").innerHTML=`<div class="eyebrow">22 岁，刚搬来河湾</div><h1>带着怎样的生活而来？</h1><p>先有处境，再在其中做自己的选择。</p><div class="context-cards">${Object.entries(Di).map(([i,t])=>`<button data-context="${i}" class="selection-card ${bt.context===i?"active":""}" aria-pressed="${bt.context===i}"><strong>${t.name}</strong><span>${t.text}</span><small>初始精力 ${t.energy}</small></button>`).join("")}</div>`,document.querySelectorAll("[data-context]").forEach(i=>i.onclick=()=>{bt.context=i.dataset.context,qe()});else if(oe===1)Uh();else{ut("#setupBody").innerHTML=`<div class="eyebrow">一个开始时的你</div><h1>让旅人，有一点你的样子。</h1><p>外观可以自己选。经历的痕迹，留给之后的生活。</p><div class="appearance"><label>体型<select id="body"><option value="0">轻巧</option><option value="1">柔软</option><option value="2">圆润</option></select></label><label>身高<select id="height"><option value="0">小个子</option><option value="1">中等</option><option value="2">高个子</option></select></label><label>表情<select id="face"><option value="0">平静</option><option value="1">微笑</option></select></label><label>配饰<select id="accessory"><option value="0">随重心自然变化</option><option value="1">保留眼镜</option><option value="2">保留叶片</option></select></label><label class="color-choice">衣色<input id="color" aria-label="衣服颜色" type="color" value="${bt.color}"></label></div><details class="conditions"><summary>本局外部条件</summary><p>花期：${["微风","阴晴","阵雨"][rs(bt.seed,"fog")]} · 工坊环境：${rs(bt.seed,"work")}<br>同一起点重玩会保持这些条件。</p><button id="newWeather" class="text-button">换一组条件</button></details><div class="setup-summary">${bt.stats.join(" / ")} · 共 9 点</div>`;for(const i of["body","height","face","accessory"])ut(`#${i}`).value=String(bt[i]),ut(`#${i}`).onchange=t=>{bt[i]=Number(t.target.value),Se.update(bt)};ut("#color").oninput=i=>{bt.color=i.target.value,Se.update(bt)},ut("#newWeather").onclick=()=>{bt.seed=Math.floor(Math.random()*2147483647),qe()}}oe===1&&Le&&document.querySelector(".setup-footer").prepend(ut("#setupBalance")),ut("#setupBack").onclick=()=>{oe===1&&Le?(Le=!1,qe()):oe===1?hA():(oe--,qe())},ut("#setupNext").onclick=()=>{oe<3?(oe++,qe()):Fh()},ut("#setupNext").focus({preventScroll:!0})}const Ya=[{name:"探索者",hint:"为自己的选择留出空间",stats:[5,2,2]},{name:"实干家",hint:"把练习变成能做到的事",stats:[2,5,2]},{name:"同行者",hint:"让相遇慢慢长成关系",stats:[2,2,5]}];function es(){bt.stats[1]>bt.stats[0]&&bt.stats[1]>=bt.stats[2]||bt.stats[2]>bt.stats[0]}function Dh(i,t){for(t=Math.max(0,Math.min(9,t));bt.stats[i]!==t;){const e=[0,1,2].filter(n=>n!==i).sort((n,A)=>bt.stats[A]-bt.stats[n]);if(bt.stats[i]<t){const n=e.find(A=>bt.stats[A]>0);if(n===void 0)break;bt.stats[n]--,bt.stats[i]++}else bt.stats[i]--,bt.stats[e.at(-1)]++}bt.stats.forEach((e,n)=>{ut(`#statValue${n}`).textContent=String(e)}),ut("#setupBalance").textContent=bt.stats.join(" + ")+" = 9",document.querySelectorAll("[data-change]").forEach(e=>{const[n,A]=e.dataset.change.split(",").map(Number);e.disabled=A<0?bt.stats[n]===0:bt.stats[n]===9}),es(),Se.update(bt)}function Uh(){if(Le){ut("#setupBack").textContent="BACK",ut("#setupBack").setAttribute("aria-label","返回旅人类型选择"),ut("#setupNext").textContent="CONTINUE",ut("#setupNext").setAttribute("aria-label","下一步：旅人形象"),ut("#setupBody").innerHTML=`<div class="custom-focus-layout"><div class="custom-preview"><strong>自定义</strong></div><div class="custom-stat-list">${Ih.map((e,n)=>`<section class="custom-stat-row" aria-label="${e}"><div class="custom-stat-description"><h2>${e}</h2><p>${["我的生活，有多少出于自己的意愿？","我自己能应付眼前的事情吗？","我是否被关心、理解，并与人连接？"][n]}</p></div><div class="custom-stat-control"><button data-change="${n},-1" ${bt.stats[n]===0?"disabled":""} aria-label="减少${e}"><span aria-hidden="true">‹</span></button><output id="statValue${n}" aria-label="${e}点数">${bt.stats[n]}</output><button data-change="${n},1" ${bt.stats[n]===9?"disabled":""} aria-label="增加${e}"><span aria-hidden="true">›</span></button></div></section>`).join("")}</div></div><div id="setupBalance" class="visually-hidden" role="status">${bt.stats.join(" + ")} = 9</div>`,ut(".custom-preview").prepend(ut("#portraitWrap")),document.querySelectorAll("[data-change]").forEach(e=>e.onclick=()=>{const[n,A]=e.dataset.change.split(",").map(Number);Dh(n,bt.stats[n]+A)});return}const i=!Ya.some(e=>e.stats.join()===bt.stats.join()),t=[...Ya,{name:"自定义",hint:"从均衡出发，自己分配 9 点",stats:bt.stats}];ut("#setupBack").textContent="BACK",ut("#setupBack").setAttribute("aria-label","返回标题"),ut("#setupNext").textContent="CONTINUE",ut("#setupNext").setAttribute("aria-label","下一步：旅人形象"),ut("#setupBody").innerHTML=`<div class="focus-card-grid" aria-label="选择旅人类型">${t.map((e,n)=>{const A=n===3?i:e.stats.join()===bt.stats.join();return`<section class="focus-card-slot" data-selected="${A}"><span class="focus-selection-marker" aria-hidden="true"></span><button class="focus-card" data-focus-preset="${n}" aria-pressed="${A}" aria-label="${e.name}：${e.hint}。自主 ${e.stats[0]}，胜任 ${e.stats[1]}，关系 ${e.stats[2]}${n===3?"，点击自定义点数":""}"><canvas aria-hidden="true" data-preset-portrait="${n}"></canvas><strong>${e.name}</strong></button><div class="preset-points" aria-label="${e.name}的点数" ${A?"":"hidden"}>${e.stats.map((r,s)=>`<span aria-label="${["自主","胜任","关系"][s]} ${r}" title="${["自主","胜任","关系"][s]}">${r}</span>`).join("")}</div></section>`}).join("")}</div>`,t.forEach((e,n)=>Se.thumbnail(ut(`[data-preset-portrait="${n}"]`),{...bt,stats:e.stats})),document.querySelectorAll("[data-focus-preset]").forEach(e=>e.onclick=()=>{const n=Number(e.dataset.focusPreset);n===3?Le=!0:(bt.stats=[...t[n].stats],Le=!1,es()),qe()})}function Lh(){Ti=document.activeElement,ut("#drawer").hidden=!1,ut("#drawer").innerHTML='<section class="drawer-card" role="dialog" aria-modal="true" aria-label="旅程收藏"><button id="closeDrawer" class="text-button close-drawer">关闭</button><div class="eyebrow">COLLECTION</div><h1>旅程收藏</h1><p>走完一段人生后，这里会留下你的路线与经历。</p><p class="small-copy">当前演示到开局准备结束，尚无已完成旅程。</p></section>',ut("#closeDrawer").onclick=uA,ut("#closeDrawer").focus()}function Fh(){fA(),Va(523),Ti=ut("#setupNext"),ut("#drawer").hidden=!1,ut("#drawer").innerHTML=`<section class="drawer-card" role="dialog" aria-modal="true" aria-label="开局准备完成"><div class="eyebrow">READY FOR THE JOURNEY</div><h1>起点，已经准备好了。</h1><p>生活处境：${Di[bt.context].name}<br>生活重心：${bt.stats.join(" / ")} · 共 9 点<br>旅人形象：已确定</p><p class="small-copy">本独立演示到此结束。</p><div class="entry-actions"><button id="closeDrawer" class="text-button">返回调整</button><button id="returnTitle" class="primary">返回标题 →</button></div></section>`,ut("#closeDrawer").onclick=uA,ut("#returnTitle").onclick=hA,ut("#closeDrawer").focus()}function Nh(){Ti=document.activeElement,ut("#drawer").hidden=!1,ut("#drawer").innerHTML=`<section class="drawer-card" role="dialog" aria-modal="true" aria-label="画面与声音"><button class="text-button close-drawer" id="closeDrawer">关闭 ×</button><div class="eyebrow">按你的习惯来</div><h1>画面与声音</h1><label>预览清晰度<select id="pixel"><option value="1">细腻</option><option value="2">柔和</option><option value="3">颗粒</option></select></label><button id="soundToggle" class="setting-row" aria-pressed="${Nn}">声音 <span>${Nn?"开":"关"}</span></button><label class="check-row"><input id="reduceMotion" type="checkbox" ${Pi?"checked":""}>减少动态</label><p class="small-copy">Esc 返回上一步或关闭当前窗口</p></section>`,ut("#pixel").value=String(Ri),ut("#pixel").onchange=i=>{Ri=Number(i.target.value),Se.pixel=Ri,Se.resize(),Wa()},ut("#soundToggle").onclick=()=>{Nn=!Nn,ut("#soundToggle").setAttribute("aria-pressed",String(Nn)),ut("#soundToggle span").textContent=Nn?"开":"关",Va()},ut("#reduceMotion").onchange=i=>{Pi=i.target.checked,Se.reduceMotion=Pi,Wa()},ut("#closeDrawer").onclick=uA,ut("#closeDrawer").focus()}function Wa(){ka("road-entry-settings-v1",{pixel:Ri,reduceMotion:Pi})}function uA(){ut("#drawer").hidden=!0,Ti?.isConnected&&Ti.focus({preventScroll:!0})}window.addEventListener("keydown",i=>{if(i.key==="Escape"){if(!ut("#drawer").hidden){uA();return}$r==="setup"&&(oe===1&&Le?(Le=!1,qe()):oe>1?(oe--,qe()):hA())}}),ut("#drawer").addEventListener("keydown",i=>{if(i.key!=="Tab")return;const t=Array.from(ut("#drawer").querySelectorAll("button,select,input,summary"));i.shiftKey&&document.activeElement===t[0]?(i.preventDefault(),t.at(-1)?.focus()):!i.shiftKey&&document.activeElement===t.at(-1)&&(i.preventDefault(),t[0]?.focus())});for(const i of["click","input","change"])document.addEventListener(i,fA);window.addEventListener("beforeunload",fA),hA(),requestAnimationFrame(Se.frame);const Xa=new Image;Xa.src="./art/cloud-islands-background.png";const ja=new Image;ja.src="./art/travel-ticket.png",Promise.all([document.fonts.ready,Xa.decode().catch(()=>{}),ja.decode().catch(()=>{})]).then(()=>requestAnimationFrame(()=>{Se.render(),document.querySelector("#loading")?.remove(),document.body.classList.remove("booting")}))})();
