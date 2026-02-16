"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Droplets, Mountain, ArrowRight, Thermometer, Coffee, Leaf, MapPin } from "lucide-react";

/* ────────────────────────────────────────────
   THE JOURNEY: From Mendoza to Your Cup
   A cinematic, cartographic experience
   ──────────────────────────────────────────── */

interface JourneyStop {
    id: string;
    name: string;
    coordinates: string;
    tag: string;
    elevation: string;
    temperature: string;
    humidity: string;
    headline: string;
    description: string;
    lore: string;
    image: string;
    mapPos: { x: number; y: number };
    color: string;
}

const JOURNEY: JourneyStop[] = [
    {
        id: "mendoza",
        name: "Mendoza, Amazonas",
        coordinates: "6.3917° S, 77.4833° W",
        tag: "Origen",
        elevation: "1,650m",
        temperature: "18°C",
        humidity: "78%",
        headline: "Donde Todo Comienza",
        description:
            "En las laderas de Mendoza, a 1,650 metros sobre el nivel del mar, nuestros cafetales crecen bajo la sombra de cedros y moenas centenarios. El microclima único de esta zona — niebla perpetua, suelo volcánico y temperaturas frescas — produce un grano denso y aromático imposible de replicar.",
        lore: "Los ancianos dicen que el café de Mendoza guarda el espíritu del cóndor. Cada árbol es un altar.",
        image: "https://picsum.photos/seed/mendoza_coffee/800/600",
        mapPos: { x: 120, y: 90 },
        color: "#D4AF37",
    },
    {
        id: "proceso",
        name: "Beneficio Húmedo",
        coordinates: "6.4000° S, 77.5000° W",
        tag: "Proceso",
        elevation: "1,500m",
        temperature: "20°C",
        humidity: "82%",
        headline: "Manos Que Saben",
        description:
            "Cada cereza es seleccionada a mano en su punto óptimo de maduración. El beneficio húmedo se realiza con aguas de manantial de la montaña, seguido de un secado lento en camas africanas bajo sombra controlada durante 18 días.",
        lore: "El agua de la montaña no lava el grano. Lo despierta.",
        image: "https://picsum.photos/seed/wet_process/800/600",
        mapPos: { x: 160, y: 130 },
        color: "#6EE7B7",
    },
    {
        id: "ruta",
        name: "Ruta Amazónica",
        coordinates: "5.2000° S, 76.0000° W",
        tag: "Travesía",
        elevation: "200m",
        temperature: "28°C",
        humidity: "90%",
        headline: "El Descenso",
        description:
            "Desde las alturas de Mendoza, el café desciende por caminos de herradura y ríos tributarios hacia el corazón de la Amazonía. Un viaje de 4 días que cruza 3 ecosistemas, desde el bosque de neblina hasta la selva baja inundable.",
        lore: "El río no tiene prisa. Y el café que viaja por él tampoco.",
        image: "https://picsum.photos/seed/amazon_route/800/600",
        mapPos: { x: 240, y: 170 },
        color: "#60A5FA",
    },
    {
        id: "tostado",
        name: "Tostado Artesanal",
        coordinates: "3.7491° S, 73.2538° W",
        tag: "Arte",
        elevation: "106m",
        temperature: "32°C",
        humidity: "85%",
        headline: "Fuego y Paciencia",
        description:
            "En nuestro taller en Iquitos, cada lote se tuesta en micro-batches de 12kg. El maestro tostador lee el primer crack como un músico lee una partitura — con precisión absoluta y sensibilidad infinita.",
        lore: "El fuego no transforma el grano. Revela lo que siempre fue.",
        image: "https://picsum.photos/seed/coffee_roast/800/600",
        mapPos: { x: 340, y: 140 },
        color: "#F87171",
    },
];

export default function Origins() {
    const [activeStop, setActiveStop] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    // Intersection Observer for reveal
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.15 }
        );

        const node = sectionRef.current;
        if (node) observer.observe(node);
        return () => {
            if (node) observer.unobserve(node);
        };
    }, []);

    const handleStopChange = useCallback((index: number) => {
        if (index === activeStop) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setActiveStop(index);
            setIsTransitioning(false);
        }, 300);
    }, [activeStop]);

    const current = JOURNEY[activeStop];

    return (
        <section
            ref={sectionRef}
            className="relative w-full bg-[#060a06] text-white overflow-hidden"
        >
            {/* ═══════════════════════════════════════
         LAYER 0: ATMOSPHERIC BACKGROUND
         Deep topographic texture
         ═══════════════════════════════════════ */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Rotating gradient orbs */}
                <div
                    className="absolute w-[800px] h-[800px] -top-[200px] -left-[200px] rounded-full opacity-[0.04]"
                    style={{
                        background: "radial-gradient(circle, #D4AF37 0%, transparent 70%)",
                        animation: "slow-rotate 120s linear infinite",
                    }}
                />
                <div
                    className="absolute w-[600px] h-[600px] -bottom-[150px] -right-[150px] rounded-full opacity-[0.03]"
                    style={{
                        background: "radial-gradient(circle, #6EE7B7 0%, transparent 70%)",
                        animation: "slow-rotate-reverse 150s linear infinite",
                    }}
                />

                {/* Topographic lines */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.04]" preserveAspectRatio="none" viewBox="0 0 1000 800">
                    {[...Array(12)].map((_, i) => (
                        <ellipse
                            key={i}
                            cx={350 + i * 15}
                            cy={400 + i * 8}
                            rx={200 + i * 40}
                            ry={100 + i * 25}
                            fill="none"
                            stroke="white"
                            strokeWidth="0.5"
                            style={{ animation: `topo-pulse ${8 + i * 2}s ease-in-out infinite`, animationDelay: `${i * 0.5}s` }}
                        />
                    ))}
                </svg>

                {/* Film grain */}
                <div className="absolute inset-0 film-grain opacity-15" />
            </div>

            {/* ═══════════════════════════════════════
         SECTION 1: THE HEADLINE
         Cinematic intro
         ═══════════════════════════════════════ */}
            <div className="relative z-10 pt-24 md:pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
                <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-px bg-gold-400" />
                        <span className="text-gold-400 text-[10px] uppercase tracking-[0.3em] font-bold">
                            Mendoza, Amazonas — Perú
                        </span>
                    </div>
                    <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight mb-6">
                        Del Suelo <br />
                        <span className="italic text-white/25">a Tu Ritual</span>
                        <span className="text-gold-400">.</span>
                    </h2>
                    <p className="max-w-xl text-white/40 text-sm md:text-base leading-relaxed border-l border-white/10 pl-6">
                        Un viaje de 1,650 metros de altitud y 4 días de travesía a través de la selva más biodiversa del planeta.
                        Cada taza cuenta esta historia.
                    </p>
                </div>
            </div>

            {/* ═══════════════════════════════════════
         SECTION 2: THE MAP + LORE PANEL
         Interactive cartographic interface
         ═══════════════════════════════════════ */}
            <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto pb-16">
                <div className={`flex flex-col lg:flex-row gap-0 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>

                    {/* ── LEFT: The Cartographic Map ── */}
                    <div className="w-full lg:w-[55%] relative">
                        <div className="relative w-full aspect-[16/10] bg-black/30 border border-white/[0.06] rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none overflow-hidden backdrop-blur-sm">

                            {/* Map Background Texture */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_rgba(212,175,55,0.15)_0%,_transparent_60%)]" />
                            </div>

                            {/* Main SVG Map */}
                            <svg viewBox="0 0 460 290" className="absolute inset-0 w-full h-full p-4 md:p-6">
                                <defs>
                                    <linearGradient id="riverFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="transparent" />
                                        <stop offset="30%" stopColor="#D4AF37" stopOpacity="0.5" />
                                        <stop offset="70%" stopColor="#60A5FA" stopOpacity="0.3" />
                                        <stop offset="100%" stopColor="transparent" />
                                    </linearGradient>
                                    <filter id="glow">
                                        <feGaussianBlur stdDeviation="3" result="blur" />
                                        <feMerge>
                                            <feMergeNode in="blur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                    <radialGradient id="markerGlow">
                                        <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
                                        <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                                    </radialGradient>
                                </defs>

                                {/* Amazon River System */}
                                <path
                                    d="M0,180 C60,175 80,200 130,170 S200,120 260,150 S340,200 460,160"
                                    fill="none"
                                    stroke="rgba(255,255,255,0.06)"
                                    strokeWidth="8"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M0,180 C60,175 80,200 130,170 S200,120 260,150 S340,200 460,160"
                                    fill="none"
                                    stroke="url(#riverFlow)"
                                    strokeWidth="2"
                                    strokeDasharray="8 6"
                                    style={{ animation: "dash 40s linear infinite" }}
                                />

                                {/* Tributaries */}
                                <path d="M130,170 C120,130 110,100 100,60" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="3" strokeLinecap="round" />
                                <path d="M260,150 C250,110 240,80 230,40" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="2" strokeLinecap="round" />
                                <path d="M200,140 C210,170 220,210 230,260" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="2" strokeLinecap="round" />

                                {/* Journey Path (Dashed, connecting stops) */}
                                <path
                                    d="M120,90 C145,105 155,125 160,130 Q200,150 240,170 Q290,155 340,140"
                                    fill="none"
                                    stroke="rgba(212,175,55,0.2)"
                                    strokeWidth="1"
                                    strokeDasharray="4 4"
                                    style={{ animation: "dash 20s linear infinite" }}
                                />

                                {/* Journey Stops */}
                                {JOURNEY.map((stop, index) => {
                                    const isActive = index === activeStop;
                                    return (
                                        <g
                                            key={stop.id}
                                            onClick={() => handleStopChange(index)}
                                            className="cursor-pointer"
                                            style={{ transition: "all 0.3s ease" }}
                                        >
                                            {/* Outer glow ring */}
                                            {isActive && (
                                                <>
                                                    <circle
                                                        cx={stop.mapPos.x}
                                                        cy={stop.mapPos.y}
                                                        r="20"
                                                        fill="url(#markerGlow)"
                                                    />
                                                    <circle
                                                        cx={stop.mapPos.x}
                                                        cy={stop.mapPos.y}
                                                        r="14"
                                                        fill="none"
                                                        stroke={stop.color}
                                                        strokeWidth="0.5"
                                                        opacity="0.4"
                                                        style={{ animation: "marker-ping 2s ease-out infinite" }}
                                                    />
                                                </>
                                            )}

                                            {/* Core marker */}
                                            <circle
                                                cx={stop.mapPos.x}
                                                cy={stop.mapPos.y}
                                                r={isActive ? 6 : 3.5}
                                                fill={isActive ? stop.color : "rgba(255,255,255,0.5)"}
                                                style={{ transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)" }}
                                                filter={isActive ? "url(#glow)" : undefined}
                                            />

                                            {/* Index number */}
                                            <text
                                                x={stop.mapPos.x}
                                                y={stop.mapPos.y - 14}
                                                textAnchor="middle"
                                                fill={isActive ? stop.color : "rgba(255,255,255,0.3)"}
                                                fontSize="8"
                                                fontFamily="monospace"
                                                className="pointer-events-none"
                                                style={{ transition: "fill 0.3s" }}
                                            >
                                                0{index + 1}
                                            </text>

                                            {/* Label */}
                                            <text
                                                x={stop.mapPos.x + (index % 2 === 0 ? 14 : -14)}
                                                y={stop.mapPos.y + 4}
                                                textAnchor={index % 2 === 0 ? "start" : "end"}
                                                fill={isActive ? "white" : "rgba(255,255,255,0.25)"}
                                                fontSize="7"
                                                className="pointer-events-none uppercase"
                                                style={{ transition: "fill 0.3s", letterSpacing: "0.12em" }}
                                            >
                                                {stop.name.split(",")[0]}
                                            </text>
                                        </g>
                                    );
                                })}

                                {/* Compass */}
                                <g transform="translate(410, 30)">
                                    <circle cx="0" cy="0" r="12" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                                    <line x1="0" y1="-10" x2="0" y2="-6" stroke="rgba(212,175,55,0.5)" strokeWidth="1" />
                                    <text x="0" y="-14" textAnchor="middle" fill="rgba(212,175,55,0.4)" fontSize="5" fontFamily="monospace">N</text>
                                    <line x1="0" y1="10" x2="0" y2="6" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
                                    <line x1="-10" y1="0" x2="-6" y2="0" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
                                    <line x1="10" y1="0" x2="6" y2="0" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
                                </g>

                                {/* Scale bar */}
                                <g transform="translate(30, 265)">
                                    <line x1="0" y1="0" x2="60" y2="0" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
                                    <line x1="0" y1="-3" x2="0" y2="3" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
                                    <line x1="60" y1="-3" x2="60" y2="3" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
                                    <text x="30" y="10" textAnchor="middle" fill="rgba(255,255,255,0.15)" fontSize="5" fontFamily="monospace">200 km</text>
                                </g>
                            </svg>

                            {/* Live Coordinates Display */}
                            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 font-mono text-[10px] text-right transition-all duration-500">
                                <span className="text-white/20 block">{current.coordinates}</span>
                                <span className="text-gold-400/60 block mt-0.5">{current.tag}</span>
                            </div>

                            {/* Scan Line Effect */}
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <div
                                    className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent"
                                    style={{ animation: "scan-line 8s linear infinite" }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* ── RIGHT: The Lore / Info Panel ── */}
                    <div className="w-full lg:w-[45%] relative bg-black/40 border border-white/[0.06] border-t-0 lg:border-t lg:border-l-0 rounded-b-3xl lg:rounded-r-3xl lg:rounded-bl-none backdrop-blur-sm overflow-hidden">

                        {/* Active color accent line */}
                        <div
                            className="absolute top-0 lg:top-0 left-0 right-0 lg:left-0 lg:right-auto h-px lg:h-full lg:w-px transition-colors duration-700"
                            style={{ backgroundColor: current.color }}
                        />

                        <div className={`p-8 md:p-10 lg:p-12 transition-all duration-300 ${isTransitioning ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"}`}>
                            {/* Step indicator */}
                            <div className="flex items-center gap-3 mb-8">
                                {JOURNEY.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleStopChange(i)}
                                        className="group flex items-center gap-2"
                                    >
                                        <div
                                            className={`h-1 rounded-full transition-all duration-500 ${i === activeStop ? "w-8 bg-gold-400" : "w-3 bg-white/15 group-hover:bg-white/30"
                                                }`}
                                        />
                                    </button>
                                ))}
                                <span className="ml-auto font-mono text-[10px] text-white/30">
                                    {String(activeStop + 1).padStart(2, "0")} / {String(JOURNEY.length).padStart(2, "0")}
                                </span>
                            </div>

                            {/* Tag */}
                            <span
                                className="inline-block px-3 py-1 mb-5 text-[9px] uppercase tracking-[0.2em] font-bold rounded-sm transition-colors duration-500"
                                style={{ backgroundColor: current.color, color: "#000" }}
                            >
                                {current.tag}
                            </span>

                            {/* Title */}
                            <h3 className="text-3xl md:text-4xl font-serif text-white mb-2 leading-tight">
                                {current.headline}
                            </h3>
                            <p className="text-xs text-white/30 font-mono mb-6 flex items-center gap-2">
                                <MapPin size={10} />
                                {current.name}
                            </p>

                            {/* Stats Row */}
                            <div className="grid grid-cols-3 gap-4 mb-8 py-5 border-y border-white/[0.06]">
                                <div>
                                    <div className="flex items-center gap-1.5 mb-1 text-white/40">
                                        <Mountain size={12} />
                                        <span className="text-[8px] uppercase tracking-widest">Alt.</span>
                                    </div>
                                    <span className="text-sm font-mono text-white/90">{current.elevation}</span>
                                </div>
                                <div>
                                    <div className="flex items-center gap-1.5 mb-1 text-white/40">
                                        <Thermometer size={12} />
                                        <span className="text-[8px] uppercase tracking-widest">Temp.</span>
                                    </div>
                                    <span className="text-sm font-mono text-white/90">{current.temperature}</span>
                                </div>
                                <div>
                                    <div className="flex items-center gap-1.5 mb-1 text-white/40">
                                        <Droplets size={12} />
                                        <span className="text-[8px] uppercase tracking-widest">Hum.</span>
                                    </div>
                                    <span className="text-sm font-mono text-white/90">{current.humidity}</span>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                {current.description}
                            </p>

                            {/* Lore Quote */}
                            <blockquote className="border-l-2 border-white/15 pl-4 italic text-white/50 text-xs leading-relaxed mb-8">
                                &ldquo;{current.lore}&rdquo;
                            </blockquote>

                            {/* Image strip */}
                            <div className="relative h-40 w-full rounded-xl overflow-hidden border border-white/[0.06] group">
                                <Image
                                    src={current.image}
                                    alt={current.name}
                                    fill
                                    className="object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                                    <div>
                                        <span className="text-[9px] uppercase tracking-widest text-white/60 block">{current.name}</span>
                                    </div>
                                    <button className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-white/60 hover:text-gold-400 transition-colors">
                                        Explorar <ArrowRight size={10} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ═══════════════════════════════════════
         SECTION 3: THE JOURNEY TIMELINE
         Horizontal strip of milestones
         ═══════════════════════════════════════ */}
            <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto pt-8 pb-24 md:pb-32">
                <div className={`transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>

                    {/* Timeline connector */}
                    <div className="relative">
                        <div className="absolute top-5 left-0 right-0 h-px bg-white/[0.06]" />
                        <div
                            className="absolute top-5 left-0 h-px bg-gold-400/40 transition-all duration-700"
                            style={{ width: `${((activeStop + 1) / JOURNEY.length) * 100}%` }}
                        />

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {JOURNEY.map((stop, i) => {
                                const isPast = i <= activeStop;
                                const isActive = i === activeStop;
                                return (
                                    <button
                                        key={stop.id}
                                        onClick={() => handleStopChange(i)}
                                        className="text-left group pt-8 relative"
                                    >
                                        {/* Dot on timeline */}
                                        <div className="absolute top-3 left-0">
                                            <div
                                                className={`w-4 h-4 rounded-full border-2 transition-all duration-500 ${isActive
                                                        ? "border-gold-400 bg-gold-400 scale-125 shadow-[0_0_12px_rgba(212,175,55,0.5)]"
                                                        : isPast
                                                            ? "border-gold-400/50 bg-gold-400/20"
                                                            : "border-white/15 bg-transparent"
                                                    }`}
                                            />
                                        </div>

                                        {/* Step number */}
                                        <span className={`font-mono text-[10px] block mb-2 transition-colors duration-300 ${isActive ? "text-gold-400" : "text-white/20"}`}>
                                            0{i + 1}
                                        </span>

                                        {/* Name */}
                                        <span className={`text-sm font-medium block transition-colors duration-300 ${isActive ? "text-white" : "text-white/40 group-hover:text-white/60"}`}>
                                            {stop.name.split(",")[0]}
                                        </span>

                                        {/* Tag */}
                                        <span className={`text-[10px] uppercase tracking-widest mt-1 block transition-colors duration-300 ${isActive ? "text-gold-400/80" : "text-white/15"}`}>
                                            {stop.tag}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* ═══ BOTTOM STATS BAR ═══ */}
            <div className="relative z-10 border-t border-white/[0.04]">
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-wrap items-center gap-x-10 gap-y-4">
                    {[
                        { icon: Coffee, label: "Variedad", value: "Typica · Caturra" },
                        { icon: Mountain, label: "Altitud", value: "1,650m" },
                        { icon: Leaf, label: "Proceso", value: "Lavado" },
                        { icon: Droplets, label: "Cupping", value: "87+" },
                    ].map((stat, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <stat.icon size={12} className="text-gold-400/50" />
                            <span className="text-[10px] text-white/30 uppercase tracking-widest">{stat.label}</span>
                            <span className="text-xs text-white/70 font-medium">{stat.value}</span>
                            {i < 3 && <span className="text-white/[0.08] ml-6 hidden md:inline">│</span>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
