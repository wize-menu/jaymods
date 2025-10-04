import { Card } from "@/components/ui/card";
import { Zap, Shield, Headphones, Download, Code, Star } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Instant Delivery",
      description: "Get your mods immediately after purchase with automated delivery system",
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "All mods are tested and verified to work perfectly with latest FiveM updates",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Our dedicated support team is always ready to help you with installation",
    },
    {
      icon: Download,
      title: "Free Updates",
      description: "Lifetime updates included with every purchase at no additional cost",
    },
    {
      icon: Code,
      title: "Easy Installation",
      description: "Detailed documentation and installation guides for all products",
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "Professionally developed mods with attention to detail and performance",
    },
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4" data-testid="text-features-title">
            Why Choose <span className="text-ring">JFiveMods</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-features-subtitle">
            We provide the best experience for FiveM server owners and developers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="p-6 hover-elevate transition-all duration-300"
              data-testid={`card-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="w-12 h-12 bg-ring/10 rounded-md flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-ring" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2" data-testid="text-feature-title">
                {feature.title}
              </h3>
              <p className="text-muted-foreground" data-testid="text-feature-description">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
