import { Product } from './types';

export const CATEGORIES = [
  { id: 'todos', name: 'Todos', icon: 'Sparkles' },
  { id: 'polo', name: 'Polos', icon: 'Shirt' },
  { id: 'restaurante', name: 'Restaurante', icon: 'Utensils' },
  { id: 'ejecutivo', name: 'Ejecutivo', icon: 'Briefcase' },
  { id: 'industrial', name: 'Industrial', icon: 'ShieldAlert' },
  { id: 'calzado', name: 'Calzado', icon: 'Footprints' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'polo-dryfit-pro',
    name: 'Polo Dry-Fit Professional',
    price: 499.00,
    category: 'polo',
    image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true,
    isNew: true,
    rating: 4.9,
    description: 'Polo deportiva de alto rendimiento, diseñada con tecnología de micro-canales para una máxima evaporación del sudor.',
    features: ['Tecnología Anti-sudor', 'Filtro UV UPF 40+', 'Tejido antibacterial', 'Costuras planas anti-roce']
  },
  {
    id: 'filipina-chef-exec',
    name: 'Filipina Chef Executive',
    price: 850.00,
    category: 'restaurante',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true,
    rating: 4.8,
    description: 'Filipina de gala para Chef con botones ocultos y panel trasero transpirable. Tejido resistente a manchas de grasa.',
    features: ['Tejido anti-manchas de grasa', 'Panel trasero con malla Cool-Vent', 'Corte ergonómico', 'Soporte para termómetro en manga']
  },
  {
    id: 'camisa-oxford-prem',
    name: 'Camisa Oxford Premium',
    price: 595.00,
    category: 'ejecutivo',
    image: 'https://images.unsplash.com/photo-1620012253295-c05518e99309?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true,
    rating: 4.7,
    description: 'Camisa ejecutiva de alta gama en tejido Oxford de algodón de fibra larga. Fácil planchado y resistencia al desgaste.',
    features: ['Algodón egipcio 100%', 'Tecnología Easy-Care (Fácil Planchado)', 'Cuello semi-rígido', 'Puños ajustables']
  },
  {
    id: 'polo-dryfit-hombre',
    name: 'Polo Dryfit Hombre (Azul)',
    price: 489.00,
    category: 'polo',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=600',
    isNew: true,
    rating: 4.6,
    description: 'Nuestra polo estrella diseñada específicamente para climas tropicales húmedos. Frescura garantizada durante jornadas de 12 horas.',
    features: ['Tejido transpirable ultra-ligero', 'Secado rápido en <15 min', 'Apta para bordado y sublimado', 'No se deforma tras lavadas']
  },
  {
    id: 'filipina-chef-prof',
    name: 'Filipina Chef Profesional',
    price: 850.00,
    category: 'restaurante',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=600',
    isNew: true,
    rating: 4.8,
    description: 'Filipina clásica de alta duración ideal para cocinas de alto volumen. Soporta lavadas de temperatura extrema.',
    features: ['Costuras reforzadas', 'Botones de seguridad irrompibles', 'Tejido mixto Algodón/Poliéster pesado', 'Color extra duradero']
  },
  {
    id: 'camisa-oxford-dama',
    name: 'Camisa Oxford Azul Dama',
    price: 620.00,
    category: 'ejecutivo',
    image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&q=80&w=600',
    rating: 4.7,
    description: 'Camisa Oxford con pinzas de entalle para dama. Combina la formalidad corporativa con un calce cómodo y estilizado.',
    features: ['Entalle femenino anatómico', 'Fácil planchado', 'Puño francés opcional', 'Cuello reforzado']
  },
  {
    id: 'bota-industrial',
    name: 'Bota Industrial Certificada',
    price: 1250.00,
    category: 'industrial',
    image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true,
    rating: 4.9,
    description: 'Calzado de seguridad industrial de alta resistencia con casquillo de policarbonato dieléctrico y suela antiderrapante.',
    features: ['Casquillo de policarbonato ligero', 'Suela resistente a aceites y químicos', 'Aislamiento dieléctrico', 'Plantilla de confort anti-fatiga']
  },
  {
    id: 'chaqueta-alta-vis',
    name: 'Chaqueta Alta Visibilidad',
    price: 980.00,
    category: 'industrial',
    image: 'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?auto=format&fit=crop&q=80&w=600',
    rating: 4.6,
    description: 'Chaqueta impermeable industrial de alta visibilidad con bandas reflejantes homologadas de 3M.',
    features: ['Cinta reflejante certificada 3M', 'Tejido rompevientos impermeable', 'Capucha oculta', 'Multi-bolsillos interiores']
  },
  {
    id: 'polo-algodon-prem',
    name: 'Polo Algodón Premium',
    price: 420.00,
    category: 'polo',
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=600',
    rating: 4.5,
    description: 'Polo clásica de algodón Pima 100%, ideal para eventos corporativos y personal de servicio al cliente en interiores.',
    features: ['100% Algodón Pima de lujo', 'Tacto ultra suave', 'Cuello tejido plano', 'Aberturas laterales reforzadas']
  },
  {
    id: 'camisa-formal-blanca',
    name: 'Camisa Formal Blanca',
    price: 590.00,
    category: 'ejecutivo',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=600',
    rating: 4.6,
    description: 'Camisa de vestir formal en color blanco impoluto. Excelente para ejecutivos, capitanes de meseros o personal de recepción.',
    features: ['Fácil blanqueado sin desgaste', 'Costuras francesas', 'Tratamiento anti-arrugas', 'Tejido twill de alta densidad']
  },
  {
    id: 'zapato-cocina',
    name: 'Zapato Cocina Anti-derrapante',
    price: 1050.00,
    category: 'calzado',
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=600',
    rating: 4.8,
    description: 'Zapato cerrado ultraligero para cocina y hospital. Suela con tecnología de succión anti-deslizamientos sobre aceites y agua.',
    features: ['Tecnología de succión antiderrapante', 'Cuerpo de EVA ultra-ligero y lavable', 'Soporte de arco ortopédico', 'Resistente a bacterias y olores']
  }
];

export const CLIENT_LOGOS = [
  { name: 'Hotel Riviera Maya Resort', logo: '🏨' },
  { name: 'Cancún Grand Cuisine', logo: '🍽️' },
  { name: 'Caribe Constructora', logo: '🏗️' },
  { name: 'Royal Yacht Club', logo: '⚓' },
  { name: 'Mayan Explorer', logo: '🚌' }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Alejandra Pérez',
    role: 'Gerente de Alimentos y Bebidas',
    company: 'Resort Paradisus Cancún',
    text: 'Sustituimos las filipinas de cocina de todo nuestro staff por las de Uniformes PRE. El cambio ha sido increíble: aguantan las jornadas calurosas y las manchas de grasa se remueven con un lavado sencillo. ¡Excelente servicio!',
    rating: 5
  },
  {
    id: 2,
    name: 'Carlos Mendoza',
    role: 'Director de Operaciones',
    company: 'Transportes Turísticos del Caribe',
    text: 'Las polos Dry-Fit son una maravilla para nuestros operadores que están expuestos al calor de Cancún. No guardan olores, lucen profesionales y el bordado de nuestro logotipo tiene una definición impecable.',
    rating: 5
  },
  {
    id: 3,
    name: 'Sofía Barrera',
    role: 'Coordinadora de Recursos Humanos',
    company: 'Constructora Puerto Cancún',
    text: 'Las botas de seguridad y los uniformes de alta visibilidad cumplen con todas las normas de la STPS. Además, la asesoría para seleccionar las tallas correctas para más de 200 trabajadores fue excepcional.',
    rating: 5
  }
];
