import { HeroSection, RaceTrackWrapper, Footer } from "./components";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans">
      <HeroSection />
      <RaceTrackWrapper />
      <Footer />
    </div>
  );
}
