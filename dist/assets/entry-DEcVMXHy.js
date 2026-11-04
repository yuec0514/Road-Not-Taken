(function(){"use strict";var As=document.createElement("style");As.textContent=':root{font-family:Segoe UI,Microsoft YaHei,sans-serif;color:#4d435c;background:#e7e0ed;font-synthesis:none;--ink:#4d435c;--muted:#897c94;--accent:#806b99;--paper:#fbf8f1;--line:#ded5e3}*{box-sizing:border-box}body{margin:0;overflow:hidden}button,input,select{font:inherit}button,select,summary{cursor:pointer}button{color:inherit;background:transparent;border:1px solid var(--line);border-radius:9px;padding:10px 14px;min-height:42px;transition:background .16s,border-color .16s,transform .16s}button:hover:not(:disabled){background:#ece4f0;border-color:#b7a5c7}button:active:not(:disabled){transform:translateY(1px)}button:disabled{opacity:.45;cursor:default}button:focus-visible,input:focus-visible,select:focus-visible,summary:focus-visible,canvas:focus-visible{outline:3px solid #b699cb;outline-offset:3px}h1,h2,h3,p{margin:0}h1,h2,.wordmark{font-family:STSong,SimSun,serif;font-weight:400}h1{font-size:30px;line-height:1.55}h2{font-size:21px}p{line-height:1.9;color:#7b6d87;font-size:14px}small{font-size:11px;color:var(--muted)}[hidden]{display:none!important}.eyebrow{font-size:10px;letter-spacing:2px;color:#97849f;line-height:1.8}.primary{background:var(--accent);color:#fff!important;border-color:var(--accent);width:100%;font-size:14px;min-height:49px;display:flex;align-items:center;justify-content:space-between;gap:20px}.primary:hover:not(:disabled){background:#715c8b;border-color:#715c8b}.secondary{background:#f7f2f9;display:flex;flex-direction:column;align-items:flex-start;gap:5px;width:100%;font-size:14px}.text-button{border:0;background:none;padding:8px;color:#8a779a;font-size:12px}.small-copy{font-size:11px;line-height:1.9;color:#9b8ea4}#stage{position:fixed;inset:90px 372px 22px 20px;border:1px solid #a99ab8;border-radius:9px;overflow:hidden;background:#eae5ef;box-shadow:0 2px #b3a9bd50;transition:left .35s,right .35s,top .35s,bottom .35s}#world{width:100%;height:100%;display:block;outline:none;touch-action:none;cursor:grab}#labels{position:absolute;inset:0;pointer-events:none}.place{position:absolute;transform:translate(-50%,-100%);font-size:10px;min-height:30px;padding:7px 9px;background:#fffaf1dd;border:1px solid #cfc4d6;pointer-events:auto;border-radius:6px;white-space:nowrap;box-shadow:0 2px 4px #7868880b}.place i{display:inline-block;width:5px;height:5px;border-radius:50%;margin-right:4px;vertical-align:middle}.place small{display:none;font-size:9px;color:#978b9f;margin-top:4px}.place.near small{display:block}.place.visited span:after{content:" ✓";color:#a399aa}.place.destination{background:#e5d9ef;border-color:#a189b5}.place.locked{color:#aaa0ae}.place.locked i{opacity:.4}#cameraHint{position:absolute;left:18px;bottom:14px;font-size:10px;color:#9c8ca8;pointer-events:none}#sceneBadge{position:absolute;left:18px;top:17px;font-size:10px;letter-spacing:1px;color:#9d8aa8;pointer-events:none}#topbar{position:fixed;top:16px;left:22px;right:22px;height:54px;display:flex;align-items:center;gap:24px}.wordmark{border:0;font-size:26px;letter-spacing:4px;padding:0;display:flex;gap:20px;align-items:center}.wordmark small{font-family:sans-serif;font-size:8px;letter-spacing:2px}.wordmark:hover:not(:disabled){background:none}#chapterName{color:#96869f;font-size:11px;letter-spacing:1px}#topbar nav{margin-left:auto;display:flex;gap:7px}#topbar nav button{font-size:12px;background:#f7f2f9;padding:8px 15px;min-height:36px}#sidebar{position:fixed;right:20px;top:90px;bottom:22px;width:334px;border-radius:10px;background:var(--paper);border:1px solid #d3c8dc;box-shadow:0 3px 8px #88729b08;padding:24px 22px;overflow:auto;scrollbar-width:thin;scrollbar-color:#c4b5cd transparent}#sidebar h1{font-size:25px;margin:13px 0 16px}#sidebar .primary{margin-top:20px}.chapter-progress{margin-top:15px;color:#a294aa;font-size:10px}.chapter-progress>div{display:flex;gap:4px;margin-top:9px}.chapter-progress i{height:5px;flex:1;background:#e7dfe9;border-radius:2px}.chapter-progress i.filled{background:#ab95ba}.chapter-progress i.break{margin-left:7px}.life-heading{margin-top:26px}.life-heading>small{color:#a190ab;font-size:11px}.life-heading p{font-size:13px}.focus-tabs{display:flex;gap:5px;margin-top:24px}.focus-tabs button,.presets button{font-size:12px;flex:1;background:#f5eff8;min-height:38px}.focus-tabs button[aria-pressed=true],.presets button[aria-pressed=true]{background:#dfd2e9;border-color:#b59cc6}.living-note{font-size:10px;line-height:1.9;color:#a294ab;margin-top:24px;border-top:1px solid #e7dfe8;padding-top:18px}.balance{margin-top:27px;border-top:1px solid #e5dce8;padding-top:20px}.balance>div{font-size:11px;display:flex;gap:9px;color:#8c7c96}.balance>div>span:last-child{margin-left:auto}.balance b{font-weight:500}.balance section{display:flex;gap:15px;margin-top:17px}.trait{flex:1;display:grid;grid-template-columns:1fr auto;gap:7px}.trait span{font-size:11px;color:#82738d}.trait b{font-family:Georgia,serif;font-size:22px;color:#6c567d}.trait meter{width:100%;height:5px;grid-column:1/-1;appearance:none}.trait meter::-webkit-meter-bar{background:#e8e0eb;border:0;border-radius:5px}.trait meter::-webkit-meter-optimum-value{background:#ab96bb}.trait-1 meter::-webkit-meter-optimum-value{background:#a6b8a8}.trait-2 meter::-webkit-meter-optimum-value{background:#c8a2aa}.leave-choice{padding-left:0;margin-bottom:9px}.event-lead{font-size:13px;line-height:1.95}.choices{display:flex;flex-direction:column;gap:10px;margin-top:23px}.choices button{text-align:left;background:#f4eff7;padding:15px 13px}.choices button strong{font-size:13px;line-height:1.8;font-weight:500;display:block}.choices button span{font-size:11px;line-height:1.9;display:block;color:#9a8ba5;margin-top:8px}.choices button small{font-size:10px;line-height:1.8;display:block;margin-top:8px;color:#8e7c9b}.choices button.selected{background:#e6d9ee;border-color:#ac91bc}.choices button:disabled{opacity:.45}.result-change{border-left:3px solid #b098c0;background:#eee5f3;padding:14px;margin:22px 0}.result-change strong{font-size:12px;font-weight:500}.result-change p{font-size:11px;margin-top:9px}.result-change small{line-height:1.8;display:block;margin-top:7px}.meanwhile{border-top:1px solid #e8e0eb;padding-top:19px;margin-top:23px}.meanwhile p{font-size:11px;margin-top:10px}#screen{position:fixed;inset:0;pointer-events:none;z-index:20}.title-card{pointer-events:auto;position:absolute;left:6vw;top:14vh;width:390px}.title-card h1{font-size:69px;letter-spacing:13px;line-height:1.8;margin-top:15px}.title-line{font-family:SimSun,serif;color:#6d597b;font-size:22px;line-height:1.9;margin-top:14px}.title-sub{font-size:12px;margin-top:23px;color:#9a86a6}.title-actions{width:270px;display:flex;flex-direction:column;gap:11px;margin-top:35px}.title-actions .primary{font-size:14px}.title-actions>.text-button{align-self:flex-start}.edition{font-size:9px;letter-spacing:1px;color:#b09cba;line-height:2;margin-top:30px}.title-caption{position:absolute;right:6vw;bottom:7vh;text-align:right}.title-caption span{font-size:9px;letter-spacing:3px;color:#a38bae}.title-caption p{font-family:SimSun,serif;font-size:16px;color:#897197;margin-top:11px}body[data-mode=title] #stage{inset:0 0 0 28vw;border:0;border-radius:0;background:#e7e0ed;box-shadow:none}body[data-mode=title] #topbar,body[data-mode=setup] #topbar,body[data-mode=gate] #topbar,body[data-mode=transition] #topbar,body[data-mode=title] #labels,body[data-mode=setup] #labels,body[data-mode=end] #labels,body[data-mode=gate] #labels,body[data-mode=transition] #labels,body[data-mode=title] #sceneBadge,body[data-mode=setup] #sceneBadge,body[data-mode=end] #sceneBadge{display:none}.setup-card{position:absolute;left:5vw;top:6vh;bottom:5vh;width:450px;padding:24px 30px 0;background:#fcf9f2f5;border:1px solid #d3c5dc;border-radius:12px;pointer-events:auto;overflow:auto;scrollbar-width:thin;box-shadow:0 8px 30px #7d66860b}.setup-card>.back{padding:0;min-height:30px;font-size:11px}.setup-steps{display:flex;justify-content:space-between;font-size:9px;color:#b3a3be;padding:20px 0;border-bottom:1px solid #e1d5e7;margin-bottom:26px}.setup-steps .active{color:#826092}.setup-card h1{font-size:29px;margin:12px 0 14px}.setup-card p{font-size:12px}.context-cards{display:flex;flex-direction:column;gap:12px;margin-top:26px}.selection-card{display:flex;flex-direction:column;align-items:flex-start;gap:10px;text-align:left;padding:17px 16px;background:#f8f3f9}.selection-card strong{font-size:14px;font-weight:500}.selection-card span{font-size:11px;color:#a08daa;line-height:1.8}.selection-card small{font-size:10px}.selection-card.active{background:#e9dfee;border-color:#b69dc5}.setup-footer{position:sticky;bottom:0;padding:22px 0 18px;background:#fcf9f2;display:flex;align-items:center;gap:20px;margin-top:24px}.setup-footer .primary{width:190px;min-height:46px;font-size:13px}.setup-footer>span{font-size:10px;color:#a995b1}.setup-caption{position:absolute;bottom:7vh;right:6vw;font-family:SimSun,serif;font-size:15px;color:#947c9e}.presets{display:flex;gap:8px;margin-top:27px}.sliders{display:flex;flex-direction:column;gap:27px;margin-top:35px}.sliders label{display:grid;grid-template-columns:58px 1fr 22px;align-items:center;gap:15px;font-size:12px;color:#8a749a}.sliders input{width:100%;accent-color:#a58ab7}.sliders output{font-family:Georgia,serif;font-size:23px;color:#725382}.setup-balance{padding:22px;background:#eee6f2;text-align:center;font-family:Georgia,serif;font-size:26px;color:#8c6e9f;letter-spacing:6px;border-radius:9px;margin:30px 0 17px}.appearance{display:grid;grid-template-columns:1fr 1fr;gap:24px 18px;margin-top:30px}.appearance label,.drawer-card>label{font-size:12px;color:#937f9f;display:flex;flex-direction:column;gap:10px}.appearance select,.drawer-card select{min-height:40px;border:1px solid #d7c7e0;background:#f5eff8;border-radius:6px;padding:8px;color:#836a91;font-size:12px}.appearance input[type=color]{width:100%;height:40px;border:1px solid #d7c7e0;border-radius:6px;background:#f5eff8;padding:5px}.conditions{margin-top:25px;padding:17px 0;border-top:1px solid #e3d7e8;border-bottom:1px solid #e3d7e8;font-size:11px;color:#9980a6}.conditions p{font-size:11px;line-height:1.9;margin-top:15px}.setup-summary{font-size:11px;color:#9c85a8;margin-top:22px}body[data-mode=setup] #stage{inset:0 0 0 35vw;border:0;box-shadow:none}#portraitWrap{display:none;position:fixed;pointer-events:none;z-index:22;left:62vw;top:28vh;width:250px;height:340px;text-align:center}#portrait{width:250px;height:290px;display:block}#portraitWrap>span{display:block;color:#aa93b5;font-size:10px;letter-spacing:1px;line-height:1.8;margin-top:13px}body[data-mode=setup][data-page=appearance] #portraitWrap{display:block}body[data-mode=setup][data-page=appearance] #stage{opacity:.48}body[data-mode=setup][data-page=appearance] .setup-caption{display:none}.gate-card{position:absolute;left:8vw;top:14vh;width:435px;pointer-events:auto;background:#fbf8f1ed;padding:35px;border:1px solid #d5c5dd;border-radius:12px}.gate-card h1{font-size:35px;margin:15px 0 22px}.gate-card p{font-size:12px}.gate-carry{font-size:12px;line-height:2.3;padding:19px 18px;background:#ece3f1;margin:24px 0;border-left:3px solid #b19ac0;color:#937a9e}.gate-card>small{display:block;text-align:center;margin-top:13px;font-size:10px}body[data-mode=gate] #stage{inset:0;border:0;box-shadow:none}.transition-label{position:absolute;bottom:11vh;left:0;right:0;text-align:center;pointer-events:auto}.transition-label h1{font-size:44px;letter-spacing:10px}.transition-label p{font-size:12px;margin-top:7px}.transition-label button{margin-top:13px}body[data-mode=transition] #stage{inset:0;border:0;box-shadow:none}body[data-mode=transition] #cameraHint,body[data-mode=transition] #sceneBadge{display:none}body[data-mode=end] #stage{right:47vw;opacity:.66}body[data-mode=end] #portraitWrap{display:block;left:8vw;top:27vh;width:290px;height:360px}body[data-mode=end] #portrait{width:290px;height:338px}.review{position:absolute;pointer-events:auto;top:90px;bottom:22px;right:20px;width:44vw;background:var(--paper);border:1px solid #d7c9df;border-radius:12px;padding:29px 26px;overflow:auto;scrollbar-width:thin}.review>h1{font-size:32px;margin:13px 0 16px}.review>p{font-size:12px}.route-pair{display:flex;gap:14px;margin:25px 0}.route-pair figure{margin:0;flex:1;min-width:0}.route-pair svg{width:100%;max-height:145px;display:block}.route-pair figcaption{font-size:10px;text-align:center;color:#a38baf;margin-top:7px}.final-form{padding:19px;background:#eee5f2;border-radius:8px;margin:22px 0}.final-form strong{font-size:14px;font-weight:400}.final-form small{font-size:11px;margin-left:8px}.final-form p{font-size:11px;margin-top:11px}.end-log,.comparison details{font-size:12px;margin:22px 0;color:#917a9e}.review article{padding:17px 0;border-bottom:1px solid #e8dfea}.review article h3{font-size:13px;font-weight:500;margin:9px 0}.review article p{font-size:11px;line-height:1.9}.review article small{line-height:1.9;display:block}.comparison{border-left:3px solid #c1a9c7;padding:14px 20px;background:#f2ebf4;margin:20px 0}.comparison p{font-size:11px;margin-top:12px}.comparison h2{font-size:20px}.comparison details p{font-size:10px}.review-actions{position:sticky;bottom:-29px;background:#fbf8f1ee;padding:15px 0 9px;margin-top:20px;display:flex;gap:12px;align-items:center}.review-actions .primary{width:auto;flex:1;font-size:12px;white-space:nowrap}.review-actions .text-button{font-size:11px;white-space:nowrap}.final-caption{position:absolute;left:7vw;bottom:9vh;font-size:24px;font-family:SimSun,serif;color:#94749e}.final-caption span{display:block;font-family:sans-serif;font-size:10px;margin-top:15px;letter-spacing:1px;color:#a58aaf}#drawer{position:fixed;inset:0;z-index:60;background:#4f405975;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);display:flex;justify-content:center;align-items:center;padding:25px}.drawer-card{background:var(--paper);border:1px solid #d5c4de;border-radius:12px;padding:25px;width:390px;max-height:85vh;overflow:auto;box-shadow:0 12px 60px #4f3e5820}.close-drawer{display:block;margin-left:auto;font-size:11px}.drawer-card h1{font-size:28px;margin:12px 0 29px}.drawer-card>label{margin:22px 0}.setting-row{width:100%;display:flex;justify-content:space-between;margin:20px 0;font-size:13px}.drawer-card .check-row{flex-direction:row;align-items:center}.check-row input{accent-color:#9778ad;width:16px;height:16px}.journal-card{width:560px}.journal-card article{padding:20px 0;border-bottom:1px solid #e4d7e9}.journal-card h2{font-size:20px;margin:10px 0}.journal-card p{font-size:12px}.journal-card .others{color:#a58cae;font-size:11px;margin-top:12px}.season-recovery{margin-top:22px;padding:17px;background:#eee5f2}#notice{position:fixed;bottom:30px;left:50%;transform:translate(-50%,15px);padding:12px 22px;background:#79618c;color:#fff;font-size:12px;line-height:1.8;border-radius:8px;opacity:0;pointer-events:none;z-index:80;transition:opacity .2s,transform .2s;max-width:80vw}#notice.show{opacity:1;transform:translate(-50%)}@media(max-width:1100px){.wordmark small{display:none}#stage{right:337px}#sidebar{width:299px;padding:20px 18px}#chapterName{font-size:9px}.title-card{left:4vw;width:340px}.title-card h1{font-size:57px}.title-line{font-size:20px}.setup-card{left:3vw;width:400px;padding:21px 24px 0}.setup-card h1{font-size:27px}body[data-mode=setup] #stage{left:38vw}.setup-caption{right:4vw;font-size:12px}.review{width:46vw;padding:24px 20px}.review-actions .primary{font-size:10px}.final-caption{font-size:20px}.review>h1{font-size:28px}}@media(max-height:760px){.title-card{top:7vh}.title-card h1{font-size:53px;margin-top:4px}.title-line{font-size:18px}.title-sub{margin-top:15px}.title-actions{margin-top:23px}.edition{margin-top:15px}.setup-card{top:3vh;bottom:3vh}.setup-steps{padding:14px 0;margin-bottom:17px}.setup-card h1{font-size:25px}.context-cards{gap:9px;margin-top:19px}.selection-card{padding:13px;gap:7px}.setup-footer{margin-top:13px;padding:15px 0}.gate-card{top:6vh;padding:28px}.gate-card h1{font-size:29px}.gate-carry{margin:17px 0;padding:12px 15px}#sidebar{top:77px}.balance{margin-top:21px}.meanwhile{margin-top:17px}.choices{margin-top:18px}.choices button{padding:12px}.review{top:77px}}@media(max-width:760px){#stage{inset:75px 12px 42vh}#sidebar{inset:auto 12px 12px;width:auto;max-height:40vh;padding:17px}#topbar{left:13px;right:13px;gap:12px}.wordmark{font-size:20px}#chapterName{display:none}#topbar nav{gap:3px}#topbar nav button{font-size:10px;padding:7px 10px}.balance{margin-top:15px}.living-note,.life-heading p{display:none}.life-heading{margin-top:13px}#sidebar h1{font-size:21px;margin:8px 0}.title-card{left:7vw;top:8vh;width:330px}.title-sub{max-width:250px}body[data-mode=title] #stage{inset:25vh -25vw 0 0}.title-caption{display:none}.setup-card{inset:3vh 5vw auto;width:90vw;max-height:80vh}.setup-caption{display:none}body[data-mode=setup] #stage{inset:0;opacity:.22}body[data-mode=setup][data-page=appearance] #portraitWrap{display:none}.gate-card{left:5vw;top:10vh;width:90vw;max-height:85vh;overflow:auto}body[data-mode=end] #portraitWrap{display:none}body[data-mode=end] #stage{inset:0;opacity:.2}.review{left:4vw;right:4vw;width:92vw;top:75px}.final-caption{display:none}.review-actions .primary{font-size:12px}.review-actions .text-button{font-size:10px}}#stage{transition:none}.choices button span,.choices button small{color:#6f5d7b}.choices button.selected span,.choices button.selected small{color:#64516f}.choices button:disabled{opacity:.68}.selection-card span,.selection-card small{color:#715e7e}.selection-card.active span,.selection-card.active small{color:#64516f}.setup-card p,.appearance label,.sliders label,.setup-summary,.conditions{color:#715e7e}.trait span,.balance>div,.chapter-progress,.small-copy,.living-note{color:#796584}.title-sub,.edition,.setup-footer>span{color:#7d6789}.booting #stage{transition:none!important}@media(prefers-reduced-motion:reduce){*{transition:none!important}}#playLayout{display:contents}body:is([data-mode=life],[data-mode=choice],[data-mode=result]) #playLayout{position:fixed;inset:90px max(18px,calc((100vw - 1760px)/2)) 22px;display:grid;grid-template-columns:220px minmax(0,1fr) 280px;gap:18px}body:is([data-mode=life],[data-mode=choice],[data-mode=result]) #stage{position:relative;inset:auto;width:100%;height:100%;min-width:0;min-height:0}body:is([data-mode=life],[data-mode=choice],[data-mode=result]) #sidebar{position:relative;inset:auto;width:auto;max-height:none;padding:22px 20px;min-height:0}#identityBoard{min-height:0;overflow:auto;background:var(--paper);border:1px solid #d3c8dc;border-radius:10px;padding:20px 18px;scrollbar-width:thin;scrollbar-color:#c4b5cd transparent}#identityBoard>header{font-size:15px;display:flex;flex-direction:column;gap:8px;border-bottom:1px solid var(--line);padding-bottom:14px}#identityBoard>header span{font-size:10px;color:#796584;letter-spacing:1px}#identityBoard #portraitWrap{position:relative;display:block;inset:auto;width:100%;height:165px;z-index:auto}#identityBoard #portrait{display:block;width:145px;height:165px;margin:auto}#identityBoard #portraitWrap>span{display:none}.profile-context h2{font-size:21px;line-height:1.5}.profile-context p{font-size:11px;margin-top:6px}#identityBoard .balance{margin-top:20px;padding-top:17px}#identityBoard .balance>div{flex-wrap:wrap;gap:6px;font-size:11px}#identityBoard .balance>div>span:last-child{margin-left:0;flex-basis:100%;margin-top:8px}#identityBoard .balance section{display:grid;grid-template-columns:1fr;gap:18px}#identityBoard .trait span{font-size:12px;align-self:center}#identityBoard .trait b{font-size:25px}#identityBoard .trait meter{height:6px}#identityBoard .chapter-progress{padding-top:19px;border-top:1px solid var(--line);margin-top:23px;line-height:1.7}#sidebar h1{font-size:24px;line-height:1.5;margin:10px 0 14px}#sidebar .activity-info>p{font-size:12px;line-height:1.85}#sidebar .focus-tabs{margin-top:20px}#sidebar .focus-tabs button{padding:9px 7px}#sidebar .primary{margin-top:18px}.info-section{border-top:1px solid var(--line);padding-top:20px;margin-top:25px}.info-section h2{font-family:inherit;font-size:14px;font-weight:500;margin-bottom:14px}.parallel-info p{font-size:12px;line-height:1.85;margin-top:10px}.recent-info>button{display:block;width:100%;text-align:left;border:0;border-bottom:1px solid #e7dfe8;border-radius:0;padding:12px 0;background:none}.recent-info>button strong{display:block;font-size:12px;font-weight:400;line-height:1.7}.recent-info>button small{display:block;font-size:10px;margin-top:7px;color:#796584}#sidebar .event-lead{font-size:12px}#sidebar .result-change{padding:13px 12px;margin:19px 0}#sidebar .meanwhile{margin-top:20px}#choiceDialog{width:min(640px,calc(100vw - 40px));max-height:calc(100dvh - 40px);padding:0;border:1px solid #cdbed7;border-radius:12px;background:var(--paper);color:var(--ink);box-shadow:0 22px 80px #31233930;overflow:auto;scrollbar-width:thin;overscroll-behavior:contain}#choiceDialog::backdrop{background:#30263c61;-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px)}.decision-top{position:sticky;top:0;display:flex;align-items:center;justify-content:space-between;padding:14px 25px;border-bottom:1px solid var(--line);background:var(--paper);z-index:1}.decision-top>span{font-size:11px;color:#796584;letter-spacing:1px}.decision-top .text-button{font-size:12px;color:#6f5d7b}.decision-body{padding:24px 28px 28px}.decision-body h1{font-size:30px;line-height:1.5;margin:0 0 14px}.decision-body>.event-lead{font-size:14px;color:#6f5d7b;line-height:1.85}#choiceDialog .choices{gap:12px;margin-top:24px}#choiceDialog .choices button{position:relative;padding:17px 19px;background:#f4eff7;border-color:#dbcfe3;overflow:hidden}#choiceDialog .choices button strong{font-size:15px;color:#4d435c;line-height:1.65}#choiceDialog .choices button span,#choiceDialog .choices button small{font-size:12px;line-height:1.8;color:#6f5d7b;margin-top:9px}#choiceDialog .choices button:hover:not(:disabled){background:#e9dfef;border-color:#b49bc5}#choiceDialog .choices button.executing{opacity:1;background:#e6d9ee;border-color:#ac91bc}#choiceDialog .choices button.executing:after{content:"";position:absolute;bottom:0;left:0;height:3px;background:#9274a7;animation:choice-action .9s linear forwards}@keyframes choice-action{0%{width:0}to{width:100%}}@media(max-width:1190px)and (min-width:1001px){body:is([data-mode=life],[data-mode=choice],[data-mode=result]) #playLayout{grid-template-columns:188px minmax(0,1fr) 248px;gap:14px}#identityBoard{padding:17px 14px}body:is([data-mode=life],[data-mode=choice],[data-mode=result]) #sidebar{padding:20px 17px}}@media(max-width:1000px)and (min-width:701px){body:is([data-mode=life],[data-mode=choice],[data-mode=result]) #playLayout{grid-template-columns:minmax(0,1fr) 250px;grid-template-rows:130px minmax(0,1fr);gap:14px}#identityBoard{grid-column:1/-1;display:grid;grid-template-columns:130px 85px minmax(0,1fr);gap:12px;overflow:hidden;padding:12px 16px}#identityBoard>header{border:0;justify-content:center}#identityBoard #portraitWrap{height:106px}#identityBoard #portrait{width:90px;height:106px}#identityBody{display:grid;grid-template-columns:130px minmax(0,1fr);align-items:center;column-gap:18px}.profile-context h2{font-size:18px}#identityBoard .balance{border:0;margin:0;padding:0}#identityBoard .balance>div>span:last-child{margin:0 0 0 auto;flex-basis:auto}#identityBoard .balance section{display:flex;gap:14px;margin-top:12px}#identityBoard .trait span{font-size:10px}#identityBoard .trait b{font-size:21px}#identityBoard .chapter-progress{grid-column:1/-1;margin:0;padding-top:0;border:0}#identityBoard .chapter-progress>div{margin-top:5px}}@media(max-height:760px)and (min-width:1001px){body:is([data-mode=life],[data-mode=choice],[data-mode=result]) #playLayout{top:77px}#identityBoard #portraitWrap{height:140px}#identityBoard #portrait{width:123px;height:140px}#identityBoard .balance section{gap:12px}#identityBoard .chapter-progress{margin-top:18px;padding-top:15px}}@media(max-width:700px){body:is([data-mode=life],[data-mode=choice],[data-mode=result]){overflow:auto}body:is([data-mode=life],[data-mode=choice],[data-mode=result]) #playLayout{position:relative;inset:auto;display:flex;flex-direction:column;gap:14px;margin:76px 12px 18px}#identityBoard{display:flex;align-items:center;gap:12px;padding:12px;overflow:visible}#identityBoard>header{display:none}#profilePortraitSlot{width:72px;flex:none}#identityBoard #portraitWrap{height:86px}#identityBoard #portrait{width:72px;height:86px}#identityBody{min-width:0;flex:1}.profile-context h2{font-size:16px}.profile-context p{margin-top:2px;font-size:10px}#identityBoard .balance{border:0;margin:7px 0 0;padding:0}#identityBoard .balance>div{font-size:10px;flex-wrap:nowrap}#identityBoard .balance>div>span:last-child{margin:0 0 0 auto;flex-basis:auto}#identityBoard .balance section{display:flex;gap:10px;margin-top:8px}#identityBoard .trait span{font-size:10px}#identityBoard .trait b{font-size:19px}#identityBoard .chapter-progress{border:0;padding:0;margin-top:10px}body:is([data-mode=life],[data-mode=choice],[data-mode=result]) #stage{height:390px;flex:none}body:is([data-mode=life],[data-mode=choice],[data-mode=result]) #sidebar{overflow:visible;padding:20px}.decision-top{padding:10px 17px}.decision-body{padding:20px}.decision-body h1{font-size:26px}#choiceDialog{width:calc(100vw - 24px);max-height:calc(100dvh - 24px)}#choiceDialog .choices button{padding:15px}}@media(prefers-reduced-motion:reduce){#choiceDialog .choices button.executing:after{animation:none;width:100%}}@font-face{font-family:Audiowide;src:url(data:font/ttf;base64,AAEAAAARAQAABAAQR1BPU7aCM1sAAKxwAABhikdTVUKmNsSVAAEN/AAAAyBPUy8ya487mQAAAZgAAABgY21hcMIETfIAAAe8AAAFZGN2dCAAKgAAAAAOmAAAAAJmcGdtBlmcNwAADSAAAAFzZ2FzcAAXAAkAAKxgAAAAEGdseWYzCesVAAARgAAAXGxoZWFkCLOaSQAAARwAAAA2aGhlYRC6CQMAAAFUAAAAJGhtdHiK/YU1AAAB+AAABcRrZXJuO4s6VAAAbewAADASbG9jYf78F3YAAA6cAAAC5G1heHADiQJJAAABeAAAACBuYW1lbWZRqQAAngAAAAbbcG9zdGX47WgAAKTcAAAHhHByZXC4AAArAAAOlAAAAAQAAQAAAAEAxaYv1uVfDzz1AAkIAAAAAADLmUVkAAAAANUxCX/+Qf24CosH6wAAAAkAAgAAAAAAAAABAAAH6/24AAAK7P5B/u0KiwABAAAAAAAAAAAAAAAAAAABcQABAAABcQB8AAcAWAAEAAEAAAAAAAoAAAIAAXMAAgABAAMEggGQAAUAAAWaBTMAAAEfBZoFMwAAA9EAZgIAAAACAAUDAAAAAgAEoAAAb0AAAEoAAAAAAAAAAEFPRUYAQAAg+wIH6/24AAAH6wJIAAAAkwAAAAAEOwWaAAAAIAAEApoAAAAAAAACmgAAApoAAARAAEsG7gBPBV8AfANrAE0DawAOBFcAhARQAFMEkgB0BUYAVQdnAHIC1gBHBgUAagXBAIYGMABsBgEAgAX0AHoFIQBDBfgAagX0AFUEuwCIBVMATwatAHwGeQCVBfoAhAaWAJUGCwCRBegAlwaWAIQGywCZAjYAmQXgACgGggCZBeQAlwezAJcGxwCXBuIAagZzAJMG4gBqBp4AlwY6AGAFzwAoBqsAegYu//sIBQBHBkwAEAZAAFMFtQBEAuwAhgVGAFEC7ABHBToANQWGAHQE7gBkBZoAbgU6AGQEZwB+BYYAZAWgAH4CAQB+AgH+QQWIAH4CggB0Bv0AegWSAHoFdQBkBYYAdAWGAGQEXQB0BMsAVQSCADIFkgBqBWcAegdOAHoFkAAHBaAAdATPAEYDZQAWAhUAiANlAEcDXwBPBBUAZAcJAEsGcQB2BkQAfgbkAFkGcQBwBbMAkQTSAGYE4gB2BXUAVQXBAFkEcQBkBz4AaAOCAGIEdQBmBHUAZgQJANwECQEBBHUBGAR1AOEEdQCjBHUA6wR1ALEB3ABBAdgATwNMAEEDSABPAc0ALgM+AC4EdQDEBHUBYgR1ANIC2gBLBKYAfgSgAGoCqwCNBHUBugGkAFEBzQAuAgMAPQHyAHgB/wBoBUoAUQYPAGAGUABgAeoAVwdZAHIDFwB8Az4AbAMPAGAF1gBHAbMAYAQ0AEcENABmA3EAHgVzAH4FEQBuBUoAfgqMAHwItwA1COwAZArsAGoHjABVBZwAfAWcAHwGbQB0BY4AWwWSAEEFkgBZBBsAdAdOAHQDfgBBA34AWQQTABwJ2ABPAgEAfgWQAH4CmgAABVsAjwG1AFkGjAA3A60AOQY6AGAEywBVBkAAUwWgAHQFtQBEBM8ARgatAHwGrQB8BfoAhAYLAJEGxwCXBuIAagarAHoFOgA1BToANQU6ADUFOgA1BToANQU6ADUE7gBkBToAZAU6AGQFOgBkBToAZAIBAH4CAf74AgH/LgIB/5oFkgB6BXUAZAV1AGQFdQBkBXUAZAV1AGQFkgBqBZIAagWSAGoFkgBqBq0AfAatAHwG4gBqBaAAdAZAAFMGrQB8BgsAkQatAHwGCwCRBgsAkQI2AJkCNv9IAjb/tAI2/wkG4gBqBuIAagbiAGoGqwB6BqsAegarAHoHgAAsBYYAZAZ+AJkEdQBRBiwAfgatAH4BfgAqAYgAOQGGAEUEkgB0A4IARwIB/kEGrQB8Bq0AfAatAHwF+gCEBfoAhAX6AIQF+gCEBpYAlQeAACwGCwCRBgsAkQYLAJEGCwCRBgsAkQaWAIQGlgCEBpYAhAaWAIQGywCZBssAMgI2/5MCNv/NAjb/hQI2ACoCNgCZB9oAmQXgACgGggCZBeQAlwXkAJcG2ACXBeQAlwbHAJcGxwCXBscAlwbHAJcG4gBqBuIAagbiAGoGngCXBp4AlwaeAJcGOgBgBjoAYAY6AGAFzwAoBc8AKAXPACgGqwB6BqsAegarAHoGqwB6BqsAegarAHoIBQBHCAUARwgFAEcIBQBHBkAAUwZAAFMFtQBEBbUARAqMAHwG5ABZBToANQU6ADUFOgA1BO4AZATuAGQE7gBkBO4AZAbPAGUFhgBkBToAZAU6AGQFOgBkBToAZAU6AGQFhgBkBYYAZAWGAGQFhgBkBaAAfgWg/+cCAf95AgH/swIB/2sCAQAU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AyZTWLBAG7AAWYqKILADJlNYIyGwgIqKG4ojWSCwAyZTWCMhuADAioobiiNZILADJlNYIyG4AQCKihuKI1kgsAMmU1gjIbgBQIqKG4ojWSC4AAMmU1iwAyVFuAGAUFgjIbgBgCMhG7ADJUUjISMhWRshWUQtuAAJLEtTWEVEGyEhWS0AuAAAKwAqAAAAAAAAAAAAAAAAAEYAwAESAUIBcgGUAa4BvAHMAj4CTgKKArgC1AMMA1gDdAPeBCwEQASKBLwFDgU4BXIFngW+BfwGFgYkBkAGYAZ2BqwG1AcaB1YHogfgCCIINghgCH4ItAjWCQwJNAlYCWYJiAnECf4KJgpeCpwKwAsICywLQgtmC4oLpAvcDAQMQgx8DLQM0g0UDS4NVg1+Db4N4A4SDjoOhg6UDuQO/A8mD2AP3hBAEJwQ2hECEUYRiBHUEgQSSBKGEqYSuhLOEwATLBNcE3YTnhOsE9wT6hP4FA4UJBQyFEgUWBRoFKQU2hT4FQgVKhVMFWwVehWiFdwWBBZOFooWuhbKFxAXNhdgF3YXrBe6F9YX9BgQGB4YThjCGQgZcBnaGjoaihsEG4YbxBwKHDocahx4HIYcohy+HM4dfB2KHcIdwh4cHj4eZB6OHpoeph6yHr4eyh7WHuIe7h9CH04fWh9mH3Iffh+KH5Yfoh+uH7ogDCAYICQgMCA8IEggVCBgIGwgeCCEIJAgnCCoILQgwCDMINgg5CDwIPwhCCEUISAhLCE4IUQhUCFcIWghdCGAIYwhmCGkIbAhvCHIIdQiGiJqIqgi/CMsI2AjbiN8I4ojmCPoJAQkECQcJHAkfCSIJJQkoCSsJLQkwCTMJNglJiUyJT4lSiVWJWIlbiWYJaQlsCW8Jewl+CYEJhAmHCYoJjQmQCZMJlgmZCZwJp4mqia2JsImzibaJuYm8ib+J2gndCeAJ6AnrCe4J8Qn0CfcKCgoNChAKEwoWChkKHAofCiIKJQooCisKLgpFikiKS4pOilGKVIpkimeKaoptioWKiIqLio6KkYqUipeKowqmCqkKrAq5iryKv4rCisuKzorRitSK14rait2K4IrjivGK9Ir3ivqK/YsAiwOLBosJiyQLJwsqCzOLNos5izyLP4tCi1ULWAtbC14LYQtkC2cLagttC3ALcwt6i4ALg4uNgABAEsAAAP1BZoAMgAAARQOBCMV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ACQALP5eACQALf9kACQALv6aACQAL/9iACQAMf7TACQANP7+ACQASf7jACQASv+YACQAa/9EACQAbP9CACQAbf9EACQAbv9CACQAhf81ACQAh/81ACQAlf8XACQAmf+BACQAmv+BACQAo/97ACQAqP7TACQAsv9kACQAyP+YACQAyf+YACQAyv+YACQAy/+YACQA0P7TACQA3f9kACQA3v9kACQA3/9kACQBGf5eACQBGv5eACQBG/5eACQBHP9kACQBHf9kACQBHv9kACQBH/9kACQBIP9kACQBIf9kACQBIv9iACQBI/9iACQBJP9iACQBJf9iACQBJv7TACQBJ/7TACQBWv7jACQBXP7jACQBXf+YACQBXv+YACQBX/+YACQBYP+YACQBYf+YACQBYv+YACcACP95ACgACP99ACgADP93ACgAIv8SACgAMP+cACgAb/+PACgAcP+PACgAef+PACgAev+PACgA4/+PACgBBv8SACsACP+eACsBWv+iACsBXP+iACwAC/+BACwADP83ACwAGf+aACwAIv5eACwANv6oACwAOP8XACwAOf8XACwAOv8XACwAPP8ZACwAQv9mACwAQ/9mACwARP8XACwARf8KACwARv8XACwAR/8KACwASP8xACwASf+iACwASv+RACwAS/+RACwATP+TACwATf91ACwATv+YACwAT/9vACwAXf8XACwAb/9vACwAcP9vACwAef9vACwAev9vACwAjf+LACwAjv+aACwAj/6oACwAkP8XACwAl/9KACwAmP+PACwAmf+BACwAmv+BACwAm/9KACwAnP+PACwAp/8xACwAqf+YACwAq/9vACwArP+aACwArf+aACwAs/6oACwAtP6oACwAtf6oACwAtv6oACwAt/6oACwAuP6oACwAuf8XACwAuv8XACwAu/8XACwAvP8XACwAvf8XACwAwv9mACwAw/8XACwAxP8XACwAxf8XACwAxv8XACwAx/8XACwAyP+RACwAyf+RACwAyv+RACwAy/+RACwAzP+aACwAzf+aACwAz/+YACwA0f+aACwA0/+aACwA4f8XACwA4/9vACwA7P+aACwA7f+aACwA7v+aACwBBv5eACwBKv+aACwBLP6oACwBLf6oACwBLv6oACwBL/8XACwBMP8XACwBMf8XACwBMv8XACwBM/8XACwBNf8XACwBNv8XACwBN/8XACwBOP8XACwBOf8XACwBOv8ZACwBO/8ZACwBPP8ZACwBPf8ZACwBTP9mACwBTf9mACwBTv9mACwBUP9mACwBUf8XACwBUv8XACwBU/8XACwBVP8KACwBVf8KACwBVv8KACwBV/8xACwBWP8xACwBWf8xACwBXf+RACwBXv+RACwBX/+RACwBYP+RACwBYf+RACwBYv+RACwBY/+TACwBZP+TACwBZf+TACwBZv+TACwBZ/+YACwBaP+YACwBaf9vACwBav9vACwBa/6oACwBbP8XAC4ADP8vAC4AIv6RAC4ANv8KAC4AOP9vAC4AOf9vAC4AOv9vAC4APP9vAC4AQv+FAC4AQ/+FAC4ARP9vAC4ARf9xAC4ARv9vAC4AR/9xAC4ASP9zAC4AXf9vAC4Ab/9tAC4AcP9tAC4Aef9tAC4Aev9tAC4Aj/8KAC4AkP9vAC4Al/+RAC4Am/+RAC4Ap/9zAC4As/8KAC4AtP8KAC4Atf8KAC4Atv8KAC4At/8KAC4AuP8KAC4Auf9vAC4Auv9vAC4Au/9vAC4AvP9vAC4Avf9vAC4Awv+FAC4Aw/9vAC4AxP9vAC4Axf9vAC4Axv9vAC4Ax/9vAC4A4f9vAC4A4/9tAC4BBv6RAC4BLP8KAC4BLf8KAC4BLv8KAC4BL/9vAC4BMP9vAC4BMf9vAC4BMv9vAC4BM/9vAC4BNf9vAC4BNv9vAC4BN/9vAC4BOP9vAC4BOf9vAC4BOv9vAC4BO/9vAC4BPP9vAC4BPf9vAC4BTP+FAC4BTf+FAC4BTv+FAC4BUP+FAC4BUf9vAC4BUv9vAC4BU/9vAC4BVP9xAC4BVf9xAC4BVv9xAC4BV/9zAC4BWP9zAC4BWf9zAC4Ba/8KAC4BbP9vAC8AIv9iAC8BBv9iADAAC/+eADAASf+aADAAk/+iADAAmf+eADAAmv+eADABWv+aADABXP+aADEADP9WADEAIv7TADEANv93ADEAb/9gADEAcP9gADEAef9gADEAev9gADEAj/93ADEAs/93ADEAtP93ADEAtf93ADEAtv93ADEAt/93ADEAuP93ADEA4/9gADEBBv7TADEBLP93ADEBLf93ADEBLv93ADEBa/93ADMAPwHZADMA6wHZADMBRQHZADQAEf9kADQALP83ADQALf+eADQALv8xADQAMf9WADQASf+WADQAbP9gADQAbv9gADQAhf9WADQAh/9WADQAqP9WADQAsv+eADQA0P9WADQA3f+eADQA3v+eADQA3/+eADQBGf83ADQBGv83ADQBG/83ADQBHP+eADQBHf+eADQBHv+eADQBH/+eADQBIP+eADQBIf+eADQBJv9WADQBJ/9WADQBWv+WADQBXP+WADYACP+LADYANP+JADcACP+LADcANP+HADoACP9mADoANP+cADoAUv+iADsADP9WADsANv9UADsAb/9QADsAcP9QADsAef9QADsAev9QADsAj/9UADsAs/9UADsAtP9UADsAtf9UADsAtv9UADsAt/9UADsAuP9UADsA4/9QADsBLP9UADsBLf9UADsBLv9UADsBa/9UADwANP+DAD0ANP+BAEAAl/+TAEAAm/+TAEEAo/8tAEIANP+DAEMANP95AEQACP+LAEQANP+HAEUACP+LAEUANP+HAEYANP+DAEcACP91AEcADP9WAEcANv9UAEcAb/9QAEcAcP9QAEcAef9QAEcAev9QAEcAj/9UAEcAs/9UAEcAtP9UAEcAtf9UAEcAtv9UAEcAt/9UAEcAuP9UAEcA4/9QAEcBLP9UAEcBLf9UAEcBLv9UAEcBa/9UAEgACP+aAEgANP+LAEkACP93AEkADP9vAEkANv+BAEkAb/+LAEkAcP+LAEkAef+LAEkAev+LAEkAj/+BAEkAs/+BAEkAtP+BAEkAtf+BAEkAtv+BAEkAt/+BAEkAuP+BAEkA4/+LAEkBLP+BAEkBLf+BAEkBLv+BAEkBa/+BAEoACP+gAEsADP9kAEsAb/95AEsAcP95AEsAef95AEsAev95AEsA4/95AEwADP9YAEwAb/9zAEwAcP9zAEwAef9zAEwAev9zAEwA4/9zAE0Al/+YAE0Am/+YAFAAPwHbAFAA6wHbAFABRQHbAFEAPwGcAFEA6wGcAFEBRQGcAFIACP+YAFUAFP+aAFcACP+cAFcAGP+RAFcALP85AFcALv89AFcAMf99AFcANP9vAFcASf+YAFcAlf+eAFcAqP99AFcA0P99AFcBGf85AFcBGv85AFcBG/85AFcBJv99AFcBJ/99AFcBWv+YAFcBXP+YAFgACP95AF0ACP+LAF0ANP+HAGsAIv8tAGsANv+eAGsAb/8ZAGsAcP8ZAGsAef8ZAGsAev8ZAGsAj/+eAGsAs/+eAGsAtP+eAGsAtf+eAGsAtv+eAGsAt/+eAGsAuP+eAGsA4/8ZAGsBBv8tAGsBLP+eAGsBLf+eAGsBLv+eAGsBa/+eAGwADP9KAGwAIv8jAGwANv+YAGwAb/8OAGwAcP8OAGwAef8OAGwAev8OAGwAj/+YAGwAs/+YAGwAtP+YAGwAtf+YAGwAtv+YAGwAt/+YAGwAuP+YAGwA4/8OAGwBBv8jAGwBLP+YAGwBLf+YAGwBLv+YAGwBa/+YAG0AIv8tAG0ANv+eAG0Ab/8ZAG0AcP8ZAG0Aef8ZAG0Aev8ZAG0Aj/+eAG0As/+eAG0AtP+eAG0Atf+eAG0Atv+eAG0At/+eAG0AuP+eAG0A4/8ZAG0BBv8tAG0BLP+eAG0BLf+eAG0BLv+eAG0Ba/+eAG4ADP9KAG4AIv8jAG4ANv+YAG4Ab/8OAG4AcP8OAG4Aef8OAG4Aev8OAG4Aj/+YAG4As/+YAG4AtP+YAG4Atf+YAG4Atv+YAG4At/+YAG4AuP+YAG4A4/8OAG4BBv8jAG4BLP+YAG4BLf+YAG4BLv+YAG4Ba/+YAG8AC/91AG8AEf95AG8ALP9vAG8ALv9vAG8AMf9gAG8Aa/8xAG8AbP8tAG8Abf8xAG8Abv8tAG8Ahf8hAG8Ah/8hAG8Amf91AG8Amv91AG8AqP9gAG8A0P9gAG8BGf9vAG8BGv9vAG8BG/9vAG8BJv9gAG8BJ/9gAHAAC/91AHAAEf95AHAALP9vAHAALv9vAHAAMf9gAHAAa/8xAHAAbP8tAHAAbf8xAHAAbv8tAHAAhf8hAHAAh/8hAHAAmf91AHAAmv91AHAAqP9gAHAA0P9gAHABGf9vAHABGv9vAHABG/9vAHABJv9gAHABJ/9gAHkAC/91AHkAEf95AHkALP9vAHkALv9vAHkAMf9gAHkAa/8xAHkAbP8tAHkAbf8xAHkAbv8tAHkAhf8hAHkAh/8hAHkAmf91AHkAmv91AHkAqP9gAHkA0P9gAHkBGf9vAHkBGv9vAHkBG/9vAHkBJv9gAHkBJ/9gAHoAC/91AHoAEf95AHoALP9vAHoALv9vAHoAMf9gAHoAa/8xAHoAbP8tAHoAbf8xAHoAbv8tAHoAhf8hAHoAh/8hAHoAmf91AHoAmv91AHoAqP9gAHoA0P9gAHoBGf9vAHoBGv9vAHoBG/9vAHoBJv9gAHoBJ/9gAH0ALP+HAH0APwG6AH0A6wG6AH0BGf+HAH0BGv+HAH0BG/+HAH0BRQG6AH4AGf+YAH4AGv+TAH4AG/9/AH4AHP+TAH4AHf99AH4AHv+TAH4AH/9/AH4AIP+TAH4AIf+TAH4AI/+TAH4AJP+TAH4AJf+TAH4AJv+TAH4AJ/9/AH4AKP+WAH4AKf9/AH4AKv+TAH4AK/+eAH4ALP8SAH4ALf93AH4ALv89AH4AL/9kAH4AMf91AH4AMv+PAH4ANv+DAH4AN/99AH4AOP99AH4AOf99AH4AOv99AH4AO/+YAH4APP+DAH4APf+YAH4APv+YAH4APwHZAH4AQP+YAH4AQf99AH4AQv+YAH4AQ/+YAH4ARP99AH4ARv99AH4AR/+aAH4ASP+eAH4ASf9/AH4ASv99AH4AS/+DAH4ATP+BAH4ATv+BAH4AT/+JAH4AV/+YAH4AWP9/AH4AXf99AH4Ajv+YAH4Aj/+DAH4AkP99AH4Akf9/AH4An/+YAH4ApP+TAH4Apf99AH4Apv+eAH4Ap/+eAH4AqP91AH4Aqf+BAH4Aqv+PAH4Aq/+JAH4ArP+YAH4Arf+YAH4Arv9/AH4Ar/99AH4AsP+TAH4Asf9/AH4Asv93AH4As/+DAH4AtP+DAH4Atf+DAH4Atv+DAH4At/+DAH4AuP+DAH4Auf99AH4Auv99AH4Au/99AH4AvP99AH4Avf99AH4Avv+YAH4Av/+YAH4AwP+YAH4Awf+YAH4Awv+YAH4Aw/99AH4AxP99AH4Axf99AH4Axv99AH4Ax/99AH4AyP99AH4Ayf99AH4Ayv99AH4Ay/99AH4AzP+YAH4Azf+YAH4Azv9/AH4Az/+BAH4A0P91AH4A0f+YAH4A0v99AH4A0/+YAH4A1P99AH4A1f99AH4A1v+TAH4A1/+TAH4A2P+TAH4A2f+TAH4A2v9/AH4A2/9/AH4A3P9/AH4A3f93AH4A3v93AH4A3/93AH4A4P+TAH4A4f99AH4A6wHZAH4A7P+YAH4A7f+YAH4A7v+YAH4A7/9/AH4A8P9/AH4A8f9/AH4A8v9/AH4A8/+TAH4A9P+TAH4A9f99AH4A9v99AH4A9/99AH4A+P99AH4A+f99AH4A+v9/AH4A+/9/AH4A/P9/AH4A/f9/AH4A/v+TAH4A//+TAH4BAP+TAH4BAf+TAH4BAv+TAH4BA/+TAH4BBP+TAH4BB/+TAH4BCP+TAH4BCf+TAH4BDP+TAH4BDf+TAH4BDv+TAH4BD/+TAH4BEP9/AH4BEf9/AH4BEv9/AH4BE/+TAH4BFP+TAH4BFf+TAH4BFv+eAH4BF/+eAH4BGP+eAH4BGf8SAH4BGv8SAH4BG/8SAH4BHP93AH4BHf93AH4BHv93AH4BH/93AH4BIP93AH4BIf93AH4BIv9kAH4BI/9kAH4BJP9kAH4BJf9kAH4BJv91AH4BJ/91AH4BKP+PAH4BKf+PAH4BKv+YAH4BK/9/AH4BLP+DAH4BLf+DAH4BLv+DAH4BL/99AH4BMP99AH4BMf99AH4BMv99AH4BM/99AH4BNf99AH4BNv99AH4BN/99AH4BOP99AH4BOf99AH4BOv+DAH4BO/+DAH4BPP+DAH4BPf+DAH4BPv+YAH4BP/+YAH4BQP+YAH4BQf+YAH4BQv+YAH4BQ/+YAH4BRQHZAH4BRv+YAH4BR/+YAH4BSP99AH4BSf99AH4BTP+YAH4BTf+YAH4BTv+YAH4BUP+YAH4BUf99AH4BUv99AH4BU/99AH4BVP+aAH4BVf+aAH4BVv+aAH4BV/+eAH4BWP+eAH4BWf+eAH4BWv9/AH4BXP9/AH4BXf99AH4BXv99AH4BX/99AH4BYP99AH4BYf99AH4BYv99AH4BY/+BAH4BZP+BAH4BZf+BAH4BZv+BAH4BZ/+BAH4BaP+BAH4Baf+JAH4Bav+JAH4Ba/+DAH4BbP99AIUADP9WAIUAIv81AIUANv+iAIUAb/8hAIUAcP8hAIUAef8hAIUAev8hAIUAj/+iAIUAs/+iAIUAtf+iAIUAtv+iAIUAt/+iAIUAuP+iAIUA4/8hAIUBBv81AIUBLP+iAIUBa/+iAIcADP9WAIcAIv81AIcAb/8hAIcAcP8hAIcAef8hAIcAev8hAIcAj/+iAIcAtv+iAIcA4/8hAIcBBv81AIcBLP+iAIcBLf+iAIcBLv+iAI0ALP+PAI0BGf+PAI0BGv+PAI0BG/+PAJUAIv89AJUBBv89AJcALP+PAJcBGf+PAJcBGv+PAJcBG/+PAJgALP9KAJgALv+RAJgATf+YAJgBGf9KAJgBGv9KAJgBG/9KAJkAIv+BAJkALP+BAJkAMP+eAJkBBv+BAJkBGf+BAJkBGv+BAJkBG/+B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ARkAIv5eARkANv6oARkAOP8XARkAOf8XARkAOv8XARkAPP8ZARkAQv9mARkAQ/9mARkARP8XARkARf8KARkARv8XARkAR/8KARkASP8xARkASf+iARkASv+RARkAS/+RARkATP+TARkATf91ARkATv+YARkAT/9vARkAXf8XARkAb/9vARkAcP9vARkAef9vARkAev9vARkAjf+LARkAjv+aARkAj/6oARkAkP8XARkAl/9KARkAmP+PARkAmf+BARkAmv+BARkAm/9KARkAnP+PARkAp/8xARkAqf+YARkAq/9vARkArP+aARkArf+aARkAs/6oARkAtP6oARkAtf6oARkAtv6oARkAt/6oARkAuP6oARkAuf8XARkAuv8XARkAu/8XARkAvP8XARkAvf8XARkAwv9mARkAw/8XARkAxP8XARkAxf8XARkAxv8XARkAx/8XARkAyP+RARkAyf+RARkAyv+RARkAy/+RARkAzP+aARkAzf+aARkAz/+YARkA0f+aARkA0/+aARkA4f8XARkA4/9vARkA7P+aARkA7f+aARkA7v+aARkBBv5eARkBKv+aARkBLP6oARkBLf6oARkBLv6oARkBL/8XARkBMP8XARkBMf8XARkBMv8XARkBM/8XARkBNf8XARkBNv8XARkBN/8XARkBOP8XARkBOf8XARkBOv8ZARkBO/8ZARkBPP8ZARkBPf8ZARkBTP9mARkBTf9mARkBTv9mARkBUP9mARkBUf8XARkBUv8XARkBU/8XARkBVP8KARkBVf8KARkBVv8KARkBV/8xARkBWP8xARkBWf8xARkBWv+iARkBXP+iARkBXf+RARkBXv+RARkBX/+RARkBYP+RARkBYf+RARkBYv+RARkBY/+TARkBZP+TARkBZf+TARkBZv+TARkBZ/+YARkBaP+YARkBaf9vARkBav9vARkBa/6oARkBbP8XARoAC/+BARoADP83ARoAGf+aARoAIv5eARoANv6oARoAOP8XARoAOf8XARoAOv8XARoAPP8ZARoAQv9mARoAQ/9mARoARP8XARoARf8KARoARv8XARoAR/8KARoASP8xARoASf+iARoASv+RARoAS/+RARoATP+TARoATf91ARoATv+YARoAT/9vARoAXf8XARoAb/9vARoAcP9vARoAef9vARoAev9vARoAjf+LARoAjv+aARoAj/6oARoAkP8XARoAl/9KARoAmP+PARoAmf+BARoAmv+BARoAm/9KARoAnP+PARoAp/8xARoAqf+YARoAq/9vARoArP+aARoArf+aARoAs/6oARoAtP6oARoAtf6oARoAtv6oARoAt/6oARoAuP6oARoAuf8XARoAuv8XARoAu/8XARoAvP8XARoAvf8XARoAwv9mARoAw/8XARoAxP8XARoAxf8XARoAxv8XARoAx/8XARoAyP+RARoAyf+RARoAyv+RARoAy/+RARoAzP+aARoAzf+aARoAz/+YARoA0f+aARoA0/+aARoA4f8XARoA4/9vARoA7P+aARoA7f+aARoA7v+aARoBBv5eARoBKv+aARoBLP6oARoBLf6oARoBLv6oARoBL/8XARoBMP8XARoBMf8XARoBMv8XARoBM/8XARoBNf8XARoBNv8XARoBN/8XARoBOP8XARoBOf8XARoBOv8ZARoBO/8ZARoBPP8ZARoBPf8ZARoBTP9mARoBTf9mARoBTv9mARoBUP9mARoBUf8XARoBUv8XARoBU/8XARoBVP8KARoBVf8KARoBVv8KARoBV/8xARoBWP8xARoBWf8xARoBWv+iARoBXP+iARoBXf+RARoBXv+RARoBX/+RARoBYP+RARoBYf+RARoBYv+RARoBY/+TARoBZP+TARoBZf+TARoBZv+TARoBZ/+YARoBaP+YARoBaf9vARoBav9vARoBa/6oARoBbP8XARsAC/+BARsADP83ARsAGf+aARsAIv5eARsANv6oARsAOP8XARsAOf8XARsAOv8XARsAPP8ZARsAQv9mARsAQ/9mARsARP8XARsARf8KARsARv8XARsAR/8KARsASP8xARsASf+iARsASv+RARsAS/+RARsATP+TARsATf91ARsATv+YARsAT/9vARsAXf8XARsAb/9vARsAcP9vARsAef9vARsAev9vARsAjf+LARsAjv+aARsAj/6oARsAkP8XARsAl/9KARsAmP+PARsAmf+BARsAmv+BARsAm/9KARsAnP+PARsAp/8xARsAqf+YARsAq/9vARsArP+aARsArf+aARsAs/6oARsAtP6oARsAtf6oARsAtv6oARsAt/6oARsAuP6oARsAuf8XARsAuv8XARsAu/8XARsAvP8XARsAvf8XARsAwv9mARsAw/8XARsAxP8XARsAxf8XARsAxv8XARsAx/8XARsAyP+RARsAyf+RARsAyv+RARsAy/+RARsAzP+aARsAzf+aARsAz/+YARsA0f+aARsA0/+aARsA4f8XARsA4/9vARsA7P+aARsA7f+aARsA7v+aARsBBv5eARsBKv+aARsBLP6oARsBLf6oARsBLv6oARsBL/8XARsBMP8XARsBMf8XARsBMv8XARsBM/8XARsBNf8XARsBNv8XARsBN/8XARsBOP8XARsBOf8XARsBOv8ZARsBO/8ZARsBPP8ZARsBPf8ZARsBTP9mARsBTf9mARsBTv9mARsBUP9mARsBUf8XARsBUv8XARsBU/8XARsBVP8KARsBVf8KARsBVv8KARsBV/8xARsBWP8xARsBWf8xARsBWv+iARsBXf+RARsBXv+RARsBX/+RARsBYP+RARsBYf+RARsBYv+RARsBY/+TARsBZP+TARsBZf+TARsBZv+TARsBZ/+YARsBaP+YARsBaf9vARsBav9vARsBa/6oARsBbP8XASIAIv9iASIBBv9iASMAIv9iASMBBv9iASQAIv9iASQBBv9iASUAIv9iASUBBv9iASYADP9WASYAIv7TASYANv93ASYAb/9gASYAcP9gASYAef9gASYAev9gASYAj/93ASYAs/93ASYAtP93ASYAtf93ASYAtv93ASYAt/93ASYAuP93ASYA4/9gASYBBv7TASYBLP93ASYBLf93ASYBLv93ASYBa/93AScADP9WAScAIv7TAScANv93AScAb/9gAScAcP9gAScAef9gAScAev9gAScAj/93AScAs/93AScAtP93AScAtf93AScAtv93AScAt/93AScAuP93AScA4/9gAScBBv7TAScBLP93AScBLf93AScBLv93AScBa/93ASsACP95ASwACP+LASwANP+JAS0ACP+LAS0ANP+JAS4ACP+LAS4ANP+JATUACP9mATUANP+cATYACP9mATYANP+cATcACP9mATcANP+cATcAUv+iATgACP9mATgANP+cATgAUv+iATkACP9mATkANP+cATkAUv+iAToANP+DATsANP+DATwANP+DAT0ANP+DAT4ANP+BAT8ANP+BAUYAl/+TAUYAm/+TAUcAl/+TAUcAm/+TAUgAo/8tAUkAo/8tAUwANP95AU0ANP95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dABpAGcAbQBhAEAAYQBzAHQAaQBnAG0AYQB0AGkAYwAuAGMAbwBtACkALAAgAHcAaQB0AGgAIABSAGUAcwBlAHIAdgBlAGQADQBGAG8AbgB0ACAATgBhAG0AZQAgACIAQQB1AGQAaQBvAHcAaQBkAGUAIgBBAHUAZABpAG8AdwBpAGQAZQBSAGUAZwB1AGwAYQByADEALgAwADAAMwA7AEEATwBFAEYAOwBBAHUAZABpAG8AdwBpAGQAZQAtAFIAZQBnAHUAbABhAHIAQQB1AGQAaQBvAHcAaQBkAGUAIABSAGUAZwB1AGwAYQByAFYAZQByAHMAaQBvAG4AIAAxAC4AMAAwADMAQQB1AGQAaQBvAHcAaQBkAGUALQBSAGUAZwB1AGwAYQByAEEAdQBkAGkAbwB3AGkAZABlACAAaQBzACAAYQAgAHQAcgBhAGQAZQBtAGEAcgBrACAAbwBmACAAQQBzAHQAaQBnAG0AYQB0AGkAYwAuAEEAcwB0AGkAZwBtAGEAdABpAGMAIAAoAEEATwBFAFQASQApAGgAdAB0AHAAOgAvAC8AdwB3AHcALgBhAHMAdABpAGcAbQBhAHQAaQBjAC4AYwBvAG0ALwBUAGgAaQBzACAARgBvAG4AdAAgAFMAbwBmAHQAdwBhAHIAZQAgAGkAcwAgAGwAaQBjAGUAbgBzAGUAZAAgAHUAbgBkAGUAcgAgAHQAaABlACAAUwBJAEwAIABPAHAAZQBuACAARgBvAG4AdAAgAEwAaQBjAGUAbgBzAGUALAANAFYAZQByAHMAaQBvAG4AIAAxAC4AMQAuACAAVABoAGkAcwAgAGwAaQBjAGUAbgBzAGUAIABpAHMAIABhAHYAYQBpAGwAYQBiAGwAZQAgAHcAaQB0AGgAIABhACAARgBBAFEAIABhAHQAOgANAGgAdAB0AHAAOgAvAC8AcwBjAHIAaQBwAHQAcwAuAHMAaQBsAC4AbwByAGcALwBPAEYATABoAHQAdABwADoALwAvAHMAYwByAGkAcAB0AHMALgBzAGkAbAAuAG8AcgBnAC8ATwBGAEwAAAIAAAAAAAD/ZgBmAAAAAAAAAAAAAAAAAAAAAAAAAAABcQAAAQIAAgADAAcACAAJAAsADAANAA4AEAASABMAFAAVABYAFwAYABkAGgAbABwAIAAiACQAJQAmACcAKAApACoAKwAsAC0ALgAvADAAMQAyADMANAA1ADYANwA4ADkAOgA7ADwAPQA+AD8AQABEAEUARgBHAEgASQBKAEsATABNAE4ATwBQAFEAUgBTAFQAVQBWAFcAWABZAFoAWwBcAF0AXgBfAGAAggCEAIUAhgCJAJEAlgCXAJ0AngChAKYAuAEDAMIA2ADhAN4A4ADdAN8A2wEEANkAtgC3ALQAtQDEAMUAQwCNAI4AgwCTAKQAhwDcABEADwAeAB0AowCiAPQA9QDxAPYA8wDyAAUABgAKAB8AIQBBAEIAYQAjAJAAoACxALAAiACKAIsAjACYAKkAqgCyALMAvgC/ALwAxgDXAO4ArACnAQUA4gDjAOQA5QDrAOwA5gDnAGIAYwBkAGUAZgBnAGgAaQBqAGsAbABtAG4AbwBwAHEAcgBzAHQAdQB2AHcAeAB5AHoAewB8AH0AfgB/AIAAgQCtAK4ArwC6ALsAxwDIAMkAygDLAMwAzQDOAM8A0ADRANMA1ADVANYA6QDqAO0AqwDAAMEBBgEHAQgBCQC9AQoBCwEMAQ0A/QEOAQ8A/wEQAREBEgETARQBFQEWARcA+AEYARkBGgEbARwBHQEeAR8BIAEhASIBIwEkASUBJgEnASgBKQEqASsBLAEtAS4BLwEwATEBMgEzAPsBNAE1ATYBNwE4ATkBOgE7ATwBPQE+AT8BQAFBAUIBQwFEAUUBRgFHAUgBSQD+AUoBSwEAAUwBTQFOAU8BUAFRAVIBUwD5AVQBVQFWAVcBWAFZAVoBWwFcAV0BXgFfAWABYQFiAWMBZAFlAWYBZwFoAWkBagFrAWwBbQFuAW8BcAD8AXEBcgFzAXQBdQF2AXcBeAF5AXoBewF8AX0BfgF/AYABgQGCAYMA8ADoAO8ABAUubnVsbARFdXJvBm1hY3Jvbg5wZXJpb2RjZW50ZXJlZAd1bmkwMzI2B3VuaTAzMTIHdW5pMDMxNQd1bmkwMEFECGRvdGxlc3NqB0FtYWNyb24GQWJyZXZlB0FvZ29uZWsLQ2NpcmN1bWZsZXgKQ2RvdGFjY2VudAZEY2Fyb24GRGNyb2F0B0VtYWNyb24GRWJyZXZlCkVkb3RhY2NlbnQHRW9nb25lawZFY2Fyb24LR2NpcmN1bWZsZXgKR2RvdGFjY2VudAxHY29tbWFhY2NlbnQLSGNpcmN1bWZsZXgESGJhcgZJdGlsZGUHSW1hY3JvbgZJYnJldmUHSW9nb25lawpJZG90YWNjZW50AklKC0pjaXJjdW1mbGV4DEtjb21tYWFjY2VudAZMYWN1dGUMTGNvbW1hYWNjZW50BExkb3QGTGNhcm9uBk5hY3V0ZQxOY29tbWFhY2NlbnQGTmNhcm9uA0VuZwdPbWFjcm9uBk9icmV2ZQ1PaHVuZ2FydW1sYXV0BlJhY3V0ZQxSY29tbWFhY2NlbnQGUmNhcm9uBlNhY3V0ZQtTY2lyY3VtZmxleAxUY29tbWFhY2NlbnQGVGNhcm9uBFRiYXIGVXRpbGRlB1VtYWNyb24GVWJyZXZlBVVyaW5nDVVodW5nYXJ1bWxhdXQHVW9nb25lawtXY2lyY3VtZmxleAZXZ3JhdmUGV2FjdXRlCVdkaWVyZXNpcwtZY2lyY3VtZmxleAZZZ3JhdmUGWmFjdXRlClpkb3RhY2NlbnQHQUVhY3V0ZQtPc2xhc2hhY3V0ZQdhbWFjcm9uBmFicmV2ZQdhb2dvbmVrC2NjaXJjdW1mbGV4CmNkb3RhY2NlbnQGZGNhcm9uBmRjcm9hdAdlbWFjcm9uBmVicmV2ZQplZG90YWNjZW50B2VvZ29uZWsGZWNhcm9uC2djaXJjdW1mbGV4Cmdkb3RhY2NlbnQMZ2NvbW1hYWNjZW50C2hjaXJjdW1mbGV4BGhiYXIGaXRpbGRlB2ltYWNyb24GaWJyZXZlB2lvZ29uZWsCaWoLamNpcmN1bWZsZXgMa2NvbW1hYWNjZW50DGtncmVlbmxhbmRpYwZsYWN1dGUMbGNvbW1hYWNjZW50Cmxkb3RhY2NlbnQGbGNhcm9uBm5hY3V0ZQxuY29tbWFhY2NlbnQGbmNhcm9uC25hcG9zdHJvcGhlA2VuZwdvbWFjcm9uBm9icmV2ZQ1vaHVuZ2FydW1sYXV0BnJhY3V0ZQxyY29tbWFhY2NlbnQGcmNhcm9uBnNhY3V0ZQtzY2lyY3VtZmxleAx0Y29tbWFhY2NlbnQGdGNhcm9uBHRiYXIGdXRpbGRlB3VtYWNyb24GdWJyZXZlBXVyaW5nDXVodW5nYXJ1bWxhdXQHdW9nb25lawt3Y2lyY3VtZmxleAZ3Z3JhdmUGd2FjdXRlCXdkaWVyZXNpcwt5Y2lyY3VtZmxleAZ5Z3JhdmUGemFjdXRlCnpkb3RhY2NlbnQHYWVhY3V0ZQtvc2xhc2hhY3V0ZQAAAAMACAACABAAAf//AAMAAQAAAAoAHgAsAAFsYXRuAAgABAAAAAD//wABAAAAAWtlcm4ACAAAAAEAAAABAAQAAgAAAAMADCaGSwwAAVowAAQAAAEZAjwCTgJYAmoCsAK+AsgC0gL4AyIDKAMyA0wDUgOEA7YD/AQuBFQEWgRoBKIExAT2BRQFVgVcBWYFcAWKBeQGSgZUBl4GkAa2BugHAgdAB44HnAgOCFAIpgjUCPIJEAlGCWwJkgmoCbIJ2An2CgwKJgosCjIKUAqaCrQK4gsICy4LRAt2C6wL3gv4DAoMHAxWDGQMhgykDLIMxA0KDTwNYg1oDXYNnA2qDdAODg5MDlYOlA7SDugPDg8UDzoPTA9WD2APcg+ED4oPlA/6EEQQghC4EOYQ9BESETQRQhFQEXIRkBGaEcwR2hIAEiYSTBJyEpgSvhLUEvoTIBNGE2wTchN4E34ThBOyE9gT/hQkFEoUcBSKFKQUvhTYFOYU9BUmFTQVYhVwFY4VnBW6FdgV4hXsFfYWABYyFmQWlhakFrIWwBbyFxgXHhcsFzoXSBdqF4wXrhfQGAIYNBhSGHAYjhisGMoY0BjWGNwY4hjsGPYZABkKGRQZHhkoGUIZnBoCGmgachp8GoYakBrCGvQbJhtAG1obdBuyG/AcLhx8HModGB0mHTQdQh1QHV4dbB2uHfAeMh50HqIe0B7uHwwfPh9kH4ofsB/GH9wf8iAIIBIgOCBeIIQgqiDQIOYg/CESISghQiFcIWIhaCFuIXQheiGYIbYiACJKIngipiLUIwIjKCNOI3QjpiPYJAokQCR2JKwk3iUQJSolRCVeJXglkiWsJb4l0CXiJfQmAiYQJjImVAAEAGz/9gBu//YAhf/1AIf/9QACAA7/8gAU//QABABs/+UAbv/lAIX/5QCH/+UAEQAH/8gADf+7AA7/4QAP/+QAEP/lABH/3gAS/+YAE//CABT/6wAV/8YAFv/MABr/4AAp/74AN//tAEL/1wBQ/8wAV//uAAMACP/IADX/3QBS/9wAAgAO/+kAFP/rAAIADv/gABT/4gAJAAz+wQAN/9cAD//tABP/4gAV/9QAFv/0ACn/2QBC/9AARf/CAAoACP+7AAz/1gAO/+8AFP/vADT/1wA1/9UAUv/UAG//7gBw/+4Anf/bAAEACP/jAAIACP/hADT/7gAGAAj/yAAM/+oANP/qADX/5wBS/+cAnf/tAAEACP/jAAwACP/QAAz/8gAO//MAFP/2ABb/9AA0//AANf/uAFL/7gB0//MAhf/1AIf/9QCd//UADAAI/8wADP/0AA7/5wAU/+cAFv/wADT/4AA1/+kAUv/pAHT/6gCF/+sAh//rAJ3/9gARAAj/2gAK/+AADP+SAA3/7AAP/+8AE//zABX/5AAX//AAKf/rAFT/5ABv/6wAcP+sAIb/0QCZ/9cAmv/XAJ3/mACj/9gADAAI/8YADP/vAA7/6gAU/+wAFv/2ADT/1AA1/+MAUv/jAHT/9QCF//IAh//yAJ3/8QAJAAj/wgAM/+EADv/2ADT/4gA1/94AUv/eAG//9gBw//YAnf/kAAEADv/1AAMACP/dADT/9ABF//sADgAI/8oACf/tAAz/8AAO/+0AEf/2ABT/7gAW//UAGP/rADT/1QA1/+gAUv/oAGv/9wBt//cAlf/vAAgACP/rAA3/9AAp/+sAQv/5AEX/+gCT/+oAmf/jAJr/4wAMAAj/vAAM/9UADv/vABT/8gAY/+8ANP/WADX/1wBF//sAUv/WAG//7QBw/+0Alf/uAAcACP/qACn/8ABC//kARf/6AJP/8wCZ/+8Amv/vABAAA//uAAj/5gAM/7EAFf/2ACn/9wBC/+UARf/ZAG//wABw/8AAjf/0AJf/9ACY/+0Amf/0AJr/9ACb//QAnP/tAAEACP/eAAIACP/gAEX/+wACAAj/4ABF//sABgAI/9gADP/jAEL/+wBF//gAb//4AHD/+AAWAAP/9QAG/+4ACf/lAAwABQAN/9wADgALABP/6gAUAA0AFf/zABgACAAp/9MANAAGADUACwBSAAoAa//0AG3/9ACT/8wAlQAMAJf/7QCZ/8sAmv/LAJv/7QAZAAP/6wAI/+wACf+OAA3/8gAO/+IAEf+tABT/7AAW/+gAGP/DACn/6gA0/4IAN//7AGv/pABs/6MAbf+kAG7/owCF/50Ah/+dAJP/4wCV/44Al//0AJn/wgCa/8IAm//0AKP/vwACAAj/4ABF//sAAgAI/+AARf/7AAwACP++AAz/2AAO//EAFP/2ABj/8gA0/9kANf/ZAEX/+wBS/9gAb//vAHD/7wCV/+8ACQAD/+4ACP/AAAz/vQA0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AJr/9gCb/+gAAwAI/90ANP/0AEX/+wADAAj/3QA0//QARf/7AAgACP/rAA3/9AAp/+sAQv/5AEX/+gCT/+oAmf/jAJr/4wAHAAj/6gAp//AAQv/5AEX/+gCT//MAmf/vAJr/7wACAAj/4ABF//sADAAI/74ADP/YAA7/8QAU//YAGP/yADT/2QA1/9kARf/7AFL/2ABv/+8AcP/vAJX/7wADAAj/3AAM//MARf/7AAkACP/HAAz/8wAY/+AANP/GADX/6ABS/+kAhf/3AIf/9wCV/+AACQAI/8cADP/zABj/4AA0/8YANf/oAFL/6QCF//cAh//3AJX/4AAJAAj/xwAM//MAGP/gADT/xgA1/+gAUv/pAIX/9wCH//cAlf/gAAkACP/HAAz/8wAY/+AANP/GADX/6ABS/+kAhf/3AIf/9wCV/+AACQAI/8cADP/zABj/4AA0/8YANf/oAFL/6QCF//cAh//3AJX/4AAJAAj/xwAM//MAGP/gADT/xgA1/+gAUv/pAIX/9wCH//cAlf/gAAUACP/dADT/3ACV/+oAl//qAJv/6gAJAAj/tQAM/9MAGP/qADT/zwA1/9QAUv/SAG//1QBw/9UAlf/oAAkACP+1AAz/0wAY/+oANP/PADX/1ABS/9IAb//VAHD/1QCV/+gACQAI/7UADP/TABj/6gA0/88ANf/UAFL/0gBv/9UAcP/VAJX/6AAJAAj/tQAM/9MAGP/qADT/zwA1/9QAUv/SAG//1QBw/9UAlf/oAAEACP/uAAEACP/uAAEACP/uAAEACP/uAAsACP/YAAn/9AAY/9MANP++AGv/9wBs//UAbf/3AG7/9QCF/+4Ah//uAJX/2AAJAAj/xwAM//IAGP/fADT/xQA1/+kAUv/pAIX/9gCH//YAlf/fAAkACP/HAAz/8gAY/98ANP/FADX/6QBS/+kAhf/2AIf/9gCV/98ACQAI/8cADP/yABj/3wA0/8UANf/pAFL/6QCF//YAh//2AJX/3wAJAAj/xwAM//IAGP/fADT/xQA1/+kAUv/pAIX/9gCH//YAlf/fAAkACP/HAAz/8gAY/98ANP/FADX/6QBS/+kAhf/2AIf/9gCV/98ABgAI/9EAGP/yADT/1wA1//QAUv/0AJX/6AAGAAj/0QAY//IANP/XADX/9ABS//QAlf/oAAYACP/RABj/8gA0/9cANf/0AFL/9ACV/+gABgAI/9EAGP/yADT/1wA1//QAUv/0AJX/6AADAAj/3QA0//QARf/7AAMACP/dADT/9ABF//sADAAI/74ADP/YAA7/8QAU//YAGP/yADT/2QA1/9kARf/7AFL/2ABv/+8AcP/vAJX/7wADABj/8QA0/9YAlf/oAAsAA//vAAj/3wAM/60AD//2ABX/9gBC//gARf/vAG//sgBw/7IAl//xAJv/8QADAAj/3QA0//QARf/7AAcACP/qACn/8ABC//kARf/6AJP/8wCZ/+8Amv/vAAMACP/dADT/9ABF//sABwAI/+oAKf/wAEL/+QBF//oAk//zAJn/7wCa/+8ABwAI/+oAKf/wAEL/+QBF//oAk//zAJn/7wCa/+8AAgAI/+AARf/7AAIACP/gAEX/+wACAAj/4ABF//sAAgAI/+AARf/7AAwACP++AAz/2AAO//EAFP/2ABj/8gA0/9kANf/ZAEX/+wBS/9gAb//vAHD/7wCV/+8ADAAI/74ADP/YAA7/8QAU//YAGP/yADT/2QA1/9kARf/7AFL/2ABv/+8AcP/vAJX/7wAMAAj/vgAM/9gADv/xABT/9gAY//IANP/ZADX/2QBF//sAUv/YAG//7wBw/+8Alf/vAAMACP/cAAz/8wBF//sAAwAI/9wADP/zAEX/+wADAAj/3AAM//MARf/7AAwACP+8AAz/1QAO/+8AFP/yABj/7wA0/9YANf/XAEX/+wBS/9YAb//tAHD/7QCV/+4ACQAI/8cADP/yABj/3wA0/8UANf/pAFL/6QCF//YAh//2AJX/3wABAAj/7gADAAj/3QA0//QARf/7AAMACP/dADT/9ABF//sAAwAI/90ANP/0AEX/+wAIAAj/6wAN//QAKf/rAEL/+QBF//oAk//qAJn/4wCa/+MACAAI/+sADf/0ACn/6wBC//kARf/6AJP/6gCZ/+MAmv/jAAgACP/rAA3/9AAp/+sAQv/5AEX/+gCT/+oAmf/jAJr/4wAIAAj/6wAN//QAKf/rAEL/+QBF//oAk//qAJn/4wCa/+MADAAI/7wADP/VAA7/7wAU//IAGP/vADT/1gA1/9cARf/7AFL/1gBv/+0AcP/tAJX/7gAMAAj/vAAM/9UADv/vABT/8gAY/+8ANP/WADX/1wBF//sAUv/WAG//7QBw/+0Alf/uAAcACP/qACn/8ABC//kARf/6AJP/8wCZ/+8Amv/vAAcACP/qACn/8ABC//kARf/6AJP/8wCZ/+8Amv/vAAcACP/qACn/8ABC//kARf/6AJP/8wCZ/+8Amv/vAAcACP/qACn/8ABC//kARf/6AJP/8wCZ/+8Amv/vAAcACP/qACn/8ABC//kARf/6AJP/8wCZ/+8Amv/vAAEACP/eAAEACP/eAAEACP/eAAEACP/eAAIACP/gAEX/+wACAAj/4ABF//sAAgAI/+AARf/7AAIACP/gAEX/+wACAAj/4ABF//sAAgAI/+AARf/7AAIACP/gAEX/+wAGAAj/2AAM/+MAQv/7AEX/+ABv//gAcP/4ABYAA//1AAb/7gAJ/+UADAAFAA3/3AAOAAsAE//qABQADQAV//MAGAAIACn/0wA0AAYANQALAFIACgBr//QAbf/0AJP/zACVAAwAl//tAJn/ywCa/8sAm//tABkAA//rAAj/7AAJ/44ADf/yAA7/4gAR/60AFP/sABb/6AAY/8MAKf/qADT/ggA3//sAa/+kAGz/owBt/6QAbv+jAIX/nQCH/50Ak//jAJX/jgCX//QAmf/CAJr/wgCb//QAo/+/ABkAA//rAAj/7AAJ/44ADf/yAA7/4gAR/60AFP/sABb/6AAY/8MAKf/qADT/ggA3//sAa/+kAGz/owBt/6QAbv+jAIX/nQCH/50Ak//jAJX/jgCX//QAmf/CAJr/wgCb//QAo/+/AAIACP/gAEX/+wACAAj/4ABF//sAAgAI/+AARf/7AAIACP/gAEX/+wAMAAj/vgAM/9gADv/xABT/9gAY//IANP/ZADX/2QBF//sAUv/YAG//7wBw/+8Alf/vAAwACP++AAz/2AAO//EAFP/2ABj/8gA0/9kANf/ZAEX/+wBS/9gAb//vAHD/7wCV/+8ADAAI/74ADP/YAA7/8QAU//YAGP/yADT/2QA1/9kARf/7AFL/2ABv/+8AcP/vAJX/7wAGAAP/9QAI/+gAFf/1ADT/7QCX/+4Am//uAAYAA//1AAj/6AAV//UANP/tAJf/7gCb/+4ABgAD//UACP/oABX/9QA0/+0Al//uAJv/7gAPAAP/9gAI/9AACf/wAAz/7wAO//MAFv/2ADT/7wA1//AAUv/wAGv/7gBs//EAbf/uAG7/8QCF//YAh//2AA8AA//2AAj/0AAJ//AADP/vAA7/8wAW//YANP/vADX/8ABS//AAa//uAGz/8QBt/+4Abv/xAIX/9gCH//YADwAD//YACP/QAAn/8AAM/+8ADv/zABb/9gA0/+8ANf/wAFL/8ABr/+4AbP/xAG3/7gBu//EAhf/2AIf/9gATAAP/6gAI/+oADP+eAA3/9AAP//YAFf/uACn/7ABC/7UARf+IAG//uQBw/7kAjf/HAJP/5QCX/6cAmP/JAJn/wgCa/8IAm/+nAJz/yQATAAP/6gAI/+oADP+eAA3/9AAP//YAFf/uACn/7ABC/7UARf+IAG//uQBw/7kAjf/HAJP/5QCX/6cAmP/JAJn/wgCa/8IAm/+nAJz/yQATAAP/6gAI/+oADP+eAA3/9AAP//YAFf/uACn/7ABC/7UARf+IAG//uQBw/7kAjf/HAJP/5QCX/6cAmP/JAJn/wgCa/8IAm/+nAJz/yQADAAj/3AAM//MARf/7AAMACP/cAAz/8wBF//sAAwAI/9wADP/zAEX/+wADAAj/3AAM//MARf/7AAMACP/cAAz/8wBF//sAAwAI/9wADP/zAEX/+wAQAAj/4wAM/9kAD//2ABX/8AAp//UAN//7AEL/7ABF/+kAV//6AG//5ABw/+QAjf/yAJf/7gCZ//MAmv/zAJv/7gAQAAj/4wAM/9kAD//2ABX/8AAp//UAN//7AEL/7ABF/+kAV//6AG//5ABw/+QAjf/yAJf/7gCZ//MAmv/zAJv/7gAQAAj/4wAM/9kAD//2ABX/8AAp//UAN//7AEL/7ABF/+kAV//6AG//5ABw/+QAjf/yAJf/7gCZ//MAmv/zAJv/7gAQAAj/4wAM/9kAD//2ABX/8AAp//UAN//7AEL/7ABF/+kAV//6AG//5ABw/+QAjf/yAJf/7gCZ//MAmv/zAJv/7gALAAP/7wAI/98ADP+tAA//9gAV//YAQv/4AEX/7wBv/7IAcP+yAJf/8QCb//EACwAD/+8ACP/fAAz/rQAP//YAFf/2AEL/+ABF/+8Ab/+yAHD/sgCX//EAm//xAAcACP/qAA3/8gAp//AAQv/7AJP/6QCZ/+IAmv/iAAcACP/qAA3/8gAp//AAQv/7AJP/6QCZ/+IAmv/iAAwACP++AAz/2AAO//EAFP/2ABj/8gA0/9kANf/ZAEX/+wBS/9gAb//vAHD/7wCV/+8ACQAI/8cADP/zABj/4AA0/8YANf/oAFL/6QCF//cAh//3AJX/4AAJAAj/xwAM//MAGP/gADT/xgA1/+gAUv/pAIX/9wCH//cAlf/gAAkACP/HAAz/8wAY/+AANP/GADX/6ABS/+kAhf/3AIf/9wCV/+AABQAI/90ANP/cAJX/6gCX/+oAm//qAAUACP/dADT/3ACV/+oAl//qAJv/6gAFAAj/3QA0/9wAlf/qAJf/6gCb/+oABQAI/90ANP/cAJX/6gCX/+oAm//qAAIACP/tAAz/7QAJAAj/tQAM/9MAGP/qADT/zwA1/9QAUv/SAG//1QBw/9UAlf/oAAkACP+1AAz/0wAY/+oANP/PADX/1ABS/9IAb//VAHD/1QCV/+gACQAI/7UADP/TABj/6gA0/88ANf/UAFL/0gBv/9UAcP/VAJX/6AAJAAj/tQAM/9MAGP/qADT/zwA1/9QAUv/SAG//1QBw/9UAlf/oAAkACP+1AAz/0wAY/+oANP/PADX/1ABS/9IAb//VAHD/1QCV/+gABQAY/90ANP/DAIX/9QCH//UAlf/eAAUAGP/dADT/wwCF//UAh//1AJX/3gAFABj/3QA0/8MAhf/1AIf/9QCV/94ABQAY/90ANP/DAIX/9QCH//UAlf/eAAYACP/YABj/2wA0/8IAhf/yAIf/8gCV/9sABgAI/9gAGP/bADT/wgCF//IAh//yAJX/2wABAAj/7gABAAj/7gABAAj/7gABAAj/7gABAAj/7gAHAAj/7wA0/+sAlf/0AJf/ywCZ/9wAmv/cAJv/ywAHAAj/7wA0/+sAlf/0AJf/ywCZ/9wAmv/cAJv/ywASAAP/8wAI/+wACf/dABj/5gA0/+gAa//tAGz/7QBt/+0Abv/tAIX/7QCH/+0Ak//uAJX/7gCX/+sAmf/pAJr/6QCb/+sAo/+ZABIAA//zAAj/7AAJ/90AGP/mADT/6ABr/+0AbP/tAG3/7QBu/+0Ahf/tAIf/7QCT/+4Alf/uAJf/6wCZ/+kAmv/pAJv/6wCj/5kACwAI/9gACf/0ABj/0wA0/74Aa//3AGz/9QBt//cAbv/1AIX/7gCH/+4Alf/YAAsACP/YAAn/9AAY/9MANP++AGv/9wBs//UAbf/3AG7/9QCF/+4Ah//uAJX/2AALAAj/2AAJ//QAGP/TADT/vgBr//cAbP/1AG3/9wBu//UAhf/uAIf/7gCV/9gACwAI/9gACf/0ABj/0wA0/74Aa//3AGz/9QBt//cAbv/1AIX/7gCH/+4Alf/YAAkACP/HAAz/8gAY/98ANP/FADX/6QBS/+kAhf/2AIf/9gCV/98ACQAI/8cADP/yABj/3wA0/8UANf/pAFL/6QCF//YAh//2AJX/3wAJAAj/xwAM//IAGP/fADT/xQA1/+kAUv/pAIX/9gCH//YAlf/fAAwAA//wAAj/vAAM/60ANP/nADX/2wBF//oAUv/bAG//qgBw/6oAlf/yAJf/1gCb/9YADAAD//AACP+8AAz/rQA0/+cANf/bAEX/+gBS/9sAb/+qAHD/qgCV//IAl//WAJv/1gAMAAP/8AAI/7wADP+tADT/5wA1/9sARf/6AFL/2wBv/6oAcP+qAJX/8gCX/9YAm//WAA0ACP/OAAn/7QAY/+EANP/HADX/8QBS//EAbP/4AG7/+ACF//QAh//0AJX/2QCZ//gAmv/4AA0ACP/OAAn/7QAY/+EANP/HADX/8QBS//EAbP/4AG7/+ACF//QAh//0AJX/2QCZ//gAmv/4AA0ACP/OAAn/7QAY/+EANP/HADX/8QBS//EAbP/4AG7/+ACF//QAh//0AJX/2QCZ//gAmv/4AAwAA//wAAj/vQAM/7kANP/nADX/3QBF//oAUv/dAG//xwBw/8cAlf/wAJf/1wCb/9cADAAD//AACP+9AAz/uQA0/+cANf/dAEX/+gBS/90Ab//HAHD/xwCV//AAl//XAJv/1wAGAAj/0QAY//IANP/XADX/9ABS//QAlf/oAAYACP/RABj/8gA0/9cANf/0AFL/9ACV/+gABgAI/9EAGP/yADT/1wA1//QAUv/0AJX/6AAGAAj/0QAY//IANP/XADX/9ABS//QAlf/oAAYACP/RABj/8gA0/9cANf/0AFL/9ACV/+gABgAI/9EAGP/yADT/1wA1//QAUv/0AJX/6AAEAAP/6gAM/64Ab/+7AHD/uwAEAAP/6gAM/64Ab/+7AHD/uwAEAAP/6gAM/64Ab/+7AHD/uwAEAAP/6gAM/64Ab/+7AHD/uwADABj/8QA0/9YAlf/oAAMAGP/xADT/1gCV/+gACAAI/94AGP/1ADT/2QCV/+oAl//oAJn/9gCa//YAm//oAAgACP/eABj/9QA0/9kAlf/qAJf/6ACZ//YAmv/2AJv/6AAJAAj/xwAM//IAGP/fADT/xQA1/+kAUv/pAIX/9gCH//YAlf/fAAE0aAAEAAAALQBkANoBVAUGBVQHqgfoCCYI+Ak6CVAJ7gpUDBoN/A4eDiwOThAUECIReBKqE/QVJhZwF24YbBlqGmgakhq8GvIeqB/CINwhDiFUIZYhrCImIqAjGiMwI6ojvAAdACL/6wAs/+oALv/lADD/9gAx/+8ANv/2AEn/8ABN//YAj//2AKj/7wCz//YAtP/2ALX/9gC2//YAt//2ALj/9gDQ/+8BBv/rARn/6gEa/+oBG//qASb/7wEn/+8BLP/2AS3/9gEu//YBWv/wAVz/8AFr//YAHgAi//UAK//2ACz/3gAu/9gAL//vADD/4wAx/+0AMv/vAEn/7wCm//YAqP/tAKr/7wDQ/+0BBv/1ARb/9gEX//YBGP/2ARn/3gEa/94BG//eASL/7wEj/+8BJP/vASX/7wEm/+0BJ//tASj/7wEp/+8BWv/vAVz/7wDsABn/2gAb/8kAHP/gAB3/0QAe/+AAH//JACD/4AAh/+AAIv/rACP/4AAk/+AAJf/gACb/4AAn/74AKP/ZACr/4AAr/98ALP/qAC3/2AAu//EAL//jADH/3wAy/+kANv/OADj/xwA5/8cAOv/HADv/3QA8/8cAPf/uAD7/7gA/AQUAQP/uAEH/7QBD/9cARP/HAEb/xwBH/9gASP/bAEn/vwBK/8EAS//RAEz/0QBN//EATv/GAE//1wBY/74AXf/HAI7/2gCP/84AkP/HAJH/vgCf/+4ApP/gAKX/7QCm/98Ap//bAKj/3wCp/8YAqv/pAKv/1wCs/9oArf/aAK7/yQCv/9EAsP/gALH/vgCy/9gAs//OALT/zgC1/84Atv/OALf/zgC4/84Auf/HALr/xwC7/8cAvP/HAL3/xwC+/+4Av//uAMD/7gDB/+4Awv/XAMP/xwDE/8cAxf/HAMb/xwDH/8cAyP/BAMn/wQDK/8EAy//BAMz/2gDN/9oAzv++AM//xgDQ/98A0f/aANL/0QDT/9oA1P/RANX/0QDW/+AA1//gANj/4ADZ/+AA2v++ANv/vgDc/74A3f/YAN7/2ADf/9gA4P/gAOH/xwDrAQUA7P/aAO3/2gDu/9oA7//JAPD/yQDx/8kA8v/JAPP/4AD0/+AA9f/RAPb/0QD3/9EA+P/RAPn/0QD6/8kA+//JAPz/yQD9/8kA/v/gAP//4AEA/+ABAf/gAQL/4AED/+ABBP/gAQb/6wEH/+ABCP/gAQn/4AEM/+ABDf/gAQ7/4AEP/+ABEP++ARH/vgES/74BE//gART/4AEV/+ABFv/fARf/3wEY/98BGf/qARr/6gEb/+oBHP/YAR3/2AEe/9gBH//YASD/2AEh/9gBIv/jASP/4wEk/+MBJf/jASb/3wEn/98BKP/pASn/6QEq/9oBK/++ASz/zgEt/84BLv/OAS//xwEw/8cBMf/HATL/xwEz/8cBNf/HATb/xwE3/8cBOP/HATn/xwE6/8cBO//HATz/xwE9/8cBPv/uAT//7gFA/+4BQf/uAUL/7gFD/+4BRQEFAUb/7gFH/+4BSP/tAUn/7QFM/9cBTf/XAU7/1wFQ/9cBUf/HAVL/xwFT/8cBVP/YAVX/2AFW/9gBV//bAVj/2wFZ/9sBWv+/AVz/vwFd/8EBXv/BAV//wQFg/8EBYf/BAWL/wQFj/9EBZP/RAWX/0QFm/9EBZ//GAWj/xgFp/9cBav/XAWv/zgFs/8cAEwAi/44ALAAFADD/6gA2/9oAj//aALP/2gC0/9oAtf/aALb/2gC3/9oAuP/aAQb/jgEZAAUBGgAFARsABQEs/9oBLf/aAS7/2gFr/9oAlQAZ/9AAG//mAB3/9AAf/+YAIv+CACf/2QAo/+QAK//nAC4ADgA2/6kAOP/GADn/xgA6/8YAO//zADz/xQBD/9AARP/GAEb/xgBH/8IASP/KAEn/5wBK/9oAS//XAEz/1wBN/+EATv/ZAE//3gBY/9kAXf/GAI7/0ACP/6kAkP/GAJH/2QCm/+cAp//KAKn/2QCr/94ArP/QAK3/0ACu/+YAr//0ALH/2QCz/6kAtP+pALX/qQC2/6kAt/+pALj/qQC5/8YAuv/GALv/xgC8/8YAvf/GAML/0ADD/8YAxP/GAMX/xgDG/8YAx//GAMj/2gDJ/9oAyv/aAMv/2gDM/9AAzf/QAM7/2QDP/9kA0f/QANL/9ADT/9AA1P/0ANX/9ADa/9kA2//ZANz/2QDh/8YA7P/QAO3/0ADu/9AA7//mAPD/5gDx/+YA8v/mAPX/9AD2//QA9//0APj/9AD5//QA+v/mAPv/5gD8/+YA/f/mAQb/ggEQ/9kBEf/ZARL/2QEW/+cBF//nARj/5wEq/9ABK//ZASz/qQEt/6kBLv+pAS//xgEw/8YBMf/GATL/xgEz/8YBNf/GATb/xgE3/8YBOP/GATn/xgE6/8UBO//FATz/xQE9/8UBTP/QAU3/0AFO/9ABUP/QAVH/xgFS/8YBU//GAVT/wgFV/8IBVv/CAVf/ygFY/8oBWf/KAVr/5wFc/+cBXf/aAV7/2gFf/9oBYP/aAWH/2gFi/9oBY//XAWT/1wFl/9cBZv/XAWf/2QFo/9kBaf/eAWr/3gFr/6kBbP/GAA8AIv/xACz/8gAu/+oAMP/gADL/8gB5/+4Aev/uAKr/8gDj/+4BBv/xARn/8gEa//IBG//yASj/8gEp//IADwAs/+kALv/rAC//8AAx//EAqP/xAND/8QEZ/+kBGv/pARv/6QEi//ABI//wAST/8AEl//ABJv/xASf/8QA0AAv/1wAZ/+MAG//zAB//8wAi/5kAJ//rACj/8gAr//UALAAKAC4ACgBY/+sAef+sAHr/rACO/+MAkf/rAKb/9QCs/+MArf/jAK7/8wCx/+sAzP/jAM3/4wDO/+sA0f/jANP/4wDa/+sA2//rANz/6wDj/6wA7P/jAO3/4wDu/+MA7//zAPD/8wDx//MA8v/zAPr/8wD7//MA/P/zAP3/8wEG/5kBEP/rARH/6wES/+sBFv/1ARf/9QEY//UBGQAKARoACgEbAAoBKv/jASv/6wAQACz/7QAu/+MAL//vADD/9AAx//UAqP/1AND/9QEZ/+0BGv/tARv/7QEi/+8BI//vAST/7wEl/+8BJv/1ASf/9QAFAC7/8gAw/+0Aef/2AHr/9gDj//YAJwAs/+QALf/4AC7/4QAv//IAMP/jADH/7QAy//sASf/hAE3/6ABP//sAqP/tAKr/+wCr//sAsv/4AND/7QDd//gA3v/4AN//+AEZ/+QBGv/kARv/5AEc//gBHf/4AR7/+AEf//gBIP/4ASH/+AEi//IBI//yAST/8gEl//IBJv/tASf/7QEo//sBKf/7AVr/4QFc/+EBaf/7AWr/+wAZACL/6gAs/+wALv/iAC//9AAw/9oAMv/wAEf/+wBN/+gAef/vAHr/7wCq//AA4//vAQb/6gEZ/+wBGv/sARv/7AEi//QBI//0AST/9AEl//QBKP/wASn/8AFU//sBVf/7AVb/+wBxABv/5wAd//MAH//nACf/2QAuABIAMAAJADb/8QA4/+gAOf/oADr/6AA8/+gAPwDnAET/6ABG/+gASf/fAEr/4ABL//QATP/0AE0ACQBO/+cAWP/ZAF3/6ACP//EAkP/oAJH/2QCp/+cArv/nAK//8wCx/9kAs//xALT/8QC1//EAtv/xALf/8QC4//EAuf/oALr/6AC7/+gAvP/oAL3/6ADD/+gAxP/oAMX/6ADG/+gAx//oAMj/4ADJ/+AAyv/gAMv/4ADO/9kAz//nANL/8wDU//MA1f/zANr/2QDb/9kA3P/ZAOH/6ADrAOcA7//nAPD/5wDx/+cA8v/nAPX/8wD2//MA9//zAPj/8wD5//MA+v/nAPv/5wD8/+cA/f/nARD/2QER/9kBEv/ZASv/2QEs//EBLf/xAS7/8QEv/+gBMP/oATH/6AEy/+gBM//oATX/6AE2/+gBN//oATj/6AE5/+gBOv/oATv/6AE8/+gBPf/oAUUA5wFR/+gBUv/oAVP/6AFa/98BXP/fAV3/4AFe/+ABX//gAWD/4AFh/+ABYv/gAWP/9AFk//QBZf/0AWb/9AFn/+cBaP/nAWv/8QFs/+gAeAAb/+UAHf/kAB//5QAn/9gALP+eAC3/0AAu/5sAL//YADH/rQA4//IAOf/yADr/8gA8//IAQf/tAET/8gBG//IASf/MAEr/6wBNAAUATv/uAFj/2ABd//IAkP/yAJH/2ACl/+0AqP+tAKn/7gCu/+UAr//kALH/2ACy/9AAuf/yALr/8gC7//IAvP/yAL3/8gDD//IAxP/yAMX/8gDG//IAx//yAMj/6wDJ/+sAyv/rAMv/6wDO/9gAz//uAND/rQDS/+QA1P/kANX/5ADa/9gA2//YANz/2ADd/9AA3v/QAN//0ADh//IA7//lAPD/5QDx/+UA8v/lAPX/5AD2/+QA9//kAPj/5AD5/+QA+v/lAPv/5QD8/+UA/f/lARD/2AER/9gBEv/YARn/ngEa/54BG/+eARz/0AEd/9ABHv/QAR//0AEg/9ABIf/QASL/2AEj/9gBJP/YASX/2AEm/60BJ/+tASv/2AEv//IBMP/yATH/8gEy//IBM//yATX/8gE2//IBN//yATj/8gE5//IBOv/yATv/8gE8//IBPf/yAUj/7QFJ/+0BUf/yAVL/8gFT//IBWv/MAVz/zAFd/+sBXv/rAV//6wFg/+sBYf/rAWL/6wFn/+4BaP/uAWz/8gAIAEn/+wBN/9wAT//7AKv/+wFa//sBXP/7AWn/+wFq//sAAwBJ//oBWv/6AVz/+gAIAEn/+wBN/9wAT//7AKv/+wFa//sBXP/7AWn/+wFq//sAcQAb/+cAHf/zAB//5wAn/9gALgASADAACAA2//EAOP/pADn/6QA6/+kAPP/oAD8A6ABE/+kARv/pAEn/3gBK/+AAS//0AEz/9ABNAAkATv/nAFj/2ABd/+kAj//xAJD/6QCR/9gAqf/nAK7/5wCv//MAsf/YALP/8QC0//EAtf/xALb/8QC3//EAuP/xALn/6QC6/+kAu//pALz/6QC9/+kAw//pAMT/6QDF/+kAxv/pAMf/6QDI/+AAyf/gAMr/4ADL/+AAzv/YAM//5wDS//MA1P/zANX/8wDa/9gA2//YANz/2ADh/+kA6wDoAO//5wDw/+cA8f/nAPL/5wD1//MA9v/zAPf/8wD4//MA+f/zAPr/5wD7/+cA/P/nAP3/5wEQ/9gBEf/YARL/2AEr/9gBLP/xAS3/8QEu//EBL//pATD/6QEx/+kBMv/pATP/6QE1/+kBNv/pATf/6QE4/+kBOf/pATr/6AE7/+gBPP/oAT3/6AFFAOgBUf/pAVL/6QFT/+kBWv/eAVz/3gFd/+ABXv/gAV//4AFg/+ABYf/gAWL/4AFj//QBZP/0AWX/9AFm//QBZ//nAWj/5wFr//EBbP/pAAMAPwDJAOsAyQFFAMkAVQAL//cAHP/7AB3/+wAe//sAIP/7ACH/+wAj//sAJP/7ACX/+wAm//sAKv/7ACz/nwAt/+4ALv+hAC//2gAw//QAMf/AADL/+gBJ/80ATf/kAE//+wCk//sAqP/AAKr/+gCr//sAr//7ALD/+wCy/+4A0P/AANL/+wDU//sA1f/7ANb/+wDX//sA2P/7ANn/+wDd/+4A3v/uAN//7gDg//sA8//7APT/+wD1//sA9v/7APf/+wD4//sA+f/7AP7/+wD///sBAP/7AQH/+wEC//sBA//7AQT/+wEH//sBCP/7AQn/+wEM//sBDf/7AQ7/+wEP//sBE//7ART/+wEV//sBGf+fARr/nwEb/58BHP/uAR3/7gEe/+4BH//uASD/7gEh/+4BIv/aASP/2gEk/9oBJf/aASb/wAEn/8ABKP/6ASn/+gFa/80BXP/NAWn/+wFq//sATAAZ//UAIv+ZAC4ABwA2/9AAOP/zADn/8wA6//MAPP/yAET/8wBG//MAR//xAEj/+ABd//MAef+PAHr/jwCO//UAj//QAJD/8wCn//gArP/1AK3/9QCz/9AAtP/QALX/0AC2/9AAt//QALj/0AC5//MAuv/zALv/8wC8//MAvf/zAMP/8wDE//MAxf/zAMb/8wDH//MAzP/1AM3/9QDR//UA0//1AOH/8wDj/48A7P/1AO3/9QDu//UBBv+ZASr/9QEs/9ABLf/QAS7/0AEv//MBMP/zATH/8wEy//MBM//zATX/8wE2//MBN//zATj/8wE5//MBOv/yATv/8gE8//IBPf/yAVH/8wFS//MBU//zAVT/8QFV//EBVv/xAVf/+AFY//gBWf/4AWv/0AFs//MAUgAZ//EAIv+UAC4ADQA2/80AOP/tADn/7QA6/+0APP/tAEP/9gBE/+0ARv/tAEf/6wBI//IAXf/tAHn/igB6/4oAjv/xAI//zQCQ/+0Ap//yAKz/8QCt//EAs//NALT/zQC1/80Atv/NALf/zQC4/80Auf/tALr/7QC7/+0AvP/tAL3/7QDC//YAw//tAMT/7QDF/+0Axv/tAMf/7QDM//EAzf/xANH/8QDT//EA4f/tAOP/igDs//EA7f/xAO7/8QEG/5QBKv/xASz/zQEt/80BLv/NAS//7QEw/+0BMf/tATL/7QEz/+0BNf/tATb/7QE3/+0BOP/tATn/7QE6/+0BO//tATz/7QE9/+0BTP/2AU3/9gFO//YBUP/2AVH/7QFS/+0BU//tAVT/6wFV/+sBVv/rAVf/8gFY//IBWf/yAWv/zQFs/+0ATAAZ//UAIv+ZAC4ABwA2/9AAOP/zADn/8wA6//MAPP/yAET/8wBG//MAR//xAEj/+ABd//MAef+PAHr/jwCO//UAj//QAJD/8wCn//gArP/1AK3/9QCz/9AAtP/QALX/0AC2/9AAt//QALj/0AC5//MAuv/zALv/8wC8//MAvf/zAMP/8wDE//MAxf/zAMb/8wDH//MAzP/1AM3/9QDR//UA0//1AOH/8wDj/48A7P/1AO3/9QDu//UBBv+ZASr/9QEs/9ABLf/QAS7/0AEv//MBMP/zATH/8wEy//MBM//zATX/8wE2//MBN//zATj/8wE5//MBOv/yATv/8gE8//IBPf/yAVH/8wFS//MBU//zAVT/8QFV//EBVv/xAVf/+AFY//gBWf/4AWv/0AFs//MAUgAZ//EAIv+UAC4ADQA2/80AOP/tADn/7QA6/+0APP/tAEP/9gBE/+0ARv/tAEf/6wBI//IAXf/tAHn/igB6/4oAjv/xAI//zQCQ/+0Ap//yAKz/8QCt//EAs//NALT/zQC1/80Atv/NALf/zQC4/80Auf/tALr/7QC7/+0AvP/tAL3/7QDC//YAw//tAMT/7QDF/+0Axv/tAMf/7QDM//EAzf/xANH/8QDT//EA4f/tAOP/igDs//EA7f/xAO7/8QEG/5QBKv/xASz/zQEt/80BLv/NAS//7QEw/+0BMf/tATL/7QEz/+0BNf/tATb/7QE3/+0BOP/tATn/7QE6/+0BO//tATz/7QE9/+0BTP/2AU3/9gFO//YBUP/2AVH/7QFS/+0BU//tAVT/6wFV/+sBVv/rAVf/8gFY//IBWf/yAWv/zQFs/+0APwAL/7wAHf/4ACf/7wAs/7kALf/hAC7/uQAv/+MAMf+yAEn/1QBK//UAWP/vAJH/7wCo/7IAr//4ALH/7wCy/+EAyP/1AMn/9QDK//UAy//1AM7/7wDQ/7IA0v/4ANT/+ADV//gA2v/vANv/7wDc/+8A3f/hAN7/4QDf/+EA9f/4APb/+AD3//gA+P/4APn/+AEQ/+8BEf/vARL/7wEZ/7kBGv+5ARv/uQEc/+EBHf/hAR7/4QEf/+EBIP/hASH/4QEi/+MBI//jAST/4wEl/+MBJv+yASf/sgEr/+8BWv/VAVz/1QFd//UBXv/1AV//9QFg//UBYf/1AWL/9QA/AAv/vAAd//gAJ//vACz/uQAt/+EALv+5AC//4wAx/7IASf/VAEr/9QBY/+8Akf/vAKj/sgCv//gAsf/vALL/4QDI//UAyf/1AMr/9QDL//UAzv/vAND/sgDS//gA1P/4ANX/+ADa/+8A2//vANz/7wDd/+EA3v/hAN//4QD1//gA9v/4APf/+AD4//gA+f/4ARD/7wER/+8BEv/vARn/uQEa/7kBG/+5ARz/4QEd/+EBHv/hAR//4QEg/+EBIf/hASL/4wEj/+MBJP/jASX/4wEm/7IBJ/+yASv/7wFa/9UBXP/VAV3/9QFe//UBX//1AWD/9QFh//UBYv/1AD8AC/+8AB3/+AAn/+8ALP+5AC3/4QAu/7kAL//jADH/sgBJ/9UASv/1AFj/7wCR/+8AqP+yAK//+ACx/+8Asv/hAMj/9QDJ//UAyv/1AMv/9QDO/+8A0P+yANL/+ADU//gA1f/4ANr/7wDb/+8A3P/vAN3/4QDe/+EA3//hAPX/+AD2//gA9//4APj/+AD5//gBEP/vARH/7wES/+8BGf+5ARr/uQEb/7kBHP/hAR3/4QEe/+EBH//hASD/4QEh/+EBIv/jASP/4wEk/+MBJf/jASb/sgEn/7IBK//vAVr/1QFc/9UBXf/1AV7/9QFf//UBYP/1AWH/9QFi//UAPwAL/7wAHf/4ACf/7wAs/7kALf/hAC7/uQAv/+MAMf+yAEn/1QBK//UAWP/vAJH/7wCo/7IAr//4ALH/7wCy/+EAyP/1AMn/9QDK//UAy//1AM7/7wDQ/7IA0v/4ANT/+ADV//gA2v/vANv/7wDc/+8A3f/hAN7/4QDf/+EA9f/4APb/+AD3//gA+P/4APn/+AEQ/+8BEf/vARL/7wEZ/7kBGv+5ARv/uQEc/+EBHf/hAR7/4QEf/+EBIP/hASH/4QEi/+MBI//jAST/4wEl/+MBJv+yASf/sgEr/+8BWv/VAVz/1QFd//UBXv/1AV//9QFg//UBYf/1AWL/9QAKACz/2wAu/+kAL//3ARn/2wEa/9sBG//bASL/9wEj//cBJP/3ASX/9wAKACz/2wAu/+kAL//3ARn/2wEa/9sBG//bASL/9wEj//cBJP/3ASX/9wANACz/xQAu/9YAL//uAD8A2ADrANgBGf/FARr/xQEb/8UBIv/uASP/7gEk/+4BJf/uAUUA2ADtABn/zQAb/8EAHP/LAB3/wAAe/8sAH//BACD/ywAh/8sAIv/eACP/ywAk/8sAJf/LACb/ywAn/8EAKP/MACr/ywAr/9AALP+MAC3/vQAu/6EAL/+0ADD/5QAx/7wAMv/JADb/wwA4/8AAOf/AADr/wAA7/80APP/DAD3/zQA+/80APwDnAED/zQBB/8AAQ//NAET/wABG/8AAR//OAEj/0ABJ/8EASv/AAEv/wwBM/8IATf/mAE7/wgBP/8YAWP/BAF3/wACO/80Aj//DAJD/wACR/8EAn//NAKT/ywCl/8AApv/QAKf/0ACo/7wAqf/CAKr/yQCr/8YArP/NAK3/zQCu/8EAr//AALD/ywCx/8EAsv+9ALP/wwC0/8MAtf/DALb/wwC3/8MAuP/DALn/wAC6/8AAu//AALz/wAC9/8AAvv/NAL//zQDA/80Awf/NAML/zQDD/8AAxP/AAMX/wADG/8AAx//AAMj/wADJ/8AAyv/AAMv/wADM/80Azf/NAM7/wQDP/8IA0P+8ANH/zQDS/8AA0//NANT/wADV/8AA1v/LANf/ywDY/8sA2f/LANr/wQDb/8EA3P/BAN3/vQDe/70A3/+9AOD/ywDh/8AA6wDnAOz/zQDt/80A7v/NAO//wQDw/8EA8f/BAPL/wQDz/8sA9P/LAPX/wAD2/8AA9//AAPj/wAD5/8AA+v/BAPv/wQD8/8EA/f/BAP7/ywD//8sBAP/LAQH/ywEC/8sBA//LAQT/ywEG/94BB//LAQj/ywEJ/8sBDP/LAQ3/ywEO/8sBD//LARD/wQER/8EBEv/BARP/ywEU/8sBFf/LARb/0AEX/9ABGP/QARn/jAEa/4wBG/+MARz/vQEd/70BHv+9AR//vQEg/70BIf+9ASL/tAEj/7QBJP+0ASX/tAEm/7wBJ/+8ASj/yQEp/8kBKv/NASv/wQEs/8MBLf/DAS7/wwEv/8ABMP/AATH/wAEy/8ABM//AATX/wAE2/8ABN//AATj/wAE5/8ABOv/DATv/wwE8/8MBPf/DAT7/zQE//80BQP/NAUH/zQFC/80BQ//NAUUA5wFG/80BR//NAUj/wAFJ/8ABTP/NAU3/zQFO/80BUP/NAVH/wAFS/8ABU//AAVT/zgFV/84BVv/OAVf/0AFY/9ABWf/QAVr/wQFc/8EBXf/AAV7/wAFf/8ABYP/AAWH/wAFi/8ABY//CAWT/wgFl/8IBZv/CAWf/wgFo/8IBaf/GAWr/xgFr/8MBbP/AAEYAGf/4ACL/nQA2/9IAOP/3ADn/9wA6//cAPP/2AET/9wBG//cAR//1AF3/9wB5/5MAev+TAI7/+ACP/9IAkP/3AKz/+ACt//gAs//SALT/0gC1/9IAtv/SALf/0gC4/9IAuf/3ALr/9wC7//cAvP/3AL3/9wDD//cAxP/3AMX/9wDG//cAx//3AMz/+ADN//gA0f/4ANP/+ADh//cA4/+TAOz/+ADt//gA7v/4AQb/nQEq//gBLP/SAS3/0gEu/9IBL//3ATD/9wEx//cBMv/3ATP/9wE1//cBNv/3ATf/9wE4//cBOf/3ATr/9gE7//YBPP/2AT3/9gFR//cBUv/3AVP/9wFU//UBVf/1AVb/9QFr/9IBbP/3AEYAGf/4ACL/nQA2/9IAOP/3ADn/9wA6//cAPP/2AET/9wBG//cAR//1AF3/9wB5/5MAev+TAI7/+ACP/9IAkP/3AKz/+ACt//gAs//SALT/0gC1/9IAtv/SALf/0gC4/9IAuf/3ALr/9wC7//cAvP/3AL3/9wDD//cAxP/3AMX/9wDG//cAx//3AMz/+ADN//gA0f/4ANP/+ADh//cA4/+TAOz/+ADt//gA7v/4AQb/nQEq//gBLP/SAS3/0gEu/9IBL//3ATD/9wEx//cBMv/3ATP/9wE1//cBNv/3ATf/9wE4//cBOf/3ATr/9gE7//YBPP/2AT3/9gFR//cBUv/3AVP/9wFU//UBVf/1AVb/9QFr/9IBbP/3AAwALP/JAC7/2wAv//YAMP/tAE3/7QEZ/8kBGv/JARv/yQEi//YBI//2AST/9gEl//YAEQAi/+QALP/mAC7/4wAv//YAMP/SADL/6QCq/+kBBv/kARn/5gEa/+YBG//mASL/9gEj//YBJP/2ASX/9gEo/+kBKf/pABAAIv+hAC4ADwAwAAwANv/UAI//1ACz/9QAtP/UALX/1AC2/9QAt//UALj/1AEG/6EBLP/UAS3/1AEu/9QBa//UAAUALP/JAC7/3wEZ/8kBGv/JARv/yQAeACL/9AAs/6cALv/KAC//7gAw/+sAMf/xADL/8gBJ/9kATf/NAE//5wCo//EAqv/yAKv/5wDQ//EBBv/0ARn/pwEa/6cBG/+nASL/7gEj/+4BJP/uASX/7gEm//EBJ//xASj/8gEp//IBWv/ZAVz/2QFp/+cBav/nAB4AIv/CACz/wgAu/9sAL//zADD/0AAy/+EANv/2AE3/3QCP//YAqv/hALP/9gC0//YAtf/2ALb/9gC3//YAuP/2AQb/wgEZ/8IBGv/CARv/wgEi//MBI//zAST/8wEl//MBKP/hASn/4QEs//YBLf/2AS7/9gFr//YAHgAi/8IALP/CAC7/2wAv//MAMP/QADL/4QA2//YATf/dAI//9gCq/+EAs//2ALT/9gC1//YAtv/2ALf/9gC4//YBBv/CARn/wgEa/8IBG//CASL/8wEj//MBJP/zASX/8wEo/+EBKf/hASz/9gEt//YBLv/2AWv/9gAFACz/yQAu/98BGf/JARr/yQEb/8kAHgAi//QALP+nAC7/ygAv/+4AMP/rADH/8QAy//IASf/ZAE3/zQBP/+cAqP/xAKr/8gCr/+cA0P/xAQb/9AEZ/6cBGv+nARv/pwEi/+4BI//uAST/7gEl/+4BJv/xASf/8QEo//IBKf/yAVr/2QFc/9kBaf/nAWr/5wAEAEH/2wCl/9sBSP/bAUn/2wAyAAv/3AA2/90AOP/dADn/3QA6/90APP/dAET/3QBG/90AXf/dAI//3QCQ/90As//dALT/3QC1/90Atv/dALf/3QC4/90Auf/dALr/3QC7/90AvP/dAL3/3QDD/90AxP/dAMX/3QDG/90Ax//dAOH/3QEs/90BLf/dAS7/3QEv/90BMP/dATH/3QEy/90BM//dATX/3QE2/90BN//dATj/3QE5/90BOv/dATv/3QE8/90BPf/dAVH/3QFS/90BU//dAWv/3QFs/90AAhBAAAQAABD4E4QALAAsAAD/+v/6//r/+v/6//r/+//7//sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//P/8//z//P/8//z//r/8v/1/+P/9f/1/+v/+//6//n/+v/w//n/+QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7AAAAAAAAAAAAAAAAAAD/+wAAAAAAAAAAAAD/7f/m/+3/6f/0/9//2P/t/+cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9P/0//T/9P/0//T/+v/z//X/7//3//f/8P/7//r/+f/6//L/+f/5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/+L/4v/i/+H/4v/i/9n/8//w//QAAAAA//cAAP+2/+X/5P/7/+3/7f/A/2r/wAAAAAAAAAAAAAD/9P/0/+3/9P/0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+wAAAAAAAAAAAAAAAAAAAAD/8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+f/5//n/+f/5//n/+//7//sAAAAAAAAAAAAA//sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//n/+f/5//n/+f/5//v/+//7AAAAAAAAAAAAAP/7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/6//r/+v/6//r/+v/4//v/+gAAAAAAAAAAAAD/+//7//oAAP/6//v/+P/5//gAAAAAAAAAAAAA//YAAAAAAAD/+//7AAAAAAAAAAAAAAAAAAAAAAAAAAD/2//b/9v/2//b/9sAAP/a/+P/y//d/93/0wAA//cAAAAA/8j/+P/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/zf/7/8IAAAAA/+oAAAAAAAAAAP91AAAAAAAAAAAAAP80/7P/UQAAAAAABgAAAAAAAAAAAAD/+v+0/23/+wAAAAAAAAAAAAAAAP/5//n/+f/5//n/+f/7//v/+wAAAAAAAAAAAAD/+wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+f/5//n/+f/5//n/+//7//sAAAAAAAAAAAAA//sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/v/+r/7//s//T/4v/a//D/6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7AAAAAAAAAAAAAAAAAAD/3wAAAAAAAAAAAAD/yf+M/8kAAAAA//X/z//3//gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9f/1//X/9P/1//UAAP/7//sAAAAAAAAAAAAA//IAAAAAAAAAAAAAAAAAAAAA//UAAP/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/SAAAAAAAAAAAAAP/x//L/7P/rAAD/8AAAAAAAAP/6AAAAAAAA//MAAAAAAAAAAAAAAAAAAP+O/47/jv+P/47/jv+I/8r/zf/CAAAAAP/sAAD/WP+1/5v/0v/L/8r/uf80/7kAAAAAAAsAAAAA/7z/2//O/9v/uQAAAAAAAAAAAAD/+wAAAAAAAAAAAAD/+v/6//r/+v/6//r/+//7//sAAAAAAAAAAAAAAAAAAP/7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/7n/uf+5/7n/uf+5/7r/3P/X/9v/8P/w/+L/8/+I/8T/u//q/9T/1P+4/03/uAALAAAAAAAAAAD/3P/p/9v/6f/X//gAAAAAAAAAAP/tAAAAAAAAAAAAAP/k/+T/5P/k/+T/5P/p/+7/6//z//j/+P/1//r/2v/s/+X/+v/s/+z/5P+z/+QAAAAAAAAAAAAA//H/9//w//f/8v/2AAAAAAAA//v/9//5//r/+v/5AAD/4f/h/+H/4f/h/+EAAP/e/+b/0P/h/+H/2wAA//QAAAAA/87/9//4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/4AAAAAAAAAAAAAAAAAAAAAAAA//T/9P/0//T/9P/0/+8AAAAAAAAAAAAAAAAAAP+9//j/+gAA//v/+/+y/23/sgAAAAAAAAAAAAAAAAAA//kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/3//f/9//3//f/9wAA//H/9f/iAAAAAP/wAAAAAP/7AAD/5v/6//oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//wAAAAAAAAAAAAAAAAAAAAAAAAAAP/cAAAAAAAA//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//j/+P/4//f/+P/4AAAAAAAAAAAAAAAAAAAAAP/5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//gAAAAAAAAAAAAA/9UAAP/VAAAAAAAAAAAAAP/WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//z//P/8//v//P/8//oAAAAAAAAAAAAAAAAAAP+sAAAAAAAAAAAAAP+qAAD/qgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/93/3f/d/93/3f/dAAAAAAAA/9wAAAAAAAAAAP/dAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//AAAP/pAAAAAAAAAAAAAAAAAAD/2QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7AAAAAAAAAAAAAAAAAAAAAAAAAAD/3AAAAAAAAP/7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//P/8//z/+//8//z/+gAAAAAAAAAAAAAAAAAA/6wAAAAAAAAAAAAA/6oAAP+qAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//gAAAAAAAAAAAAAAAAAAP/uAAAAAAAAAAAAAAAAAAAAAAAAAAD/6QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/8//z//P/7//z//P/6AAAAAAAAAAAAAAAAAAD/wgAAAAAAAAAAAAD/xwAA/8cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/98AAAAAAAAAAAAA/74AAP++AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/UAAAAAAAAAAAAAP+7AAD/uwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/c/9z/3P/c/9z/3AAA//j/+P/dAAAAAAAAAAD/5QAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//gAAAAAAAAAAAAAAAD//P/8//z/+//8//wAAAAAAAD/9gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/2AAAAAAAAAAAAAAAA/8IAAP/C//P/2//Q/+H/3QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAdAAMABAAAAAYACAACAAoAFwAFABkANAATADYAUAAvAFIAUgBKAFUAVQBLAFcAWABMAF0AXQBOAGAAYABPAGsAcABQAHQAdABWAHkAegBXAH4AfgBZAIUAhwBaAJgAmgBdAJwAnQBgAJ8AnwBiAKMA4QBjAOsBBACiAQYBCQC8AQwBKQDAASsBMwDeATUBQwDnAUUBSQD2AUwBTgD7AVABWgD+AVwBagEJAWwBbAEYAAEALQADAAYABwAJAAwADQATABQAFQAWABoAKQAzADQANwBCAEUAUABRAFcAawBsAG0AbgBvAHAAeQB6AHsAfAB9AH4AhQCHAI0AkwCVAJcAmACZAJoAmwCcAKMBRwACAB4ACwALAAAAGQAZAAEAGwAoAAIAKgAyABAANgA2ABkAOAA9ABoAQABBACAAQwBEACIARgBJACQASwBNACgATwBPACsAWABYACwAXQBdAC0ApACoAC4AqgC9ADMAwgDHAEcAzADOAE0A0ADhAFAA7AEEAGIBBgEJAHsBDAEpAH8BKwEzAJ0BNQE/AKYBRgFJALEBTAFOALUBUAFaALgBXAFcAMMBYwFmAMQBaQFqAMgBbAFsAMoAAgBsAAsACwArABsAGwABABwAHAACAB0AHQADAB4AHgAEAB8AHwAFACAAIAAGACEAIQAHACIAIgAIACMAIwAJACQAJAAKACUAJQALACYAJgAMACcAJwANACgAKAAOACoAKgAPACsAKwAQACwALAARAC0ALQASAC4ALgATAC8ALwAUADAAMAAVADEAMQAWADIAMgAXADYANgAYADgAOAAZADkAOQAaADoAOgAbADsAOwAcADwAPAAdAD0APQAeAEAAQAAfAEEAQQAgAEMAQwAhAEQARAAiAEYARgAjAEcARwAkAEgASAAlAEkASQAmAEsASwAnAEwATAAoAE0ATQApAE8ATwAqAFgAWAANAF0AXQAiAKQApAAKAKUApQAgAKYApgAQAKcApwAlAKgAqAAWAKoAqgAXAKsAqwAqAK4ArgABAK8ArwADALAAsAAMALEAsQANALIAsgASALMAuAAYALkAuQAZALoAvQAbAMIAwgAhAMMAxwAiAM4AzgANANAA0AAWANIA0gADANQA1QADANYA2QAHANoA3AANAN0A3wASAOAA4AACAOEA4QAiAO8A8gABAPMA9AACAPUA+QADAPoA/QAFAP4A/wAGAQABBAAHAQYBBgAIAQcBBwAJAQgBCQAKAQwBDwAMARABEgANARMBFQAPARYBGAAQARkBGwARARwBIQASASIBJQAUASYBJwAWASgBKQAXASsBKwANASwBLgAYAS8BMgAZATMBMwAaATUBOQAbAToBPQAdAT4BPwAeAUYBRwAfAUgBSQAgAUwBTgAhAVABUAAhAVEBUwAiAVQBVgAkAVcBWQAlAVoBWgAmAVwBXAAmAWMBZgAoAWkBagAqAWwBbAAiAAEACwFiAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfAAAACwAAACMAAAAMAAAAAAAWAAAAAAAAAAAADQAnAAAAAAAOABgAJAAaABkAGwAlABwAAAAAAAAADwAAAAEAAwACACIABAApACgAKwAqACYAAAAQAAUAAAAGAAcAEQASAAgAFAATAB0ACQAhAAAAAAAAAAAAAAAAAAAAAAANAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXABUAHgAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfAA8ABQANAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAJgAOABEAJQAJABwAIQAfAB8ACwAjAAAADQAkAA8ADwAPAA8ADwAPAAEAAgACAAIAAgAoACgAKAAoABAABQAFAAUABQAFAAgACAAIAAgAHwAfAA0ACQAlAB8AIwAfACMAIwAAAAAAAAAAAA0ADQANACQAJAAkAAAABQAAABcAAAAAAAAAAAAAAAAAAAArAB8AHwAfAAsACwALAAsAAAAAACMAIwAjACMAIwAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAWAAAAAAAAAAAAAAAAAAAAAAAAAA0ADQANAAAAAAAAAA4ADgAOABgAGAAYACQAJAAkACQAJAAkABkAGQAZABkAJQAlABwAHAAfAA0ADwAPAA8AAQABAAEAAQADAAAAAgACAAIAAgACAAQABAAEAAQAKQApACgAKAAoACgAAAArACoAKgAmACYAAAAAABAAEAAQAAAAEAAFAAUABQAHAAcABwARABEAEQASAAAAEgAIAAgACAAIAAgACAATABMAEwATAAkACQAhACEADwAFAAAAAQAAAAoAJgBkAAFsYXRuAAgABAAAAAD//wAFAAAAAQACAAMABAAFYWFsdAAgZnJhYwAmbGlnYQAsb3JkbgAyc3VwcwA4AAAAAQAAAAAAAQAEAAAAAQACAAAAAQADAAAAAQABAAgAEgAaACIAKgAyAEoAUgBaAAEAAAABAT4AAQAAAAEASAAEAAAAAQBMAAYAAAABAF4ABgAAAAkAaAB+AJIApgC6AM4A4gD2AQoAAQAAAAEBFgAEAAAAAQEYAAQAAAABAc4AAgHkAAMAgQCEAIMAAQHiAAEACAACAAYADADkAAIAPgDlAAIAQQADAAEBzgABAdgAAAABAAAABQADAAAABAHOAdQBzgHOAAAAAQAAAAYAAwAAAAMBuAG+AbgAAAABAAAABwADAAAAAwGyAaoBuAAAAAEAAAAGAAMAAAADAaoBlgGkAAAAAQAAAAYAAwAAAAMBigGCAZwAAAABAAAABgADAAAAAwGCAW4BjgAAAAEAAAAGAAMAAAADAWIBWgF6AAAAAQAAAAYAAwAAAAMBbAFGAVQAAAABAAAABgADAAAAAwFeATIBQAAAAAEAAAAGAAIBUAAFAIEAhACDAFsAXAACAQAAAgBbAFwAAQFEAAUAEAAqAGgAfgCoAAIABgAQAJ4ABAAMAA0ADQCeAAQAnQANAA0ABgAOABYAHgAmAC4ANgB/AAMADAAPAIAAAwAMABEAfwADAAwAhAB/AAMAnQAPAIAAAwCdABEAfwADAJ0AhAACAAYADgCCAAMADAARAIIAAwCdABEABAAKABIAGgAiAIAAAwAMABEAfwADAAwAhACAAAMAnQARAH8AAwCdAIQAAgAGAA4AggADAAwAEQCCAAMAnQARAAEAQAABAAgAAgAGAA4ABQADAAwADQAFAAMAnQANAAIAAQAOABAAAAABAAEAOwACAAEADQAWAAAAAQACADYARAABAAEADQABAAIADACdAAEAAQAOAAEAAQARAAEAAQCBAAEAAQAPAAEAAQCEAAEAAQAQAAEAAQCDAAEABQAOAA8AEAA2AEQAAQAFAA0ADgAQAIEAgw==) format("truetype");font-weight:400;font-style:normal;font-display:swap}:root{--ink:#45345b;--muted:#79638f;--accent:#7651b6;--paper:#fffdf5;--line:#c7b6d9;background:#ede6fa;color:var(--ink);font-family:Trebuchet MS,Microsoft YaHei,Segoe UI,sans-serif}#storybookBackdrop{position:fixed;inset:0;z-index:0;background:url('+new URL("../art/cloud-islands-background.png",document.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"&&document.currentScript.src||document.baseURI).href+") center/cover no-repeat;pointer-events:none;opacity:.4}body[data-mode=title]:has(#drawer[hidden]) #storybookBackdrop{opacity:1}body[data-mode=title] #stage,body[data-mode=setup] #stage{display:none}button{border-radius:4px;border-color:#b9a7cc;min-height:44px}button:focus-visible,input:focus-visible,select:focus-visible,summary:focus-visible{outline:3px solid #7e53be;outline-offset:4px}button:hover:not(:disabled){background:#e9ddf7;border-color:#8564aa}.primary{background:#7651b6;border-color:#664198;box-shadow:2px 3px #49345e20;min-height:48px}.primary:hover:not(:disabled){background:#65409f;border-color:#553285}.eyebrow{color:#6d5388;font-size:11px;letter-spacing:1.5px}p{color:#6a567d}.small-copy,small{color:#776187}.wordmark{font-family:Microsoft YaHei,sans-serif;font-size:25px;font-weight:700;letter-spacing:2px;color:#684899}#topbar{z-index:5}#topbar nav button{background:#fffbf3;border:1px solid #b5a1ca;border-radius:4px;box-shadow:1px 2px #b9a4cf40;min-height:42px}#chapterName{color:#6f568a}#identityBoard,#sidebar{background:#fffdf5f5!important;border:1.5px solid #8f77a7!important;border-radius:3px!important;box-shadow:3px 4px #a18ab727!important}#identityBoard>header{font-weight:700;border-bottom:1px dashed #baa7cd;padding-bottom:13px}#identityBoard #portraitWrap{background:#f0e8f8;border:1px solid #d7c8e5;margin:14px 0 18px}#identityBoard .balance{border-top:1px dashed #c8b6d8}#identityBoard .trait b{font-family:Trebuchet MS,sans-serif;font-size:26px;font-weight:700}#identityBoard .chapter-progress{border-top-style:dashed}body:is([data-mode=life],[data-mode=choice],[data-mode=result]) #stage{border:1.5px solid #8f77a7;border-radius:4px;box-shadow:3px 4px #a18ab727}.profile-context h2,#sidebar h1,.decision-body h1,.review h1,.drawer-card h1{font-family:Microsoft YaHei,sans-serif;font-weight:700;letter-spacing:.4px}#sidebar h1{font-size:22px}.info-section h2{font-weight:700;font-size:14px}.info-section{border-top-style:dashed}.focus-tabs button{border-radius:3px;background:#f5eefb;font-weight:500}.focus-tabs button[aria-pressed=true]{background:#e0cff1;border-color:#8a64ad;box-shadow:inset 0 -3px #8a64ad}.place{border:1px solid #b19ac7;background:#fffcf3ee;border-radius:3px;box-shadow:1px 2px #a793b52b;font-size:11px}.place.destination{background:#eadcf8;border-color:#8663a4}#choiceDialog,.drawer-card,.review{background:#fffcf4;border:2px solid #8d73a4;border-radius:5px;box-shadow:5px 7px #5d426335,0 15px 60px #3a254525}.decision-top{background:#f4ecfb;border-bottom:1px dashed #b69cc9;padding:13px 25px}.decision-body{padding:25px 28px 28px}.decision-body h1{font-size:29px;color:#563775}#choiceDialog .choices button{background:#fffdf7;border:1.5px solid #b39ac8;border-radius:3px;box-shadow:2px 3px #b29bc92b;padding:17px 20px}#choiceDialog .choices button:hover:not(:disabled){background:#eee2fa;border-color:#81609f;box-shadow:3px 4px #b29bc94f}#choiceDialog .choices button strong{font-weight:700;color:#4d355f}#choiceDialog .choices button small{border-top:1px dashed #d2c1df;padding-top:10px;color:#674b7f}#choiceDialog .choices button.executing{background:#e9d8f7;border-color:#79539a}.result-change{background:#eee2f8;border-left-color:#9168b5}.meanwhile{border-top-style:dashed}.ticket{background:transparent url("+new URL("../art/travel-ticket.png",document.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"&&document.currentScript.src||document.baseURI).href+') center/100% 145% no-repeat!important;box-shadow:none!important;border:0!important;border-radius:0!important;color:#4b365f!important;min-height:76px;padding:14px 30px;text-align:left;display:flex;align-items:center;justify-content:flex-start;transition:transform .16s,filter .16s}.ticket:hover:not(:disabled){transform:translate(6px);filter:drop-shadow(0 3px 2px #67468120)}.ticket:active:not(:disabled){transform:translate(6px) translateY(2px)}.ticket>span{display:block;font-size:18px;font-weight:700;letter-spacing:1px;line-height:1.4}.ticket small{display:block;font-size:10px;letter-spacing:1.6px;margin-top:4px;color:#765e8a}.ticket.primary{color:#6739a7!important}.ticket:disabled{opacity:.5;filter:grayscale(.6)}.title-card{left:7vw;top:18vh;width:min(970px,85vw)}.title-card>.eyebrow{font-size:15px;font-weight:700;letter-spacing:3px;color:#705096}.title-card h1{font-family:Arial Rounded MT Bold,Trebuchet MS,Microsoft YaHei,sans-serif;font-size:clamp(49px,7.4vw,112px);font-weight:800;letter-spacing:-3px;line-height:1.12;color:#8053d1;margin:20px 0 0;text-shadow:0 2px #fff4}.title-card h1{font-family:Audiowide,Trebuchet MS,sans-serif;font-weight:400;letter-spacing:-1.5px}.ticket small,.wordmark small{font-family:Audiowide,Trebuchet MS,sans-serif}.title-line{font:500 19px Microsoft YaHei,sans-serif;letter-spacing:3px;color:#6d5288;margin-top:24px}.title-actions{width:310px;gap:8px;margin-top:34px}.title-actions .primary{font-size:18px}.title-actions .secondary{flex-direction:row}.title-settings{font-size:12px;color:#684b87;margin:17px 0 0 20px;min-height:32px}.edition{margin:6px 0 0 23px;font-size:10px;color:#7b6492;letter-spacing:1px}.setup-card{left:5vw;right:5vw;top:5vh;bottom:5vh;width:auto;padding:26px 30px 0;background:#fffcf3f0;border:1.5px solid #9379a9;border-radius:4px;box-shadow:5px 6px #9b83b72b}.setup-card>.back{font-size:13px;min-height:36px;padding:4px 12px;border:1px solid #b29ac8;background:#fffdf7;color:#65467e}.setup-steps{position:absolute;top:33px;right:30px;width:440px;border:0;padding:0;margin:0;font-size:11px;gap:20px;color:#8b739d}.setup-steps .active{font-weight:700;color:#6c3ba1;border-bottom:2px solid #9164b7;padding-bottom:8px}#setupBody{margin-top:22px}.setup-card h1{font-family:Microsoft YaHei,sans-serif;font-size:31px;font-weight:700;color:#56366f;line-height:1.45;margin:10px 0 12px}.setup-card p{font-size:13px;color:#715a84}.context-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:34px}.selection-card{min-height:208px;padding:27px 24px;background:#fffdf7;border:1.5px solid #b9a3ce;border-radius:3px;box-shadow:3px 4px #ad95c12b;gap:20px}.selection-card strong{font-size:20px;font-weight:700;color:#59406f}.selection-card span{font-size:13px;line-height:1.9}.selection-card small{font-size:12px;font-weight:700;margin-top:auto}.selection-card.active{background:#ede0f9;border:2px solid #8a5aaf;box-shadow:4px 5px #ae94c14a}.setup-footer{background:#fffcf3f5;padding:18px 0 20px;justify-content:flex-end;margin-top:23px;gap:22px}.setup-footer .primary{order:2;min-width:196px;min-height:48px;font-size:15px;border-radius:3px}.setup-footer>span{font-size:11px}.setup-caption{display:none}.focus-card-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:26px}.focus-card{min-width:0;position:relative;display:flex;align-items:center;flex-direction:column;padding:15px 16px 18px;background:#fffdf5;border:1.5px solid #b39bc7;box-shadow:3px 4px #a990bb2b;border-radius:2px}.focus-card canvas{display:block;width:120px;height:140px;margin:0 auto 6px}.focus-card strong{display:block;font-size:18px;font-weight:700;color:#553868;letter-spacing:1px}.focus-card>span{font-size:11px;line-height:1.8;color:#7b628c;margin:9px 0 13px}.preset-points{width:100%;display:flex;justify-content:center;gap:18px;border-top:1px dashed #cdbada;padding-top:11px}.preset-points>span{font-size:10px;color:#7b638d}.preset-points b{display:block;font-size:20px;line-height:1.5;color:#5b3a78;margin-top:3px}.focus-card[aria-pressed=true]{border:2px solid #8053aa;background:#eee1fa;box-shadow:4px 5px #a78bbb4a}.focus-card[aria-pressed=true]:before{content:"已选";position:absolute;top:10px;right:11px;color:#724398;font-size:11px;font-weight:700}.focus-summary{display:flex;justify-content:center;align-items:center;gap:20px;font-size:12px;color:#7f6395;margin-top:23px}.focus-summary strong{font-size:21px;color:#68428c;letter-spacing:4px}.focus-summary>span{border-left:1px solid #cbb5dc;padding-left:20px}.focus-designer{display:flex;flex-direction:column;gap:17px;margin-top:26px}.attribute-paper{display:grid;grid-template-columns:minmax(0,1fr) 190px;gap:14px 30px;padding:18px 24px;background:#fffdf7;border:1.5px solid #aa90c0;border-radius:2px;box-shadow:3px 4px #aa90c028}.attribute-paper h2{font-family:Microsoft YaHei,sans-serif;font-size:25px;font-weight:700;color:#5e3d7b}.attribute-paper p{font-size:12px;margin-top:6px}.attribute-number{display:flex;align-items:center;justify-content:space-between;gap:15px}.attribute-number button{font-size:23px;color:#845ca7;background:#f1e7fa;width:44px;min-height:44px;padding:0;border:1px solid #baa2cd}.attribute-number output{min-width:38px;text-align:center;font-size:42px;font-weight:700;color:#67428b;font-family:Trebuchet MS,sans-serif}.attribute-paper input{grid-column:1/-1;width:100%;accent-color:#9065b7;height:14px;margin:0}body[data-focus-view=custom] .setup-balance{padding:11px 20px;margin:22px 0 0;font-size:22px;background:#eadcf5;color:#6b428d;border-radius:2px}body[data-mode=setup][data-page=appearance] .setup-card{right:auto;width:520px;left:6vw}body[data-mode=setup][data-page=appearance] .setup-steps{position:static;width:auto;margin:16px 0 0;gap:12px}body[data-mode=setup][data-page=appearance] #setupBody{margin-top:18px}body[data-mode=setup][data-page=appearance] #portraitWrap{display:block!important;left:62vw;top:24vh;width:270px;height:360px;background:#fffcf1e8;border:1.5px solid #a28bb5;box-shadow:5px 6px #a38bb52b;border-radius:3px;padding:10px}body[data-mode=setup][data-page=appearance] #portrait{width:250px;height:290px}body[data-mode=setup][data-page=appearance] #portraitWrap>span{color:#755b8b}.appearance{gap:18px;margin-top:24px}.appearance label{font-size:13px}.appearance select{background:#fffdf7;border:1px solid #bba4ce;border-radius:3px;color:#65457e;font-size:13px}.gallery-card{width:680px}.gallery-card article{border-top:1px dashed #c8b5d7;margin-top:18px;padding-top:17px}.gallery-card article h2{font-family:Microsoft YaHei,sans-serif;font-size:16px;font-weight:700}.gallery-card article p{font-size:13px;margin-top:10px}.gallery-card summary{font-size:13px;color:#70518b}.collection-empty{padding:30px 10px 40px;border-top:1px dashed #c5afd6}body[data-mode=setup][data-page=focus] .setup-card{background:transparent;border-color:transparent;box-shadow:none}body[data-mode=setup][data-page=focus] .setup-footer{background:transparent}body[data-mode=setup][data-page=focus] .focus-card{background:#fffdf5f5}body[data-mode=setup][data-page=focus] .focus-card[aria-pressed=true]{background:#eadcf8f5}body[data-mode=setup][data-page=focus] .focus-summary{width:fit-content;margin-left:auto;margin-right:auto;padding:9px 20px;background:#fffdf5e8;border:1px solid #c6b1d8;border-radius:3px}body[data-mode=setup][data-page=focus][data-focus-view=custom] .focus-designer,body[data-mode=setup][data-page=focus][data-focus-view=custom] #setupBalance{margin-left:260px}body[data-mode=setup][data-page=focus][data-focus-view=custom] #portraitWrap{display:block;left:calc(5vw + 30px);top:32vh;width:220px;height:300px;background:#fffdf5ee;border:1.5px solid #aa90c0;border-radius:3px;box-shadow:3px 4px #aa90c030;padding:10px}body[data-mode=setup][data-page=focus][data-focus-view=custom] #portrait{width:200px;height:240px}body[data-mode=setup][data-page=focus][data-focus-view=custom] #portraitWrap>span{color:#755b8b;font-size:11px;margin-top:8px}.setup-footer .primary{background:transparent url('+new URL("../art/travel-ticket.png",document.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"&&document.currentScript.src||document.baseURI).href+") center/100% 145% no-repeat;color:#644085!important;border:0;box-shadow:none;min-height:58px;justify-content:center;font-weight:700}.setup-footer .primary:hover:not(:disabled){background:transparent url("+new URL("../art/travel-ticket.png",document.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"&&document.currentScript.src||document.baseURI).href+") center/100% 145% no-repeat;color:#58337e!important;filter:drop-shadow(0 3px 2px #67468120)}.setup-card{display:flex;flex-direction:column;overflow:hidden}.setup-card>.back{align-self:flex-start;flex:none}#setupBody{flex:1;min-height:0;overflow:auto;padding:0 2px 5px 0;scrollbar-width:thin;scrollbar-color:#b59aca transparent}.setup-footer{position:static;flex:none}body[data-mode=setup][data-page=focus][data-focus-view=custom] .setup-footer #setupBalance{margin:0;padding:8px 16px;background:#fffdf5f0;border:1px solid #c6b1d8;font-size:20px;letter-spacing:4px;flex:1;text-align:center}.focus-card>span{font-size:12px!important}.preset-points>span{font-size:11px}.focus-card>span,.preset-points>span{color:#684c7b}#cameraHint,#sceneBadge{font-size:11px;color:#705986}.edition{color:#684c7b}.gate-card{background:#fffdf4f2;border:1.5px solid #a78bbd;border-radius:4px;box-shadow:4px 5px #a58ab62a}.gate-card h1{font-family:Microsoft YaHei,sans-serif;font-weight:700;color:#62417c}@media(min-height:850px){.focus-card canvas{width:145px;height:170px}.focus-card{padding-top:25px;padding-bottom:25px}.title-actions{margin-top:45px;gap:14px}}@media(max-height:760px){.title-card{top:10vh}.title-card h1{font-size:clamp(48px,6.5vw,90px);margin-top:13px}.title-line{margin-top:16px;font-size:17px}.title-actions{margin-top:25px;gap:5px}.ticket{min-height:69px}.title-settings{margin-top:8px}.setup-card{top:3vh;bottom:3vh;padding-top:21px}.setup-steps{top:29px}.setup-card h1{font-size:28px}.focus-card-grid{margin-top:20px}.focus-card{padding:10px 12px 13px}.focus-card canvas{width:105px;height:123px}.focus-card>span{margin:7px 0 10px;font-size:10px}.preset-points{padding-top:8px}.focus-summary{margin-top:16px}.setup-footer{padding:15px 0;margin-top:17px}.attribute-paper{padding:13px 20px;gap:10px 25px}.focus-designer{gap:13px;margin-top:20px}.attribute-paper h2{font-size:23px}.attribute-number output{font-size:35px}}@media(max-width:1000px){.setup-steps{width:390px;font-size:10px;gap:12px}.setup-card{left:3vw;right:3vw;padding-left:23px;padding-right:23px}.setup-card h1{font-size:26px}.focus-card-grid{gap:12px}.focus-card strong{font-size:16px}.focus-card>span{font-size:10px;text-align:center}.preset-points,.context-cards{gap:12px}.selection-card{padding:22px 17px}.selection-card strong{font-size:17px}body[data-mode=setup][data-page=appearance] .setup-card{left:3vw;width:480px}body[data-mode=setup][data-page=appearance] #portraitWrap{left:auto;right:3vw;width:230px;height:310px}body[data-mode=setup][data-page=appearance] #portrait{width:210px;height:250px}#identityBoard #portraitWrap{margin:0;background:transparent;border:0}}@media(max-width:760px){.title-card{left:7vw;width:88vw;top:13vh}.title-card>.eyebrow{font-size:12px;letter-spacing:2px}.title-card h1{font-size:clamp(38px,8vw,58px);letter-spacing:-1px}.title-line{font-size:15px}.title-actions{width:270px}.ticket{min-height:67px}.setup-card{inset:16px 14px;max-height:none;width:auto!important;left:14px!important;right:14px!important;transform:none;padding:18px 20px 0}.setup-steps{position:static;width:auto;margin:17px 0 0;font-size:9px}.context-cards{grid-template-columns:1fr;gap:11px;margin-top:20px}.selection-card{min-height:0;padding:17px;gap:11px}.focus-card-grid{grid-template-columns:repeat(2,1fr)}.focus-card canvas{width:90px;height:105px}.focus-card strong{font-size:15px}.focus-card>span{font-size:10px}.setup-footer>span{display:none}.setup-footer .primary{width:100%}.attribute-paper{grid-template-columns:minmax(0,1fr) 130px;padding:13px;gap:12px}.attribute-paper p{font-size:11px}.attribute-paper h2{font-size:21px}.attribute-number{gap:8px}.attribute-number button{width:34px;min-height:40px;font-size:20px}.attribute-number output{font-size:31px;min-width:28px}body[data-mode=setup][data-page=appearance] #portraitWrap{display:none!important}.focus-summary{gap:12px;font-size:11px}.focus-summary strong{font-size:18px;letter-spacing:2px}}@media(max-width:1000px)and (min-width:761px){body[data-mode=setup][data-page=focus][data-focus-view=custom] .focus-designer,body[data-mode=setup][data-page=focus][data-focus-view=custom] #setupBalance{margin-left:205px}body[data-mode=setup][data-page=focus][data-focus-view=custom] #portraitWrap{left:calc(3vw + 23px);width:178px;height:275px}body[data-mode=setup][data-page=focus][data-focus-view=custom] #portrait{width:158px;height:215px}}@media(max-width:760px){body[data-mode=setup][data-page=focus][data-focus-view=custom] #portraitWrap{display:none}body[data-mode=setup][data-page=focus][data-focus-view=custom] .focus-designer,body[data-mode=setup][data-page=focus][data-focus-view=custom] #setupBalance{margin-left:0}}@media(max-width:760px){.focus-card>span{font-size:11px!important}.setup-footer{flex-wrap:wrap;gap:10px;padding:12px 0}.setup-footer #setupBalance{flex-basis:100%!important}.setup-footer .primary{min-width:0}.setup-card h1{font-size:24px}#setupBody{flex:none;overflow:visible}.setup-card{overflow:auto}.setup-footer{position:sticky;bottom:0;background:#fffdf5e8!important}}@media(max-height:760px)and (min-width:1001px){#identityBoard{padding:17px 16px}#identityBoard #portraitWrap{height:124px;margin:10px 0 12px}#identityBoard #portrait{width:110px;height:124px}#identityBoard .balance{margin-top:16px;padding-top:15px}#identityBoard .balance section{gap:11px;margin-top:14px}#identityBoard .chapter-progress{margin-top:14px;padding-top:12px}}.entry-actions{display:flex;justify-content:flex-end;gap:12px;align-items:center;margin-top:24px}.drawer-card .small-copy{margin-top:18px}body[data-mode=setup][data-page=focus][data-focus-view=presets] .setup-card{inset:0;width:auto;padding:0;overflow:auto;border:0;border-radius:0;background:transparent;box-shadow:none}body[data-page=focus][data-focus-view=presets] .setup-steps{display:none}body[data-page=focus][data-focus-view=presets] .setup-card>.back,body[data-page=focus][data-focus-view=presets] .setup-footer .primary{position:fixed;z-index:2;width:clamp(180px,18vw,360px);height:clamp(48px,7.2vh,82px);min-height:48px;padding:0 22px;border:0;border-radius:0;box-shadow:none;background:transparent url("+new URL("../art/focus-nav.svg",document.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"&&document.currentScript.src||document.baseURI).href+') center/100% 100% no-repeat;color:#111!important;font:700 clamp(13px,1.1vw,22px) "Arial","Microsoft YaHei",sans-serif}body[data-page=focus][data-focus-view=presets] .setup-card>.back{left:-1.5vw;top:6vh}body[data-page=focus][data-focus-view=presets] .setup-footer .primary{right:9vw;bottom:8.5vh;min-width:0}body[data-page=focus][data-focus-view=presets] .setup-footer .primary:hover,body[data-page=focus][data-focus-view=presets] .setup-card>.back:hover{background-image:url('+new URL("../art/focus-nav.svg",document.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"&&document.currentScript.src||document.baseURI).href+");background-color:transparent;filter:drop-shadow(0 3px 1px #0002)}body[data-page=focus][data-focus-view=presets] #setupBody{flex:none;overflow:visible;margin:0;padding:0}body[data-page=focus][data-focus-view=presets] .setup-footer{position:static;background:transparent!important;margin:0;padding:0}body[data-page=focus][data-focus-view=presets] .focus-card-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4.5vw;width:82vw;max-width:1680px;margin:15.5vh auto 0;padding:0 0 21vh}.focus-card-slot{position:relative;min-width:0;padding-top:6.5vh}body[data-page=focus][data-focus-view=presets] .focus-card{position:relative;width:100%;aspect-ratio:327/563.4;display:block;margin:0;padding:0;min-height:0;background:transparent url("+new URL("../art/focus-card-default.svg",document.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"&&document.currentScript.src||document.baseURI).href+") center/100% 100% no-repeat;border:0;border-radius:0;box-shadow:none;color:#111;transition:filter .15s}body[data-page=focus][data-focus-view=presets] .focus-card[aria-pressed=true]{background:transparent url("+new URL("../art/focus-card-selected.svg",document.currentScript&&document.currentScript.tagName.toUpperCase()==="SCRIPT"&&document.currentScript.src||document.baseURI).href+`) center/100% 100% no-repeat;border:0;box-shadow:none}body[data-page=focus][data-focus-view=presets] .focus-card[aria-pressed=true]:before{content:none}body[data-page=focus][data-focus-view=presets] .focus-card:hover{filter:drop-shadow(0 4px 3px #0002)}body[data-page=focus][data-focus-view=presets] .focus-card:active{transform:none}body[data-page=focus][data-focus-view=presets] .focus-card canvas{position:absolute;left:16%;top:10%;width:68%;height:auto;aspect-ratio:180/210;margin:0;pointer-events:none}body[data-page=focus][data-focus-view=presets] .focus-card strong{position:absolute;left:8%;right:8%;top:84.5%;height:12%;display:flex;align-items:center;justify-content:center;font-family:Microsoft YaHei,Segoe UI,sans-serif;font-size:clamp(20px,2.1vw,43px);font-weight:400;letter-spacing:0;color:#111}.focus-selection-marker{position:absolute;top:0;left:50%;transform:translate(-50%);width:clamp(24px,2.4vw,48px);height:clamp(22px,2.15vw,43px);background:#171717;clip-path:polygon(0 0,100% 0,50% 100%);visibility:hidden}.focus-selection-marker:after{content:"";position:absolute;inset:3px 4px 6px;background:#fff;clip-path:polygon(0 0,100% 0,50% 100%)}.focus-card-slot[data-selected=true] .focus-selection-marker{visibility:visible}body[data-page=focus][data-focus-view=presets] .preset-points{position:absolute;top:calc(100% + 2.8vh);left:7%;right:7%;width:auto;padding:0;display:flex;justify-content:space-between;gap:8px;border:0}body[data-page=focus][data-focus-view=presets] .preset-points[hidden]{display:none}body[data-page=focus][data-focus-view=presets] .preset-points>span{display:grid;place-items:center;width:28%;aspect-ratio:1;background:#fff;border:1.7px solid #222;color:#111;font:400 clamp(22px,2.5vw,50px) "Arial",sans-serif}@media(min-width:761px)and (max-aspect-ratio:3/2){body[data-page=focus][data-focus-view=presets] .focus-card-grid{width:88vw;gap:3vw;margin-top:15vh}body[data-page=focus][data-focus-view=presets] .setup-footer .primary{right:6vw;bottom:5vh}}@media(min-width:761px)and (max-height:650px){body[data-page=focus][data-focus-view=presets] .focus-card-grid{width:min(76vw,245vh);gap:3vw;margin-top:10vh;padding-bottom:27vh}.focus-card-slot{padding-top:7vh}body[data-page=focus][data-focus-view=presets] .setup-footer .primary{bottom:3vh;right:3vw}}@media(max-width:760px){body[data-mode=setup][data-page=focus][data-focus-view=presets] .setup-card{inset:0!important;width:100%!important;padding:0}body[data-page=focus][data-focus-view=presets] .setup-card>.back{position:absolute;top:18px;left:-6px;width:155px;height:48px}body[data-page=focus][data-focus-view=presets] .focus-card-grid{width:90%;grid-template-columns:repeat(2,minmax(0,1fr));gap:88px 18px;margin:100px auto 0;padding-bottom:160px}.focus-card-slot{padding-top:30px}.focus-selection-marker{width:25px;height:24px}body[data-page=focus][data-focus-view=presets] .focus-card strong{font-size:clamp(19px,5vw,29px)}body[data-page=focus][data-focus-view=presets] .preset-points{top:calc(100% + 12px);gap:6px}body[data-page=focus][data-focus-view=presets] .preset-points>span{font-size:24px}body[data-page=focus][data-focus-view=presets] .setup-footer .primary{right:18px;bottom:18px;width:190px;height:50px;filter:drop-shadow(0 2px 5px #ede6fa)}}@media(max-width:760px){body[data-page=focus][data-focus-view=presets] .focus-card-grid{padding-bottom:90px}body[data-page=focus][data-focus-view=presets] .setup-footer{display:flex;justify-content:flex-end;padding:0 18px 24px}body[data-page=focus][data-focus-view=presets] .setup-footer .primary{position:relative;right:auto;bottom:auto}}
/*$vite$:1*/`,document.head.appendChild(As);const no=["自主感","胜任感","关系感"],Di={rent:{name:"独自租住",text:"刚毕业，房租需要自己承担。工坊试工多耗 1 份精力。",energy:7},local:{name:"暂住亲友家",text:"有人接住你的日常。邻里帮忙少耗 1 份精力，但别人也期待你的回应。",energy:6},fresh:{name:"带着积蓄迁来",text:"生活暂有余裕，街区却很陌生。初始精力较充裕。",energy:8}};function rs(i,e){let t=i|0;for(const n of e)t=Math.imul(t^n.charCodeAt(0),16777619);return(t>>>0)%3}const mA="180",io=0,ss=1,Ao=2,as=1,ro=2,en=3,dn=0,Mt=1,tn=2,fn=0,kn=1,os=2,cs=3,ls=4,so=5,wn=100,ao=101,oo=102,co=103,lo=104,fo=200,ho=201,uo=202,po=203,vA=204,xA=205,go=206,mo=207,vo=208,xo=209,Eo=210,Bo=211,Mo=212,_o=213,wo=214,EA=0,BA=1,MA=2,Gn=3,_A=4,wA=5,SA=6,CA=7,ds=0,So=1,Co=2,hn=0,bo=1,yo=2,To=3,Ro=4,Po=5,Io=6,Do=7,fs=300,On=301,zn=302,bA=303,yA=304,Ui=306,TA=1e3,Sn=1001,RA=1002,Qt=1003,Uo=1004,Fi=1005,Yt=1006,PA=1007,Cn=1008,Wt=1009,hs=1010,us=1011,fi=1012,IA=1013,bn=1014,nn=1015,hi=1016,DA=1017,UA=1018,ui=1020,ps=35902,gs=35899,ms=1021,vs=1022,Ht=1023,pi=1026,gi=1027,xs=1028,FA=1029,Es=1030,LA=1031,NA=1033,Li=33776,Ni=33777,Qi=33778,Hi=33779,QA=35840,HA=35841,kA=35842,GA=35843,OA=36196,zA=37492,VA=37496,YA=37808,WA=37809,XA=37810,jA=37811,JA=37812,KA=37813,ZA=37814,qA=37815,$A=37816,er=37817,tr=37818,nr=37819,ir=37820,Ar=37821,rr=36492,sr=36494,ar=36495,or=36283,cr=36284,lr=36285,dr=36286,Fo=3200,Lo=3201,Bs=0,No=1,un="",bt="srgb",Vn="srgb-linear",ki="linear",je="srgb",Yn=7680,Ms=519,Qo=512,Ho=513,ko=514,_s=515,Go=516,Oo=517,zo=518,Vo=519,ws=35044,Ss="300 es",Xt=2e3,Gi=2001;class Wn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const A=n[e];if(A!==void 0){const r=A.indexOf(t);r!==-1&&A.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const A=n.slice(0);for(let r=0,s=A.length;r<s;r++)A[r].call(this,e);e.target=null}}}const mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fr=Math.PI/180,hr=180/Math.PI;function mi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mt[i&255]+mt[i>>8&255]+mt[i>>16&255]+mt[i>>24&255]+"-"+mt[e&255]+mt[e>>8&255]+"-"+mt[e>>16&15|64]+mt[e>>24&255]+"-"+mt[t&63|128]+mt[t>>8&255]+"-"+mt[t>>16&255]+mt[t>>24&255]+mt[n&255]+mt[n>>8&255]+mt[n>>16&255]+mt[n>>24&255]).toLowerCase()}function ke(i,e,t){return Math.max(e,Math.min(t,i))}function Yo(i,e){return(i%e+e)%e}function ur(i,e,t){return(1-t)*i+t*e}function vi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,A=e.elements;return this.x=A[0]*t+A[3]*n+A[6],this.y=A[1]*t+A[4]*n+A[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),A=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*A+e.x,this.y=r*A+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xi{constructor(e=0,t=0,n=0,A=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=A}static slerpFlat(e,t,n,A,r,s,a){let c=n[A+0],o=n[A+1],d=n[A+2],f=n[A+3];const h=r[s+0],u=r[s+1],m=r[s+2],M=r[s+3];if(a===0){e[t+0]=c,e[t+1]=o,e[t+2]=d,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=u,e[t+2]=m,e[t+3]=M;return}if(f!==M||c!==h||o!==u||d!==m){let p=1-a;const l=c*h+o*u+d*m+f*M,S=l>=0?1:-1,w=1-l*l;if(w>Number.EPSILON){const y=Math.sqrt(w),C=Math.atan2(y,l*S);p=Math.sin(p*C)/y,a=Math.sin(a*C)/y}const B=a*S;if(c=c*p+h*B,o=o*p+u*B,d=d*p+m*B,f=f*p+M*B,p===1-a){const y=1/Math.sqrt(c*c+o*o+d*d+f*f);c*=y,o*=y,d*=y,f*=y}}e[t]=c,e[t+1]=o,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,A,r,s){const a=n[A],c=n[A+1],o=n[A+2],d=n[A+3],f=r[s],h=r[s+1],u=r[s+2],m=r[s+3];return e[t]=a*m+d*f+c*u-o*h,e[t+1]=c*m+d*h+o*f-a*u,e[t+2]=o*m+d*u+a*h-c*f,e[t+3]=d*m-a*f-c*h-o*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,A){return this._x=e,this._y=t,this._z=n,this._w=A,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,A=e._y,r=e._z,s=e._order,a=Math.cos,c=Math.sin,o=a(n/2),d=a(A/2),f=a(r/2),h=c(n/2),u=c(A/2),m=c(r/2);switch(s){case"XYZ":this._x=h*d*f+o*u*m,this._y=o*u*f-h*d*m,this._z=o*d*m+h*u*f,this._w=o*d*f-h*u*m;break;case"YXZ":this._x=h*d*f+o*u*m,this._y=o*u*f-h*d*m,this._z=o*d*m-h*u*f,this._w=o*d*f+h*u*m;break;case"ZXY":this._x=h*d*f-o*u*m,this._y=o*u*f+h*d*m,this._z=o*d*m+h*u*f,this._w=o*d*f-h*u*m;break;case"ZYX":this._x=h*d*f-o*u*m,this._y=o*u*f+h*d*m,this._z=o*d*m-h*u*f,this._w=o*d*f+h*u*m;break;case"YZX":this._x=h*d*f+o*u*m,this._y=o*u*f+h*d*m,this._z=o*d*m-h*u*f,this._w=o*d*f-h*u*m;break;case"XZY":this._x=h*d*f-o*u*m,this._y=o*u*f-h*d*m,this._z=o*d*m+h*u*f,this._w=o*d*f+h*u*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,A=Math.sin(n);return this._x=e.x*A,this._y=e.y*A,this._z=e.z*A,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],A=t[4],r=t[8],s=t[1],a=t[5],c=t[9],o=t[2],d=t[6],f=t[10],h=n+a+f;if(h>0){const u=.5/Math.sqrt(h+1);this._w=.25/u,this._x=(d-c)*u,this._y=(r-o)*u,this._z=(s-A)*u}else if(n>a&&n>f){const u=2*Math.sqrt(1+n-a-f);this._w=(d-c)/u,this._x=.25*u,this._y=(A+s)/u,this._z=(r+o)/u}else if(a>f){const u=2*Math.sqrt(1+a-n-f);this._w=(r-o)/u,this._x=(A+s)/u,this._y=.25*u,this._z=(c+d)/u}else{const u=2*Math.sqrt(1+f-n-a);this._w=(s-A)/u,this._x=(r+o)/u,this._y=(c+d)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const A=Math.min(1,t/n);return this.slerp(e,A),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,A=e._y,r=e._z,s=e._w,a=t._x,c=t._y,o=t._z,d=t._w;return this._x=n*d+s*a+A*o-r*c,this._y=A*d+s*c+r*a-n*o,this._z=r*d+s*o+n*c-A*a,this._w=s*d-n*a-A*c-r*o,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,A=this._y,r=this._z,s=this._w;let a=s*e._w+n*e._x+A*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=n,this._y=A,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const u=1-t;return this._w=u*s+t*this._w,this._x=u*n+t*this._x,this._y=u*A+t*this._y,this._z=u*r+t*this._z,this.normalize(),this}const o=Math.sqrt(c),d=Math.atan2(o,a),f=Math.sin((1-t)*d)/o,h=Math.sin(t*d)/o;return this._w=s*f+this._w*h,this._x=n*f+this._x*h,this._y=A*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),A=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(A*Math.sin(e),A*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cs.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cs.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,A=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*A,this.y=r[1]*t+r[4]*n+r[7]*A,this.z=r[2]*t+r[5]*n+r[8]*A,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,A=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*A+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*A+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*A+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*A+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,A=this.z,r=e.x,s=e.y,a=e.z,c=e.w,o=2*(s*A-a*n),d=2*(a*t-r*A),f=2*(r*n-s*t);return this.x=t+c*o+s*f-a*d,this.y=n+c*d+a*o-r*f,this.z=A+c*f+r*d-s*o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,A=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*A,this.y=r[1]*t+r[5]*n+r[9]*A,this.z=r[2]*t+r[6]*n+r[10]*A,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,A=e.y,r=e.z,s=t.x,a=t.y,c=t.z;return this.x=A*c-r*a,this.y=r*s-n*c,this.z=n*a-A*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pr.copy(this).projectOnVector(e),this.sub(pr)}reflect(e){return this.sub(pr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,A=this.z-e.z;return t*t+n*n+A*A}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const A=Math.sin(t)*e;return this.x=A*Math.sin(n),this.y=Math.cos(t)*e,this.z=A*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),A=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=A,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pr=new F,Cs=new xi;class Ue{constructor(e,t,n,A,r,s,a,c,o){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,A,r,s,a,c,o)}set(e,t,n,A,r,s,a,c,o){const d=this.elements;return d[0]=e,d[1]=A,d[2]=a,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=s,d[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,A=t.elements,r=this.elements,s=n[0],a=n[3],c=n[6],o=n[1],d=n[4],f=n[7],h=n[2],u=n[5],m=n[8],M=A[0],p=A[3],l=A[6],S=A[1],w=A[4],B=A[7],y=A[2],C=A[5],T=A[8];return r[0]=s*M+a*S+c*y,r[3]=s*p+a*w+c*C,r[6]=s*l+a*B+c*T,r[1]=o*M+d*S+f*y,r[4]=o*p+d*w+f*C,r[7]=o*l+d*B+f*T,r[2]=h*M+u*S+m*y,r[5]=h*p+u*w+m*C,r[8]=h*l+u*B+m*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],A=e[2],r=e[3],s=e[4],a=e[5],c=e[6],o=e[7],d=e[8];return t*s*d-t*a*o-n*r*d+n*a*c+A*r*o-A*s*c}invert(){const e=this.elements,t=e[0],n=e[1],A=e[2],r=e[3],s=e[4],a=e[5],c=e[6],o=e[7],d=e[8],f=d*s-a*o,h=a*c-d*r,u=o*r-s*c,m=t*f+n*h+A*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/m;return e[0]=f*M,e[1]=(A*o-d*n)*M,e[2]=(a*n-A*s)*M,e[3]=h*M,e[4]=(d*t-A*c)*M,e[5]=(A*r-a*t)*M,e[6]=u*M,e[7]=(n*c-o*t)*M,e[8]=(s*t-n*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,A,r,s,a){const c=Math.cos(r),o=Math.sin(r);return this.set(n*c,n*o,-n*(c*s+o*a)+s+e,-A*o,A*c,-A*(-o*s+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(gr.makeScale(e,t)),this}rotate(e){return this.premultiply(gr.makeRotation(-e)),this}translate(e,t){return this.premultiply(gr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let A=0;A<9;A++)if(t[A]!==n[A])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gr=new Ue;function bs(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Oi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wo(){const i=Oi("canvas");return i.style.display="block",i}const ys={};function Ei(i){i in ys||(ys[i]=!0,console.warn(i))}function Xo(i,e,t){return new Promise(function(n,A){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:A();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Ts=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rs=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jo(){const i={enabled:!0,workingColorSpace:Vn,spaces:{},convert:function(A,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===je&&(A.r=An(A.r),A.g=An(A.g),A.b=An(A.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(A.applyMatrix3(this.spaces[r].toXYZ),A.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===je&&(A.r=Xn(A.r),A.g=Xn(A.g),A.b=Xn(A.b))),A},workingToColorSpace:function(A,r){return this.convert(A,this.workingColorSpace,r)},colorSpaceToWorking:function(A,r){return this.convert(A,r,this.workingColorSpace)},getPrimaries:function(A){return this.spaces[A].primaries},getTransfer:function(A){return A===un?ki:this.spaces[A].transfer},getToneMappingMode:function(A){return this.spaces[A].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(A,r=this.workingColorSpace){return A.fromArray(this.spaces[r].luminanceCoefficients)},define:function(A){Object.assign(this.spaces,A)},_getMatrix:function(A,r,s){return A.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(A){return this.spaces[A].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(A=this.workingColorSpace){return this.spaces[A].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(A,r){return Ei("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(A,r)},toWorkingColorSpace:function(A,r){return Ei("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(A,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Vn]:{primaries:e,whitePoint:n,transfer:ki,toXYZ:Ts,fromXYZ:Rs,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:bt},outputColorSpaceConfig:{drawingBufferColorSpace:bt}},[bt]:{primaries:e,whitePoint:n,transfer:je,toXYZ:Ts,fromXYZ:Rs,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:bt}}}),i}const ze=jo();function An(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xn(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let jn;class Jo{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{jn===void 0&&(jn=Oi("canvas")),jn.width=e.width,jn.height=e.height;const A=jn.getContext("2d");e instanceof ImageData?A.putImageData(e,0,0):A.drawImage(e,0,0,e.width,e.height),n=jn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Oi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const A=n.getImageData(0,0,e.width,e.height),r=A.data;for(let s=0;s<r.length;s++)r[s]=An(r[s]/255)*255;return n.putImageData(A,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(An(t[n]/255)*255):t[n]=An(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ko=0;class mr{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ko++}),this.uuid=mi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},A=this.data;if(A!==null){let r;if(Array.isArray(A)){r=[];for(let s=0,a=A.length;s<a;s++)A[s].isDataTexture?r.push(vr(A[s].image)):r.push(vr(A[s]))}else r=vr(A);n.url=r}return t||(e.images[this.uuid]=n),n}}function vr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Jo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zo=0;const xr=new F;class wt extends Wn{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=Sn,A=Sn,r=Yt,s=Cn,a=Ht,c=Wt,o=wt.DEFAULT_ANISOTROPY,d=un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zo++}),this.uuid=mi(),this.name="",this.source=new mr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=A,this.magFilter=r,this.minFilter=s,this.anisotropy=o,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xr).x}get height(){return this.source.getSize(xr).y}get depth(){return this.source.getSize(xr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const A=this[t];if(A===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}A&&n&&A.isVector2&&n.isVector2||A&&n&&A.isVector3&&n.isVector3||A&&n&&A.isMatrix3&&n.isMatrix3?A.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fs)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case TA:e.x=e.x-Math.floor(e.x);break;case Sn:e.x=e.x<0?0:1;break;case RA:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case TA:e.y=e.y-Math.floor(e.y);break;case Sn:e.y=e.y<0?0:1;break;case RA:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null,wt.DEFAULT_MAPPING=fs,wt.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,n=0,A=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=A}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,A){return this.x=e,this.y=t,this.z=n,this.w=A,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,A=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*A+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*A+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*A+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*A+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,A,r;const c=e.elements,o=c[0],d=c[4],f=c[8],h=c[1],u=c[5],m=c[9],M=c[2],p=c[6],l=c[10];if(Math.abs(d-h)<.01&&Math.abs(f-M)<.01&&Math.abs(m-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+M)<.1&&Math.abs(m+p)<.1&&Math.abs(o+u+l-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(o+1)/2,B=(u+1)/2,y=(l+1)/2,C=(d+h)/4,T=(f+M)/4,I=(m+p)/4;return w>B&&w>y?w<.01?(n=0,A=.707106781,r=.707106781):(n=Math.sqrt(w),A=C/n,r=T/n):B>y?B<.01?(n=.707106781,A=0,r=.707106781):(A=Math.sqrt(B),n=C/A,r=I/A):y<.01?(n=.707106781,A=.707106781,r=0):(r=Math.sqrt(y),n=T/r,A=I/r),this.set(n,A,r,t),this}let S=Math.sqrt((p-m)*(p-m)+(f-M)*(f-M)+(h-d)*(h-d));return Math.abs(S)<.001&&(S=1),this.x=(p-m)/S,this.y=(f-M)/S,this.z=(h-d)/S,this.w=Math.acos((o+u+l-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qo extends Wn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const A={width:e,height:t,depth:n.depth},r=new wt(A);this.textures=[];const s=n.count;for(let a=0;a<s;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let A=0,r=this.textures.length;A<r;A++)this.textures[A].image.width=e,this.textures[A].image.height=t,this.textures[A].image.depth=n,this.textures[A].isArrayTexture=this.textures[A].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const A=Object.assign({},e.textures[t].image);this.textures[t].source=new mr(A)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pn extends qo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ps extends wt{constructor(e=null,t=1,n=1,A=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:A},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $o extends wt{constructor(e=null,t=1,n=1,A=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:A},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bi{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=r.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,kt):kt.fromBufferAttribute(r,s),kt.applyMatrix4(e.matrixWorld),this.expandByPoint(kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zi.copy(n.boundingBox)),zi.applyMatrix4(e.matrixWorld),this.union(zi)}const A=e.children;for(let r=0,s=A.length;r<s;r++)this.expandByObject(A[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kt),kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mi),Vi.subVectors(this.max,Mi),Jn.subVectors(e.a,Mi),Kn.subVectors(e.b,Mi),Zn.subVectors(e.c,Mi),gn.subVectors(Kn,Jn),mn.subVectors(Zn,Kn),yn.subVectors(Jn,Zn);let t=[0,-gn.z,gn.y,0,-mn.z,mn.y,0,-yn.z,yn.y,gn.z,0,-gn.x,mn.z,0,-mn.x,yn.z,0,-yn.x,-gn.y,gn.x,0,-mn.y,mn.x,0,-yn.y,yn.x,0];return!Er(t,Jn,Kn,Zn,Vi)||(t=[1,0,0,0,1,0,0,0,1],!Er(t,Jn,Kn,Zn,Vi))?!1:(Yi.crossVectors(gn,mn),t=[Yi.x,Yi.y,Yi.z],Er(t,Jn,Kn,Zn,Vi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const rn=[new F,new F,new F,new F,new F,new F,new F,new F],kt=new F,zi=new Bi,Jn=new F,Kn=new F,Zn=new F,gn=new F,mn=new F,yn=new F,Mi=new F,Vi=new F,Yi=new F,Tn=new F;function Er(i,e,t,n,A){for(let r=0,s=i.length-3;r<=s;r+=3){Tn.fromArray(i,r);const a=A.x*Math.abs(Tn.x)+A.y*Math.abs(Tn.y)+A.z*Math.abs(Tn.z),c=e.dot(Tn),o=t.dot(Tn),d=n.dot(Tn);if(Math.max(-Math.max(c,o,d),Math.min(c,o,d))>a)return!1}return!0}const ec=new Bi,_i=new F,Br=new F;class Mr{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ec.setFromPoints(e).getCenter(n);let A=0;for(let r=0,s=e.length;r<s;r++)A=Math.max(A,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(A),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_i.subVectors(e,this.center);const t=_i.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),A=(n-this.radius)*.5;this.center.addScaledVector(_i,A/n),this.radius+=A}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Br.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_i.copy(e.center).add(Br)),this.expandByPoint(_i.copy(e.center).sub(Br))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const sn=new F,_r=new F,Wi=new F,vn=new F,wr=new F,Xi=new F,Sr=new F;class tc{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sn.copy(this.origin).addScaledVector(this.direction,t),sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,A){_r.copy(e).add(t).multiplyScalar(.5),Wi.copy(t).sub(e).normalize(),vn.copy(this.origin).sub(_r);const r=e.distanceTo(t)*.5,s=-this.direction.dot(Wi),a=vn.dot(this.direction),c=-vn.dot(Wi),o=vn.lengthSq(),d=Math.abs(1-s*s);let f,h,u,m;if(d>0)if(f=s*c-a,h=s*a-c,m=r*d,f>=0)if(h>=-m)if(h<=m){const M=1/d;f*=M,h*=M,u=f*(f+s*h+2*a)+h*(s*f+h+2*c)+o}else h=r,f=Math.max(0,-(s*h+a)),u=-f*f+h*(h+2*c)+o;else h=-r,f=Math.max(0,-(s*h+a)),u=-f*f+h*(h+2*c)+o;else h<=-m?(f=Math.max(0,-(-s*r+a)),h=f>0?-r:Math.min(Math.max(-r,-c),r),u=-f*f+h*(h+2*c)+o):h<=m?(f=0,h=Math.min(Math.max(-r,-c),r),u=h*(h+2*c)+o):(f=Math.max(0,-(s*r+a)),h=f>0?r:Math.min(Math.max(-r,-c),r),u=-f*f+h*(h+2*c)+o);else h=s>0?-r:r,f=Math.max(0,-(s*h+a)),u=-f*f+h*(h+2*c)+o;return n&&n.copy(this.origin).addScaledVector(this.direction,f),A&&A.copy(_r).addScaledVector(Wi,h),u}intersectSphere(e,t){sn.subVectors(e.center,this.origin);const n=sn.dot(this.direction),A=sn.dot(sn)-n*n,r=e.radius*e.radius;if(A>r)return null;const s=Math.sqrt(r-A),a=n-s,c=n+s;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,A,r,s,a,c;const o=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return o>=0?(n=(e.min.x-h.x)*o,A=(e.max.x-h.x)*o):(n=(e.max.x-h.x)*o,A=(e.min.x-h.x)*o),d>=0?(r=(e.min.y-h.y)*d,s=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,s=(e.min.y-h.y)*d),n>s||r>A||((r>n||isNaN(n))&&(n=r),(s<A||isNaN(A))&&(A=s),f>=0?(a=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),n>c||a>A)||((a>n||n!==n)&&(n=a),(c<A||A!==A)&&(A=c),A<0)?null:this.at(n>=0?n:A,t)}intersectsBox(e){return this.intersectBox(e,sn)!==null}intersectTriangle(e,t,n,A,r){wr.subVectors(t,e),Xi.subVectors(n,e),Sr.crossVectors(wr,Xi);let s=this.direction.dot(Sr),a;if(s>0){if(A)return null;a=1}else if(s<0)a=-1,s=-s;else return null;vn.subVectors(this.origin,e);const c=a*this.direction.dot(Xi.crossVectors(vn,Xi));if(c<0)return null;const o=a*this.direction.dot(wr.cross(vn));if(o<0||c+o>s)return null;const d=-a*vn.dot(Sr);return d<0?null:this.at(d/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,A,r,s,a,c,o,d,f,h,u,m,M,p){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,A,r,s,a,c,o,d,f,h,u,m,M,p)}set(e,t,n,A,r,s,a,c,o,d,f,h,u,m,M,p){const l=this.elements;return l[0]=e,l[4]=t,l[8]=n,l[12]=A,l[1]=r,l[5]=s,l[9]=a,l[13]=c,l[2]=o,l[6]=d,l[10]=f,l[14]=h,l[3]=u,l[7]=m,l[11]=M,l[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,A=1/qn.setFromMatrixColumn(e,0).length(),r=1/qn.setFromMatrixColumn(e,1).length(),s=1/qn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*A,t[1]=n[1]*A,t[2]=n[2]*A,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,A=e.y,r=e.z,s=Math.cos(n),a=Math.sin(n),c=Math.cos(A),o=Math.sin(A),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=s*d,u=s*f,m=a*d,M=a*f;t[0]=c*d,t[4]=-c*f,t[8]=o,t[1]=u+m*o,t[5]=h-M*o,t[9]=-a*c,t[2]=M-h*o,t[6]=m+u*o,t[10]=s*c}else if(e.order==="YXZ"){const h=c*d,u=c*f,m=o*d,M=o*f;t[0]=h+M*a,t[4]=m*a-u,t[8]=s*o,t[1]=s*f,t[5]=s*d,t[9]=-a,t[2]=u*a-m,t[6]=M+h*a,t[10]=s*c}else if(e.order==="ZXY"){const h=c*d,u=c*f,m=o*d,M=o*f;t[0]=h-M*a,t[4]=-s*f,t[8]=m+u*a,t[1]=u+m*a,t[5]=s*d,t[9]=M-h*a,t[2]=-s*o,t[6]=a,t[10]=s*c}else if(e.order==="ZYX"){const h=s*d,u=s*f,m=a*d,M=a*f;t[0]=c*d,t[4]=m*o-u,t[8]=h*o+M,t[1]=c*f,t[5]=M*o+h,t[9]=u*o-m,t[2]=-o,t[6]=a*c,t[10]=s*c}else if(e.order==="YZX"){const h=s*c,u=s*o,m=a*c,M=a*o;t[0]=c*d,t[4]=M-h*f,t[8]=m*f+u,t[1]=f,t[5]=s*d,t[9]=-a*d,t[2]=-o*d,t[6]=u*f+m,t[10]=h-M*f}else if(e.order==="XZY"){const h=s*c,u=s*o,m=a*c,M=a*o;t[0]=c*d,t[4]=-f,t[8]=o*d,t[1]=h*f+M,t[5]=s*d,t[9]=u*f-m,t[2]=m*f-u,t[6]=a*d,t[10]=M*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nc,e,ic)}lookAt(e,t,n){const A=this.elements;return yt.subVectors(e,t),yt.lengthSq()===0&&(yt.z=1),yt.normalize(),xn.crossVectors(n,yt),xn.lengthSq()===0&&(Math.abs(n.z)===1?yt.x+=1e-4:yt.z+=1e-4,yt.normalize(),xn.crossVectors(n,yt)),xn.normalize(),ji.crossVectors(yt,xn),A[0]=xn.x,A[4]=ji.x,A[8]=yt.x,A[1]=xn.y,A[5]=ji.y,A[9]=yt.y,A[2]=xn.z,A[6]=ji.z,A[10]=yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,A=t.elements,r=this.elements,s=n[0],a=n[4],c=n[8],o=n[12],d=n[1],f=n[5],h=n[9],u=n[13],m=n[2],M=n[6],p=n[10],l=n[14],S=n[3],w=n[7],B=n[11],y=n[15],C=A[0],T=A[4],I=A[8],E=A[12],x=A[1],R=A[5],L=A[9],k=A[13],z=A[2],W=A[6],V=A[10],te=A[14],G=A[3],re=A[7],ce=A[11],Me=A[15];return r[0]=s*C+a*x+c*z+o*G,r[4]=s*T+a*R+c*W+o*re,r[8]=s*I+a*L+c*V+o*ce,r[12]=s*E+a*k+c*te+o*Me,r[1]=d*C+f*x+h*z+u*G,r[5]=d*T+f*R+h*W+u*re,r[9]=d*I+f*L+h*V+u*ce,r[13]=d*E+f*k+h*te+u*Me,r[2]=m*C+M*x+p*z+l*G,r[6]=m*T+M*R+p*W+l*re,r[10]=m*I+M*L+p*V+l*ce,r[14]=m*E+M*k+p*te+l*Me,r[3]=S*C+w*x+B*z+y*G,r[7]=S*T+w*R+B*W+y*re,r[11]=S*I+w*L+B*V+y*ce,r[15]=S*E+w*k+B*te+y*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],A=e[8],r=e[12],s=e[1],a=e[5],c=e[9],o=e[13],d=e[2],f=e[6],h=e[10],u=e[14],m=e[3],M=e[7],p=e[11],l=e[15];return m*(+r*c*f-A*o*f-r*a*h+n*o*h+A*a*u-n*c*u)+M*(+t*c*u-t*o*h+r*s*h-A*s*u+A*o*d-r*c*d)+p*(+t*o*f-t*a*u-r*s*f+n*s*u+r*a*d-n*o*d)+l*(-A*a*d-t*c*f+t*a*h+A*s*f-n*s*h+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const A=this.elements;return e.isVector3?(A[12]=e.x,A[13]=e.y,A[14]=e.z):(A[12]=e,A[13]=t,A[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],A=e[2],r=e[3],s=e[4],a=e[5],c=e[6],o=e[7],d=e[8],f=e[9],h=e[10],u=e[11],m=e[12],M=e[13],p=e[14],l=e[15],S=f*p*o-M*h*o+M*c*u-a*p*u-f*c*l+a*h*l,w=m*h*o-d*p*o-m*c*u+s*p*u+d*c*l-s*h*l,B=d*M*o-m*f*o+m*a*u-s*M*u-d*a*l+s*f*l,y=m*f*c-d*M*c-m*a*h+s*M*h+d*a*p-s*f*p,C=t*S+n*w+A*B+r*y;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=S*T,e[1]=(M*h*r-f*p*r-M*A*u+n*p*u+f*A*l-n*h*l)*T,e[2]=(a*p*r-M*c*r+M*A*o-n*p*o-a*A*l+n*c*l)*T,e[3]=(f*c*r-a*h*r-f*A*o+n*h*o+a*A*u-n*c*u)*T,e[4]=w*T,e[5]=(d*p*r-m*h*r+m*A*u-t*p*u-d*A*l+t*h*l)*T,e[6]=(m*c*r-s*p*r-m*A*o+t*p*o+s*A*l-t*c*l)*T,e[7]=(s*h*r-d*c*r+d*A*o-t*h*o-s*A*u+t*c*u)*T,e[8]=B*T,e[9]=(m*f*r-d*M*r-m*n*u+t*M*u+d*n*l-t*f*l)*T,e[10]=(s*M*r-m*a*r+m*n*o-t*M*o-s*n*l+t*a*l)*T,e[11]=(d*a*r-s*f*r-d*n*o+t*f*o+s*n*u-t*a*u)*T,e[12]=y*T,e[13]=(d*M*A-m*f*A+m*n*h-t*M*h-d*n*p+t*f*p)*T,e[14]=(m*a*A-s*M*A-m*n*c+t*M*c+s*n*p-t*a*p)*T,e[15]=(s*f*A-d*a*A+d*n*c-t*f*c-s*n*h+t*a*h)*T,this}scale(e){const t=this.elements,n=e.x,A=e.y,r=e.z;return t[0]*=n,t[4]*=A,t[8]*=r,t[1]*=n,t[5]*=A,t[9]*=r,t[2]*=n,t[6]*=A,t[10]*=r,t[3]*=n,t[7]*=A,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],A=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,A))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),A=Math.sin(t),r=1-n,s=e.x,a=e.y,c=e.z,o=r*s,d=r*a;return this.set(o*s+n,o*a-A*c,o*c+A*a,0,o*a+A*c,d*a+n,d*c-A*s,0,o*c-A*a,d*c+A*s,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,A,r,s){return this.set(1,n,r,0,e,1,s,0,t,A,1,0,0,0,0,1),this}compose(e,t,n){const A=this.elements,r=t._x,s=t._y,a=t._z,c=t._w,o=r+r,d=s+s,f=a+a,h=r*o,u=r*d,m=r*f,M=s*d,p=s*f,l=a*f,S=c*o,w=c*d,B=c*f,y=n.x,C=n.y,T=n.z;return A[0]=(1-(M+l))*y,A[1]=(u+B)*y,A[2]=(m-w)*y,A[3]=0,A[4]=(u-B)*C,A[5]=(1-(h+l))*C,A[6]=(p+S)*C,A[7]=0,A[8]=(m+w)*T,A[9]=(p-S)*T,A[10]=(1-(h+M))*T,A[11]=0,A[12]=e.x,A[13]=e.y,A[14]=e.z,A[15]=1,this}decompose(e,t,n){const A=this.elements;let r=qn.set(A[0],A[1],A[2]).length();const s=qn.set(A[4],A[5],A[6]).length(),a=qn.set(A[8],A[9],A[10]).length();this.determinant()<0&&(r=-r),e.x=A[12],e.y=A[13],e.z=A[14],Gt.copy(this);const o=1/r,d=1/s,f=1/a;return Gt.elements[0]*=o,Gt.elements[1]*=o,Gt.elements[2]*=o,Gt.elements[4]*=d,Gt.elements[5]*=d,Gt.elements[6]*=d,Gt.elements[8]*=f,Gt.elements[9]*=f,Gt.elements[10]*=f,t.setFromRotationMatrix(Gt),n.x=r,n.y=s,n.z=a,this}makePerspective(e,t,n,A,r,s,a=Xt,c=!1){const o=this.elements,d=2*r/(t-e),f=2*r/(n-A),h=(t+e)/(t-e),u=(n+A)/(n-A);let m,M;if(c)m=r/(s-r),M=s*r/(s-r);else if(a===Xt)m=-(s+r)/(s-r),M=-2*s*r/(s-r);else if(a===Gi)m=-s/(s-r),M=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return o[0]=d,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=f,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=m,o[14]=M,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,A,r,s,a=Xt,c=!1){const o=this.elements,d=2/(t-e),f=2/(n-A),h=-(t+e)/(t-e),u=-(n+A)/(n-A);let m,M;if(c)m=1/(s-r),M=s/(s-r);else if(a===Xt)m=-2/(s-r),M=-(s+r)/(s-r);else if(a===Gi)m=-1/(s-r),M=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return o[0]=d,o[4]=0,o[8]=0,o[12]=h,o[1]=0,o[5]=f,o[9]=0,o[13]=u,o[2]=0,o[6]=0,o[10]=m,o[14]=M,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let A=0;A<16;A++)if(t[A]!==n[A])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qn=new F,Gt=new at,nc=new F(0,0,0),ic=new F(1,1,1),xn=new F,ji=new F,yt=new F,Is=new at,Ds=new xi;class jt{constructor(e=0,t=0,n=0,A=jt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=A}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,A=this._order){return this._x=e,this._y=t,this._z=n,this._order=A,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const A=e.elements,r=A[0],s=A[4],a=A[8],c=A[1],o=A[5],d=A[9],f=A[2],h=A[6],u=A[10];switch(t){case"XYZ":this._y=Math.asin(ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,u),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(h,o),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(c,o)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-s,o)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-s,o));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,o),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-ke(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,o),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Is.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Is,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ds.setFromEuler(this),this.setFromQuaternion(Ds,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jt.DEFAULT_ORDER="XYZ";class Us{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ac=0;const Fs=new F,$n=new xi,an=new at,Ji=new F,wi=new F,rc=new F,sc=new xi,Ls=new F(1,0,0),Ns=new F(0,1,0),Qs=new F(0,0,1),Hs={type:"added"},ac={type:"removed"},ei={type:"childadded",child:null},Cr={type:"childremoved",child:null};class gt extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ac++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new F,t=new jt,n=new xi,A=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:A},modelViewMatrix:{value:new at},normalMatrix:{value:new Ue}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Us,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $n.setFromAxisAngle(e,t),this.quaternion.multiply($n),this}rotateOnWorldAxis(e,t){return $n.setFromAxisAngle(e,t),this.quaternion.premultiply($n),this}rotateX(e){return this.rotateOnAxis(Ls,e)}rotateY(e){return this.rotateOnAxis(Ns,e)}rotateZ(e){return this.rotateOnAxis(Qs,e)}translateOnAxis(e,t){return Fs.copy(e).applyQuaternion(this.quaternion),this.position.add(Fs.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ls,e)}translateY(e){return this.translateOnAxis(Ns,e)}translateZ(e){return this.translateOnAxis(Qs,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ji.copy(e):Ji.set(e,t,n);const A=this.parent;this.updateWorldMatrix(!0,!1),wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(wi,Ji,this.up):an.lookAt(Ji,wi,this.up),this.quaternion.setFromRotationMatrix(an),A&&(an.extractRotation(A.matrixWorld),$n.setFromRotationMatrix(an),this.quaternion.premultiply($n.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hs),ei.child=e,this.dispatchEvent(ei),ei.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ac),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),an.multiply(e.parent.matrixWorld)),e.applyMatrix4(an),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hs),ei.child=e,this.dispatchEvent(ei),ei.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,A=this.children.length;n<A;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const A=this.children;for(let r=0,s=A.length;r<s;r++)A[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,e,rc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,sc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,A=t.length;n<A;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,A=t.length;n<A;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,A=t.length;n<A;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const A=this.children;for(let r=0,s=A.length;r<s;r++)A[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const A={};A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),this.castShadow===!0&&(A.castShadow=!0),this.receiveShadow===!0&&(A.receiveShadow=!0),this.visible===!1&&(A.visible=!1),this.frustumCulled===!1&&(A.frustumCulled=!1),this.renderOrder!==0&&(A.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(A.userData=this.userData),A.layers=this.layers.mask,A.matrix=this.matrix.toArray(),A.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(A.matrixAutoUpdate=!1),this.isInstancedMesh&&(A.type="InstancedMesh",A.count=this.count,A.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(A.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(A.type="BatchedMesh",A.perObjectFrustumCulled=this.perObjectFrustumCulled,A.sortObjects=this.sortObjects,A.drawRanges=this._drawRanges,A.reservedRanges=this._reservedRanges,A.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),A.instanceInfo=this._instanceInfo.map(a=>({...a})),A.availableInstanceIds=this._availableInstanceIds.slice(),A.availableGeometryIds=this._availableGeometryIds.slice(),A.nextIndexStart=this._nextIndexStart,A.nextVertexStart=this._nextVertexStart,A.geometryCount=this._geometryCount,A.maxInstanceCount=this._maxInstanceCount,A.maxVertexCount=this._maxVertexCount,A.maxIndexCount=this._maxIndexCount,A.geometryInitialized=this._geometryInitialized,A.matricesTexture=this._matricesTexture.toJSON(e),A.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(A.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(A.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(A.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?A.background=this.background.toJSON():this.background.isTexture&&(A.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(A.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){A.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let o=0,d=c.length;o<d;o++){const f=c[o];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(A.bindMode=this.bindMode,A.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),A.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,o=this.material.length;c<o;c++)a.push(r(e.materials,this.material[c]));A.material=a}else A.material=r(e.materials,this.material);if(this.children.length>0){A.children=[];for(let a=0;a<this.children.length;a++)A.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){A.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];A.animations.push(r(e.animations,c))}}if(t){const a=s(e.geometries),c=s(e.materials),o=s(e.textures),d=s(e.images),f=s(e.shapes),h=s(e.skeletons),u=s(e.animations),m=s(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),o.length>0&&(n.textures=o),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=A,n;function s(a){const c=[];for(const o in a){const d=a[o];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const A=e.children[n];this.add(A.clone())}return this}}gt.DEFAULT_UP=new F(0,1,0),gt.DEFAULT_MATRIX_AUTO_UPDATE=!0,gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ot=new F,on=new F,br=new F,cn=new F,ti=new F,ni=new F,ks=new F,yr=new F,Tr=new F,Rr=new F,Pr=new rt,Ir=new rt,Dr=new rt;class zt{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,A){A.subVectors(n,t),Ot.subVectors(e,t),A.cross(Ot);const r=A.lengthSq();return r>0?A.multiplyScalar(1/Math.sqrt(r)):A.set(0,0,0)}static getBarycoord(e,t,n,A,r){Ot.subVectors(A,t),on.subVectors(n,t),br.subVectors(e,t);const s=Ot.dot(Ot),a=Ot.dot(on),c=Ot.dot(br),o=on.dot(on),d=on.dot(br),f=s*o-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,u=(o*c-a*d)*h,m=(s*d-a*c)*h;return r.set(1-u-m,m,u)}static containsPoint(e,t,n,A){return this.getBarycoord(e,t,n,A,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(e,t,n,A,r,s,a,c){return this.getBarycoord(e,t,n,A,cn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,cn.x),c.addScaledVector(s,cn.y),c.addScaledVector(a,cn.z),c)}static getInterpolatedAttribute(e,t,n,A,r,s){return Pr.setScalar(0),Ir.setScalar(0),Dr.setScalar(0),Pr.fromBufferAttribute(e,t),Ir.fromBufferAttribute(e,n),Dr.fromBufferAttribute(e,A),s.setScalar(0),s.addScaledVector(Pr,r.x),s.addScaledVector(Ir,r.y),s.addScaledVector(Dr,r.z),s}static isFrontFacing(e,t,n,A){return Ot.subVectors(n,t),on.subVectors(e,t),Ot.cross(on).dot(A)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,A){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[A]),this}setFromAttributeAndIndices(e,t,n,A){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,A),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ot.subVectors(this.c,this.b),on.subVectors(this.a,this.b),Ot.cross(on).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,A,r){return zt.getInterpolation(e,this.a,this.b,this.c,t,n,A,r)}containsPoint(e){return zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,A=this.b,r=this.c;let s,a;ti.subVectors(A,n),ni.subVectors(r,n),yr.subVectors(e,n);const c=ti.dot(yr),o=ni.dot(yr);if(c<=0&&o<=0)return t.copy(n);Tr.subVectors(e,A);const d=ti.dot(Tr),f=ni.dot(Tr);if(d>=0&&f<=d)return t.copy(A);const h=c*f-d*o;if(h<=0&&c>=0&&d<=0)return s=c/(c-d),t.copy(n).addScaledVector(ti,s);Rr.subVectors(e,r);const u=ti.dot(Rr),m=ni.dot(Rr);if(m>=0&&u<=m)return t.copy(r);const M=u*o-c*m;if(M<=0&&o>=0&&m<=0)return a=o/(o-m),t.copy(n).addScaledVector(ni,a);const p=d*m-u*f;if(p<=0&&f-d>=0&&u-m>=0)return ks.subVectors(r,A),a=(f-d)/(f-d+(u-m)),t.copy(A).addScaledVector(ks,a);const l=1/(p+M+h);return s=M*l,a=h*l,t.copy(n).addScaledVector(ti,s).addScaledVector(ni,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gs={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},Ki={h:0,s:0,l:0};function Ur(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const A=e;A&&A.isColor?this.copy(A):typeof A=="number"?this.setHex(A):typeof A=="string"&&this.setStyle(A)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,A=ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,ze.colorSpaceToWorking(this,A),this}setHSL(e,t,n,A=ze.workingColorSpace){if(e=Yo(e,1),t=ke(t,0,1),n=ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=Ur(s,r,e+1/3),this.g=Ur(s,r,e),this.b=Ur(s,r,e-1/3)}return ze.colorSpaceToWorking(this,A),this}setStyle(e,t=bt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let A;if(A=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=A[1],a=A[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(A=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=A[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){const n=Gs[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=An(e.r),this.g=An(e.g),this.b=An(e.b),this}copyLinearToSRGB(e){return this.r=Xn(e.r),this.g=Xn(e.g),this.b=Xn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return ze.workingToColorSpace(vt.copy(this),e),Math.round(ke(vt.r*255,0,255))*65536+Math.round(ke(vt.g*255,0,255))*256+Math.round(ke(vt.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ze.workingColorSpace){ze.workingToColorSpace(vt.copy(this),t);const n=vt.r,A=vt.g,r=vt.b,s=Math.max(n,A,r),a=Math.min(n,A,r);let c,o;const d=(a+s)/2;if(a===s)c=0,o=0;else{const f=s-a;switch(o=d<=.5?f/(s+a):f/(2-s-a),s){case n:c=(A-r)/f+(A<r?6:0);break;case A:c=(r-n)/f+2;break;case r:c=(n-A)/f+4;break}c/=6}return e.h=c,e.s=o,e.l=d,e}getRGB(e,t=ze.workingColorSpace){return ze.workingToColorSpace(vt.copy(this),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=bt){ze.workingToColorSpace(vt.copy(this),e);const t=vt.r,n=vt.g,A=vt.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${A.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(A*255)})`}offsetHSL(e,t,n){return this.getHSL(En),this.setHSL(En.h+e,En.s+t,En.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(En),e.getHSL(Ki);const n=ur(En.h,Ki.h,t),A=ur(En.s,Ki.s,t),r=ur(En.l,Ki.l,t);return this.setHSL(n,A,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,A=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*A,this.g=r[1]*t+r[4]*n+r[7]*A,this.b=r[2]*t+r[5]*n+r[8]*A,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vt=new Ve;Ve.NAMES=Gs;let oc=0;class Si extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oc++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=kn,this.side=dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vA,this.blendDst=xA,this.blendEquation=wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Gn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ms,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yn,this.stencilZFail=Yn,this.stencilZPass=Yn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const A=this[t];if(A===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}A&&A.isColor?A.set(n):A&&A.isVector3&&n&&n.isVector3?A.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==kn&&(n.blending=this.blending),this.side!==dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vA&&(n.blendSrc=this.blendSrc),this.blendDst!==xA&&(n.blendDst=this.blendDst),this.blendEquation!==wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gn&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ms&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function A(r){const s=[];for(const a in r){const c=r[a];delete c.metadata,s.push(c)}return s}if(t){const r=A(e.textures),s=A(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const A=t.length;n=new Array(A);for(let r=0;r!==A;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Os extends Si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.combine=ds,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new F,Zi=new Ge;let cc=0;class Jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ws,this.updateRanges=[],this.gpuType=nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let A=0,r=this.itemSize;A<r;A++)this.array[e+A]=t.array[n+A];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zi.fromBufferAttribute(this,t),Zi.applyMatrix3(e),this.setXY(t,Zi.x,Zi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,A){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),A=_t(A,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=A,this}setXYZW(e,t,n,A,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),A=_t(A,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=A,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ws&&(e.usage=this.usage),e}}class zs extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Vs extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dt extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let lc=0;const It=new at,Fr=new gt,ii=new F,Tt=new Bi,Ci=new Bi,ut=new F;class Vt extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lc++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bs(e)?Vs:zs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ue().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const A=this.attributes.tangent;return A!==void 0&&(A.transformDirection(e),A.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return It.makeRotationFromQuaternion(e),this.applyMatrix4(It),this}rotateX(e){return It.makeRotationX(e),this.applyMatrix4(It),this}rotateY(e){return It.makeRotationY(e),this.applyMatrix4(It),this}rotateZ(e){return It.makeRotationZ(e),this.applyMatrix4(It),this}translate(e,t,n){return It.makeTranslation(e,t,n),this.applyMatrix4(It),this}scale(e,t,n){return It.makeScale(e,t,n),this.applyMatrix4(It),this}lookAt(e){return Fr.lookAt(e),Fr.updateMatrix(),this.applyMatrix4(Fr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ii).negate(),this.translate(ii.x,ii.y,ii.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let A=0,r=e.length;A<r;A++){const s=e[A];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new dt(n,3))}else{const n=Math.min(e.length,t.count);for(let A=0;A<n;A++){const r=e[A];t.setXYZ(A,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,A=t.length;n<A;n++){const r=t[n];Tt.setFromBufferAttribute(r),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,Tt.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,Tt.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(Tt.min),this.boundingBox.expandByPoint(Tt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(Tt.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const a=t[r];Ci.setFromBufferAttribute(a),this.morphTargetsRelative?(ut.addVectors(Tt.min,Ci.min),Tt.expandByPoint(ut),ut.addVectors(Tt.max,Ci.max),Tt.expandByPoint(ut)):(Tt.expandByPoint(Ci.min),Tt.expandByPoint(Ci.max))}Tt.getCenter(n);let A=0;for(let r=0,s=e.count;r<s;r++)ut.fromBufferAttribute(e,r),A=Math.max(A,n.distanceToSquared(ut));if(t)for(let r=0,s=t.length;r<s;r++){const a=t[r],c=this.morphTargetsRelative;for(let o=0,d=a.count;o<d;o++)ut.fromBufferAttribute(a,o),c&&(ii.fromBufferAttribute(e,o),ut.add(ii)),A=Math.max(A,n.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(A),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,A=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new F,c[I]=new F;const o=new F,d=new F,f=new F,h=new Ge,u=new Ge,m=new Ge,M=new F,p=new F;function l(I,E,x){o.fromBufferAttribute(n,I),d.fromBufferAttribute(n,E),f.fromBufferAttribute(n,x),h.fromBufferAttribute(r,I),u.fromBufferAttribute(r,E),m.fromBufferAttribute(r,x),d.sub(o),f.sub(o),u.sub(h),m.sub(h);const R=1/(u.x*m.y-m.x*u.y);isFinite(R)&&(M.copy(d).multiplyScalar(m.y).addScaledVector(f,-u.y).multiplyScalar(R),p.copy(f).multiplyScalar(u.x).addScaledVector(d,-m.x).multiplyScalar(R),a[I].add(M),a[E].add(M),a[x].add(M),c[I].add(p),c[E].add(p),c[x].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let I=0,E=S.length;I<E;++I){const x=S[I],R=x.start,L=x.count;for(let k=R,z=R+L;k<z;k+=3)l(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const w=new F,B=new F,y=new F,C=new F;function T(I){y.fromBufferAttribute(A,I),C.copy(y);const E=a[I];w.copy(E),w.sub(y.multiplyScalar(y.dot(E))).normalize(),B.crossVectors(C,E);const R=B.dot(c[I])<0?-1:1;s.setXYZW(I,w.x,w.y,w.z,R)}for(let I=0,E=S.length;I<E;++I){const x=S[I],R=x.start,L=x.count;for(let k=R,z=R+L;k<z;k+=3)T(e.getX(k+0)),T(e.getX(k+1)),T(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,u=n.count;h<u;h++)n.setXYZ(h,0,0,0);const A=new F,r=new F,s=new F,a=new F,c=new F,o=new F,d=new F,f=new F;if(e)for(let h=0,u=e.count;h<u;h+=3){const m=e.getX(h+0),M=e.getX(h+1),p=e.getX(h+2);A.fromBufferAttribute(t,m),r.fromBufferAttribute(t,M),s.fromBufferAttribute(t,p),d.subVectors(s,r),f.subVectors(A,r),d.cross(f),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,M),o.fromBufferAttribute(n,p),a.add(d),c.add(d),o.add(d),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(p,o.x,o.y,o.z)}else for(let h=0,u=t.count;h<u;h+=3)A.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),d.subVectors(s,r),f.subVectors(A,r),d.cross(f),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(a,c){const o=a.array,d=a.itemSize,f=a.normalized,h=new o.constructor(c.length*d);let u=0,m=0;for(let M=0,p=c.length;M<p;M++){a.isInterleavedBufferAttribute?u=c[M]*a.data.stride+a.offset:u=c[M]*d;for(let l=0;l<d;l++)h[m++]=o[u++]}return new Jt(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,n=this.index.array,A=this.attributes;for(const a in A){const c=A[a],o=e(c,n);t.setAttribute(a,o)}const r=this.morphAttributes;for(const a in r){const c=[],o=r[a];for(let d=0,f=o.length;d<f;d++){const h=o[d],u=e(h,n);c.push(u)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,c=s.length;a<c;a++){const o=s[a];t.addGroup(o.start,o.count,o.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const o in c)c[o]!==void 0&&(e[o]=c[o]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const o=n[c];e.data.attributes[c]=o.toJSON(e.data)}const A={};let r=!1;for(const c in this.morphAttributes){const o=this.morphAttributes[c],d=[];for(let f=0,h=o.length;f<h;f++){const u=o[f];d.push(u.toJSON(e.data))}d.length>0&&(A[c]=d,r=!0)}r&&(e.data.morphAttributes=A,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const A=e.attributes;for(const o in A){const d=A[o];this.setAttribute(o,d.clone(t))}const r=e.morphAttributes;for(const o in r){const d=[],f=r[o];for(let h=0,u=f.length;h<u;h++)d.push(f[h].clone(t));this.morphAttributes[o]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let o=0,d=s.length;o<d;o++){const f=s[o];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ys=new at,Rn=new tc,qi=new Mr,Ws=new F,$i=new F,eA=new F,tA=new F,Lr=new F,nA=new F,Xs=new F,iA=new F;class Kt extends gt{constructor(e=new Vt,t=new Os){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const A=t[n[0]];if(A!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=A.length;r<s;r++){const a=A[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,A=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(A,e);const a=this.morphTargetInfluences;if(r&&a){nA.set(0,0,0);for(let c=0,o=r.length;c<o;c++){const d=a[c],f=r[c];d!==0&&(Lr.fromBufferAttribute(f,e),s?nA.addScaledVector(Lr,d):nA.addScaledVector(Lr.sub(t),d))}t.add(nA)}return t}raycast(e,t){const n=this.geometry,A=this.material,r=this.matrixWorld;A!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qi.copy(n.boundingSphere),qi.applyMatrix4(r),Rn.copy(e.ray).recast(e.near),!(qi.containsPoint(Rn.origin)===!1&&(Rn.intersectSphere(qi,Ws)===null||Rn.origin.distanceToSquared(Ws)>(e.far-e.near)**2))&&(Ys.copy(r).invert(),Rn.copy(e.ray).applyMatrix4(Ys),!(n.boundingBox!==null&&Rn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Rn)))}_computeIntersections(e,t,n){let A;const r=this.geometry,s=this.material,a=r.index,c=r.attributes.position,o=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,h=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(s))for(let m=0,M=h.length;m<M;m++){const p=h[m],l=s[p.materialIndex],S=Math.max(p.start,u.start),w=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let B=S,y=w;B<y;B+=3){const C=a.getX(B),T=a.getX(B+1),I=a.getX(B+2);A=AA(this,l,e,n,o,d,f,C,T,I),A&&(A.faceIndex=Math.floor(B/3),A.face.materialIndex=p.materialIndex,t.push(A))}}else{const m=Math.max(0,u.start),M=Math.min(a.count,u.start+u.count);for(let p=m,l=M;p<l;p+=3){const S=a.getX(p),w=a.getX(p+1),B=a.getX(p+2);A=AA(this,s,e,n,o,d,f,S,w,B),A&&(A.faceIndex=Math.floor(p/3),t.push(A))}}else if(c!==void 0)if(Array.isArray(s))for(let m=0,M=h.length;m<M;m++){const p=h[m],l=s[p.materialIndex],S=Math.max(p.start,u.start),w=Math.min(c.count,Math.min(p.start+p.count,u.start+u.count));for(let B=S,y=w;B<y;B+=3){const C=B,T=B+1,I=B+2;A=AA(this,l,e,n,o,d,f,C,T,I),A&&(A.faceIndex=Math.floor(B/3),A.face.materialIndex=p.materialIndex,t.push(A))}}else{const m=Math.max(0,u.start),M=Math.min(c.count,u.start+u.count);for(let p=m,l=M;p<l;p+=3){const S=p,w=p+1,B=p+2;A=AA(this,s,e,n,o,d,f,S,w,B),A&&(A.faceIndex=Math.floor(p/3),t.push(A))}}}}function dc(i,e,t,n,A,r,s,a){let c;if(e.side===Mt?c=n.intersectTriangle(s,r,A,!0,a):c=n.intersectTriangle(A,r,s,e.side===dn,a),c===null)return null;iA.copy(a),iA.applyMatrix4(i.matrixWorld);const o=t.ray.origin.distanceTo(iA);return o<t.near||o>t.far?null:{distance:o,point:iA.clone(),object:i}}function AA(i,e,t,n,A,r,s,a,c,o){i.getVertexPosition(a,$i),i.getVertexPosition(c,eA),i.getVertexPosition(o,tA);const d=dc(i,e,t,n,$i,eA,tA,Xs);if(d){const f=new F;zt.getBarycoord(Xs,$i,eA,tA,f),A&&(d.uv=zt.getInterpolatedAttribute(A,a,c,o,f,new Ge)),r&&(d.uv1=zt.getInterpolatedAttribute(r,a,c,o,f,new Ge)),s&&(d.normal=zt.getInterpolatedAttribute(s,a,c,o,f,new F),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:c,c:o,normal:new F,materialIndex:0};zt.getNormal($i,eA,tA,h.normal),d.face=h,d.barycoord=f}return d}class Ai extends Vt{constructor(e=1,t=1,n=1,A=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:A,heightSegments:r,depthSegments:s};const a=this;A=Math.floor(A),r=Math.floor(r),s=Math.floor(s);const c=[],o=[],d=[],f=[];let h=0,u=0;m("z","y","x",-1,-1,n,t,e,s,r,0),m("z","y","x",1,-1,n,t,-e,s,r,1),m("x","z","y",1,1,e,n,t,A,s,2),m("x","z","y",1,-1,e,n,-t,A,s,3),m("x","y","z",1,-1,e,t,n,A,r,4),m("x","y","z",-1,-1,e,t,-n,A,r,5),this.setIndex(c),this.setAttribute("position",new dt(o,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(f,2));function m(M,p,l,S,w,B,y,C,T,I,E){const x=B/T,R=y/I,L=B/2,k=y/2,z=C/2,W=T+1,V=I+1;let te=0,G=0;const re=new F;for(let ce=0;ce<V;ce++){const Me=ce*R-k;for(let Qe=0;Qe<W;Qe++){const Ze=Qe*x-L;re[M]=Ze*S,re[p]=Me*w,re[l]=z,o.push(re.x,re.y,re.z),re[M]=0,re[p]=0,re[l]=C>0?1:-1,d.push(re.x,re.y,re.z),f.push(Qe/T),f.push(1-ce/I),te+=1}}for(let ce=0;ce<I;ce++)for(let Me=0;Me<T;Me++){const Qe=h+Me+W*ce,Ze=h+Me+W*(ce+1),et=h+(Me+1)+W*(ce+1),We=h+(Me+1)+W*ce;c.push(Qe,Ze,We),c.push(Ze,et,We),G+=6}a.addGroup(u,G,E),u+=G,h+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ai(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ri(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const A=i[t][n];A&&(A.isColor||A.isMatrix3||A.isMatrix4||A.isVector2||A.isVector3||A.isVector4||A.isTexture||A.isQuaternion)?A.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=A.clone():Array.isArray(A)?e[t][n]=A.slice():e[t][n]=A}}return e}function Et(i){const e={};for(let t=0;t<i.length;t++){const n=ri(i[t]);for(const A in n)e[A]=n[A]}return e}function fc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function js(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ze.workingColorSpace}const hc={clone:ri,merge:Et};var uc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends Si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uc,this.fragmentShader=pc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ri(e.uniforms),this.uniformsGroups=fc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const A in this.uniforms){const s=this.uniforms[A].value;s&&s.isTexture?t.uniforms[A]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[A]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[A]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[A]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[A]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[A]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[A]={type:"m4",value:s.toArray()}:t.uniforms[A]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const A in this.extensions)this.extensions[A]===!0&&(n[A]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Js extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Xt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mn=new F,Ks=new Ge,Zs=new Ge;class Dt extends Js{constructor(e=50,t=1,n=.1,A=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=A,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hr*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Mn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mn.x,Mn.y).multiplyScalar(-e/Mn.z),Mn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mn.x,Mn.y).multiplyScalar(-e/Mn.z)}getViewSize(e,t){return this.getViewBounds(e,Ks,Zs),t.subVectors(Zs,Ks)}setViewOffset(e,t,n,A,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=A,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fr*.5*this.fov)/this.zoom,n=2*t,A=this.aspect*n,r=-.5*A;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,o=s.fullHeight;r+=s.offsetX*A/c,t-=s.offsetY*n/o,A*=s.width/c,n*=s.height/o}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+A,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const si=-90,ai=1;class gc extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const A=new Dt(si,ai,e,t);A.layers=this.layers,this.add(A);const r=new Dt(si,ai,e,t);r.layers=this.layers,this.add(r);const s=new Dt(si,ai,e,t);s.layers=this.layers,this.add(s);const a=new Dt(si,ai,e,t);a.layers=this.layers,this.add(a);const c=new Dt(si,ai,e,t);c.layers=this.layers,this.add(c);const o=new Dt(si,ai,e,t);o.layers=this.layers,this.add(o)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,A,r,s,a,c]=t;for(const o of t)this.remove(o);if(e===Xt)n.up.set(0,1,0),n.lookAt(1,0,0),A.up.set(0,1,0),A.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Gi)n.up.set(0,-1,0),n.lookAt(-1,0,0),A.up.set(0,-1,0),A.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const o of t)this.add(o),o.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:A}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,c,o,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,A),e.render(t,r),e.setRenderTarget(n,1,A),e.render(t,s),e.setRenderTarget(n,2,A),e.render(t,a),e.setRenderTarget(n,3,A),e.render(t,c),e.setRenderTarget(n,4,A),e.render(t,o),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,A),e.render(t,d),e.setRenderTarget(f,h,u),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class qs extends wt{constructor(e=[],t=On,n,A,r,s,a,c,o,d){super(e,t,n,A,r,s,a,c,o,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mc extends pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},A=[n,n,n,n,n,n];this.texture=new qs(A),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},A=new Ai(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mt,blending:fn});r.uniforms.tEquirect.value=t;const s=new Kt(A,r),a=t.minFilter;return t.minFilter===Cn&&(t.minFilter=Yt),new gc(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,A=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,A);e.setRenderTarget(r)}}class Ut extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vc={type:"move"};class Nr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let A=null,r=null,s=null;const a=this._targetRay,c=this._grip,o=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(o&&e.hand){s=!0;for(const M of e.hand.values()){const p=t.getJointPose(M,n),l=this._getHandJoint(o,M);p!==null&&(l.matrix.fromArray(p.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,l.jointRadius=p.radius),l.visible=p!==null}const d=o.joints["index-finger-tip"],f=o.joints["thumb-tip"],h=d.position.distanceTo(f.position),u=.02,m=.005;o.inputState.pinching&&h>u+m?(o.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!o.inputState.pinching&&h<=u-m&&(o.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(A=t.getPose(e.targetRaySpace,n),A===null&&r!==null&&(A=r),A!==null&&(a.matrix.fromArray(A.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,A.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(A.linearVelocity)):a.hasLinearVelocity=!1,A.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(A.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vc)))}return a!==null&&(a.visible=A!==null),c!==null&&(c.visible=r!==null),o!==null&&(o.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ut;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class $s extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jt,this.environmentIntensity=1,this.environmentRotation=new jt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Qr=new F,xc=new F,Ec=new Ue;class Pn{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,A){return this.normal.set(e,t,n),this.constant=A,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const A=Qr.subVectors(n,t).cross(xc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(A,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Qr),A=this.normal.dot(n);if(A===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/A;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ec.getNormalMatrix(e),A=this.coplanarPoint(Qr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-A.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const In=new Mr,Bc=new Ge(.5,.5),rA=new F;class Hr{constructor(e=new Pn,t=new Pn,n=new Pn,A=new Pn,r=new Pn,s=new Pn){this.planes=[e,t,n,A,r,s]}set(e,t,n,A,r,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(A),a[4].copy(r),a[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xt,n=!1){const A=this.planes,r=e.elements,s=r[0],a=r[1],c=r[2],o=r[3],d=r[4],f=r[5],h=r[6],u=r[7],m=r[8],M=r[9],p=r[10],l=r[11],S=r[12],w=r[13],B=r[14],y=r[15];if(A[0].setComponents(o-s,u-d,l-m,y-S).normalize(),A[1].setComponents(o+s,u+d,l+m,y+S).normalize(),A[2].setComponents(o+a,u+f,l+M,y+w).normalize(),A[3].setComponents(o-a,u-f,l-M,y-w).normalize(),n)A[4].setComponents(c,h,p,B).normalize(),A[5].setComponents(o-c,u-h,l-p,y-B).normalize();else if(A[4].setComponents(o-c,u-h,l-p,y-B).normalize(),t===Xt)A[5].setComponents(o+c,u+h,l+p,y+B).normalize();else if(t===Gi)A[5].setComponents(c,h,p,B).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(e){In.center.set(0,0,0);const t=Bc.distanceTo(e.center);return In.radius=.7071067811865476+t,In.applyMatrix4(e.matrixWorld),this.intersectsSphere(In)}intersectsSphere(e){const t=this.planes,n=e.center,A=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<A)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const A=t[n];if(rA.x=A.normal.x>0?e.max.x:e.min.x,rA.y=A.normal.y>0?e.max.y:e.min.y,rA.z=A.normal.z>0?e.max.z:e.min.z,A.distanceToPoint(rA)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ea extends wt{constructor(e,t,n=bn,A,r,s,a=Qt,c=Qt,o,d=pi,f=1){if(d!==pi&&d!==gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,A,r,s,a,c,d,n,o),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ta extends wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class kr extends Vt{constructor(e=1,t=1,n=1,A=32,r=1,s=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:A,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:c};const o=this;A=Math.floor(A),r=Math.floor(r);const d=[],f=[],h=[],u=[];let m=0;const M=[],p=n/2;let l=0;S(),s===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(d),this.setAttribute("position",new dt(f,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(u,2));function S(){const B=new F,y=new F;let C=0;const T=(t-e)/n;for(let I=0;I<=r;I++){const E=[],x=I/r,R=x*(t-e)+e;for(let L=0;L<=A;L++){const k=L/A,z=k*c+a,W=Math.sin(z),V=Math.cos(z);y.x=R*W,y.y=-x*n+p,y.z=R*V,f.push(y.x,y.y,y.z),B.set(W,T,V).normalize(),h.push(B.x,B.y,B.z),u.push(k,1-x),E.push(m++)}M.push(E)}for(let I=0;I<A;I++)for(let E=0;E<r;E++){const x=M[E][I],R=M[E+1][I],L=M[E+1][I+1],k=M[E][I+1];(e>0||E!==0)&&(d.push(x,R,k),C+=3),(t>0||E!==r-1)&&(d.push(R,L,k),C+=3)}o.addGroup(l,C,0),l+=C}function w(B){const y=m,C=new Ge,T=new F;let I=0;const E=B===!0?e:t,x=B===!0?1:-1;for(let L=1;L<=A;L++)f.push(0,p*x,0),h.push(0,x,0),u.push(.5,.5),m++;const R=m;for(let L=0;L<=A;L++){const z=L/A*c+a,W=Math.cos(z),V=Math.sin(z);T.x=E*V,T.y=p*x,T.z=E*W,f.push(T.x,T.y,T.z),h.push(0,x,0),C.x=W*.5+.5,C.y=V*.5*x+.5,u.push(C.x,C.y),m++}for(let L=0;L<A;L++){const k=y+L,z=R+L;B===!0?d.push(z,z+1,k):d.push(z+1,z,k),I+=3}o.addGroup(l,I,B===!0?1:2),l+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gr extends Vt{constructor(e=[],t=[],n=1,A=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:A};const r=[],s=[];a(A),o(n),d(),this.setAttribute("position",new dt(r,3)),this.setAttribute("normal",new dt(r.slice(),3)),this.setAttribute("uv",new dt(s,2)),A===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const w=new F,B=new F,y=new F;for(let C=0;C<t.length;C+=3)u(t[C+0],w),u(t[C+1],B),u(t[C+2],y),c(w,B,y,S)}function c(S,w,B,y){const C=y+1,T=[];for(let I=0;I<=C;I++){T[I]=[];const E=S.clone().lerp(B,I/C),x=w.clone().lerp(B,I/C),R=C-I;for(let L=0;L<=R;L++)L===0&&I===C?T[I][L]=E:T[I][L]=E.clone().lerp(x,L/R)}for(let I=0;I<C;I++)for(let E=0;E<2*(C-I)-1;E++){const x=Math.floor(E/2);E%2===0?(h(T[I][x+1]),h(T[I+1][x]),h(T[I][x])):(h(T[I][x+1]),h(T[I+1][x+1]),h(T[I+1][x]))}}function o(S){const w=new F;for(let B=0;B<r.length;B+=3)w.x=r[B+0],w.y=r[B+1],w.z=r[B+2],w.normalize().multiplyScalar(S),r[B+0]=w.x,r[B+1]=w.y,r[B+2]=w.z}function d(){const S=new F;for(let w=0;w<r.length;w+=3){S.x=r[w+0],S.y=r[w+1],S.z=r[w+2];const B=p(S)/2/Math.PI+.5,y=l(S)/Math.PI+.5;s.push(B,1-y)}m(),f()}function f(){for(let S=0;S<s.length;S+=6){const w=s[S+0],B=s[S+2],y=s[S+4],C=Math.max(w,B,y),T=Math.min(w,B,y);C>.9&&T<.1&&(w<.2&&(s[S+0]+=1),B<.2&&(s[S+2]+=1),y<.2&&(s[S+4]+=1))}}function h(S){r.push(S.x,S.y,S.z)}function u(S,w){const B=S*3;w.x=e[B+0],w.y=e[B+1],w.z=e[B+2]}function m(){const S=new F,w=new F,B=new F,y=new F,C=new Ge,T=new Ge,I=new Ge;for(let E=0,x=0;E<r.length;E+=9,x+=6){S.set(r[E+0],r[E+1],r[E+2]),w.set(r[E+3],r[E+4],r[E+5]),B.set(r[E+6],r[E+7],r[E+8]),C.set(s[x+0],s[x+1]),T.set(s[x+2],s[x+3]),I.set(s[x+4],s[x+5]),y.copy(S).add(w).add(B).divideScalar(3);const R=p(y);M(C,x+0,S,R),M(T,x+2,w,R),M(I,x+4,B,R)}}function M(S,w,B,y){y<0&&S.x===1&&(s[w]=S.x-1),B.x===0&&B.z===0&&(s[w]=y/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function l(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gr(e.vertices,e.indices,e.radius,e.details)}}class Or extends Gr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,A=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(A,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Or(e.radius,e.detail)}}class sA extends Vt{constructor(e=1,t=1,n=1,A=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:A};const r=e/2,s=t/2,a=Math.floor(n),c=Math.floor(A),o=a+1,d=c+1,f=e/a,h=t/c,u=[],m=[],M=[],p=[];for(let l=0;l<d;l++){const S=l*h-s;for(let w=0;w<o;w++){const B=w*f-r;m.push(B,-S,0),M.push(0,0,1),p.push(w/a),p.push(1-l/c)}}for(let l=0;l<c;l++)for(let S=0;S<a;S++){const w=S+o*l,B=S+o*(l+1),y=S+1+o*(l+1),C=S+1+o*l;u.push(w,B,C),u.push(B,y,C)}this.setIndex(u),this.setAttribute("position",new dt(m,3)),this.setAttribute("normal",new dt(M,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sA(e.width,e.height,e.widthSegments,e.heightSegments)}}class zr extends Vt{constructor(e=1,t=32,n=16,A=0,r=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:A,phiLength:r,thetaStart:s,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(s+a,Math.PI);let o=0;const d=[],f=new F,h=new F,u=[],m=[],M=[],p=[];for(let l=0;l<=n;l++){const S=[],w=l/n;let B=0;l===0&&s===0?B=.5/t:l===n&&c===Math.PI&&(B=-.5/t);for(let y=0;y<=t;y++){const C=y/t;f.x=-e*Math.cos(A+C*r)*Math.sin(s+w*a),f.y=e*Math.cos(s+w*a),f.z=e*Math.sin(A+C*r)*Math.sin(s+w*a),m.push(f.x,f.y,f.z),h.copy(f).normalize(),M.push(h.x,h.y,h.z),p.push(C+B,1-w),S.push(o++)}d.push(S)}for(let l=0;l<n;l++)for(let S=0;S<t;S++){const w=d[l][S+1],B=d[l][S],y=d[l+1][S],C=d[l+1][S+1];(l!==0||s>0)&&u.push(w,B,C),(l!==n-1||c<Math.PI)&&u.push(B,y,C)}this.setIndex(u),this.setAttribute("position",new dt(m,3)),this.setAttribute("normal",new dt(M,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class bi extends Vt{constructor(e=1,t=.4,n=12,A=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:A,arc:r},n=Math.floor(n),A=Math.floor(A);const s=[],a=[],c=[],o=[],d=new F,f=new F,h=new F;for(let u=0;u<=n;u++)for(let m=0;m<=A;m++){const M=m/A*r,p=u/n*Math.PI*2;f.x=(e+t*Math.cos(p))*Math.cos(M),f.y=(e+t*Math.cos(p))*Math.sin(M),f.z=t*Math.sin(p),a.push(f.x,f.y,f.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),h.subVectors(f,d).normalize(),c.push(h.x,h.y,h.z),o.push(m/A),o.push(u/n)}for(let u=1;u<=n;u++)for(let m=1;m<=A;m++){const M=(A+1)*u+m-1,p=(A+1)*(u-1)+m-1,l=(A+1)*(u-1)+m,S=(A+1)*u+m;s.push(M,p,S),s.push(p,l,S)}this.setIndex(s),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(o,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Mc extends Si{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bs,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _c extends Si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fo,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wc extends Si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class na extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class ia extends na{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Vr=new at,Aa=new F,ra=new F;class Sc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=Wt,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hr,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Aa.setFromMatrixPosition(e.matrixWorld),t.position.copy(Aa),ra.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ra),t.updateMatrixWorld(),Vr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vr,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class sa extends Js{constructor(e=-1,t=1,n=1,A=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=A,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,A,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=A,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,A=(this.top+this.bottom)/2;let r=n-e,s=n+e,a=A+t,c=A-t;if(this.view!==null&&this.view.enabled){const o=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=o*this.view.offsetX,s=r+o*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Cc extends Sc{constructor(){super(new sa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class aa extends na{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new Cc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class bc extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function oa(i,e,t,n){const A=yc(n);switch(t){case ms:return i*e;case xs:return i*e/A.components*A.byteLength;case FA:return i*e/A.components*A.byteLength;case Es:return i*e*2/A.components*A.byteLength;case LA:return i*e*2/A.components*A.byteLength;case vs:return i*e*3/A.components*A.byteLength;case Ht:return i*e*4/A.components*A.byteLength;case NA:return i*e*4/A.components*A.byteLength;case Li:case Ni:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qi:case Hi:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case HA:case GA:return Math.max(i,16)*Math.max(e,8)/4;case QA:case kA:return Math.max(i,8)*Math.max(e,8)/2;case OA:case zA:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case VA:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case YA:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case WA:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case XA:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case jA:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case JA:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case KA:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ZA:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case qA:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case $A:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case er:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case tr:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case nr:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ir:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ar:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case rr:case sr:case ar:return Math.ceil(i/4)*Math.ceil(e/4)*16;case or:case cr:return Math.ceil(i/4)*Math.ceil(e/4)*8;case lr:case dr:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yc(i){switch(i){case Wt:case hs:return{byteLength:1,components:1};case fi:case us:case hi:return{byteLength:2,components:1};case DA:case UA:return{byteLength:2,components:4};case bn:case IA:case nn:return{byteLength:4,components:1};case ps:case gs:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mA}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mA);function ca(){let i=null,e=!1,t=null,n=null;function A(r,s){t(r,s),n=i.requestAnimationFrame(A)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(A),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Tc(i){const e=new WeakMap;function t(a,c){const o=a.array,d=a.usage,f=o.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,o,d),a.onUploadCallback();let u;if(o instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)u=i.HALF_FLOAT;else if(o instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=i.SHORT;else if(o instanceof Uint32Array)u=i.UNSIGNED_INT;else if(o instanceof Int32Array)u=i.INT;else if(o instanceof Int8Array)u=i.BYTE;else if(o instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(o instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,o){const d=c.array,f=c.updateRanges;if(i.bindBuffer(o,a),f.length===0)i.bufferSubData(o,0,d);else{f.sort((u,m)=>u.start-m.start);let h=0;for(let u=1;u<f.length;u++){const m=f[h],M=f[u];M.start<=m.start+m.count+1?m.count=Math.max(m.count,M.start+M.count-m.start):(++h,f[h]=M)}f.length=h+1;for(let u=0,m=f.length;u<m;u++){const M=f[u];i.bufferSubData(o,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function A(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function s(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const o=e.get(a);if(o===void 0)e.set(a,t(a,c));else if(o.version<a.version){if(o.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(o.buffer,a,c),o.version=a.version}}return{get:A,remove:r,update:s}}var Rc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pc=`#ifdef USE_ALPHAHASH
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
#endif`,Ic=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lc=`#ifdef USE_AOMAP
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
#endif`,Nc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qc=`#ifdef USE_BATCHING
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
#endif`,Hc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Oc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zc=`#ifdef USE_IRIDESCENCE
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
#endif`,Vc=`#ifdef USE_BUMPMAP
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
#endif`,Yc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qc=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$c=`#define PI 3.141592653589793
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
} // validated`,el=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tl=`vec3 transformedNormal = objectNormal;
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
#endif`,nl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,il=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Al=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sl="gl_FragColor = linearToOutputTexel( gl_FragColor );",al=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ol=`#ifdef USE_ENVMAP
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
#endif`,cl=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ll=`#ifdef USE_ENVMAP
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
#endif`,dl=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fl=`#ifdef USE_ENVMAP
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
#endif`,hl=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ul=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pl=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gl=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ml=`#ifdef USE_GRADIENTMAP
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
}`,vl=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xl=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,El=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bl=`uniform bool receiveShadow;
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
#endif`,Ml=`#ifdef USE_ENVMAP
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
#endif`,_l=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wl=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sl=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cl=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bl=`PhysicalMaterial material;
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
#endif`,yl=`struct PhysicalMaterial {
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
}`,Tl=`
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
#endif`,Rl=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pl=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Il=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dl=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ul=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fl=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ll=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nl=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ql=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hl=`#if defined( USE_POINTS_UV )
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
#endif`,kl=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gl=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ol=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zl=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vl=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yl=`#ifdef USE_MORPHTARGETS
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
#endif`,Wl=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xl=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jl=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jl=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kl=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zl=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ql=`#ifdef USE_NORMALMAP
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
#endif`,$l=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ed=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,td=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,id=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ad=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ad=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,od=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ld=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ud=`float getShadowMask() {
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
}`,pd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gd=`#ifdef USE_SKINNING
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
#endif`,md=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vd=`#ifdef USE_SKINNING
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
#endif`,xd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ed=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Md=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_d=`#ifdef USE_TRANSMISSION
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
#endif`,wd=`#ifdef USE_TRANSMISSION
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
#endif`,Sd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Le={alphahash_fragment:Rc,alphahash_pars_fragment:Pc,alphamap_fragment:Ic,alphamap_pars_fragment:Dc,alphatest_fragment:Uc,alphatest_pars_fragment:Fc,aomap_fragment:Lc,aomap_pars_fragment:Nc,batching_pars_vertex:Qc,batching_vertex:Hc,begin_vertex:kc,beginnormal_vertex:Gc,bsdfs:Oc,iridescence_fragment:zc,bumpmap_pars_fragment:Vc,clipping_planes_fragment:Yc,clipping_planes_pars_fragment:Wc,clipping_planes_pars_vertex:Xc,clipping_planes_vertex:jc,color_fragment:Jc,color_pars_fragment:Kc,color_pars_vertex:Zc,color_vertex:qc,common:$c,cube_uv_reflection_fragment:el,defaultnormal_vertex:tl,displacementmap_pars_vertex:nl,displacementmap_vertex:il,emissivemap_fragment:Al,emissivemap_pars_fragment:rl,colorspace_fragment:sl,colorspace_pars_fragment:al,envmap_fragment:ol,envmap_common_pars_fragment:cl,envmap_pars_fragment:ll,envmap_pars_vertex:dl,envmap_physical_pars_fragment:Ml,envmap_vertex:fl,fog_vertex:hl,fog_pars_vertex:ul,fog_fragment:pl,fog_pars_fragment:gl,gradientmap_pars_fragment:ml,lightmap_pars_fragment:vl,lights_lambert_fragment:xl,lights_lambert_pars_fragment:El,lights_pars_begin:Bl,lights_toon_fragment:_l,lights_toon_pars_fragment:wl,lights_phong_fragment:Sl,lights_phong_pars_fragment:Cl,lights_physical_fragment:bl,lights_physical_pars_fragment:yl,lights_fragment_begin:Tl,lights_fragment_maps:Rl,lights_fragment_end:Pl,logdepthbuf_fragment:Il,logdepthbuf_pars_fragment:Dl,logdepthbuf_pars_vertex:Ul,logdepthbuf_vertex:Fl,map_fragment:Ll,map_pars_fragment:Nl,map_particle_fragment:Ql,map_particle_pars_fragment:Hl,metalnessmap_fragment:kl,metalnessmap_pars_fragment:Gl,morphinstance_vertex:Ol,morphcolor_vertex:zl,morphnormal_vertex:Vl,morphtarget_pars_vertex:Yl,morphtarget_vertex:Wl,normal_fragment_begin:Xl,normal_fragment_maps:jl,normal_pars_fragment:Jl,normal_pars_vertex:Kl,normal_vertex:Zl,normalmap_pars_fragment:ql,clearcoat_normal_fragment_begin:$l,clearcoat_normal_fragment_maps:ed,clearcoat_pars_fragment:td,iridescence_pars_fragment:nd,opaque_fragment:id,packing:Ad,premultiplied_alpha_fragment:rd,project_vertex:sd,dithering_fragment:ad,dithering_pars_fragment:od,roughnessmap_fragment:cd,roughnessmap_pars_fragment:ld,shadowmap_pars_fragment:dd,shadowmap_pars_vertex:fd,shadowmap_vertex:hd,shadowmask_pars_fragment:ud,skinbase_vertex:pd,skinning_pars_vertex:gd,skinning_vertex:md,skinnormal_vertex:vd,specularmap_fragment:xd,specularmap_pars_fragment:Ed,tonemapping_fragment:Bd,tonemapping_pars_fragment:Md,transmission_fragment:_d,transmission_pars_fragment:wd,uv_pars_fragment:Sd,uv_pars_vertex:Cd,uv_vertex:bd,worldpos_vertex:yd,background_vert:`varying vec2 vUv;
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
}`},Ae={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Zt={basic:{uniforms:Et([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:Et([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:Et([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:Et([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:Et([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:Et([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:Et([Ae.points,Ae.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:Et([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:Et([Ae.common,Ae.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:Et([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:Et([Ae.sprite,Ae.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:Et([Ae.common,Ae.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:Et([Ae.lights,Ae.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};Zt.physical={uniforms:Et([Zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const aA={r:0,b:0,g:0},Dn=new jt,Td=new at;function Rd(i,e,t,n,A,r,s){const a=new Ve(0);let c=r===!0?0:1,o,d,f=null,h=0,u=null;function m(w){let B=w.isScene===!0?w.background:null;return B&&B.isTexture&&(B=(w.backgroundBlurriness>0?t:e).get(B)),B}function M(w){let B=!1;const y=m(w);y===null?l(a,c):y&&y.isColor&&(l(y,1),B=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||B)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(w,B){const y=m(B);y&&(y.isCubeTexture||y.mapping===Ui)?(d===void 0&&(d=new Kt(new Ai(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:ri(Zt.backgroundCube.uniforms),vertexShader:Zt.backgroundCube.vertexShader,fragmentShader:Zt.backgroundCube.fragmentShader,side:Mt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,T,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),A.update(d)),Dn.copy(B.backgroundRotation),Dn.x*=-1,Dn.y*=-1,Dn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Dn.y*=-1,Dn.z*=-1),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Td.makeRotationFromEuler(Dn)),d.material.toneMapped=ze.getTransfer(y.colorSpace)!==je,(f!==y||h!==y.version||u!==i.toneMapping)&&(d.material.needsUpdate=!0,f=y,h=y.version,u=i.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(o===void 0&&(o=new Kt(new sA(2,2),new Bn({name:"BackgroundMaterial",uniforms:ri(Zt.background.uniforms),vertexShader:Zt.background.vertexShader,fragmentShader:Zt.background.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),A.update(o)),o.material.uniforms.t2D.value=y,o.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,o.material.toneMapped=ze.getTransfer(y.colorSpace)!==je,y.matrixAutoUpdate===!0&&y.updateMatrix(),o.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||u!==i.toneMapping)&&(o.material.needsUpdate=!0,f=y,h=y.version,u=i.toneMapping),o.layers.enableAll(),w.unshift(o,o.geometry,o.material,0,0,null))}function l(w,B){w.getRGB(aA,js(i)),n.buffers.color.setClear(aA.r,aA.g,aA.b,B,s)}function S(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,B=1){a.set(w),c=B,l(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,l(a,c)},render:M,addToRenderList:p,dispose:S}}function Pd(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},A=h(null);let r=A,s=!1;function a(x,R,L,k,z){let W=!1;const V=f(k,L,R);r!==V&&(r=V,o(r.object)),W=u(x,k,L,z),W&&m(x,k,L,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(W||s)&&(s=!1,B(x,R,L,k),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return i.createVertexArray()}function o(x){return i.bindVertexArray(x)}function d(x){return i.deleteVertexArray(x)}function f(x,R,L){const k=L.wireframe===!0;let z=n[x.id];z===void 0&&(z={},n[x.id]=z);let W=z[R.id];W===void 0&&(W={},z[R.id]=W);let V=W[k];return V===void 0&&(V=h(c()),W[k]=V),V}function h(x){const R=[],L=[],k=[];for(let z=0;z<t;z++)R[z]=0,L[z]=0,k[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:L,attributeDivisors:k,object:x,attributes:{},index:null}}function u(x,R,L,k){const z=r.attributes,W=R.attributes;let V=0;const te=L.getAttributes();for(const G in te)if(te[G].location>=0){const ce=z[G];let Me=W[G];if(Me===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(Me=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(Me=x.instanceColor)),ce===void 0||ce.attribute!==Me||Me&&ce.data!==Me.data)return!0;V++}return r.attributesNum!==V||r.index!==k}function m(x,R,L,k){const z={},W=R.attributes;let V=0;const te=L.getAttributes();for(const G in te)if(te[G].location>=0){let ce=W[G];ce===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(ce=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(ce=x.instanceColor));const Me={};Me.attribute=ce,ce&&ce.data&&(Me.data=ce.data),z[G]=Me,V++}r.attributes=z,r.attributesNum=V,r.index=k}function M(){const x=r.newAttributes;for(let R=0,L=x.length;R<L;R++)x[R]=0}function p(x){l(x,0)}function l(x,R){const L=r.newAttributes,k=r.enabledAttributes,z=r.attributeDivisors;L[x]=1,k[x]===0&&(i.enableVertexAttribArray(x),k[x]=1),z[x]!==R&&(i.vertexAttribDivisor(x,R),z[x]=R)}function S(){const x=r.newAttributes,R=r.enabledAttributes;for(let L=0,k=R.length;L<k;L++)R[L]!==x[L]&&(i.disableVertexAttribArray(L),R[L]=0)}function w(x,R,L,k,z,W,V){V===!0?i.vertexAttribIPointer(x,R,L,z,W):i.vertexAttribPointer(x,R,L,k,z,W)}function B(x,R,L,k){M();const z=k.attributes,W=L.getAttributes(),V=R.defaultAttributeValues;for(const te in W){const G=W[te];if(G.location>=0){let re=z[te];if(re===void 0&&(te==="instanceMatrix"&&x.instanceMatrix&&(re=x.instanceMatrix),te==="instanceColor"&&x.instanceColor&&(re=x.instanceColor)),re!==void 0){const ce=re.normalized,Me=re.itemSize,Qe=e.get(re);if(Qe===void 0)continue;const Ze=Qe.buffer,et=Qe.type,We=Qe.bytesPerElement,X=et===i.INT||et===i.UNSIGNED_INT||re.gpuType===IA;if(re.isInterleavedBufferAttribute){const K=re.data,fe=K.stride,Pe=re.offset;if(K.isInstancedInterleavedBuffer){for(let Be=0;Be<G.locationSize;Be++)l(G.location+Be,K.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Be=0;Be<G.locationSize;Be++)p(G.location+Be);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let Be=0;Be<G.locationSize;Be++)w(G.location+Be,Me/G.locationSize,et,ce,fe*We,(Pe+Me/G.locationSize*Be)*We,X)}else{if(re.isInstancedBufferAttribute){for(let K=0;K<G.locationSize;K++)l(G.location+K,re.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let K=0;K<G.locationSize;K++)p(G.location+K);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let K=0;K<G.locationSize;K++)w(G.location+K,Me/G.locationSize,et,ce,Me*We,Me/G.locationSize*K*We,X)}}else if(V!==void 0){const ce=V[te];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(G.location,ce);break;case 3:i.vertexAttrib3fv(G.location,ce);break;case 4:i.vertexAttrib4fv(G.location,ce);break;default:i.vertexAttrib1fv(G.location,ce)}}}}S()}function y(){I();for(const x in n){const R=n[x];for(const L in R){const k=R[L];for(const z in k)d(k[z].object),delete k[z];delete R[L]}delete n[x]}}function C(x){if(n[x.id]===void 0)return;const R=n[x.id];for(const L in R){const k=R[L];for(const z in k)d(k[z].object),delete k[z];delete R[L]}delete n[x.id]}function T(x){for(const R in n){const L=n[R];if(L[x.id]===void 0)continue;const k=L[x.id];for(const z in k)d(k[z].object),delete k[z];delete L[x.id]}}function I(){E(),s=!0,r!==A&&(r=A,o(r.object))}function E(){A.geometry=null,A.program=null,A.wireframe=!1}return{setup:a,reset:I,resetDefaultState:E,dispose:y,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:M,enableAttribute:p,disableUnusedAttributes:S}}function Id(i,e,t){let n;function A(o){n=o}function r(o,d){i.drawArrays(n,o,d),t.update(d,n,1)}function s(o,d,f){f!==0&&(i.drawArraysInstanced(n,o,d,f),t.update(d,n,f))}function a(o,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,o,0,d,0,f);let u=0;for(let m=0;m<f;m++)u+=d[m];t.update(u,n,1)}function c(o,d,f,h){if(f===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let m=0;m<o.length;m++)s(o[m],d[m],h[m]);else{u.multiDrawArraysInstancedWEBGL(n,o,0,d,0,h,0,f);let m=0;for(let M=0;M<f;M++)m+=d[M]*h[M];t.update(m,n,1)}}this.setMode=A,this.render=r,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Dd(i,e,t,n){let A;function r(){if(A!==void 0)return A;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");A=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else A=0;return A}function s(T){return!(T!==Ht&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const I=T===hi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Wt&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==nn&&!I)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp";const d=c(o);d!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",d,"instead."),o=d);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),l=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),B=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=m>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:a,precision:o,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:u,maxVertexTextures:m,maxTextureSize:M,maxCubemapSize:p,maxAttributes:l,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:B,vertexTextures:y,maxSamples:C}}function Ud(i){const e=this;let t=null,n=0,A=!1,r=!1;const s=new Pn,a=new Ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const u=f.length!==0||h||n!==0||A;return A=h,n=f.length,u},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=d(f,h,0)},this.setState=function(f,h,u){const m=f.clippingPlanes,M=f.clipIntersection,p=f.clipShadows,l=i.get(f);if(!A||m===null||m.length===0||r&&!p)r?d(null):o();else{const S=r?0:n,w=S*4;let B=l.clippingState||null;c.value=B,B=d(m,h,w,u);for(let y=0;y!==w;++y)B[y]=t[y];l.clippingState=B,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function o(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,h,u,m){const M=f!==null?f.length:0;let p=null;if(M!==0){if(p=c.value,m!==!0||p===null){const l=u+M*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<l)&&(p=new Float32Array(l));for(let w=0,B=u;w!==M;++w,B+=4)s.copy(f[w]).applyMatrix4(S,a),s.normal.toArray(p,B),p[B+3]=s.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}function Fd(i){let e=new WeakMap;function t(s,a){return a===bA?s.mapping=On:a===yA&&(s.mapping=zn),s}function n(s){if(s&&s.isTexture){const a=s.mapping;if(a===bA||a===yA)if(e.has(s)){const c=e.get(s).texture;return t(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const o=new mc(c.height);return o.fromEquirectangularTexture(i,s),e.set(s,o),s.addEventListener("dispose",A),t(o.texture,s.mapping)}else return null}}return s}function A(s){const a=s.target;a.removeEventListener("dispose",A);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const oi=4,la=[.125,.215,.35,.446,.526,.582],Un=20,Yr=new sa,da=new Ve;let Wr=null,Xr=0,jr=0,Jr=!1;const Fn=(1+Math.sqrt(5))/2,ci=1/Fn,fa=[new F(-Fn,ci,0),new F(Fn,ci,0),new F(-ci,0,Fn),new F(ci,0,Fn),new F(0,Fn,-ci),new F(0,Fn,ci),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],Ld=new F;class ha{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,A=100,r={}){const{size:s=256,position:a=Ld}=r;Wr=this._renderer.getRenderTarget(),Xr=this._renderer.getActiveCubeFace(),jr=this._renderer.getActiveMipmapLevel(),Jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,A,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ga(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wr,Xr,jr),this._renderer.xr.enabled=Jr,e.scissorTest=!1,oA(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===On||e.mapping===zn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wr=this._renderer.getRenderTarget(),Xr=this._renderer.getActiveCubeFace(),jr=this._renderer.getActiveMipmapLevel(),Jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:hi,format:Ht,colorSpace:Vn,depthBuffer:!1},A=ua(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ua(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nd(r)),this._blurMaterial=Qd(r,e,t)}return A}_compileMaterial(e){const t=new Kt(this._lodPlanes[0],e);this._renderer.compile(t,Yr)}_sceneToCubeUV(e,t,n,A,r){const c=new Dt(90,1,t,n),o=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,u=f.toneMapping;f.getClearColor(da),f.toneMapping=hn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(A),f.clearDepth(),f.setRenderTarget(null));const M=new Os({name:"PMREM.Background",side:Mt,depthWrite:!1,depthTest:!1}),p=new Kt(new Ai,M);let l=!1;const S=e.background;S?S.isColor&&(M.color.copy(S),e.background=null,l=!0):(M.color.copy(da),l=!0);for(let w=0;w<6;w++){const B=w%3;B===0?(c.up.set(0,o[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[w],r.y,r.z)):B===1?(c.up.set(0,0,o[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[w],r.z)):(c.up.set(0,o[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[w]));const y=this._cubeSize;oA(A,B*y,w>2?y:0,y,y),f.setRenderTarget(A),l&&f.render(p,c),f.render(e,c)}p.geometry.dispose(),p.material.dispose(),f.toneMapping=u,f.autoClear=h,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,A=e.mapping===On||e.mapping===zn;A?(this._cubemapMaterial===null&&(this._cubemapMaterial=ga()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pa());const r=A?this._cubemapMaterial:this._equirectMaterial,s=new Kt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;oA(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(s,Yr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const A=this._lodPlanes.length;for(let r=1;r<A;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=fa[(A-r-1)%fa.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,A,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,A,"latitudinal",r),this._halfBlur(s,e,n,n,A,"longitudinal",r)}_halfBlur(e,t,n,A,r,s,a){const c=this._renderer,o=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Kt(this._lodPlanes[A],o),h=o.uniforms,u=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Un-1),M=r/m,p=isFinite(r)?1+Math.floor(d*M):Un;p>Un&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Un}`);const l=[];let S=0;for(let T=0;T<Un;++T){const I=T/M,E=Math.exp(-I*I/2);l.push(E),T===0?S+=E:T<p&&(S+=2*E)}for(let T=0;T<l.length;T++)l[T]=l[T]/S;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=l,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:w}=this;h.dTheta.value=m,h.mipInt.value=w-n;const B=this._sizeLods[A],y=3*B*(A>w-oi?A-w+oi:0),C=4*(this._cubeSize-B);oA(t,y,C,3*B,2*B),c.setRenderTarget(t),c.render(f,Yr)}}function Nd(i){const e=[],t=[],n=[];let A=i;const r=i-oi+1+la.length;for(let s=0;s<r;s++){const a=Math.pow(2,A);t.push(a);let c=1/a;s>i-oi?c=la[s-i+oi-1]:s===0&&(c=0),n.push(c);const o=1/(a-2),d=-o,f=1+o,h=[d,d,f,d,f,f,d,d,f,f,d,f],u=6,m=6,M=3,p=2,l=1,S=new Float32Array(M*m*u),w=new Float32Array(p*m*u),B=new Float32Array(l*m*u);for(let C=0;C<u;C++){const T=C%3*2/3-1,I=C>2?0:-1,E=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];S.set(E,M*m*C),w.set(h,p*m*C);const x=[C,C,C,C,C,C];B.set(x,l*m*C)}const y=new Vt;y.setAttribute("position",new Jt(S,M)),y.setAttribute("uv",new Jt(w,p)),y.setAttribute("faceIndex",new Jt(B,l)),e.push(y),A>oi&&A--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ua(i,e,t){const n=new pn(i,e,t);return n.texture.mapping=Ui,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oA(i,e,t,n,A){i.viewport.set(e,t,n,A),i.scissor.set(e,t,n,A)}function Qd(i,e,t){const n=new Float32Array(Un),A=new F(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:Un,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:A}},vertexShader:Kr(),fragmentShader:`

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
	`}function Hd(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,o=c===bA||c===yA,d=c===On||c===zn;if(o||d){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new ha(i)),f=o?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const u=a.image;return o&&u&&u.height>0||d&&u&&A(u)?(t===null&&(t=new ha(i)),f=o?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function A(a){let c=0;const o=6;for(let d=0;d<o;d++)a[d]!==void 0&&c++;return c===o}function r(a){const c=a.target;c.removeEventListener("dispose",r);const o=e.get(c);o!==void 0&&(e.delete(c),o.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function kd(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let A;switch(n){case"WEBGL_depth_texture":A=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":A=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":A=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":A=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:A=i.getExtension(n)}return e[n]=A,A}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const A=t(n);return A===null&&Ei("THREE.WebGLRenderer: "+n+" extension not supported."),A}}}function Gd(i,e,t,n){const A={},r=new WeakMap;function s(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",s),delete A[h.id];const u=r.get(h);u&&(e.remove(u),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return A[h.id]===!0||(h.addEventListener("dispose",s),A[h.id]=!0,t.memory.geometries++),h}function c(f){const h=f.attributes;for(const u in h)e.update(h[u],i.ARRAY_BUFFER)}function o(f){const h=[],u=f.index,m=f.attributes.position;let M=0;if(u!==null){const S=u.array;M=u.version;for(let w=0,B=S.length;w<B;w+=3){const y=S[w+0],C=S[w+1],T=S[w+2];h.push(y,C,C,T,T,y)}}else if(m!==void 0){const S=m.array;M=m.version;for(let w=0,B=S.length/3-1;w<B;w+=3){const y=w+0,C=w+1,T=w+2;h.push(y,C,C,T,T,y)}}else return;const p=new(bs(h)?Vs:zs)(h,1);p.version=M;const l=r.get(f);l&&e.remove(l),r.set(f,p)}function d(f){const h=r.get(f);if(h){const u=f.index;u!==null&&h.version<u.version&&o(f)}else o(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:d}}function Od(i,e,t){let n;function A(h){n=h}let r,s;function a(h){r=h.type,s=h.bytesPerElement}function c(h,u){i.drawElements(n,u,r,h*s),t.update(u,n,1)}function o(h,u,m){m!==0&&(i.drawElementsInstanced(n,u,r,h*s,m),t.update(u,n,m))}function d(h,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,h,0,m);let p=0;for(let l=0;l<m;l++)p+=u[l];t.update(p,n,1)}function f(h,u,m,M){if(m===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let l=0;l<h.length;l++)o(h[l]/s,u[l],M[l]);else{p.multiDrawElementsInstancedWEBGL(n,u,0,r,h,0,M,0,m);let l=0;for(let S=0;S<m;S++)l+=u[S]*M[S];t.update(l,n,1)}}this.setMode=A,this.setIndex=a,this.render=c,this.renderInstances=o,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function zd(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,a){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function A(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:A,update:n}}function Vd(i,e,t){const n=new WeakMap,A=new rt;function r(s,a,c){const o=s.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let E=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();const u=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],l=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let w=0;u===!0&&(w=1),m===!0&&(w=2),M===!0&&(w=3);let B=a.attributes.position.count*w,y=1;B>e.maxTextureSize&&(y=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const C=new Float32Array(B*y*4*f),T=new Ps(C,B,y,f);T.type=nn,T.needsUpdate=!0;const I=w*4;for(let x=0;x<f;x++){const R=p[x],L=l[x],k=S[x],z=B*y*4*x;for(let W=0;W<R.count;W++){const V=W*I;u===!0&&(A.fromBufferAttribute(R,W),C[z+V+0]=A.x,C[z+V+1]=A.y,C[z+V+2]=A.z,C[z+V+3]=0),m===!0&&(A.fromBufferAttribute(L,W),C[z+V+4]=A.x,C[z+V+5]=A.y,C[z+V+6]=A.z,C[z+V+7]=0),M===!0&&(A.fromBufferAttribute(k,W),C[z+V+8]=A.x,C[z+V+9]=A.y,C[z+V+10]=A.z,C[z+V+11]=k.itemSize===4?A.w:1)}}h={count:f,texture:T,size:new Ge(B,y)},n.set(a,h),a.addEventListener("dispose",E)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let u=0;for(let M=0;M<o.length;M++)u+=o[M];const m=a.morphTargetsRelative?1:1-u;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",o)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Yd(i,e,t,n){let A=new WeakMap;function r(c){const o=n.render.frame,d=c.geometry,f=e.get(c,d);if(A.get(f)!==o&&(e.update(f),A.set(f,o)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),A.get(c)!==o&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),A.set(c,o))),c.isSkinnedMesh){const h=c.skeleton;A.get(h)!==o&&(h.update(),A.set(h,o))}return f}function s(){A=new WeakMap}function a(c){const o=c.target;o.removeEventListener("dispose",a),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:r,dispose:s}}const ma=new wt,va=new ea(1,1),xa=new Ps,Ea=new $o,Ba=new qs,Ma=[],_a=[],wa=new Float32Array(16),Sa=new Float32Array(9),Ca=new Float32Array(4);function li(i,e,t){const n=i[0];if(n<=0||n>0)return i;const A=e*t;let r=Ma[A];if(r===void 0&&(r=new Float32Array(A),Ma[A]=r),e!==0){n.toArray(r,0);for(let s=1,a=0;s!==e;++s)a+=t,i[s].toArray(r,a)}return r}function ft(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function cA(i,e){let t=_a[e];t===void 0&&(t=new Int32Array(e),_a[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Wd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Xd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2fv(this.addr,e),ht(t,e)}}function jd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;i.uniform3fv(this.addr,e),ht(t,e)}}function Jd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4fv(this.addr,e),ht(t,e)}}function Kd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(ft(t,n))return;Ca.set(n),i.uniformMatrix2fv(this.addr,!1,Ca),ht(t,n)}}function Zd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(ft(t,n))return;Sa.set(n),i.uniformMatrix3fv(this.addr,!1,Sa),ht(t,n)}}function qd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(ft(t,n))return;wa.set(n),i.uniformMatrix4fv(this.addr,!1,wa),ht(t,n)}}function $d(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ef(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2iv(this.addr,e),ht(t,e)}}function tf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3iv(this.addr,e),ht(t,e)}}function nf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4iv(this.addr,e),ht(t,e)}}function Af(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function rf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2uiv(this.addr,e),ht(t,e)}}function sf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3uiv(this.addr,e),ht(t,e)}}function af(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4uiv(this.addr,e),ht(t,e)}}function of(i,e,t){const n=this.cache,A=t.allocateTextureUnit();n[0]!==A&&(i.uniform1i(this.addr,A),n[0]=A);let r;this.type===i.SAMPLER_2D_SHADOW?(va.compareFunction=_s,r=va):r=ma,t.setTexture2D(e||r,A)}function cf(i,e,t){const n=this.cache,A=t.allocateTextureUnit();n[0]!==A&&(i.uniform1i(this.addr,A),n[0]=A),t.setTexture3D(e||Ea,A)}function lf(i,e,t){const n=this.cache,A=t.allocateTextureUnit();n[0]!==A&&(i.uniform1i(this.addr,A),n[0]=A),t.setTextureCube(e||Ba,A)}function df(i,e,t){const n=this.cache,A=t.allocateTextureUnit();n[0]!==A&&(i.uniform1i(this.addr,A),n[0]=A),t.setTexture2DArray(e||xa,A)}function ff(i){switch(i){case 5126:return Wd;case 35664:return Xd;case 35665:return jd;case 35666:return Jd;case 35674:return Kd;case 35675:return Zd;case 35676:return qd;case 5124:case 35670:return $d;case 35667:case 35671:return ef;case 35668:case 35672:return tf;case 35669:case 35673:return nf;case 5125:return Af;case 36294:return rf;case 36295:return sf;case 36296:return af;case 35678:case 36198:case 36298:case 36306:case 35682:return of;case 35679:case 36299:case 36307:return cf;case 35680:case 36300:case 36308:case 36293:return lf;case 36289:case 36303:case 36311:case 36292:return df}}function hf(i,e){i.uniform1fv(this.addr,e)}function uf(i,e){const t=li(e,this.size,2);i.uniform2fv(this.addr,t)}function pf(i,e){const t=li(e,this.size,3);i.uniform3fv(this.addr,t)}function gf(i,e){const t=li(e,this.size,4);i.uniform4fv(this.addr,t)}function mf(i,e){const t=li(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function vf(i,e){const t=li(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function xf(i,e){const t=li(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ef(i,e){i.uniform1iv(this.addr,e)}function Bf(i,e){i.uniform2iv(this.addr,e)}function Mf(i,e){i.uniform3iv(this.addr,e)}function _f(i,e){i.uniform4iv(this.addr,e)}function wf(i,e){i.uniform1uiv(this.addr,e)}function Sf(i,e){i.uniform2uiv(this.addr,e)}function Cf(i,e){i.uniform3uiv(this.addr,e)}function bf(i,e){i.uniform4uiv(this.addr,e)}function yf(i,e,t){const n=this.cache,A=e.length,r=cA(t,A);ft(n,r)||(i.uniform1iv(this.addr,r),ht(n,r));for(let s=0;s!==A;++s)t.setTexture2D(e[s]||ma,r[s])}function Tf(i,e,t){const n=this.cache,A=e.length,r=cA(t,A);ft(n,r)||(i.uniform1iv(this.addr,r),ht(n,r));for(let s=0;s!==A;++s)t.setTexture3D(e[s]||Ea,r[s])}function Rf(i,e,t){const n=this.cache,A=e.length,r=cA(t,A);ft(n,r)||(i.uniform1iv(this.addr,r),ht(n,r));for(let s=0;s!==A;++s)t.setTextureCube(e[s]||Ba,r[s])}function Pf(i,e,t){const n=this.cache,A=e.length,r=cA(t,A);ft(n,r)||(i.uniform1iv(this.addr,r),ht(n,r));for(let s=0;s!==A;++s)t.setTexture2DArray(e[s]||xa,r[s])}function If(i){switch(i){case 5126:return hf;case 35664:return uf;case 35665:return pf;case 35666:return gf;case 35674:return mf;case 35675:return vf;case 35676:return xf;case 5124:case 35670:return Ef;case 35667:case 35671:return Bf;case 35668:case 35672:return Mf;case 35669:case 35673:return _f;case 5125:return wf;case 36294:return Sf;case 36295:return Cf;case 36296:return bf;case 35678:case 36198:case 36298:case 36306:case 35682:return yf;case 35679:case 36299:case 36307:return Tf;case 35680:case 36300:case 36308:case 36293:return Rf;case 36289:case 36303:case 36311:case 36292:return Pf}}class Df{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ff(t.type)}}class Uf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=If(t.type)}}class Ff{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const A=this.seq;for(let r=0,s=A.length;r!==s;++r){const a=A[r];a.setValue(e,t[a.id],n)}}}const Zr=/(\w+)(\])?(\[|\.)?/g;function ba(i,e){i.seq.push(e),i.map[e.id]=e}function Lf(i,e,t){const n=i.name,A=n.length;for(Zr.lastIndex=0;;){const r=Zr.exec(n),s=Zr.lastIndex;let a=r[1];const c=r[2]==="]",o=r[3];if(c&&(a=a|0),o===void 0||o==="["&&s+2===A){ba(t,o===void 0?new Df(a,i,e):new Uf(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Ff(a),ba(t,f)),t=f}}}class lA{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let A=0;A<n;++A){const r=e.getActiveUniform(t,A),s=e.getUniformLocation(t,r.name);Lf(r,s,this)}}setValue(e,t,n,A){const r=this.map[t];r!==void 0&&r.setValue(e,n,A)}setOptional(e,t,n){const A=t[n];A!==void 0&&this.setValue(e,n,A)}static upload(e,t,n,A){for(let r=0,s=t.length;r!==s;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,A)}}static seqWithValue(e,t){const n=[];for(let A=0,r=e.length;A!==r;++A){const s=e[A];s.id in t&&n.push(s)}return n}}function ya(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Nf=37297;let Qf=0;function Hf(i,e){const t=i.split(`
`),n=[],A=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=A;s<r;s++){const a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}const Ta=new Ue;function kf(i){ze._getMatrix(Ta,ze.workingColorSpace,i);const e=`mat3( ${Ta.elements.map(t=>t.toFixed(4))} )`;switch(ze.getTransfer(i)){case ki:return[e,"LinearTransferOETF"];case je:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ra(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Hf(i.getShaderSource(e),a)}else return r}function Gf(i,e){const t=kf(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Of(i,e){let t;switch(e){case bo:t="Linear";break;case yo:t="Reinhard";break;case To:t="Cineon";break;case Ro:t="ACESFilmic";break;case Io:t="AgX";break;case Do:t="Neutral";break;case Po:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const dA=new F;function zf(){ze.getLuminanceCoefficients(dA);const i=dA.x.toFixed(4),e=dA.y.toFixed(4),t=dA.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yi).join(`
`)}function Yf(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Wf(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let A=0;A<n;A++){const r=i.getActiveAttrib(e,A),s=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[s]={type:r.type,location:i.getAttribLocation(e,s),locationSize:a}}return t}function yi(i){return i!==""}function Pa(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ia(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xf=/^[ \t]*#include +<([\w\d./]+)>/gm;function qr(i){return i.replace(Xf,Jf)}const jf=new Map;function Jf(i,e){let t=Le[e];if(t===void 0){const n=jf.get(e);if(n!==void 0)t=Le[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return qr(t)}const Kf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Da(i){return i.replace(Kf,Zf)}function Zf(i,e,t,n){let A="";for(let r=parseInt(e);r<parseInt(t);r++)A+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return A}function Ua(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qf(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===as?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ro?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===en&&(e="SHADOWMAP_TYPE_VSM"),e}function $f(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case On:case zn:e="ENVMAP_TYPE_CUBE";break;case Ui:e="ENVMAP_TYPE_CUBE_UV";break}return e}function eh(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===zn&&(e="ENVMAP_MODE_REFRACTION"),e}function th(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ds:e="ENVMAP_BLENDING_MULTIPLY";break;case So:e="ENVMAP_BLENDING_MIX";break;case Co:e="ENVMAP_BLENDING_ADD";break}return e}function nh(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ih(i,e,t,n){const A=i.getContext(),r=t.defines;let s=t.vertexShader,a=t.fragmentShader;const c=qf(t),o=$f(t),d=eh(t),f=th(t),h=nh(t),u=Vf(t),m=Yf(r),M=A.createProgram();let p,l,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(yi).join(`
`),p.length>0&&(p+=`
`),l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(yi).join(`
`),l.length>0&&(l+=`
`)):(p=[Ua(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yi).join(`
`),l=[Ua(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+o:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hn?"#define TONE_MAPPING":"",t.toneMapping!==hn?Le.tonemapping_pars_fragment:"",t.toneMapping!==hn?Of("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,Gf("linearToOutputTexel",t.outputColorSpace),zf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yi).join(`
`)),s=qr(s),s=Pa(s,t),s=Ia(s,t),a=qr(a),a=Pa(a,t),a=Ia(a,t),s=Da(s),a=Da(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,l=["#define varying in",t.glslVersion===Ss?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ss?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);const w=S+p+s,B=S+l+a,y=ya(A,A.VERTEX_SHADER,w),C=ya(A,A.FRAGMENT_SHADER,B);A.attachShader(M,y),A.attachShader(M,C),t.index0AttributeName!==void 0?A.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&A.bindAttribLocation(M,0,"position"),A.linkProgram(M);function T(R){if(i.debug.checkShaderErrors){const L=A.getProgramInfoLog(M)||"",k=A.getShaderInfoLog(y)||"",z=A.getShaderInfoLog(C)||"",W=L.trim(),V=k.trim(),te=z.trim();let G=!0,re=!0;if(A.getProgramParameter(M,A.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(A,M,y,C);else{const ce=Ra(A,y,"vertex"),Me=Ra(A,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+A.getError()+" - VALIDATE_STATUS "+A.getProgramParameter(M,A.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+W+`
`+ce+`
`+Me)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(V===""||te==="")&&(re=!1);re&&(R.diagnostics={runnable:G,programLog:W,vertexShader:{log:V,prefix:p},fragmentShader:{log:te,prefix:l}})}A.deleteShader(y),A.deleteShader(C),I=new lA(A,M),E=Wf(A,M)}let I;this.getUniforms=function(){return I===void 0&&T(this),I};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=A.getProgramParameter(M,Nf)),x},this.destroy=function(){n.releaseStatesOfProgram(this),A.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qf++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=y,this.fragmentShader=C,this}let Ah=0;class rh{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,A=this._getShaderStage(t),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(A)===!1&&(s.add(A),A.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new sh(e),t.set(e,n)),n}}class sh{constructor(e){this.id=Ah++,this.code=e,this.usedTimes=0}}function ah(i,e,t,n,A,r,s){const a=new Us,c=new rh,o=new Set,d=[],f=A.logarithmicDepthBuffer,h=A.vertexTextures;let u=A.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return o.add(E),E===0?"uv":`uv${E}`}function p(E,x,R,L,k){const z=L.fog,W=k.geometry,V=E.isMeshStandardMaterial?L.environment:null,te=(E.isMeshStandardMaterial?t:e).get(E.envMap||V),G=te&&te.mapping===Ui?te.image.height:null,re=m[E.type];E.precision!==null&&(u=A.getMaxPrecision(E.precision),u!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",u,"instead."));const ce=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Me=ce!==void 0?ce.length:0;let Qe=0;W.morphAttributes.position!==void 0&&(Qe=1),W.morphAttributes.normal!==void 0&&(Qe=2),W.morphAttributes.color!==void 0&&(Qe=3);let Ze,et,We,X;if(re){const Xe=Zt[re];Ze=Xe.vertexShader,et=Xe.fragmentShader}else Ze=E.vertexShader,et=E.fragmentShader,c.update(E),We=c.getVertexShaderID(E),X=c.getFragmentShaderID(E);const K=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),Pe=k.isInstancedMesh===!0,Be=k.isBatchedMesh===!0,Oe=!!E.map,xt=!!E.matcap,b=!!te,tt=!!E.aoMap,De=!!E.lightMap,Te=!!E.bumpMap,pe=!!E.normalMap,nt=!!E.displacementMap,ge=!!E.emissiveMap,Ne=!!E.metalnessMap,pt=!!E.roughnessMap,ct=E.anisotropy>0,_=E.clearcoat>0,g=E.dispersion>0,N=E.iridescence>0,Y=E.sheen>0,J=E.transmission>0,O=ct&&!!E.anisotropyMap,Ee=_&&!!E.clearcoatMap,ne=_&&!!E.clearcoatNormalMap,me=_&&!!E.clearcoatRoughnessMap,ve=N&&!!E.iridescenceMap,$=N&&!!E.iridescenceThicknessMap,oe=Y&&!!E.sheenColorMap,ye=Y&&!!E.sheenRoughnessMap,xe=!!E.specularMap,se=!!E.specularColorMap,Fe=!!E.specularIntensityMap,P=J&&!!E.transmissionMap,ee=J&&!!E.thicknessMap,ie=!!E.gradientMap,de=!!E.alphaMap,Z=E.alphaTest>0,j=!!E.alphaHash,ue=!!E.extensions;let Ie=hn;E.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ie=i.toneMapping);const qe={shaderID:re,shaderType:E.type,shaderName:E.name,vertexShader:Ze,fragmentShader:et,defines:E.defines,customVertexShaderID:We,customFragmentShaderID:X,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:u,batching:Be,batchingColor:Be&&k._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&k.instanceColor!==null,instancingMorph:Pe&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Vn,alphaToCoverage:!!E.alphaToCoverage,map:Oe,matcap:xt,envMap:b,envMapMode:b&&te.mapping,envMapCubeUVHeight:G,aoMap:tt,lightMap:De,bumpMap:Te,normalMap:pe,displacementMap:h&&nt,emissiveMap:ge,normalMapObjectSpace:pe&&E.normalMapType===No,normalMapTangentSpace:pe&&E.normalMapType===Bs,metalnessMap:Ne,roughnessMap:pt,anisotropy:ct,anisotropyMap:O,clearcoat:_,clearcoatMap:Ee,clearcoatNormalMap:ne,clearcoatRoughnessMap:me,dispersion:g,iridescence:N,iridescenceMap:ve,iridescenceThicknessMap:$,sheen:Y,sheenColorMap:oe,sheenRoughnessMap:ye,specularMap:xe,specularColorMap:se,specularIntensityMap:Fe,transmission:J,transmissionMap:P,thicknessMap:ee,gradientMap:ie,opaque:E.transparent===!1&&E.blending===kn&&E.alphaToCoverage===!1,alphaMap:de,alphaTest:Z,alphaHash:j,combine:E.combine,mapUv:Oe&&M(E.map.channel),aoMapUv:tt&&M(E.aoMap.channel),lightMapUv:De&&M(E.lightMap.channel),bumpMapUv:Te&&M(E.bumpMap.channel),normalMapUv:pe&&M(E.normalMap.channel),displacementMapUv:nt&&M(E.displacementMap.channel),emissiveMapUv:ge&&M(E.emissiveMap.channel),metalnessMapUv:Ne&&M(E.metalnessMap.channel),roughnessMapUv:pt&&M(E.roughnessMap.channel),anisotropyMapUv:O&&M(E.anisotropyMap.channel),clearcoatMapUv:Ee&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:ne&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:$&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:ye&&M(E.sheenRoughnessMap.channel),specularMapUv:xe&&M(E.specularMap.channel),specularColorMapUv:se&&M(E.specularColorMap.channel),specularIntensityMapUv:Fe&&M(E.specularIntensityMap.channel),transmissionMapUv:P&&M(E.transmissionMap.channel),thicknessMapUv:ee&&M(E.thicknessMap.channel),alphaMapUv:de&&M(E.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(pe||ct),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!W.attributes.uv&&(Oe||de),fog:!!z,useFog:E.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:fe,skinning:k.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Qe,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Oe&&E.map.isVideoTexture===!0&&ze.getTransfer(E.map.colorSpace)===je,decodeVideoTextureEmissive:ge&&E.emissiveMap.isVideoTexture===!0&&ze.getTransfer(E.emissiveMap.colorSpace)===je,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===tn,flipSided:E.side===Mt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ue&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&E.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return qe.vertexUv1s=o.has(1),qe.vertexUv2s=o.has(2),qe.vertexUv3s=o.has(3),o.clear(),qe}function l(E){const x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(const R in E.defines)x.push(R),x.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(S(x,E),w(x,E),x.push(i.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function S(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function w(E,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),E.push(a.mask)}function B(E){const x=m[E.type];let R;if(x){const L=Zt[x];R=hc.clone(L.uniforms)}else R=E.uniforms;return R}function y(E,x){let R;for(let L=0,k=d.length;L<k;L++){const z=d[L];if(z.cacheKey===x){R=z,++R.usedTimes;break}}return R===void 0&&(R=new ih(i,x,E,r),d.push(R)),R}function C(E){if(--E.usedTimes===0){const x=d.indexOf(E);d[x]=d[d.length-1],d.pop(),E.destroy()}}function T(E){c.remove(E)}function I(){c.dispose()}return{getParameters:p,getProgramCacheKey:l,getUniforms:B,acquireProgram:y,releaseProgram:C,releaseShaderCache:T,programs:d,dispose:I}}function oh(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function n(s){i.delete(s)}function A(s,a,c){i.get(s)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:A,dispose:r}}function ch(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Fa(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function La(){const i=[];let e=0;const t=[],n=[],A=[];function r(){e=0,t.length=0,n.length=0,A.length=0}function s(f,h,u,m,M,p){let l=i[e];return l===void 0?(l={id:f.id,object:f,geometry:h,material:u,groupOrder:m,renderOrder:f.renderOrder,z:M,group:p},i[e]=l):(l.id=f.id,l.object=f,l.geometry=h,l.material=u,l.groupOrder=m,l.renderOrder=f.renderOrder,l.z=M,l.group=p),e++,l}function a(f,h,u,m,M,p){const l=s(f,h,u,m,M,p);u.transmission>0?n.push(l):u.transparent===!0?A.push(l):t.push(l)}function c(f,h,u,m,M,p){const l=s(f,h,u,m,M,p);u.transmission>0?n.unshift(l):u.transparent===!0?A.unshift(l):t.unshift(l)}function o(f,h){t.length>1&&t.sort(f||ch),n.length>1&&n.sort(h||Fa),A.length>1&&A.sort(h||Fa)}function d(){for(let f=e,h=i.length;f<h;f++){const u=i[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:n,transparent:A,init:r,push:a,unshift:c,finish:d,sort:o}}function lh(){let i=new WeakMap;function e(n,A){const r=i.get(n);let s;return r===void 0?(s=new La,i.set(n,[s])):A>=r.length?(s=new La,r.push(s)):s=r[A],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function dh(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ve};break;case"SpotLight":t={position:new F,direction:new F,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function fh(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let hh=0;function uh(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ph(i){const e=new dh,t=fh(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new F);const A=new F,r=new at,s=new at;function a(o){let d=0,f=0,h=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let u=0,m=0,M=0,p=0,l=0,S=0,w=0,B=0,y=0,C=0,T=0;o.sort(uh);for(let E=0,x=o.length;E<x;E++){const R=o[E],L=R.color,k=R.intensity,z=R.distance,W=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=L.r*k,f+=L.g*k,h+=L.b*k;else if(R.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(R.sh.coefficients[V],k);T++}else if(R.isDirectionalLight){const V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const te=R.shadow,G=t.get(R);G.shadowIntensity=te.intensity,G.shadowBias=te.bias,G.shadowNormalBias=te.normalBias,G.shadowRadius=te.radius,G.shadowMapSize=te.mapSize,n.directionalShadow[u]=G,n.directionalShadowMap[u]=W,n.directionalShadowMatrix[u]=R.shadow.matrix,S++}n.directional[u]=V,u++}else if(R.isSpotLight){const V=e.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(L).multiplyScalar(k),V.distance=z,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,n.spot[M]=V;const te=R.shadow;if(R.map&&(n.spotLightMap[y]=R.map,y++,te.updateMatrices(R),R.castShadow&&C++),n.spotLightMatrix[M]=te.matrix,R.castShadow){const G=t.get(R);G.shadowIntensity=te.intensity,G.shadowBias=te.bias,G.shadowNormalBias=te.normalBias,G.shadowRadius=te.radius,G.shadowMapSize=te.mapSize,n.spotShadow[M]=G,n.spotShadowMap[M]=W,B++}M++}else if(R.isRectAreaLight){const V=e.get(R);V.color.copy(L).multiplyScalar(k),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=V,p++}else if(R.isPointLight){const V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){const te=R.shadow,G=t.get(R);G.shadowIntensity=te.intensity,G.shadowBias=te.bias,G.shadowNormalBias=te.normalBias,G.shadowRadius=te.radius,G.shadowMapSize=te.mapSize,G.shadowCameraNear=te.camera.near,G.shadowCameraFar=te.camera.far,n.pointShadow[m]=G,n.pointShadowMap[m]=W,n.pointShadowMatrix[m]=R.shadow.matrix,w++}n.point[m]=V,m++}else if(R.isHemisphereLight){const V=e.get(R);V.skyColor.copy(R.color).multiplyScalar(k),V.groundColor.copy(R.groundColor).multiplyScalar(k),n.hemi[l]=V,l++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=h;const I=n.hash;(I.directionalLength!==u||I.pointLength!==m||I.spotLength!==M||I.rectAreaLength!==p||I.hemiLength!==l||I.numDirectionalShadows!==S||I.numPointShadows!==w||I.numSpotShadows!==B||I.numSpotMaps!==y||I.numLightProbes!==T)&&(n.directional.length=u,n.spot.length=M,n.rectArea.length=p,n.point.length=m,n.hemi.length=l,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=B,n.spotShadowMap.length=B,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=B+y-C,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=T,I.directionalLength=u,I.pointLength=m,I.spotLength=M,I.rectAreaLength=p,I.hemiLength=l,I.numDirectionalShadows=S,I.numPointShadows=w,I.numSpotShadows=B,I.numSpotMaps=y,I.numLightProbes=T,n.version=hh++)}function c(o,d){let f=0,h=0,u=0,m=0,M=0;const p=d.matrixWorldInverse;for(let l=0,S=o.length;l<S;l++){const w=o[l];if(w.isDirectionalLight){const B=n.directional[f];B.direction.setFromMatrixPosition(w.matrixWorld),A.setFromMatrixPosition(w.target.matrixWorld),B.direction.sub(A),B.direction.transformDirection(p),f++}else if(w.isSpotLight){const B=n.spot[u];B.position.setFromMatrixPosition(w.matrixWorld),B.position.applyMatrix4(p),B.direction.setFromMatrixPosition(w.matrixWorld),A.setFromMatrixPosition(w.target.matrixWorld),B.direction.sub(A),B.direction.transformDirection(p),u++}else if(w.isRectAreaLight){const B=n.rectArea[m];B.position.setFromMatrixPosition(w.matrixWorld),B.position.applyMatrix4(p),s.identity(),r.copy(w.matrixWorld),r.premultiply(p),s.extractRotation(r),B.halfWidth.set(w.width*.5,0,0),B.halfHeight.set(0,w.height*.5,0),B.halfWidth.applyMatrix4(s),B.halfHeight.applyMatrix4(s),m++}else if(w.isPointLight){const B=n.point[h];B.position.setFromMatrixPosition(w.matrixWorld),B.position.applyMatrix4(p),h++}else if(w.isHemisphereLight){const B=n.hemi[M];B.direction.setFromMatrixPosition(w.matrixWorld),B.direction.transformDirection(p),M++}}}return{setup:a,setupView:c,state:n}}function Na(i){const e=new ph(i),t=[],n=[];function A(d){o.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function s(d){n.push(d)}function a(){e.setup(t)}function c(d){e.setupView(t,d)}const o={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:A,state:o,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:s}}function gh(i){let e=new WeakMap;function t(A,r=0){const s=e.get(A);let a;return s===void 0?(a=new Na(i),e.set(A,[a])):r>=s.length?(a=new Na(i),s.push(a)):a=s[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const mh=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vh=`uniform sampler2D shadow_pass;
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
}`;function xh(i,e,t){let n=new Hr;const A=new Ge,r=new Ge,s=new rt,a=new _c({depthPacking:Lo}),c=new wc,o={},d=t.maxTextureSize,f={[dn]:Mt,[Mt]:dn,[tn]:tn},h=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:mh,fragmentShader:vh}),u=h.clone();u.defines.HORIZONTAL_PASS=1;const m=new Vt;m.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Kt(m,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=as;let l=this.type;this.render=function(C,T,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const E=i.getRenderTarget(),x=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),L=i.state;L.setBlending(fn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const k=l!==en&&this.type===en,z=l===en&&this.type!==en;for(let W=0,V=C.length;W<V;W++){const te=C[W],G=te.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;A.copy(G.mapSize);const re=G.getFrameExtents();if(A.multiply(re),r.copy(G.mapSize),(A.x>d||A.y>d)&&(A.x>d&&(r.x=Math.floor(d/re.x),A.x=r.x*re.x,G.mapSize.x=r.x),A.y>d&&(r.y=Math.floor(d/re.y),A.y=r.y*re.y,G.mapSize.y=r.y)),G.map===null||k===!0||z===!0){const Me=this.type!==en?{minFilter:Qt,magFilter:Qt}:{};G.map!==null&&G.map.dispose(),G.map=new pn(A.x,A.y,Me),G.map.texture.name=te.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const ce=G.getViewportCount();for(let Me=0;Me<ce;Me++){const Qe=G.getViewport(Me);s.set(r.x*Qe.x,r.y*Qe.y,r.x*Qe.z,r.y*Qe.w),L.viewport(s),G.updateMatrices(te,Me),n=G.getFrustum(),B(T,I,G.camera,te,this.type)}G.isPointLightShadow!==!0&&this.type===en&&S(G,I),G.needsUpdate=!1}l=this.type,p.needsUpdate=!1,i.setRenderTarget(E,x,R)};function S(C,T){const I=e.update(M);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,u.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,u.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new pn(A.x,A.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(T,null,I,h,M,null),u.uniforms.shadow_pass.value=C.mapPass.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(T,null,I,u,M,null)}function w(C,T,I,E){let x=null;const R=I.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)x=R;else if(x=I.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const L=x.uuid,k=T.uuid;let z=o[L];z===void 0&&(z={},o[L]=z);let W=z[k];W===void 0&&(W=x.clone(),z[k]=W,T.addEventListener("dispose",y)),x=W}if(x.visible=T.visible,x.wireframe=T.wireframe,E===en?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:f[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const L=i.properties.get(x);L.light=I}return x}function B(C,T,I,E,x){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===en)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,C.matrixWorld);const k=e.update(C),z=C.material;if(Array.isArray(z)){const W=k.groups;for(let V=0,te=W.length;V<te;V++){const G=W[V],re=z[G.materialIndex];if(re&&re.visible){const ce=w(C,re,E,x);C.onBeforeShadow(i,C,T,I,k,ce,G),i.renderBufferDirect(I,null,k,ce,C,G),C.onAfterShadow(i,C,T,I,k,ce,G)}}}else if(z.visible){const W=w(C,z,E,x);C.onBeforeShadow(i,C,T,I,k,W,null),i.renderBufferDirect(I,null,k,W,C,null),C.onAfterShadow(i,C,T,I,k,W,null)}}const L=C.children;for(let k=0,z=L.length;k<z;k++)B(L[k],T,I,E,x)}function y(C){C.target.removeEventListener("dispose",y);for(const I in o){const E=o[I],x=C.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}const Eh={[EA]:BA,[MA]:SA,[_A]:CA,[Gn]:wA,[BA]:EA,[SA]:MA,[CA]:_A,[wA]:Gn};function Bh(i,e){function t(){let P=!1;const ee=new rt;let ie=null;const de=new rt(0,0,0,0);return{setMask:function(Z){ie!==Z&&!P&&(i.colorMask(Z,Z,Z,Z),ie=Z)},setLocked:function(Z){P=Z},setClear:function(Z,j,ue,Ie,qe){qe===!0&&(Z*=Ie,j*=Ie,ue*=Ie),ee.set(Z,j,ue,Ie),de.equals(ee)===!1&&(i.clearColor(Z,j,ue,Ie),de.copy(ee))},reset:function(){P=!1,ie=null,de.set(-1,0,0,0)}}}function n(){let P=!1,ee=!1,ie=null,de=null,Z=null;return{setReversed:function(j){if(ee!==j){const ue=e.get("EXT_clip_control");j?ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.ZERO_TO_ONE_EXT):ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.NEGATIVE_ONE_TO_ONE_EXT),ee=j;const Ie=Z;Z=null,this.setClear(Ie)}},getReversed:function(){return ee},setTest:function(j){j?K(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function(j){ie!==j&&!P&&(i.depthMask(j),ie=j)},setFunc:function(j){if(ee&&(j=Eh[j]),de!==j){switch(j){case EA:i.depthFunc(i.NEVER);break;case BA:i.depthFunc(i.ALWAYS);break;case MA:i.depthFunc(i.LESS);break;case Gn:i.depthFunc(i.LEQUAL);break;case _A:i.depthFunc(i.EQUAL);break;case wA:i.depthFunc(i.GEQUAL);break;case SA:i.depthFunc(i.GREATER);break;case CA:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=j}},setLocked:function(j){P=j},setClear:function(j){Z!==j&&(ee&&(j=1-j),i.clearDepth(j),Z=j)},reset:function(){P=!1,ie=null,de=null,Z=null,ee=!1}}}function A(){let P=!1,ee=null,ie=null,de=null,Z=null,j=null,ue=null,Ie=null,qe=null;return{setTest:function(Xe){P||(Xe?K(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function(Xe){ee!==Xe&&!P&&(i.stencilMask(Xe),ee=Xe)},setFunc:function(Xe,ln,$t){(ie!==Xe||de!==ln||Z!==$t)&&(i.stencilFunc(Xe,ln,$t),ie=Xe,de=ln,Z=$t)},setOp:function(Xe,ln,$t){(j!==Xe||ue!==ln||Ie!==$t)&&(i.stencilOp(Xe,ln,$t),j=Xe,ue=ln,Ie=$t)},setLocked:function(Xe){P=Xe},setClear:function(Xe){qe!==Xe&&(i.clearStencil(Xe),qe=Xe)},reset:function(){P=!1,ee=null,ie=null,de=null,Z=null,j=null,ue=null,Ie=null,qe=null}}}const r=new t,s=new n,a=new A,c=new WeakMap,o=new WeakMap;let d={},f={},h=new WeakMap,u=[],m=null,M=!1,p=null,l=null,S=null,w=null,B=null,y=null,C=null,T=new Ve(0,0,0),I=0,E=!1,x=null,R=null,L=null,k=null,z=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,te=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=te>=1):G.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=te>=2);let re=null,ce={};const Me=i.getParameter(i.SCISSOR_BOX),Qe=i.getParameter(i.VIEWPORT),Ze=new rt().fromArray(Me),et=new rt().fromArray(Qe);function We(P,ee,ie,de){const Z=new Uint8Array(4),j=i.createTexture();i.bindTexture(P,j),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ue=0;ue<ie;ue++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(ee,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,Z):i.texImage2D(ee+ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Z);return j}const X={};X[i.TEXTURE_2D]=We(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=We(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=We(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=We(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),K(i.DEPTH_TEST),s.setFunc(Gn),Te(!1),pe(ss),K(i.CULL_FACE),tt(fn);function K(P){d[P]!==!0&&(i.enable(P),d[P]=!0)}function fe(P){d[P]!==!1&&(i.disable(P),d[P]=!1)}function Pe(P,ee){return f[P]!==ee?(i.bindFramebuffer(P,ee),f[P]=ee,P===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ee),P===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ee),!0):!1}function Be(P,ee){let ie=u,de=!1;if(P){ie=h.get(ee),ie===void 0&&(ie=[],h.set(ee,ie));const Z=P.textures;if(ie.length!==Z.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let j=0,ue=Z.length;j<ue;j++)ie[j]=i.COLOR_ATTACHMENT0+j;ie.length=Z.length,de=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,de=!0);de&&i.drawBuffers(ie)}function Oe(P){return m!==P?(i.useProgram(P),m=P,!0):!1}const xt={[wn]:i.FUNC_ADD,[ao]:i.FUNC_SUBTRACT,[oo]:i.FUNC_REVERSE_SUBTRACT};xt[co]=i.MIN,xt[lo]=i.MAX;const b={[fo]:i.ZERO,[ho]:i.ONE,[uo]:i.SRC_COLOR,[vA]:i.SRC_ALPHA,[Eo]:i.SRC_ALPHA_SATURATE,[vo]:i.DST_COLOR,[go]:i.DST_ALPHA,[po]:i.ONE_MINUS_SRC_COLOR,[xA]:i.ONE_MINUS_SRC_ALPHA,[xo]:i.ONE_MINUS_DST_COLOR,[mo]:i.ONE_MINUS_DST_ALPHA,[Bo]:i.CONSTANT_COLOR,[Mo]:i.ONE_MINUS_CONSTANT_COLOR,[_o]:i.CONSTANT_ALPHA,[wo]:i.ONE_MINUS_CONSTANT_ALPHA};function tt(P,ee,ie,de,Z,j,ue,Ie,qe,Xe){if(P===fn){M===!0&&(fe(i.BLEND),M=!1);return}if(M===!1&&(K(i.BLEND),M=!0),P!==so){if(P!==p||Xe!==E){if((l!==wn||B!==wn)&&(i.blendEquation(i.FUNC_ADD),l=wn,B=wn),Xe)switch(P){case kn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case os:i.blendFunc(i.ONE,i.ONE);break;case cs:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ls:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case kn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case cs:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ls:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,w=null,y=null,C=null,T.set(0,0,0),I=0,p=P,E=Xe}return}Z=Z||ee,j=j||ie,ue=ue||de,(ee!==l||Z!==B)&&(i.blendEquationSeparate(xt[ee],xt[Z]),l=ee,B=Z),(ie!==S||de!==w||j!==y||ue!==C)&&(i.blendFuncSeparate(b[ie],b[de],b[j],b[ue]),S=ie,w=de,y=j,C=ue),(Ie.equals(T)===!1||qe!==I)&&(i.blendColor(Ie.r,Ie.g,Ie.b,qe),T.copy(Ie),I=qe),p=P,E=!1}function De(P,ee){P.side===tn?fe(i.CULL_FACE):K(i.CULL_FACE);let ie=P.side===Mt;ee&&(ie=!ie),Te(ie),P.blending===kn&&P.transparent===!1?tt(fn):tt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),s.setFunc(P.depthFunc),s.setTest(P.depthTest),s.setMask(P.depthWrite),r.setMask(P.colorWrite);const de=P.stencilWrite;a.setTest(de),de&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ge(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Te(P){x!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),x=P)}function pe(P){P!==io?(K(i.CULL_FACE),P!==R&&(P===ss?i.cullFace(i.BACK):P===Ao?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),R=P}function nt(P){P!==L&&(V&&i.lineWidth(P),L=P)}function ge(P,ee,ie){P?(K(i.POLYGON_OFFSET_FILL),(k!==ee||z!==ie)&&(i.polygonOffset(ee,ie),k=ee,z=ie)):fe(i.POLYGON_OFFSET_FILL)}function Ne(P){P?K(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)}function pt(P){P===void 0&&(P=i.TEXTURE0+W-1),re!==P&&(i.activeTexture(P),re=P)}function ct(P,ee,ie){ie===void 0&&(re===null?ie=i.TEXTURE0+W-1:ie=re);let de=ce[ie];de===void 0&&(de={type:void 0,texture:void 0},ce[ie]=de),(de.type!==P||de.texture!==ee)&&(re!==ie&&(i.activeTexture(ie),re=ie),i.bindTexture(P,ee||X[P]),de.type=P,de.texture=ee)}function _(){const P=ce[re];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Y(){try{i.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{i.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function O(){try{i.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{i.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{i.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(){try{i.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{i.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{i.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(P){Ze.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Ze.copy(P))}function ye(P){et.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),et.copy(P))}function xe(P,ee){let ie=o.get(ee);ie===void 0&&(ie=new WeakMap,o.set(ee,ie));let de=ie.get(P);de===void 0&&(de=i.getUniformBlockIndex(ee,P.name),ie.set(P,de))}function se(P,ee){const de=o.get(ee).get(P);c.get(ee)!==de&&(i.uniformBlockBinding(ee,de,P.__bindingPointIndex),c.set(ee,de))}function Fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},re=null,ce={},f={},h=new WeakMap,u=[],m=null,M=!1,p=null,l=null,S=null,w=null,B=null,y=null,C=null,T=new Ve(0,0,0),I=0,E=!1,x=null,R=null,L=null,k=null,z=null,Ze.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:K,disable:fe,bindFramebuffer:Pe,drawBuffers:Be,useProgram:Oe,setBlending:tt,setMaterial:De,setFlipSided:Te,setCullFace:pe,setLineWidth:nt,setPolygonOffset:ge,setScissorTest:Ne,activeTexture:pt,bindTexture:ct,unbindTexture:_,compressedTexImage2D:g,compressedTexImage3D:N,texImage2D:ve,texImage3D:$,updateUBOMapping:xe,uniformBlockBinding:se,texStorage2D:ne,texStorage3D:me,texSubImage2D:Y,texSubImage3D:J,compressedTexSubImage2D:O,compressedTexSubImage3D:Ee,scissor:oe,viewport:ye,reset:Fe}}function Mh(i,e,t,n,A,r,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),o=new Ge,d=new WeakMap;let f;const h=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(_,g){return u?new OffscreenCanvas(_,g):Oi("canvas")}function M(_,g,N){let Y=1;const J=ct(_);if((J.width>N||J.height>N)&&(Y=N/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){const O=Math.floor(Y*J.width),Ee=Math.floor(Y*J.height);f===void 0&&(f=m(O,Ee));const ne=g?m(O,Ee):f;return ne.width=O,ne.height=Ee,ne.getContext("2d").drawImage(_,0,0,O,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+O+"x"+Ee+")."),ne}else return"data"in _&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),_;return _}function p(_){return _.generateMipmaps}function l(_){i.generateMipmap(_)}function S(_){return _.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:_.isWebGL3DRenderTarget?i.TEXTURE_3D:_.isWebGLArrayRenderTarget||_.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(_,g,N,Y,J=!1){if(_!==null){if(i[_]!==void 0)return i[_];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let O=g;if(g===i.RED&&(N===i.FLOAT&&(O=i.R32F),N===i.HALF_FLOAT&&(O=i.R16F),N===i.UNSIGNED_BYTE&&(O=i.R8)),g===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(O=i.R8UI),N===i.UNSIGNED_SHORT&&(O=i.R16UI),N===i.UNSIGNED_INT&&(O=i.R32UI),N===i.BYTE&&(O=i.R8I),N===i.SHORT&&(O=i.R16I),N===i.INT&&(O=i.R32I)),g===i.RG&&(N===i.FLOAT&&(O=i.RG32F),N===i.HALF_FLOAT&&(O=i.RG16F),N===i.UNSIGNED_BYTE&&(O=i.RG8)),g===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(O=i.RG8UI),N===i.UNSIGNED_SHORT&&(O=i.RG16UI),N===i.UNSIGNED_INT&&(O=i.RG32UI),N===i.BYTE&&(O=i.RG8I),N===i.SHORT&&(O=i.RG16I),N===i.INT&&(O=i.RG32I)),g===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(O=i.RGB8UI),N===i.UNSIGNED_SHORT&&(O=i.RGB16UI),N===i.UNSIGNED_INT&&(O=i.RGB32UI),N===i.BYTE&&(O=i.RGB8I),N===i.SHORT&&(O=i.RGB16I),N===i.INT&&(O=i.RGB32I)),g===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(O=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(O=i.RGBA16UI),N===i.UNSIGNED_INT&&(O=i.RGBA32UI),N===i.BYTE&&(O=i.RGBA8I),N===i.SHORT&&(O=i.RGBA16I),N===i.INT&&(O=i.RGBA32I)),g===i.RGB&&(N===i.UNSIGNED_INT_5_9_9_9_REV&&(O=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(O=i.R11F_G11F_B10F)),g===i.RGBA){const Ee=J?ki:ze.getTransfer(Y);N===i.FLOAT&&(O=i.RGBA32F),N===i.HALF_FLOAT&&(O=i.RGBA16F),N===i.UNSIGNED_BYTE&&(O=Ee===je?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(O=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(O=i.RGB5_A1)}return(O===i.R16F||O===i.R32F||O===i.RG16F||O===i.RG32F||O===i.RGBA16F||O===i.RGBA32F)&&e.get("EXT_color_buffer_float"),O}function B(_,g){let N;return _?g===null||g===bn||g===ui?N=i.DEPTH24_STENCIL8:g===nn?N=i.DEPTH32F_STENCIL8:g===fi&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===bn||g===ui?N=i.DEPTH_COMPONENT24:g===nn?N=i.DEPTH_COMPONENT32F:g===fi&&(N=i.DEPTH_COMPONENT16),N}function y(_,g){return p(_)===!0||_.isFramebufferTexture&&_.minFilter!==Qt&&_.minFilter!==Yt?Math.log2(Math.max(g.width,g.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?g.mipmaps.length:1}function C(_){const g=_.target;g.removeEventListener("dispose",C),I(g),g.isVideoTexture&&d.delete(g)}function T(_){const g=_.target;g.removeEventListener("dispose",T),x(g)}function I(_){const g=n.get(_);if(g.__webglInit===void 0)return;const N=_.source,Y=h.get(N);if(Y){const J=Y[g.__cacheKey];J.usedTimes--,J.usedTimes===0&&E(_),Object.keys(Y).length===0&&h.delete(N)}n.remove(_)}function E(_){const g=n.get(_);i.deleteTexture(g.__webglTexture);const N=_.source,Y=h.get(N);delete Y[g.__cacheKey],s.memory.textures--}function x(_){const g=n.get(_);if(_.depthTexture&&(_.depthTexture.dispose(),n.remove(_.depthTexture)),_.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(g.__webglFramebuffer[Y]))for(let J=0;J<g.__webglFramebuffer[Y].length;J++)i.deleteFramebuffer(g.__webglFramebuffer[Y][J]);else i.deleteFramebuffer(g.__webglFramebuffer[Y]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[Y])}else{if(Array.isArray(g.__webglFramebuffer))for(let Y=0;Y<g.__webglFramebuffer.length;Y++)i.deleteFramebuffer(g.__webglFramebuffer[Y]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Y=0;Y<g.__webglColorRenderbuffer.length;Y++)g.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[Y]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const N=_.textures;for(let Y=0,J=N.length;Y<J;Y++){const O=n.get(N[Y]);O.__webglTexture&&(i.deleteTexture(O.__webglTexture),s.memory.textures--),n.remove(N[Y])}n.remove(_)}let R=0;function L(){R=0}function k(){const _=R;return _>=A.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+A.maxTextures),R+=1,_}function z(_){const g=[];return g.push(_.wrapS),g.push(_.wrapT),g.push(_.wrapR||0),g.push(_.magFilter),g.push(_.minFilter),g.push(_.anisotropy),g.push(_.internalFormat),g.push(_.format),g.push(_.type),g.push(_.generateMipmaps),g.push(_.premultiplyAlpha),g.push(_.flipY),g.push(_.unpackAlignment),g.push(_.colorSpace),g.join()}function W(_,g){const N=n.get(_);if(_.isVideoTexture&&Ne(_),_.isRenderTargetTexture===!1&&_.isExternalTexture!==!0&&_.version>0&&N.__version!==_.version){const Y=_.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(N,_,g);return}}else _.isExternalTexture&&(N.__webglTexture=_.sourceTexture?_.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+g)}function V(_,g){const N=n.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&N.__version!==_.version){X(N,_,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+g)}function te(_,g){const N=n.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&N.__version!==_.version){X(N,_,g);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+g)}function G(_,g){const N=n.get(_);if(_.version>0&&N.__version!==_.version){K(N,_,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+g)}const re={[TA]:i.REPEAT,[Sn]:i.CLAMP_TO_EDGE,[RA]:i.MIRRORED_REPEAT},ce={[Qt]:i.NEAREST,[Uo]:i.NEAREST_MIPMAP_NEAREST,[Fi]:i.NEAREST_MIPMAP_LINEAR,[Yt]:i.LINEAR,[PA]:i.LINEAR_MIPMAP_NEAREST,[Cn]:i.LINEAR_MIPMAP_LINEAR},Me={[Qo]:i.NEVER,[Vo]:i.ALWAYS,[Ho]:i.LESS,[_s]:i.LEQUAL,[ko]:i.EQUAL,[zo]:i.GEQUAL,[Go]:i.GREATER,[Oo]:i.NOTEQUAL};function Qe(_,g){if(g.type===nn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Yt||g.magFilter===PA||g.magFilter===Fi||g.magFilter===Cn||g.minFilter===Yt||g.minFilter===PA||g.minFilter===Fi||g.minFilter===Cn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(_,i.TEXTURE_WRAP_S,re[g.wrapS]),i.texParameteri(_,i.TEXTURE_WRAP_T,re[g.wrapT]),(_===i.TEXTURE_3D||_===i.TEXTURE_2D_ARRAY)&&i.texParameteri(_,i.TEXTURE_WRAP_R,re[g.wrapR]),i.texParameteri(_,i.TEXTURE_MAG_FILTER,ce[g.magFilter]),i.texParameteri(_,i.TEXTURE_MIN_FILTER,ce[g.minFilter]),g.compareFunction&&(i.texParameteri(_,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(_,i.TEXTURE_COMPARE_FUNC,Me[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Qt||g.minFilter!==Fi&&g.minFilter!==Cn||g.type===nn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(_,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,A.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Ze(_,g){let N=!1;_.__webglInit===void 0&&(_.__webglInit=!0,g.addEventListener("dispose",C));const Y=g.source;let J=h.get(Y);J===void 0&&(J={},h.set(Y,J));const O=z(g);if(O!==_.__cacheKey){J[O]===void 0&&(J[O]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,N=!0),J[O].usedTimes++;const Ee=J[_.__cacheKey];Ee!==void 0&&(J[_.__cacheKey].usedTimes--,Ee.usedTimes===0&&E(g)),_.__cacheKey=O,_.__webglTexture=J[O].texture}return N}function et(_,g,N){return Math.floor(Math.floor(_/N)/g)}function We(_,g,N,Y){const O=_.updateRanges;if(O.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,N,Y,g.data);else{O.sort(($,oe)=>$.start-oe.start);let Ee=0;for(let $=1;$<O.length;$++){const oe=O[Ee],ye=O[$],xe=oe.start+oe.count,se=et(ye.start,g.width,4),Fe=et(oe.start,g.width,4);ye.start<=xe+1&&se===Fe&&et(ye.start+ye.count-1,g.width,4)===se?oe.count=Math.max(oe.count,ye.start+ye.count-oe.start):(++Ee,O[Ee]=ye)}O.length=Ee+1;const ne=i.getParameter(i.UNPACK_ROW_LENGTH),me=i.getParameter(i.UNPACK_SKIP_PIXELS),ve=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let $=0,oe=O.length;$<oe;$++){const ye=O[$],xe=Math.floor(ye.start/4),se=Math.ceil(ye.count/4),Fe=xe%g.width,P=Math.floor(xe/g.width),ee=se,ie=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Fe),i.pixelStorei(i.UNPACK_SKIP_ROWS,P),t.texSubImage2D(i.TEXTURE_2D,0,Fe,P,ee,ie,N,Y,g.data)}_.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ne),i.pixelStorei(i.UNPACK_SKIP_PIXELS,me),i.pixelStorei(i.UNPACK_SKIP_ROWS,ve)}}function X(_,g,N){let Y=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Y=i.TEXTURE_3D);const J=Ze(_,g),O=g.source;t.bindTexture(Y,_.__webglTexture,i.TEXTURE0+N);const Ee=n.get(O);if(O.version!==Ee.__version||J===!0){t.activeTexture(i.TEXTURE0+N);const ne=ze.getPrimaries(ze.workingColorSpace),me=g.colorSpace===un?null:ze.getPrimaries(g.colorSpace),ve=g.colorSpace===un||ne===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let $=M(g.image,!1,A.maxTextureSize);$=pt(g,$);const oe=r.convert(g.format,g.colorSpace),ye=r.convert(g.type);let xe=w(g.internalFormat,oe,ye,g.colorSpace,g.isVideoTexture);Qe(Y,g);let se;const Fe=g.mipmaps,P=g.isVideoTexture!==!0,ee=Ee.__version===void 0||J===!0,ie=O.dataReady,de=y(g,$);if(g.isDepthTexture)xe=B(g.format===gi,g.type),ee&&(P?t.texStorage2D(i.TEXTURE_2D,1,xe,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,xe,$.width,$.height,0,oe,ye,null));else if(g.isDataTexture)if(Fe.length>0){P&&ee&&t.texStorage2D(i.TEXTURE_2D,de,xe,Fe[0].width,Fe[0].height);for(let Z=0,j=Fe.length;Z<j;Z++)se=Fe[Z],P?ie&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,se.width,se.height,oe,ye,se.data):t.texImage2D(i.TEXTURE_2D,Z,xe,se.width,se.height,0,oe,ye,se.data);g.generateMipmaps=!1}else P?(ee&&t.texStorage2D(i.TEXTURE_2D,de,xe,$.width,$.height),ie&&We(g,$,oe,ye)):t.texImage2D(i.TEXTURE_2D,0,xe,$.width,$.height,0,oe,ye,$.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){P&&ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,xe,Fe[0].width,Fe[0].height,$.depth);for(let Z=0,j=Fe.length;Z<j;Z++)if(se=Fe[Z],g.format!==Ht)if(oe!==null)if(P){if(ie)if(g.layerUpdates.size>0){const ue=oa(se.width,se.height,g.format,g.type);for(const Ie of g.layerUpdates){const qe=se.data.subarray(Ie*ue/se.data.BYTES_PER_ELEMENT,(Ie+1)*ue/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,Ie,se.width,se.height,1,oe,qe)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,se.width,se.height,$.depth,oe,se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,xe,se.width,se.height,$.depth,0,se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?ie&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,se.width,se.height,$.depth,oe,ye,se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,xe,se.width,se.height,$.depth,0,oe,ye,se.data)}else{P&&ee&&t.texStorage2D(i.TEXTURE_2D,de,xe,Fe[0].width,Fe[0].height);for(let Z=0,j=Fe.length;Z<j;Z++)se=Fe[Z],g.format!==Ht?oe!==null?P?ie&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,se.width,se.height,oe,se.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,xe,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?ie&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,se.width,se.height,oe,ye,se.data):t.texImage2D(i.TEXTURE_2D,Z,xe,se.width,se.height,0,oe,ye,se.data)}else if(g.isDataArrayTexture)if(P){if(ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,xe,$.width,$.height,$.depth),ie)if(g.layerUpdates.size>0){const Z=oa($.width,$.height,g.format,g.type);for(const j of g.layerUpdates){const ue=$.data.subarray(j*Z/$.data.BYTES_PER_ELEMENT,(j+1)*Z/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,$.width,$.height,1,oe,ye,ue)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,oe,ye,$.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,xe,$.width,$.height,$.depth,0,oe,ye,$.data);else if(g.isData3DTexture)P?(ee&&t.texStorage3D(i.TEXTURE_3D,de,xe,$.width,$.height,$.depth),ie&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,oe,ye,$.data)):t.texImage3D(i.TEXTURE_3D,0,xe,$.width,$.height,$.depth,0,oe,ye,$.data);else if(g.isFramebufferTexture){if(ee)if(P)t.texStorage2D(i.TEXTURE_2D,de,xe,$.width,$.height);else{let Z=$.width,j=$.height;for(let ue=0;ue<de;ue++)t.texImage2D(i.TEXTURE_2D,ue,xe,Z,j,0,oe,ye,null),Z>>=1,j>>=1}}else if(Fe.length>0){if(P&&ee){const Z=ct(Fe[0]);t.texStorage2D(i.TEXTURE_2D,de,xe,Z.width,Z.height)}for(let Z=0,j=Fe.length;Z<j;Z++)se=Fe[Z],P?ie&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,oe,ye,se):t.texImage2D(i.TEXTURE_2D,Z,xe,oe,ye,se);g.generateMipmaps=!1}else if(P){if(ee){const Z=ct($);t.texStorage2D(i.TEXTURE_2D,de,xe,Z.width,Z.height)}ie&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,ye,$)}else t.texImage2D(i.TEXTURE_2D,0,xe,oe,ye,$);p(g)&&l(Y),Ee.__version=O.version,g.onUpdate&&g.onUpdate(g)}_.__version=g.version}function K(_,g,N){if(g.image.length!==6)return;const Y=Ze(_,g),J=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,_.__webglTexture,i.TEXTURE0+N);const O=n.get(J);if(J.version!==O.__version||Y===!0){t.activeTexture(i.TEXTURE0+N);const Ee=ze.getPrimaries(ze.workingColorSpace),ne=g.colorSpace===un?null:ze.getPrimaries(g.colorSpace),me=g.colorSpace===un||Ee===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const ve=g.isCompressedTexture||g.image[0].isCompressedTexture,$=g.image[0]&&g.image[0].isDataTexture,oe=[];for(let j=0;j<6;j++)!ve&&!$?oe[j]=M(g.image[j],!0,A.maxCubemapSize):oe[j]=$?g.image[j].image:g.image[j],oe[j]=pt(g,oe[j]);const ye=oe[0],xe=r.convert(g.format,g.colorSpace),se=r.convert(g.type),Fe=w(g.internalFormat,xe,se,g.colorSpace),P=g.isVideoTexture!==!0,ee=O.__version===void 0||Y===!0,ie=J.dataReady;let de=y(g,ye);Qe(i.TEXTURE_CUBE_MAP,g);let Z;if(ve){P&&ee&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Fe,ye.width,ye.height);for(let j=0;j<6;j++){Z=oe[j].mipmaps;for(let ue=0;ue<Z.length;ue++){const Ie=Z[ue];g.format!==Ht?xe!==null?P?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue,0,0,Ie.width,Ie.height,xe,Ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue,Fe,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue,0,0,Ie.width,Ie.height,xe,se,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue,Fe,Ie.width,Ie.height,0,xe,se,Ie.data)}}}else{if(Z=g.mipmaps,P&&ee){Z.length>0&&de++;const j=ct(oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Fe,j.width,j.height)}for(let j=0;j<6;j++)if($){P?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,oe[j].width,oe[j].height,xe,se,oe[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Fe,oe[j].width,oe[j].height,0,xe,se,oe[j].data);for(let ue=0;ue<Z.length;ue++){const qe=Z[ue].image[j].image;P?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue+1,0,0,qe.width,qe.height,xe,se,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue+1,Fe,qe.width,qe.height,0,xe,se,qe.data)}}else{P?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,xe,se,oe[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Fe,xe,se,oe[j]);for(let ue=0;ue<Z.length;ue++){const Ie=Z[ue];P?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue+1,0,0,xe,se,Ie.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue+1,Fe,xe,se,Ie.image[j])}}}p(g)&&l(i.TEXTURE_CUBE_MAP),O.__version=J.version,g.onUpdate&&g.onUpdate(g)}_.__version=g.version}function fe(_,g,N,Y,J,O){const Ee=r.convert(N.format,N.colorSpace),ne=r.convert(N.type),me=w(N.internalFormat,Ee,ne,N.colorSpace),ve=n.get(g),$=n.get(N);if($.__renderTarget=g,!ve.__hasExternalTextures){const oe=Math.max(1,g.width>>O),ye=Math.max(1,g.height>>O);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,O,me,oe,ye,g.depth,0,Ee,ne,null):t.texImage2D(J,O,me,oe,ye,0,Ee,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,_),ge(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,J,$.__webglTexture,0,nt(g)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,J,$.__webglTexture,O),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(_,g,N){if(i.bindRenderbuffer(i.RENDERBUFFER,_),g.depthBuffer){const Y=g.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,O=B(g.stencilBuffer,J),Ee=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=nt(g);ge(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,O,g.width,g.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,O,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,O,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,_)}else{const Y=g.textures;for(let J=0;J<Y.length;J++){const O=Y[J],Ee=r.convert(O.format,O.colorSpace),ne=r.convert(O.type),me=w(O.internalFormat,Ee,ne,O.colorSpace),ve=nt(g);N&&ge(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,me,g.width,g.height):ge(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,me,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,me,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Be(_,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,_),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(g.depthTexture);Y.__renderTarget=g,(!Y.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),W(g.depthTexture,0);const J=Y.__webglTexture,O=nt(g);if(g.depthTexture.format===pi)ge(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,O):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(g.depthTexture.format===gi)ge(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,O):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Oe(_){const g=n.get(_),N=_.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==_.depthTexture){const Y=_.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),Y){const J=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),g.__depthDisposeCallback=J}g.__boundDepthTexture=Y}if(_.depthTexture&&!g.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");const Y=_.texture.mipmaps;Y&&Y.length>0?Be(g.__webglFramebuffer[0],_):Be(g.__webglFramebuffer,_)}else if(N){g.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[Y]),g.__webglDepthbuffer[Y]===void 0)g.__webglDepthbuffer[Y]=i.createRenderbuffer(),Pe(g.__webglDepthbuffer[Y],_,!1);else{const J=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,O=g.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,O),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,O)}}else{const Y=_.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Pe(g.__webglDepthbuffer,_,!1);else{const J=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,O=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,O),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,O)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function xt(_,g,N){const Y=n.get(_);g!==void 0&&fe(Y.__webglFramebuffer,_,_.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Oe(_)}function b(_){const g=_.texture,N=n.get(_),Y=n.get(g);_.addEventListener("dispose",T);const J=_.textures,O=_.isWebGLCubeRenderTarget===!0,Ee=J.length>1;if(Ee||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=g.version,s.memory.textures++),O){N.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer[ne]=[];for(let me=0;me<g.mipmaps.length;me++)N.__webglFramebuffer[ne][me]=i.createFramebuffer()}else N.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer=[];for(let ne=0;ne<g.mipmaps.length;ne++)N.__webglFramebuffer[ne]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let ne=0,me=J.length;ne<me;ne++){const ve=n.get(J[ne]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),s.memory.textures++)}if(_.samples>0&&ge(_)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ne=0;ne<J.length;ne++){const me=J[ne];N.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ne]);const ve=r.convert(me.format,me.colorSpace),$=r.convert(me.type),oe=w(me.internalFormat,ve,$,me.colorSpace,_.isXRRenderTarget===!0),ye=nt(_);i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,oe,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,N.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),_.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),Pe(N.__webglDepthRenderbuffer,_,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(O){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Qe(i.TEXTURE_CUBE_MAP,g);for(let ne=0;ne<6;ne++)if(g.mipmaps&&g.mipmaps.length>0)for(let me=0;me<g.mipmaps.length;me++)fe(N.__webglFramebuffer[ne][me],_,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,me);else fe(N.__webglFramebuffer[ne],_,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);p(g)&&l(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let ne=0,me=J.length;ne<me;ne++){const ve=J[ne],$=n.get(ve);let oe=i.TEXTURE_2D;(_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(oe=_.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,$.__webglTexture),Qe(oe,ve),fe(N.__webglFramebuffer,_,ve,i.COLOR_ATTACHMENT0+ne,oe,0),p(ve)&&l(oe)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(ne=_.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,Y.__webglTexture),Qe(ne,g),g.mipmaps&&g.mipmaps.length>0)for(let me=0;me<g.mipmaps.length;me++)fe(N.__webglFramebuffer[me],_,g,i.COLOR_ATTACHMENT0,ne,me);else fe(N.__webglFramebuffer,_,g,i.COLOR_ATTACHMENT0,ne,0);p(g)&&l(ne),t.unbindTexture()}_.depthBuffer&&Oe(_)}function tt(_){const g=_.textures;for(let N=0,Y=g.length;N<Y;N++){const J=g[N];if(p(J)){const O=S(_),Ee=n.get(J).__webglTexture;t.bindTexture(O,Ee),l(O),t.unbindTexture()}}}const De=[],Te=[];function pe(_){if(_.samples>0){if(ge(_)===!1){const g=_.textures,N=_.width,Y=_.height;let J=i.COLOR_BUFFER_BIT;const O=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(_),ne=g.length>1;if(ne)for(let ve=0;ve<g.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const me=_.texture.mipmaps;me&&me.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let ve=0;ve<g.length;ve++){if(_.resolveDepthBuffer&&(_.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),_.stencilBuffer&&_.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[ve]);const $=n.get(g[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$,0)}i.blitFramebuffer(0,0,N,Y,0,0,N,Y,J,i.NEAREST),c===!0&&(De.length=0,Te.length=0,De.push(i.COLOR_ATTACHMENT0+ve),_.depthBuffer&&_.resolveDepthBuffer===!1&&(De.push(O),Te.push(O),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Te)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,De))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let ve=0;ve<g.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[ve]);const $=n.get(g[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,$,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.resolveDepthBuffer===!1&&c){const g=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function nt(_){return Math.min(A.maxSamples,_.samples)}function ge(_){const g=n.get(_);return _.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Ne(_){const g=s.render.frame;d.get(_)!==g&&(d.set(_,g),_.update())}function pt(_,g){const N=_.colorSpace,Y=_.format,J=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||N!==Vn&&N!==un&&(ze.getTransfer(N)===je?(Y!==Ht||J!==Wt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),g}function ct(_){return typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement?(o.width=_.naturalWidth||_.width,o.height=_.naturalHeight||_.height):typeof VideoFrame<"u"&&_ instanceof VideoFrame?(o.width=_.displayWidth,o.height=_.displayHeight):(o.width=_.width,o.height=_.height),o}this.allocateTextureUnit=k,this.resetTextureUnits=L,this.setTexture2D=W,this.setTexture2DArray=V,this.setTexture3D=te,this.setTextureCube=G,this.rebindTextures=xt,this.setupRenderTarget=b,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ge}function _h(i,e){function t(n,A=un){let r;const s=ze.getTransfer(A);if(n===Wt)return i.UNSIGNED_BYTE;if(n===DA)return i.UNSIGNED_SHORT_4_4_4_4;if(n===UA)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ps)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gs)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===hs)return i.BYTE;if(n===us)return i.SHORT;if(n===fi)return i.UNSIGNED_SHORT;if(n===IA)return i.INT;if(n===bn)return i.UNSIGNED_INT;if(n===nn)return i.FLOAT;if(n===hi)return i.HALF_FLOAT;if(n===ms)return i.ALPHA;if(n===vs)return i.RGB;if(n===Ht)return i.RGBA;if(n===pi)return i.DEPTH_COMPONENT;if(n===gi)return i.DEPTH_STENCIL;if(n===xs)return i.RED;if(n===FA)return i.RED_INTEGER;if(n===Es)return i.RG;if(n===LA)return i.RG_INTEGER;if(n===NA)return i.RGBA_INTEGER;if(n===Li||n===Ni||n===Qi||n===Hi)if(s===je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Li)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ni)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qi)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Hi)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Li)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ni)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qi)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Hi)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===QA||n===HA||n===kA||n===GA)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===QA)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===HA)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===kA)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===GA)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===OA||n===zA||n===VA)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===OA||n===zA)return s===je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===VA)return s===je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===YA||n===WA||n===XA||n===jA||n===JA||n===KA||n===ZA||n===qA||n===$A||n===er||n===tr||n===nr||n===ir||n===Ar)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===YA)return s===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===WA)return s===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===XA)return s===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jA)return s===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===JA)return s===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===KA)return s===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ZA)return s===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qA)return s===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$A)return s===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===er)return s===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tr)return s===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nr)return s===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ir)return s===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ar)return s===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rr||n===sr||n===ar)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===rr)return s===je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ar)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===or||n===cr||n===lr||n===dr)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===or)return r.COMPRESSED_RED_RGTC1_EXT;if(n===cr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===lr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ui?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const wh=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sh=`
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

}`;class Ch{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ta(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Bn({vertexShader:wh,fragmentShader:Sh,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Kt(new sA(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bh extends Wn{constructor(e,t){super();const n=this;let A=null,r=1,s=null,a="local-floor",c=1,o=null,d=null,f=null,h=null,u=null,m=null;const M=typeof XRWebGLBinding<"u",p=new Ch,l={},S=t.getContextAttributes();let w=null,B=null;const y=[],C=[],T=new Ge;let I=null;const E=new Dt;E.viewport=new rt;const x=new Dt;x.viewport=new rt;const R=[E,x],L=new bc;let k=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let K=y[X];return K===void 0&&(K=new Nr,y[X]=K),K.getTargetRaySpace()},this.getControllerGrip=function(X){let K=y[X];return K===void 0&&(K=new Nr,y[X]=K),K.getGripSpace()},this.getHand=function(X){let K=y[X];return K===void 0&&(K=new Nr,y[X]=K),K.getHandSpace()};function W(X){const K=C.indexOf(X.inputSource);if(K===-1)return;const fe=y[K];fe!==void 0&&(fe.update(X.inputSource,X.frame,o||s),fe.dispatchEvent({type:X.type,data:X.inputSource}))}function V(){A.removeEventListener("select",W),A.removeEventListener("selectstart",W),A.removeEventListener("selectend",W),A.removeEventListener("squeeze",W),A.removeEventListener("squeezestart",W),A.removeEventListener("squeezeend",W),A.removeEventListener("end",V),A.removeEventListener("inputsourceschange",te);for(let X=0;X<y.length;X++){const K=C[X];K!==null&&(C[X]=null,y[X].disconnect(K))}k=null,z=null,p.reset();for(const X in l)delete l[X];e.setRenderTarget(w),u=null,h=null,f=null,A=null,B=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||s},this.setReferenceSpace=function(X){o=X},this.getBaseLayer=function(){return h!==null?h:u},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(A,t)),f},this.getFrame=function(){return m},this.getSession=function(){return A},this.setSession=async function(X){if(A=X,A!==null){if(w=e.getRenderTarget(),A.addEventListener("select",W),A.addEventListener("selectstart",W),A.addEventListener("selectend",W),A.addEventListener("squeeze",W),A.addEventListener("squeezestart",W),A.addEventListener("squeezeend",W),A.addEventListener("end",V),A.addEventListener("inputsourceschange",te),S.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(T),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Pe=null,Be=null;S.depth&&(Be=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=S.stencil?gi:pi,Pe=S.stencil?ui:bn);const Oe={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Oe),A.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),B=new pn(h.textureWidth,h.textureHeight,{format:Ht,type:Wt,depthTexture:new ea(h.textureWidth,h.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const fe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(A,t,fe),A.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),B=new pn(u.framebufferWidth,u.framebufferHeight,{format:Ht,type:Wt,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(c),o=null,s=await A.requestReferenceSpace(a),We.setContext(A),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(A!==null)return A.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function te(X){for(let K=0;K<X.removed.length;K++){const fe=X.removed[K],Pe=C.indexOf(fe);Pe>=0&&(C[Pe]=null,y[Pe].disconnect(fe))}for(let K=0;K<X.added.length;K++){const fe=X.added[K];let Pe=C.indexOf(fe);if(Pe===-1){for(let Oe=0;Oe<y.length;Oe++)if(Oe>=C.length){C.push(fe),Pe=Oe;break}else if(C[Oe]===null){C[Oe]=fe,Pe=Oe;break}if(Pe===-1)break}const Be=y[Pe];Be&&Be.connect(fe)}}const G=new F,re=new F;function ce(X,K,fe){G.setFromMatrixPosition(K.matrixWorld),re.setFromMatrixPosition(fe.matrixWorld);const Pe=G.distanceTo(re),Be=K.projectionMatrix.elements,Oe=fe.projectionMatrix.elements,xt=Be[14]/(Be[10]-1),b=Be[14]/(Be[10]+1),tt=(Be[9]+1)/Be[5],De=(Be[9]-1)/Be[5],Te=(Be[8]-1)/Be[0],pe=(Oe[8]+1)/Oe[0],nt=xt*Te,ge=xt*pe,Ne=Pe/(-Te+pe),pt=Ne*-Te;if(K.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(pt),X.translateZ(Ne),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Be[10]===-1)X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const ct=xt+Ne,_=b+Ne,g=nt-pt,N=ge+(Pe-pt),Y=tt*b/_*ct,J=De*b/_*ct;X.projectionMatrix.makePerspective(g,N,Y,J,ct,_),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Me(X,K){K===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(K.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(A===null)return;let K=X.near,fe=X.far;p.texture!==null&&(p.depthNear>0&&(K=p.depthNear),p.depthFar>0&&(fe=p.depthFar)),L.near=x.near=E.near=K,L.far=x.far=E.far=fe,(k!==L.near||z!==L.far)&&(A.updateRenderState({depthNear:L.near,depthFar:L.far}),k=L.near,z=L.far),L.layers.mask=X.layers.mask|6,E.layers.mask=L.layers.mask&3,x.layers.mask=L.layers.mask&5;const Pe=X.parent,Be=L.cameras;Me(L,Pe);for(let Oe=0;Oe<Be.length;Oe++)Me(Be[Oe],Pe);Be.length===2?ce(L,E,x):L.projectionMatrix.copy(E.projectionMatrix),Qe(X,L,Pe)};function Qe(X,K,fe){fe===null?X.matrix.copy(K.matrixWorld):(X.matrix.copy(fe.matrixWorld),X.matrix.invert(),X.matrix.multiply(K.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=hr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(h===null&&u===null))return c},this.setFoveation=function(X){c=X,h!==null&&(h.fixedFoveation=X),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=X)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(L)},this.getCameraTexture=function(X){return l[X]};let Ze=null;function et(X,K){if(d=K.getViewerPose(o||s),m=K,d!==null){const fe=d.views;u!==null&&(e.setRenderTargetFramebuffer(B,u.framebuffer),e.setRenderTarget(B));let Pe=!1;fe.length!==L.cameras.length&&(L.cameras.length=0,Pe=!0);for(let b=0;b<fe.length;b++){const tt=fe[b];let De=null;if(u!==null)De=u.getViewport(tt);else{const pe=f.getViewSubImage(h,tt);De=pe.viewport,b===0&&(e.setRenderTargetTextures(B,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(B))}let Te=R[b];Te===void 0&&(Te=new Dt,Te.layers.enable(b),Te.viewport=new rt,R[b]=Te),Te.matrix.fromArray(tt.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(tt.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(De.x,De.y,De.width,De.height),b===0&&(L.matrix.copy(Te.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Pe===!0&&L.cameras.push(Te)}const Be=A.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&A.depthUsage=="gpu-optimized"&&M){f=n.getBinding();const b=f.getDepthInformation(fe[0]);b&&b.isValid&&b.texture&&p.init(b,A.renderState)}if(Be&&Be.includes("camera-access")&&M){e.state.unbindTexture(),f=n.getBinding();for(let b=0;b<fe.length;b++){const tt=fe[b].camera;if(tt){let De=l[tt];De||(De=new ta,l[tt]=De);const Te=f.getCameraImage(tt);De.sourceTexture=Te}}}}for(let fe=0;fe<y.length;fe++){const Pe=C[fe],Be=y[fe];Pe!==null&&Be!==void 0&&Be.update(Pe,K,o||s)}Ze&&Ze(X,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),m=null}const We=new ca;We.setAnimationLoop(et),this.setAnimationLoop=function(X){Ze=X},this.dispose=function(){}}}const Ln=new jt,yh=new at;function Th(i,e){function t(p,l){p.matrixAutoUpdate===!0&&p.updateMatrix(),l.value.copy(p.matrix)}function n(p,l){l.color.getRGB(p.fogColor.value,js(i)),l.isFog?(p.fogNear.value=l.near,p.fogFar.value=l.far):l.isFogExp2&&(p.fogDensity.value=l.density)}function A(p,l,S,w,B){l.isMeshBasicMaterial||l.isMeshLambertMaterial?r(p,l):l.isMeshToonMaterial?(r(p,l),f(p,l)):l.isMeshPhongMaterial?(r(p,l),d(p,l)):l.isMeshStandardMaterial?(r(p,l),h(p,l),l.isMeshPhysicalMaterial&&u(p,l,B)):l.isMeshMatcapMaterial?(r(p,l),m(p,l)):l.isMeshDepthMaterial?r(p,l):l.isMeshDistanceMaterial?(r(p,l),M(p,l)):l.isMeshNormalMaterial?r(p,l):l.isLineBasicMaterial?(s(p,l),l.isLineDashedMaterial&&a(p,l)):l.isPointsMaterial?c(p,l,S,w):l.isSpriteMaterial?o(p,l):l.isShadowMaterial?(p.color.value.copy(l.color),p.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}function r(p,l){p.opacity.value=l.opacity,l.color&&p.diffuse.value.copy(l.color),l.emissive&&p.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(p.map.value=l.map,t(l.map,p.mapTransform)),l.alphaMap&&(p.alphaMap.value=l.alphaMap,t(l.alphaMap,p.alphaMapTransform)),l.bumpMap&&(p.bumpMap.value=l.bumpMap,t(l.bumpMap,p.bumpMapTransform),p.bumpScale.value=l.bumpScale,l.side===Mt&&(p.bumpScale.value*=-1)),l.normalMap&&(p.normalMap.value=l.normalMap,t(l.normalMap,p.normalMapTransform),p.normalScale.value.copy(l.normalScale),l.side===Mt&&p.normalScale.value.negate()),l.displacementMap&&(p.displacementMap.value=l.displacementMap,t(l.displacementMap,p.displacementMapTransform),p.displacementScale.value=l.displacementScale,p.displacementBias.value=l.displacementBias),l.emissiveMap&&(p.emissiveMap.value=l.emissiveMap,t(l.emissiveMap,p.emissiveMapTransform)),l.specularMap&&(p.specularMap.value=l.specularMap,t(l.specularMap,p.specularMapTransform)),l.alphaTest>0&&(p.alphaTest.value=l.alphaTest);const S=e.get(l),w=S.envMap,B=S.envMapRotation;w&&(p.envMap.value=w,Ln.copy(B),Ln.x*=-1,Ln.y*=-1,Ln.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ln.y*=-1,Ln.z*=-1),p.envMapRotation.value.setFromMatrix4(yh.makeRotationFromEuler(Ln)),p.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=l.reflectivity,p.ior.value=l.ior,p.refractionRatio.value=l.refractionRatio),l.lightMap&&(p.lightMap.value=l.lightMap,p.lightMapIntensity.value=l.lightMapIntensity,t(l.lightMap,p.lightMapTransform)),l.aoMap&&(p.aoMap.value=l.aoMap,p.aoMapIntensity.value=l.aoMapIntensity,t(l.aoMap,p.aoMapTransform))}function s(p,l){p.diffuse.value.copy(l.color),p.opacity.value=l.opacity,l.map&&(p.map.value=l.map,t(l.map,p.mapTransform))}function a(p,l){p.dashSize.value=l.dashSize,p.totalSize.value=l.dashSize+l.gapSize,p.scale.value=l.scale}function c(p,l,S,w){p.diffuse.value.copy(l.color),p.opacity.value=l.opacity,p.size.value=l.size*S,p.scale.value=w*.5,l.map&&(p.map.value=l.map,t(l.map,p.uvTransform)),l.alphaMap&&(p.alphaMap.value=l.alphaMap,t(l.alphaMap,p.alphaMapTransform)),l.alphaTest>0&&(p.alphaTest.value=l.alphaTest)}function o(p,l){p.diffuse.value.copy(l.color),p.opacity.value=l.opacity,p.rotation.value=l.rotation,l.map&&(p.map.value=l.map,t(l.map,p.mapTransform)),l.alphaMap&&(p.alphaMap.value=l.alphaMap,t(l.alphaMap,p.alphaMapTransform)),l.alphaTest>0&&(p.alphaTest.value=l.alphaTest)}function d(p,l){p.specular.value.copy(l.specular),p.shininess.value=Math.max(l.shininess,1e-4)}function f(p,l){l.gradientMap&&(p.gradientMap.value=l.gradientMap)}function h(p,l){p.metalness.value=l.metalness,l.metalnessMap&&(p.metalnessMap.value=l.metalnessMap,t(l.metalnessMap,p.metalnessMapTransform)),p.roughness.value=l.roughness,l.roughnessMap&&(p.roughnessMap.value=l.roughnessMap,t(l.roughnessMap,p.roughnessMapTransform)),l.envMap&&(p.envMapIntensity.value=l.envMapIntensity)}function u(p,l,S){p.ior.value=l.ior,l.sheen>0&&(p.sheenColor.value.copy(l.sheenColor).multiplyScalar(l.sheen),p.sheenRoughness.value=l.sheenRoughness,l.sheenColorMap&&(p.sheenColorMap.value=l.sheenColorMap,t(l.sheenColorMap,p.sheenColorMapTransform)),l.sheenRoughnessMap&&(p.sheenRoughnessMap.value=l.sheenRoughnessMap,t(l.sheenRoughnessMap,p.sheenRoughnessMapTransform))),l.clearcoat>0&&(p.clearcoat.value=l.clearcoat,p.clearcoatRoughness.value=l.clearcoatRoughness,l.clearcoatMap&&(p.clearcoatMap.value=l.clearcoatMap,t(l.clearcoatMap,p.clearcoatMapTransform)),l.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=l.clearcoatRoughnessMap,t(l.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),l.clearcoatNormalMap&&(p.clearcoatNormalMap.value=l.clearcoatNormalMap,t(l.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),l.side===Mt&&p.clearcoatNormalScale.value.negate())),l.dispersion>0&&(p.dispersion.value=l.dispersion),l.iridescence>0&&(p.iridescence.value=l.iridescence,p.iridescenceIOR.value=l.iridescenceIOR,p.iridescenceThicknessMinimum.value=l.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=l.iridescenceThicknessRange[1],l.iridescenceMap&&(p.iridescenceMap.value=l.iridescenceMap,t(l.iridescenceMap,p.iridescenceMapTransform)),l.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=l.iridescenceThicknessMap,t(l.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),l.transmission>0&&(p.transmission.value=l.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),l.transmissionMap&&(p.transmissionMap.value=l.transmissionMap,t(l.transmissionMap,p.transmissionMapTransform)),p.thickness.value=l.thickness,l.thicknessMap&&(p.thicknessMap.value=l.thicknessMap,t(l.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=l.attenuationDistance,p.attenuationColor.value.copy(l.attenuationColor)),l.anisotropy>0&&(p.anisotropyVector.value.set(l.anisotropy*Math.cos(l.anisotropyRotation),l.anisotropy*Math.sin(l.anisotropyRotation)),l.anisotropyMap&&(p.anisotropyMap.value=l.anisotropyMap,t(l.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=l.specularIntensity,p.specularColor.value.copy(l.specularColor),l.specularColorMap&&(p.specularColorMap.value=l.specularColorMap,t(l.specularColorMap,p.specularColorMapTransform)),l.specularIntensityMap&&(p.specularIntensityMap.value=l.specularIntensityMap,t(l.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,l){l.matcap&&(p.matcap.value=l.matcap)}function M(p,l){const S=e.get(l).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:A}}function Rh(i,e,t,n){let A={},r={},s=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,w){const B=w.program;n.uniformBlockBinding(S,B)}function o(S,w){let B=A[S.id];B===void 0&&(m(S),B=d(S),A[S.id]=B,S.addEventListener("dispose",p));const y=w.program;n.updateUBOMapping(S,y);const C=e.render.frame;r[S.id]!==C&&(h(S),r[S.id]=C)}function d(S){const w=f();S.__bindingPointIndex=w;const B=i.createBuffer(),y=S.__size,C=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,B),i.bufferData(i.UNIFORM_BUFFER,y,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,B),B}function f(){for(let S=0;S<a;S++)if(s.indexOf(S)===-1)return s.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const w=A[S.id],B=S.uniforms,y=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let C=0,T=B.length;C<T;C++){const I=Array.isArray(B[C])?B[C]:[B[C]];for(let E=0,x=I.length;E<x;E++){const R=I[E];if(u(R,C,E,y)===!0){const L=R.__offset,k=Array.isArray(R.value)?R.value:[R.value];let z=0;for(let W=0;W<k.length;W++){const V=k[W],te=M(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,L+z,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,z),z+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(S,w,B,y){const C=S.value,T=w+"_"+B;if(y[T]===void 0)return typeof C=="number"||typeof C=="boolean"?y[T]=C:y[T]=C.clone(),!0;{const I=y[T];if(typeof C=="number"||typeof C=="boolean"){if(I!==C)return y[T]=C,!0}else if(I.equals(C)===!1)return I.copy(C),!0}return!1}function m(S){const w=S.uniforms;let B=0;const y=16;for(let T=0,I=w.length;T<I;T++){const E=Array.isArray(w[T])?w[T]:[w[T]];for(let x=0,R=E.length;x<R;x++){const L=E[x],k=Array.isArray(L.value)?L.value:[L.value];for(let z=0,W=k.length;z<W;z++){const V=k[z],te=M(V),G=B%y,re=G%te.boundary,ce=G+re;B+=re,ce!==0&&y-ce<te.storage&&(B+=y-ce),L.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=B,B+=te.storage}}}const C=B%y;return C>0&&(B+=y-C),S.__size=B,S.__cache={},this}function M(S){const w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),w}function p(S){const w=S.target;w.removeEventListener("dispose",p);const B=s.indexOf(w.__bindingPointIndex);s.splice(B,1),i.deleteBuffer(A[w.id]),delete A[w.id],delete r[w.id]}function l(){for(const S in A)i.deleteBuffer(A[S]);s=[],A={},r={}}return{bind:c,update:o,dispose:l}}class Ph{constructor(e={}){const{canvas:t=Wo(),context:n=null,depth:A=!0,stencil:r=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:o=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=s;const m=new Uint32Array(4),M=new Int32Array(4);let p=null,l=null;const S=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let y=!1;this._outputColorSpace=bt;let C=0,T=0,I=null,E=-1,x=null;const R=new rt,L=new rt;let k=null;const z=new Ve(0);let W=0,V=t.width,te=t.height,G=1,re=null,ce=null;const Me=new rt(0,0,V,te),Qe=new rt(0,0,V,te);let Ze=!1;const et=new Hr;let We=!1,X=!1;const K=new at,fe=new F,Pe=new rt,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function xt(){return I===null?G:1}let b=n;function tt(v,D){return t.getContext(v,D)}try{const v={alpha:!0,depth:A,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:o,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mA}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",Z,!1),b===null){const D="webgl2";if(b=tt(D,v),b===null)throw tt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let De,Te,pe,nt,ge,Ne,pt,ct,_,g,N,Y,J,O,Ee,ne,me,ve,$,oe,ye,xe,se,Fe;function P(){De=new kd(b),De.init(),xe=new _h(b,De),Te=new Dd(b,De,e,xe),pe=new Bh(b,De),Te.reversedDepthBuffer&&h&&pe.buffers.depth.setReversed(!0),nt=new zd(b),ge=new oh,Ne=new Mh(b,De,pe,ge,Te,xe,nt),pt=new Fd(B),ct=new Hd(B),_=new Tc(b),se=new Pd(b,_),g=new Gd(b,_,nt,se),N=new Yd(b,g,_,nt),$=new Vd(b,Te,Ne),ne=new Ud(ge),Y=new ah(B,pt,ct,De,Te,se,ne),J=new Th(B,ge),O=new lh,Ee=new gh(De),ve=new Rd(B,pt,ct,pe,N,u,c),me=new xh(B,N,Te),Fe=new Rh(b,nt,Te,pe),oe=new Id(b,De,nt),ye=new Od(b,De,nt),nt.programs=Y.programs,B.capabilities=Te,B.extensions=De,B.properties=ge,B.renderLists=O,B.shadowMap=me,B.state=pe,B.info=nt}P();const ee=new bh(B,b);this.xr=ee,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const v=De.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=De.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(v){v!==void 0&&(G=v,this.setSize(V,te,!1))},this.getSize=function(v){return v.set(V,te)},this.setSize=function(v,D,Q=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=v,te=D,t.width=Math.floor(v*G),t.height=Math.floor(D*G),Q===!0&&(t.style.width=v+"px",t.style.height=D+"px"),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(V*G,te*G).floor()},this.setDrawingBufferSize=function(v,D,Q){V=v,te=D,G=Q,t.width=Math.floor(v*Q),t.height=Math.floor(D*Q),this.setViewport(0,0,v,D)},this.getCurrentViewport=function(v){return v.copy(R)},this.getViewport=function(v){return v.copy(Me)},this.setViewport=function(v,D,Q,H){v.isVector4?Me.set(v.x,v.y,v.z,v.w):Me.set(v,D,Q,H),pe.viewport(R.copy(Me).multiplyScalar(G).round())},this.getScissor=function(v){return v.copy(Qe)},this.setScissor=function(v,D,Q,H){v.isVector4?Qe.set(v.x,v.y,v.z,v.w):Qe.set(v,D,Q,H),pe.scissor(L.copy(Qe).multiplyScalar(G).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(v){pe.setScissorTest(Ze=v)},this.setOpaqueSort=function(v){re=v},this.setTransparentSort=function(v){ce=v},this.getClearColor=function(v){return v.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(v=!0,D=!0,Q=!0){let H=0;if(v){let U=!1;if(I!==null){const q=I.texture.format;U=q===NA||q===LA||q===FA}if(U){const q=I.texture.type,ae=q===Wt||q===bn||q===fi||q===ui||q===DA||q===UA,he=ve.getClearColor(),le=ve.getClearAlpha(),be=he.r,Re=he.g,_e=he.b;ae?(m[0]=be,m[1]=Re,m[2]=_e,m[3]=le,b.clearBufferuiv(b.COLOR,0,m)):(M[0]=be,M[1]=Re,M[2]=_e,M[3]=le,b.clearBufferiv(b.COLOR,0,M))}else H|=b.COLOR_BUFFER_BIT}D&&(H|=b.DEPTH_BUFFER_BIT),Q&&(H|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),ve.dispose(),O.dispose(),Ee.dispose(),ge.dispose(),pt.dispose(),ct.dispose(),N.dispose(),se.dispose(),Fe.dispose(),Y.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",$t),ee.removeEventListener("sessionend",Ka),Qn.stop()};function ie(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const v=nt.autoReset,D=me.enabled,Q=me.autoUpdate,H=me.needsUpdate,U=me.type;P(),nt.autoReset=v,me.enabled=D,me.autoUpdate=Q,me.needsUpdate=H,me.type=U}function Z(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function j(v){const D=v.target;D.removeEventListener("dispose",j),ue(D)}function ue(v){Ie(v),ge.remove(v)}function Ie(v){const D=ge.get(v).programs;D!==void 0&&(D.forEach(function(Q){Y.releaseProgram(Q)}),v.isShaderMaterial&&Y.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,Q,H,U,q){D===null&&(D=Be);const ae=U.isMesh&&U.matrixWorld.determinant()<0,he=Qh(v,D,Q,H,U);pe.setMaterial(H,ae);let le=Q.index,be=1;if(H.wireframe===!0){if(le=g.getWireframeAttribute(Q),le===void 0)return;be=2}const Re=Q.drawRange,_e=Q.attributes.position;let He=Re.start*be,Je=(Re.start+Re.count)*be;q!==null&&(He=Math.max(He,q.start*be),Je=Math.min(Je,(q.start+q.count)*be)),le!==null?(He=Math.max(He,0),Je=Math.min(Je,le.count)):_e!=null&&(He=Math.max(He,0),Je=Math.min(Je,_e.count));const st=Je-He;if(st<0||st===1/0)return;se.setup(U,H,he,Q,le);let $e,Ke=oe;if(le!==null&&($e=_.get(le),Ke=ye,Ke.setIndex($e)),U.isMesh)H.wireframe===!0?(pe.setLineWidth(H.wireframeLinewidth*xt()),Ke.setMode(b.LINES)):Ke.setMode(b.TRIANGLES);else if(U.isLine){let Ce=H.linewidth;Ce===void 0&&(Ce=1),pe.setLineWidth(Ce*xt()),U.isLineSegments?Ke.setMode(b.LINES):U.isLineLoop?Ke.setMode(b.LINE_LOOP):Ke.setMode(b.LINE_STRIP)}else U.isPoints?Ke.setMode(b.POINTS):U.isSprite&&Ke.setMode(b.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ei("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ke.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(De.get("WEBGL_multi_draw"))Ke.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ce=U._multiDrawStarts,it=U._multiDrawCounts,Ye=U._multiDrawCount,Rt=le?_.get(le).bytesPerElement:1,di=ge.get(H).currentProgram.getUniforms();for(let Pt=0;Pt<Ye;Pt++)di.setValue(b,"_gl_DrawID",Pt),Ke.render(Ce[Pt]/Rt,it[Pt])}else if(U.isInstancedMesh)Ke.renderInstances(He,st,U.count);else if(Q.isInstancedBufferGeometry){const Ce=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,it=Math.min(Q.instanceCount,Ce);Ke.renderInstances(He,st,it)}else Ke.render(He,st)};function qe(v,D,Q){v.transparent===!0&&v.side===tn&&v.forceSinglePass===!1?(v.side=Mt,v.needsUpdate=!0,gA(v,D,Q),v.side=dn,v.needsUpdate=!0,gA(v,D,Q),v.side=tn):gA(v,D,Q)}this.compile=function(v,D,Q=null){Q===null&&(Q=v),l=Ee.get(Q),l.init(D),w.push(l),Q.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(l.pushLight(U),U.castShadow&&l.pushShadow(U))}),v!==Q&&v.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(l.pushLight(U),U.castShadow&&l.pushShadow(U))}),l.setupLights();const H=new Set;return v.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const q=U.material;if(q)if(Array.isArray(q))for(let ae=0;ae<q.length;ae++){const he=q[ae];qe(he,Q,U),H.add(he)}else qe(q,Q,U),H.add(q)}),l=w.pop(),H},this.compileAsync=function(v,D,Q=null){const H=this.compile(v,D,Q);return new Promise(U=>{function q(){if(H.forEach(function(ae){ge.get(ae).currentProgram.isReady()&&H.delete(ae)}),H.size===0){U(v);return}setTimeout(q,10)}De.get("KHR_parallel_shader_compile")!==null?q():setTimeout(q,10)})};let Xe=null;function ln(v){Xe&&Xe(v)}function $t(){Qn.stop()}function Ka(){Qn.start()}const Qn=new ca;Qn.setAnimationLoop(ln),typeof self<"u"&&Qn.setContext(self),this.setAnimationLoop=function(v){Xe=v,ee.setAnimationLoop(v),v===null?Qn.stop():Qn.start()},ee.addEventListener("sessionstart",$t),ee.addEventListener("sessionend",Ka),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(D),D=ee.getCamera()),v.isScene===!0&&v.onBeforeRender(B,v,D,I),l=Ee.get(v,w.length),l.init(D),w.push(l),K.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),et.setFromProjectionMatrix(K,Xt,D.reversedDepth),X=this.localClippingEnabled,We=ne.init(this.clippingPlanes,X),p=O.get(v,S.length),p.init(),S.push(p),ee.enabled===!0&&ee.isPresenting===!0){const q=B.xr.getDepthSensingMesh();q!==null&&ns(q,D,-1/0,B.sortObjects)}ns(v,D,0,B.sortObjects),p.finish(),B.sortObjects===!0&&p.sort(re,ce),Oe=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,Oe&&ve.addToRenderList(p,v),this.info.render.frame++,We===!0&&ne.beginShadows();const Q=l.state.shadowsArray;me.render(Q,v,D),We===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=p.opaque,U=p.transmissive;if(l.setupLights(),D.isArrayCamera){const q=D.cameras;if(U.length>0)for(let ae=0,he=q.length;ae<he;ae++){const le=q[ae];qa(H,U,v,le)}Oe&&ve.render(v);for(let ae=0,he=q.length;ae<he;ae++){const le=q[ae];Za(p,v,le,le.viewport)}}else U.length>0&&qa(H,U,v,D),Oe&&ve.render(v),Za(p,v,D);I!==null&&T===0&&(Ne.updateMultisampleRenderTarget(I),Ne.updateRenderTargetMipmap(I)),v.isScene===!0&&v.onAfterRender(B,v,D),se.resetDefaultState(),E=-1,x=null,w.pop(),w.length>0?(l=w[w.length-1],We===!0&&ne.setGlobalState(B.clippingPlanes,l.state.camera)):l=null,S.pop(),S.length>0?p=S[S.length-1]:p=null};function ns(v,D,Q,H){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)Q=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLight)l.pushLight(v),v.castShadow&&l.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||et.intersectsSprite(v)){H&&Pe.setFromMatrixPosition(v.matrixWorld).applyMatrix4(K);const ae=N.update(v),he=v.material;he.visible&&p.push(v,ae,he,Q,Pe.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||et.intersectsObject(v))){const ae=N.update(v),he=v.material;if(H&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Pe.copy(v.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),Pe.copy(ae.boundingSphere.center)),Pe.applyMatrix4(v.matrixWorld).applyMatrix4(K)),Array.isArray(he)){const le=ae.groups;for(let be=0,Re=le.length;be<Re;be++){const _e=le[be],He=he[_e.materialIndex];He&&He.visible&&p.push(v,ae,He,Q,Pe.z,_e)}}else he.visible&&p.push(v,ae,he,Q,Pe.z,null)}}const q=v.children;for(let ae=0,he=q.length;ae<he;ae++)ns(q[ae],D,Q,H)}function Za(v,D,Q,H){const U=v.opaque,q=v.transmissive,ae=v.transparent;l.setupLightsView(Q),We===!0&&ne.setGlobalState(B.clippingPlanes,Q),H&&pe.viewport(R.copy(H)),U.length>0&&pA(U,D,Q),q.length>0&&pA(q,D,Q),ae.length>0&&pA(ae,D,Q),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function qa(v,D,Q,H){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;l.state.transmissionRenderTarget[H.id]===void 0&&(l.state.transmissionRenderTarget[H.id]=new pn(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float")?hi:Wt,minFilter:Cn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ze.workingColorSpace}));const q=l.state.transmissionRenderTarget[H.id],ae=H.viewport||R;q.setSize(ae.z*B.transmissionResolutionScale,ae.w*B.transmissionResolutionScale);const he=B.getRenderTarget(),le=B.getActiveCubeFace(),be=B.getActiveMipmapLevel();B.setRenderTarget(q),B.getClearColor(z),W=B.getClearAlpha(),W<1&&B.setClearColor(16777215,.5),B.clear(),Oe&&ve.render(Q);const Re=B.toneMapping;B.toneMapping=hn;const _e=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),l.setupLightsView(H),We===!0&&ne.setGlobalState(B.clippingPlanes,H),pA(v,Q,H),Ne.updateMultisampleRenderTarget(q),Ne.updateRenderTargetMipmap(q),De.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Je=0,st=D.length;Je<st;Je++){const $e=D[Je],Ke=$e.object,Ce=$e.geometry,it=$e.material,Ye=$e.group;if(it.side===tn&&Ke.layers.test(H.layers)){const Rt=it.side;it.side=Mt,it.needsUpdate=!0,$a(Ke,Q,H,Ce,it,Ye),it.side=Rt,it.needsUpdate=!0,He=!0}}He===!0&&(Ne.updateMultisampleRenderTarget(q),Ne.updateRenderTargetMipmap(q))}B.setRenderTarget(he,le,be),B.setClearColor(z,W),_e!==void 0&&(H.viewport=_e),B.toneMapping=Re}function pA(v,D,Q){const H=D.isScene===!0?D.overrideMaterial:null;for(let U=0,q=v.length;U<q;U++){const ae=v[U],he=ae.object,le=ae.geometry,be=ae.group;let Re=ae.material;Re.allowOverride===!0&&H!==null&&(Re=H),he.layers.test(Q.layers)&&$a(he,D,Q,le,Re,be)}}function $a(v,D,Q,H,U,q){v.onBeforeRender(B,D,Q,H,U,q),v.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),U.onBeforeRender(B,D,Q,H,v,q),U.transparent===!0&&U.side===tn&&U.forceSinglePass===!1?(U.side=Mt,U.needsUpdate=!0,B.renderBufferDirect(Q,D,H,U,v,q),U.side=dn,U.needsUpdate=!0,B.renderBufferDirect(Q,D,H,U,v,q),U.side=tn):B.renderBufferDirect(Q,D,H,U,v,q),v.onAfterRender(B,D,Q,H,U,q)}function gA(v,D,Q){D.isScene!==!0&&(D=Be);const H=ge.get(v),U=l.state.lights,q=l.state.shadowsArray,ae=U.state.version,he=Y.getParameters(v,U.state,q,D,Q),le=Y.getProgramCacheKey(he);let be=H.programs;H.environment=v.isMeshStandardMaterial?D.environment:null,H.fog=D.fog,H.envMap=(v.isMeshStandardMaterial?ct:pt).get(v.envMap||H.environment),H.envMapRotation=H.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,be===void 0&&(v.addEventListener("dispose",j),be=new Map,H.programs=be);let Re=be.get(le);if(Re!==void 0){if(H.currentProgram===Re&&H.lightsStateVersion===ae)return to(v,he),Re}else he.uniforms=Y.getUniforms(v),v.onBeforeCompile(he,B),Re=Y.acquireProgram(he,le),be.set(le,Re),H.uniforms=he.uniforms;const _e=H.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(_e.clippingPlanes=ne.uniform),to(v,he),H.needsLights=kh(v),H.lightsStateVersion=ae,H.needsLights&&(_e.ambientLightColor.value=U.state.ambient,_e.lightProbe.value=U.state.probe,_e.directionalLights.value=U.state.directional,_e.directionalLightShadows.value=U.state.directionalShadow,_e.spotLights.value=U.state.spot,_e.spotLightShadows.value=U.state.spotShadow,_e.rectAreaLights.value=U.state.rectArea,_e.ltc_1.value=U.state.rectAreaLTC1,_e.ltc_2.value=U.state.rectAreaLTC2,_e.pointLights.value=U.state.point,_e.pointLightShadows.value=U.state.pointShadow,_e.hemisphereLights.value=U.state.hemi,_e.directionalShadowMap.value=U.state.directionalShadowMap,_e.directionalShadowMatrix.value=U.state.directionalShadowMatrix,_e.spotShadowMap.value=U.state.spotShadowMap,_e.spotLightMatrix.value=U.state.spotLightMatrix,_e.spotLightMap.value=U.state.spotLightMap,_e.pointShadowMap.value=U.state.pointShadowMap,_e.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=Re,H.uniformsList=null,Re}function eo(v){if(v.uniformsList===null){const D=v.currentProgram.getUniforms();v.uniformsList=lA.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function to(v,D){const Q=ge.get(v);Q.outputColorSpace=D.outputColorSpace,Q.batching=D.batching,Q.batchingColor=D.batchingColor,Q.instancing=D.instancing,Q.instancingColor=D.instancingColor,Q.instancingMorph=D.instancingMorph,Q.skinning=D.skinning,Q.morphTargets=D.morphTargets,Q.morphNormals=D.morphNormals,Q.morphColors=D.morphColors,Q.morphTargetsCount=D.morphTargetsCount,Q.numClippingPlanes=D.numClippingPlanes,Q.numIntersection=D.numClipIntersection,Q.vertexAlphas=D.vertexAlphas,Q.vertexTangents=D.vertexTangents,Q.toneMapping=D.toneMapping}function Qh(v,D,Q,H,U){D.isScene!==!0&&(D=Be),Ne.resetTextureUnits();const q=D.fog,ae=H.isMeshStandardMaterial?D.environment:null,he=I===null?B.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Vn,le=(H.isMeshStandardMaterial?ct:pt).get(H.envMap||ae),be=H.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Re=!!Q.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),_e=!!Q.morphAttributes.position,He=!!Q.morphAttributes.normal,Je=!!Q.morphAttributes.color;let st=hn;H.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(st=B.toneMapping);const $e=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ke=$e!==void 0?$e.length:0,Ce=ge.get(H),it=l.state.lights;if(We===!0&&(X===!0||v!==x)){const Bt=v===x&&H.id===E;ne.setState(H,v,Bt)}let Ye=!1;H.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==it.state.version||Ce.outputColorSpace!==he||U.isBatchedMesh&&Ce.batching===!1||!U.isBatchedMesh&&Ce.batching===!0||U.isBatchedMesh&&Ce.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ce.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ce.instancing===!1||!U.isInstancedMesh&&Ce.instancing===!0||U.isSkinnedMesh&&Ce.skinning===!1||!U.isSkinnedMesh&&Ce.skinning===!0||U.isInstancedMesh&&Ce.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ce.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ce.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ce.instancingMorph===!1&&U.morphTexture!==null||Ce.envMap!==le||H.fog===!0&&Ce.fog!==q||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ne.numPlanes||Ce.numIntersection!==ne.numIntersection)||Ce.vertexAlphas!==be||Ce.vertexTangents!==Re||Ce.morphTargets!==_e||Ce.morphNormals!==He||Ce.morphColors!==Je||Ce.toneMapping!==st||Ce.morphTargetsCount!==Ke)&&(Ye=!0):(Ye=!0,Ce.__version=H.version);let Rt=Ce.currentProgram;Ye===!0&&(Rt=gA(H,D,U));let di=!1,Pt=!1,Ii=!1;const At=Rt.getUniforms(),Lt=Ce.uniforms;if(pe.useProgram(Rt.program)&&(di=!0,Pt=!0,Ii=!0),H.id!==E&&(E=H.id,Pt=!0),di||x!==v){pe.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),At.setValue(b,"projectionMatrix",v.projectionMatrix),At.setValue(b,"viewMatrix",v.matrixWorldInverse);const Ct=At.map.cameraPosition;Ct!==void 0&&Ct.setValue(b,fe.setFromMatrixPosition(v.matrixWorld)),Te.logarithmicDepthBuffer&&At.setValue(b,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&At.setValue(b,"isOrthographic",v.isOrthographicCamera===!0),x!==v&&(x=v,Pt=!0,Ii=!0)}if(U.isSkinnedMesh){At.setOptional(b,U,"bindMatrix"),At.setOptional(b,U,"bindMatrixInverse");const Bt=U.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),At.setValue(b,"boneTexture",Bt.boneTexture,Ne))}U.isBatchedMesh&&(At.setOptional(b,U,"batchingTexture"),At.setValue(b,"batchingTexture",U._matricesTexture,Ne),At.setOptional(b,U,"batchingIdTexture"),At.setValue(b,"batchingIdTexture",U._indirectTexture,Ne),At.setOptional(b,U,"batchingColorTexture"),U._colorsTexture!==null&&At.setValue(b,"batchingColorTexture",U._colorsTexture,Ne));const Nt=Q.morphAttributes;if((Nt.position!==void 0||Nt.normal!==void 0||Nt.color!==void 0)&&$.update(U,Q,Rt),(Pt||Ce.receiveShadow!==U.receiveShadow)&&(Ce.receiveShadow=U.receiveShadow,At.setValue(b,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Lt.envMap.value=le,Lt.flipEnvMap.value=le.isCubeTexture&&le.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&D.environment!==null&&(Lt.envMapIntensity.value=D.environmentIntensity),Pt&&(At.setValue(b,"toneMappingExposure",B.toneMappingExposure),Ce.needsLights&&Hh(Lt,Ii),q&&H.fog===!0&&J.refreshFogUniforms(Lt,q),J.refreshMaterialUniforms(Lt,H,G,te,l.state.transmissionRenderTarget[v.id]),lA.upload(b,eo(Ce),Lt,Ne)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(lA.upload(b,eo(Ce),Lt,Ne),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&At.setValue(b,"center",U.center),At.setValue(b,"modelViewMatrix",U.modelViewMatrix),At.setValue(b,"normalMatrix",U.normalMatrix),At.setValue(b,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Bt=H.uniformsGroups;for(let Ct=0,is=Bt.length;Ct<is;Ct++){const Hn=Bt[Ct];Fe.update(Hn,Rt),Fe.bind(Hn,Rt)}}return Rt}function Hh(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function kh(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(v,D,Q){const H=ge.get(v);H.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),ge.get(v.texture).__webglTexture=D,ge.get(v.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:Q,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,D){const Q=ge.get(v);Q.__webglFramebuffer=D,Q.__useDefaultFramebuffer=D===void 0};const Gh=b.createFramebuffer();this.setRenderTarget=function(v,D=0,Q=0){I=v,C=D,T=Q;let H=!0,U=null,q=!1,ae=!1;if(v){const le=ge.get(v);if(le.__useDefaultFramebuffer!==void 0)pe.bindFramebuffer(b.FRAMEBUFFER,null),H=!1;else if(le.__webglFramebuffer===void 0)Ne.setupRenderTarget(v);else if(le.__hasExternalTextures)Ne.rebindTextures(v,ge.get(v.texture).__webglTexture,ge.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const _e=v.depthTexture;if(le.__boundDepthTexture!==_e){if(_e!==null&&ge.has(_e)&&(v.width!==_e.image.width||v.height!==_e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ne.setupDepthRenderbuffer(v)}}const be=v.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(ae=!0);const Re=ge.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Re[D])?U=Re[D][Q]:U=Re[D],q=!0):v.samples>0&&Ne.useMultisampledRTT(v)===!1?U=ge.get(v).__webglMultisampledFramebuffer:Array.isArray(Re)?U=Re[Q]:U=Re,R.copy(v.viewport),L.copy(v.scissor),k=v.scissorTest}else R.copy(Me).multiplyScalar(G).floor(),L.copy(Qe).multiplyScalar(G).floor(),k=Ze;if(Q!==0&&(U=Gh),pe.bindFramebuffer(b.FRAMEBUFFER,U)&&H&&pe.drawBuffers(v,U),pe.viewport(R),pe.scissor(L),pe.setScissorTest(k),q){const le=ge.get(v.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+D,le.__webglTexture,Q)}else if(ae){const le=D;for(let be=0;be<v.textures.length;be++){const Re=ge.get(v.textures[be]);b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0+be,Re.__webglTexture,Q,le)}}else if(v!==null&&Q!==0){const le=ge.get(v.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,le.__webglTexture,Q)}E=-1},this.readRenderTargetPixels=function(v,D,Q,H,U,q,ae,he=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let le=ge.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ae!==void 0&&(le=le[ae]),le){pe.bindFramebuffer(b.FRAMEBUFFER,le);try{const be=v.textures[he],Re=be.format,_e=be.type;if(!Te.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Te.textureTypeReadable(_e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-H&&Q>=0&&Q<=v.height-U&&(v.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+he),b.readPixels(D,Q,H,U,xe.convert(Re),xe.convert(_e),q))}finally{const be=I!==null?ge.get(I).__webglFramebuffer:null;pe.bindFramebuffer(b.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(v,D,Q,H,U,q,ae,he=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let le=ge.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ae!==void 0&&(le=le[ae]),le)if(D>=0&&D<=v.width-H&&Q>=0&&Q<=v.height-U){pe.bindFramebuffer(b.FRAMEBUFFER,le);const be=v.textures[he],Re=be.format,_e=be.type;if(!Te.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Te.textureTypeReadable(_e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const He=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,He),b.bufferData(b.PIXEL_PACK_BUFFER,q.byteLength,b.STREAM_READ),v.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+he),b.readPixels(D,Q,H,U,xe.convert(Re),xe.convert(_e),0);const Je=I!==null?ge.get(I).__webglFramebuffer:null;pe.bindFramebuffer(b.FRAMEBUFFER,Je);const st=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await Xo(b,st,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,He),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,q),b.deleteBuffer(He),b.deleteSync(st),q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,D=null,Q=0){const H=Math.pow(2,-Q),U=Math.floor(v.image.width*H),q=Math.floor(v.image.height*H),ae=D!==null?D.x:0,he=D!==null?D.y:0;Ne.setTexture2D(v,0),b.copyTexSubImage2D(b.TEXTURE_2D,Q,0,0,ae,he,U,q),pe.unbindTexture()};const Oh=b.createFramebuffer(),zh=b.createFramebuffer();this.copyTextureToTexture=function(v,D,Q=null,H=null,U=0,q=null){q===null&&(U!==0?(Ei("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),q=U,U=0):q=0);let ae,he,le,be,Re,_e,He,Je,st;const $e=v.isCompressedTexture?v.mipmaps[q]:v.image;if(Q!==null)ae=Q.max.x-Q.min.x,he=Q.max.y-Q.min.y,le=Q.isBox3?Q.max.z-Q.min.z:1,be=Q.min.x,Re=Q.min.y,_e=Q.isBox3?Q.min.z:0;else{const Nt=Math.pow(2,-U);ae=Math.floor($e.width*Nt),he=Math.floor($e.height*Nt),v.isDataArrayTexture?le=$e.depth:v.isData3DTexture?le=Math.floor($e.depth*Nt):le=1,be=0,Re=0,_e=0}H!==null?(He=H.x,Je=H.y,st=H.z):(He=0,Je=0,st=0);const Ke=xe.convert(D.format),Ce=xe.convert(D.type);let it;D.isData3DTexture?(Ne.setTexture3D(D,0),it=b.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Ne.setTexture2DArray(D,0),it=b.TEXTURE_2D_ARRAY):(Ne.setTexture2D(D,0),it=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,D.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,D.unpackAlignment);const Ye=b.getParameter(b.UNPACK_ROW_LENGTH),Rt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),di=b.getParameter(b.UNPACK_SKIP_PIXELS),Pt=b.getParameter(b.UNPACK_SKIP_ROWS),Ii=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,$e.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,$e.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,be),b.pixelStorei(b.UNPACK_SKIP_ROWS,Re),b.pixelStorei(b.UNPACK_SKIP_IMAGES,_e);const At=v.isDataArrayTexture||v.isData3DTexture,Lt=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){const Nt=ge.get(v),Bt=ge.get(D),Ct=ge.get(Nt.__renderTarget),is=ge.get(Bt.__renderTarget);pe.bindFramebuffer(b.READ_FRAMEBUFFER,Ct.__webglFramebuffer),pe.bindFramebuffer(b.DRAW_FRAMEBUFFER,is.__webglFramebuffer);for(let Hn=0;Hn<le;Hn++)At&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,ge.get(v).__webglTexture,U,_e+Hn),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,ge.get(D).__webglTexture,q,st+Hn)),b.blitFramebuffer(be,Re,ae,he,He,Je,ae,he,b.DEPTH_BUFFER_BIT,b.NEAREST);pe.bindFramebuffer(b.READ_FRAMEBUFFER,null),pe.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(U!==0||v.isRenderTargetTexture||ge.has(v)){const Nt=ge.get(v),Bt=ge.get(D);pe.bindFramebuffer(b.READ_FRAMEBUFFER,Oh),pe.bindFramebuffer(b.DRAW_FRAMEBUFFER,zh);for(let Ct=0;Ct<le;Ct++)At?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Nt.__webglTexture,U,_e+Ct):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Nt.__webglTexture,U),Lt?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Bt.__webglTexture,q,st+Ct):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Bt.__webglTexture,q),U!==0?b.blitFramebuffer(be,Re,ae,he,He,Je,ae,he,b.COLOR_BUFFER_BIT,b.NEAREST):Lt?b.copyTexSubImage3D(it,q,He,Je,st+Ct,be,Re,ae,he):b.copyTexSubImage2D(it,q,He,Je,be,Re,ae,he);pe.bindFramebuffer(b.READ_FRAMEBUFFER,null),pe.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else Lt?v.isDataTexture||v.isData3DTexture?b.texSubImage3D(it,q,He,Je,st,ae,he,le,Ke,Ce,$e.data):D.isCompressedArrayTexture?b.compressedTexSubImage3D(it,q,He,Je,st,ae,he,le,Ke,$e.data):b.texSubImage3D(it,q,He,Je,st,ae,he,le,Ke,Ce,$e):v.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,q,He,Je,ae,he,Ke,Ce,$e.data):v.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,q,He,Je,$e.width,$e.height,Ke,$e.data):b.texSubImage2D(b.TEXTURE_2D,q,He,Je,ae,he,Ke,Ce,$e);b.pixelStorei(b.UNPACK_ROW_LENGTH,Ye),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Rt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,di),b.pixelStorei(b.UNPACK_SKIP_ROWS,Pt),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ii),q===0&&D.generateMipmaps&&b.generateMipmap(it),pe.unbindTexture()},this.initRenderTarget=function(v){ge.get(v).__webglFramebuffer===void 0&&Ne.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Ne.setTextureCube(v,0):v.isData3DTexture?Ne.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Ne.setTexture2DArray(v,0):Ne.setTexture2D(v,0),pe.unbindTexture()},this.resetState=function(){C=0,T=0,I=null,pe.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=ze._getUnpackColorSpace()}}class Qa{constructor(e,t,n={}){this.initial=e,this.state=t,this.props=n;const A=t?.stats||e.stats;this.loaded=!!t?.flags.includes("parcel"),this.glasses=e.accessory===1||A[1]>=5,this.leaf=e.accessory===2||A[0]>=5,this.fatigue=t?1-t.energy/Di[e.context].energy:0;const r=.65+e.body*.11+A[2]*.035,s=1+e.height*.18+A[1]*.05;this.group.add(this.torso),this.torso.position.y=this.loaded?.64:.83,this.sphere(this.torso,0,.18,0,.67,e.color,1).scale.set(r,this.loaded?.75:1.02,r*.8),this.head.position.set(0,this.loaded?s*.68:s*.82,.02),this.torso.add(this.head),this.sphere(this.head,0,0,0,.47,15781551,1).scale.set(1,1.04,.94);const o=this.mesh(new zr(.48,8,4,0,Math.PI*2,0,Math.PI/2),6446200);o.position.set(0,.16,-.025),this.head.add(o),this.box(this.head,0,.17,.17,.69,.11,.58,6446200);for(const d of[-1,1])this.sphere(this.head,d*.16,.02,.413,.065,4341074,1),this.sphere(this.head,d*.27,-.09,.38,.055,14395804,1);if(e.face===1){const d=this.mesh(new bi(.1,.018,4,10,Math.PI),7951721);d.rotation.z=Math.PI,d.position.set(0,-.12,.45),this.head.add(d)}else this.box(this.head,0,-.14,.45,.15,.025,.025,7951721);for(let d=0;d<2;d++){const f=d===0?-1:1,h=this.legs[d],u=this.arms[d];h.position.set(f*(this.loaded?.31:.25),.48,0),this.group.add(h),this.box(h,0,-.18,0,.27,.4,.3,7628670),this.box(h,0,-.37,.08,.3,.16,.43,5590115),u.position.set(f*(r*.66+.11),.43,0),this.torso.add(u),this.box(u,0,-.22,0,.24,.48,.27,e.color),this.sphere(u,0,-.48,.015,.145,15714725,1)}if(this.glasses){for(const d of[-1,1]){const f=this.mesh(new bi(.135,.028,5,12),5260631);f.position.set(d*.165,.025,.46),this.head.add(f)}this.box(this.head,0,.035,.46,.1,.035,.04,5260631)}if(this.leaf&&this.addLeaf(this.head,.35,.5,.05,.45),this.torso.add(this.cargo),Ih(this.cargo,this),this.cargo.position.set(0,.2,-.64),this.cargo.visible=this.loaded,this.loaded)for(const d of[-1,1])this.box(this.torso,d*.32,.27,.48,.09,.92,.065,15258803);n.book&&(this.box(this.arms[0],0,-.41,.15,.43,.55,.13,9271710),this.box(this.arms[0],0,-.41,.23,.33,.42,.03,15325621)),n.photo&&(this.box(this.arms[0],0,-.4,.2,.47,.42,.04,16115664),this.box(this.arms[0],0,-.4,.23,.34,.28,.03,10402219));for(const d of new Set(t?.traces||[]))this.trace(d);if(t?.flags.includes("invited")){const d=this.mesh(new kr(.18,.18,.065,12),14858335);d.rotation.x=Math.PI/2,d.position.set(.25,.38,.52),this.torso.add(d)}this.group.scale.setScalar(1.12)}initial;state;props;group=new Ut;torso=new Ut;head=new Ut;arms=[new Ut,new Ut];legs=[new Ut,new Ut];cargo=new Ut;phase=0;reaction=0;loaded;glasses;leaf;fatigue;materials=[];geometries=[];mesh(e,t){const n=new Mc({color:t,roughness:.92,flatShading:!0}),A=new Kt(e,n);return A.castShadow=!0,this.materials.push(n),this.geometries.push(e),A}box(e,t,n,A,r,s,a,c){const o=this.mesh(new Ai(r,s,a),c);return o.position.set(t,n,A),e.add(o),o}sphere(e,t,n,A,r,s,a=0){const c=this.mesh(new Or(r,a),s);return c.position.set(t,n,A),e.add(c),c}addLeaf(e,t,n,A,r){const s=this.sphere(e,t,n,A,1,6921084,1);s.scale.set(r*.3,r,r*.15),s.rotation.z=-.65;const a=this.sphere(e,t+.12,n-.1,A,1,9876618);a.scale.set(r*.27,r*.65,r*.13),a.rotation.z=.8}trace(e){if(e==="邮票贴片"&&(this.box(this.torso,-.22,.15,.51,.38,.32,.055,15917502),this.box(this.torso,-.22,.15,.55,.24,.21,.025,12684680)),e==="肩头压痕")for(const t of[-1,1]){const n=this.box(this.torso,t*.33,.49,.38,.11,.48,.055,7828106);n.rotation.z=t*.2}if(e==="袖口线迹"||e==="手心补丁")for(const t of this.arms)for(let n=0;n<3;n++){const A=this.box(t,-.075+n*.075,-.22,.15,.035,.18,.035,15913356);A.rotation.z=.45}if(e==="珊瑚色结绳"){const t=this.arms[1];for(const n of[-1,1]){const A=this.mesh(new bi(.115,.04,4,10),14322831);A.position.set(n*.09,-.4,.16),t.add(A)}this.box(t,0,-.55,.15,.09,.3,.06,14322831)}if(e==="叶片发饰"&&this.addLeaf(this.head,-.34,.38,.18,.27),e==="河岸风纹")for(const t of this.legs)this.box(t,0,-.24,.18,.3,.13,.06,14009248);e==="一枚空白贴纸"&&this.box(this.torso,.24,-.12,.5,.27,.23,.045,15128516)}animate(e,t,n,A=null,r=!1){this.phase+=t*(this.loaded?7.8:6.4),this.reaction=Math.max(0,this.reaction-e);const s=t>1e-4,a=s?Math.sin(this.phase):0;for(let c=0;c<2;c++){const o=c===0?1:-1;this.legs[c].rotation.x=a*o*(this.loaded?.28:.62),this.arms[c].rotation.x=-a*o*(this.loaded?.12:.52)-(this.loaded?.6:0),this.arms[c].rotation.z=(c===0?1:-1)*(this.loaded?.23:.05)}if(this.torso.rotation.x=(this.loaded?.25:0)+this.fatigue*.09,this.torso.rotation.z=s?Math.cos(this.phase)*.035:Math.sin(n*1.6)*(.012+this.fatigue*.015),this.head.rotation.x=this.loaded?.12:Math.sin(n*.8)*.025+this.fatigue*.08,this.group.position.y=(s?Math.abs(Math.cos(this.phase))*(this.loaded?.025:.065):Math.sin(n*2)*.016)+Math.sin(this.reaction*14)*this.reaction*.1,r&&!s?(this.arms[1].rotation.z=-2.1+Math.sin(n*7)*.3,this.arms[1].rotation.x=-.1,this.head.rotation.z=Math.sin(n*2)*.04):this.head.rotation.z=0,A){const c=Math.sin(n*12);A==="plant"?(this.group.position.y-=.22,this.torso.rotation.x+=.65,this.legs[0].rotation.x=-.6,this.legs[1].rotation.x=.55,this.arms.forEach(o=>o.rotation.x=-.35+c*.14)):A==="try"?(this.torso.rotation.x+=.22,this.arms[0].rotation.x=-.65,this.arms[1].rotation.x=-1.55+c*.5):A==="help"?(this.torso.rotation.x+=.12,this.arms[0].rotation.x=-1.25,this.arms[1].rotation.x=-.65+c*.14):A==="pass"||A==="around"?(this.arms[1].rotation.x=-.4,this.arms[1].rotation.z=-1.7+c*.15):(this.torso.rotation.x+=.25,this.arms[0].rotation.x=-1.1+c*.1,this.arms[1].rotation.x=-1.1-c*.1)}}dispose(){this.materials.forEach(e=>e.dispose()),this.geometries.forEach(e=>e.dispose())}}function Ih(i,e){e.box(i,0,0,0,1.03,1.03,.68,12424812),e.box(i,0,0,.355,1.06,.12,.04,15784374),e.box(i,0,0,-.355,1.06,.12,.04,15784374),e.box(i,0,.53,0,.13,.04,.72,15784374),e.box(i,0,0,.38,.13,1.06,.035,15784374),e.box(i,.23,.25,.4,.28,.24,.04,16247246)}class Dh{scene=new $s;camera=new Dt(30,240/280,.1,20);renderer;rig;elapsed=0;last=0;reduceMotion=!1;pixel=2;constructor(e){this.renderer=new Ph({canvas:e,antialias:!0,alpha:!0}),this.renderer.setSize(240,280,!1),this.camera.position.set(0,2,7.2),this.camera.lookAt(0,1.45,0),this.scene.add(new ia(16774895,10259119,2.3));const t=new aa(16772053,2);t.position.set(-3,5,4),this.scene.add(t)}update(e){this.rig?.dispose(),this.rig&&this.scene.remove(this.rig.group),this.rig=new Qa(e),this.scene.add(this.rig.group),this.render()}resize(){const e=this.pixel===1?2:this.pixel===3?.6:1;this.renderer.setSize(Math.round(240*e),Math.round(280*e),!1),this.render()}render(){this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera)}thumbnail(e,t){const n=this.renderer,A=180,r=210,s=new pn(A,r),a=new $s,c=new Qa(t),o=this.camera.clone();o.aspect=A/r,o.updateProjectionMatrix(),a.add(c.group,new ia(16774895,10259119,2.3));const d=new aa(16772053,2);d.position.set(-3,5,4),a.add(d),c.group.rotation.y=.12,s.texture.colorSpace=bt;const f=new Uint8Array(A*r*4);n.setRenderTarget(s),n.clear(),n.render(a,o),n.readRenderTargetPixels(s,0,0,A,r,f),n.setRenderTarget(null),e.width=A,e.height=r;const h=e.getContext("2d");if(h){const u=h.createImageData(A,r);for(let m=0;m<r;m++)u.data.set(f.subarray((r-m-1)*A*4,(r-m)*A*4),m*A*4);h.putImageData(u,0,0)}c.dispose(),s.dispose(),this.render()}frame=e=>{const t=Math.min(Math.max(0,(e-this.last)/1e3),.05);this.last=e,this.elapsed+=t,this.rig&&(this.rig.group.rotation.y=this.reduceMotion?0:Math.sin(this.elapsed*.6)*.3,this.rig.animate(this.reduceMotion?0:t,0,this.reduceMotion?0:this.elapsed)),document.body.dataset.mode==="setup"&&this.render(),requestAnimationFrame(this.frame)}}const we=i=>document.querySelector(i),Ha=i=>{try{return JSON.parse(localStorage.getItem(i)||"null")}catch{return null}};function ka(i,e){try{localStorage.setItem(i,JSON.stringify(e))}catch{}}const Ga={context:"rent",stats:[3,3,3],color:"#a99ac6",body:1,height:1,face:0,accessory:0,seed:42719};let Se=structuredClone(Ga),ot=1,Ft=!1,$r="title",Ti=null,Nn=!1,_n;const Oa=Ha("road-entry-settings-v1");let Ri=Number(Oa?.pixel)||2,Pi=Oa?.reduceMotion??matchMedia("(prefers-reduced-motion: reduce)").matches;we("#app").innerHTML='<div id="storybookBackdrop" aria-hidden="true"></div><div id="screen"></div><div id="portraitWrap"><canvas id="portrait" aria-label="当前旅人形象"></canvas><span>每段经历，都留下一点形状。</span></div><div id="drawer" hidden></div><div id="notice" role="status"></div>';const St=new Dh(we("#portrait"));St.reduceMotion=Pi,St.pixel=Ri,St.resize(),St.update(Se);function za(i){$r=i,document.body.dataset.mode=i,document.body.dataset.step=String(ot),document.body.dataset.page=["focus","appearance","context"][ot-1],document.body.classList.toggle("at-intro",i==="setup")}function Va(i=440){if(!Nn)return;_n??=new AudioContext,_n.resume();const e=_n.createOscillator(),t=_n.createGain();e.frequency.value=i,t.gain.setValueAtTime(.04,_n.currentTime),t.gain.exponentialRampToValueAtTime(.001,_n.currentTime+.4),e.connect(t).connect(_n.destination),e.start(),e.stop(_n.currentTime+.45)}function es(i){const e=i?.initial;return!!e&&Object.hasOwn(Di,e.context)&&Array.isArray(e.stats)&&e.stats.length===3&&e.stats.every(t=>Number.isInteger(t)&&Number(t)>=0)&&e.stats.reduce((t,n)=>t+n,0)===9&&/^#[0-9a-f]{6}$/i.test(e.color)&&[0,1,2].includes(e.body)&&[0,1,2].includes(e.height)&&[0,1].includes(e.face)&&[0,1,2].includes(e.accessory)&&Number.isInteger(e.seed)&&[1,2,3].includes(i.step)}function fA(){$r==="setup"&&ka("road-entry-draft-v1",{initial:Se,step:ot,focusCustom:Ft,flowVersion:2})}function hA(){fA(),za("title"),we("#drawer").hidden=!0;const i=Ha("road-entry-draft-v1");we("#screen").innerHTML=`<section class="title-card"><div class="eyebrow">未行之路 · 一段由你走出的生活</div><h1>Road Not Taken</h1><p class="title-line">未走的路，还在世界里。</p><div class="title-actions"><button class="ticket primary" id="newJourney"><span>开启旅程<small>NEW JOURNEY</small></span></button><button class="ticket secondary" id="resumeJourney" ${es(i)?"":"disabled"}><span>继续旅程<small>${es(i)?"继续开局准备":"CONTINUE"}</small></span></button><button class="ticket secondary" id="gallery"><span>旅程收藏<small>COLLECTION</small></span></button></div><button class="text-button title-settings" id="titleSettings">画面与声音</button><p class="edition">开局准备独立演示 · 基于 0.6.0</p></section>`,we("#newJourney").onclick=()=>{Se=structuredClone(Ga),ot=1,Ft=!1,qt()},es(i)&&(we("#resumeJourney").onclick=()=>{Se=structuredClone(i.initial),ot=i.flowVersion===2?i.step:[3,1,2][i.step-1],Ft=!!i.focusCustom,ts(),qt()}),we("#gallery").onclick=Fh,we("#titleSettings").onclick=Nh}function qt(){if(document.body.dataset.focusView=Ft?"custom":"presets",za("setup"),St.update(Se),we("#screen").innerHTML=`<section class="setup-card"><button class="back text-button" id="setupBack">← ${ot===1?"返回标题":"上一步"}</button><div class="setup-steps">${["生活重心","旅人形象","生活处境"].map((i,e)=>`<span class="${e+1===ot?"active":""}">${String(e+1).padStart(2,"0")} ${i}</span>`).join("")}</div><div id="setupBody"></div><div class="setup-footer"><button class="primary" id="setupNext">${ot===3?"开始生活 ↗":"下一步 →"}</button></div></section><div class="setup-caption">${ot===1?"此刻的重心，会慢慢长成你的样子。":ot===2?"你选择的外观，和一路留下的痕迹。":"外部条件影响机会与付出。"}</div>`,ot===3)we("#setupBody").innerHTML=`<div class="eyebrow">22 岁，刚搬来河湾</div><h1>带着怎样的生活而来？</h1><p>先有处境，再在其中做自己的选择。</p><div class="context-cards">${Object.entries(Di).map(([i,e])=>`<button data-context="${i}" class="selection-card ${Se.context===i?"active":""}" aria-pressed="${Se.context===i}"><strong>${e.name}</strong><span>${e.text}</span><small>初始精力 ${e.energy}</small></button>`).join("")}</div>`,document.querySelectorAll("[data-context]").forEach(i=>i.onclick=()=>{Se.context=i.dataset.context,qt()});else if(ot===1)Uh();else{we("#setupBody").innerHTML=`<div class="eyebrow">一个开始时的你</div><h1>让旅人，有一点你的样子。</h1><p>外观可以自己选。经历的痕迹，留给之后的生活。</p><div class="appearance"><label>体型<select id="body"><option value="0">轻巧</option><option value="1">柔软</option><option value="2">圆润</option></select></label><label>身高<select id="height"><option value="0">小个子</option><option value="1">中等</option><option value="2">高个子</option></select></label><label>表情<select id="face"><option value="0">平静</option><option value="1">微笑</option></select></label><label>配饰<select id="accessory"><option value="0">随重心自然变化</option><option value="1">保留眼镜</option><option value="2">保留叶片</option></select></label><label class="color-choice">衣色<input id="color" aria-label="衣服颜色" type="color" value="${Se.color}"></label></div><details class="conditions"><summary>本局外部条件</summary><p>花期：${["微风","阴晴","阵雨"][rs(Se.seed,"fog")]} · 工坊环境：${rs(Se.seed,"work")}<br>同一起点重玩会保持这些条件。</p><button id="newWeather" class="text-button">换一组条件</button></details><div class="setup-summary">${Se.stats.join(" / ")} · 共 9 点</div>`;for(const i of["body","height","face","accessory"])we(`#${i}`).value=String(Se[i]),we(`#${i}`).onchange=e=>{Se[i]=Number(e.target.value),St.update(Se)};we("#color").oninput=i=>{Se.color=i.target.value,St.update(Se)},we("#newWeather").onclick=()=>{Se.seed=Math.floor(Math.random()*2147483647),qt()}}ot===1&&Ft&&document.querySelector(".setup-footer").prepend(we("#setupBalance")),we("#setupBack").onclick=()=>{ot===1&&Ft?(Ft=!1,qt()):ot===1?hA():(ot--,qt())},we("#setupNext").onclick=()=>{ot<3?(ot++,qt()):Lh()},we("#setupNext").focus({preventScroll:!0})}const Ya=[{name:"探索者",hint:"为自己的选择留出空间",stats:[5,2,2]},{name:"实干家",hint:"把练习变成能做到的事",stats:[2,5,2]},{name:"同行者",hint:"让相遇慢慢长成关系",stats:[2,2,5]}];function ts(){Se.stats[1]>Se.stats[0]&&Se.stats[1]>=Se.stats[2]||Se.stats[2]>Se.stats[0]}function Wa(i,e){for(e=Math.max(0,Math.min(9,e));Se.stats[i]!==e;){const t=[0,1,2].filter(n=>n!==i).sort((n,A)=>Se.stats[A]-Se.stats[n]);if(Se.stats[i]<e){const n=t.find(A=>Se.stats[A]>0);if(n===void 0)break;Se.stats[n]--,Se.stats[i]++}else Se.stats[i]--,Se.stats[t.at(-1)]++}document.querySelectorAll("[data-stat]").forEach(t=>{const n=Number(t.dataset.stat);t.value=String(Se.stats[n]),we(`#statValue${n}`).textContent=String(Se.stats[n])}),we("#setupBalance").textContent=Se.stats.join(" + ")+" = 9",document.querySelectorAll("[data-change]").forEach(t=>{const[n,A]=t.dataset.change.split(",").map(Number);t.disabled=A<0?Se.stats[n]===0:Se.stats[n]===9}),ts(),St.update(Se)}function Uh(){if(Ft){we("#setupBody").innerHTML=`<div class="eyebrow">YOUR OWN PACE</div><h1>让重心，按你的步调。</h1><p>总共 9 点。增减一项，点数会在另外两项间转移。</p><div class="focus-designer">${no.map((t,n)=>`<section class="attribute-paper"><div><h2>${t}</h2><p>${["我的生活，有多少出于自己的意愿？","我能应付眼前的事情吗？","我是否被关心、理解，并与人连接？"][n]}</p></div><div class="attribute-number"><button data-change="${n},-1" ${Se.stats[n]===0?"disabled":""} aria-label="减少${t}">−</button><output id="statValue${n}">${Se.stats[n]}</output><button data-change="${n},1" ${Se.stats[n]===9?"disabled":""} aria-label="增加${t}">+</button></div><input aria-label="${t}" data-stat="${n}" type="range" min="0" max="9" value="${Se.stats[n]}"></section>`).join("")}</div><div id="setupBalance" class="setup-balance">${Se.stats.join(" + ")} = 9</div>`,document.querySelectorAll("[data-stat]").forEach(t=>t.oninput=()=>Wa(Number(t.dataset.stat),Number(t.value))),document.querySelectorAll("[data-change]").forEach(t=>t.onclick=()=>{const[n,A]=t.dataset.change.split(",").map(Number);Wa(n,Se.stats[n]+A)});return}const i=!Ya.some(t=>t.stats.join()===Se.stats.join()),e=[...Ya,{name:"自定义",hint:"从均衡出发，自己分配 9 点",stats:Se.stats}];we("#setupBack").textContent="BACK",we("#setupBack").setAttribute("aria-label","返回标题"),we("#setupNext").textContent="CONTINUE",we("#setupNext").setAttribute("aria-label","下一步：旅人形象"),we("#setupBody").innerHTML=`<div class="focus-card-grid" aria-label="选择旅人类型">${e.map((t,n)=>{const A=n===3?i:t.stats.join()===Se.stats.join();return`<section class="focus-card-slot" data-selected="${A}"><span class="focus-selection-marker" aria-hidden="true"></span><button class="focus-card" data-focus-preset="${n}" aria-pressed="${A}" aria-label="${t.name}：${t.hint}。自主 ${t.stats[0]}，胜任 ${t.stats[1]}，关系 ${t.stats[2]}${n===3?"，点击自定义点数":""}"><canvas aria-hidden="true" data-preset-portrait="${n}"></canvas><strong>${t.name}</strong></button><div class="preset-points" aria-label="${t.name}的点数" ${A?"":"hidden"}>${t.stats.map((r,s)=>`<span aria-label="${["自主","胜任","关系"][s]} ${r}" title="${["自主","胜任","关系"][s]}">${r}</span>`).join("")}</div></section>`}).join("")}</div>`,e.forEach((t,n)=>St.thumbnail(we(`[data-preset-portrait="${n}"]`),{...Se,stats:t.stats})),document.querySelectorAll("[data-focus-preset]").forEach(t=>t.onclick=()=>{const n=Number(t.dataset.focusPreset);n===3?Ft=!0:(Se.stats=[...e[n].stats],Ft=!1,ts()),qt()})}function Fh(){Ti=document.activeElement,we("#drawer").hidden=!1,we("#drawer").innerHTML='<section class="drawer-card" role="dialog" aria-modal="true" aria-label="旅程收藏"><button id="closeDrawer" class="text-button close-drawer">关闭</button><div class="eyebrow">COLLECTION</div><h1>旅程收藏</h1><p>走完一段人生后，这里会留下你的路线与经历。</p><p class="small-copy">当前演示到开局准备结束，尚无已完成旅程。</p></section>',we("#closeDrawer").onclick=uA,we("#closeDrawer").focus()}function Lh(){fA(),Va(523),Ti=we("#setupNext"),we("#drawer").hidden=!1,we("#drawer").innerHTML=`<section class="drawer-card" role="dialog" aria-modal="true" aria-label="开局准备完成"><div class="eyebrow">READY FOR THE JOURNEY</div><h1>起点，已经准备好了。</h1><p>生活处境：${Di[Se.context].name}<br>生活重心：${Se.stats.join(" / ")} · 共 9 点<br>旅人形象：已确定</p><p class="small-copy">本独立演示到此结束。</p><div class="entry-actions"><button id="closeDrawer" class="text-button">返回调整</button><button id="returnTitle" class="primary">返回标题 →</button></div></section>`,we("#closeDrawer").onclick=uA,we("#returnTitle").onclick=hA,we("#closeDrawer").focus()}function Nh(){Ti=document.activeElement,we("#drawer").hidden=!1,we("#drawer").innerHTML=`<section class="drawer-card" role="dialog" aria-modal="true" aria-label="画面与声音"><button class="text-button close-drawer" id="closeDrawer">关闭 ×</button><div class="eyebrow">按你的习惯来</div><h1>画面与声音</h1><label>预览清晰度<select id="pixel"><option value="1">细腻</option><option value="2">柔和</option><option value="3">颗粒</option></select></label><button id="soundToggle" class="setting-row" aria-pressed="${Nn}">声音 <span>${Nn?"开":"关"}</span></button><label class="check-row"><input id="reduceMotion" type="checkbox" ${Pi?"checked":""}>减少动态</label><p class="small-copy">Esc 返回上一步或关闭当前窗口</p></section>`,we("#pixel").value=String(Ri),we("#pixel").onchange=i=>{Ri=Number(i.target.value),St.pixel=Ri,St.resize(),Xa()},we("#soundToggle").onclick=()=>{Nn=!Nn,we("#soundToggle").setAttribute("aria-pressed",String(Nn)),we("#soundToggle span").textContent=Nn?"开":"关",Va()},we("#reduceMotion").onchange=i=>{Pi=i.target.checked,St.reduceMotion=Pi,Xa()},we("#closeDrawer").onclick=uA,we("#closeDrawer").focus()}function Xa(){ka("road-entry-settings-v1",{pixel:Ri,reduceMotion:Pi})}function uA(){we("#drawer").hidden=!0,Ti?.isConnected&&Ti.focus({preventScroll:!0})}window.addEventListener("keydown",i=>{if(i.key==="Escape"){if(!we("#drawer").hidden){uA();return}$r==="setup"&&(ot===1&&Ft?(Ft=!1,qt()):ot>1?(ot--,qt()):hA())}}),we("#drawer").addEventListener("keydown",i=>{if(i.key!=="Tab")return;const e=Array.from(we("#drawer").querySelectorAll("button,select,input,summary"));i.shiftKey&&document.activeElement===e[0]?(i.preventDefault(),e.at(-1)?.focus()):!i.shiftKey&&document.activeElement===e.at(-1)&&(i.preventDefault(),e[0]?.focus())});for(const i of["click","input","change"])document.addEventListener(i,fA);window.addEventListener("beforeunload",fA),hA(),requestAnimationFrame(St.frame);const ja=new Image;ja.src="./art/cloud-islands-background.png";const Ja=new Image;Ja.src="./art/travel-ticket.png",Promise.all([document.fonts.ready,ja.decode().catch(()=>{}),Ja.decode().catch(()=>{})]).then(()=>requestAnimationFrame(()=>{St.render(),document.querySelector("#loading")?.remove(),document.body.classList.remove("booting")}))})();
