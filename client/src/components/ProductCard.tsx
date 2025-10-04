import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  category: string;
  rating?: number;
  featured?: boolean;
}

export default function ProductCard({
  title,
  description,
  price,
  image,
  category,
  rating = 5,
  featured = false,
}: ProductCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-300 group" data-testid={`card-product-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {featured && (
          <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground" data-testid="badge-featured">
            Featured
          </Badge>
        )}
        <Badge className="absolute top-3 left-3 bg-ring/90 text-background" data-testid={`badge-category-${category.toLowerCase()}`}>
          {category}
        </Badge>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-heading font-semibold" data-testid="text-product-title">
            {title}
          </h3>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-ring text-ring" />
            <span className="text-sm font-medium" data-testid="text-product-rating">{rating}</span>
          </div>
        </div>
        <p className="text-muted-foreground text-sm mb-4" data-testid="text-product-description">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-heading font-bold text-primary" data-testid="text-product-price">
            ${price}
          </span>
          <Button size="sm" variant="outline" className="gap-2" data-testid="button-add-to-cart">
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
}
