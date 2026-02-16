"use client";

import { useRef } from "react";
import Image from "next/image";
import { Check, Clock, Cloud, Droplets, Sun } from "lucide-react";

const STEPS = [
    {
        number: "01",
        title: "Cosecha Selectiva",
        subtitle: "Solo cerezas maduras",
        description: "Nuestros caficultores seleccionan manualmente solo las cerezas que han alcanzado su punto óptimo de maduración, garantizando la dulzura natural.",
        icon: Sun,
        image: "https://picsum.photos/seed/harvest/800/600",
    },
    {
        number: "02",
        title: "Fermentación Lenta",
        subtitle: "24 a 36 horas",
        description: "El café reposa en tanques de fermentación bajo la sombra de la selva, desarrollando notas frutales complejas y una acidez brillante.",
        icon: Clock,
        image: "https://picsum.photos/seed/ferment/800/600",
    },
    {
        number: "03",
        title: "Secado al Sol",
        subtitle: "Patios elevados",
        description: "Secado lento en camas africanas para asegurar una humedad uniforme, protegidos de la lluvia pero bañados por el sol amazónico.",
        icon: Cloud,
        image: "https://picsum.photos/seed/drying/800/600",
    },
];

export default function Ritual() {
    return (
        <section className="relative w-full bg-zinc-950 text-white py-32 md:py-48 overflow-hidden">
            {/* ═══ HEADER ═══ */}
            <div className="container mx-auto px-6 md:px-12 mb-24 md:mb-32 flex flex-col items-center text-center">
                <span className="text-gold-400 text-[10px] uppercase tracking-[0.4em] mb-6 block animate-pulse">
                    Proceso Artesanal
                </span>
                <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none md:-tracking-[0.03em]">
                    El Ritual <span className="italic text-white/20">Sagrado</span>
                </h2>
                <div className="w-px h-24 bg-gradient-to-b from-gold-400 to-transparent mt-12" />
            </div>

            {/* ═══ STEPS ═══ */}
            <div className="container mx-auto px-6 md:px-12 relative">
                {/* Connecting Line (Desktop) */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 hidden lg:block -translate-x-1/2" />

                <div className="space-y-24 md:space-y-48">
                    {STEPS.map((step, i) => (
                        <div
                            key={step.number}
                            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""
                                }`}
                        >
                            {/* IMAGE */}
                            <div className="flex-1 w-full relative group perspective-1000">
                                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm transition-transform duration-700 ease-out group-hover:scale-[1.02] group-hover:-rotate-1">
                                    <div className="absolute inset-0 bg-gold-400/10 mix-blend-color z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        fill
                                        className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 grayscale hover:grayscale-0"
                                    />

                                    {/* Corner Decoration */}
                                    <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-white/30 hidden group-hover:block transition-all" />
                                    <div className="absolute bottom-4 left-4 w-12 h-12 border-b border-l border-white/30 hidden group-hover:block transition-all" />
                                </div>

                                {/* Large Number */}
                                <span
                                    className={`absolute -top-12 -left-8 text-[120px] font-serif leading-none text-transparent text-outline opacity-20 select-none z-0 ${i % 2 === 1 ? "lg:-right-8 lg:left-auto" : ""
                                        }`}
                                >
                                    {step.number}
                                </span>
                            </div>

                            {/* CONTENT */}
                            <div className="flex-1 w-full text-center lg:text-left">
                                <div className="flex flex-col items-center lg:items-start">
                                    <div className="w-12 h-12 rounded-full border border-gold-400/30 flex items-center justify-center text-gold-400 mb-6 group-hover:bg-gold-400 group-hover:text-black transition-colors duration-500">
                                        <step.icon size={20} />
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-serif mb-4">
                                        {step.title}
                                    </h3>
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 block mb-6 border-b border-white/10 pb-2">
                                        {step.subtitle}
                                    </span>
                                    <p className="text-gray-400 leading-relaxed text-sm md:text-base max-w-md mx-auto lg:mx-0">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ═══ FOOTER MARK ═══ */}
            <div className="container mx-auto flex justify-center mt-32">
                <div className="flex items-center gap-4 opacity-30">
                    <div className="h-px w-20 bg-white" />
                    <span className="text-xs uppercase tracking-widest">Desde el origen</span>
                    <div className="h-px w-20 bg-white" />
                </div>
            </div>
        </section>
    );
}
