// GitHub API Integration for peaush07 with caching and fallbacks
const GITHUB_USERNAME = 'peaush07';

export async function fetchGitHubUserData(username = GITHUB_USERNAME) {
  const cacheKey = `gh_user_${username}`;
  const cached = localStorage.getItem(cacheKey);
  if (cached) {
    const { timestamp, data } = JSON.parse(cached);
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
    console.warn('Falling back to default GitHub stats for peaush07:', err);
    return {
      name: 'Peaush Paul',
      login: username,
      avatar_url: 'https://avatars.githubusercontent.com/u/231284231?v=4',
      bio: 'Full Stack & Systems Developer pursuing BCA at Techno Main Salt Lake',
      public_repos: 22,
      followers: 66,
      following: 18,
      location: 'Kolkata, West Bengal, India 🇮🇳',
      html_url: `https://github.com/${username}`
    };
  }
}

export async function fetchGitHubRepos(username = GITHUB_USERNAME) {
  const cacheKey = `gh_repos_${username}`;
  const cached = localStorage.getItem(cacheKey);
  if (cached) {
    const { timestamp, data } = JSON.parse(cached);
    if (Date.now() - timestamp < 30 * 60 * 1000) {
      return data;
    }
  }

  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`);
    if (!res.ok) throw new Error(`GitHub API Repos HTTP ${res.status}`);
    const repos = await res.json();
    
    const formatted = repos.map(repo => ({
      id: repo.id,
      name: repo.name,
      description: repo.description || 'Open-source application engineered by Peaush Paul.',
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
    console.warn('Using curated fallback projects for peaush07:', err);
    return [
      {
        id: 1,
        name: 'PORTFOLIO-2.0',
        description: 'VisionOS & iOS 27 inspired Liquid Glassmorphism Portfolio built with Astro, Tailwind & Lenis.',
        stars: 12,
        forks: 3,
        language: 'Astro',
        url: 'https://github.com/peaush07/PORTFOLIO-2.0',
        homepage: 'https://peaush.is-a.dev',
        updated_at: 'Sep 2026'
      },
      {
        id: 2,
        name: 'go-distributed-kvstore',
        description: 'Distributed Raft consensus node and key-value storage engine in Go.',
        stars: 48,
        forks: 11,
        language: 'Go',
        url: 'https://github.com/peaush07',
        homepage: null,
        updated_at: 'Aug 2026'
      }
    ];
  }
}

export async function fetchRecentCommits(limit = 5, username = GITHUB_USERNAME) {
  const cacheKey = `gh_events_${username}`;
  const cached = localStorage.getItem(cacheKey);
  if (cached) {
    const { timestamp, data } = JSON.parse(cached);
    if (Date.now() - timestamp < 15 * 60 * 1000) {
      return data;
    }
  }

  try {
    const res = await fetch(`https://api.github.com/users/${username}/events/public`);
    if (!res.ok) throw new Error(`GitHub Events HTTP ${res.status}`);
    const events = await res.json();
    
    const pushEvents = events.filter((e) => e.type === 'PushEvent');
    const commits = [];

    pushEvents.forEach((event) => {
      const repoName = event.repo.name.replace(`${username}/`, '');
      const eventCommits = event.payload?.commits || [];
      eventCommits.forEach((c) => {
        if (commits.length < limit) {
          commits.push({
            repo: repoName,
            message: c.message,
            date: new Date(event.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
          });
        }
      });
    });

    if (commits.length > 0) {
      localStorage.setItem(cacheKey, JSON.stringify({
        timestamp: Date.now(),
        data: commits
      }));
      return commits;
    }
  } catch (err) {
    console.warn('Using fallback commit activity stream:', err);
  }

  return null;
}

export async function fetchGithubProfileStats(username = GITHUB_USERNAME) {
  return fetchGitHubUserData(username);
}
