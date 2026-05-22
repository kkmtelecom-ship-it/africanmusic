import Navbar from "@/components/navigation/Navbar";

import HeroSection from "@/components/layout/HeroSection";
import FeaturedSection from "@/components/layout/FeaturedSection";
import MusicExperienceSection from "@/components/layout/MusicExperienceSection";
import ArtistShowcase from "@/components/artists/ArtistShowcase";
import SectionDivider from "@/components/ui/SectionDivider";
import EditorialBanner from "@/components/layout/EditorialBanner";


export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />

      <HeroSection />

      <SectionDivider />

      <FeaturedSection />

      <SectionDivider />

      <MusicExperienceSection />

      <SectionDivider />

      <ArtistShowcase />

      <SectionDivider />

      <EditorialBanner />

    </main>
  );
}
