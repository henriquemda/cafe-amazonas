"use client";

import Image from "next/image";
import {
    ArrowUpRight,
    ChevronDown,
    MessageCircle,
    MapPin,
    Mountain,
    Leaf,
} from "lucide-react";

/* ────────────────────────────────────────
   ORIGIN DATA — the details that make
   a premium brand feel *real*
   ──────────────────────────────────────── */
const ORIGIN_DATA = [
    { label: "Altitud", value: "1,200m", icon: Mountain },
    { label: "Variedades", value: "Typica · Caturra", icon: Leaf },
    { label: "Cupping", value: "87+", icon: null },
    { label: "Cosecha", value: "'24", icon: null },
    { label: "Origen", value: "Río Negro", icon: MapPin },
];

/* ────────────────────────────────────────
   AMBIENT PARTICLES — CSS-driven,
   GPU-accelerated floating gold dust
   ──────────────────────────────────────── */
const PARTICLES = [
    { top: "20%", left: "15%", dx: "80px", dy: "-140px", dur: "9s", delay: "0s" },
    { top: "60%", left: "70%", dx: "-60px", dy: "-100px", dur: "11s", delay: "2s" },
    { top: "45%", left: "40%", dx: "50px", dy: "-180px", dur: "13s", delay: "4s" },
    { top: "75%", left: "85%", dx: "-90px", dy: "-120px", dur: "10s", delay: "1s" },
    { top: "30%", left: "55%", dx: "70px", dy: "-160px", dur: "12s", delay: "3s" },
];

export default function Hero() {
    return (
        <section className="relative w-full h-screen min-h-[700px] overflow-hidden bg-black text-white film-grain">
            {/* ═══ LAYER 0: Background Video ═══ */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0 scale-105"
                src="/coffe-hero.mp4"
            />

            {/* ═══ LAYER 1: Radial Vignette ═══ */}
            <div
                className="absolute inset-0 z-[1] pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 70% 60% at 55% 45%, transparent 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.85) 100%)",
                }}
            />

            {/* ═══ LAYER 2: Directional Gradients ═══ */}
            <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-r from-black/60 via-transparent to-transparent" />

            {/* ═══ LAYER 3: Ambient Particles ═══ */}
            {PARTICLES.map((p, i) => (
                <div
                    key={i}
                    className="ambient-particle"
                    style={{
                        top: p.top,
                        left: p.left,
                        "--drift-x": p.dx,
                        "--drift-y": p.dy,
                        "--duration": p.dur,
                        "--particle-delay": p.delay,
                    } as React.CSSProperties}
                />
            ))}

            {/* ═══ LAYER 4: Main Content ═══ */}
            <div className="relative z-10 w-full h-full flex flex-col px-6 md:px-12 lg:px-16">
                {/* ── Top Spacer (Navbar room) ── */}
                <div className="h-28 md:h-32 shrink-0" />

                {/* ── Core Grid ── */}
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                    {/* ──────────────────────────────────
                       LEFT COLUMN
                       Product showcase + commerce context
                       ────────────────────────────────── */}
                    <div className="lg:col-span-5 flex flex-col justify-end pb-8 lg:pb-28">
                        {/* Comercio Justo Badge */}
                        <div className="mb-6 hidden lg:block animate-fade-in-left animate-delay-4">
                            <div className="relative bg-black/20 backdrop-blur-xl p-5 border-l-2 border-gold-400 inline-block">
                                <p className="text-white font-serif text-4xl font-bold leading-none">
                                    100%
                                </p>
                                <p className="text-gray-400 text-[10px] uppercase tracking-[0.3em] mt-1">
                                    Comercio Justo
                                </p>
                                {/* Decorative dot */}
                                <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 border border-gold-400 rotate-45" />
                            </div>
                        </div>

                        {/* ── Product Card ── */}
                        <div className="animate-scale-reveal animate-delay-5">
                            <div className="relative group w-full max-w-xs md:max-w-sm">
                                {/* Glow behind card */}
                                <div className="absolute -inset-3 bg-gold-400/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <div className="relative bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] p-6 rounded-2xl hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-700">
                                    {/* Card Header */}
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <span className="text-gold-400 text-[9px] uppercase tracking-[0.25em] font-semibold block mb-1">
                                                Edición Limitada
                                            </span>
                                            <h3 className="font-serif text-xl leading-tight">
                                                Amaruya Gold
                                            </h3>
                                            <p className="text-[11px] text-gray-500 mt-1">
                                                Tostado Oscuro &bull; 340g &bull; Grano Entero
                                            </p>
                                        </div>
                                        <div className="w-14 h-14 rounded-full overflow-hidden border border-white/10 shrink-0 ml-4">
                                            <Image
                                                src="https://picsum.photos/seed/coffeebean/200/200"
                                                alt="Textura de Café"
                                                width={200}
                                                height={200}
                                                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                                            />
                                        </div>
                                    </div>

                                    {/* Separator */}
                                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-4" />

                                    {/* Tasting Notes */}
                                    <div className="flex items-center gap-2 mb-4">
                                        {["Chocolate Negro", "Cereza", "Caramelo"].map(
                                            (note) => (
                                                <span
                                                    key={note}
                                                    className="text-[9px] uppercase tracking-wider text-gray-500 px-2.5 py-1 border border-white/[0.06] rounded-full"
                                                >
                                                    {note}
                                                </span>
                                            )
                                        )}
                                    </div>

                                    {/* Price + CTA */}
                                    <div className="flex items-end justify-between">
                                        <div>
                                            <span className="text-[10px] text-gray-600 block">
                                                Desde
                                            </span>
                                            <span className="text-2xl font-serif font-bold text-white">
                                                $24
                                                <span className="text-sm text-gray-500 font-sans">
                                                    .00
                                                </span>
                                            </span>
                                        </div>
                                        <button className="w-11 h-11 rounded-full bg-gold-400 text-black flex items-center justify-center hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-gold-400/20">
                                            <ArrowUpRight size={18} strokeWidth={2.5} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ──────────────────────────────────
                       RIGHT COLUMN
                       Headline, narrative, CTA
                       ────────────────────────────────── */}
                    <div className="lg:col-span-7 flex flex-col justify-center pb-8 lg:pb-20 lg:pl-8 lg:pr-24 xl:pr-40 relative z-20">
                        {/* Decorative line + label */}
                        <div className="flex items-center gap-4 mb-6 animate-fade-in-up animate-delay-1">
                            <div className="w-12 h-px bg-gold-400 animate-line-grow animate-delay-1" />
                            <span className="text-gold-400 uppercase tracking-[0.25em] text-[10px] font-bold">
                                Serie Origen Único
                            </span>
                        </div>

                        {/* Headline */}
                        <div className="animate-fade-in-up animate-delay-2">
                            <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6rem] leading-[1.05] mb-2 tracking-tight">
                                Despierta el{" "}
                                <br className="hidden md:block" />
                                <span className="italic text-gray-400/80">
                                    Espíritu
                                </span>{" "}
                                <br className="hidden lg:block" />
                                de la Amazonía
                                <span className="text-gold-400">.</span>
                            </h1>
                        </div>

                        {/* Sub-headline accent line */}
                        <div className="w-20 h-px bg-gradient-to-r from-gold-400 to-transparent mb-8 animate-line-grow animate-delay-3" />

                        {/* Description */}
                        <div className="animate-fade-in-up animate-delay-3">
                            <p className="max-w-md text-sm md:text-[15px] text-gray-400 leading-[1.8] mb-8 border-l border-gold-400/40 pl-5">
                                Cosechado de manera sostenible en los suelos ricos de la
                                cuenca del Río Negro. Un café tan profundo, misterioso y
                                poderoso como el río mismo.
                            </p>
                        </div>

                        {/* CTA Group */}
                        <div className="flex items-center gap-5 animate-fade-in-up animate-delay-4">
                            <button className="group relative bg-gold-400 text-black px-9 py-3.5 overflow-hidden font-semibold uppercase tracking-wider text-xs hover:shadow-lg hover:shadow-gold-400/20 transition-all duration-500">
                                {/* Shimmer */}
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                <span className="relative">Descubrir Más</span>
                            </button>
                            <button className="text-[11px] text-gray-500 uppercase tracking-widest hover:text-gold-400 transition-colors duration-300 flex items-center gap-2">
                                <span className="w-2 h-2 border border-gray-600 rounded-full group-hover:border-gold-400" />
                                Nuestra Historia
                            </button>
                        </div>
                    </div>
                </div>

                {/* ═══ ORIGIN DATA BAR ═══
                    The museum-label strip that proves authenticity */}
                <div className="pb-8 lg:pb-10 animate-fade-in-up animate-delay-6">
                    <div className="relative">
                        {/* Top line */}
                        <div className="w-full h-px bg-white/[0.06] mb-4 animate-line-grow animate-delay-6" />

                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 md:gap-x-10">
                            {ORIGIN_DATA.map((item, i) => (
                                <div
                                    key={item.label}
                                    className="flex items-center gap-2"
                                >
                                    {item.icon && (
                                        <item.icon
                                            size={12}
                                            className="text-gold-400/60"
                                        />
                                    )}
                                    <span className="text-[10px] text-gray-600 uppercase tracking-widest">
                                        {item.label}
                                    </span>
                                    <span className="text-[11px] text-gray-300 font-medium">
                                        {item.value}
                                    </span>
                                    {i < ORIGIN_DATA.length - 1 && (
                                        <span className="text-white/[0.08] ml-4 hidden md:inline">
                                            │
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ═══ DECORATIVE: Corner Coordinates ═══ */}
            <div className="absolute top-32 right-6 md:right-12 lg:right-16 z-10 hidden lg:block animate-fade-in-right animate-delay-5">
                <div className="text-[9px] text-gray-600 tracking-wider text-right font-mono space-y-0.5">
                    <p>3.1400° S</p>
                    <p>60.0217° W</p>
                    <p className="text-gold-400/40 mt-2">Amazonas</p>
                </div>
            </div>

            {/* ═══ SCROLL INDICATOR ═══ */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-fade-in-up animate-delay-7">
                <span className="text-[9px] text-gray-600 uppercase tracking-[0.3em]">
                    Scroll
                </span>
                <ChevronDown
                    size={16}
                    className="text-gray-500 animate-scroll-bounce"
                />
            </div>

            {/* ═══ CHAT BUBBLE ═══ */}
            <div className="absolute bottom-8 right-6 md:right-12 lg:right-16 z-20 animate-scale-reveal animate-delay-7">
                <button className="group w-14 h-14 bg-gold-400 text-black rounded-full flex items-center justify-center shadow-lg shadow-gold-400/20 hover:scale-110 hover:shadow-gold-400/40 transition-all duration-300">
                    <MessageCircle
                        size={22}
                        className="group-hover:rotate-12 transition-transform duration-300"
                    />
                </button>
            </div>

            {/* ═══ BOTTOM GRADIENT (seamless transition to next section) ═══ */}
            <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black via-black/50 to-transparent z-[3] pointer-events-none" />
        </section>
    );
}
