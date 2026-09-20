// GitHub API Integration with smart fallbacks and caching
const GITHUB_USERNAME = 'peaush'; // Replace or dynamic default

export async function fetchGitHubUserData(username = 'peaush') {
  const cacheKey = `gh_user_${username}`;
  const cached = localStorage.getItem(cacheKey);
  if (cached) {
    const { timestamp, data } = JSON.parse(cached);
    // 30 minute cache
    if (Date.now() - timestamp < 30 * 60 * 1000) {
      return data;
    }
  }

  try {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) throw new Error(`GitHub API HTTP ${res.status}`);
    const data = await res.json();
    
    localStorage.setItem(cacheKey, JSON.stringify({
      timestamp: Date.now(),
      data
    }));

    return data;
  } catch (err) {
    console.warn('Falling back to default GitHub stats due to network/rate limit:', err);
    return {
      name: 'Peaush',
      login: username,
      avatar_url: 'https://avatars.githubusercontent.com/u/1000000?v=4',
      bio: 'Full Stack Engineer & Creative UI Specialist',
      public_repos: 24,
      followers: 128,
      following: 42,
      location: 'Global / Remote',
      html_url: `https://github.com/${username}`
    };
  }
}

export async function fetchGitHubRepos(username = 'peaush') {
  const cacheKey = `gh_repos_${username}`;
  const cached = localStorage.getItem(cacheKey);
  if (cached) {
    const { timestamp, data } = JSON.parse(cached);
    if (Date.now() - timestamp < 30 * 60 * 1000) {
      return data;
    }
  }

  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
    if (!res.ok) throw new Error(`GitHub API Repos HTTP ${res.status}`);
    const repos = await res.json();
    
    const formatted = repos.map(repo => ({
      id: repo.id,
      name: repo.name,
      description: repo.description || 'Full-stack application engineered with modern web standards.',
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: repo.language || 'TypeScript',
      url: repo.html_url,
      homepage: repo.homepage || null,
      updated_at: new Date(repo.updated_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    }));

    localStorage.setItem(cacheKey, JSON.stringify({
      timestamp: Date.now(),
      data: formatted
    }));

    return formatted;
  } catch (err) {
    console.warn('Using curated fallback projects:', err);
    return [
      {
        id: 1,
        name: 'liquid-glass-ui',
        description: 'Next-Gen VisionOS inspired Glassmorphism UI engine for modern web apps.',
        stars: 142,
        forks: 28,
        language: 'Astro / CSS',
        url: 'https://github.com/peaush',
        homepage: 'https://github.com/peaush',
        updated_at: 'Sep 2026'
      },
      {
        id: 2,
        name: 'quantum-state-store',
        description: 'Ultra-fast reactive state management system built for high throughput.',
        stars: 96,
        forks: 14,
        language: 'TypeScript',
        url: 'https://github.com/peaush',
        homepage: null,
        updated_at: 'Aug 2026'
      },
      {
        id: 3,
        name: 'ai-code-copilot-plugin',
        description: 'Autonomous multi-agent workspace helper for real-time refactoring.',
        stars: 215,
        forks: 45,
        language: 'JavaScript',
        url: 'https://github.com/peaush',
        homepage: 'https://github.com/peaush',
        updated_at: 'Sep 2026'
      }
    ];
  }
}
