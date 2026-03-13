"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Instagram, Mail, MapPin, X } from "lucide-react";

/* ────────────────────────────────────────
   FULL-SCREEN MENU
   A cinematic, immersive navigation overlay
   ──────────────────────────────────────── */

interface FullScreenMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const NAV_LINKS = [
    { href: "/", label: "Inicio", description: "La puerta de la selva", image: "https://picsum.photos/seed/jungle/600/800" },
    { href: "/tienda", label: "Tienda", description: "Adquiere lo salvaje", image: "https://picsum.photos/seed/coffee_bag/600/800" },
    { href: "#origins", label: "Origen", description: "Mendoza, Amazonas", image: "https://picsum.photos/seed/mendoza_forest/600/800" },
    { href: "#", label: "Impacto", description: "Nuestra huella verde", image: "https://picsum.photos/seed/farmer/600/800" },
    { href: "#", label: "Contacto", description: "Conversa con nosotros", image: "https://picsum.photos/seed/pour_over/600/800" },
];

const FOOTER_LINKS = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Mail, label: "Correo", href: "mailto:hola@cafeamazonas.com" },
    { icon: MapPin, label: "Mendoza, Amazonas", href: "#" },
];

export default function FullScreenMenu({ isOpen, onClose }: FullScreenMenuProps) {
    const overlayRef = useRef<HTMLDivElement>(null);
    const [hoveredLink, setHoveredLink] = useState<number>(0);

    // Lock body scroll when open
    useEffect(() => {
        if (isOpen) {
            // ... (rest of useEffect)
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

    return (
        <div
            ref={overlayRef}
            className={`fixed inset-0 z-[100] transition-all duration-700 ${isOpen ? "pointer-events-auto" : "pointer-events-none"
                }`}
            aria-hidden={!isOpen}
        >
            {/* ═══ BACKDROP ═══ */}
            <div
                className={`absolute inset-0 bg-black/95 backdrop-blur-2xl transition-opacity duration-700 ${isOpen ? "opacity-100" : "opacity-0"
                    }`}
                onClick={onClose}
            />

            {/* ═══ ATMOSPHERIC LAYER ═══ */}
            <div className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 delay-300 ${isOpen ? "opacity-100" : "opacity-0"}`}>
                {/* Rotating ambient orb */}
                <div
                    className="absolute w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.03]"
                    style={{
                        background: "radial-gradient(circle, #D4AF37 0%, transparent 70%)",
                        animation: "slow-rotate 90s linear infinite",
                    }}
                />
                {/* Topographic lines */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.02]" viewBox="0 0 800 600" preserveAspectRatio="none">
                    {[...Array(8)].map((_, i) => (
                        <ellipse
                            key={i}
                            cx={400 + i * 10}
                            cy={300 + i * 5}
                            rx={120 + i * 50}
                            ry={60 + i * 30}
                            fill="none"
                            stroke="white"
                            strokeWidth="0.5"
                            style={{ animation: `topo-pulse ${10 + i}s ease-in-out infinite` }}
                        />
                    ))}
                </svg>
                {/* Film grain */}
                <div className="absolute inset-0 film-grain opacity-10" />
            </div>

            {/* ═══ CONTENT ═══ */}
            <div className={`relative z-10 h-full flex flex-col transition-all duration-700 delay-100 ${isOpen ? "opacity-100" : "opacity-0"}`}>

                {/* ── HEADER: Close Button ── */}
                <div className="flex justify-between items-center px-6 md:px-12 py-6 md:py-8">
                    {/* Logo */}
                    <div className={`transition-all duration-700 delay-200 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
                        <Image
                            src="/cafeamazonas-logo.webp"
                            alt="Café Amazonas"
                            width={160}
                            height={64}
                            className="h-10 md:h-14 w-auto object-contain opacity-50 drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                        />
                    </div>

                    {/* Close */}
                    <button
                        onClick={onClose}
                        className="flex items-center gap-2 md:gap-3 pl-4 pr-3 py-2 md:pl-5 md:pr-4 md:py-2.5 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/[0.08] text-white hover:bg-[#C5A028] hover:text-black hover:border-[#C5A028] transition-all duration-300 group shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
                    >
                        <span className="text-[0.65rem] md:text-[0.7rem] uppercase tracking-widest font-bold hidden xs:inline-block">
                            Cerrar
                        </span>
                        <X size={18} className="group-hover:rotate-90 transition-transform duration-500" />
                    </button>
                </div>

                {/* ── MAIN: Split Layout ── */}
                <div className="flex-1 flex flex-col lg:flex-row px-6 md:px-12 lg:px-20 overflow-y-auto overflow-x-hidden">

                    {/* LEFT: Navigation Links */}
                    <div className="flex-1 flex flex-col justify-center py-6 md:py-10 lg:py-0 relative z-20">
                        <nav className="flex flex-col space-y-4 md:space-y-6 lg:space-y-8">
                            {NAV_LINKS.map((link, i) => (
                                <div
                                    key={link.label}
                                    className={`transition-all duration-[0.8s] cubic-bezier(0.19,1,0.22,1) w-fit ${isOpen
                                        ? "opacity-100 translate-x-0"
                                        : "opacity-0 -translate-x-16"
                                        }`}
                                    style={{ transitionDelay: isOpen ? `${150 + i * 80}ms` : "0ms" }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={onClose}
                                        onMouseEnter={() => setHoveredLink(i)}
                                        className="group flex flex-col md:flex-row md:items-baseline gap-1 md:gap-6 py-2 transition-colors duration-500 relative"
                                    >
                                        {/* Hover Line Indicator */}
                                        <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-0 h-[2px] bg-[#C5A028] transition-all duration-500 group-hover:w-3 opacity-0 group-hover:opacity-100 hidden md:block" />

                                        {/* Index */}
                                        <span className="font-mono text-[9px] md:text-[11px] lg:text-[13px] text-[#C5A028]/70 group-hover:text-[#C5A028] transition-colors duration-300 md:w-8 translate-y-[-5px] md:translate-y-0">
                                            0{i + 1}
                                        </span>

                                        <div className="flex items-center gap-4 md:gap-6">
                                            {/* Label */}
                                            <span className="font-serif text-[12vw] sm:text-[10vw] md:text-[8vh] lg:text-[10vh] text-white/50 group-hover:text-white transition-all duration-500 leading-[0.85] tracking-tight group-hover:translate-x-2 md:group-hover:translate-x-6">
                                                {link.label}
                                            </span>

                                            {/* Arrow */}
                                            <ArrowUpRight
                                                size={28}
                                                strokeWidth={1.5}
                                                className="opacity-0 group-hover:opacity-100 text-[#C5A028] transition-all duration-500 -translate-x-8 group-hover:translate-x-0 hidden md:block"
                                            />
                                        </div>
                                        
                                        {/* Mobile Description (Hidden on Desktop) */}
                                        <span className="md:hidden font-sans text-[10px] uppercase tracking-[0.2em] text-white/30 mt-2 pl-1 group-hover:text-[#C5A028]/80 transition-colors">
                                            {link.description}
                                        </span>
                                    </Link>
                                </div>
                            ))}
                        </nav>
                    </div>

                    {/* RIGHT: Atmospheric Image + Brand Element */}
                    <div className="hidden lg:flex flex-col justify-center items-end w-[45%] pl-12 relative z-10">
                        <div
                            className={`relative w-full max-w-[500px] aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/[0.04] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)] transition-all duration-[1.2s] cubic-bezier(0.19,1,0.22,1) delay-400 ${isOpen ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-95 translate-x-12"
                                }`}
                        >
                            {/* Dynamic Image */}
                            {NAV_LINKS.map((link, index) => (
                                <div
                                    key={`img-${link.label}`}
                                    className={`absolute inset-0 transition-opacity duration-1000 ease-out ${hoveredLink === index ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                                >
                                    <Image
                                        src={link.image}
                                        alt={link.label}
                                        fill
                                        className={`object-cover transition-transform duration-[2s] ease-out ${hoveredLink === index ? "scale-105" : "scale-100"}`}
                                        priority={index === 0}
                                    />
                                    {/* Vignette & Gradient Overlays */}
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none opacity-80" />

                                    {/* Overlay Text */}
                                    <div className="absolute bottom-10 left-10 right-10">
                                        <div className="w-8 h-[1px] bg-[#C5A028]/50 mb-4" />
                                        <span className="font-sans text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.4em] text-[#C5A028] block mb-2 drop-shadow-md">
                                            {link.description}
                                        </span>
                                        <span className="font-serif text-3xl text-white/90 font-light tracking-wide">
                                            {link.label}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── FOOTER: Social & Info ── */}
                <div
                    className={`px-6 md:px-12 lg:px-20 py-6 md:py-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-700 delay-700 relative z-20 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                >
                    {/* Social links */}
                    <div className="flex items-center justify-center md:justify-start gap-8 md:gap-10 w-full md:w-auto">
                        {FOOTER_LINKS.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="flex items-center gap-2 text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-medium text-white/40 hover:text-[#C5A028] transition-colors duration-300 group"
                            >
                                <item.icon size={14} className="group-hover:scale-110 transition-transform" />
                                <span className="hidden sm:inline">{item.label}</span>
                            </a>
                        ))}
                    </div>

                    {/* Brand stamp */}
                    <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-white/20 text-center w-full md:w-auto mt-2 md:mt-0">
                        Café Amazonas © {new Date().getFullYear()}
                    </span>
                </div>
            </div>
        </div>
    );
}
