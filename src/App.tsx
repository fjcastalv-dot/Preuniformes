import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import CatalogView from './components/CatalogView';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';
import ClubPREModal from './components/ClubPREModal';
import ProductDetailModal from './components/ProductDetailModal';
import FavoritesDrawer from './components/FavoritesDrawer';
import QuoteCartDrawer from './components/QuoteCartDrawer';
import WhatsAppWidget from './components/WhatsAppWidget';
import { ActiveTab, CartItem, Product } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('inicio');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isClubModalOpen, setIsClubModalOpen] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string>('todos');

  // Load cart and favorites from localStorage on start
  useEffect(() => {
    const cachedCart = localStorage.getItem('pre_cart');
    if (cachedCart) {
      try {
        setCart(JSON.parse(cachedCart));
      } catch (e) {
        console.error('Error parsing cart from storage', e);
      }
    }

    const cachedFavs = localStorage.getItem('pre_favorites');
    if (cachedFavs) {
      try {
        setFavorites(JSON.parse(cachedFavs));
      } catch (e) {
        console.error('Error parsing favorites from storage', e);
      }
    }

    // Auto trigger Club PRE popup after 4 seconds
    const hasSeenPopup = localStorage.getItem('pre_seen_club_popup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsClubModalOpen(true);
        localStorage.setItem('pre_seen_club_popup', 'true');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Save cart to localStorage
  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem('pre_cart', JSON.stringify(newCart));
  };

  // Save favorites to localStorage
  const saveFavorites = (newFavs: Product[]) => {
    setFavorites(newFavs);
    localStorage.setItem('pre_favorites', JSON.stringify(newFavs));
  };

  // Cart Management
  const handleAddToCart = (product: Product, quantity: number, size?: string) => {
    const existingIndex = cart.findIndex(
      (item) => item.product.id === product.id && item.size === size
    );

    if (existingIndex > -1) {
      const updated = [...cart];
      updated[existingIndex].quantity += quantity;
      saveCart(updated);
    } else {
      saveCart([...cart, { product, quantity, size }]);
    }
  };

  const handleUpdateQuantity = (productId: string, quantity: number, size?: string) => {
    const updated = cart.map((item) => {
      if (item.product.id === productId && item.size === size) {
        return { ...item, quantity };
      }
      return item;
    });
    saveCart(updated);
  };

  const handleRemoveItem = (productId: string, size?: string) => {
    const updated = cart.filter(
      (item) => !(item.product.id === productId && item.size === size)
    );
    saveCart(updated);
  };

  const handleClearCart = () => {
    saveCart([]);
  };

  // Favorites Management
  const handleToggleFavorite = (product: Product) => {
    const isFav = favorites.some((fav) => fav.id === product.id);
    if (isFav) {
      saveFavorites(favorites.filter((fav) => fav.id !== product.id));
    } else {
      saveFavorites([...favorites, product]);
    }
  };

  const handleRemoveFavorite = (product: Product) => {
    saveFavorites(favorites.filter((fav) => fav.id !== product.id));
  };

  // View Detail
  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  // Scroll to top on view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between font-sans">
      {/* Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cart={cart}
        setIsCartOpen={setIsCartOpen}
        favorites={favorites}
        setIsFavoritesOpen={setIsFavoritesOpen}
      />

      {/* View router */}
      <main className="flex-1">
        {activeTab === 'inicio' && (
          <HomeView
            setActiveTab={setActiveTab}
            onViewProduct={handleViewProduct}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onAddToCart={handleAddToCart}
            setFilterCategory={setFilterCategory}
          />
        )}
        {activeTab === 'catalogo' && (
          <CatalogView
            onViewProduct={handleViewProduct}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onAddToCart={handleAddToCart}
            filterCategory={filterCategory}
            setFilterCategory={setFilterCategory}
          />
        )}
        {activeTab === 'quienes-somos' && (
          <AboutView setActiveTab={setActiveTab} />
        )}
        {activeTab === 'contacto' && (
          <ContactView />
        )}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        openClubModal={() => setIsClubModalOpen(true)}
      />

      {/* WhatsApp Floating Chat Bubble widget */}
      <WhatsAppWidget />

      {/* ==========================================
          OVERLAYS & MODALS
          ========================================== */}
      
      {/* Club PRE Membership Modal */}
      <ClubPREModal
        isOpen={isClubModalOpen}
        onClose={() => setIsClubModalOpen(false)}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={selectedProduct !== null}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
      />

      {/* Favorites Sidebar Drawer */}
      <FavoritesDrawer
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favorites={favorites}
        onRemoveFavorite={handleRemoveFavorite}
        onAddToCart={handleAddToCart}
        onViewProduct={(product) => {
          setIsFavoritesOpen(false);
          handleViewProduct(product);
        }}
      />

      {/* Quote Cart Sidebar Drawer */}
      <QuoteCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
