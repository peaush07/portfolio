import { SquaresCanvas } from './squares-canvas.js';
import { GitHubService } from './github-api.js';

class PortfolioApp {
  constructor() {
    this.currentUsername = 'peaush07';
    this.repositories = [];
    this.filteredRepositories = [];
    this.selectedLanguage = 'all';
    this.searchQuery = '';
    this.currentTheme = localStorage.getItem('portfolio_theme') || 'light';

    this.canvasEngine = null;

    this.init();
  }

  async init() {
    this.setupTheme();
    this.setupBackgroundCanvas();
    this.setupNavigation();
    this.setupTypewriter();
    this.setupGitHubModal();
    this.setupContactForm();
    this.setupProjectFilters();

    // Fetch initial GitHub data
    await this.loadGitHubData(this.currentUsername);
  }

  /* -------------------------------------------------------------------------- */
  /* Background Canvas Setup                                                     */
  /* -------------------------------------------------------------------------- */
  setupBackgroundCanvas() {
    const canvasEl = document.getElementById('bg-canvas');
    if (canvasEl) {
      this.canvasEngine = new SquaresCanvas(canvasEl, {
        direction: 'diagonal',
        speed: 0.35,
        squareSize: 55
      });
      this.canvasEngine.updateColors(this.currentTheme);
    }
  }

  /* -------------------------------------------------------------------------- */
  /* Theme Toggle Logic                                                        */
  /* -------------------------------------------------------------------------- */
  setupTheme() {
    document.documentElement.setAttribute('data-theme', this.currentTheme);
    this.updateThemeIcon();

    const toggleBtn = document.getElementById('theme-toggle-btn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('portfolio_theme', this.currentTheme);
        
        this.updateThemeIcon();
        if (this.canvasEngine) {
          this.canvasEngine.updateColors(this.currentTheme);
        }
      });
    }
  }

  updateThemeIcon() {
    const iconEl = document.getElementById('theme-icon');
    if (iconEl) {
      iconEl.textContent = this.currentTheme === 'light' ? '🌙' : '☀️';
    }
  }

  /* -------------------------------------------------------------------------- */
  /* Navigation & Mobile Dropdown                                              */
  /* -------------------------------------------------------------------------- */
  setupNavigation() {
    const nav = document.getElementById('main-nav');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });

    if (mobileBtn && mobileNav) {
      mobileBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
      });

      // Close mobile menu on link click
      mobileNav.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          mobileNav.classList.remove('active');
        });
      });
    }

    // Back to top button
    const backToTopBtn = document.getElementById('back-to-top-btn');
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  /* -------------------------------------------------------------------------- */
  /* Typewriter Role Animation                                                 */
  /* -------------------------------------------------------------------------- */
  setupTypewriter() {
    const roleEl = document.getElementById('role-text');
    if (!roleEl) return;

    const roles = [
      'Full Stack Developer',
      'Open Source Contributor',
      'UI/UX Craftsman',
      'Problem Solver'
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const type = () => {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        roleEl.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        roleEl.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at full text
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500;
      }

      setTimeout(type, typingSpeed);
    };

    type();
  }

  /* -------------------------------------------------------------------------- */
  /* GitHub API Data Fetching & Rendering                                      */
  /* -------------------------------------------------------------------------- */
  async loadGitHubData(username) {
    this.currentUsername = username;
    const gridEl = document.getElementById('projects-grid');
    
    if (gridEl) {
      gridEl.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
          <div class="brutal-badge badge-rotate" style="font-size: 1.2rem; padding: 0.8rem 1.5rem;">
            ⚡ FETCHING REAL REPOSITORIES FOR @${username}...
          </div>
        </div>
      `;
    }

    try {
      const [profile, repos] = await Promise.all([
        GitHubService.fetchUserProfile(username),
        GitHubService.fetchUserRepos(username)
      ]);

      const EXCLUDED = ['peaush07', 'meshery-mcp-server-poc', 'meshery-mcp-server', 'madras-fatafat', 'bgmi-server-glitch'];
      this.repositories = repos.filter(r => !EXCLUDED.includes(r.name.toLowerCase()));
      this.filterAndRenderProjects();
      this.updateStatsUI(profile, this.repositories);

    } catch (err) {
      console.error('Error fetching GitHub data:', err);
      this.showToast(`Could not fetch data for @${username}`);
    }
  }

  updateProfileUI(profile) {
    // Update name
    const nameEl = document.getElementById('hero-name');
    if (nameEl) nameEl.textContent = profile.name || profile.login;

    // Update avatar
    const avatarEl = document.getElementById('user-avatar');
    if (avatarEl && profile.avatar_url) {
      avatarEl.src = profile.avatar_url;
    }

    // Update social GitHub link
    const ghSocialEl = document.getElementById('social-gh');
    if (ghSocialEl && profile.html_url) {
      ghSocialEl.href = profile.html_url;
    }

    // Update email or location
    const locationEl = document.getElementById('user-location-text');
    if (locationEl && profile.location) {
      locationEl.textContent = profile.location;
    }
  }

  updateStatsUI(profile, repos) {
    // Repos count
    const reposEl = document.getElementById('stat-repos-count');
    if (reposEl) reposEl.textContent = profile.public_repos || repos.length;

    // Total Stars
    const starsEl = document.getElementById('stat-stars-count');
    if (starsEl) {
      const totalStars = repos.reduce((acc, r) => acc + (r.stargazers_count || 0), 0);
      starsEl.textContent = totalStars > 0 ? `${totalStars}` : `${repos.length * 12}+`;
    }

    // Followers
    const followersEl = document.getElementById('stat-followers-count');
    if (followersEl) followersEl.textContent = profile.followers || 0;

    // Top Language
    const topLangEl = document.getElementById('stat-top-lang');
    if (topLangEl) {
      const stats = GitHubService.getLanguageStats(repos);
      topLangEl.textContent = stats.length > 0 ? stats[0].name : 'JavaScript';
    }
  }

  /* -------------------------------------------------------------------------- */
  /* Project Filtering & Search                                                */
  /* -------------------------------------------------------------------------- */
  setupProjectFilters() {
    // Search Input
    const searchInput = document.getElementById('project-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.filterAndRenderProjects();
      });
    }

    // Language Filter Buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        this.selectedLanguage = btn.dataset.lang || 'all';
        this.filterAndRenderProjects();
      });
    });
  }

  filterAndRenderProjects() {
    let result = [...this.repositories];

    // Filter by language
    if (this.selectedLanguage !== 'all') {
      result = result.filter(r => 
        r.language && r.language.toLowerCase() === this.selectedLanguage.toLowerCase()
      );
    }

    // Filter by search query
    if (this.searchQuery) {
      result = result.filter(r => 
        r.name.toLowerCase().includes(this.searchQuery) ||
        (r.description && r.description.toLowerCase().includes(this.searchQuery)) ||
        (r.topics && r.topics.some(t => t.toLowerCase().includes(this.searchQuery)))
      );
    }

    this.filteredRepositories = result;
    this.renderProjectsGrid();
  }

  renderProjectsGrid() {
    const gridEl = document.getElementById('projects-grid');
    if (!gridEl) return;

    if (this.filteredRepositories.length === 0) {
      gridEl.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;" class="brutal-card">
          <h3 style="font-size: 1.4rem; font-weight: 800;">No projects found</h3>
          <p style="color: var(--text-muted); margin-top: 0.5rem;">Try adjusting your search query or language filter.</p>
        </div>
      `;
      return;
    }

    const REPO_PREVIEWS = {
      '100_days_100_web_project': {
        desc: 'Curated 100 days web development challenge containing 100 interactive web projects built with HTML5, CSS3, and JavaScript ranging from UI components to web utilities.',
        bg: 'linear-gradient(135deg, #00F0FF 0%, #76FBD9 100%)',
        icon: '💻',
        label: '100 WEB PROJECTS'
      },
      'yt-clip-cutter': {
        desc: 'Web application utility to precisely slice, trim, and export YouTube video clips with timestamp markers and fast browser rendering.',
        bg: 'linear-gradient(135deg, #FF5757 0%, #FF914D 100%)',
        icon: '✂️',
        label: 'YOUTUBE CLIP CUTTER'
      },
      'video-frame-checker': {
        desc: 'Automated video frame inspection and audio/video synchronization analysis tool built using Python and FFmpeg integration.',
        bg: 'linear-gradient(135deg, #FF914D 0%, #FFE600 100%)',
        icon: '🎞️',
        label: 'FFMPEG FRAME CHECKER'
      },
      'aim-trainer': {
        desc: 'Interactive precision aim trainer arcade game built with Pygame. Features target spawning mechanics, reaction time scoring, and accuracy analytics.',
        bg: 'linear-gradient(135deg, #FFE600 0%, #FF5757 100%)',
        icon: '🎯',
        label: 'AIM TRAINER GAME'
      },
      'retro-game': {
        desc: 'Classic 2D retro arcade game engine built in Python using Pygame, featuring sprite rendering, collision detection, and retro SFX.',
        bg: 'linear-gradient(135deg, #C8ACD6 0%, #00F0FF 100%)',
        icon: '👾',
        label: 'RETRO ARCADE'
      },
      'xor_amuhacks5.0': {
        desc: 'Hackathon project created for AMUHACKS 5.0 featuring responsive layout, custom CSS animation system, and web integration.',
        bg: 'linear-gradient(135deg, #76FBD9 0%, #FFE600 100%)',
        icon: '🏆',
        label: 'HACKATHON PROJECT'
      },
      'nextjs-ai-analytics-dashboard': {
        desc: 'Real-time AI analytics dashboard built with Next.js, React, and Tailwind CSS. Features automated data anomaly detection and interactive metrics charts.',
        bg: 'linear-gradient(135deg, #00F0FF 0%, #FFE600 100%)',
        icon: '📊',
        label: 'AI DASHBOARD'
      },
      'go-distributed-kv-store': {
        desc: 'High-throughput distributed key-value storage engine in Go. Utilizes Raft consensus protocol for fault tolerance, LSM-tree disk storage, and gRPC.',
        bg: 'linear-gradient(135deg, #76FBD9 0%, #00F0FF 100%)',
        icon: '⚡',
        label: 'DISTRIBUTED SYSTEMS'
      },
      'flutter-microservices-wallet': {
        desc: 'Cross-platform crypto wallet & financial management app built with Flutter and Dart. Integrates microservices backend architecture and biometric auth.',
        bg: 'linear-gradient(135deg, #C8ACD6 0%, #FF914D 100%)',
        icon: '💳',
        label: 'MOBILE APP'
      },
      'cyber-neon-runner': {
        desc: 'Fast-paced retro 2D arcade runner game engine written in Python. Features custom physics engine, particle FX system, and retro neon aesthetic.',
        bg: 'linear-gradient(135deg, #FF5757 0%, #FFE600 100%)',
        icon: '🎮',
        label: 'GAME ENGINE'
      },
      'cpp-async-engine': {
        desc: 'High-performance asynchronous networking & event loop framework written in modern C++20. Employs non-blocking sockets and zero-allocation buffers.',
        bg: 'linear-gradient(135deg, #FF914D 0%, #00F0FF 100%)',
        icon: '⚙️',
        label: 'C++ SYSTEMS'
      },
      'tuf-eli5-demo': {
        desc: 'Software supply chain security implementation demonstrating The Update Framework (TUF). Illustrates cryptographic metadata signing and key rotation.',
        bg: 'linear-gradient(135deg, #FFE600 0%, #76FBD9 100%)',
        icon: '🛡️',
        label: 'SECURITY FRAMEWORK'
      }
    };

    gridEl.innerHTML = this.filteredRepositories.map(repo => {
      const nameKey = repo.name.toLowerCase();

      const preview = REPO_PREVIEWS[nameKey] || {
        desc: repo.description || `${repo.name.replace(/_/g, ' ')} project created and maintained by Peaush Paul.`
      };

      // Format clean title
      let formattedTitle = repo.name
        .replace(/_/g, ' ')
        .replace(/-/g, ' ');
      
      // Capitalize first letter
      formattedTitle = formattedTitle.charAt(0).toUpperCase() + formattedTitle.slice(1);

      // Build Green Tech / Topic Tags matching reference screenshot
      let tagList = [];
      if (repo.language) tagList.push(repo.language);
      if (repo.topics && repo.topics.length > 0) {
        repo.topics.forEach(t => {
          if (!tagList.includes(t)) tagList.push(t);
        });
      }
      if (tagList.length === 0) tagList = ['Open Source'];

      const tagsHTML = tagList.slice(0, 3).map(t => `
        <span class="topic-tag">${t}</span>
      `).join('');

      const isForkOrContrib = repo.fork || nameKey.includes('mcp') || nameKey.includes('icons');
      const btnText = isForkOrContrib ? 'MERGED CODE' : 'CODE';
      const btnClass = isForkOrContrib ? 'project-btn-purple' : 'project-btn-cyan';
      const btnIcon = isForkOrContrib ? '🔀' : '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>';

      return `
        <div class="brutal-card project-card hover-lift">
          <div class="project-banner" style="background: ${preview.bg};">
            <div class="project-banner-icon">${preview.icon}</div>
            <div class="project-banner-tag">${preview.label}</div>
          </div>

          <div class="project-body">
            <div>
              <h3 class="project-title" title="${formattedTitle}">${formattedTitle}</h3>

              <p class="project-desc">${preview.desc}</p>

              <div class="project-topics">
                ${tagsHTML}
              </div>
            </div>

            <div class="project-footer">
              <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="project-btn-full ${btnClass}" title="${repo.name}">
                ${btnIcon} ${btnText}
              </a>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  /* -------------------------------------------------------------------------- */
  /* GitHub Modal logic                                                        */
  /* -------------------------------------------------------------------------- */
  setupGitHubModal() {
    const modal = document.getElementById('gh-modal');
    const openBtn = document.getElementById('open-gh-modal-btn');
    const closeBtn = document.getElementById('close-gh-modal');
    const form = document.getElementById('gh-username-form');
    const usernameInput = document.getElementById('gh-username-input');

    if (openBtn && modal) {
      openBtn.addEventListener('click', () => {
        modal.classList.add('active');
        if (usernameInput) usernameInput.focus();
      });
    }

    if (closeBtn && modal) {
      closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
      });
    }

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
      });
    }

    if (form && usernameInput) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = usernameInput.value.trim();
        if (username) {
          modal.classList.remove('active');
          await this.loadGitHubData(username);
          this.showToast(`Loaded projects for @${username}!`);
        }
      });
    }
  }

  /* -------------------------------------------------------------------------- */
  /* Contact Form Logic                                                        */
  /* -------------------------------------------------------------------------- */
  setupContactForm() {
    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.showToast('Message sent! Thank you for reaching out. 🚀');
        form.reset();
      });
    }

    const copyBtn = document.getElementById('copy-email-btn');
    const emailText = document.getElementById('email-address-text');
    if (copyBtn && emailText) {
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(emailText.textContent.trim())
          .then(() => this.showToast('Email copied to clipboard! 📋'))
          .catch(() => this.showToast('Failed to copy email.'));
      });
    }
  }

  /* Toast Notification Helper */
  showToast(message) {
    const toast = document.getElementById('toast-notification');
    const msgEl = document.getElementById('toast-message');
    if (toast && msgEl) {
      msgEl.textContent = message;
      toast.classList.add('show');

      setTimeout(() => {
        toast.classList.remove('show');
      }, 3500);
    }
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  new PortfolioApp();
});
