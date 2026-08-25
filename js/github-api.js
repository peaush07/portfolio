/**
 * Live GitHub API Service with localStorage Caching & Fallbacks for Peaush Paul (@peaush07)
 */

// Featured repositories for Peaush Paul (@peaush07)
const FALLBACK_REPOS = [
  {
    id: 1,
    name: "nextjs-ai-analytics-dashboard",
    description: "Modern AI-powered analytics dashboard built with Next.js, React, Tailwind CSS, and interactive data visualization.",
    html_url: "https://github.com/peaush07/nextjs-ai-analytics-dashboard",
    homepage: "",
    stargazers_count: 14,
    forks_count: 3,
    language: "TypeScript",
    topics: ["nextjs", "react", "analytics", "dashboard", "tailwind-css"],
    updated_at: "2026-08-25T17:42:00Z"
  },
  {
    id: 2,
    name: "go-distributed-kv-store",
    description: "High-performance distributed key-value storage engine in Go utilizing Raft consensus protocol and LSM trees.",
    html_url: "https://github.com/peaush07/go-distributed-kv-store",
    homepage: "",
    stargazers_count: 22,
    forks_count: 6,
    language: "Go",
    topics: ["golang", "distributed-systems", "raft-consensus", "kv-store"],
    updated_at: "2026-08-25T17:38:00Z"
  },
  {
    id: 3,
    name: "flutter-microservices-wallet",
    description: "Cross-platform mobile crypto wallet application built with Flutter, Dart, and microservices architecture.",
    html_url: "https://github.com/peaush07/flutter-microservices-wallet",
    homepage: "",
    stargazers_count: 18,
    forks_count: 4,
    language: "Dart",
    topics: ["flutter", "dart", "microservices", "wallet", "mobile-app"],
    updated_at: "2026-08-25T17:38:00Z"
  },
  {
    id: 4,
    name: "cyber-neon-runner",
    description: "Fast-paced arcade action game engine with custom physics, particle FX, and retro neon aesthetic.",
    html_url: "https://github.com/peaush07/cyber-neon-runner",
    homepage: "",
    stargazers_count: 11,
    forks_count: 2,
    language: "Python",
    topics: ["python", "pygame", "arcade", "game-engine", "neon"],
    updated_at: "2026-08-25T17:32:00Z"
  },
  {
    id: 5,
    name: "cpp-async-engine",
    description: "High-throughput asynchronous I/O event loop and networking framework written in modern C++20.",
    html_url: "https://github.com/peaush07/cpp-async-engine",
    homepage: "",
    stargazers_count: 19,
    forks_count: 5,
    language: "C++",
    topics: ["cpp", "async", "networking", "systems-programming", "event-loop"],
    updated_at: "2026-08-25T17:26:00Z"
  },
  {
    id: 6,
    name: "tuf-eli5-demo",
    description: "The Update Framework (TUF) interactive demonstration engine & software repository security implementation.",
    html_url: "https://github.com/peaush07/tuf-eli5-demo",
    homepage: "",
    stargazers_count: 15,
    forks_count: 4,
    language: "Python",
    topics: ["tuf", "security", "python", "software-supply-chain"],
    updated_at: "2026-08-21T19:38:00Z"
  }
];

const FALLBACK_PROFILE = {
  login: "peaush07",
  name: "Peaush Paul",
  bio: "Full Stack & Systems Developer contributing to open-source software, cloud native tools, and AI dashboards.",
  avatar_url: "https://avatars.githubusercontent.com/u/231284231?v=4",
  html_url: "https://github.com/peaush07",
  public_repos: 12,
  followers: 24,
  following: 15,
  location: "Kolkata, India"
};

export class GitHubService {
  static CACHE_TTL = 30 * 60 * 1000; // 30 minutes cache

  static async fetchUserProfile(username) {
    const cacheKey = `gh_user_${username}`;
    const cached = this.getCache(cacheKey);
    if (cached) return cached;

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error(`GitHub user ${username} not found (${response.status})`);
      }
      const data = await response.json();
      this.setCache(cacheKey, data);
      return data;
    } catch (err) {
      console.warn(`[GitHub API] Failed to fetch profile for ${username}:`, err.message);
      return { ...FALLBACK_PROFILE, login: username, name: "Peaush Paul" };
    }
  }

  static async fetchUserRepos(username) {
    const cacheKey = `gh_repos_${username}`;
    const cached = this.getCache(cacheKey);
    if (cached) return cached;

    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
      );
      if (!response.ok) {
        throw new Error(`GitHub repos failed (${response.status})`);
      }
      const EXCLUDED_REPOSITORIES = [
        'peaush07',
        'meshery-mcp-server-poc',
        'meshery-mcp-server',
        'madras-fatafat',
        'bgmi-server-glitch'
      ];

      repos = repos
        .filter(repo => !EXCLUDED_REPOSITORIES.includes(repo.name.toLowerCase()))
        .map(repo => ({
          id: repo.id,
          name: repo.name,
          description: repo.description || "Open-source project created and maintained by Peaush Paul.",
          html_url: repo.html_url,
          homepage: repo.homepage || "",
          stargazers_count: repo.stargazers_count || 0,
          forks_count: repo.forks_count || 0,
          language: repo.language || "TypeScript",
          topics: repo.topics || [],
          updated_at: repo.updated_at,
          fork: repo.fork
        }));

      this.setCache(cacheKey, repos);
      return repos;
    } catch (err) {
      console.warn(`[GitHub API] Failed to fetch repos for ${username}:`, err.message);
      return FALLBACK_REPOS;
    }
  }

  static getLanguageStats(repos) {
    const counts = {};
    let total = 0;

    repos.forEach(repo => {
      if (repo.language) {
        counts[repo.language] = (counts[repo.language] || 0) + 1;
        total++;
      }
    });

    const stats = Object.keys(counts).map(lang => ({
      name: lang,
      count: counts[lang],
      percentage: Math.round((counts[lang] / total) * 100)
    }));

    stats.sort((a, b) => b.count - a.count);
    return stats;
  }

  static getCache(key) {
    try {
      const itemStr = localStorage.getItem(key);
      if (!itemStr) return null;
      const item = JSON.parse(itemStr);
      const now = new Date().getTime();
      if (now - item.timestamp > this.CACHE_TTL) {
        localStorage.removeItem(key);
        return null;
      }
      return item.data;
    } catch (e) {
      return null;
    }
  }

  static setCache(key, data) {
    try {
      const item = {
        timestamp: new Date().getTime(),
        data: data
      };
      localStorage.setItem(key, JSON.stringify(item));
    } catch (e) {
      console.warn('localStorage is full or unavailable');
    }
  }
}
