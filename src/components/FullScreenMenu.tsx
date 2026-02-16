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
                <div className="flex justify-between items-center px-6 md:px-12 py-8">
                    {/* Logo */}
                    <div className={`transition-all duration-700 delay-200 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
                        <Image
                            src="/AmaruyaLogo.webp"
                            alt="Café Amazonas"
                            width={120}
                            height={48}
                            className="h-10 w-auto object-contain opacity-40"
                        />
                    </div>

                    {/* Close */}
                    <button
                        onClick={onClose}
                        className="flex items-center gap-3 pl-5 pr-4 py-2.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-white hover:bg-gold-400 hover:text-black hover:border-gold-400 transition-all duration-300 group"
                    >
                        <span className="text-[0.7rem] uppercase tracking-widest font-bold">
                            Cerrar
                        </span>
                        <X size={18} className="group-hover:rotate-90 transition-transform duration-500" />
                    </button>
                </div>

                {/* ── MAIN: Split Layout ── */}
                <div className="flex-1 flex flex-col lg:flex-row px-6 md:px-12 lg:px-20 overflow-y-auto">

                    {/* LEFT: Navigation Links */}
                    <div className="flex-1 flex flex-col justify-center py-8 lg:py-0">
                        <nav className="space-y-2">
                            {NAV_LINKS.map((link, i) => (
                                <div
                                    key={link.label}
                                    className={`transition-all duration-700 ${isOpen
                                        ? "opacity-100 translate-x-0"
                                        : "opacity-0 -translate-x-12"
                                        }`}
                                    style={{ transitionDelay: isOpen ? `${200 + i * 80}ms` : "0ms" }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={onClose}
                                        onMouseEnter={() => setHoveredLink(i)}
                                        className="group flex items-baseline gap-4 py-2 md:py-3 transition-colors duration-500"
                                    >
                                        {/* Index */}
                                        <span className="font-mono text-[10px] text-white/20 group-hover:text-gold-400 transition-colors duration-300 w-6">
                                            0{i + 1}
                                        </span>

                                        {/* Label */}
                                        <span className="font-serif text-[8vh] lg:text-[10vh] text-white/40 group-hover:text-white transition-all duration-500 leading-none tracking-tight group-hover:translate-x-4">
                                            {link.label}
                                        </span>

                                        {/* Arrow */}
                                        <ArrowUpRight
                                            size={24}
                                            className="ml-4 opacity-0 group-hover:opacity-100 text-gold-400 transition-all duration-300 -translate-x-4 group-hover:translate-x-0"
                                        />
                                    </Link>
                                </div>
                            ))}
                        </nav>
                    </div>

                    {/* RIGHT: Atmospheric Image + Brand Element */}
                    <div className="hidden lg:flex flex-col justify-center items-center w-[40%] pl-12">
                        <div
                            className={`relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden border border-white/[0.06] transition-all duration-1000 delay-500 ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
                                }`}
                        >
                            {/* Dynamic Image */}
                            {NAV_LINKS.map((link, index) => (
                                <div
                                    key={link.label}
                                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${hoveredLink === index ? "opacity-100" : "opacity-0"}`}
                                >
                                    <Image
                                        src={link.image}
                                        alt={link.label}
                                        fill
                                        className="object-cover opacity-60"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                                    <div className="absolute bottom-8 left-8 right-8">
                                        <span className="text-[9px] uppercase tracking-[0.3em] text-gold-400/70 block mb-3">
                                            {link.description}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── FOOTER: Social & Info ── */}
                <div
                    className={`px-6 md:px-12 lg:px-20 py-6 border-t border-white/[0.04] flex flex-wrap items-center justify-between gap-4 transition-all duration-700 delay-700 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                >
                    {/* Social links */}
                    <div className="flex items-center gap-6">
                        {FOOTER_LINKS.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/30 hover:text-gold-400 transition-colors duration-300 group"
                            >
                                <item.icon size={12} className="group-hover:scale-110 transition-transform" />
                                <span className="hidden md:inline">{item.label}</span>
                            </a>
                        ))}
                    </div>

                    {/* Brand stamp */}
                    <span className="text-[9px] uppercase tracking-[0.3em] text-white/15">
                        Café Amazonas © 2025
                    </span>
                </div>
            </div>
        </div>
    );
}
