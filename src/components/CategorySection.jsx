import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      name: "Smartphones",
      productCount: 156,
      image: "/api/placeholder/300/200",
      color: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      id: 2,
      name: "Laptops",
      productCount: 89,
      image: "/api/placeholder/300/200",
      color: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      id: 3,
      name: "Headphones",
      productCount: 234,
      image: "/api/placeholder/300/200",
      color: "bg-purple-50",
      textColor: "text-purple-600"
    },
    {
      id: 4,
      name: "Gaming",
      productCount: 67,
      image: "/api/placeholder/300/200",
      color: "bg-red-50",
      textColor: "text-red-600"
    },
    {
      id: 5,
      name: "Smart Home",
      productCount: 123,
      image: "/api/placeholder/300/200",
      color: "bg-yellow-50",
      textColor: "text-yellow-600"
    },
    {
      id: 6,
      name: "Accessories",
      productCount: 345,
      image: "/api/placeholder/300/200",
      color: "bg-indigo-50",
      textColor: "text-indigo-600"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of electronics across different categories. 
            Find exactly what you're looking for with our organized product collections.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className={`${category.color} rounded-lg p-6 group hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200`}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className={`text-xl font-semibold ${category.textColor} mb-1`}>
                    {category.name}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {category.productCount} products
                  </p>
                </div>
                <ArrowRight className={`h-6 w-6 ${category.textColor} group-hover:translate-x-1 transition-transform`} />
              </div>
              
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Featured Categories Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Large Banner 1 */}
          <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg overflow-hidden text-white p-8">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">Gaming Collection</h3>
              <p className="mb-4 opacity-90">Latest gaming gear and accessories</p>
              <Button className="bg-white text-blue-600 hover:bg-gray-100">
                Shop Gaming
              </Button>
            </div>
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
              <img 
                src="/api/placeholder/400/300" 
                alt="Gaming"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Large Banner 2 */}
          <div className="relative bg-gradient-to-r from-green-600 to-green-700 rounded-lg overflow-hidden text-white p-8">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">Smart Home</h3>
              <p className="mb-4 opacity-90">Transform your home with smart devices</p>
              <Button className="bg-white text-green-600 hover:bg-gray-100">
                Explore Smart Home
              </Button>
            </div>
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
              <img 
                src="/api/placeholder/400/300" 
                alt="Smart Home"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategorySection

