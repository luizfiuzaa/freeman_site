const REPO = "luizfiuzaa/freeman";
const BASE = "https://api.github.com";

export interface RepoStats {
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  description: string;
  language: string;
  license: { spdx_id: string } | null;
}

export interface Release {
  tag_name: string;
  published_at: string;
  html_url: string;
  name: string;
}

export async function getRepoStats(): Promise<RepoStats | null> {
  try {
    const res = await fetch(`${BASE}/repos/${REPO}`, {
      next: { revalidate: 3600 },
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function getLatestRelease(): Promise<Release | null> {
  try {
    const res = await fetch(`${BASE}/repos/${REPO}/releases/latest`, {
      next: { revalidate: 3600 },
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}
