export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  rating: number;
  description: string;
  features: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  size?: string;
}

export interface QuoteRequest {
  id: string;
  items: CartItem[];
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerCompany: string;
  notes: string;
  status: 'pending' | 'completed';
  createdAt: string;
}

export type ActiveTab = 'inicio' | 'catalogo' | 'quienes-somos' | 'contacto';
