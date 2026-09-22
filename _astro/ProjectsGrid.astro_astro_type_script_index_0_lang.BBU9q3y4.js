var e={"nextjs-ai-analytics":{title:`Nextjs ai analytics dashboard`,category:`AI DASHBOARD`,tagline:`Real-time telemetry and anomaly detection dashboard powered by Next.js & React 19`,whatWeDone:`Engineered a high-performance, real-time AI analytics platform using Next.js App Router, React 19, and Tailwind CSS. Implemented automated data anomaly detection pipelines, streaming chart telemetry visualizers, serverless API routes, and glassmorphic UI components with zero cumulative layout shift (CLS).`,howToUse:`# 1. Clone the repository
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
# Access at http://127.0.0.1:8000/`,techs:[`Python 3`,`Django Framework`,`SQLite`,`User Auth`,`Django ORM`,`HTML/CSS`],repoUrl:`https://github.com/peaush07/to-do-list`}},t=document.getElementById(`project-search-input`),n=document.querySelectorAll(`.filter-btn`),r=document.querySelectorAll(`.project-card`);t&&t.addEventListener(`input`,e=>{let t=e.target.value.toLowerCase();r.forEach(e=>{let n=e.querySelector(`h4`)?.textContent.toLowerCase()||``,r=e.querySelector(`p`)?.textContent.toLowerCase()||``;n.includes(t)||r.includes(t)?e.style.display=`flex`:e.style.display=`none`})}),n.forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget,i=t.dataset.lang;n.forEach(e=>{e.classList.remove(`bg-violet-500/30`,`text-violet-200`,`border-violet-400/50`,`active-filter`,`shadow-[0_0_12px_rgba(139,92,246,0.4)]`),e.classList.add(`text-white/80`)}),t.classList.add(`bg-violet-500/30`,`text-violet-200`,`border-violet-400/50`,`active-filter`,`shadow-[0_0_12px_rgba(139,92,246,0.4)]`),t.classList.remove(`text-white/80`),r.forEach(e=>{i===`all`||e.dataset.lang===i?e.style.display=`flex`:e.style.display=`none`})})});var i=document.getElementById(`project-modal-backdrop`),a=document.getElementById(`project-modal-card`),o=document.getElementById(`close-modal-btn`),s=document.getElementById(`modal-close-footer`),c=document.getElementById(`modal-title`),l=document.getElementById(`modal-category`),u=document.getElementById(`modal-tagline`),d=document.getElementById(`modal-what-we-done`),f=document.getElementById(`modal-how-to-use`),p=document.getElementById(`modal-tech-stack`),m=document.getElementById(`modal-github-link`);function h(t){let n=e[t];n&&(c.textContent=n.title,l.textContent=n.category,u.textContent=n.tagline,d.textContent=n.whatWeDone,f.textContent=n.howToUse,m&&n.repoUrl&&(m.href=n.repoUrl),p.innerHTML=``,n.techs.forEach(e=>{let t=document.createElement(`span`);t.className=`text-[11px] font-mono font-semibold text-purple-200 bg-purple-500/20 px-3 py-1 rounded-lg border border-purple-400/30`,t.textContent=e,p.appendChild(t)}),g(t,n),i.classList.remove(`hidden`),requestAnimationFrame(()=>{i.classList.remove(`opacity-0`),a.classList.remove(`scale-95`),a.classList.add(`scale-100`)}),document.body.style.overflow=`hidden`)}function g(e,t){let n=document.getElementById(`modal-demo-interactive`),r=document.getElementById(`modal-demo-canvas`);n&&r&&(n.innerHTML=``,r.classList.add(`hidden`),e===`aim-trainer`?(n.innerHTML=`
        <div class="space-y-2">
          <p class="text-xs text-fuchsia-300 font-mono">🎯 AIM TRAINER MINI-GAME: Click targets to test your reaction speed!</p>
          <div class="flex items-center justify-center gap-4 text-xs font-mono text-white">
            <span>SCORE: <strong id="aim-score" class="text-emerald-400">0</strong></span>
            <span>ACCURACY: <strong id="aim-acc" class="text-violet-400">100%</strong></span>
          </div>
        </div>
      `,r.classList.remove(`hidden`),_(r)):e===`cyber-neon-runner`||e===`retro-game`?(n.innerHTML=`
        <div class="space-y-2">
          <p class="text-xs text-fuchsia-300 font-mono">🏃 2D ARCADE RUNNER: Click or Press [SPACE] to Jump over obstacles!</p>
          <div class="flex items-center justify-center gap-4 text-xs font-mono text-white">
            <span>DISTANCE: <strong id="runner-score" class="text-fuchsia-400">0m</strong></span>
            <span>SPEED: <strong class="text-purple-400">60 FPS</strong></span>
          </div>
        </div>
      `,r.classList.remove(`hidden`),v(r)):n.innerHTML=`
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
      `)}function _(e){let t=e.getContext(`2d`);if(!t)return;e.width=e.parentElement?.clientWidth||400,e.height=160;let n=0,r=0,i={x:e.width/2,y:e.height/2,radius:22};function a(){i.x=Math.random()*(e.width-60)+30,i.y=Math.random()*(e.height-60)+30,i.radius=22}function o(){t.clearRect(0,0,e.width,e.height),t.fillStyle=`rgba(232, 121, 249, 0.2)`,t.beginPath(),t.arc(i.x,i.y,i.radius+6,0,Math.PI*2),t.fill(),t.fillStyle=`#C084FC`,t.beginPath(),t.arc(i.x,i.y,i.radius,0,Math.PI*2),t.fill(),t.fillStyle=`#FFFFFF`,t.beginPath(),t.arc(i.x,i.y,6,0,Math.PI*2),t.fill()}let s=(t,s)=>{r++;let c=e.getBoundingClientRect(),l=t-c.left,u=s-c.top;Math.hypot(l-i.x,u-i.y)<=i.radius&&(n++,a());let d=document.getElementById(`aim-score`),f=document.getElementById(`aim-acc`);d&&(d.textContent=n.toString()),f&&(f.textContent=`${Math.round(n/r*100)}%`),o()};e.onclick=e=>s(e.clientX,e.clientY),e.ontouchstart=e=>{e.touches.length>0&&(e.preventDefault(),s(e.touches[0].clientX,e.touches[0].clientY))},o()}function v(e){let t=e.getContext(`2d`);if(!t)return;e.width=e.parentElement?.clientWidth||400,e.height=160;let n=110,r=0,i=!1,a=0,o=e.width+50;function s(){if(!e.classList.contains(`hidden`)){if(t.clearRect(0,0,e.width,e.height),t.strokeStyle=`#8B5CF6`,t.lineWidth=2,t.beginPath(),t.moveTo(0,135),t.lineTo(e.width,135),t.stroke(),r+=.8,n+=r,n>=110&&(n=110,r=0,i=!1),t.fillStyle=`#C084FC`,t.fillRect(40,n,20,25),o-=4,o<-20){o=e.width+Math.random()*100,a+=10;let t=document.getElementById(`runner-score`);t&&(t.textContent=`${a}m`)}t.fillStyle=`#F43F5E`,t.fillRect(o,115,15,20),requestAnimationFrame(s)}}let c=()=>{i||=(r=-12,!0)};e.addEventListener(`click`,c,{passive:!0}),e.addEventListener(`touchstart`,e=>{e.preventDefault(),c()},{passive:!1}),window.addEventListener(`keydown`,t=>{t.code===`Space`&&e&&!e.classList.contains(`hidden`)&&(t.preventDefault(),c())}),s()}function y(){i.classList.add(`opacity-0`),a.classList.remove(`scale-100`),a.classList.add(`scale-95`),setTimeout(()=>{i.classList.add(`hidden`),document.body.style.overflow=``},300)}document.querySelectorAll(`.open-details-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.dataset.modalTrigger;h(t)})}),o&&o.addEventListener(`click`,y),s&&s.addEventListener(`click`,y),i&&i.addEventListener(`click`,e=>{e.target===i&&y()}),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&i&&!i.classList.contains(`hidden`)&&y()});var b=document.getElementById(`copy-terminal-btn`),x=document.getElementById(`copy-btn-text`);b&&b.addEventListener(`click`,async()=>{let e=f?.textContent||``;if(e)try{await navigator.clipboard.writeText(e),b.classList.remove(`bg-violet-600/30`,`text-violet-200`,`border-violet-400/60`),b.classList.add(`bg-emerald-500/40`,`text-emerald-200`,`border-emerald-400`,`shadow-[0_0_25px_rgba(52,211,153,0.6)]`,`scale-105`),x&&(x.textContent=`✓ COPIED TO CLIPBOARD!`),setTimeout(()=>{b.classList.remove(`bg-emerald-500/40`,`text-emerald-200`,`border-emerald-400`,`shadow-[0_0_25px_rgba(52,211,153,0.6)]`,`scale-105`),b.classList.add(`bg-violet-600/30`,`text-violet-200`,`border-violet-400/60`),x&&(x.textContent=`📋 Copy & Run in Terminal`)},2e3)}catch(e){console.error(`Failed to copy terminal commands: `,e)}});