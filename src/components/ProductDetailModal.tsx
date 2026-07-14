import { useState, useEffect } from 'react';
import { X, Heart, Star, ShoppingCart, Shield, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, size?: string) => void;
  favorites: Product[];
  onToggleFavorite: (product: Product) => void;
}

export default function ProductDetailModal({
  product,
  isOpen,
  onClose,
  onAddToCart,
  favorites,
  onToggleFavorite,
}: ProductDetailModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [successMsg, setSuccessMsg] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setQuantity(1);
      setSelectedSize('M');
      setSuccessMsg(false);
    }
  }, [isOpen, product]);

  if (!isOpen || !product) return null;

  const isFavorite = favorites.some((fav) => fav.id === product.id);
  const showSizeSelector = product.category !== 'calzado' && product.category !== 'accesorios';

  const handleAdd = () => {
    onAddToCart(product, quantity, showSizeSelector ? selectedSize : undefined);
    setSuccessMsg(true);
    setTimeout(() => {
      setSuccessMsg(false);
      onClose();
    }, 1500);
  };

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" id="product-detail-modal">
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col md:flex-row max-h-[95vh] md:max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/80 hover:bg-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer"
          aria-label="Cerrar detalles de producto"
          id="close-detail-modal-btn"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Left Column: Product Image & Highlights */}
        <div className="w-full md:w-1/2 relative bg-slate-950 flex items-center justify-center p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 md:h-[450px] object-cover rounded-lg"
            referrerPolicy="no-referrer"
          />
          {product.isNew && (
            <span className="absolute top-6 left-6 bg-orange-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded shadow">
              Nuevo
            </span>
          )}
          {product.isBestSeller && (
            <span className="absolute top-6 left-6 bg-amber-500 text-slate-950 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded shadow">
              Top Ventas
            </span>
          )}
        </div>

        {/* Right Column: Details & Actions */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between text-slate-200">
          <div className="space-y-4">
            {/* Category & Rating */}
            <div className="flex items-center justify-between">
              <span className="text-xs text-orange-500 font-semibold uppercase tracking-wider">
                Uniformes {product.category.toUpperCase()}
              </span>
              <div className="flex items-center space-x-1.5 text-xs text-slate-400">
                <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                <span className="text-white font-semibold">{product.rating}</span>
                <span>•</span>
                <span>Certificado PRE</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="font-display text-3xl sm:text-4xl text-white tracking-wide leading-tight">
              {product.name}
            </h3>

            {/* Price Description */}
            <div className="flex items-baseline space-x-2 border-b border-slate-800 pb-4">
              <span className="text-2xl font-mono text-white font-semibold">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-xs text-slate-500 uppercase tracking-widest">
                MXN + IVA (Sujeto a mayoreo)
              </span>
            </div>

            {/* Description */}
            <p className="text-xs text-slate-400 leading-relaxed">
              {product.description}
            </p>

            {/* Size Selector */}
            {showSizeSelector && (
              <div className="space-y-2">
                <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                  Seleccionar Talla:
                </span>
                <div className="flex space-x-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`h-9 w-12 rounded flex items-center justify-center font-mono text-xs font-semibold uppercase transition-all border cursor-pointer ${
                        selectedSize === size
                          ? 'bg-orange-600 border-orange-500 text-white shadow-md'
                          : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-500'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <p className="text-[10px] text-slate-500">
                  💡 ¿Necesita tallas especiales? Solicítelo en las notas de cotización.
                </p>
              </div>
            )}

            {/* Features Bullet List */}
            <div className="space-y-2">
              <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                Especificaciones Técnicas:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.features.map((feat, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs text-slate-300">
                    <Shield className="h-3.5 w-3.5 text-orange-500 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-8 border-t border-slate-800 pt-6 space-y-4">
            {successMsg ? (
              <div className="bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 p-3 rounded text-center text-xs font-semibold animate-pulse">
                ✓ ¡Agregado a la cotización con éxito!
              </div>
            ) : (
              <div className="flex items-center gap-3">
                {/* Quantity Controls */}
                <div className="flex items-center bg-slate-800 border border-slate-700 rounded h-11 px-2 shrink-0">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    -
                  </button>
                  <span className="px-3 font-mono text-sm text-white w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    +
                  </button>
                </div>

                {/* Add to Quote Button */}
                <button
                  onClick={handleAdd}
                  className="flex-1 h-11 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs uppercase tracking-wider rounded transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-orange-950/20"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Cotizar ({quantity} {quantity === 1 ? 'unidad' : 'unidades'})
                </button>

                {/* Favorite Toggle Button */}
                <button
                  onClick={() => onToggleFavorite(product)}
                  className={`h-11 w-11 rounded border border-slate-700 flex items-center justify-center transition-colors cursor-pointer ${
                    isFavorite
                      ? 'bg-orange-950/50 border-orange-500/50 text-orange-500'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white'
                  }`}
                  aria-label="Agregar a favoritos"
                >
                  <Heart className={`h-5 w-5 ${isFavorite ? 'fill-orange-500' : ''}`} />
                </button>
              </div>
            )}
            <p className="text-[10px] text-center text-slate-500">
              ⚡ Al agregar productos a su cotización, compilará una lista corporativa para recibir presupuesto formal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
