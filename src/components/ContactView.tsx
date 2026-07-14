import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, ArrowRight, CheckCircle2, ExternalLink, Sparkles } from 'lucide-react';

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Custom high-contrast stylized map representation
  return (
    <div className="space-y-16 pb-16 animate-fade-in" id="contact-view">
      {/* ==========================================
          HERO HEADER BLOCK
          ========================================== */}
      <section className="bg-slate-950 border-b border-slate-900 py-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-orange-500 text-xs font-semibold tracking-widest uppercase block">
            UBICACIÓN Y ATENCIÓN
          </span>
          <h1 className="font-display text-5xl sm:text-6xl text-white tracking-wider">
            PONTE EN CONTACTO
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-sans max-w-xl mx-auto leading-relaxed">
            Nuestros asesores textiles están listos para atenderle de forma inmediata. Solicite muestras, cotizaciones de mayoreo o visítenos en Cancún.
          </p>
        </div>
      </section>

      {/* ==========================================
          BENTO CONTACT LAYOUT
          ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Block: Contact Form */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 text-left shadow-xl">
            <div>
              <h2 className="font-display text-3xl text-white tracking-wide">
                SOLICITA UNA COTIZACIÓN RÁPIDA
              </h2>
              <p className="text-xs text-slate-400 mt-1 font-sans">
                Complete el formulario y reciba un presupuesto preliminar en menos de 2 horas.
              </p>
            </div>

            {isSubmitted && (
              <div className="bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 p-4 rounded-lg flex items-start gap-3 text-xs animate-pulse">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold">¡Mensaje enviado con éxito!</strong>
                  <span>Su solicitud ha sido dirigida al departamento de cuentas de Cancún. Un ejecutivo comercial se pondrá en contacto con usted por correo y WhatsApp en unos instantes.</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ej. Lic. Mariana Ruiz"
                    className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-company" className="block text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
                    Empresa / Hotel
                  </label>
                  <input
                    type="text"
                    id="contact-company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Ej. Hotel Moon Palace Cancun"
                    className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="marianaruiz@empresa.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Ej. (998) 555-0192"
                    className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
                  ¿En qué podemos ayudarte? (Prendas, colores, cantidades estimadas...) *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ej. Necesitamos cotizar 40 polos dryfit de color azul marino bordadas con nuestro logotipo al frente para el personal de recepción..."
                  className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-orange-950/20 disabled:opacity-50"
              >
                {isSubmitting ? 'Enviando mensaje...' : 'Enviar Mensaje de Solicitud'}
                {!isSubmitting && <ArrowRight className="h-4 w-4" />}
              </button>
            </form>
          </div>

          {/* Right Column: Info Cards Bento */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Direct Card (Orange block) */}
            <div className="bg-orange-600 rounded-2xl p-6 sm:p-8 text-white text-left space-y-4 shadow-xl border border-orange-500 relative overflow-hidden group">
              <div className="absolute -right-6 -bottom-6 text-orange-500/20 text-9xl font-display font-bold select-none pointer-events-none">
                PRE
              </div>
              <span className="inline-block bg-white/15 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                Canal Directo
              </span>
              <h3 className="font-display text-3xl tracking-wider leading-none">
                WHATSAPP AUTOMÁTICO <br />
                VENTAS CANCÚN
              </h3>
              <p className="text-xs text-orange-100 font-sans leading-relaxed">
                ¿Necesita una respuesta express? Envíenos un mensaje directamente por WhatsApp. Nuestro bot y asesores le darán seguimiento instantáneo.
              </p>
              <a
                href="https://wa.me/529983141592"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 py-2.5 px-5 rounded bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Iniciar Chat WhatsApp <ArrowRight className="h-3.5 w-3.5 text-orange-500" />
              </a>
            </div>

            {/* Store details info Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 text-left space-y-5">
              <h3 className="font-display text-2xl text-white tracking-wider border-b border-slate-800 pb-3">
                NUESTRA TIENDA FÍSICA
              </h3>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white text-xs uppercase tracking-wide">Dirección Cancún:</strong>
                    <p className="text-slate-400 mt-0.5">
                      Av. López Portillo SM 62 Mz 7 Lte 13, Cancún, Q.R.<br />
                      <span className="text-orange-500 font-semibold">Ubicación Clave: Frente a Mega Soriana López Portillo.</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white text-xs uppercase tracking-wide">Teléfono de Oficina:</strong>
                    <p className="text-slate-400 mt-0.5">+52 (998) 314-1592</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white text-xs uppercase tracking-wide">Horarios de Atención:</strong>
                    <p className="text-slate-400 mt-0.5">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                    <p className="text-slate-400">Sábados: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white text-xs uppercase tracking-wide">Soporte y Cotizaciones:</strong>
                    <p className="text-slate-400 mt-0.5">ventas@uniformespre.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          MAP SECTION (Visítanos en Cancún)
          ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-left space-y-2">
          <h2 className="font-display text-4xl text-white tracking-wider">
            VISÍTANOS EN CANCÚN
          </h2>
          <p className="text-xs text-slate-400 font-sans">
            Av. José López Portillo (arteria principal de Cancún). Estacionamiento cómodo al frente.
          </p>
        </div>

        {/* Custom High-Contrast Styled Map Representation */}
        <div className="relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden h-[380px] flex items-center justify-center p-6 shadow-xl">
          {/* Stylized Overhead Map SVG graphic backdrop */}
          <div className="absolute inset-0 z-0 opacity-25 flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 1000 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Roads drawing lines */}
              <path d="M-100 200 L1100 200" stroke="#475569" strokeWidth="48" />
              <path d="M500 -100 L500 500" stroke="#475569" strokeWidth="36" />
              <path d="M-100 80 L1100 320" stroke="#334155" strokeWidth="12" strokeDasharray="8,8" />
              {/* Labels */}
              <text x="150" y="170" fill="#94A3B8" fontSize="14" className="font-mono uppercase font-semibold">Blvd. López Portillo</text>
              <text x="520" y="80" fill="#94A3B8" fontSize="12" className="font-mono uppercase font-semibold">Calle 10 Poniente</text>
              {/* Grid elements representing buildings */}
              <rect x="100" y="30" width="220" height="120" rx="6" fill="#1E293B" stroke="#334155" />
              <text x="210" y="95" fill="#475569" fontSize="16" textAnchor="middle" className="font-display">MEGA SORIANA</text>
              
              <rect x="620" y="30" width="280" height="120" rx="6" fill="#1E293B" stroke="#334155" />
              <text x="760" y="95" fill="#475569" fontSize="14" textAnchor="middle" className="font-sans font-semibold text-xs">Zona Comercial SM 62</text>
              
              <rect x="100" y="250" width="340" height="100" rx="6" fill="#1E293B" stroke="#334155" />
              <text x="270" y="305" fill="#475569" fontSize="14" textAnchor="middle" className="font-sans font-semibold">Parque de la 62</text>
            </svg>
          </div>

          {/* Real Map Iframe (embedded OSM map focused on Cancun soriana lopez portillo) */}
          <div className="absolute inset-0 z-0">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-86.8480%2C21.1680%2C-86.8380%2C21.1780&amp;layer=mapnik&amp;marker=21.1730%2C-86.8430"
              className="w-full h-full border-0 grayscale opacity-45"
              title="OpenStreetMap Lopez Portillo Cancun"
            />
          </div>

          {/* Floating Map Info Overlay panel */}
          <div className="relative z-10 bg-slate-950/95 border border-slate-800 p-6 rounded-xl shadow-2xl max-w-sm ml-auto mr-auto lg:mr-8 text-left space-y-3">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded bg-orange-600 text-white font-bold text-xs uppercase tracking-wider">TIENDA PRE</span>
              <span className="text-[10px] text-emerald-400 font-semibold">• ABIERTO</span>
            </div>
            <h3 className="font-display text-2xl text-white tracking-wide">
              UNIFORMES PRE CANCÚN
            </h3>
            <p className="text-xs text-slate-400 font-sans leading-relaxed">
              Frente a Mega Soriana de la Av. López Portillo. Contamos con exhibición de prendas terminadas, muestrarios de telas y bordadora industrial en sitio.
            </p>
            <div className="pt-2 flex gap-3">
              <a
                href="https://maps.google.com/?q=Uniformes+PRE+Cancun+Soriana+Lopez+Portillo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-4 rounded bg-orange-600 hover:bg-orange-700 text-white font-bold text-[10px] uppercase tracking-wider transition-colors text-center inline-flex items-center justify-center gap-1.5 cursor-pointer"
              >
                Google Maps <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SÍGUENOS EN REDES: INDUSTRIAL GALLERY
          ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="font-display text-4xl text-white tracking-wider">
            NUESTRA PASIÓN EN EL TALLER
          </h2>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Siga nuestro proceso artesanal e industrial en tiempo real en nuestras redes sociales.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4" id="instagram-gallery">
          <div className="relative overflow-hidden rounded-xl bg-slate-950 h-48 border border-slate-800 group">
            <img
              src="https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&q=80&w=400"
              alt="Bordado computarizado industrial"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-4">
              <span className="text-[10px] text-white uppercase font-mono tracking-widest font-semibold">#BordadoComputarizado</span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl bg-slate-950 h-48 border border-slate-800 group">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400"
              alt="Chispas y seguridad industrial"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-4">
              <span className="text-[10px] text-white uppercase font-mono tracking-widest font-semibold">#SeguridadPREstiga</span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl bg-slate-950 h-48 border border-slate-800 group">
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=400"
              alt="Plating filipina executive"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-4">
              <span className="text-[10px] text-white uppercase font-mono tracking-widest font-semibold">#GastronomiaCaribe</span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl bg-slate-950 h-48 border border-slate-800 group">
            <img
              src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=400"
              alt="Tejidos y telas finas"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-4">
              <span className="text-[10px] text-white uppercase font-mono tracking-widest font-semibold">#FibrasTecnicas</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
