import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecommendationCard from "@/components/RecommendationCard";
import CountryExplorer from "@/components/CountryExplorer";

import heroBg from "@/assets/hero-bg.jpg";
import beach1 from "@/assets/beach-1.jpg";
import beach2 from "@/assets/beach-2.jpg";
import temple1 from "@/assets/temple-1.jpg";
import temple2 from "@/assets/temple-2.jpg";

import { MapPin, Palmtree, Landmark } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <header className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="Mountain landscape with winding road" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-gradient absolute inset-0" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-6 animate-fade-in-up">
            Discover Your Next Adventure
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 font-body leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Curated travel recommendations for beaches, temples, and countries around the world. Your journey starts here.
          </p>
        </div>
      </header>

      <main>
        {/* Beach Recommendations */}
        <section className="py-20 section-gradient">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center gap-3 mb-3">
              <Palmtree className="h-6 w-6 text-primary" />
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">Beaches</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-10">
              Paradise Beaches
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <RecommendationCard
                image={beach1}
                title="Maldives – Tropical Bliss"
                description="Pristine white sand beaches meet crystal-clear turquoise waters. The Maldives offers unparalleled luxury and serenity in the heart of the Indian Ocean."
              />
              <RecommendationCard
                image={beach2}
                title="Navagio Beach, Greece"
                description="Enclosed by towering limestone cliffs, this iconic shipwreck beach on Zakynthos island is one of the most photographed spots on Earth."
              />
            </div>
          </div>
        </section>

        {/* Temple Recommendations */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center gap-3 mb-3">
              <Landmark className="h-6 w-6 text-primary" />
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">Temples</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-10">
              Sacred Temples
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <RecommendationCard
                image={temple1}
                title="Wat Phra That, Thailand"
                description="Golden spires rise above misty mountains in this breathtaking Buddhist temple, one of Southeast Asia's most revered spiritual sites."
              />
              <RecommendationCard
                image={temple2}
                title="Angkor Wat, Cambodia"
                description="The world's largest religious monument, Angkor Wat's intricate stone carvings and majestic towers embody centuries of Khmer artistry."
              />
            </div>
          </div>
        </section>

        {/* Country-based Recommendations (Dynamic) */}
        <section className="py-20 section-gradient">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="h-6 w-6 text-primary" />
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">Explore by Country</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-10">
              Country Destinations
            </h2>
            <CountryExplorer />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
