"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X, ArrowUpRight } from "lucide-react";
import { PRODUCTS, type Product } from "@/data/products";

interface SearchOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<Product[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    // Handle Search Logic
    useEffect(() => {
        if (!query.trim()) {
            setResults([]);
            return;
        }

        const searchTerm = query.toLowerCase();
        const filtered = PRODUCTS.filter((p) => 
            p.name.toLowerCase().includes(searchTerm) || 
            p.description.toLowerCase().includes(searchTerm) ||
            p.notes.some(n => n.toLowerCase().includes(searchTerm)) ||
            p.tagline.toLowerCase().includes(searchTerm)
        ).slice(0, 6); // Limit to top 6 results for UI cleanliness

        setResults(filtered);
    }, [query]);

    // Handle Open State (Focus & Esc Key)
    useEffect(() => {
        if (isOpen) {
            setQuery(""); // Reset query when opened
            setTimeout(() => inputRef.current?.focus(), 100);
            
            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === "Escape") onClose();
            };
            window.addEventListener("keydown", handleKeyDown);
            return () => window.removeEventListener("keydown", handleKeyDown);
        }
    }, [isOpen, onClose]);

    // Prevent scrolling when overlay is open
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

    if (!isOpen && !query) return null;

    return (
        <div 
            className={`fixed inset-0 z-[100] flex flex-col items-center pt-[15vh] transition-all duration-500 ${
                isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
        >
            {/* Dark Cinematic Backdrop */}
            <div 
                className="absolute inset-0 bg-[#030603]/80 backdrop-blur-2xl transition-opacity duration-500"
                onClick={onClose}
            />

            {/* Spotlight Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#C5A028]/10 rounded-full blur-[120px] pointer-events-none opacity-50" />

            {/* Search Container */}
            <div 
                className={`relative w-full max-w-3xl px-4 sm:px-6 transition-all duration-700 delay-100 ${
                    isOpen ? "translate-y-0 opacity-100 scale-100" : "-translate-y-12 opacity-0 scale-95"
                }`}
            >
                {/* Search Bar */}
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#C5A028]/0 via-[#C5A028]/20 to-[#C5A028]/0 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative flex items-center bg-[#0A0A0A]/80 border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl transition-all duration-300 focus-within:border-[#C5A028]/50 focus-within:bg-[#0A0A0A]">
                        <div className="pl-6 pr-4 py-6 text-white/40">
                            <Search size={28} className={query ? "text-[#C5A028]" : ""} />
                        </div>
                        <input
                            ref={inputRef}
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Buscar por origen, nota o tipo de café..."
                            className="w-full bg-transparent border-none outline-none text-xl sm:text-2xl text-white placeholder-white/20 font-serif tracking-wide py-6 pr-6"
                        />
                        {/* Clear/Close Button */}
                        <button 
                            onClick={onClose}
                            className="mx-4 p-2 rounded-full hover:bg-white/10 text-white/40 hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>
                </div>

                {/* Results Area */}
                <div className={`mt-6 transition-all duration-500 ${results.length > 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
                    <div className="bg-[#0A0A0A]/60 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
                        {/* Results Header */}
                        {results.length > 0 && (
                            <div className="px-6 py-4 border-b border-white/5 bg-white/[0.02]">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-semibold">
                                    {results.length} {results.length === 1 ? "Resultado Encontrado" : "Resultados Encontrados"}
                                </span>
                            </div>
                        )}

                        {/* Results List */}
                        <div className="max-h-[50vh] overflow-y-auto no-scrollbar py-2">
                            {results.map((product, index) => (
                                <Link 
                                    href={`/tienda#${product.id}`}
                                    key={product.id}
                                    onClick={onClose}
                                    className="flex items-center gap-4 sm:gap-6 px-4 sm:px-6 py-4 hover:bg-white/[0.04] transition-colors group border-b border-white/[0.02] last:border-0"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    {/* Product Thumbnail */}
                                    <div className="relative w-14 h-16 sm:w-16 sm:h-20 shrink-0 rounded-lg overflow-hidden bg-black/50 border border-white/5 group-hover:border-white/20 transition-colors">
                                        <Image 
                                            src={product.image} 
                                            alt={product.name} 
                                            fill 
                                            className="object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                                        />
                                    </div>

                                    {/* Product Info */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <h4 className="font-serif text-lg sm:text-xl text-white/90 group-hover:text-[#C5A028] transition-colors truncate">
                                                    {product.name}
                                                </h4>
                                                <p className="font-sans text-[11px] sm:text-xs uppercase tracking-widest text-white/40 mt-1 truncate">
                                                    {product.tagline}
                                                </p>
                                            </div>
                                            <span className="font-serif text-lg text-white">
                                                S/{product.price}
                                            </span>
                                        </div>

                                        {/* Flavor Notes (Desktop primarily, wraps on mobile) */}
                                        <div className="hidden sm:flex items-center gap-2 mt-3">
                                            {product.notes.slice(0, 3).map((note, i) => (
                                                <span key={i} className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] uppercase tracking-widest text-white/60 group-hover:border-[#C5A028]/30 group-hover:text-[#C5A028] transition-colors">
                                                    {note}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Go Arrow */}
                                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#C5A028] group-hover:border-[#C5A028] transition-all duration-300 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0">
                                        <ArrowUpRight size={18} className="text-white group-hover:text-black transition-colors" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Empty State */}
                {query.trim() && results.length === 0 && (
                    <div className="mt-8 text-center animate-fade-in fade-in">
                        <p className="font-serif text-2xl text-white/40 mb-2">
                            No encontramos concidencias
                        </p>
                        <p className="font-sans text-[11px] uppercase tracking-widest text-white/20">
                            Intenta con otros granos, notas o marcas.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
