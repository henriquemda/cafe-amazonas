"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowDown, MapPin, Play, Leaf } from "lucide-react";

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!heroRef.current) return;
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        // Calculate normalized mouse position (-1 to 1)
        const x = (clientX / innerWidth) * 2 - 1;
        const y = (clientY / innerHeight) * 2 - 1;

        setMousePos({ x, y });
    };

    return (
        <section
            ref={heroRef}
            onMouseMove={handleMouseMove}
            className="relative w-full h-[110vh] overflow-hidden bg-black text-white perspective-1000"
        >
            {/* ═══ LAYER 0: Cinema Video ═══ */}
            <div
                className="absolute inset-0 w-full h-full transition-transform duration-100 ease-out will-change-transform"
                style={{
                    transform: `scale(1.1) translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)`
                }}
            >
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                    src="/coffe-hero.mp4"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90" />
            </div>

            {/* ═══ LAYER 1: The Brand Identity (Parallax Text) ═══ */}
            <div className="absolute inset-0 flex flex-col justify-center items-center z-10 pointer-events-none">
                <div className="overflow-hidden">
                    <span className="block text-gold-400 text-xs md:text-sm uppercase tracking-[0.5em] mb-4 animate-fade-in-up">
                        Est. 2024 &bull; Perú
                    </span>
                </div>

                <h1
                    ref={textRef}
                    className="font-serif text-[18vw] md:text-[15vw] leading-[0.8] text-white mix-blend-overlay opacity-90 tracking-tighter transition-transform duration-100 ease-out will-change-transform"
                    style={{
                        transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`
                    }}
                >
                    AMARUYA
                </h1>

                <div className="overflow-hidden mt-6">
                    <p className="max-w-md text-center text-gray-300 text-sm md:text-base leading-relaxed tracking-wide animate-fade-in-up animate-delay-3 px-6">
                        Donde la selva respira y el café nace. <br />
                        Una experiencia sensorial de origen único.
                    </p>
                </div>
            </div>

            {/* ═══ LAYER 2: Floating Artifacts (Interactive) ═══ */}
            {/* Coordinate Badge */}
            <div className="absolute top-32 right-8 hidden md:block z-20 animate-fade-in-left animate-delay-5">
                <div className="flex flex-col items-end text-[10px] uppercase tracking-widest text-white/50 border-r border-white/20 pr-4 gap-1">
                    <span>Mendoza, Amazonas</span>
                    <span>1,600 M.S.N.M</span>
                    <span className="text-gold-400">Cosecha '24</span>
                </div>
            </div>

            {/* The "Stamp" */}
            <div className="absolute top-32 left-8 hidden md:block z-20 animate-fade-in-right animate-delay-5">
                <div className="w-24 h-24 border border-white/10 rounded-full flex items-center justify-center animate-spin-slow">
                    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                        <defs>
                            <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                        </defs>
                        <text fontSize="11" fill="currentColor" className="text-white/60 uppercase tracking-[0.2em]">
                            <textPath href="#circlePath">
                                Origen Único • Café de Especialidad •
                            </textPath>
                        </text>
                    </svg>
                    <Leaf size={20} className="absolute text-gold-400" />
                </div>
            </div>

            {/* ═══ LAYER 3: Bottom Controls ═══ */}
            <div className="absolute bottom-12 w-full px-8 md:px-16 flex justify-between items-end z-30">
                {/* Scroll Indicator */}
                <div className="flex flex-col gap-2 items-center group cursor-pointer">
                    <span className="text-[9px] uppercase tracking-widest text-white/60 group-hover:text-gold-400 transition-colors">
                        Explorar
                    </span>
                    <div className="w-px h-12 bg-white/20 overflow-hidden">
                        <div className="w-full h-full bg-gold-400 animate-slide-down" />
                    </div>
                </div>

                {/* CTA Button */}
                <button className="relative px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white uppercase tracking-widest text-xs hover:bg-gold-400 hover:text-black hover:border-gold-400 transition-all duration-500 overflow-hidden group">
                    <span className="relative z-10 flex items-center gap-3">
                        Comprar Colección
                        <ArrowDown size={14} className="-rotate-90 group-hover:rotate-0 transition-transform duration-500" />
                    </span>
                    <span className="absolute inset-0 bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
            </div>

            {/* ═══ OVERLAY: Grain & Vignette ═══ */}
            <div className="absolute inset-0 pointer-events-none z-[1]">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
            </div>
        </section>
    );
}

/* Add custom spin animation locally since it's specific */
/*
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}
@keyframes slide-down {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
}
.animate-slide-down {
    animation: slide-down 2s cubic-bezier(0.8, 0, 0.2, 1) infinite;
}
*/
