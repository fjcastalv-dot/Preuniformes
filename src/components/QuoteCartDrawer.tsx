import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, FileText, CheckCircle, ArrowRight, Printer, RefreshCw } from 'lucide-react';
import { CartItem, Product, QuoteRequest } from '../types';

interface QuoteCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number, size?: string) => void;
  onRemoveItem: (productId: string, size?: string) => void;
  onClearCart: () => void;
}

export default function QuoteCartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: QuoteCartDrawerProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [notes, setNotes] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedQuote, setSubmittedQuote] = useState<QuoteRequest | null>(null);

  if (!isOpen) return null;

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  const iva = subtotal * 0.16;
  const total = subtotal + iva;

  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0 || !name || !email || !phone) return;

    setIsSubmitting(true);

    // Simulate database insertion / email trigger
    setTimeout(() => {
      const quoteId = `PRE-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      const newQuote: QuoteRequest = {
        id: quoteId,
        items: [...cart],
        customerName: name,
        customerEmail: email,
        customerPhone: phone,
        customerCompany: company || 'Cliente Particular',
        notes: notes,
        status: 'completed',
        createdAt: new Date().toLocaleDateString('es-MX', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
      };

      setSubmittedQuote(newQuote);
      setIsSubmitting(false);
      onClearCart(); // Empty the cart state
    }, 1500);
  };

  const handleReset = () => {
    setSubmittedQuote(null);
    setName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setNotes('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" id="quote-cart-drawer">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs cursor-pointer" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-lg bg-slate-900 border-l border-slate-800 text-slate-200 shadow-2xl flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2 text-orange-500">
              <FileText className="h-5 w-5" />
              <h3 className="font-display text-2xl text-white tracking-wider">
                {submittedQuote ? 'Resumen de Cotización' : 'Mi Cotización'}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {submittedQuote ? (
              // ==========================================
              // PRINTABLE CORPORATE QUOTE CONFIRMATION
              // ==========================================
              <div className="space-y-6 animate-fade-in" id="printable-quote">
                <div className="text-center space-y-2 border-b border-slate-800 pb-5">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-2xl mb-1">
                    ✓
                  </div>
                  <h4 className="font-display text-2xl text-white tracking-wide">
                    ¡SOLICITUD ENVIADA!
                  </h4>
                  <p className="text-xs text-slate-400">
                    Un ejecutivo de ventas en Cancún se pondrá en contacto con usted en un plazo máximo de 2 horas hábiles.
                  </p>
                </div>

                {/* Printable Quote Sheet */}
                <div className="bg-slate-950 border border-slate-800 rounded-lg p-5 space-y-4 font-sans text-xs">
                  <div className="flex justify-between items-start border-b border-slate-800 pb-4">
                    <div>
                      <span className="font-display text-2xl text-white tracking-wider">
                        UNIFORMES <span className="text-orange-500">PRE</span>
                      </span>
                      <p className="text-[9px] text-slate-400 tracking-wider">PRESTIGE APPAREL</p>
                      <p className="text-[10px] text-slate-500 mt-1">Av. López Portillo SM 62, Cancún</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-orange-600/10 text-orange-400 border border-orange-500/20 font-mono text-[10px] font-semibold px-2 py-1 rounded">
                        {submittedQuote.id}
                      </span>
                      <p className="text-[10px] text-slate-500 mt-1">{submittedQuote.createdAt}</p>
                    </div>
                  </div>

                  {/* Customer Block */}
                  <div className="grid grid-cols-2 gap-4 border-b border-slate-800 pb-4 text-slate-300">
                    <div>
                      <span className="text-[10px] uppercase text-slate-500 block font-semibold">Cliente:</span>
                      <span className="font-semibold text-white">{submittedQuote.customerName}</span>
                      <p className="text-slate-400 mt-0.5">{submittedQuote.customerCompany}</p>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-slate-500 block font-semibold">Contacto:</span>
                      <p className="text-slate-400">{submittedQuote.customerEmail}</p>
                      <p className="text-slate-400">{submittedQuote.customerPhone}</p>
                    </div>
                  </div>

                  {/* Items list */}
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase text-slate-500 block font-semibold">Prendas Solicitadas:</span>
                    <div className="divide-y divide-slate-800/60 max-h-48 overflow-y-auto pr-1">
                      {submittedQuote.items.map((item, idx) => (
                        <div key={idx} className="py-2 flex justify-between gap-4 text-slate-300">
                          <div>
                            <span className="font-medium text-white">{item.product.name}</span>
                            {item.size && (
                              <span className="ml-2 px-1.5 py-0.5 rounded bg-slate-800 text-[9px] font-mono font-bold text-orange-400">
                                Talla {item.size}
                              </span>
                            )}
                            <p className="text-[10px] text-slate-500 mt-0.5">Precio Unitario: ${item.product.price.toFixed(2)} MXN</p>
                          </div>
                          <div className="text-right font-mono text-slate-300 shrink-0">
                            <span>{item.quantity} pzas</span>
                            <span className="block font-semibold text-white mt-0.5">
                              ${(item.product.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing Summary */}
                  <div className="border-t border-slate-800 pt-4 space-y-1.5 font-mono text-right text-slate-400">
                    <div className="flex justify-between">
                      <span>Subtotal estimado:</span>
                      <span className="text-slate-300">${subtotal.toFixed(2)} MXN</span>
                    </div>
                    <div className="flex justify-between">
                      <span>IVA (16%):</span>
                      <span className="text-slate-300">${iva.toFixed(2)} MXN</span>
                    </div>
                    <div className="flex justify-between text-sm border-t border-slate-800/50 pt-2 font-bold">
                      <span className="text-white font-sans">Total Estimado:</span>
                      <span className="text-orange-500">${total.toFixed(2)} MXN</span>
                    </div>
                  </div>

                  {submittedQuote.notes && (
                    <div className="border-t border-slate-800 pt-3 text-[10px] text-slate-500 leading-relaxed">
                      <strong>Notas Especiales:</strong> {submittedQuote.notes}
                    </div>
                  )}

                  <p className="text-[9px] text-center text-slate-500 leading-tight">
                    * Esta es una pre-cotización preliminar. Un asesor comercial validará existencias, descuentos por volumen de mayoreo y costos de bordados antes de emitir la factura final.
                  </p>
                </div>

                {/* Print and Actions */}
                <div className="flex gap-3">
                  <button
                    onClick={() => window.print()}
                    className="flex-1 py-3 px-4 rounded border border-slate-700 hover:bg-slate-800 hover:border-slate-600 text-white font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Printer className="h-4 w-4 text-orange-500" /> Imprimir Cotización
                  </button>
                  <button
                    onClick={handleReset}
                    className="flex-1 py-3 px-4 rounded bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-orange-950/20"
                  >
                    <RefreshCw className="h-4 w-4" /> Nueva Solicitud
                  </button>
                </div>
              </div>
            ) : cart.length === 0 ? (
              // ==========================================
              // EMPTY CART STATE
              // ==========================================
              <div className="flex flex-col items-center justify-center text-center h-[60vh] space-y-4">
                <div className="p-4 bg-slate-800/50 rounded-full border border-slate-800 text-slate-500 text-4xl">
                  📋
                </div>
                <div>
                  <h4 className="font-semibold text-white">No tienes prendas seleccionadas</h4>
                  <p className="text-xs text-slate-500 mt-1 max-w-[260px] mx-auto">
                    Visita el catálogo, selecciona tus uniformes e indica las tallas para armar tu cotización corporativa.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="mt-2 py-2 px-6 rounded bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Ir al Catálogo
                </button>
              </div>
            ) : (
              // ==========================================
              // STANDARD CART ITEMS & FORM
              // ==========================================
              <div className="space-y-6">
                {/* Cart Items List */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs uppercase tracking-wider text-slate-400 font-semibold">
                    <span>Prendas seleccionadas ({totalItems})</span>
                    <button
                      onClick={onClearCart}
                      className="text-red-400 hover:text-red-300 hover:underline transition-colors text-[10px] font-semibold uppercase cursor-pointer"
                    >
                      Vaciar todo
                    </button>
                  </div>

                  <div className="divide-y divide-slate-800 max-h-[300px] overflow-y-auto pr-1">
                    {cart.map((item, index) => (
                      <div key={index} className="py-3 flex gap-4 text-slate-300">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-14 h-14 object-cover rounded bg-slate-950 shrink-0 border border-slate-800"
                          referrerPolicy="no-referrer"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-white text-xs truncate">{item.product.name}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">{item.product.category}</span>
                            {item.size && (
                              <span className="px-1.5 py-0.5 rounded bg-slate-800 text-[9px] font-mono font-bold text-orange-400">
                                Talla {item.size}
                              </span>
                            )}
                          </div>
                          <span className="text-xs font-mono text-slate-400 block mt-1">
                            ${item.product.price.toFixed(2)} MXN
                          </span>
                        </div>

                        <div className="flex flex-col justify-between items-end shrink-0">
                          {/* Trash button */}
                          <button
                            onClick={() => onRemoveItem(item.product.id, item.size)}
                            className="text-slate-500 hover:text-red-400 p-0.5 cursor-pointer"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>

                          {/* Plus/Minus counter */}
                          <div className="flex items-center bg-slate-800/80 border border-slate-700 rounded px-1 py-0.5 mt-1.5">
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1), item.size)}
                              className="p-1 text-slate-400 hover:text-white cursor-pointer"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="px-2 font-mono text-xs font-semibold text-white w-6 text-center">{item.quantity}</span>
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1, item.size)}
                              className="p-1 text-slate-400 hover:text-white cursor-pointer"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Totals Section */}
                <div className="bg-slate-950 border border-slate-800/50 rounded p-4 space-y-2 font-mono text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)} MXN</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>IVA Estimado (16%):</span>
                    <span>${iva.toFixed(2)} MXN</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-orange-500 border-t border-slate-800 pt-2 font-sans">
                    <span>Total Estimado:</span>
                    <span>${total.toFixed(2)} MXN</span>
                  </div>
                </div>

                {/* Corporate Info Form */}
                <form onSubmit={handleSubmitQuote} className="border-t border-slate-800 pt-4 space-y-4">
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                      Información Corporativa
                    </h4>
                    <p className="text-[10px] text-slate-500">
                      Complete estos campos para que podamos procesar y facturar su cotización con tarifas de mayoreo aplicables.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="quote-name" className="block text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="quote-name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ej. Ing. Alejandro Gómez"
                        className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="quote-company" className="block text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
                        Empresa / Hotel
                      </label>
                      <input
                        type="text"
                        id="quote-company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Ej. Hotel Riviera Maya Resort"
                        className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="quote-email" className="block text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
                        Correo Corporativo *
                      </label>
                      <input
                        type="email"
                        id="quote-email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ejemplo@empresa.com"
                        className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="quote-phone" className="block text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="quote-phone"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Ej. (998) 123-4567"
                        className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="quote-notes" className="block text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
                      Notas Especiales, Desglose de Tallas o Requerimientos de Logotipo
                    </label>
                    <textarea
                      id="quote-notes"
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Ej. Necesitamos 15 en talla S, 20 en talla M, y que lleven bordado el logotipo en la manga izquierda. Adjuntaremos el logotipo en el contacto formal."
                      className="w-full bg-slate-800 border border-slate-700 rounded px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-orange-950/20 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Procesando Solicitud...' : 'Solicitar Presupuesto Formal'}
                    {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
