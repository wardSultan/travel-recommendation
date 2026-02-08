import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Globe, Heart, Users, Star } from "lucide-react";

const values = [
  { icon: Globe, title: "Global Perspective", description: "We explore every corner of the world to bring you authentic, diverse travel experiences that broaden your horizons." },
  { icon: Heart, title: "Passion for Travel", description: "Our team lives and breathes travel. Every recommendation comes from personal experience and genuine enthusiasm." },
  { icon: Users, title: "Community Driven", description: "We believe the best travel tips come from real travelers. Our community of explorers helps shape every guide." },
  { icon: Star, title: "Quality First", description: "We carefully curate every destination, ensuring our recommendations meet the highest standards of experience." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <header className="pt-32 pb-16 section-gradient">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            About Wanderlust
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're a passionate team of travelers, writers, and adventurers dedicated to helping you discover the world's most extraordinary destinations.
          </p>
        </div>
      </header>

      <main>
        {/* Mission */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">Our Mission</h2>
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-sm">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Wanderlust, our mission is to inspire and empower travelers to explore the world with confidence. We believe that travel transforms perspectives, builds bridges between cultures, and creates memories that last a lifetime.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're seeking the tranquility of a secluded beach, the spirituality of ancient temples, or the vibrant culture of a new country, we provide carefully researched and beautifully presented travel recommendations to guide your next journey.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 section-gradient">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl font-display font-bold text-foreground mb-12 text-center">What We Stand For</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => (
                <div key={v.title} className="card-hover bg-card rounded-xl p-6 border border-border text-center shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <v.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
            <h2 className="text-3xl font-display font-bold text-foreground mb-8">Our Team</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Wanderlust was founded by a group of seasoned travelers who have collectively visited over 100 countries. Our diverse team brings together expertise in travel writing, photography, cultural research, and destination management to deliver the most trustworthy travel recommendations on the web.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
