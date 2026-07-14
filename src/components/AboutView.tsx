import { Shield, Sparkles, Trophy, Lightbulb, Users, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react';
import { ActiveTab } from '../types';

interface AboutViewProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function AboutView({ setActiveTab }: AboutViewProps) {
  const pillars = [
    {
      num: '01',
      title: 'Calidad Técnica',
      badges: ['Anti-mancha', 'Transpirable', 'Secado Rápido', 'Resistencia UV'],
      description:
        'Seleccionamos hilos y composiciones moleculares de fibras técnicas que repelen líquidos, reducen manchas de grasa corporales y maximizan la evaporación del vapor del sudor.',
    },
    {
      num: '02',
      title: 'Asesoría 360°',
      badges: ['Muestras físicas', 'Logística integrada', 'Asignación de Ejecutivo'],
      description:
        'Le acompañamos desde el boceto inicial y el ponchado digital del logotipo, hasta el tallaje físico en sitio para garantizar el ajuste exacto de cada colaborador.',
    },
    {
      num: '03',
      title: 'Diseño Vanguardista',
      badges: ['Ergonomía', 'Cortes modernos', 'Durabilidad extrema'],
      description:
        'Nuestros patrones respetan los movimientos operativos del personal de cocina, camaristas o ingenieros de campo, combinando confort con una silueta estilizada.',
    },
  ];

  const stats = [
    { value: '12+', label: 'Años de historia' },
    { value: '500k+', label: 'Prendas confeccionadas' },
    { value: '200+', label: 'Clientes corporativos' },
    { value: '100%', label: 'Diseño e innovación propios' },
  ];

  return (
    <div className="space-y-20 pb-16 animate-fade-in" id="about-view">
      {/* ==========================================
          HERO BANNER
          ========================================== */}
      <section className="relative bg-slate-950 overflow-hidden min-h-[450px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=1200"
            alt="Fábrica Textil de Uniformes PRE"
            className="w-full h-full object-cover opacity-25"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-left">
          <span className="text-orange-500 text-xs font-semibold tracking-widest uppercase block mb-4">
            NUESTRA HISTORIA
          </span>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl tracking-wider text-white leading-none">
            12 AÑOS VISTIENDO <br />
            <span className="text-orange-500">AL CARIBE MEXICANO</span>
          </h1>
          <p className="mt-4 max-w-xl text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            Fundada en Cancún, Uniformes PRE nació con el propósito de erradicar los uniformes calurosos e incómodos. Hoy, somos la maquiladora textil preferida por los hoteles, restaurantes y constructoras líderes de Quintana Roo.
          </p>
          <div className="mt-6 flex gap-4">
            <button
              onClick={() => setActiveTab('contacto')}
              className="py-3 px-6 rounded bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Nuestra Planta
            </button>
            <button
              onClick={() => {
                const target = document.getElementById('trayectoria-section');
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              }}
              className="py-3 px-6 rounded border border-slate-700 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Ver Trayectoria
            </button>
          </div>
        </div>
      </section>

      {/* ==========================================
          STATS TICKER
          ========================================== */}
      <section className="bg-slate-900 border-y border-slate-800/80 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <span className="font-display text-4xl sm:text-5xl text-orange-500 tracking-wider block">
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 font-semibold">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ==========================================
          NUESTRA TRAYECTORIA SECTION
          ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="trayectoria-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Narrative */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="text-[10px] text-orange-500 uppercase tracking-widest font-bold">Hecho en México</span>
            <h2 className="font-display text-4xl sm:text-5xl text-white tracking-wide leading-none">
              PRECISIÓN EN <br />CADA PUNTADA
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              Comenzamos hace más de una década con una sola bordadora y un compromiso inquebrantable: ofrecer la máxima calidad en Cancún. Hoy operamos una de las plantas industriales más tecnificadas del estado de Quintana Roo.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Nuestras prendas pasan por pruebas extremas de termorregulación y lavado de alta alcalinidad. Entendemos que el uniforme corporativo no es solo ropa; es la armadura diaria de su personal y la primera impresión de su marca ante huéspedes de todo el mundo.
            </p>
            <div className="pt-2">
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <CheckCircle2 className="h-5 w-5 text-orange-500 shrink-0" />
                <span>Hilos de alta resistencia alemana (Isacord)</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-300 mt-2.5">
                <CheckCircle2 className="h-5 w-5 text-orange-500 shrink-0" />
                <span>Patronaje computarizado Gerber Technology</span>
              </div>
            </div>
          </div>

          {/* Right: Asymmetric Photo Grid */}
          <div className="lg:col-span-7 grid grid-cols-12 gap-4">
            <div className="col-span-8">
              <img
                src="https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&q=80&w=500"
                alt="Detalle de Costura"
                className="w-full h-64 sm:h-80 object-cover rounded-xl border border-slate-800"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="col-span-4 self-center">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=300"
                alt="Uniformes Ejecutivos"
                className="w-full h-40 sm:h-48 object-cover rounded-xl border border-slate-800"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="col-span-4">
              <div className="bg-orange-600 rounded-xl h-24 sm:h-32 flex flex-col items-center justify-center text-center p-3 text-white border border-orange-500">
                <span className="font-display text-2xl sm:text-3xl leading-none">ISO 9001</span>
                <span className="text-[8px] uppercase tracking-wider font-semibold mt-1">Estándares Internacionales</span>
              </div>
            </div>
            <div className="col-span-8">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=500"
                alt="Chef Plating Uniform"
                className="w-full h-40 sm:h-48 object-cover rounded-xl border border-slate-800"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          LOS PILARES DEL PRESTIGE (Bento Columns)
          ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2">
          <h2 className="font-display text-4xl sm:text-5xl text-white tracking-wider animate-pulse">
            LOS PILARES DEL PRESTIGE
          </h2>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Por qué las corporaciones de alta gama nos prefieren sobre competidores nacionales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pil) => (
            <div
              key={pil.num}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 text-left hover:border-orange-500/30 transition-colors group"
            >
              <div className="space-y-4">
                <span className="font-mono text-4xl text-orange-500/35 font-bold group-hover:text-orange-500/90 transition-colors">
                  {pil.num}
                </span>
                <h3 className="font-display text-2xl text-white tracking-wide">
                  {pil.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {pil.description}
                </p>
              </div>

              {/* Chips list */}
              <div className="flex flex-wrap gap-2 border-t border-slate-800/80 pt-4">
                {pil.badges.map((badge, bIdx) => (
                  <span
                    key={bIdx}
                    className="text-[9px] font-semibold bg-slate-950 border border-slate-800/60 text-slate-400 px-2 py-1 rounded"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==========================================
          ASYMMETRIC EXEC BLOCK
          ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col lg:flex-row h-full">
          {/* Left Column: Image with overlay */}
          <div className="lg:w-1/2 relative min-h-[300px] h-64 lg:h-auto">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
              alt="Ejecutivos en Cancun"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent" />
            <div className="absolute bottom-6 left-6 z-10 bg-orange-600 text-white font-display text-2xl tracking-wider py-2 px-5 rounded uppercase">
              Vistiendo el éxito
            </div>
          </div>

          {/* Right Column: Text & CTAs */}
          <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-between space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-[10px] text-orange-500 uppercase tracking-widest font-bold">Proyección Corporativa</span>
              <h2 className="font-display text-4xl sm:text-5xl text-white tracking-wide leading-none">
                ¿LISTO PARA TRANSFORMAR <br />LA IMAGEN DE SU EMPRESA?
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Un uniforme de excelencia eleva la moral de sus colaboradores, consolida la presencia de su marca en el Caribe y transmite el rigor y profesionalismo de su servicio desde el primer segundo.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-800">
              <button
                onClick={() => setActiveTab('contacto')}
                className="py-3 px-6 rounded bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer text-center"
              >
                Solicitar Cotización
              </button>
              <a
                href="https://wa.me/529983141592"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 rounded border border-slate-700 hover:bg-slate-800 text-slate-300 font-bold text-xs uppercase tracking-wider transition-colors text-center cursor-pointer inline-flex items-center justify-center gap-1.5"
              >
                Asesoría WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
