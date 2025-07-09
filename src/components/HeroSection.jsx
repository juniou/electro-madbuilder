import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: "THE NEW STANDARD",
      subtitle: "Under Favorable Smartwatches",
      price: "$749",
      description: "From $749.99",
      image: "/api/placeholder/600/400",
      bgColor: "bg-gradient-to-r from-blue-50 to-blue-100"
    },
    {
      id: 2,
      title: "GAMING REVOLUTION",
      subtitle: "Next-Gen Gaming Consoles",
      price: "$499",
      description: "Starting at $499.99",
      image: "/api/placeholder/600/400",
      bgColor: "bg-gradient-to-r from-gray-50 to-gray-100"
    },
    {
      id: 3,
      title: "MOBILE EXCELLENCE",
      subtitle: "Latest Smartphone Technology",
      price: "$899",
      description: "From $899.99",
      image: "/api/placeholder/600/400",
      bgColor: "bg-gradient-to-r from-green-50 to-green-100"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative overflow-hidden">
      <div className={`${slides[currentSlide].bgColor} transition-all duration-500`}>
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-between min-h-[400px]">
            {/* Content */}
            <div className="flex-1 max-w-lg">
              <h2 className="text-5xl font-bold text-gray-800 mb-4">
                {slides[currentSlide].title}
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                {slides[currentSlide].subtitle}
              </p>
              <div className="flex items-center space-x-4 mb-8">
                <span className="text-3xl font-bold text-red-500">
                  {slides[currentSlide].price}
                </span>
                <span className="text-lg text-gray-500">
                  {slides[currentSlide].description}
                </span>
              </div>
              <div className="flex space-x-4">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 text-lg">
                  Shop Now
                </Button>
                <Button variant="outline" className="px-8 py-3 text-lg">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Product Image */}
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <img 
                  src={slides[currentSlide].image} 
                  alt={slides[currentSlide].title}
                  className="w-96 h-96 object-contain"
                />
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button 
        variant="ghost" 
        size="sm"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button 
        variant="ghost" 
        size="sm"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-yellow-400' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSection

