import { useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import CategorySection from './components/CategorySection'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'
import ShoppingCart from './components/ShoppingCart'
import ProductModal from './components/ProductModal'
import { useCart } from './hooks/useCart'
import './App.css'

function App() {
  const {
    cartItems,
    isCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartItemsCount,
    toggleCart,
    closeCart
  } = useCart()

  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isProductModalOpen, setIsProductModalOpen] = useState(false)

  const handleProductClick = (product) => {
    setSelectedProduct(product)
    setIsProductModalOpen(true)
  }

  const handleCloseProductModal = () => {
    setIsProductModalOpen(false)
    setSelectedProduct(null)
  }

  const handleAddToCart = (product) => {
    addToCart(product)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header 
        cartItemsCount={getCartItemsCount()} 
        onCartToggle={toggleCart}
      />
      <main>
        <HeroSection />
        <CategorySection />
        <ProductGrid 
          title="Featured Products" 
          onAddToCart={handleAddToCart}
          onProductClick={handleProductClick}
        />
        <ProductGrid 
          title="Best Sellers" 
          onAddToCart={handleAddToCart}
          onProductClick={handleProductClick}
        />
      </main>
      <Footer />
      
      {/* Shopping Cart */}
      <ShoppingCart
        isOpen={isCartOpen}
        onClose={closeCart}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeItem={removeFromCart}
      />

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={handleCloseProductModal}
        onAddToCart={handleAddToCart}
      />
    </div>
  )
}

export default App
