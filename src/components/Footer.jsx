import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-yellow-400 text-black py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-800">Subscribe to our newsletter for latest offers and updates</p>
            </div>
            <div className="flex w-full md:w-auto max-w-md">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 bg-white border-0 h-12"
              />
              <Button className="bg-gray-900 hover:bg-gray-800 text-white h-12 px-6 ml-2">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6">
                <span className="bg-yellow-400 text-black px-2 py-1 rounded">electro</span>
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your trusted electronics store offering the latest technology products 
                with competitive prices and excellent customer service.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-yellow-400" />
                  <span className="text-gray-300">123 Electronics St, Tech City, TC 12345</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-yellow-400" />
                  <span className="text-gray-300">+1 (234) 567-8900</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-yellow-400" />
                  <span className="text-gray-300">info@electrostore.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Shipping Info</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Returns</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Size Guide</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Track Order</a></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Categories</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Smartphones</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Laptops</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Headphones</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Gaming</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Smart Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Accessories</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Wearables</a></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Customer Service</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">My Account</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Order History</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Wishlist</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Newsletter</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Special Offers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Gift Certificates</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Affiliate</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Copyright */}
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">
                © 2024 Electro Store. All rights reserved. | 
                <a href="#" className="hover:text-yellow-400 ml-1">Privacy Policy</a> | 
                <a href="#" className="hover:text-yellow-400 ml-1">Terms of Service</a>
              </p>
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 mr-2">Follow us:</span>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <span className="text-gray-400 text-sm">We accept:</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-white rounded px-3 py-1">
                  <span className="text-blue-600 font-bold text-sm">VISA</span>
                </div>
                <div className="bg-white rounded px-3 py-1">
                  <span className="text-red-600 font-bold text-sm">MC</span>
                </div>
                <div className="bg-white rounded px-3 py-1">
                  <span className="text-blue-800 font-bold text-sm">AMEX</span>
                </div>
                <div className="bg-white rounded px-3 py-1">
                  <span className="text-blue-600 font-bold text-sm">PayPal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

