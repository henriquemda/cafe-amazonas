"use client";

import Link from "next/link";
import { ArrowUpRight, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-zinc-950 text-white border-t border-white/5 pt-20 pb-10 overflow-hidden">
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
                        © 2025 Café Amazonas. Todos los derechos reservados.
                    </span>
                </div>

                {/* ═══ GIANT FOOTER BRANDING ═══ */}
                <div className="mt-20 md:mt-32 w-full overflow-hidden select-none pointer-events-none opacity-10 mix-blend-overlay">
                    <span className="block text-[18vw] leading-[0.75] font-serif text-center tracking-tighter text-white">
                        AMARUYA
                    </span>
                </div>
            </div>

            {/* Background Gradient */}
            <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-gold-900/10 to-transparent pointer-events-none" />
        </footer>
    );
}
