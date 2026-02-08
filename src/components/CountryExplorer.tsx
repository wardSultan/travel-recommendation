import { useState } from "react";
import RecommendationCard from "./RecommendationCard";

import franceImg from "@/assets/france.jpg";
import japanImg from "@/assets/japan.jpg";
import italyImg from "@/assets/italy.jpg";
import indonesiaImg from "@/assets/indonesia.jpg";

// Country data for dynamic rendering via JavaScript DOM manipulation
const countryData: Record<string, { name: string; places: { image: string; title: string; description: string }[] }> = {
  france: {
    name: "France",
    places: [
      { image: franceImg, title: "Paris – City of Light", description: "Experience the romance of the Eiffel Tower, stroll along the Seine, and savor world-class cuisine in charming bistros." },
      { image: franceImg, title: "French Riviera", description: "Bask in the Mediterranean sun along the glamorous Côte d'Azur, from Nice to Cannes and Saint-Tropez." },
    ],
  },
  japan: {
    name: "Japan",
    places: [
      { image: japanImg, title: "Kyoto – Ancient Capital", description: "Wander through thousands of vermillion torii gates, serene zen gardens, and ancient bamboo groves." },
      { image: japanImg, title: "Tokyo – Neon Metropolis", description: "Dive into the electrifying blend of ultramodern technology and centuries-old temples in the world's busiest city." },
    ],
  },
  italy: {
    name: "Italy",
    places: [
      { image: italyImg, title: "Amalfi Coast", description: "Drive along dramatic cliffs dotted with colorful villages, turquoise waters, and lemon groves cascading to the sea." },
      { image: italyImg, title: "Rome – The Eternal City", description: "Walk through millennia of history from the Colosseum to the Vatican, with gelato stops along the way." },
    ],
  },
  indonesia: {
    name: "Indonesia",
    places: [
      { image: indonesiaImg, title: "Bali – Island of Gods", description: "Discover emerald rice terraces, sacred temples, vibrant coral reefs, and a spiritual culture that welcomes all." },
      { image: indonesiaImg, title: "Komodo Islands", description: "Encounter the legendary Komodo dragons and snorkel through pristine waters teeming with marine life." },
    ],
  },
};

const CountryExplorer = () => {
  // State to track which country is selected from the dropdown
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  // Handler for dropdown change - dynamically updates displayed content
  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
  };

  const country = selectedCountry ? countryData[selectedCountry] : null;

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
        <label htmlFor="country-select" className="text-lg font-display font-semibold text-foreground">
          Choose a Country:
        </label>
        <select
          id="country-select"
          value={selectedCountry}
          onChange={handleCountryChange}
          className="px-4 py-3 rounded-lg bg-card border border-border text-foreground font-body focus:outline-none focus:ring-2 focus:ring-ring min-w-[220px]"
        >
          <option value="">— Select a destination —</option>
          {Object.entries(countryData).map(([key, data]) => (
            <option key={key} value={key}>{data.name}</option>
          ))}
        </select>
      </div>

      {/* Dynamically rendered country content based on selection */}
      {country ? (
        <div className="grid md:grid-cols-2 gap-6 animate-fade-in-up">
          {country.places.map((place, i) => (
            <RecommendationCard key={i} {...place} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-muted-foreground bg-muted rounded-xl">
          <p className="text-lg">Select a country above to explore destinations</p>
        </div>
      )}
    </div>
  );
};

export default CountryExplorer;
