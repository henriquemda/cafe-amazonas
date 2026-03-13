"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Leaf, Users, Shield, Droplets, Mountain } from "lucide-react";
import Link from "next/link";

/* ────────────────────────────────────────────
   IMPACTO PAGE (Cinematic Documentary Style)
   High-conversion sustainability storytelling
   ──────────────────────────────────────────── */

export default function ImpactoPage() {
    const [scrolled, setScrolled] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!heroRef.current) return;
            const scroll = window.scrollY;
            setScrolled(scroll > 100);
            
            // Simple parallax effect
            if (scroll < window.innerHeight) {
                heroRef.current.style.transform = `translateY(${scroll * 0.4}px)`;
                heroRef.current.style.opacity = `${1 - scroll / window.innerHeight}`;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
        <Navbar />
        <main className="min-h-screen bg-[#030603] text-white selection:bg-gold-500/30 selection:text-gold-200 overflow-hidden">
            
            {/* ═══════════════════════════════════════
                SECTION 1: HERO (Cinematic Parallax)
                ═══════════════════════════════════════ */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="https://picsum.photos/seed/amazon_misty/1920/1080"
                        alt="Neblina en Rodríguez de Mendoza"
                        fill
                        className="object-cover opacity-60 scale-105 transform origin-center"
                        style={{
                            animation: "subtle-zoom 30s ease-out forwards"
                        }}
                        priority
                    />
                    {/* Deep gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#030603]/80 to-[#030603]" />
                </div>

                {/* Film grain and atmospheric noise */}
                <div className="absolute inset-0 film-grain opacity-20 pointer-events-none" />

                <div 
                    ref={heroRef}
                    className="relative z-10 flex flex-col items-center text-center px-6"
                >
                    <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] text-gold-400 mb-6 font-bold">
                        Nuestro Compromiso
                    </span>
                    <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tight text-white mb-8">
                        Nuestra <br/>
                        <span className="italic text-white/40">Huella</span>
                        <span className="text-gold-400">.</span>
                    </h1>
                    <p className="max-w-xl text-sm md:text-base text-white/50 leading-relaxed font-light">
                        No solo tostamos café. Preservamos un ecosistema, empoderamos mujeres productoras y protegemos la biodiversidad de la ceja de selva peruana. 
                    </p>
                </div>

                {/* Scroll Indicator */}
                <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center transition-opacity duration-1000 ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
                    <span className="text-[9px] uppercase tracking-[0.3em] text-white/30 mb-4">Descubre el Origen</span>
                    <div className="w-px h-16 bg-gradient-to-b from-gold-400 to-transparent animate-pulse" />
                </div>
            </section>

            {/* ═══════════════════════════════════════
                SECTION 2: BIG DATA (Metrics)
                ═══════════════════════════════════════ */}
            <section className="relative z-20 py-32 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    
                    <MetricCard 
                        icon={<Mountain size={24} />}
                        number="1,650"
                        suffix="m"
                        label="Altitud Promedio"
                        desc="Cultivo de estricta altura en Rodríguez de Mendoza."
                        color="#D4AF37"
                    />
                    <MetricCard 
                        icon={<Users size={24} />}
                        number="100"
                        suffix="%"
                        label="Liderazgo Femenino"
                        desc="Finca Timbuyacu dirigida por mujeres y familias locales."
                        color="#6EE7B7"
                    />
                    <MetricCard 
                        icon={<Leaf size={24} />}
                        number="3"
                        suffix="+"
                        label="Especies Protegidas"
                        desc="Hogar del Oso de Anteojos, el Gallito de las Rocas y Orquídeas."
                        color="#60A5FA"
                    />
                    <MetricCard 
                        icon={<Shield size={24} />}
                        number="100"
                        suffix="%"
                        label="Bajo Sombra"
                        desc="Cafetales integrados armónicamente al bosque nativo."
                        color="#F87171"
                    />

                </div>
            </section>

            {/* ═══════════════════════════════════════
                SECTION 3: BUENAMOZA (Las Productoras)
                ═══════════════════════════════════════ */}
            <section className="relative py-32">
                <div className="absolute inset-0 bg-white/[0.02]" />
                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        
                        {/* Image Plate */}
                        <div className="w-full lg:w-1/2 relative">
                            <div className="aspect-[4/5] relative rounded-t-full overflow-hidden border border-white/10">
                                <Image
                                    src="https://picsum.photos/seed/woman_farmer/800/1000"
                                    alt="María Dorila Vargas Grandez - Productora"
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-[2s]"
                                />
                                <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]" />
                        </div>

                        {/* Content */}
                        <div className="w-full lg:w-1/2">
                            <span className="font-mono text-xs text-emerald-400 mb-6 block tracking-widest">
                                PROGRAMA BUENAMOZA
                            </span>
                            <h2 className="font-serif text-5xl md:text-6xl text-white mb-8">
                                El Alma <br/> de la Finca.
                            </h2>
                            <p className="text-white/60 leading-relaxed mb-8 text-lg font-light">
                                Detrás de cada grano de Café Buenamoza está el trabajo tenaz de <strong className="text-white font-serif italic font-normal">María Dorila Vargas Grandez</strong> y las mujeres cafetaleras de Amazonas.
                            </p>
                            <p className="text-white/40 leading-relaxed max-w-xl text-sm mb-12">
                                Históricamente, el rol de la mujer en el ecosistema cafetalero ha sido invisibilizado. En Finca Timbuyacu, ellas lideran la siembra, el beneficio y la toma de decisiones. Nuestro proyecto asegura independencia económica, precios justos directo al productor y equidad en el campo.
                            </p>

                            <div className="flex items-center gap-6">
                                <div className="w-16 h-px bg-white/20" />
                                <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                                    Café con Propósito
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                SECTION 4: TIMBUYACU (Biodiversidad)
                ═══════════════════════════════════════ */}
            <section className="relative py-32 lg:py-48 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
                        
                        {/* Image Plate */}
                        <div className="w-full lg:w-[45%] relative">
                            <div className="relative w-full aspect-square md:aspect-[4/3] bg-[#0A0E0A] rounded-3xl overflow-hidden border border-white/5">
                                <Image
                                    src="https://picsum.photos/seed/andes_bear/800/800"
                                    alt="Biodiversidad Finca Timbuyacu"
                                    fill
                                    className="object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-[3s]"
                                />
                            </div>
                            {/* Floating Stats */}
                            <div className="absolute -left-12 bottom-12 bg-black/80 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hidden md:block">
                                <span className="block font-serif text-3xl text-blue-400 mb-1">100%</span>
                                <span className="font-sans text-[9px] uppercase tracking-widest text-white/50">Reserva Natural Integral</span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="w-full lg:w-[55%]">
                            <h2 className="font-serif text-5xl md:text-7xl text-white mb-8">
                                Cultivo bajo <br/>
                                <span className="italic text-white/30">Dosel Nativo</span>.
                            </h2>
                            <p className="text-white/50 leading-relaxed text-base md:text-lg max-w-lg mb-12">
                                La Finca Timbuyacu no es una plantación monocultivo; es un agroecosistema integrado. Nuestros cafetales crecen bajo la sombra de inmensos cedros, moenas y pacaes, protegiendo los corredores ecológicos.
                            </p>
                            
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <Droplets className="text-blue-400 mt-1" size={20} />
                                    <div>
                                        <h4 className="font-serif text-xl text-white mb-2">Aguas de Manantial</h4>
                                        <p className="text-sm text-white/40">Usamos sistemas de recirculación para el beneficio húmedo y tratamos las aguas mieles antes de retornarlas a la tierra.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Leaf className="text-emerald-400 mt-1" size={20} />
                                    <div>
                                        <h4 className="font-serif text-xl text-white mb-2">Compost Orgánico</h4>
                                        <p className="text-sm text-white/40">La pulpa del café y microorganismos de montaña regresan al suelo como fertilizante natural, cerrando el ciclo biológico.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Topographic Background lines */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] opacity-5 pointer-events-none pb-0">
                   <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-white" strokeWidth="0.1">
                        <circle cx="80" cy="20" r="10" />
                        <circle cx="80" cy="20" r="20" />
                        <circle cx="80" cy="20" r="30" />
                        <circle cx="80" cy="20" r="40" />
                        <circle cx="80" cy="20" r="50" />
                   </svg>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                SECTION 5: ETHICAL CALL TO ACTION
                ═══════════════════════════════════════ */}
            <section className="relative py-32 border-t border-white/[0.04] bg-gradient-to-b from-[#030603] to-[#0A0D0A]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/40 block mb-6">
                        El Círculo Virtuoso
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 leading-tight">
                        Cada taza de Amaruya <br className="hidden md:block"/> 
                        <span className="italic text-gold-400">cierra un ciclo.</span>
                    </h2>
                    <p className="text-white/50 max-w-xl mx-auto mb-12 leading-relaxed">
                        Al elegir nuestro café, estás financiando directamente la protección de la Amazonía peruana y asegurando un trato digno para las familias productoras.
                    </p>
                    <Link 
                        href="/tienda"
                        className="inline-flex items-center gap-4 px-8 py-4 bg-white text-black hover:bg-gold-400 transition-colors rounded-full group mx-auto"
                    >
                        <span className="font-bold text-[10px] uppercase tracking-[0.2em]">Súmate al Cambio</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 group-hover:-rotate-45 transition-transform duration-300" />
                    </Link>
                </div>
            </section>

        </main>
        <Footer />
        </>
    );
}

/* ── HELPERS ── */

function MetricCard({ icon, number, suffix, label, desc, color }: {
    icon: React.ReactNode;
    number: string;
    suffix: string;
    label: string;
    desc: string;
    color: string;
}) {
    return (
        <div className="flex flex-col group">
            <div 
                className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/[0.03] border border-white/[0.08] mb-6 transition-colors duration-500"
                style={{ "--hover-border": color } as React.CSSProperties}
            >
                <div className="opacity-50 group-hover:opacity-100 transition-opacity" style={{ color }}>
                    {icon}
                </div>
            </div>
            
            <div className="font-serif text-5xl md:text-6xl text-white mb-2 flex items-baseline">
                {number}
                <span className="text-xl md:text-2xl ml-1" style={{ color }}>{suffix}</span>
            </div>
            
            <h4 className="font-sans text-xs uppercase tracking-widest text-white/80 mb-3 block">
                {label}
            </h4>
            
            <p className="text-sm text-white/30 leading-relaxed font-light">
                {desc}
            </p>
        </div>
    );
}
