import ProductCard from "./ProductCard";
import vehicleImage from "@assets/generated_images/Vehicle_mod_showcase_3ab42507.png";
import weaponsImage from "@assets/generated_images/Weapons_mod_showcase_24b9e154.png";
import mapImage from "@assets/generated_images/Map_mod_showcase_e28786a3.png";

export default function FeaturedProducts() {
  const products = [
    {
      title: "Elite Vehicle Collection",
      description: "Premium sports cars and luxury vehicles with custom handling",
      price: "34.99",
      image: vehicleImage,
      category: "Vehicles",
      rating: 4.9,
      featured: true,
    },
    {
      title: "Tactical Weapons Pack",
      description: "Military-grade weapons with realistic sounds and animations",
      price: "24.99",
      image: weaponsImage,
      category: "Weapons",
      rating: 4.8,
      featured: true,
    },
    {
      title: "Urban Map Expansion",
      description: "Detailed city expansion with custom buildings and interiors",
      price: "44.99",
      image: mapImage,
      category: "Maps",
      rating: 5.0,
      featured: true,
    },
  ];

  return (
    <section id="featured" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4" data-testid="text-featured-title">
            Featured <span className="text-ring">Modifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-featured-subtitle">
            Hand-picked premium mods that transform your FiveM server experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
