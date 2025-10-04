import { Button } from "@/components/ui/button";
import { Download, Zap } from "lucide-react";
import heroImage from "@assets/generated_images/Gaming_hero_background_image_26aae87e.png";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-heading font-bold mb-6" data-testid="text-hero-title">
          Premium <span className="text-primary">FiveM</span> Mods
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8" data-testid="text-hero-subtitle">
          Transform your server with high-quality vehicles, weapons, maps, and custom scripts. 
          Professional modifications built for performance and style.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            variant="default"
            className="text-base font-semibold"
            onClick={() => scrollToSection("products")}
            data-testid="button-browse-mods"
          >
            <Zap className="w-5 h-5 mr-2" />
            Browse Mods
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base font-semibold backdrop-blur-sm bg-background/20"
            onClick={() => scrollToSection("features")}
            data-testid="button-learn-more"
          >
            <Download className="w-5 h-5 mr-2" />
            Learn More
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="text-center" data-testid="stat-mods">
            <div className="text-3xl sm:text-4xl font-heading font-bold text-ring">500+</div>
            <div className="text-sm text-muted-foreground mt-1">Premium Mods</div>
          </div>
          <div className="text-center" data-testid="stat-downloads">
            <div className="text-3xl sm:text-4xl font-heading font-bold text-ring">50K+</div>
            <div className="text-sm text-muted-foreground mt-1">Downloads</div>
          </div>
          <div className="text-center" data-testid="stat-customers">
            <div className="text-3xl sm:text-4xl font-heading font-bold text-ring">10K+</div>
            <div className="text-sm text-muted-foreground mt-1">Happy Customers</div>
          </div>
        </div>
      </div>
    </section>
  );
}
