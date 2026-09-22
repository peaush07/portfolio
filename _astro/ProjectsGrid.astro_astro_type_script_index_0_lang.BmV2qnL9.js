import{t as e}from"./sound-fx.C4YthlLM.js";document.querySelectorAll(`.project-card, .open-details-btn, .filter-btn`).forEach(t=>{t.addEventListener(`mouseenter`,()=>e.playHover())});var t={"nextjs-ai-analytics":{title:`Nextjs ai analytics dashboard`,category:`AI DASHBOARD`,tagline:`Real-time telemetry and anomaly detection dashboard powered by Next.js & React 19`,whatWeDone:`Engineered a high-performance, real-time AI analytics platform using Next.js App Router, React 19, and Tailwind CSS. Implemented automated data anomaly detection pipelines, streaming chart telemetry visualizers, serverless API routes, and glassmorphic UI components with zero cumulative layout shift (CLS).`,howToUse:`# 1. Clone the repository
git clone https://github.com/peaush07/nextjs-ai-analytics.git
cd nextjs-ai-analytics

# 2. Install dependencies
npm install

# 3. Configure environment variables
echo "NEXT_PUBLIC_AI_API_KEY=your_api_key_here" > .env.local

# 4. Launch local development server
npm run dev
# Open http://localhost:3000 in your browser`,techs:[`TypeScript`,`Next.js 15`,`React 19`,`Tailwind CSS`,`Recharts`,`AI Telemetry`]},"go-distributed-kv":{title:`Go distributed kv store`,category:`DISTRIBUTED SYSTEMS`,tagline:`High-throughput fault-tolerant distributed key-value storage engine in Go`,whatWeDone:`Designed and built a distributed, strongly consistent key-value database in Go. Implemented the Raft consensus algorithm for leader election and replicated log state, LSM-tree (Log-Structured Merge-tree) disk compaction, WAL write-ahead logging for crash safety, and gRPC/protobuf client endpoints handling 100k+ QPS.`,howToUse:`# 1. Clone the repository
git clone https://github.com/peaush07/go-distributed-kvstore.git
cd go-distributed-kvstore

# 2. Build cluster binary
go build -o kvnode ./cmd/kvnode

# 3. Launch a 3-node distributed Raft cluster
./kvnode --id=1 --addr=127.0.0.1:8001 --peers=127.0.0.1:8002,127.0.0.1:8003 &
./kvnode --id=2 --addr=127.0.0.1:8002 --peers=127.0.0.1:8001,127.0.0.1:8003 &
./kvnode --id=3 --addr=127.0.0.1:8003 --peers=127.0.0.1:8001,127.0.0.1:8002 &

# 4. Put & Get key-value queries using CLI
go run ./cmd/kvcli set "user:peaush" "systems-developer"
go run ./cmd/kvcli get "user:peaush"`,techs:[`Go`,`Raft Consensus`,`LSM Tree`,`gRPC`,`Protobuf`,`Concurrency`]},"flutter-wallet":{title:`Flutter microservices wallet`,category:`MOBILE APP`,tagline:`Cross-platform financial crypto wallet & transaction manager built with Flutter & Dart`,whatWeDone:`Developed a cross-platform mobile wallet and asset manager using Flutter and Dart. Architected with BLoC state management pattern, biometric security (FaceID/Fingerprint), AES-256 local storage encryption, real-time WebSocket market price feeds, and microservices backend API synchronization.`,howToUse:`# 1. Clone the repository
git clone https://github.com/peaush07/flutter-microservices-wallet.git
cd flutter-microservices-wallet

# 2. Install Flutter packages
flutter pub get

# 3. Run unit & widget test suite
flutter test

# 4. Launch app on connected device / Chrome
flutter run -d chrome # Or: flutter run -d iphone`,techs:[`Dart`,`Flutter`,`BLoC Pattern`,`Biometrics`,`Microservices`,`WebSockets`]},"cyber-neon-runner":{title:`Cyber neon runner`,category:`GAME ENGINE`,tagline:`Retro 2D arcade runner game engine written in Python & Pygame with custom physics`,whatWeDone:`Engineered a 60fps retro 2D arcade runner game engine in Python using Pygame. Designed a custom AABB (Axis-Aligned Bounding Box) collision detection physics system, particle explosion FX, dynamic obstacle wave generation, spatial audio mixer, and JSON high-score persistence.`,howToUse:`# 1. Clone the repository
git clone https://github.com/peaush07/cyber-neon-runner.git
cd cyber-neon-runner

# 2. Create virtual environment & install Pygame
python3 -m venv venv
source venv/bin/activate
pip install pygame

# 3. Start the game engine
python main.py
# Controls: [SPACE] or [UP] to Jump, [ESC] to Pause`,techs:[`Python 3`,`Pygame`,`Physics Engine`,`Particle FX`,`2D Engine`,`Arcade`]},"cpp-async-engine":{title:`Cpp async engine`,category:`C++ SYSTEMS`,tagline:`Zero-cost asynchronous networking & event loop framework written in C++20`,whatWeDone:`Architected a high-performance asynchronous networking engine in C++20. Leveraged Linux epoll / kqueue non-blocking socket I/O, custom lock-free ring queues, thread pool work stealing, and zerocopy HTTP/1.1 parsing capable of supporting 500,000+ concurrent client socket connections.`,howToUse:`# 1. Clone the repository
git clone https://github.com/peaush07/cpp-async-engine.git
cd cpp-async-engine

# 2. Build with CMake & GCC/Clang (C++20 required)
mkdir build && cd build
cmake -DCMAKE_BUILD_TYPE=Release ..
make -j$(nproc)

# 3. Run async HTTP server benchmark
./async_server --port=8080 --threads=8

# 4. Benchmark performance with wrk
wrk -t8 -c400 -d10s http://127.0.0.1:8080/`,techs:[`C++20`,`Linux epoll`,`Lock-Free Queues`,`Async I/O`,`CMake`,`Systems`]},"tuf-eli5-demo":{title:`Tuf eli5 demo`,category:`SECURITY FRAMEWORK`,tagline:`Software supply chain security implementation demonstrating The Update Framework (TUF)`,whatWeDone:`Created a software supply chain security demonstration illustrating TUF (The Update Framework) principles in Python. Implemented cryptographic metadata signing across Root, Targets, Snapshot, and Timestamp roles, key rotation protocols, compromise resilience against MITM attacks, and automated artifact validation.`,howToUse:`# 1. Clone the repository
git clone https://github.com/peaush07/tuf-eli5-demo.git
cd tuf-eli5-demo

# 2. Install security dependencies
pip install securesystemslib tuf cryptography

# 3. Run TUF repository initialization & client verification
python demo_repository.py --init
python demo_client.py --update

# 4. Run malicious tamper attack test simulation
python attack_simulation.py --tamper-target
python demo_client.py --update # Detects & blocks tampered package!`,techs:[`Python 3`,`TUF Security`,`Cryptography`,`Supply Chain`,`Ed25519`,`Security`],repoUrl:`https://github.com/peaush07/tuf-eli5-demo`},"100-days-100-web":{title:`100 days 100 web project`,category:`WEB SUITE`,tagline:`Collection of 100 frontend web applications built using HTML, CSS, and vanilla JS`,whatWeDone:`Curated, built, and refactored a comprehensive suite of 100 functional web applications ranging from basic UI widgets, interactive mini-games, and DOM manipulators to API integrators using modern Vanilla HTML5, CSS3 glassmorphism, and JavaScript.`,howToUse:`# 1. Clone the repository
git clone https://github.com/peaush07/100_days_100_web_project.git
cd 100_days_100_web_project

# 2. Browse any project folder (e.g. Day-01-Calculator)
cd Day-01-Calculator

# 3. Serve locally with Python HTTP server or Live Server
python3 -m http.server 8000
# Open http://localhost:8000 in your browser`,techs:[`HTML5`,`CSS3`,`JavaScript ES6`,`DOM Manipulation`,`Vanilla Web`],repoUrl:`https://github.com/peaush07/100_days_100_web_project`},"yt-clip-cutter":{title:`yt clip cutter`,category:`MEDIA TOOL`,tagline:`Browser & Node.js YouTube video clip extractor and trimmer utility`,whatWeDone:`Developed a lightweight YouTube video clip downloader and timeline cutter in JavaScript. Utilized ytdl-core stream piping, FFmpeg timestamp slicing, custom resolution selector (1080p/720p/Audio-only), and browser-side video segment preview.`,howToUse:`# 1. Clone the repository
git clone https://github.com/peaush07/yt-clip-cutter.git
cd yt-clip-cutter

# 2. Install dependencies (requires FFmpeg installed)
npm install

# 3. Cut a YouTube clip by URL, start time & duration
node index.js --url="https://youtube.com/watch?v=EXAMPLE" --start="00:01:15" --duration="30s" --out="clip.mp4"`,techs:[`JavaScript`,`Node.js`,`FFmpeg`,`Stream Piping`,`ytdl-core`],repoUrl:`https://github.com/peaush07/yt-clip-cutter`},"video-frame-checker":{title:`video frame checker`,category:`VIDEO ANALYZER`,tagline:`Video frame rate verification, corrupt frame detection & timestamp inspector using FFmpeg`,whatWeDone:`Engineered a Python media verification tool powered by FFmpeg (ffprobe) to analyze video stream integrity. Detects dropped frames, variable frame rate (VFR) vs constant frame rate (CFR) anomalies, audio-video sync drift, and outputs detailed JSON inspection reports.`,howToUse:`# 1. Clone the repository
git clone https://github.com/peaush07/video-frame-checker.git
cd video-frame-checker

# 2. Set up virtual environment
python3 -m venv venv
source venv/bin/activate

# 3. Inspect a video file for frame corruptions & metadata
python checker.py --input="/path/to/video.mp4" --output="report.json"`,techs:[`Python 3`,`FFmpeg`,`ffprobe`,`Media Inspection`,`CLI Tool`],repoUrl:`https://github.com/peaush07/video-frame-checker`},"aim-trainer":{title:`aim trainer`,category:`2D GAME`,tagline:`Interactive mouse precision and reaction speed training game built with Pygame`,whatWeDone:`Built an interactive FPS-style mouse precision and reaction speed training game in Python using Pygame. Features shrinking target spawns, target tracking accuracy statistics (KPS, accuracy %, reaction latency ms), difficulty scaling, and custom audio hitsound feedback.`,howToUse:`# 1. Clone the repository
git clone https://github.com/peaush07/aim-trainer.git
cd aim-trainer

# 2. Install Pygame dependency
pip install pygame

# 3. Launch Aim Trainer
python main.py
# Click targets before they shrink! Press [R] to restart`,techs:[`Python 3`,`Pygame`,`Reaction Analytics`,`Mouse Precision`,`2D Engine`],repoUrl:`https://github.com/peaush07/aim-trainer`},"retro-game":{title:`retro game`,category:`RETRO ARCADE`,tagline:`Classic 8-bit style arcade game engine developed in Python & Pygame`,whatWeDone:`Created a classic 8-bit retro arcade game in Python with Pygame. Features sprite sheet animation rendering, tilemap level design, player health state management, enemy AI pathing, background parallax scrolling, and chiptune sound effects.`,howToUse:`# 1. Clone the repository
git clone https://github.com/peaush07/retro-game.git
cd retro-game

# 2. Install dependencies
pip install pygame

# 3. Start retro game
python game.py
# Controls: [A][D] or Arrow keys to move, [SPACE] to attack`,techs:[`Python 3`,`Pygame`,`Sprite Animation`,`Tilemap Engine`,`Arcade`],repoUrl:`https://github.com/peaush07/retro-game`},"to-do-list":{title:`to do list`,category:`WEB APP`,tagline:`Task management web app with user authentication & deadline tracking built with Django`,whatWeDone:`Architected a responsive task management web application in Python using the Django web framework. Features CRUD task management, category tagging, priority sorting, user session authentication (signup/login/logout), SQLite database ORM models, and deadline reminders.`,howToUse:`# 1. Clone the repository
git clone https://github.com/peaush07/to-do-list.git
cd to-do-list

# 2. Install requirements & run migrations
pip install django
python manage.py migrate

# 3. Start Django dev server
python manage.py runserver
# Access at http://127.0.0.1:8000/`,techs:[`Python 3`,`Django Framework`,`SQLite`,`User Auth`,`Django ORM`,`HTML/CSS`],repoUrl:`https://github.com/peaush07/to-do-list`}},n=document.getElementById(`project-search-input`),r=document.querySelectorAll(`.filter-btn`),i=document.querySelectorAll(`.project-card`);n&&n.addEventListener(`input`,e=>{let t=e.target.value.toLowerCase();i.forEach(e=>{let n=e.querySelector(`h4`)?.textContent.toLowerCase()||``,r=e.querySelector(`p`)?.textContent.toLowerCase()||``;n.includes(t)||r.includes(t)?e.style.display=`flex`:e.style.display=`none`})}),r.forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget,n=t.dataset.lang;r.forEach(e=>{e.classList.remove(`bg-violet-500/30`,`text-violet-200`,`border-violet-400/50`,`active-filter`,`shadow-[0_0_12px_rgba(139,92,246,0.4)]`),e.classList.add(`text-white/80`)}),t.classList.add(`bg-violet-500/30`,`text-violet-200`,`border-violet-400/50`,`active-filter`,`shadow-[0_0_12px_rgba(139,92,246,0.4)]`),t.classList.remove(`text-white/80`),i.forEach(e=>{n===`all`||e.dataset.lang===n?e.style.display=`flex`:e.style.display=`none`})})});var a=document.getElementById(`project-modal-backdrop`),o=document.getElementById(`project-modal-card`),s=document.getElementById(`close-modal-btn`),c=document.getElementById(`modal-close-footer`),l=document.getElementById(`modal-title`),u=document.getElementById(`modal-category`),d=document.getElementById(`modal-tagline`),f=document.getElementById(`modal-what-we-done`),p=document.getElementById(`modal-how-to-use`),m=document.getElementById(`modal-tech-stack`),h=document.getElementById(`modal-github-link`);function g(n){let r=t[n];r&&(e.playModalOpen(),l.textContent=r.title,u.textContent=r.category,d.textContent=r.tagline,f.textContent=r.whatWeDone,p.textContent=r.howToUse,h&&r.repoUrl&&(h.href=r.repoUrl),m.innerHTML=``,r.techs.forEach(e=>{let t=document.createElement(`span`);t.className=`text-[11px] font-mono font-semibold text-purple-200 bg-purple-500/20 px-3 py-1 rounded-lg border border-purple-400/30`,t.textContent=e,m.appendChild(t)}),_(n,r),a.classList.remove(`hidden`),requestAnimationFrame(()=>{a.classList.remove(`opacity-0`),o.classList.remove(`scale-95`),o.classList.add(`scale-100`)}),document.body.style.overflow=`hidden`)}function _(e,t){let n=document.getElementById(`modal-demo-interactive`),r=document.getElementById(`modal-demo-canvas`);n&&r&&(n.innerHTML=``,r.classList.add(`hidden`),e===`aim-trainer`?(n.innerHTML=`
        <div class="space-y-2">
          <p class="text-xs text-fuchsia-300 font-mono">🎯 AIM TRAINER MINI-GAME: Click targets to test your reaction speed!</p>
          <div class="flex items-center justify-center gap-4 text-xs font-mono text-white">
            <span>SCORE: <strong id="aim-score" class="text-emerald-400">0</strong></span>
            <span>ACCURACY: <strong id="aim-acc" class="text-violet-400">100%</strong></span>
          </div>
        </div>
      `,r.classList.remove(`hidden`),v(r)):e===`cyber-neon-runner`||e===`retro-game`?(n.innerHTML=`
        <div class="space-y-2">
          <p class="text-xs text-fuchsia-300 font-mono">🏃 2D ARCADE RUNNER: Click or Press [SPACE] to Jump over obstacles!</p>
          <div class="flex items-center justify-center gap-4 text-xs font-mono text-white">
            <span>DISTANCE: <strong id="runner-score" class="text-fuchsia-400">0m</strong></span>
            <span>SPEED: <strong class="text-purple-400">60 FPS</strong></span>
          </div>
        </div>
      `,r.classList.remove(`hidden`),y(r)):n.innerHTML=`
        <div class="space-y-3 p-4 bg-slate-900/80 rounded-xl border border-white/10 font-mono text-left">
          <div class="flex items-center justify-between text-xs text-violet-300 border-b border-white/10 pb-2">
            <span>[SYS_TELEMETRY] ${t.title}</span>
            <span class="text-emerald-400 text-[10px]">● ACTIVE RUNTIME</span>
          </div>
          <p class="text-xs text-slate-300">${t.tagline}</p>
          <div class="flex items-center gap-3 pt-1">
            <a href="${t.repoUrl||`https://github.com/peaush07`}" target="_blank" rel="noopener noreferrer" class="px-4 py-1.5 rounded-lg bg-fuchsia-600/30 hover:bg-fuchsia-600/50 text-fuchsia-200 text-xs border border-fuchsia-400/40 flex items-center gap-1 transition-all">
              <span>🚀 LAUNCH REPOSITORY</span>
            </a>
          </div>
        </div>
      `)}function v(t){let n=t.getContext(`2d`);if(!n)return;t.width=t.parentElement?.clientWidth||400,t.height=160;let r=0,i=0,a={x:t.width/2,y:t.height/2,radius:22};function o(){a.x=Math.random()*(t.width-60)+30,a.y=Math.random()*(t.height-60)+30,a.radius=22}function s(){n.clearRect(0,0,t.width,t.height),n.fillStyle=`rgba(232, 121, 249, 0.2)`,n.beginPath(),n.arc(a.x,a.y,a.radius+6,0,Math.PI*2),n.fill(),n.fillStyle=`#C084FC`,n.beginPath(),n.arc(a.x,a.y,a.radius,0,Math.PI*2),n.fill(),n.fillStyle=`#FFFFFF`,n.beginPath(),n.arc(a.x,a.y,6,0,Math.PI*2),n.fill()}let c=(n,c)=>{e.playClick(),i++;let l=t.getBoundingClientRect(),u=n-l.left,d=c-l.top;Math.hypot(u-a.x,d-a.y)<=a.radius&&(e.playSuccess(),r++,o());let f=document.getElementById(`aim-score`),p=document.getElementById(`aim-acc`);f&&(f.textContent=r.toString()),p&&(p.textContent=`${Math.round(r/i*100)}%`),s()};t.onclick=e=>c(e.clientX,e.clientY),t.ontouchstart=e=>{e.touches.length>0&&(e.preventDefault(),c(e.touches[0].clientX,e.touches[0].clientY))},s()}function y(t){let n=t.getContext(`2d`);if(!n)return;t.width=t.parentElement?.clientWidth||400,t.height=160;let r=110,i=0,a=!1,o=0,s=t.width+50;function c(){if(!t.classList.contains(`hidden`)){if(n.clearRect(0,0,t.width,t.height),n.strokeStyle=`#8B5CF6`,n.lineWidth=2,n.beginPath(),n.moveTo(0,135),n.lineTo(t.width,135),n.stroke(),i+=.8,r+=i,r>=110&&(r=110,i=0,a=!1),n.fillStyle=`#C084FC`,n.fillRect(40,r,20,25),s-=4,s<-20){s=t.width+Math.random()*100,o+=10;let e=document.getElementById(`runner-score`);e&&(e.textContent=`${o}m`)}n.fillStyle=`#F43F5E`,n.fillRect(s,115,15,20),requestAnimationFrame(c)}}let l=()=>{a||=(e.playClick(),i=-12,!0)};t.addEventListener(`click`,l,{passive:!0}),t.addEventListener(`touchstart`,e=>{e.preventDefault(),l()},{passive:!1}),window.addEventListener(`keydown`,e=>{e.code===`Space`&&t&&!t.classList.contains(`hidden`)&&(e.preventDefault(),l())}),c()}function b(){e.playClick(),a.classList.add(`opacity-0`),o.classList.remove(`scale-100`),o.classList.add(`scale-95`),setTimeout(()=>{a.classList.add(`hidden`),document.body.style.overflow=``},300)}document.querySelectorAll(`.open-details-btn`).forEach(t=>{t.addEventListener(`click`,t=>{e.playClick();let n=t.currentTarget.dataset.modalTrigger;g(n)})}),s&&s.addEventListener(`click`,b),c&&c.addEventListener(`click`,b),a&&a.addEventListener(`click`,e=>{e.target===a&&b()}),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&a&&!a.classList.contains(`hidden`)&&b()});var x=document.getElementById(`copy-terminal-btn`),S=document.getElementById(`copy-btn-text`);x&&x.addEventListener(`click`,async()=>{let t=p?.textContent||``;if(t)try{await navigator.clipboard.writeText(t),e.playSuccess(),x.classList.remove(`bg-violet-600/30`,`text-violet-200`,`border-violet-400/60`),x.classList.add(`bg-emerald-500/40`,`text-emerald-200`,`border-emerald-400`,`shadow-[0_0_25px_rgba(52,211,153,0.6)]`,`scale-105`),S&&(S.textContent=`✓ COPIED TO CLIPBOARD!`),setTimeout(()=>{x.classList.remove(`bg-emerald-500/40`,`text-emerald-200`,`border-emerald-400`,`shadow-[0_0_25px_rgba(52,211,153,0.6)]`,`scale-105`),x.classList.add(`bg-violet-600/30`,`text-violet-200`,`border-violet-400/60`),S&&(S.textContent=`📋 Copy & Run in Terminal`)},2e3)}catch(e){console.error(`Failed to copy terminal commands: `,e)}});