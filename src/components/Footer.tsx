"use client";

import Link from "next/link";
import { ArrowUpRight, Facebook, Instagram, Twitter } from "lucide-react";
import { useState, useRef } from "react";

export default function Footer() {
    const footerRef = useRef<HTMLElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        if (!footerRef.current) return;
        const rect = footerRef.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <footer 
            ref={footerRef}
            onMouseMove={handleMouseMove}
            className="relative bg-[#030503] text-white border-t border-white/5 pt-20 pb-10 overflow-hidden transform-gpu"
        >
            {/* ═══ KINETIC AURORA BACKGROUND ═══ */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {/* SVG Cinematic Noise Overlay */}
                <div 
                    className="absolute inset-0 opacity-[0.04] mix-blend-screen z-10" 
                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
                />
                
                {/* Slow moving ambient atmospheric orbs */}
                <div 
                    className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] blur-[120px] rounded-[100%] pointer-events-none opacity-30 transform-gpu mix-blend-screen"
                    style={{
                        background: "radial-gradient(circle, #D4AF37 0%, transparent 60%)",
                        animation: "slow-rotate 140s linear infinite",
                    }}
                />
                <div 
                    className="absolute bottom-[-30%] right-[-10%] w-[70%] h-[70%] blur-[140px] rounded-[100%] pointer-events-none opacity-40 transform-gpu mix-blend-screen"
                    style={{
                         background: "radial-gradient(circle, #064E3B 0%, transparent 60%)",
                         animation: "slow-rotate-reverse 180s linear infinite",
                    }}
                />
                
                {/* Immediate Interactive Spot / Flashlight */}
                <div 
                    className="absolute w-[600px] h-[600px] blur-[100px] rounded-full pointer-events-none transform-gpu mix-blend-screen transition-opacity duration-1000"
                    style={{
                        background: "radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)",
                        left: `${mousePosition.x}px`,
                        top: `${mousePosition.y}px`,
                        transform: 'translate(-50%, -50%)',
                        opacity: mousePosition.x !== 0 ? 1 : 0
                    }}
                />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">

                {/* ═══ TOP SECTION: Grid ═══ */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-32">

                    {/* Brand Statement */}
                    <div className="md:col-span-4 flex flex-col justify-between h-full">
                        <div>
                            <span className="block text-gold-400 text-xs uppercase tracking-[0.25em] mb-6">
                                Café de Especialidad
                            </span>
                            <p className="text-2xl md:text-3xl font-serif leading-snug text-white/80">
                                Nacido en la selva. <br />
                                Tostado con alma. <br />
                                <span className="italic text-white/40">Entregado a ti.</span>
                            </p>
                        </div>

                        {/* Newsletter */}
                        <div className="mt-12">
                            <label className="text-[10px] uppercase tracking-widest text-white/40 mb-3 block">
                                Suscríbete al viaje
                            </label>
                            <div className="flex gap-4 border-b border-white/20 pb-2 focus-within:border-gold-400/50 transition-colors">
                                <input
                                    type="email"
                                    placeholder="tu@correo.com"
                                    className="bg-transparent w-full outline-none text-sm placeholder:text-white/20 text-white"
                                />
                                <button className="text-gold-400 hover:text-white transition-colors">
                                    <ArrowUpRight size={18} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="md:col-span-2 md:col-start-7 space-y-6">
                        <h4 className="text-[10px] uppercase tracking-widest text-white/40 mb-6">Explorar</h4>
                        <ul className="space-y-4 font-serif text-lg text-white/70">
                            <li><Link href="/tienda" className="hover:text-gold-400 transition-colors">Tienda</Link></li>
                            <li><Link href="#origins" className="hover:text-gold-400 transition-colors">Origen</Link></li>
                            <li><Link href="#" className="hover:text-gold-400 transition-colors">Ritual</Link></li>
                            <li><Link href="#" className="hover:text-gold-400 transition-colors">Suscripciones</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2 space-y-6">
                        <h4 className="text-[10px] uppercase tracking-widest text-white/40 mb-6">Nosotros</h4>
                        <ul className="space-y-4 font-serif text-lg text-white/70">
                            <li><Link href="#" className="hover:text-gold-400 transition-colors">Manifiesto</Link></li>
                            <li><Link href="#" className="hover:text-gold-400 transition-colors">Impacto</Link></li>
                            <li><Link href="#" className="hover:text-gold-400 transition-colors">Carreras</Link></li>
                            <li><Link href="#" className="hover:text-gold-400 transition-colors">Prensa</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2 space-y-6">
                        <h4 className="text-[10px] uppercase tracking-widest text-white/40 mb-6">Legal</h4>
                        <ul className="space-y-4 font-serif text-lg text-white/70">
                            <li><Link href="#" className="hover:text-gold-400 transition-colors">Términos</Link></li>
                            <li><Link href="#" className="hover:text-gold-400 transition-colors">Privacidad</Link></li>
                            <li><Link href="#" className="hover:text-gold-400 transition-colors">Envíos</Link></li>
                        </ul>
                    </div>
                </div>

                {/* ═══ BOTTOM: Big Typo ═══ */}
                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-end md:items-center">
                    <div className="flex gap-6 mb-8 md:mb-0">
                        <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                            <Instagram size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                            <Twitter size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                            <Facebook size={18} />
                        </a>
                    </div>

                    <span className="text-[10px] uppercase tracking-widest text-white/20 order-first md:order-last block mb-8 md:mb-0">
                        © 2026 Café Amazonas. Todos los derechos reservados.
                    </span>
                </div>

                {/* ═══ GIANT FOOTER BRANDING ═══ */}
                <div className="mt-16 w-full select-none pointer-events-none relative z-10 flex flex-col items-center justify-center pt-8">
                    <span 
                        className="inline-block text-[18vw] leading-none font-serif tracking-tighter bg-clip-text text-transparent opacity-10"
                        style={{
                            backgroundImage: "linear-gradient(180deg, #FFFFFF 0%, #D4AF37 100%)",
                        }}
                    >
                        AMARUYA
                    </span>
                </div>
            </div>
        </footer>
    );
}
