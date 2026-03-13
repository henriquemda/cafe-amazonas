"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, X, ShoppingBag, Plus, Minus, Trash2 } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

/* ────────────────────────────────────────
   CART SIDEBAR
   A sleek, glassmorphic flyout for the cart
   ──────────────────────────────────────── */

interface CartSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
    const sidebarRef = useRef<HTMLDivElement>(null);
    const { items, removeItem, updateQuantity, subtotal } = useCart();

    // Lock body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // Close on Escape
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [isOpen, onClose]);

    // Close when clicking outside
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) onClose();
    };

    // Construct highly-formatted WhatsApp Message
    const handleCheckout = () => {
        if (items.length === 0) return;

        const baseUrl = "https://wa.me/51953247124";
        
        let message = "☕ *¡Hola Amaruya Café!* 🌿\n";
        message += "Me gustaría realizar el siguiente pedido:\n\n";

        items.forEach((item, index) => {
            message += `*${index + 1}. ${item.name}*\n`;
            if (item.roast) message += `   ├ Opciones: ${item.roast}\n`;
            message += `   ├ Cantidad: ${item.quantity}\n`;
            message += `   └ Subtotal: $${(item.price * item.quantity).toFixed(2)}\n\n`;
        });

        message += `*Total a pagar: $${subtotal.toFixed(2)}*\n\n`;
        message += "¡Quedo a la espera de sus indicaciones para coordinar el pago y envío! ✨";

        const encodedMessage = encodeURIComponent(message);
        window.open(`${baseUrl}?text=${encodedMessage}`, "_blank");
    };

    return (
        <div
            className={`fixed inset-0 z-[120] transition-all duration-700 ${isOpen ? "pointer-events-auto" : "pointer-events-none"
                }`}
            aria-hidden={!isOpen}
        >
            {/* ═══ BACKDROP ═══ */}
            <div
                className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-700 ${isOpen ? "opacity-100" : "opacity-0"
                    }`}
                onClick={handleBackdropClick}
            />

            {/* ═══ SIDEBAR PANEL ═══ */}
            <div
                ref={sidebarRef}
                className={`absolute right-0 top-0 bottom-0 w-full md:w-[480px] bg-[#030603]/90 backdrop-blur-2xl border-l border-white/[0.08] shadow-[-20px_0_50px_rgba(0,0,0,0.8)] flex flex-col transition-transform duration-[0.8s] cubic-bezier(0.19,1,0.22,1) ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* ── HEADER ── */}
                <div className="flex items-center justify-between px-6 py-8 border-b border-white/[0.04]">
                    <div>
                        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#C5A028] block mb-1">
                            Resumen
                        </span>
                        <h2 className="font-serif text-2xl text-white/90 font-light tracking-wide">
                            Tu Selección
                        </h2>
                    </div>
                    {/* Close */}
                    <button
                        onClick={onClose}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] text-white hover:bg-[#C5A028] hover:text-black hover:border-[#C5A028] transition-all duration-300 group"
                    >
                        <X size={18} className="group-hover:rotate-90 transition-transform duration-500" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto no-scrollbar relative group flex flex-col">
                    {items.length === 0 ? (
                        <div className="flex-1 flex flex-col items-center justify-center p-8 relative overflow-hidden group">
                            {/* Atmospheric background element */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-1000">
                                <ShoppingBag size={300} strokeWidth={0.5} />
                            </div>
                            <div className="absolute w-64 h-64 bg-[#C5A028]/10 rounded-full blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-[2s]" />

                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-6 bg-white/[0.02] shadow-[inset_0_0_15px_rgba(255,255,255,0.02)]">
                                    <ShoppingBag size={24} className="text-white/40" />
                                </div>
                                <h3 className="font-serif text-xl text-white mb-3">
                                    El carrito está vacío
                                </h3>
                                <p className="font-sans text-xs text-white/40 leading-relaxed max-w-[250px] mb-8">
                                    Aún no has seleccionado ningún origen. Explora nuestra colección y descubre la selva en cada grano.
                                </p>
                                <Link 
                                    href="/tienda" 
                                    onClick={onClose}
                                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.03] border border-white/[0.1] text-white hover:bg-[#C5A028] hover:text-black hover:border-[#C5A028] transition-all duration-300 relative group/btn overflow-hidden"
                                >
                                    <span className="relative z-10 text-[10px] uppercase tracking-widest font-bold">
                                        Explorar Tienda
                                    </span>
                                    <ArrowRight size={14} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                                    <span className="absolute inset-0 w-0 bg-[#C5A028] transition-all duration-500 ease-out group-hover/btn:w-full" />
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div className="px-6 py-4 flex flex-col gap-6">
                            {items.map((item) => (
                                <div key={item.id} className="flex gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] group/item hover:border-white/10 transition-colors">
                                    {/* Image */}
                                    <div className="relative w-20 h-24 rounded-lg overflow-hidden bg-black/40 border border-white/5">
                                        <Image src={item.image} alt={item.name} fill className="object-cover opacity-80 group-hover/item:opacity-100 transition-opacity" />
                                    </div>

                                    {/* Details */}
                                    <div className="flex-1 flex flex-col">
                                        <div className="flex justify-between items-start mb-1">
                                            <h4 className="font-serif text-lg text-white group-hover/item:text-[#C5A028] transition-colors">{item.name}</h4>
                                            <button onClick={() => removeItem(item.id)} className="text-white/30 hover:text-red-400 transition-colors p-1">
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                        {item.roast && (
                                            <span className="text-[9px] uppercase tracking-widest text-white/40 mb-3 block">
                                                {item.roast}
                                            </span>
                                        )}
                                        
                                        <div className="mt-auto flex items-center justify-between">
                                            <div className="flex items-center gap-3 bg-black/40 rounded-full px-2 py-1 border border-white/[0.05]">
                                                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 text-white/50 hover:text-white transition-colors">
                                                    <Minus size={12} />
                                                </button>
                                                <span className="text-xs text-white w-4 text-center">{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 text-white/50 hover:text-white transition-colors">
                                                    <Plus size={12} />
                                                </button>
                                            </div>
                                            <span className="font-serif text-lg text-white">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* ── FOOTER ── */}
                <div className="p-6 border-t border-white/[0.04] bg-black/20">
                    <div className="flex justify-between items-center mb-6">
                        <span className="font-sans text-[10px] uppercase tracking-widest text-white/40">
                            Subtotal
                        </span>
                        <span className="font-serif text-xl text-white">
                            ${subtotal.toFixed(2)}
                        </span>
                    </div>
                    <button 
                        onClick={handleCheckout}
                        disabled={items.length === 0}
                        className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-[#C5A028] border border-[#C5A028] text-black disabled:bg-white/5 disabled:border-white/10 disabled:text-white/30 disabled:cursor-not-allowed hover:bg-white hover:border-white transition-all duration-300 uppercase tracking-widest text-[11px] font-bold"
                    >
                        Finalizar Compra
                    </button>
                    <p className="text-center text-[9px] text-white/30 mt-4 uppercase tracking-[0.2em]">
                        Impuestos calculados en el checkout
                    </p>
                </div>
            </div>
        </div>
    );
}
