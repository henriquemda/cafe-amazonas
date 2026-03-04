"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

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

    // Check storage on mount
    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedAuth = window.sessionStorage.getItem("amaruya_access");
            if (storedAuth === "granted") {
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
        // Constant Time Comparison / Easter Egg Check
        if (inputValue === "Amazonasperu7") {
            setError(false);
            setIsFadingOut(true);
            if (typeof window !== "undefined") {
                window.sessionStorage.setItem("amaruya_access", "granted");
            }
            setTimeout(() => {
                setIsUnlocked(true);
            }, 1800); // Wait for the whiteout explosion
        } else {
            setError(true);
            setTimeout(() => {
                setInputValue("");
            }, 300); // Clear after shudder animation

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
            <div className="fixed inset-0 z-50 bg-[#030603] flex items-center justify-center">
                <div className="w-[1px] h-12 bg-gradient-to-t from-[var(--color-gold-500)] to-transparent animate-pulse" />
            </div>
        );
    }

    return (
        <div
            className={`fixed inset-0 z-[9999] bg-[#030603] overflow-hidden transition-all duration-[1.5s] cubic-bezier(0.19,1,0.22,1) ${isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
        >
            {/* ── Atmospheric Depth & Film Grain ── */}
            <div className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_1b3320_0%,_transparent_40%)] opacity-30 pointer-events-none transition-opacity duration-1000 ${inputValue ? 'opacity-60' : ''}`} />
            <div className="absolute inset-0 film-grain opacity-40 pointer-events-none mix-blend-overlay" />

            {/* ── Monolithic Watermark ── */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] font-serif text-[18vw] leading-none text-white/[0.015] tracking-[0.2em] uppercase select-none pointer-events-none mix-blend-screen whitespace-nowrap animate-scale-reveal blur-[1px]">
                Amazonas
            </div>

            {/* ── Alignment Axis ── */}
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-[25vh] bg-gradient-to-b from-transparent to-[var(--color-gold-500)]/30 animate-line-grow transition-all duration-1000 ${inputValue ? 'h-[35vh] to-[var(--color-gold-400)]/50' : ''}`} />
            <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-[15vh] bg-gradient-to-t from-transparent to-[var(--color-gold-500)]/10 animate-line-grow transition-all duration-1000 ${inputValue ? 'h-[20vh]' : ''}`} />

            {/* ── Central Stage ── */}
            <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-[1.8s] cubic-bezier(0.19,1,0.22,1) ${isFadingOut ? "scale-110 blur-2xl opacity-0" : "scale-100 blur-0 opacity-100"
                }`}>

                {/* The Geometric Relic */}
                <div className="relative w-20 h-20 mb-12 animate-fade-in-up">
                    <div className={`absolute inset-0 bg-[var(--color-gold-400)]/5 blur-2xl rounded-full transition-all duration-1000 ease-out ${inputValue ? 'bg-[var(--color-gold-400)]/30 scale-150' : ''}`} />

                    {/* Outer Square */}
                    <div className={`absolute inset-2 border-[0.5px] border-white/20 rotate-45 transition-all duration-1000 ease-out ${error ? 'border-red-900/50 -rotate-45' : inputValue ? 'rotate-90 border-[var(--color-gold-500)]/40 scale-110' : ''
                        }`} />

                    {/* Inner Square */}
                    <div className={`absolute inset-5 border-[0.5px] border-[var(--color-gold-500)]/30 transition-all duration-1000 ease-out ${error ? 'border-red-500/50 rotate-45' : inputValue ? 'rotate-45 border-[var(--color-gold-300)]/60 scale-90' : 'rotate-12'
                        }`} />

                    {/* Core Core */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-1.5 h-1.5 rounded-full transition-all duration-700 ease-out ${error ? 'bg-red-500 shadow-[0_0_15px_#ef4444] scale-150' : inputValue ? 'bg-[var(--color-gold-200)] shadow-[0_0_15px_var(--color-gold-300)] scale-150' : 'bg-[var(--color-gold-500)]/50'
                            }`} />
                    </div>
                </div>

                {/* Typography Architecture */}
                <div className="flex flex-col items-center animate-fade-in-up animate-delay-1">
                    <h2 className="font-sans text-[7px] md:text-[9px] text-[var(--color-gold-500)] tracking-[0.5em] md:tracking-[0.8em] uppercase mb-6 opacity-70">
                        Sanctuary Protocol
                    </h2>
                    <h1 className="font-serif text-3xl md:text-5xl text-white/90 tracking-[0.2em] md:tracking-[0.3em] uppercase mix-blend-plus-lighter text-center font-light">
                        La Puerta
                    </h1>
                    <div className="flex items-center gap-6 mt-6">
                        <div className={`w-8 h-[1px] bg-white/20 transition-all duration-500 ${inputValue ? 'w-12 bg-[var(--color-gold-500)]/50' : ''}`} />
                        <span className="font-sans text-[8px] md:text-[10px] text-white/50 tracking-[0.4em] uppercase">Del Origen</span>
                        <div className={`w-8 h-[1px] bg-white/20 transition-all duration-500 ${inputValue ? 'w-12 bg-[var(--color-gold-500)]/50' : ''}`} />
                    </div>
                </div>

                {/* The Void Form */}
                <form
                    onSubmit={handleSubmit}
                    className={`mt-24 w-full max-w-xs relative flex flex-col items-center animate-fade-in-up animate-delay-2 transition-transform duration-300 ${error ? 'translate-x-2' : ''}`}
                >
                    <input
                        ref={inputRef}
                        type="password"
                        value={inputValue}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                            if (error) setError(false);
                        }}
                        className={`peer relative z-20 w-full bg-transparent text-center text-lg md:text-xl tracking-[0.6em] focus:outline-none focus:ring-0 py-3 transition-colors duration-500 font-serif ${error ? 'text-red-400' : 'text-[var(--color-gold-100)]'
                            }`}
                        spellCheck="false"
                        autoCapitalize="none"
                        autoComplete="off"
                    />

                    {/* Structural Infinity Line */}
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/5" />

                    {/* Living Focus Line */}
                    <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]
                        ${inputValue.length > 0 ? 'w-full bg-[var(--color-gold-400)] shadow-[0_0_10px_var(--color-gold-500)]' : 'w-0 bg-transparent peer-focus:w-full peer-focus:bg-[var(--color-gold-500)]/50'}
                        ${error ? '!w-full !bg-red-600 !shadow-[0_0_20px_#991b1b]' : ''}
                    `} />

                    {/* Execution Action */}
                    <button
                        type="submit"
                        className={`absolute -right-12 top-1/2 -translate-y-1/2 text-[var(--color-gold-500)]/50 hover:text-[var(--color-gold-300)] transition-all duration-[0.8s] cubic-bezier(0.19,1,0.22,1) ${inputValue.length > 0 ? 'opacity-100 translate-x-0 cursor-pointer scale-100' : 'opacity-0 -translate-x-8 pointer-events-none scale-75'
                            }`}
                    >
                        <ArrowRight className="w-5 h-5" strokeWidth={1} />
                    </button>

                    {/* Error Feedback */}
                    <div className={`absolute top-full mt-8 overflow-hidden transition-all duration-500 ${error ? 'opacity-100' : 'opacity-0'}`}>
                        <p className={`font-sans text-[9px] uppercase tracking-[0.4em] text-red-500/80 transition-transform duration-500 ${error ? 'translate-y-0' : '-translate-y-full'}`}>
                            Access Revoked
                        </p>
                    </div>
                </form>

            </div>

            {/* ── Transcendent Explosion (Success State) ── */}
            <div className={`absolute inset-0 bg-[var(--color-gold-100)] z-50 transition-opacity duration-[1.5s] ease-in pointer-events-none mix-blend-overlay ${isFadingOut ? 'opacity-100' : 'opacity-0'
                }`} />
        </div>
    );
}
