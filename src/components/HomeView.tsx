import { Sparkles, Shirt, Utensils, Briefcase, ShieldAlert, Footprints, ArrowRight, Star, Heart, Check, HelpCircle } from 'lucide-react';
import { ActiveTab, Product } from '../types';
import { PRODUCTS, CLIENT_LOGOS, TESTIMONIALS } from '../data';

interface HomeViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  onViewProduct: (product: Product) => void;
  favorites: Product[];
  onToggleFavorite: (product: Product) => void;
  onAddToCart: (product: Product, quantity: number, size?: string) => void;
  setFilterCategory: (category: string) => void;
}

export default function HomeView({
  setActiveTab,
  onViewProduct,
  favorites,
  onToggleFavorite,
  onAddToCart,
  setFilterCategory,
}: HomeViewProps) {
  // Get best sellers
  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller).slice(0, 3);

  const categories = [
    { id: 'restaurante', name: 'Restaurante', icon: Utensils, color: 'from-amber-600/30 to-amber-950/40' },
    { id: 'todos', name: 'Hotelería', icon: Sparkles, color: 'from-emerald-600/30 to-emerald-950/40' },
    { id: 'ejecutivo', name: 'Ejecutivo', icon: Briefcase, color: 'from-blue-600/30 to-blue-950/40' },
    { id: 'industrial', name: 'Industria', icon: ShieldAlert, color: 'from-red-600/30 to-red-950/40' },
    { id: 'polo', name: 'Polos', icon: Shirt, color: 'from-orange-600/30 to-orange-950/40' },
    { id: 'calzado', name: 'Calzado', icon: Footprints, color: 'from-purple-600/30 to-purple-950/40' },
  ];

  const handleCategoryClick = (catId: string) => {
    setFilterCategory(catId);
    setActiveTab('catalogo');
  };

  return (
    <div className="space-y-20 pb-16 animate-fade-in" id="home-view">
      {/* ==========================================
          HERO BANNER
          ========================================== */}
      <section className="relative bg-slate-950 overflow-hidden min-h-[500px] sm:min-h-[600px] flex items-center">
        {/* Background Image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1200"
            alt="Fibras Textiles de Uniformes PRE"
            className="w-full h-full object-cover opacity-35"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" />
        </div>

        {/* Content Block */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-left">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-600/20 border border-orange-500/30 rounded text-orange-400 text-xs font-semibold tracking-wider uppercase mb-6">
            <Sparkles className="h-3.5 w-3.5" /> Colección Técnica 2026
          </span>

          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl tracking-wider text-white leading-none">
            A PRUEBA. <br />
            <span className="text-orange-500">DE SUDOR.</span>
          </h1>

          <p className="mt-4 max-w-lg text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            Uniformes corporativos de alto rendimiento diseñados específicamente para el clima del Caribe Mexicano. Máxima transpirabilidad, tejidos anti-mancha y durabilidad extrema en Cancún y la Riviera Maya.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => {
                setFilterCategory('todos');
                setActiveTab('catalogo');
              }}
              className="py-3.5 px-8 rounded bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-lg shadow-orange-950/30 flex items-center gap-2"
              id="hero-buy-btn"
            >
              Comprar Catálogo <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => setActiveTab('quienes-somos')}
              className="py-3.5 px-8 rounded border border-slate-700 hover:bg-slate-800 hover:border-slate-500 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
              id="hero-learn-btn"
            >
              Saber más
            </button>
          </div>
        </div>
      </section>

      {/* ==========================================
          CLIENT LOGOS BAR
          ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-y border-slate-900 py-8">
        <p className="text-center text-[10px] uppercase tracking-[0.3em] font-semibold text-slate-500 mb-6">
          Vistiendo al Éxito en el Caribe Mexicano — Más de 200 Clientes Corporativos
        </p>
        <div className="flex flex-wrap items-center justify-around gap-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
          {CLIENT_LOGOS.map((client, idx) => (
            <div key={idx} className="flex items-center gap-2 text-slate-300 font-display text-lg tracking-widest">
              <span className="text-2xl">{client.logo}</span>
              <span>{client.name.split(' ')[0].toUpperCase()}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ==========================================
          COMPRA POR CATEGORÍAS
          ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <h2 className="font-display text-4xl sm:text-5xl text-white tracking-wider">
            COMPRA POR CATEGORÍAS
          </h2>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Seleccionamos y confeccionamos fibras textiles óptimas para cada industria en Quintana Roo.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" id="categories-grid">
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`p-6 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-orange-500/50 text-slate-300 hover:text-white transition-all text-center flex flex-col items-center justify-center gap-4 cursor-pointer group shadow`}
                id={`cat-card-${cat.id}`}
              >
                <div className="p-4 rounded-full bg-slate-950 text-orange-500 group-hover:scale-110 transition-transform">
                  <IconComponent className="h-6 w-6" />
                </div>
                <span className="font-semibold text-sm uppercase tracking-wider">{cat.name}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ==========================================
          NUESTROS SERVICIOS (Bento Grid)
          ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="font-display text-4xl sm:text-5xl text-white tracking-wider">
            NUESTROS SERVICIOS ESPECIALIZADOS
          </h2>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Servicio integral de personalización y maquila a gran escala.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main big box: Embroidery / Sublimation */}
          <div className="lg:col-span-7 bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all flex flex-col md:flex-row h-full">
            <div className="md:w-1/2 relative h-48 md:h-auto min-h-[220px]">
              <img
                src="https://images.unsplash.com/photo-1613941408107-16781cb517f7?auto=format&fit=crop&q=80&w=600"
                alt="Bordados de Alta Definicion"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900 via-transparent to-transparent" />
            </div>
            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[10px] text-orange-500 uppercase tracking-widest font-bold">Personalización</span>
                <h3 className="font-display text-3xl text-white tracking-wider mt-2">
                  Bordados & Sublimados de Alta Definición
                </h3>
                <p className="text-xs text-slate-400 mt-2 font-sans leading-relaxed">
                  Logotipos de nitidez extrema que soportan más de 100 lavadas industriales sin perder brillo ni deshilacharse. Tecnología computarizada de última generación.
                </p>
              </div>
              <button
                onClick={() => {
                  setFilterCategory('todos');
                  setActiveTab('catalogo');
                }}
                className="py-2.5 px-5 rounded border border-slate-700 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider self-start transition-all cursor-pointer flex items-center gap-1.5"
              >
                Explorar Catálogo <ArrowRight className="h-3.5 w-3.5 text-orange-500" />
              </button>
            </div>
          </div>

          {/* Side Box 1: Design Advisory */}
          <div className="lg:col-span-5 bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-6 h-full">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-full bg-slate-950 flex items-center justify-center text-orange-500 text-xl font-bold">
                ✏️
              </div>
              <h3 className="font-display text-3xl text-white tracking-wider">
                Asesoría de Diseño Textil 360°
              </h3>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                Le ayudamos a seleccionar los cortes, materiales y colores que mejor se adaptan a su identidad corporativa y a las exigencias operativas de su staff.
              </p>
            </div>
            <button
              onClick={() => setActiveTab('contacto')}
              className="py-2.5 px-5 rounded bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider self-start transition-all cursor-pointer flex items-center gap-1.5"
            >
              Cotizar asesoría gratis <ArrowRight className="h-3.5 w-3.5 text-orange-500" />
            </button>
          </div>

          {/* Lower Box 1: Table Linen (Mantelería) */}
          <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-slate-700 transition-all flex flex-col justify-between space-y-6 h-full">
            <div className="space-y-4">
              <span className="text-[10px] text-orange-500 uppercase tracking-widest font-bold">Línea Hotelera</span>
              <h3 className="font-display text-3xl text-white tracking-wider">
                Mantelería y Blancos de Lujo
              </h3>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                Confección de alta resistencia para restaurantes y eventos masivos:
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="text-orange-500 font-bold">•</span> Manteles Antimanchas con Teflón
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500 font-bold">•</span> Servilletas de Tela de Alta Duración
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500 font-bold">•</span> Caminos de Mesa Elegantes a Medida
                </li>
              </ul>
            </div>
            <button
              onClick={() => setActiveTab('contacto')}
              className="py-2.5 px-5 rounded border border-slate-800 hover:bg-slate-900 text-white font-bold text-xs uppercase tracking-wider self-start transition-colors cursor-pointer"
            >
              Cotizar Mantelería
            </button>
          </div>

          {/* Lower Box 2: Bulk capability (Warehouse background) */}
          <div className="lg:col-span-7 bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all relative flex flex-col justify-end p-6 sm:p-8 min-h-[220px]">
            <img
              src="https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?auto=format&fit=crop&q=80&w=600"
              alt="Capacidad de Mayoreo"
              className="absolute inset-0 w-full h-full object-cover opacity-25"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
            <div className="relative z-10 space-y-3">
              <span className="inline-block bg-orange-600 text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">
                Mayoreo
              </span>
              <h3 className="font-display text-3xl text-white tracking-wider">
                Capacidad Industrial de Maquila
              </h3>
              <p className="text-xs text-slate-300 font-sans leading-relaxed max-w-md">
                Suministramos uniformes corporativos a grandes hoteles y cadenas de restaurantes en Quintana Roo. Logística integrada con entregas por etapas de inauguración.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          BEST SELLERS
          ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <h2 className="font-display text-4xl sm:text-5xl text-white tracking-wider">
              NUESTROS BEST SELLERS
            </h2>
            <p className="text-xs text-slate-400 max-w-md">
              Las prendas preferidas por las corporaciones más influyentes del Caribe Mexicano.
            </p>
          </div>
          <button
            onClick={() => {
              setFilterCategory('todos');
              setActiveTab('catalogo');
            }}
            className="py-2.5 px-6 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-orange-500/40 text-slate-300 hover:text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shrink-0 flex items-center gap-1.5"
          >
            Ver todos los productos <ArrowRight className="h-3.5 w-3.5 text-orange-500" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bestSellers.map((product) => {
            const isFav = favorites.some((fav) => fav.id === product.id);
            return (
              <div
                key={product.id}
                className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all flex flex-col group relative"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-slate-950">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlay buttons */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <button
                      onClick={() => onToggleFavorite(product)}
                      className={`p-2 rounded-full border shadow focus:outline-none cursor-pointer transition-colors ${
                        isFav
                          ? 'bg-orange-950/80 border-orange-500/50 text-orange-500'
                          : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:text-white'
                      }`}
                      aria-label="Guardar favorito"
                    >
                      <Heart className={`h-4.5 w-4.5 ${isFav ? 'fill-orange-500' : ''}`} />
                    </button>
                  </div>

                  <span className="absolute bottom-4 left-4 bg-orange-600 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded shadow">
                    Best Seller
                  </span>
                </div>

                {/* Info */}
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

                  <div className="flex items-center justify-between border-t border-slate-800/80 pt-4 mt-auto">
                    <span className="font-mono text-sm font-semibold text-white">
                      ${product.price.toFixed(2)} <span className="text-[10px] text-slate-500">MXN</span>
                    </span>
                    <button
                      onClick={() => onViewProduct(product)}
                      className="py-1.5 px-4 rounded bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      COTIZAR
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==========================================
          ASYMMETRIC CTA
          ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl overflow-hidden relative p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 h-64 w-64 bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4 text-left max-w-xl">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-wide leading-none">
              ¿LISTO PARA VESTIR <br />A TU EQUIPO?
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
              Solicite un catálogo digital adaptado a su sector o programe una visita física de un ejecutivo con muestras reales de telas en Cancún, Riviera Maya o Riviera Nayarit.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('contacto')}
              className="py-4 px-8 rounded bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer shadow-lg shadow-orange-950/40 text-center"
            >
              SOLICITAR COTIZACIÓN
            </button>
            <button
              onClick={() => {
                setFilterCategory('todos');
                setActiveTab('catalogo');
              }}
              className="py-4 px-8 rounded border border-slate-700 hover:bg-slate-800 hover:border-slate-500 text-white font-bold text-xs uppercase tracking-widest transition-all cursor-pointer text-center"
            >
              VER CATÁLOGOS
            </button>
          </div>
        </div>
      </section>

      {/* ==========================================
          TESTIMONIALS SECTION
          ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2">
          <h2 className="font-display text-4xl sm:text-5xl text-white tracking-wider">
            LO QUE OPINAN NUESTROS CLIENTES
          </h2>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            La confianza de los líderes de la industria turística y restaurantera nos respalda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-8 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex space-x-1 text-amber-500">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-amber-500" />
                  ))}
                </div>
                <p className="text-xs text-slate-300 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="border-t border-slate-800/80 pt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-slate-300">
                  {testimonial.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-xs text-white">{testimonial.name}</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">{testimonial.role}</p>
                  <p className="text-[9px] text-orange-500 uppercase tracking-widest font-semibold">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
