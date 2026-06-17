import Hero from "@/components/home/Hero";
import StatsStrip from "@/components/home/StatsStrip";
import ThreeActs from "@/components/home/ThreeActs";
import EvaTeaser from "@/components/home/EvaTeaser";
import MediaLogos from "@/components/home/MediaLogos";
import QuoteSection from "@/components/home/QuoteSection";
import RecentContent from "@/components/home/RecentContent";
import FinalCta from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ThreeActs />
      <EvaTeaser />
      <MediaLogos />
      <QuoteSection />
      <RecentContent />
      <FinalCta />
    </>
  );
}
