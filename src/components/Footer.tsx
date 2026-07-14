import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import { ActiveTab } from '../types';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
  openClubModal: () => void;
}

export default function Footer({ setActiveTab, openClubModal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900" id="app-footer">
      {/* Top Banner Contact Info */}
      <div className="bg-slate-900 border-b border-slate-800 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-4">
            <div className="p-3 rounded-full bg-slate-800 text-orange-500">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm uppercase tracking-wider">Ubicación de Tienda</h4>
              <p className="text-xs text-slate-400 mt-1">
                Av. López Portillo SM 62 Mz 7 Lte 13, Cancún, Q.R. <br />
                <span className="text-orange-500 font-medium">Frente a Mega Soriana</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-4">
            <div className="p-3 rounded-full bg-slate-800 text-orange-500">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm uppercase tracking-wider">Atención Telefónica / WhatsApp</h4>
              <p className="text-xs text-slate-400 mt-1">
                +52 (998) 314-1592 <br />
                <span className="text-slate-400">ventas@uniformespre.com</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-4">
            <div className="p-3 rounded-full bg-slate-800 text-orange-500">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm uppercase tracking-wider">Horario de Servicio</h4>
              <p className="text-xs text-slate-400 mt-1">
                Lunes a Viernes: 9:00 AM - 6:00 PM <br />
                Sábados: 9:00 AM - 2:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links Grid */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Description */}
        <div className="col-span-1 md:col-span-1 flex flex-col space-y-4">
          <button
            onClick={() => setActiveTab('inicio')}
            className="flex flex-col items-start focus:outline-none text-left cursor-pointer"
            id="footer-logo-btn"
          >
            <span className="font-display text-3xl tracking-wider text-white leading-none">
              UNIFORMES <span className="text-orange-500">PRE</span>
            </span>
            <span className="text-[9px] tracking-[0.3em] font-sans text-slate-500 font-bold -mt-0.5">
              PRESTIGE APPAREL
            </span>
          </button>
          <p className="text-xs text-slate-400 leading-relaxed">
            Vistiendo al Caribe Mexicano con uniformes de alto rendimiento diseñados específicamente para aguantar la humedad, calor e intensa actividad de la Riviera Maya.
          </p>
          <div className="flex space-x-3 pt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-900 hover:bg-orange-600 text-slate-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-900 hover:bg-orange-600 text-slate-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-900 hover:bg-orange-600 text-slate-400 hover:text-white transition-colors"
              aria-label="Linkedin"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Column 2: Empresa */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-white mb-4">Empresa</h3>
          <ul className="space-y-2.5 text-xs">
            <li>
              <button
                onClick={() => setActiveTab('inicio')}
                className="hover:text-orange-500 transition-colors cursor-pointer"
              >
                Inicio
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('catalogo')}
                className="hover:text-orange-500 transition-colors cursor-pointer"
              >
                Catálogo de Productos
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('quienes-somos')}
                className="hover:text-orange-500 transition-colors cursor-pointer"
              >
                Quiénes Somos
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('contacto')}
                className="hover:text-orange-500 transition-colors cursor-pointer"
              >
                Contacto
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Servicios */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-white mb-4">Servicios</h3>
          <ul className="space-y-2.5 text-xs">
            <li className="hover:text-orange-500 cursor-pointer transition-colors">
              Bordado Industrial Computarizado
            </li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">
              Sublimación Full-Print de Alta Resolución
            </li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">
              Asesoría de Diseño Textil 360
            </li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">
              Capacidad de Mayoreo de Alta Escala
            </li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">
              Servicio Express Cancún y Riviera Maya
            </li>
          </ul>
        </div>

        {/* Column 4: Club & Newsletter */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-white mb-4">Unete al Club PRE</h3>
          <p className="text-xs text-slate-400 mb-4 leading-relaxed">
            Forma parte de nuestro club de beneficios exclusivos, recibe promociones y guías de tendencias textiles corporativas antes que nadie.
          </p>
          <button
            onClick={openClubModal}
            className="w-full py-2.5 px-4 rounded bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs tracking-wider uppercase transition-colors duration-200 cursor-pointer"
            id="club-newsletter-btn"
          >
            Beneficios Exclusivos
          </button>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="bg-slate-950 border-t border-slate-900 py-6 text-center text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {currentYear} Uniformes PRE. Todos los derechos reservados.</p>
          <div className="flex space-x-4">
            <span className="hover:text-white cursor-pointer">Aviso de Privacidad</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Términos y Condiciones</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Facturación</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
