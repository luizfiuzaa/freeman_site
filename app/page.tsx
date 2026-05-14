import { getRepoStats, getLatestRelease } from "@/lib/github";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import GithubStats from "@/components/GithubStats";
import Footer from "@/components/Footer";
import FadeUpObserver from "@/components/FadeUpObserver";

export default async function Page() {
  const [stats, release] = await Promise.all([
    getRepoStats(),
    getLatestRelease(),
  ]);

  return (
    <>
      <div className="bg-fx" aria-hidden="true" />
      <Nav />
      <main>
        <Hero stats={stats} release={release} />
        <HowItWorks />
        <Features />
        <GithubStats stats={stats} release={release} />
      </main>
      <Footer />
      <FadeUpObserver />
    </>
  );
}
