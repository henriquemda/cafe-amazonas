"use client";

import Image from "next/image";
import { ArrowRight, Sun } from "lucide-react";

/* ────────────────────────────────────────
   COLLECTION DATA
   Three distinct profiles for the user journey
   ──────────────────────────────────────── */
const COFFEES = [
    {
        id: 1,
        name: "Amaruya Gold",
        tagline: "El Icono",
        roast: "Medio-Oscuro",
        notes: ["Chocolate", "Caramelo", "Cítricos"],
        description:
            "Nuestra firma. Un equilibrio perfecto entre la intensidad de la selva y la dulzura de la tierra.",
        image: "https://picsum.photos/seed/gold/400/600",
        accent: "bg-gold-400",
    },
    {
        id: 2,
        name: "Midnight Jaguar",
        tagline: "Espíritu Nocturno",
        roast: "Oscuro Intenso",
        notes: ["Cacao Puro", "Especifica", "Humo"],
        description:
            "Para los que buscan profundidad. Un cuerpo denso y salvaje como la noche amazónica.",
        image: "https://picsum.photos/seed/jaguar/400/600",
        accent: "bg-indigo-500",
    },
    {
        id: 3,
        name: "River Mist",
        tagline: "Suavidad Matutina",
        roast: "Claro",
        notes: ["Jazmín", "Miel", "Té Verde"],
        description:
            "Delicado y floral. Inspirado en la niebla que cubre el Río Negro al amanecer.",
        image: "https://picsum.photos/seed/river_nature/400/600",
        accent: "bg-emerald-400",
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
                {/* ═══ HEADER ═══ */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <span className="text-gold-400 text-[10px] uppercase tracking-[0.25em] font-bold block mb-4">
                            Nuestra Colección
                        </span>
                        <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight">
                            Tesoros de <br />
                            <span className="italic text-gray-500">Origen Único</span>
                        </h2>
                    </div>
                    <div className="max-w-md text-gray-400 text-sm leading-relaxed border-l border-white/10 pl-6">
                        <p>
                            Cada grano cuenta una historia de biodiversidad. Cultivados en
                            sombra, cosechados a mano y procesados con métodos que respetan el
                            ciclo vital de la selva.
                        </p>
                    </div>
                </div>

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
