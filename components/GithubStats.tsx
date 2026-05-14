import { RepoStats, Release } from "@/lib/github";
import StatCard from "./StatCard";

interface GithubStatsProps {
  stats: RepoStats | null;
  release: Release | null;
}

const fmt = (n: number) => new Intl.NumberFormat("pt-BR").format(n);
const fmtDate = (iso: string) =>
  new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2l2.93 6.91L22 9.97l-5.5 4.86L18.18 22 12 18.27 5.82 22 7.5 14.83 2 9.97l7.07-1.06L12 2z" />
  </svg>
);

const ForkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="6" cy="6" r="2.5" />
    <circle cx="18" cy="6" r="2.5" />
    <circle cx="12" cy="18" r="2.5" />
    <path d="M6 8.5V12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8.5" />
    <path d="M12 14v1.5" />
  </svg>
);

const IssueIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <line x1="12" y1="7" x2="12" y2="13" />
    <circle cx="12" cy="17" r="0.6" fill="currentColor" />
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17L17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

export default function GithubStats({ stats, release }: GithubStatsProps) {
  return (
    <section id="open-source" className="wrap">
      <div className="sec-head fade-up">
        <div className="sec-kicker">{"// open source"}</div>
        <h2 className="sec-title">Construído à vista de todos.</h2>
        <p className="sec-sub">
          Código aberto sob licença MIT, sem dependências externas além da
          biblioteca padrão do Go.
        </p>
      </div>

      <div className="gh-grid">
        <StatCard icon={<StarIcon />} value={stats ? fmt(stats.stargazers_count) : "—"} label="Stars" />
        <StatCard icon={<ForkIcon />} value={stats ? fmt(stats.forks_count) : "—"} label="Forks" />
        <StatCard icon={<IssueIcon />} value={stats ? fmt(stats.open_issues_count) : "—"} label="Issues abertas" />
        <StatCard icon={<CodeIcon />} value={stats?.language ?? "Go"} label="Linguagem principal" mono />
      </div>

      {release && (
        <div className="gh-release fade-up">
          <div className="left">
            <span className="tag">{release.tag_name}</span>
            <div className="meta">
              <span>Última release publicada</span>
              <span className="date">publicado em {fmtDate(release.published_at)}</span>
            </div>
          </div>
          <a className="view" href={release.html_url} target="_blank" rel="noopener noreferrer">
            Ver no GitHub
            <ArrowIcon />
          </a>
        </div>
      )}
    </section>
  );
}
