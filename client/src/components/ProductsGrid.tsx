import { useState } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import vehicleImage from "@assets/generated_images/Vehicle_mod_showcase_3ab42507.png";
import weaponsImage from "@assets/generated_images/Weapons_mod_showcase_24b9e154.png";
import mapImage from "@assets/generated_images/Map_mod_showcase_e28786a3.png";

export default function ProductsGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Vehicles", "Weapons", "Maps", "Scripts"];

  const allProducts = [
    {
      title: "Supercar Bundle",
      description: "Collection of 15 exotic supercars with custom handling",
      price: "49.99",
      image: vehicleImage,
      category: "Vehicles",
      rating: 4.9,
    },
    {
      title: "Police Vehicle Pack",
      description: "Realistic police vehicles with working lights and sirens",
      price: "29.99",
      image: vehicleImage,
      category: "Vehicles",
      rating: 4.7,
    },
    {
      title: "Advanced Weapon System",
      description: "Complete weapon overhaul with tactical attachments",
      price: "39.99",
      image: weaponsImage,
      category: "Weapons",
      rating: 4.8,
    },
    {
      title: "Melee Combat Pack",
      description: "Custom melee weapons with new combat animations",
      price: "19.99",
      image: weaponsImage,
      category: "Weapons",
      rating: 4.6,
    },
    {
      title: "Downtown District",
      description: "Massive downtown area with shops and apartments",
      price: "59.99",
      image: mapImage,
      category: "Maps",
      rating: 5.0,
    },
    {
      title: "Industrial Zone MLO",
      description: "Detailed warehouse and factory interiors",
      price: "34.99",
      image: mapImage,
      category: "Maps",
      rating: 4.8,
    },
  ];

  const filteredProducts =
    activeCategory === "All"
      ? allProducts
      : allProducts.filter((product) => product.category === activeCategory);

  return (
    <section id="products" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4" data-testid="text-products-title">
            All <span className="text-primary">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-products-subtitle">
            Browse our complete collection of premium FiveM modifications
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              data-testid={`button-category-${category.toLowerCase()}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
