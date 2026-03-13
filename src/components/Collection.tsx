"use client";

import Image from "next/image";
import { ArrowRight, Sun } from "lucide-react";

/* ────────────────────────────────────────
   COLLECTION DATA
   Three distinct profiles for the user journey
   ──────────────────────────────────────── */
const COFFEES = [
    {
        id: "timbuyacu",
        name: "Timbuyacu",
        tagline: "El Cultivo Insignia",
        description: "El perfil tradicional de nuestras fincas en Rodríguez de Mendoza. Equilibrio perfecto entre acidez cítrica y dulzura de panela.",
        roast: "MEDIO-OSCURO",
        notes: ["CHOCOLATE", "CARAMELO", "CÍTRICOS"],
        image: "https://picsum.photos/seed/amaruya_gold/800/1200",
        accent: "bg-[#D4AF37]" // Gold
    },
    {
        id: "buenamoza",
        name: "Buenamoza",
        tagline: "Café de Mujer",
        description: "Producido íntegramente por mujeres cafetaleras. Notas intensas a cacao puro y especias con cuerpo denso.",
        roast: "OSCURO INTENSO",
        notes: ["CACAO PURO", "ESPECIFICA", "HUMO"],
        image: "https://picsum.photos/seed/midnight_jaguar/800/1200",
        accent: "bg-[#8B5CF6]" // Purple/Night
    },
    {
        id: "monteverde",
        name: "Café Monteverde",
        tagline: "La Línea Tradicional",
        description: "Perfiles limpios, extremadamente dulces y con vibrante acidez mandarina representativa de la región.",
        roast: "CLARO",
        notes: ["JAZMÍN", "MIEL", "MANDARINA"],
        image: "https://picsum.photos/seed/river_mist/800/1200",
        accent: "bg-[#6EE7B7]" // Mist green
    },
];

export default function Collection() {
    return (
        <section className="relative w-full py-32 bg-zinc-950 overflow-hidden">
            {/* ═══ BACKGROUND ATMOSPHERE ═══ */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
                <div className="absolute -left-40 top-40 w-96 h-96 bg-gold-400/10 rounded-full blur-[120px]" />
                <div className="absolute -right-40 bottom-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative container mx-auto px-6 md:px-12">
    
                {/* ═══ CARDS GRID ═══ */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {COFFEES.map((coffee) => (
                        <div
                            key={coffee.id}
                            className="group relative h-[600px] w-full perspective-1000"
                        >
                            <div className="relative w-full h-full duration-700 transition-all group-hover:-translate-y-4">
                                {/* Image Container */}
                                <div className="absolute inset-0 rounded-xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-gold-400/30 transition-colors duration-500">
                                    <Image
                                        src={coffee.image}
                                        alt={coffee.name}
                                        fill
                                        className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    {/* Floating Tag */}
                                    <div className="absolute top-8 right-8 text-right opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                        <span className="text-[9px] uppercase tracking-widest text-white/60 block mb-1">
                                            Perfil
                                        </span>
                                        <span className={`inline-block w-2 h-2 rounded-full ${coffee.accent} mb-1 shadow-[0_0_10px_currentColor]`} />
                                    </div>

                                    {/* Roast Level */}
                                    <div className="mb-4 flex items-center gap-2">
                                        <Sun size={14} className="text-gold-400" />
                                        <span className="text-[10px] uppercase tracking-widest text-gold-400">
                                            {coffee.roast}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-serif text-3xl text-white mb-2 group-hover:text-gold-100 transition-colors">
                                        {coffee.name}
                                    </h3>
                                    <p className="text-xs text-gray-400 italic mb-6">
                                        &ldquo;{coffee.tagline}&rdquo;
                                    </p>

                                    {/* Description (Reveal on hover) */}
                                    <div className="h-0 overflow-hidden group-hover:h-24 transition-all duration-500 opacity-0 group-hover:opacity-100">
                                        <p className="text-sm text-gray-300 leading-relaxed mb-4">
                                            {coffee.description}
                                        </p>
                                    </div>

                                    {/* Tasting Notes */}
                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 group-hover:border-gold-400/20 transition-colors">
                                        {coffee.notes.map((note) => (
                                            <span
                                                key={note}
                                                className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-wider text-gray-300 group-hover:bg-gold-400/10 group-hover:text-gold-200 group-hover:border-gold-400/20 transition-all"
                                            >
                                                {note}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action */}
                                    <button className="mt-8 flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white group-hover:text-gold-400 transition-colors">
                                        Comprar Ahora <ArrowRight size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
