import { useState } from 'react'
import { X, Star, Heart, ShoppingCart, Plus, Minus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const ProductModal = ({ product, isOpen, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  if (!isOpen || !product) return null

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

  const handleAddToCart = () => {
    onAddToCart({ ...product, quantity })
    onClose()
  }

  // Mock additional product images
  const productImages = [
    product.image,
    product.image,
    product.image
  ]

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      
      {/* Modal */}
      <div className="absolute inset-4 bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="flex h-full">
          {/* Close Button */}
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onClose}
            className="absolute top-4 right-4 z-10"
          >
            <X className="h-5 w-5" />
          </Button>

          {/* Product Images */}
          <div className="flex-1 p-8">
            <div className="h-full flex flex-col">
              {/* Main Image */}
              <div className="flex-1 mb-4">
                <img 
                  src={productImages[selectedImage]} 
                  alt={product.name}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              
              {/* Thumbnail Images */}
              <div className="flex space-x-2">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-16 h-16 rounded border-2 overflow-hidden ${
                      selectedImage === index ? 'border-yellow-400' : 'border-gray-200'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="flex-1 p-8 overflow-y-auto">
            <div className="space-y-6">
              {/* Product Badge */}
              {product.badge && (
                <Badge className={`${product.badgeColor} text-white`}>
                  {product.badge}
                </Badge>
              )}

              {/* Product Name */}
              <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {renderStars(product.rating)}
                </div>
                <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold text-gray-800">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  This is a high-quality {product.name.toLowerCase()} featuring the latest technology 
                  and premium materials. Perfect for both professional and personal use, 
                  it offers exceptional performance and reliability.
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Premium build quality</li>
                  <li>• Latest technology integration</li>
                  <li>• User-friendly design</li>
                  <li>• 1-year warranty included</li>
                </ul>
              </div>

              {/* Quantity Selector */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Quantity</h3>
                <div className="flex items-center space-x-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-lg font-medium w-12 text-center">{quantity}</span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button 
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black text-lg py-3"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart - ${(product.price * quantity).toFixed(2)}
                </Button>
                <Button variant="outline" className="w-full text-lg py-3">
                  <Heart className="mr-2 h-5 w-5" />
                  Add to Wishlist
                </Button>
              </div>

              {/* Additional Info */}
              <div className="text-sm text-gray-500 space-y-1">
                <p>✓ Free shipping on orders over $50</p>
                <p>✓ 30-day return policy</p>
                <p>✓ Secure payment processing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal

