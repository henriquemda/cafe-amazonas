"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, Lock, Sparkles } from "lucide-react";

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
    const inputRef = useRef<HTMLInputElement>(null);
    const [particles, setParticles] = useState<{ left: string; top: string; size: string; duration: string; delay: string; }[]>([]);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setParticles(Array.from({ length: 20 }).map(() => ({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            size: Math.random() > 0.5 ? "2px" : "3px",
            duration: `${3 + Math.random() * 5}s`,
            delay: `-${Math.random() * 5}s`,
        })));
    }, []);

    // Check storage on mount
    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedAuth = window.sessionStorage.getItem("amaruya_access");
            if (storedAuth === "granted") {
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setIsUnlocked(true);
            }
            setIsLoading(false);
        }
    }, []);

    // Auto-focus input
    useEffect(() => {
        if (!isUnlocked && !isLoading) {
            inputRef.current?.focus();
        }
    }, [isUnlocked, isLoading]);

    const handleSubmit = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (inputValue === "Amazonasperu7") {
            setError(false);
            setIsFadingOut(true);
            if (typeof window !== "undefined") {
                window.sessionStorage.setItem("amaruya_access", "granted");
            }
            setTimeout(() => {
                setIsUnlocked(true);
            }, 1500); // 1.5s for the exit animation
        } else {
            setError(true);
            setInputValue("");
            // Reset error after animation
            setTimeout(() => setError(false), 2000);
        }
    };

    if (isUnlocked) {
        return <>{children}</>;
    }

    // Initial loader state
    if (isLoading) {
        return (
            <div className="fixed inset-0 z-50 bg-[#0a0f0a] flex items-center justify-center">
                <div className="w-2 h-2 bg-[var(--color-gold-400)] rounded-full animate-ping" />
            </div>
        );
    }

    return (
        <div
            className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0f0a] transition-all duration-1000 overflow-hidden ${isFadingOut ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
                }`}
        >
            {/* ── Background Effects ── */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a2f1a_0%,_#000000_100%)] opacity-80" />

            {/* Film Grain from globals */}
            <div className="absolute inset-0 film-grain opacity-30 pointer-events-none" />

            {/* Floating Particles - Simulated via CSS and simple inline styles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {particles.map((p, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-[var(--color-gold-400)] opacity-20 animate-pulse"
                        style={{
                            left: p.left,
                            top: p.top,
                            width: p.size,
                            height: p.size,
                            animationDuration: p.duration,
                            animationDelay: p.delay,
                        }}
                    />
                ))}
            </div>

            {/* ── Main Content Container ── */}
            <div className={`relative z-10 w-full max-w-md px-8 flex flex-col items-center transition-all duration-700 ${isFadingOut ? "blur-md scale-90" : "blur-0 scale-100"}`}>

                {/* Mystic Icon */}
                <div className="mb-12 relative group cursor-default">
                    <div className={`absolute inset-0 bg-[var(--color-gold-400)] rounded-full blur-2xl opacity-10 transition-opacity duration-500 group-hover:opacity-30 ${error ? '!bg-red-600 !opacity-40' : ''}`} />
                    <div className={`relative border border-[var(--color-gold-500)]/20 rounded-full p-6 bg-black/40 backdrop-blur-sm shadow-2xl transition-all duration-300 ${error ? 'border-red-500/50 shadow-red-900/20' : ''}`}>
                        <Sparkles
                            className={`w-8 h-8 ${error ? 'text-red-400' : 'text-[var(--color-gold-300)]'} transition-colors duration-300`}
                            strokeWidth={1}
                        />
                    </div>
                </div>

                {/* Title */}
                <h1 className="font-serif text-4xl md:text-5xl text-[var(--color-gold-300)] tracking-[0.2em] mb-4 text-center uppercase animate-fade-in-up drop-shadow-lg">
                    Café Amazonas
                </h1>
                <p className="font-sans text-[10px] md:text-xs text-white/40 tracking-[0.4em] mb-16 uppercase animate-fade-in-up animate-delay-1">
                    La Puerta del Origen
                </p>

                {/* Input Form */}
                <form onSubmit={handleSubmit} className="w-full relative group animate-fade-in-up animate-delay-2 max-w-xs mx-auto">
                    {/* Glow Effect on Hover/Focus */}
                    <div className={`absolute -inset-0.5 rounded-lg opacity-30 blur transition-all duration-500 group-hover:opacity-50 ${error ? 'bg-red-900 opacity-60' : 'bg-[var(--color-gold-500)]'}`} />

                    <div className={`relative flex items-center bg-[#050a05]/90 border border-white/10 rounded-lg overflow-hidden backdrop-blur-md transition-colors duration-300 ${error ? 'border-red-500/30' : 'focus-within:border-[var(--color-gold-500)]/40'}`}>
                        <div className="pl-4 text-white/20">
                            <Lock className="w-4 h-4" />
                        </div>

                        <input
                            ref={inputRef}
                            type="password"
                            value={inputValue}
                            onChange={(e) => {
                                setInputValue(e.target.value);
                                if (error) setError(false);
                            }}
                            placeholder="Contraseña..."
                            className="w-full bg-transparent border-none text-[var(--color-gold-100)] placeholder:text-white/10 px-4 py-4 focus:ring-0 focus:outline-none font-sans tracking-[0.2em] text-sm text-center"
                            autoComplete="off"
                            autoCapitalize="none"
                        />

                        <button
                            type="submit"
                            className={`pr-4 pl-2 text-white/20 hover:text-[var(--color-gold-400)] transition-all duration-300 ${!inputValue ? 'opacity-0 pointer-events-none width-0' : 'opacity-100'}`}
                        >
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Error Message */}
                    <div className={`absolute top-full left-0 w-full text-center mt-6 transition-all duration-500 pointer-events-none transform ${error ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                        <p className="text-red-400/90 text-[10px] tracking-[0.3em] uppercase font-sans font-bold drop-shadow-md">
                            Acceso Denegado
                        </p>
                    </div>
                </form>

                {/* Footer Hint */}
                <div className="mt-32 opacity-10 text-[9px] text-center font-sans tracking-[0.3em] animate-fade-in-up animate-delay-3">
                    SECURE TERMINAL • V1.0
                </div>

            </div>
        </div>
    );
}
