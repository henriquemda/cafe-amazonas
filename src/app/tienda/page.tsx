"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight, ShoppingBag, Star, Filter, X, Plus } from "lucide-react";

/* ── DATA: The Artifacts ── */
const PRODUCTS = [
    {
        id: 1,
        name: "Amaruya Gold",
        tagline: "El Icono",
        price: 24,
        roast: "Medio-Oscuro",
        intensity: 8,
        mood: "balance",
        notes: ["Chocolate", "Caramelo", "Cítricos"],
        image: "https://picsum.photos/seed/gold/800/1000",
        description: "El equilibrio perfecto. Cosechado a 1,200m en la cuenca del Río Negro.",
        color: "#D4AF37", // Gold
        gradient: "radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.15), transparent 70%)"
    },
    {
        id: 2,
        name: "Midnight Jaguar",
        tagline: "Espíritu Nocturno",
        price: 26,
        roast: "Oscuro Intenso",
        intensity: 10,
        mood: "intense",
        notes: ["Cacao Puro", "Especias", "Humo"],
        image: "https://picsum.photos/seed/jaguar/800/1000",
        description: "Para rituales profundos. Un cuerpo denso y salvaje.",
        color: "#6366f1", // Indigo
        gradient: "radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15), transparent 70%)"
    },
    {
        id: 3,
        name: "River Mist",
        tagline: "Suavidad Matutina",
        price: 28,
        roast: "Claro",
        intensity: 5,
        mood: "soft",
        notes: ["Jazmín", "Miel", "Té Verde"],
        image: "https://picsum.photos/seed/river_nature/800/1000",
        description: "Floral y delicado. Como la niebla al amanecer.",
        color: "#34d399", // Emerald
        gradient: "radial-gradient(circle at 50% 50%, rgba(52, 211, 153, 0.15), transparent 70%)"
    },
    {
        id: 4,
        name: "Amazon Trilogy",
        tagline: "Colección Completa",
        price: 70,
        roast: "Mix",
        intensity: 7,
        mood: "all",
        notes: ["Degustación", "Regalo", "Premium"],
        image: "https://picsum.photos/seed/bundle/800/1000",
        description: "La experiencia completa de la selva. Tres perfiles, un origen.",
        color: "#ffffff", // White
        gradient: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1), transparent 70%)"
    },
];

const FILTERS = [
    { id: "all", label: "Todo" },
    { id: "intense", label: "Intenso" },
    { id: "balance", label: "Equilibrado" },
    { id: "soft", label: "Suave" },
];

export default function TiendaPage() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    // Track mouse for subtle parallax
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setCursorPos({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const filteredProducts = activeFilter === "all"
        ? PRODUCTS
        : PRODUCTS.filter(p => p.mood === activeFilter);

    // Dynamic background based on hover
    const activeGradient = hoveredProduct
        ? PRODUCTS.find(p => p.id === hoveredProduct)?.gradient
        : "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.03), transparent 70%)";

    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-gold-500 selection:text-black font-sans transition-colors duration-1000">
            <Navbar />

            {/* ── DYNAMIC ATMOSPHERE ── */}
            <div className="fixed inset-0 pointer-events-none z-0 transition-all duration-1000 ease-in-out">
                {/* Base Noise */}
                <div className="absolute inset-0 film-grain opacity-30" />

                {/* Dynamic Spotlight */}
                <div
                    className="absolute inset-0 transition-opacity duration-1000 ease-out"
                    style={{ background: activeGradient }}
                />

                {/* Floating Orbs */}
                <div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px] animate-pulse"
                    style={{ transform: `translate(${cursorPos.x * -2}px, ${cursorPos.y * -2}px)` }}
                />
            </div>

            <main className="relative z-10 pt-40 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto">

                {/* ── HEADER: Editorial Layout ── */}
                <header className="mb-32 grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
                    <div className="md:col-span-8">
                        <div className="overflow-hidden">
                            <span className="text-gold-400 text-xs uppercase tracking-[0.4em] font-bold mb-6 block animate-fade-in-up">
                                Catálogo 2026
                            </span>
                        </div>
                        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tight text-white mix-blend-difference animate-fade-in-up animate-delay-1">
                            Curaduría <br />
                            <span className="italic text-white/40 ml-12 md:ml-24">Salvaje</span>
                        </h1>
                    </div>

                    <div className="md:col-span-4 flex flex-col justify-end items-end animate-fade-in-up animate-delay-2">
                        <div className="text-right border-l border-white/20 pl-6 mb-8">
                            <p className="text-white/60 text-sm leading-relaxed max-w-[200px]">
                                Seleccionados a mano. Tostados con precisión. Enviados desde el origen.
                            </p>
                        </div>

                        {/* ── FILTERS ── */}
                        <div className="flex flex-wrap justify-end gap-3">
                            {FILTERS.map((f) => (
                                <button
                                    key={f.id}
                                    onClick={() => setActiveFilter(f.id)}
                                    className={`relative px-4 py-2 text-[10px] uppercase tracking-widest transition-all duration-500 group overflow-hidden ${activeFilter === f.id ? "text-black" : "text-white/60 hover:text-white"
                                        }`}
                                >
                                    <span className={`absolute inset-0 bg-gold-400 transition-transform duration-500 ease-out ${activeFilter === f.id ? "translate-y-0" : "translate-y-full group-hover:translate-y-[90%]"
                                        }`} />
                                    <span className="relative z-10">{f.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </header>

                {/* ── GRID: Asymmetric Layout ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-32">
                    {filteredProducts.map((product, index) => (
                        <div
                            key={product.id}
                            className={`group relative perspective-1000 ${
                                // Asymmetric Logic:
                                // Full width rows for immersive items, or split columns
                                index % 3 === 0 ? "lg:col-span-12 flex flex-col lg:flex-row gap-12 items-center" :
                                    "lg:col-span-6 flex flex-col"
                                }`}
                            onMouseEnter={() => setHoveredProduct(product.id)}
                            onMouseLeave={() => setHoveredProduct(null)}
                        >
                            {/* ── VISUAL CONTAINER ── */}
                            <div className={`relative w-full ${index % 3 === 0 ? "lg:w-[60%] aspect-[16/9] lg:order-2" : "aspect-[4/5]"
                                }`}>
                                <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-sm border border-white/10 overflow-hidden transition-all duration-700 group-hover:border-white/20">
                                    {/* Image with Parallax Hover */}
                                    <div className="relative w-full h-full transition-transform duration-1000 ease-out group-hover:scale-105">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 grayscale-[0.2] group-hover:grayscale-0"
                                        />

                                        {/* Overlay Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                                    </div>

                                    {/* Instant Action Overlay */}
                                    <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex items-center justify-between bg-black/40 backdrop-blur-xl border-t border-white/10">
                                        <span className="text-xs font-serif italic text-white/80">
                                            Añadir al Carrito
                                        </span>
                                        <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gold-400 transition-colors">
                                            <Plus size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* ── INFORMATION CONTAINER ── */}
                            <div className={`flex flex-col ${index % 3 === 0 ? "lg:w-[40%] lg:order-1 lg:items-end lg:text-right" : "mt-8"
                                }`}>
                                {/* ID Number */}
                                <span className="font-mono text-xs text-white/20 mb-4 block">
                                    0{product.id} — {product.mood}
                                </span>

                                {/* Title Group */}
                                <div className="mb-6 relative">
                                    <h2
                                        className="font-serif text-4xl md:text-5xl lg:text-6xl text-white group-hover:text-transparent group-hover:bg-clip-text transition-all duration-500"
                                        style={{
                                            // Dynamic inline style for gradient text on hover
                                            backgroundImage: `linear-gradient(to right, #fff, ${product.color})`
                                        }}
                                    >
                                        {product.name}
                                    </h2>
                                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 mt-2">
                                        {product.tagline}
                                    </p>
                                </div>

                                {/* Flavor Tags */}
                                <div className={`flex flex-wrap gap-2 mb-8 ${index % 3 === 0 ? "justify-end" : "justify-start"}`}>
                                    {product.notes.map((note) => (
                                        <span
                                            key={note}
                                            className="px-3 py-1 text-[9px] uppercase tracking-wider border border-white/10 text-white/60 rounded-full group-hover:border-[var(--active-color)] group-hover:text-white transition-colors duration-500"
                                            style={{ "--active-color": product.color } as React.CSSProperties}
                                        >
                                            {note}
                                        </span>
                                    ))}
                                </div>

                                {/* Description */}
                                <p className={`text-sm text-gray-400 leading-relaxed max-w-sm mb-8 ${index % 3 === 0 ? "text-right" : ""}`}>
                                    {product.description}
                                </p>

                                {/* Price & Main Action */}
                                <div className={`flex items-center gap-6 ${index % 3 === 0 ? "flex-row-reverse" : ""}`}>
                                    <span className="font-serif text-3xl text-white">
                                        ${product.price}
                                    </span>
                                    <div className="h-px w-12 bg-white/20" />
                                    <button className="group/btn flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-white hover:text-gold-400 transition-colors">
                                        Ver Detalles
                                        <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── FOOTER MARKER ── */}
                <div className="mt-48 flex flex-col items-center justify-center opacity-30">
                    <span className="font-serif italic text-2xl mb-4">Fin del Catálogo</span>
                    <div className="w-px h-24 bg-white" />
                </div>

                <div className="mt-20">
                    <Footer />
                </div>

            </main>
        </div>
    );
}
