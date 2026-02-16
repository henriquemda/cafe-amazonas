"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { ArrowUpRight, ShoppingBag, Star, Filter, Coffee } from "lucide-react";

/* ────────────────────────────────────────
   DATA: The curated artifacts
   ──────────────────────────────────────── */
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
        image: "https://picsum.photos/seed/gold/800/800",
        description: "El equilibrio perfecto. Cosechado a 1,200m en la cuenca del Río Negro.",
        accent: "text-gold-400",
        bgGradient: "from-gold-900/20 to-transparent",
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
        image: "https://picsum.photos/seed/jaguar/800/800",
        description: "Para rituales profundos. Un cuerpo denso y salvaje.",
        accent: "text-indigo-400",
        bgGradient: "from-indigo-900/20 to-transparent",
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
        image: "https://picsum.photos/seed/river_nature/800/800",
        description: "Floral y delicado. Como la niebla al amanecer.",
        accent: "text-emerald-400",
        bgGradient: "from-emerald-900/20 to-transparent",
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
        image: "https://picsum.photos/seed/bundle/800/800",
        description: "La experiencia completa de la selva. Tres perfiles, un origen.",
        accent: "text-white",
        bgGradient: "from-white/10 to-transparent",
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

    const filteredProducts = activeFilter === "all"
        ? PRODUCTS
        : PRODUCTS.filter(p => p.mood === activeFilter);

    return (
        <div className="min-h-screen bg-[#050a05] text-white selection:bg-gold-500 selection:text-black font-sans">
            <Navbar />

            {/* ── ATMOSPHERE LAYER ── */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 film-grain opacity-20" />
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-gold-500/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-green-900/10 rounded-full blur-[150px]" />
            </div>

            <main className="relative z-10 pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">

                {/* ── HEADER: The Manifesto ── */}
                <header className="mb-24 md:mb-32 flex flex-col md:flex-row justify-between items-end gap-12 animate-fade-in-up">
                    <div className="max-w-2xl">
                        <span className="text-gold-400 text-[10px] uppercase tracking-[0.3em] font-bold mb-4 block">
                            Catálogo de Origen
                        </span>
                        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] md:leading-[0.85] tracking-tight text-white mb-8">
                            Adquiere <br />
                            <span className="italic text-white/30">Lo Salvaje.</span>
                        </h1>
                        <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-md border-l border-white/10 pl-6">
                            Cada paquete es una pieza de la Amazonía. Tostado bajo demanda y enviado directamente desde nuestra finca en Río Negro.
                        </p>
                    </div>

                    {/* ── FILTERS: Sensory Selector ── */}
                    <div className="flex flex-col items-end gap-4 w-full md:w-auto">
                        <span className="text-right text-[9px] uppercase tracking-widest text-white/40 flex items-center gap-2">
                            <Filter size={10} /> Filtrar por Perfil
                        </span>
                        <div className="flex flex-wrap justify-end gap-2">
                            {FILTERS.map((f) => (
                                <button
                                    key={f.id}
                                    onClick={() => setActiveFilter(f.id)}
                                    className={`px-5 py-2 rounded-full text-[10px] uppercase tracking-widest transition-all duration-500 border ${activeFilter === f.id
                                        ? "bg-gold-400 text-black border-gold-400 shadow-[0_0_20px_rgba(250,204,21,0.3)]"
                                        : "bg-white/5 text-white/60 border-white/10 hover:border-white/30 hover:bg-white/10"
                                        }`}
                                >
                                    {f.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </header>

                {/* ── GRID: The Artifacts ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24">
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="group relative"
                        >
                            {/* Card Container */}
                            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-white/[0.02] border border-white/[0.05] group-hover:border-white/[0.1] transition-all duration-700">

                                {/* Dynamic Background Glow */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${product.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out`}
                                />

                                {/* Product Image */}
                                <div className="absolute inset-8 md:inset-12 z-10 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-4">
                                    <div className="relative w-full h-full shadow-2xl shadow-black/50 rounded-lg overflow-hidden grayscale-[50%] group-hover:grayscale-0 transition-all duration-700">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Overlay Details (Initial State) */}
                                <div className="absolute top-6 left-6 z-20">
                                    <span className={`text-[9px] uppercase tracking-[0.2em] font-bold px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 ${product.accent}`}>
                                        {product.tagline}
                                    </span>
                                </div>

                                <div className="absolute top-6 right-6 z-20">
                                    <span className="text-xl font-serif text-white drop-shadow-lg">
                                        ${product.price}
                                    </span>
                                </div>

                                {/* Hover Reveal Layer */}
                                <div className="absolute inset-0 z-30 flex flex-col justify-end p-8 md:p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/90 via-black/40 to-transparent">

                                    {/* Tasting Notes */}
                                    <div className="flex gap-2 mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                        {product.notes.map((note) => (
                                            <span key={note} className="text-[9px] text-white/80 bg-white/10 backdrop-blur px-2 py-1 rounded border border-white/10">
                                                {note}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-3xl font-serif text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                                        {product.name}
                                    </h3>

                                    <p className="text-xs text-gray-300 leading-relaxed max-w-xs mb-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                                        {product.description}
                                    </p>

                                    {/* Action Button */}
                                    <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-gold-400 transition-colors duration-300 flex items-center justify-center gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-300 rounded-lg">
                                        <span>Añadir al Ritual</span>
                                        <ArrowUpRight size={14} />
                                    </button>
                                </div>

                            </div>

                            {/* Minimal Info Below Card (Visible when not hovering, fades out on hover) */}
                            <div className="mt-6 px-2 flex justify-between items-start opacity-100 group-hover:opacity-30 transition-opacity duration-500">
                                <div>
                                    <h3 className="text-lg text-white font-medium tracking-wide">{product.name}</h3>
                                    <div className="flex items-center gap-2 mt-1">
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={10}
                                                    className={`${i < Math.floor(product.intensity / 2) ? "fill-white/40 text-transparent" : "text-white/10"}`}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-[10px] text-white/40 uppercase tracking-wider">{product.roast}</span>
                                    </div>
                                </div>
                                <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/40 hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                                    <ShoppingBag size={12} />
                                </button>
                            </div>

                        </div>
                    ))}
                </div>

                {/* ── FOOTER NOTE ── */}
                <div className="mt-32 text-center border-t border-white/5 pt-12 animate-fade-in-up">
                    <p className="font-serif text-2xl text-white/30 italic">
                        &ldquo;La selva no produce para el mercado. Produce para la vida.&rdquo;
                    </p>
                    <div className="mt-8 flex justify-center items-center gap-2 text-[10px] text-white/20 uppercase tracking-[0.3em]">
                        <Coffee size={12} />
                        <span>Café Amazonas &bull; 2026</span>
                    </div>
                </div>

            </main>
        </div>
    );
}
