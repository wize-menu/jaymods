import ProductCard from '../ProductCard'
import vehicleImage from '@assets/generated_images/Vehicle_mod_showcase_3ab42507.png'

export default function ProductCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ProductCard
        title="Premium Vehicle Pack"
        description="10 high-quality custom vehicles with detailed interiors"
        price="29.99"
        image={vehicleImage}
        category="Vehicles"
        rating={4.9}
        featured={true}
      />
    </div>
  )
}
