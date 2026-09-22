import{t as e}from"./sound-fx.C4YthlLM.js";var t=document.getElementById(`fedora-terminal-modal`),n=document.getElementById(`fedora-terminal-content`),r=document.getElementById(`close-terminal-btn-x`),i=document.getElementById(`close-terminal-btn-txt`),a=document.getElementById(`min-terminal-btn`),o=document.getElementById(`max-terminal-btn`),s=document.getElementById(`cli-input`),c=document.getElementById(`cli-form`),l=document.getElementById(`cli-history`),u=document.getElementById(`terminal-scroll-body`);function d(){t&&n&&(e.playModalOpen(),t.classList.remove(`opacity-0`,`invisible`,`pointer-events-none`),t.classList.add(`opacity-100`,`visible`,`pointer-events-auto`),t.setAttribute(`aria-hidden`,`false`),n.classList.remove(`scale-95`),n.classList.add(`scale-100`),s&&setTimeout(()=>s.focus(),100))}function f(){t&&n&&(e.playClick(),n.classList.remove(`scale-100`),n.classList.add(`scale-95`),t.classList.remove(`opacity-100`,`visible`,`pointer-events-auto`),t.classList.add(`opacity-0`,`invisible`,`pointer-events-none`),t.setAttribute(`aria-hidden`,`true`))}window.addEventListener(`open-fedora-terminal`,d),r&&r.addEventListener(`click`,f),i&&i.addEventListener(`click`,f),a&&l&&a.addEventListener(`click`,()=>{e.playClick(),l.innerHTML=``}),o&&n&&o.addEventListener(`click`,()=>{e.playClick(),n.classList.toggle(`max-w-7xl`),n.classList.toggle(`max-w-4xl`)}),t&&t.addEventListener(`click`,e=>{e.target===t&&f()}),s&&c&&l&&u&&(s.addEventListener(`keydown`,()=>e.playKeypress()),c.addEventListener(`submit`,t=>{t.preventDefault();let n=s.value.trim(),r=n.toLowerCase();if(!r)return;e.playClick();let i=document.createElement(`div`);i.className=`space-y-0.5 pt-2`,i.innerHTML=`
        <div class="text-purple-400 select-none">
          ┌──(<span class="text-purple-300 italic font-bold">peaush</span><span class="mx-1 px-1.5 py-0.2 rounded-full bg-purple-600 text-white text-[9px] font-bold">f</span><span class="text-purple-300 italic font-bold">fedora</span>)<span class="text-purple-400">-</span>[<span class="text-purple-300 font-bold">~</span>]
        </div>
        <div class="flex items-center gap-2">
          <span class="text-purple-400 shrink-0 select-none">└─<span class="text-white font-bold">$</span></span>
          <span class="text-purple-200 font-bold">${n}</span>
        </div>
      `,l.appendChild(i);let a=document.createElement(`div`);if(a.className=`text-slate-300 font-mono text-xs sm:text-sm pl-2 border-l-2 border-purple-500/50 py-1 space-y-1`,r===`help`)a.innerHTML=`
          <div class="text-purple-300 font-bold">AVAILABLE CLI COMMANDS:</div>
          <div><span class="text-purple-300 font-bold">fastfetch / neofetch</span> - Display Fedora Linux system specifications</div>
          <div><span class="text-purple-300 font-bold">skills</span> - List developer skill matrix & tech stack</div>
          <div><span class="text-purple-300 font-bold">projects</span> - Output open-source GitHub repositories</div>
          <div><span class="text-purple-300 font-bold">whoami / about</span> - Display developer profile summary</div>
          <div><span class="text-purple-300 font-bold">sudo hire</span> - Executive recruiter direct hire mode</div>
          <div><span class="text-purple-300 font-bold">matrix</span> - Digital cyber rain stream animation</div>
          <div><span class="text-purple-300 font-bold">contact</span> - Output email & social handles</div>
          <div><span class="text-purple-300 font-bold">clear</span> - Clear terminal output buffer</div>
          <div><span class="text-purple-300 font-bold">exit</span> - Close terminal window</div>
        `;else if(r===`sudo hire`||r.includes(`hire`))e.playSuccess(),a.innerHTML=`
          <div class="text-emerald-400 font-bold">ACCESS GRANTED! [SUDO_HIRE_MODE ACTIVE]</div>
          <div>🚀 Thank you for considering Peaush Paul!</div>
          <div>• Email: <span class="text-white underline">peaushpaul99@gmail.com</span></div>
          <div>• Direct Contact: Reach out on LinkedIn @peaush07 or via GitHub</div>
          <div class="text-purple-300 font-bold pt-1">[STATUS: Available for Software Engineer & Systems Architect Roles]</div>
        `;else if(r===`matrix`)a.innerHTML=`
          <div class="text-emerald-400 font-bold">STARTING CYBER MATRIX STREAM...</div>
          <div class="text-emerald-500 font-mono text-[10px] animate-pulse">01001000 01100101 01101100 01101100 01101111 00101100 00100000 01010111 01101111 01110010 01101100 01100100 00100001</div>
          <div class="text-emerald-400 text-xs font-mono">System initialized at 120Hz locked frame budget.</div>
        `;else if(r.includes(`doctor`)||r.includes(`jan`))a.innerHTML=`
          <div class="text-purple-300 font-bold">[DOCTOR] Inspecting repository internals:</div>
          <div>HEAD: refs/heads/main → <span class="text-purple-400 font-bold">d200101...</span> [<span class="text-purple-300 font-bold">OK</span>]</div>
          <div>Packed refs: <span class="text-purple-300 font-bold">42 references resolved</span> [<span class="text-purple-300 font-bold">OK</span>]</div>
          <div>Index entries: <span class="text-violet-300 font-bold">1,842 tracked files</span> [<span class="text-purple-300 font-bold">OK</span>]</div>
          <div>Integrity: <span class="text-purple-300 font-bold">100% verified</span> (Direct disk read, zero-exec)</div>
        `;else if(r===`skills`)a.innerHTML=`
          <div class="text-purple-400 font-bold">SKILLS & TECH MATRIX:</div>
          <div>• Languages: Go (Golang), TypeScript, Python, C++, Dart, JavaScript</div>
          <div>• Frontend: Next.js, React, Tailwind CSS, HTML5, CSS3</div>
          <div>• Systems & DevOps: Linux CLI, Docker, Kubernetes, MCP Servers, Microservices</div>
          <div>• OS & Editors: Fedora Linux 44, NeoVim, VS Code, KDE Plasma</div>
        `;else if(r===`projects`)a.innerHTML=`
          <div class="text-violet-400 font-bold">PEAUSH'S FEATURED REPOSITORIES (@peaush07):</div>
          <div>1. Nextjs AI Analytics Dashboard (TypeScript)</div>
          <div>2. Go Distributed KV Store (Go / Raft)</div>
          <div>3. Flutter Microservices Wallet (Dart)</div>
          <div>4. Cyber Neon Runner Engine (Python)</div>
          <div>5. C++ Async Engine (C++20)</div>
          <div>6. TUF Supply Chain Security Demo (Python)</div>
        `;else if(r===`whoami`||r===`about`)a.innerHTML=`
          <div class="text-purple-300 font-bold">PEAUSH PAUL (@peaush07)</div>
          <div>Full Stack & Systems Developer based in Kolkata, India.</div>
          <div>Pursuing BCA at Techno Main Salt Lake (Class of 2024–2028).</div>
          <div>Focused on high-performance backends, open-source tools & AI architectures.</div>
        `;else if(r===`contact`)a.innerHTML=`
          <div class="text-purple-300 font-bold">CONTACT INFO:</div>
          <div>• Email: peaushpaul99@gmail.com</div>
          <div>• GitHub: https://github.com/peaush07</div>
          <div>• LinkedIn: https://www.linkedin.com/in/peaush07/</div>
          <div>• Location: Kolkata, India 🇮🇳</div>
        `;else if(r===`clear`){l.innerHTML=``,s.value=``;return}else if(r===`exit`){f(),s.value=``;return}else a.innerHTML=r===`fastfetch`||r===`neofetch`?`
          <div class="text-purple-300 font-bold">peaush@fedora — Fedora Linux 44 x86_64</div>
          <div>CPU: 13th Gen Intel i5-13420H (12 cores @ 4.60 GHz)</div>
          <div>GPU: NVIDIA RTX 4050 Discrete + Intel UHD</div>
          <div>RAM: 15.25 GiB DDR5 | Kernel: 7.2.5-200.fc44</div>
        `:`<span class="text-red-400">zsh: command not found: ${n}</span>. Type <span class="text-purple-300 font-bold">help</span> for command list.`;l.appendChild(a),s.value=``,u.scrollTop=u.scrollHeight}),document.querySelectorAll(`.quick-cmd-btn`).forEach(t=>{t.addEventListener(`click`,t=>{e.playClick();let n=t.currentTarget.getAttribute(`data-cmd`);n&&s&&(s.value=n,c.dispatchEvent(new Event(`submit`,{cancelable:!0,bubbles:!0})))})}));