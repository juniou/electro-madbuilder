import { Star, Heart, ShoppingCart, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const ProductGrid = ({ title = "Featured Products", products = [], onAddToCart, onProductClick }) => {
  // Sample products data if none provided
  const sampleProducts = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.5,
      reviews: 128,
      image: "/api/placeholder/300/300",
      badge: "Sale",
      badgeColor: "bg-red-500"
    },
    {
      id: 2,
      name: "Smart Watch Series 7",
      price: 299.99,
      originalPrice: null,
      rating: 4.8,
      reviews: 256,
      image: "/api/placeholder/300/300",
      badge: "New",
      badgeColor: "bg-green-500"
    },
    {
      id: 3,
      name: "Gaming Mechanical Keyboard",
      price: 149.99,
      originalPrice: 179.99,
      rating: 4.6,
      reviews: 89,
      image: "/api/placeholder/300/300",
      badge: "Hot",
      badgeColor: "bg-orange-500"
    },
    {
      id: 4,
      name: "4K Webcam for Streaming",
      price: 199.99,
      originalPrice: null,
      rating: 4.3,
      reviews: 67,
      image: "/api/placeholder/300/300",
      badge: null,
      badgeColor: null
    },
    {
      id: 5,
      name: "Wireless Charging Pad",
      price: 39.99,
      originalPrice: 49.99,
      rating: 4.4,
      reviews: 145,
      image: "/api/placeholder/300/300",
      badge: "Sale",
      badgeColor: "bg-red-500"
    },
    {
      id: 6,
      name: "Portable Bluetooth Speaker",
      price: 89.99,
      originalPrice: null,
      rating: 4.7,
      reviews: 203,
      image: "/api/placeholder/300/300",
      badge: "Best Seller",
      badgeColor: "bg-blue-500"
    }
  ]

  const displayProducts = products.length > 0 ? products : sampleProducts

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="h-4 w-4 fill-yellow-400/50 text-yellow-400" />)
    }

    const remainingStars = 5 - Math.ceil(rating)
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />)
    }

    return stars
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayProducts.map((product) => (
            <div key={product.id} className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* Product Badge */}
              {product.badge && (
                <Badge className={`absolute top-3 left-3 z-10 ${product.badgeColor} text-white`}>
                  {product.badge}
                </Badge>
              )}

              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => onProductClick && onProductClick(product)}
                />
                
                {/* Hover Actions */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
                  <Button 
                    size="sm" 
                    variant="secondary" 
                    className="bg-white/90 hover:bg-white"
                    onClick={() => onProductClick && onProductClick(product)}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-yellow-400 hover:bg-yellow-500 text-black"
                    onClick={() => onAddToCart && onAddToCart(product)}
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 
                  className="font-medium text-gray-800 mb-2 line-clamp-2 group-hover:text-yellow-600 transition-colors cursor-pointer"
                  onClick={() => onProductClick && onProductClick(product)}
                >
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-2">
                  <div className="flex">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-sm text-gray-500">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-lg font-bold text-gray-800">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <Button 
                  className="w-full bg-gray-800 hover:bg-yellow-400 hover:text-black transition-colors"
                  onClick={() => onAddToCart && onAddToCart(product)}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" className="px-8 py-3 text-lg border-yellow-400 text-yellow-600 hover:bg-yellow-400 hover:text-black">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ProductGrid

