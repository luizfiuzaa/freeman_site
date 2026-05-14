"use client";

import { useState } from "react";
import { Release } from "@/lib/github";

export default function InstallBlock({ release }: { release: Release | null }) {
  const [copied, setCopied] = useState(false);
  const cmd = "go install github.com/luizfiuzaa/freeman@latest";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cmd);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = cmd;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const releaseHref =
    release?.html_url ?? "https://github.com/luizfiuzaa/freeman/releases/latest";
  const releaseLabel = release
    ? `↓ baixar binário pré-compilado (${release.tag_name})`
    : "↓ baixar binário pré-compilado";

  return (
    <div className="install">
      <div className="install-head">
        <div className="dots">
          <span />
          <span />
          <span />
        </div>
        <span>~/projects</span>
      </div>

      <div className="install-cmd">
        <div className="cmd">
          <span className="prompt">$</span>
          <span className="kw">go install</span>
          {" github.com/luizfiuzaa/freeman@latest"}
        </div>
        <button
          className={`copy-btn${copied ? " copied" : ""}`}
          onClick={handleCopy}
          aria-label="Copiar comando de instalação"
        >
          {copied ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          )}
          <span>{copied ? "Copiado!" : "Copiar"}</span>
        </button>
      </div>

      <div className="install-foot">
        <span>Funciona em macOS, Linux e Windows — binário único, sem runtime.</span>
        <a href={releaseHref} target="_blank" rel="noopener noreferrer">
          {releaseLabel}
        </a>
      </div>
    </div>
  );
}
