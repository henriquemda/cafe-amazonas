"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, Fingerprint } from "lucide-react";
import Image from "next/image";

export default function PasswordGate({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState(false);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const inputRef = useRef<HTMLInputElement>(null);

    // Initial check on mount
    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedAuth = window.sessionStorage.getItem("amaruya_access");
            if (storedAuth === "granted") {
                setIsUnlocked(true);
            }
            setIsLoading(false);
        }
    }, []);

    // Environmental event listeners
    useEffect(() => {
        if (isUnlocked || isLoading) return;
        
        // Auto-focus persistence
        const focusInput = () => inputRef.current?.focus();
        focusInput();
        window.addEventListener("click", focusInput);

        // 6D Kinetic tracking
        const handleMouseMove = (e: MouseEvent) => {
            // Calculate relative offset (-1 to 1) and dampen it
            const x = (e.clientX / window.innerWidth - 0.5) * 12; // Max 6deg tilt
            const y = (e.clientY / window.innerHeight - 0.5) * -12;
            setMousePos({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("click", focusInput);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [isUnlocked, isLoading]);

    const handleSubmit = (e?: React.FormEvent) => {
        e?.preventDefault();
        
        // Target: TiendaAmazonas@
        if (inputValue === "TiendaAmazonas@") {
            setError(false);
            setIsFadingOut(true);
            if (typeof window !== "undefined") {
                window.sessionStorage.setItem("amaruya_access", "granted");
            }
            setTimeout(() => {
                setIsUnlocked(true);
            }, 2500); // Extended delay for the cinematic blast
        } else {
            setError(true);
            setTimeout(() => setInputValue(""), 400); // Brief pause before clearing
            setTimeout(() => setError(false), 2000); // Shudder cooldown
        }
    };

    if (isUnlocked) {
        return <>{children}</>;
    }

    if (isLoading) {
        return (
            <div className="fixed inset-0 z-50 bg-[#020302] flex items-center justify-center">
                <div className="w-[1px] h-24 bg-gradient-to-t from-[var(--color-gold-500)] to-transparent animate-pulse opacity-50" />
            </div>
        );
    }

    // Interaction progression metric (max 15 chars for effect scaling)
    const progress = Math.min(inputValue.length / 15, 1);

    return (
        <div className={`fixed inset-0 z-[9999] bg-[#020302] overflow-hidden transition-all duration-[2.5s] cubic-bezier(0.19,1,0.22,1) ${isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
            
            {/* ── Atmospheric Void & Caustics ── */}
            <div className={`absolute inset-0 film-grain opacity-40 mix-blend-overlay pointer-events-none transition-opacity duration-1000 ${progress > 0 ? "opacity-60" : ""}`} />
            
            <div 
                className="absolute inset-0 pointer-events-none mix-blend-screen transition-all duration-1000 ease-out"
                style={{
                    background: `radial-gradient(circle at 50% ${50 + mousePos.y}%, rgba(212, 175, 55, ${0.02 + (progress * 0.12)}) 0%, transparent ${40 + (progress * 40)}%)`
                }}
            />

            {/* ── Monolithic Horizon (Background Text) ── */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[150vw] text-center pointer-events-none mix-blend-overlay z-0 select-none flex items-center justify-center">
                <span 
                    className="font-serif text-[18vw] leading-none text-white transition-all duration-[3s] cubic-bezier(0.19,1,0.22,1) whitespace-nowrap blur-[2px]"
                    style={{
                        letterSpacing: `${0.1 + (progress * 0.3)}em`,
                        opacity: progress === 0 ? 0.03 : 0.08,
                        transform: `scale(${1 + (progress * 0.05)}) translateX(${mousePos.x * -0.5}px)`
                    }}
                >
                    AMAZONAS
                </span>
            </div>

            {/* ── Stage Kinesis (The 3D Rotational Container) ── */}
            <div 
                className="absolute inset-0 flex flex-col items-center justify-center preserve-3d transition-all duration-700 ease-out"
                style={{
                    transform: `perspective(1200px) rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg) scale(${isFadingOut ? 1.05 : 1})`,
                    filter: isFadingOut ? "blur(20px) brightness(3)" : "blur(0px) brightness(1)"
                }}
            >
                {/* ── The Cryptographic Relic ── */}
                <div className="relative w-28 h-28 mb-16 z-10 flex items-center justify-center animate-fade-in-up">
                    {/* Ring 1 - Atmospheric Halo */}
                    <div 
                        className={`absolute inset-0 bg-[var(--color-gold-400)] rounded-full blur-[40px] transition-all duration-1000 ease-out`}
                        style={{ opacity: 0.1 + (progress * 0.15), transform: `scale(${1 + progress})` }}
                    />

                    {/* Ring 2 - Outer Mechanical Orbit */}
                    <div 
                        className={`absolute inset-0 border border-white/10 rounded-full transition-transform duration-[3s] ease-out border-dashed ${error ? 'border-red-500/40' : ''}`}
                        style={{ transform: `rotate(${progress * 240}deg) scale(${1 + (progress * 0.15)})` }}
                    />
                    
                    {/* Ring 3 - Inner Angular Construct */}
                    <div 
                        className={`absolute inset-5 border-[0.5px] border-[var(--color-gold-500)]/30 rounded-sm transition-transform duration-[1.5s] ease-out ${error ? 'border-red-500/80 rotate-45 scale-125' : ''}`}
                        style={{ transform: `rotate(${-progress * 135}deg) scale(${1 - (progress * 0.2)})` }}
                    />
                    
                    {/* Ring 4 - The Core */}
                    <div 
                        className={`absolute w-1.5 h-1.5 rounded-full transition-all duration-700 ${error ? 'bg-red-500 shadow-[0_0_20px_#ef4444] scale-150' : 'bg-[var(--color-gold-300)] shadow-[0_0_15px_var(--color-gold-400)]'}`}
                        style={{ transform: `scale(${1 + (progress * 2.5)})` }}
                    />
                </div>

                {/* ── Typography Architecture ── */}
                <div className="flex flex-col items-center z-10 pointer-events-none animate-fade-in-up animate-delay-2 transition-all duration-1000"
                    style={{ 
                        opacity: progress > 0 ? 0.4 : 1,
                        transform: `translateY(${progress * -10}px)`
                    }}
                >
                    <Image
                        src="/cafeamazonas-logo.webp"
                        alt="Café Amazonas"
                        width={280}
                        height={112}
                        className="h-16 md:h-24 lg:h-28 w-auto object-contain mb-8 md:mb-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                        priority
                    />
                    <h2 className="font-sans text-[8px] md:text-[10px] lg:text-[12px] text-[var(--color-gold-500)] tracking-[0.8em] md:tracking-[1em] uppercase mb-4 md:mb-6 opacity-80">
                        Protocolo de Acceso
                    </h2>
                    <h1 className="font-serif text-[2.5rem] md:text-[4rem] lg:text-[5rem] text-white/95 tracking-[0.3em] md:tracking-[0.4em] uppercase mix-blend-plus-lighter text-center font-light leading-none">
                        La Puerta
                    </h1>
                </div>

                {/* ── Abstract Interaction Form ── */}
                <form 
                    onSubmit={handleSubmit}
                    className={`mt-24 md:mt-32 w-full max-w-[320px] md:max-w-[400px] relative flex flex-col items-center z-20 transition-transform duration-[0.4s] cubic-bezier(0.36,0,0.66,-0.56) ${error ? 'translate-x-4 md:translate-x-6' : ''}`}
                >
                    {/* Dynamic Character Dots */}
                    <div className="absolute inset-0 flex items-center justify-center gap-[12px] md:gap-[16px] pointer-events-none w-full px-4 flex-wrap max-h-16 overflow-hidden">
                        {inputValue.length === 0 ? (
                            <span className="font-sans text-[10px] md:text-[12px] tracking-[0.6em] md:tracking-[0.8em] text-white/30 uppercase transition-opacity duration-500 delay-300">
                                Introducir Clave
                            </span>
                        ) : (
                            Array.from({ length: inputValue.length }).map((_, i) => (
                                <div 
                                    key={i}
                                    className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[var(--color-gold-400)] shadow-[0_0_12px_var(--color-gold-500)] animate-scale-reveal`}
                                    style={{ animationDelay: '0s', animationDuration: '0.3s' }}
                                />
                            ))
                        )}
                    </div>

                    {/* The Ghost Input */}
                    <input
                        ref={inputRef}
                        type="text"
                        value={inputValue}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                            if (error) setError(false);
                        }}
                        className="w-full text-center text-transparent bg-transparent outline-none caret-transparent py-5 md:py-6 h-14 md:h-16"
                        spellCheck="false"
                        autoCapitalize="none"
                        autoComplete="off"
                    />

                    {/* Infinity Track / Progression Line */}
                    <div className="absolute bottom-0 left-0 w-full h-[1px] md:h-[2px] bg-white/10 overflow-hidden rounded-full">
                        <div 
                            className={`h-full bg-[var(--color-gold-500)] transition-all duration-[0.8s] cubic-bezier(0.19,1,0.22,1) ${error ? '!bg-red-500 shadow-[0_0_15px_#ef4444]' : 'shadow-[0_0_15px_var(--color-gold-500)]'}`}
                            style={{ 
                                width: `${progress * 100}%`,
                                marginLeft: `${50 - (progress * 50)}%` 
                            }}
                        />
                    </div>

                    {/* Submit Catalyst */}
                    <button
                        type="submit"
                        className={`absolute -right-12 md:-right-16 top-1/2 -translate-y-1/2 transition-all duration-[0.8s] cubic-bezier(0.19,1,0.22,1) ${inputValue.length > 0 ? 'opacity-100 cursor-pointer translate-x-0 scale-100' : 'opacity-0 pointer-events-none -translate-x-6 scale-75'}`}
                    >
                        {error ? (
                            <Fingerprint className="w-6 h-6 md:w-8 md:h-8 text-red-500/80 animate-pulse" strokeWidth={1.5} />
                        ) : (
                            <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-gold-500)]/80 hover:text-[var(--color-gold-300)] transition-colors" strokeWidth={1} />
                        )}
                    </button>

                    {/* State Feedback */}
                    <div className={`absolute top-full mt-8 md:mt-10 overflow-hidden transition-all duration-500 ${error ? 'opacity-100' : 'opacity-0'}`}>
                        <p className={`font-sans text-[9px] md:text-[11px] uppercase tracking-[0.6em] md:tracking-[0.8em] text-red-500/90 transition-transform duration-500 ${error ? 'translate-y-0' : '-translate-y-full'}`}>
                            Acceso Denegado
                        </p>
                    </div>
                </form>
            </div>

            {/* ── Whiteout Transcendence ── */}
            <div className={`absolute inset-0 bg-[#D4AF37] mix-blend-color-dodge z-50 transition-all duration-[2s] ease-in pointer-events-none ${isFadingOut ? 'opacity-100 scale-110' : 'opacity-0 scale-100'}`} />
            <div className={`absolute inset-0 bg-white z-[51] transition-opacity duration-[1.5s] delay-300 ease-in pointer-events-none ${isFadingOut ? 'opacity-100' : 'opacity-0'}`} />
            
        </div>
    );
}

