var e=document.getElementById(`fedora-terminal-modal`),t=document.getElementById(`fedora-terminal-content`),n=document.getElementById(`close-terminal-btn-x`),r=document.getElementById(`close-terminal-btn-txt`),i=document.getElementById(`min-terminal-btn`),a=document.getElementById(`max-terminal-btn`),o=document.getElementById(`cli-input`),s=document.getElementById(`cli-form`),c=document.getElementById(`cli-history`),l=document.getElementById(`terminal-scroll-body`);function u(){e&&t&&(e.classList.remove(`opacity-0`,`invisible`,`pointer-events-none`),e.classList.add(`opacity-100`,`visible`,`pointer-events-auto`),e.setAttribute(`aria-hidden`,`false`),t.classList.remove(`scale-95`),t.classList.add(`scale-100`),o&&setTimeout(()=>o.focus(),100))}function d(){e&&t&&(t.classList.remove(`scale-100`),t.classList.add(`scale-95`),e.classList.remove(`opacity-100`,`visible`,`pointer-events-auto`),e.classList.add(`opacity-0`,`invisible`,`pointer-events-none`),e.setAttribute(`aria-hidden`,`true`))}window.addEventListener(`open-fedora-terminal`,u),n&&n.addEventListener(`click`,d),r&&r.addEventListener(`click`,d),i&&c&&i.addEventListener(`click`,()=>{c.innerHTML=``}),a&&t&&a.addEventListener(`click`,()=>{t.classList.toggle(`max-w-7xl`),t.classList.toggle(`max-w-4xl`)}),e&&e.addEventListener(`click`,t=>{t.target===e&&d()}),o&&s&&c&&l&&(s.addEventListener(`submit`,e=>{e.preventDefault();let t=o.value.trim(),n=t.toLowerCase();if(!n)return;let r=document.createElement(`div`);r.className=`space-y-0.5 pt-2`,r.innerHTML=`
        <div class="text-purple-400 select-none">
          ┌──(<span class="text-purple-300 italic font-bold">peaush</span><span class="mx-1 px-1.5 py-0.2 rounded-full bg-purple-600 text-white text-[9px] font-bold">f</span><span class="text-purple-300 italic font-bold">fedora</span>)<span class="text-purple-400">-</span>[<span class="text-purple-300 font-bold">~</span>]
        </div>
        <div class="flex items-center gap-2">
          <span class="text-purple-400 shrink-0 select-none">└─<span class="text-white font-bold">$</span></span>
          <span class="text-purple-200 font-bold">${t}</span>
        </div>
      `,c.appendChild(r);let i=document.createElement(`div`);if(i.className=`text-slate-300 font-mono text-xs sm:text-sm pl-2 border-l-2 border-purple-500/50 py-1 space-y-1`,n===`help`)i.innerHTML=`
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
        `;else if(n===`sudo hire`||n.includes(`hire`))i.innerHTML=`
          <div class="text-emerald-400 font-bold">ACCESS GRANTED! [SUDO_HIRE_MODE ACTIVE]</div>
          <div>🚀 Thank you for considering Peaush Paul!</div>
          <div>• Email: <span class="text-white underline">peaushpaul99@gmail.com</span></div>
          <div>• Direct Contact: Reach out on LinkedIn @peaush07 or via GitHub</div>
          <div class="text-purple-300 font-bold pt-1">[STATUS: Available for Software Engineer & Systems Architect Roles]</div>
        `;else if(n===`matrix`)i.innerHTML=`
          <div class="text-emerald-400 font-bold">STARTING CYBER MATRIX STREAM...</div>
          <div class="text-emerald-500 font-mono text-[10px] animate-pulse">01001000 01100101 01101100 01101100 01101111 00101100 00100000 01010111 01101111 01110010 01101100 01100100 00100001</div>
          <div class="text-emerald-400 text-xs font-mono">System initialized at 120Hz locked frame budget.</div>
        `;else if(n.includes(`doctor`)||n.includes(`jan`))i.innerHTML=`
          <div class="text-purple-300 font-bold">[DOCTOR] Inspecting repository internals:</div>
          <div>HEAD: refs/heads/main → <span class="text-purple-400 font-bold">d200101...</span> [<span class="text-purple-300 font-bold">OK</span>]</div>
          <div>Packed refs: <span class="text-purple-300 font-bold">42 references resolved</span> [<span class="text-purple-300 font-bold">OK</span>]</div>
          <div>Index entries: <span class="text-violet-300 font-bold">1,842 tracked files</span> [<span class="text-purple-300 font-bold">OK</span>]</div>
          <div>Integrity: <span class="text-purple-300 font-bold">100% verified</span> (Direct disk read, zero-exec)</div>
        `;else if(n===`skills`)i.innerHTML=`
          <div class="text-purple-400 font-bold">SKILLS & TECH MATRIX:</div>
          <div>• Languages: Go (Golang), TypeScript, Python, C++, Dart, JavaScript</div>
          <div>• Frontend: Next.js, React, Tailwind CSS, HTML5, CSS3</div>
          <div>• Systems & DevOps: Linux CLI, Docker, Kubernetes, MCP Servers, Microservices</div>
          <div>• OS & Editors: Fedora Linux 44, NeoVim, VS Code, KDE Plasma</div>
        `;else if(n===`projects`)i.innerHTML=`
          <div class="text-violet-400 font-bold">PEAUSH'S FEATURED REPOSITORIES (@peaush07):</div>
          <div>1. Nextjs AI Analytics Dashboard (TypeScript)</div>
          <div>2. Go Distributed KV Store (Go / Raft)</div>
          <div>3. Flutter Microservices Wallet (Dart)</div>
          <div>4. Cyber Neon Runner Engine (Python)</div>
          <div>5. C++ Async Engine (C++20)</div>
          <div>6. TUF Supply Chain Security Demo (Python)</div>
        `;else if(n===`whoami`||n===`about`)i.innerHTML=`
          <div class="text-purple-300 font-bold">PEAUSH PAUL (@peaush07)</div>
          <div>Full Stack & Systems Developer based in Kolkata, India.</div>
          <div>Pursuing BCA at Techno Main Salt Lake (Class of 2024–2028).</div>
          <div>Focused on high-performance backends, open-source tools & AI architectures.</div>
        `;else if(n===`contact`)i.innerHTML=`
          <div class="text-purple-300 font-bold">CONTACT INFO:</div>
          <div>• Email: peaushpaul99@gmail.com</div>
          <div>• GitHub: https://github.com/peaush07</div>
          <div>• LinkedIn: https://www.linkedin.com/in/peaush07/</div>
          <div>• Location: Kolkata, India 🇮🇳</div>
        `;else if(n===`clear`){c.innerHTML=``,o.value=``;return}else if(n===`exit`){d(),o.value=``;return}else i.innerHTML=n===`fastfetch`||n===`neofetch`?`
          <div class="text-purple-300 font-bold">peaush@fedora — Fedora Linux 44 x86_64</div>
          <div>CPU: 13th Gen Intel i5-13420H (12 cores @ 4.60 GHz)</div>
          <div>GPU: NVIDIA RTX 4050 Discrete + Intel UHD</div>
          <div>RAM: 15.25 GiB DDR5 | Kernel: 7.2.5-200.fc44</div>
        `:`<span class="text-red-400">zsh: command not found: ${t}</span>. Type <span class="text-purple-300 font-bold">help</span> for command list.`;c.appendChild(i),o.value=``,l.scrollTop=l.scrollHeight}),document.querySelectorAll(`.quick-cmd-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.getAttribute(`data-cmd`);t&&o&&(o.value=t,s.dispatchEvent(new Event(`submit`,{cancelable:!0,bubbles:!0})))})}));