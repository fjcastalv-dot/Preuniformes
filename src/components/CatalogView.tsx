import React, { useState, useEffect } from 'react';
import { Search, Star, Heart, SlidersHorizontal, RefreshCcw, ArrowRight, Check } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS, CATEGORIES } from '../data';

interface CatalogViewProps {
  onViewProduct: (product: Product) => void;
  favorites: Product[];
  onToggleFavorite: (product: Product) => void;
  onAddToCart: (product: Product, quantity: number, size?: string) => void;
  filterCategory: string;
  setFilterCategory: (category: string) => void;
}

export default function CatalogView({
  onViewProduct,
  favorites,
  onToggleFavorite,
  onAddToCart,
  filterCategory,
  setFilterCategory,
}: CatalogViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [addedProductId, setAddedProductId] = useState<string | null>(null);
  const [projectEmail, setProjectEmail] = useState('');
  const [projectSubmitted, setProjectSubmitted] = useState(false);

  const itemsPerPage = 6;

  // Reset page when category or search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filterCategory, searchQuery]);

  // Filter products based on category and search query
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = filterCategory === 'todos' || product.category === filterCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.features.some((feat) => feat.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const handleQuickAdd = (product: Product) => {
    const size = product.category === 'calzado' ? undefined : 'M';
    onAddToCart(product, 1, size);
    setAddedProductId(product.id);
    setTimeout(() => {
      setAddedProductId(null);
    }, 1200);
  };

  const handleProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectEmail) return;
    setProjectSubmitted(true);
    setTimeout(() => {
      setProjectSubmitted(false);
      setProjectEmail('');
    }, 3000);
  };

  return (
    <div className="space-y-12 pb-16 animate-fade-in" id="catalog-view">
      {/* ==========================================
          CATALOG HEADER
          ========================================== */}
      <section className="bg-slate-950 border-b border-slate-900 py-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="font-display text-5xl sm:text-6xl text-white tracking-wider">
            NUESTRO CATÁLOGO
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-sans max-w-2xl mx-auto leading-relaxed">
            Vistiendo al Caribe Mexicano con uniformes de alto rendimiento. Confección certificada con costuras reforzadas y telas inteligentes preparadas para el calor extremo.
          </p>
        </div>
      </section>

      {/* ==========================================
          FILTERS & SEARCH BAR
          ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900 p-4 rounded-xl border border-slate-800">
          {/* Category Chip List */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-2 md:pb-0" id="category-chips">
            <SlidersHorizontal className="h-4 w-4 text-slate-500 mr-1 shrink-0 hidden md:block" />
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all cursor-pointer whitespace-nowrap ${
                  filterCategory === cat.id
                    ? 'bg-orange-600 text-white shadow-md'
                    : 'bg-slate-850 hover:bg-slate-800 text-slate-400 hover:text-white'
                }`}
                id={`chip-${cat.id}`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar polo, chef, bota..."
              className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2.5 pl-10 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-orange-500 transition-colors"
              id="catalog-search-input"
            />
            <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-600" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-3.5 text-xs text-slate-500 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Search feedback */}
        {searchQuery && (
          <p className="text-xs text-slate-400 italic">
            Mostrando resultados para "{searchQuery}"
            <button
              onClick={() => {
                setSearchQuery('');
                setFilterCategory('todos');
              }}
              className="ml-2 text-orange-500 hover:underline inline-flex items-center gap-1 cursor-pointer"
            >
              <RefreshCcw className="h-3 w-3" /> Limpiar filtros
            </button>
          </p>
        )}
      </section>

      {/* ==========================================
          PRODUCT GRID
          ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-slate-900 rounded-xl border border-slate-800 max-w-xl mx-auto space-y-4">
            <span className="text-4xl">🔍</span>
            <h3 className="font-semibold text-white">No se encontraron productos</h3>
            <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
              Pruebe cambiando la categoría o escribiendo términos diferentes en el campo de búsqueda.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setFilterCategory('todos');
              }}
              className="py-2 px-5 rounded bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Mostrar todo
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" id="product-catalog-grid">
            {paginatedProducts.map((product) => {
              const isFav = favorites.some((fav) => fav.id === product.id);
              const isAdded = addedProductId === product.id;

              return (
                <div
                  key={product.id}
                  className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-slate-750 transition-all flex flex-col group relative"
                >
                  {/* Card Image Wrapper */}
                  <div className="relative h-64 overflow-hidden bg-slate-950">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />

                    {/* Badge top-left */}
                    <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                      {product.isNew && (
                        <span className="bg-orange-600 text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded shadow">
                          Nuevo
                        </span>
                      )}
                      {product.isBestSeller && (
                        <span className="bg-amber-500 text-slate-950 text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded shadow">
                          Top Ventas
                        </span>
                      )}
                    </div>

                    {/* Favorites Circle toggle */}
                    <button
                      onClick={() => onToggleFavorite(product)}
                      className={`absolute top-4 right-4 p-2 rounded-full border shadow focus:outline-none transition-colors cursor-pointer ${
                        isFav
                          ? 'bg-orange-950/80 border-orange-500/50 text-orange-500'
                          : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:text-white'
                      }`}
                      aria-label="Agregar a favoritos"
                    >
                      <Heart className={`h-4.5 w-4.5 ${isFav ? 'fill-orange-500' : ''}`} />
                    </button>
                  </div>

                  {/* Info details */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-orange-500">
                          {product.category}
                        </span>
                        <div className="flex items-center text-amber-500 text-xs">
                          <Star className="h-3.5 w-3.5 fill-amber-500 shrink-0 mr-1" />
                          <span className="text-white font-semibold">{product.rating}</span>
                        </div>
                      </div>
                      <h3 className="font-bold text-white text-base truncate group-hover:text-orange-500 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Features checklist snippet */}
                    <div className="space-y-1 pt-1">
                      {product.features.slice(0, 2).map((feat, i) => (
                        <span key={i} className="block text-[10px] text-slate-500">
                          ✓ {feat}
                        </span>
                      ))}
                    </div>

                    {/* CTA Bottom Row */}
                    <div className="flex items-center justify-between border-t border-slate-800/80 pt-4 mt-auto">
                      <div className="flex flex-col">
                        <span className="font-mono text-sm font-semibold text-white">
                          ${product.price.toFixed(2)}
                        </span>
                        <span className="text-[9px] text-slate-500 uppercase tracking-wider">MXN + IVA</span>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => onViewProduct(product)}
                          className="py-2 px-3 rounded border border-slate-700 hover:bg-slate-800 text-slate-300 font-semibold text-xs transition-colors cursor-pointer"
                        >
                          Ficha
                        </button>
                        <button
                          onClick={() => handleQuickAdd(product)}
                          disabled={isAdded}
                          className={`py-2 px-4 rounded font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                            isAdded
                              ? 'bg-emerald-600 text-white'
                              : 'bg-orange-600 hover:bg-orange-700 text-white'
                          }`}
                        >
                          {isAdded ? '✓ LISTO' : 'COTIZAR'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* ==========================================
          PAGINATION CONTROLS
          ========================================== */}
      {filteredProducts.length > 0 && (
        <section className="flex items-center justify-center gap-4 max-w-7xl mx-auto px-4" id="pagination">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            aria-label="Página anterior"
          >
            ←
          </button>
          <span className="text-xs text-slate-400 font-mono">
            Página <strong className="text-white font-bold">{currentPage}</strong> de {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="p-2 rounded bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            aria-label="Página siguiente"
          >
            →
          </button>
        </section>
      )}

      {/* ==========================================
          ASYMMETRIC BOTTOM CTA
          ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-left">
            <h2 className="font-display text-4xl text-white tracking-wide leading-none">
              ¿NECESITAS UN PROYECTO <br />A MEDIDA?
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Si su cadena hotelera o restaurante requiere un diseño exclusivo de uniformes, desgloses de tallas masivas, o asesoría logística, ingrese su correo para programar una cita formal con nuestro Director de Cuentas Corporativas.
            </p>
          </div>

          <div className="w-full lg:w-auto shrink-0">
            {projectSubmitted ? (
              <div className="bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 p-4 rounded text-center text-xs font-semibold animate-pulse">
                ✓ ¡Contacto registrado! Nos comunicaremos a la brevedad.
              </div>
            ) : (
              <form onSubmit={handleProjectSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                <input
                  type="email"
                  required
                  value={projectEmail}
                  onChange={(e) => setProjectEmail(e.target.value)}
                  placeholder="Tu correo corporativo..."
                  className="bg-slate-950 border border-slate-800 rounded px-4 py-3.5 text-xs text-white focus:outline-none focus:border-orange-500 flex-1"
                />
                <button
                  type="submit"
                  className="py-3.5 px-6 rounded bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer shrink-0"
                >
                  Contactar
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
