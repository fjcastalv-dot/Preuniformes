import { ShoppingCart, Heart, Menu, X } from 'lucide-react';
import { ActiveTab, CartItem, Product } from '../types';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  cart: CartItem[];
  setIsCartOpen: (open: boolean) => void;
  favorites: Product[];
  setIsFavoritesOpen: (open: boolean) => void;
}

export default function Header({
  activeTab,
  setActiveTab,
  cart,
  setIsCartOpen,
  favorites,
  setIsFavoritesOpen,
}: HeaderProps) {
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const navItems: { id: ActiveTab; label: string }[] = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'catalogo', label: 'Catálogo' },
    { id: 'quienes-somos', label: 'Quiénes Somos' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-900 text-white border-b border-slate-800 shadow-md">
      {/* Top Banner */}
      <div className="bg-orange-600 text-xs py-1.5 px-4 text-center font-medium tracking-wider">
        🔥 ENVIOS A TODA LA RIVIERA MAYA | COTIZACIÓN GRATUITA EN MENOS DE 24 HORAS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => setActiveTab('inicio')}
            className="flex flex-col items-start focus:outline-none cursor-pointer"
            id="header-logo-btn"
          >
            <span className="font-display text-3xl sm:text-4xl tracking-wider text-white leading-none">
              UNIFORMES <span className="text-orange-500">PRE</span>
            </span>
            <span className="text-[9px] tracking-[0.3em] font-sans text-slate-400 font-bold -mt-0.5">
              PRESTIGE APPAREL
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1" id="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-4 py-2 text-sm font-semibold uppercase tracking-wider rounded-md transition-all duration-200 cursor-pointer ${
                  activeTab === item.id
                    ? 'text-orange-500 bg-slate-800/60'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/30'
                }`}
                id={`nav-item-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            {/* Favorites Button */}
            <button
              onClick={() => setIsFavoritesOpen(true)}
              className="relative p-2.5 rounded-full hover:bg-slate-800 text-slate-300 hover:text-orange-500 transition-colors focus:outline-none cursor-pointer"
              aria-label="Ver favoritos"
              id="favorites-toggle-btn"
            >
              <Heart className={`h-6 w-6 ${favorites.length > 0 ? 'fill-orange-500 text-orange-500' : ''}`} />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-600 text-[10px] font-bold text-white ring-2 ring-slate-900">
                  {favorites.length}
                </span>
              )}
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full hover:bg-slate-800 text-slate-300 hover:text-orange-500 transition-colors focus:outline-none cursor-pointer"
              aria-label="Ver cotización"
              id="cart-toggle-btn"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white ring-2 ring-slate-900 animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <MobileNavMenu activeTab={activeTab} setActiveTab={setActiveTab} navItems={navItems} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

// Separate component for Mobile Navigation Toggle
import { useState } from 'react';

function MobileNavMenu({
  activeTab,
  setActiveTab,
  navItems,
}: {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  navItems: { id: ActiveTab; label: string }[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
        aria-label="Menu principal"
        id="mobile-menu-toggle"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-slate-900 border-b border-slate-800 z-50 p-4 shadow-xl flex flex-col space-y-2 animate-fade-in md:hidden">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-3 text-sm font-semibold uppercase tracking-wider rounded-md transition-colors cursor-pointer ${
                activeTab === item.id
                  ? 'text-orange-500 bg-slate-800'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
              id={`mobile-nav-item-${item.id}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
