import { Compass } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-12">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Compass className="h-6 w-6 text-warm" />
          <span className="text-lg font-display font-bold">Wanderlust</span>
        </div>
        <div className="flex items-center gap-6 text-sm opacity-80">
          <Link to="/" className="hover:opacity-100 transition-opacity">Home</Link>
          <Link to="/about" className="hover:opacity-100 transition-opacity">About</Link>
          <Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link>
        </div>
        <p className="text-sm opacity-60">© 2026 Wanderlust. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
