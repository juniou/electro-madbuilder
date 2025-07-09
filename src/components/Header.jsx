import { Search, ShoppingCart, User, Menu, Heart, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const Header = ({ cartItemsCount, onCartToggle }) => {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-gray-100 py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span>Welcome to Electro Store!</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Call Us: +1 234 567 8900</span>
            <span>|</span>
            <a href="#" className="hover:text-yellow-500">My Account</a>
            <span>|</span>
            <a href="#" className="hover:text-yellow-500">Track Your Order</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-800">
                <span className="bg-yellow-400 text-black px-2 py-1 rounded">electro</span>
              </h1>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative flex">
                <Input 
                  type="text" 
                  placeholder="Search for products..." 
                  className="flex-1 pr-12 h-12 border-2 border-gray-200 focus:border-yellow-400"
                />
                <Button className="absolute right-0 top-0 h-12 px-6 bg-yellow-400 hover:bg-yellow-500 text-black">
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                <BarChart3 className="h-5 w-5" />
                <span className="hidden md:inline">Compare</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                <Heart className="h-5 w-5" />
                <span className="hidden md:inline">Wishlist</span>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="flex items-center space-x-1 relative"
                onClick={onCartToggle}
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="hidden md:inline">Cart</span>
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                <User className="h-5 w-5" />
                <span className="hidden md:inline">Account</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            {/* Categories Menu */}
            <div className="bg-yellow-400 text-black px-4 py-3 flex items-center space-x-2">
              <Menu className="h-5 w-5" />
              <span className="font-medium">All Categories</span>
            </div>

            {/* Main Navigation */}
            <div className="flex items-center space-x-8 ml-8">
              <a href="#" className="py-3 hover:text-yellow-400 transition-colors">Home</a>
              <a href="#" className="py-3 hover:text-yellow-400 transition-colors">Shop</a>
              <a href="#" className="py-3 hover:text-yellow-400 transition-colors">Products</a>
              <a href="#" className="py-3 hover:text-yellow-400 transition-colors">Brands</a>
              <a href="#" className="py-3 hover:text-yellow-400 transition-colors">Blog</a>
              <a href="#" className="py-3 hover:text-yellow-400 transition-colors">Contact</a>
            </div>

            {/* Special Offers */}
            <div className="ml-auto">
              <span className="bg-red-500 text-white px-3 py-1 rounded text-sm">
                Special Offers!
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

