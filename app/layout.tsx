import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Freeman — Flutter Cache Cleaner",
  description:
    "Freeman é uma CLI escrita em Go que automatiza a limpeza completa de caches, locks e artefatos do Flutter — flutter clean, pub cache, build dirs — em um único comando configurável.",
  keywords: ["flutter", "cli", "go", "build", "clean", "pub cache", "dart"],
  authors: [{ name: "luizfiuzaa", url: "https://github.com/luizfiuzaa" }, {name: "sousa-p", url:"https://github.com/sousa-p"}],
  openGraph: {
    title: "Freeman — Flutter Build Cleaner",
    description:
      "Elimine erros de build do Flutter em um único comando. CLI em Go, cross-platform.",
    url: "https://github.com/luizfiuzaa/freeman",
    siteName: "Freeman",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freeman — Flutter Build Cleaner",
    description:
      "Elimine erros de build do Flutter em um único comando. CLI em Go, cross-platform.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
