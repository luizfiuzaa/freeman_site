import { RepoStats, Release } from "@/lib/github";
import InstallBlock from "./InstallBlock";

interface HeroProps {
  stats: RepoStats | null;
  release: Release | null;
}

export default function Hero({ stats, release }: HeroProps) {
  return (
    <section className="wrap hero" style={{ paddingTop: "28px" }}>
      {/* Left column */}
      <div>
        <div className="badges">
          <span className="badge">
            <span className="dot" />
            Go CLI
          </span>
          <span className="badge flutter">
            <span className="dot" />
            Flutter
          </span>
          {release && (
            <span className="badge version">{release.tag_name}</span>
          )}
        </div>

        <h1 className="title">
          Free<span className="accent">man</span>
        </h1>

        <p className="tagline">
          Uma CLI escrita em <strong>Go</strong> que limpa, repara e reconstrói
          o ambiente Flutter em <strong>um único comando</strong> — sem rituais,
          sem caches travados, sem build quebrado.
        </p>

        <InstallBlock release={release} />

        {stats && (
          <div className="hero-stats">
            <div className="stat">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2l2.93 6.91L22 9.97l-5.5 4.86L18.18 22 12 18.27 5.82 22 7.5 14.83 2 9.97l7.07-1.06L12 2z" />
              </svg>
              <span className="stat-val">
                {new Intl.NumberFormat("pt-BR").format(stats.stargazers_count)}
              </span>
              <span className="stat-lbl">stars</span>
            </div>
            <div className="stat">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="6" cy="6" r="2.5" />
                <circle cx="18" cy="6" r="2.5" />
                <circle cx="12" cy="18" r="2.5" />
                <path d="M6 8.5V12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8.5" />
                <path d="M12 14v1.5" />
              </svg>
              <span className="stat-val">
                {new Intl.NumberFormat("pt-BR").format(stats.forks_count)}
              </span>
              <span className="stat-lbl">forks</span>
            </div>
          </div>
        )}

        <div className="cta-row">
          <a className="btn primary" href="#como-funciona">
            Ver o que ele faz
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </a>
          <a
            className="btn ghost"
            href="https://github.com/luizfiuzaa/freeman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.69-3.88-1.36-3.88-1.36-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.12 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.05.78 2.13v3.15c0 .31.21.66.8.55C20.22 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
            </svg>
            Ver no GitHub
          </a>
        </div>
      </div>

      {/* Right column — mascot */}
      <div className="hero-mascot" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/gopher_and_dash.png" alt="Mascote do Freeman" />
      </div>
    </section>
  );
}
