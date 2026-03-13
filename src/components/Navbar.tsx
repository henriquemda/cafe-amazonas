"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Search, ShoppingBag } from "lucide-react";
import FullScreenMenu from "./FullScreenMenu";
import CartSidebar from "./CartSidebar";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { isCartOpen, setIsCartOpen, totalItems } = useCart();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex justify-between items-center ${scrolled
                ? "px-6 py-4 md:px-12 bg-[#030603]/70 backdrop-blur-md border-b border-white/[0.05] shadow-2xl"
                : "px-6 py-8 md:px-12 bg-transparent border-b border-transparent shadow-none"
                }`}>
                {/* Left Actions — Search & Cart / Desktop Links */}
                <div className="flex-1 flex items-center justify-start gap-2 md:gap-3 z-20">
                    <div className="hidden lg:flex items-center p-1.5 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_8px_20px_-4px_rgba(0,0,0,0.5)] mr-4">
                        <div className="flex items-center gap-1 px-4 py-2 rounded-full border border-white/[0.02] bg-black/20">
                            <NavItem href="/tienda" label="Tienda" />
                            <Separator />
                            <NavItem href="/origen" label="Origen" />
                            <Separator />
                            <NavItem href="/impacto" label="Impacto" />
                        </div>
                    </div>
                    
                    {/* The Utility Icons - Left on Mobile Only */}
                    <div className="flex gap-2 lg:hidden">
                        <IconButton icon={Search} />
                        <IconButton icon={ShoppingBag} badge={totalItems > 0} onClick={() => setIsCartOpen(true)} />
                    </div>
                </div>

                {/* Logo — absolute center strictly forced to break flex context */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center w-full max-w-[160px] md:max-w-none z-30 pointer-events-none">
                    <Link
                        href="/"
                        className="hover:scale-105 transition-transform duration-500 cursor-grab active:cursor-grabbing pointer-events-auto"
                    >
                        <Image
                            src="/cafeamazonas-logo.webp"
                            alt="Café Amazonas"
                            width={160}
                            height={64}
                            className={`w-auto object-contain transition-all duration-500 drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)] ${scrolled ? "h-10 md:h-12" : "h-14 md:h-16"
                                }`}
                            priority
                        />
                    </Link>
                </div>

                {/* Right Actions — Desktop Utilities & Mobile Menu */}
                <div className="flex-1 flex justify-end items-center gap-2 md:gap-4 z-20">
                    {/* Desktop Utilities (Search + Cart) */}
                    <div className="hidden lg:flex items-center gap-4">
                        {/* Dynamic Glass Search Input */}
                        <div className="flex items-center p-1 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_8px_20px_-4px_rgba(0,0,0,0.5)] transition-all duration-500 w-[240px] focus-within:w-[300px]">
                            <div className="flex items-center w-full px-4 rounded-full border border-white/[0.02] bg-black/20 focus-within:bg-black/40 transition-colors duration-300">
                                <Search size={16} className="text-white/40 mr-3" />
                                <input 
                                    type="text" 
                                    placeholder="Buscar orígenes..." 
                                    className="w-full bg-transparent border-none outline-none text-[11px] uppercase tracking-widest text-white placeholder-white/30 py-2.5 font-medium"
                                />
                            </div>
                        </div>

                        {/* Cart uses identical wrapper pill structure for perfect symmetry */}
                        <div className="p-1 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_8px_20px_-4px_rgba(0,0,0,0.5)]">
                            <button onClick={() => setIsCartOpen(true)} className="flex items-center justify-center w-10 h-10 rounded-full border border-white/[0.02] bg-black/20 text-white hover:bg-[#C5A028] hover:text-black hover:border-[#C5A028] transition-all duration-300 relative group">
                                <ShoppingBag size={18} />
                                {totalItems > 0 && (
                                    <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[16px] h-4 px-1 bg-[#C5A028] text-black text-[9px] font-bold rounded-full pointer-events-none shadow-[0_0_6px_rgba(197,160,40,0.8)] animate-fade-in">
                                        {totalItems}
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Menu Button - Mobile Only */}
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="lg:hidden flex items-center gap-2 md:gap-3 pl-4 pr-3 py-2 md:pl-5 md:pr-4 md:py-2.5 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/[0.08] text-white hover:bg-[#C5A028] hover:text-black hover:border-[#C5A028] transition-all duration-300 group shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
                    >
                        <span className="text-[0.65rem] md:text-[0.7rem] uppercase tracking-widest font-bold hidden xs:inline-block">
                            Menú
                        </span>
                        <Menu
                            size={18}
                            className="group-hover:rotate-180 transition-transform duration-500"
                        />
                    </button>
                </div>
            </nav>

            {/* Full Screen Menu Overlay */}
            <FullScreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

            {/* Cart Flyout Sidebar */}
            <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    );
}

/* ── Micro-Components for Granularity ── */

function NavItem({ href, label }: { href: string; label: string }) {
    return (
        <Link
            href={href}
            className="relative px-5 py-1 text-[10px] uppercase tracking-[0.2em] font-medium text-gray-300 hover:text-white transition-colors duration-300 group overflow-hidden"
        >
            <span className="relative z-10">{label}</span>
            {/* Hover Glow */}
            <span className="absolute inset-0 bg-white/[0.08] scale-0 rounded-md group-hover:scale-100 transition-transform duration-300" />
        </Link>
    );
}

function Separator() {
    return <div className="w-0.5 h-0.5 rounded-full bg-white/20" />;
}

function IconButton({ icon: Icon, badge, onClick }: { icon: React.ElementType; badge?: boolean; onClick?: () => void }) {
    return (
        <button onClick={onClick} className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/[0.08] text-white hover:bg-[#C5A028] hover:text-black hover:border-[#C5A028] transition-all duration-300 relative shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] group">
            <Icon size={16} className="md:w-[18px] md:h-[18px]" />
            {badge && (
                <span className="absolute top-1.5 right-1.5 md:top-2.5 md:right-2.5 w-1.5 h-1.5 bg-[#C5A028] rounded-full pointer-events-none group-hover:bg-black transition-colors" />
            )}
        </button>
    );
}
