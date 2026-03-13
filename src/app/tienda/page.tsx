"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight, ShoppingBag, Star, Filter, X, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";

/* ── DATA: The Artifacts ── */
const PRODUCTS = [
    // ── TIMBUYACU: LÍNEA CLÁSICA ──
    {
        id: "TC-250",
        name: "Timbuyacu Clásico",
        tagline: "Línea Clásica — 250g",
        price: 18,
        roast: "Medio",
        intensity: 6,
        mood: "timbuyacu",
        notes: ["Panela", "Naranja", "Cacao"],
        image: "/images/default-pack.jpg",
        description: "El perfil tradicional de la Finca Timbuyacu. Notas dulces y acidez cítrica brillante.",
        color: "#D4AF37", // Gold
        gradient: "radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.15), transparent 70%)",
        isHero: false
    },
    {
        id: "TC-500",
        name: "Timbuyacu Clásico",
        tagline: "Línea Clásica — 500g",
        price: 32,
        roast: "Medio",
        intensity: 6,
        mood: "timbuyacu",
        notes: ["Panela", "Naranja", "Cacao"],
        image: "/images/default-pack.jpg",
        description: "El perfil tradicional de la Finca Timbuyacu. Formato medio kilo.",
        color: "#D4AF37", // Gold
        gradient: "radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.15), transparent 70%)",
        isHero: false
    },

    // ── TIMBUYACU: EDICIÓN LIMITADA ──
    {
        id: "TL-MARAGO",
        name: "Timbuyacu Maragogype",
        tagline: "Lavado — Edición Limitada 250g",
        price: 28,
        roast: "Claro",
        intensity: 7,
        mood: "limitada",
        notes: ["Miel", "Floral", "Frutos Rojos"],
        image: "/images/default-pack.jpg",
        description: "Granos 'Elefante' de tamaño excepcional. Cosecha selectiva de Maragogype.",
        color: "#F87171", // Soft Red
        gradient: "radial-gradient(circle at 50% 50%, rgba(248, 113, 113, 0.15), transparent 70%)",
        isHero: false
    },
    {
        id: "TL-BOURBON",
        name: "Timbuyacu Bourbon",
        tagline: "Lavado — Edición Limitada 250g",
        price: 26,
        roast: "Medio-Claro",
        intensity: 5,
        mood: "limitada",
        notes: ["Caramelo", "Manzana", "Nuez"],
        image: "/images/default-pack.jpg",
        description: "Varietal clásico Bourbon. Taza limpia, dulce y con acidez málica.",
        color: "#FBBF24", // Amber
        gradient: "radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.15), transparent 70%)",
        isHero: false
    },
    {
        id: "TL-GEISHA",
        name: "Timbuyacu Geisha",
        tagline: "Lavado — Edición Limitada 250g",
        price: 55,
        roast: "Claro",
        intensity: 8,
        mood: "limitada",
        notes: ["Jazmín", "Bergamota", "Té de Papaya"],
        image: "/images/default-pack.jpg",
        description: "El rey de los varietales. Perfil aromático hiper-complejo y floral.",
        color: "#A78BFA", // Violet/Purple
        gradient: "radial-gradient(circle at 50% 50%, rgba(167, 139, 250, 0.15), transparent 70%)",
        isHero: true // Hero Layout
    },

    // ── TIMBUYACU: FILTER ──
    {
        id: "TF-15",
        name: "Timbuyacu Filter",
        tagline: "Drip Bag — 15g Unit",
        price: 4,
        roast: "Medio",
        intensity: 6,
        mood: "filter",
        notes: ["Práctico", "Dulce", "Equilibrado"],
        image: "/images/default-pack.jpg",
        description: "Café de especialidad en formato drip-bag para preparar en cualquier lugar.",
        color: "#9CA3AF", // Gray
        gradient: "radial-gradient(circle at 50% 50%, rgba(156, 163, 175, 0.15), transparent 70%)",
        isHero: false
    },
    {
        id: "TF-SET-5",
        name: "Set 5 Filters",
        tagline: "Timbuyacu Drip Bags",
        price: 18,
        roast: "Medio",
        intensity: 6,
        mood: "filter",
        notes: ["Pack Semanal", "Oficina", "Viaje"],
        image: "/images/default-pack.jpg",
        description: "Caja de 5 unidades. Tu dosis semanal de Amazonas lista para el filtro.",
        color: "#9CA3AF",
        gradient: "radial-gradient(circle at 50% 50%, rgba(156, 163, 175, 0.15), transparent 70%)",
        isHero: false
    },
    {
        id: "TF-SET-MUG",
        name: "Filters + Taza",
        tagline: "Timbuyacu Collection",
        price: 35,
        roast: "Medio",
        intensity: 6,
        mood: "filter",
        notes: ["Pack Regalo", "Cerámica", "Premium"],
        image: "/images/default-pack.jpg",
        description: "Incluye filtros Timbuyacu y una taza de cerámica artesanal.",
        color: "#D4AF37",
        gradient: "radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.15), transparent 70%)",
        isHero: false
    },

    // ── TIMBUYACU: EXPERIENCIAS & REGALOS ──
    {
        id: "TE-COFRE",
        name: "Cofre de la Finca Timbuyacu",
        tagline: "3 Microlotes Exclusivos",
        price: 85,
        roast: "Curaduría",
        intensity: 9,
        mood: "experiencia",
        notes: ["Mirador", "Jergón", "Shapingo"],
        image: "/images/default-pack.jpg",
        description: "Una caja premium de degustación con tres microlotes excepcionales cosechados en parcelas específicas de Rodríguez de Mendoza.",
        color: "#EAB308", // Yellow/Gold
        gradient: "radial-gradient(circle at 50% 50%, rgba(234, 179, 8, 0.2), transparent 70%)",
        isHero: true // Hero Layout
    },
    {
        id: "TE-AMAZONICO",
        name: "Set Amazónico",
        tagline: "Timbuyacu + Buenamoza",
        price: 45,
        roast: "Doble Origen",
        intensity: 7,
        mood: "experiencia",
        notes: ["Colaboración", "Contrastes", "Selva"],
        image: "/images/default-pack.jpg",
        description: "La unión de dos fincas legendarias en un solo viaje sensorial amazonense.",
        color: "#10B981", // Emerald
        gradient: "radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.15), transparent 70%)",
        isHero: false
    },
    {
        id: "TE-NAVIDAD",
        name: "Set Navideño Timbuyacu",
        tagline: "Edición Festiva",
        price: 50,
        roast: "Especial",
        intensity: 8,
        mood: "experiencia",
        notes: ["Especias", "Cacao", "Cálido"],
        image: "/images/default-pack.jpg",
        description: "Un perfil de tueste diseñado para acompañar los dulces de temporada.",
        color: "#EF4444", // Red
        gradient: "radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.15), transparent 70%)",
        isHero: false
    },
    {
        id: "TE-FILTERS-MUG-SPL",
        name: "Set Filters + Taza Clásica",
        tagline: "Edición Especial",
        price: 38,
        roast: "Medio",
        intensity: 6,
        mood: "experiencia",
        notes: ["Edición Limitada", "Cerámica", "Regalo"],
        image: "/images/default-pack.jpg",
        description: "Caja de regalo premium con filtros y la taza oficial de Finca Timbuyacu.",
        color: "#D4AF37",
        gradient: "radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.15), transparent 70%)",
        isHero: false
    },

    // ── BUENAMOZA (CAFÉ MUJER) ──
    {
        id: "BM-250",
        name: "Buenamoza",
        tagline: "Café de Mujer — 250g",
        price: 20,
        roast: "Medio-Oscuro",
        intensity: 8,
        mood: "buenamoza",
        notes: ["Nueces Tostadas", "Chocolate Oscuro", "Cuerpo Denso"],
        image: "/images/default-pack.jpg",
        description: "Producido por María Dorila Vargas Grandez. Un café con carácter, intensidad y profunda dulzura.",
        color: "#EC4899", // Pink/Rose
        gradient: "radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.15), transparent 70%)",
        isHero: false
    },
    {
        id: "BM-500",
        name: "Buenamoza",
        tagline: "Café de Mujer — 500g",
        price: 36,
        roast: "Medio-Oscuro",
        intensity: 8,
        mood: "buenamoza",
        notes: ["Nueces Tostadas", "Chocolate Oscuro", "Cuerpo Denso"],
        image: "/images/default-pack.jpg",
        description: "Producido por María Dorila Vargas Grandez. Formato de 500 gramos.",
        color: "#EC4899",
        gradient: "radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.15), transparent 70%)",
        isHero: false
    },
    {
        id: "BM-1KG",
        name: "Buenamoza",
        tagline: "Café de Mujer — 1kg",
        price: 65,
        roast: "Medio-Oscuro",
        intensity: 8,
        mood: "buenamoza",
        notes: ["Nueces Tostadas", "Chocolate Oscuro", "Cuerpo Denso"],
        image: "/images/default-pack.jpg",
        description: "Producido por María Dorila. Un kilo del perfil más intenso y achocolatado de Amazonas.",
        color: "#EC4899",
        gradient: "radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.15), transparent 70%)",
        isHero: true // Hero Layout
    },

    // ── CAFÉ MONTEVERDE ──
    {
        id: "MV-250",
        name: "Monteverde Clásico",
        tagline: "Línea Clásica — 250g",
        price: 17,
        roast: "Medio",
        intensity: 5,
        mood: "monteverde",
        notes: ["Hierba Dulce", "Cítrico", "Mandarina"],
        image: "/images/default-pack.jpg",
        description: "La línea fundacional. Café lavado tradicional amazónico con acidez brillante.",
        color: "#22C55E", // Green
        gradient: "radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.15), transparent 70%)",
        isHero: false
    },
    {
        id: "MV-500",
        name: "Monteverde Clásico",
        tagline: "Línea Clásica — 500g",
        price: 30,
        roast: "Medio",
        intensity: 5,
        mood: "monteverde",
        notes: ["Hierba Dulce", "Cítrico", "Mandarina"],
        image: "/images/default-pack.jpg",
        description: "La línea fundacional Monteverde. Formato de medio kilo.",
        color: "#22C55E",
        gradient: "radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.15), transparent 70%)",
        isHero: false
    },
    {
        id: "MV-1KG",
        name: "Monteverde Clásico",
        tagline: "Línea Clásica — 1kg",
        price: 55,
        roast: "Medio",
        intensity: 5,
        mood: "monteverde",
        notes: ["Hierba Dulce", "Cítrico", "Mandarina"],
        image: "/images/default-pack.jpg",
        description: "Reserva mensual. Un kilo de la clásica acidez mandarina de Monteverde.",
        color: "#22C55E",
        gradient: "radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.15), transparent 70%)",
        isHero: true // Hero Layout
    },

    // ── MERCH & ACCESORIOS ──
    {
        id: "MC-TAZA",
        name: "Taza de Cerámica",
        tagline: "Timbuyacu Oficial",
        price: 25,
        roast: "Accesorio",
        intensity: 0,
        mood: "merch",
        notes: ["Artesanal", "Cerámica", "250ml"],
        image: "/images/default-pack.jpg",
        description: "Taza artesanal grabada con el emblema de la finca Timbuyacu. Perfecta retención térmica.",
        color: "#F3F4F6", // Light Gray
        gradient: "radial-gradient(circle at 50% 50%, rgba(243, 244, 246, 0.15), transparent 70%)",
        isHero: false
    },
    {
        id: "MC-TOTE",
        name: "Totebag Timbuyacu",
        tagline: "100% Algodón",
        price: 15,
        roast: "Accesorio",
        intensity: 0,
        mood: "merch",
        notes: ["Ecológico", "Resistente", "Lienzo"],
        image: "/images/default-pack.jpg",
        description: "Bolsa de lienzo reforzado. Lleva el Amazonas a todas partes.",
        color: "#FDE68A", // Cream/Canvas
        gradient: "radial-gradient(circle at 50% 50%, rgba(253, 230, 138, 0.15), transparent 70%)",
        isHero: false
    },
];

const FILTERS = [
    { id: "all", label: "Colección Completa" },
    { id: "timbuyacu", label: "Timbuyacu Clásico" },
    { id: "limitada", label: "Timbuyacu Limitada" },
    { id: "filter", label: "Drip / Filters" },
    { id: "experiencia", label: "Experiencias" },
    { id: "buenamoza", label: "Café Mujer (Buenamoza)" },
    { id: "monteverde", label: "Café Monteverde" },
    { id: "merch", label: "Accesorios" },
];

export default function TiendaPage() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const { addItem } = useCart();

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
                                Catálogo íntegro desde Rodríguez de Mendoza, Amazonas. Cultivado por familias, curado con maestría.
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

                {/* ── CATALOG RENDERING (Brand Grouped) ── */}
                <div className="flex flex-col gap-40">
                    {[
                        {
                            id: "timbuyacu",
                            title: "Finca Timbuyacu",
                            description: "El cultivo insignia de la familia. Desde la línea clásica hasta microlotes de edición limitada y experiencias amazónicas.",
                            brands: ["timbuyacu", "limitada", "filter", "experiencia", "merch"]
                        },
                        {
                            id: "buenamoza",
                            title: "Buenamoza (Café Mujer)",
                            description: "Producido íntegramente por María Dorila Vargas Grandez y mujeres cafetaleras de Rodríguez de Mendoza. Un homenaje al empoderamiento agrícola.",
                            brands: ["buenamoza"]
                        },
                        {
                            id: "monteverde",
                            title: "Café Monteverde",
                            description: "La línea tradicional de Amazonas. Perfiles limpios, dulces y con vibrante acidez mandarina.",
                            brands: ["monteverde"]
                        }
                    ].map((brandGroup) => {
                        // Get products belonging to this specific brand group
                        const groupProducts = filteredProducts.filter(p => brandGroup.brands.includes(p.mood));

                        // Hide the entire section if no products match the current filter
                        if (groupProducts.length === 0) return null;

                        return (
                            <section key={brandGroup.id} className="relative w-full block">
                                {/* Brand Header */}
                                <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-8">
                                    <div className="max-w-xl">
                                        <h2 className="font-serif text-4xl md:text-6xl text-white mb-4">
                                            {brandGroup.title}
                                        </h2>
                                        <p className="text-white/50 text-sm md:text-base font-light leading-relaxed">
                                            {brandGroup.description}
                                        </p>
                                    </div>
                                    <div className="hidden md:block">
                                        <span className="font-mono text-[10px] uppercase tracking-widest text-gold-400">
                                            {groupProducts.length} {groupProducts.length === 1 ? 'Producto' : 'Productos'}
                                        </span>
                                    </div>
                                </div>

                                {/* Compact Grid for this Brand */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 md:gap-x-10 gap-y-24">
                                    {groupProducts.map((product) => (
                        <div
                            key={product.id}
                            className={`group relative perspective-1000 ${
                                // Compact Grid Logic
                                product.isHero ? "sm:col-span-2 lg:col-span-3 xl:col-span-4 flex flex-col lg:flex-row gap-12 items-center border-t border-b border-white/[0.04] py-12" :
                                    "col-span-1 flex flex-col"
                                }`}
                            onMouseEnter={() => setHoveredProduct(product.id as any)}
                            onMouseLeave={() => setHoveredProduct(null)}
                        >
                            {/* ── VISUAL CONTAINER (Compact E-commerce) ── */}
                            <div className={`relative w-full ${product.isHero ? "lg:w-[50%] aspect-[16/9] lg:order-2" : "aspect-[4/5]"
                                } flex items-center justify-center`}>
                                
                                {/* Organic Atmosphere Glow specific to product color */}
                                <div 
                                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000 blur-[80px] rounded-full"
                                    style={{ background: `radial-gradient(circle, ${product.color}, transparent 70%)` }}
                                />

                                {/* Floating Product Assembly */}
                                <div className="relative w-[80%] h-[85%] transition-all duration-1000 ease-out group-hover:scale-[1.05] group-hover:-translate-y-6 perspective-1000">
                                    <div className="relative w-full h-full drop-shadow-[0_30px_50px_rgba(0,0,0,0.8)]">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-contain filter grayscale-[0.3] opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100"
                                        />
                                    </div>
                                    
                                    {/* Physical Ground Contact Shadow */}
                                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[70%] h-8 bg-black/60 blur-2xl rounded-[100%] scale-75 group-hover:scale-100 transition-transform duration-1000" />
                                </div>
                            </div>

                            {/* ── INFORMATION CONTAINER ── */}
                            <div className={`flex flex-col ${product.isHero ? "lg:w-[50%] lg:order-1 lg:items-end lg:text-right" : "mt-6"
                                }`}>
                                {/* ID Number */}
                                <span className="font-mono text-[10px] text-white/20 mb-3 block">
                                    {product.id}
                                </span>

                                {/* Title Group */}
                                <div className="mb-4 relative">
                                    <h2
                                        className={`font-serif text-transparent bg-clip-text transition-all duration-500 ${product.isHero ? "text-4xl lg:text-5xl" : "text-2xl lg:text-3xl"}`}
                                        style={{
                                            // Dynamic inline style for gradient text
                                            backgroundImage: `linear-gradient(to right, #fff, ${product.color})`
                                        }}
                                    >
                                        {product.name}
                                    </h2>
                                    <p className="text-[9px] uppercase tracking-[0.2em] text-white/50 mt-2">
                                        {product.tagline}
                                    </p>
                                </div>

                                {/* Flavor Tags */}
                                <div className={`flex flex-wrap gap-2 mb-8 ${product.isHero ? "justify-end" : "justify-start"}`}>
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
                                <p className={`text-xs text-gray-400 leading-relaxed mb-6 ${product.isHero ? "text-right max-w-sm" : ""}`}>
                                    {product.description}
                                </p>

                                {/* Price & Neuromarketing Primary CTA */}
                                <div className={`flex items-center gap-4 ${product.isHero ? "flex-row-reverse" : ""}`}>
                                    <span className={`font-serif text-white ${product.isHero ? "text-3xl" : "text-2xl"}`}>
                                        S/{product.price}
                                    </span>
                                    <div className="h-px w-4 bg-white/20" />
                                    <button 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            addItem({
                                                id: String(product.id),
                                                name: product.name,
                                                price: product.price,
                                                image: product.image,
                                                roast: product.roast
                                            });
                                        }}
                                        className="group/btn flex items-center gap-2 px-4 py-2 bg-white text-black text-[9px] uppercase tracking-[0.15em] font-bold hover:bg-gold-400 transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                                    >
                                        Añadir
                                        <Plus size={12} className="group-hover/btn:rotate-90 transition-transform duration-500" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                                </div>
                            </section>
                        );
                    })}
                </div>

                {/* ── FOOTER MARKER ── */}
                <div className="mt-48 mb-24 flex flex-col items-center justify-center opacity-30">
                    <span className="font-serif italic text-2xl mb-4">Fin del Catálogo</span>
                    <div className="w-px h-24 bg-white" />
                </div>
            </main>

            <Footer />
        </div>
    );
}
