"use client";

import Image from "next/image";
import { Menu, Search, ShoppingBag } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="absolute top-0 left-0 w-full z-50 px-6 py-8 md:px-12 flex justify-between items-center">
            {/* Left Links — Glass Pill */}
            <div className="hidden md:flex items-center gap-8 px-8 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-xs font-medium tracking-widest text-gray-200 shadow-lg shadow-black/10">
                <a
                    href="#"
                    className="hover:text-gold-400 transition-colors duration-300"
                >
                    TIENDA
                </a>
                <a
                    href="#"
                    className="hover:text-gold-400 transition-colors duration-300"
                >
                    ORIGEN
                </a>
                <a
                    href="#"
                    className="hover:text-gold-400 transition-colors duration-300"
                >
                    IMPACTO
                </a>
            </div>

            {/* Logo */}
            <a
                href="/"
                className="block hover:scale-105 transition-transform duration-500 cursor-pointer"
            >
                <Image
                    src="/AmaruyaLogo.webp"
                    alt="Amaruya Coffee"
                    width={160}
                    height={64}
                    className="h-14 md:h-16 w-auto object-contain"
                    priority
                />
            </a>

            {/* Right Actions — Glass Buttons */}
            <div className="flex items-center gap-3">
                <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-gold-400 hover:text-black hover:border-gold-400 transition-all duration-300">
                    <Search size={18} />
                </button>
                <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-gold-400 hover:text-black hover:border-gold-400 transition-all duration-300 relative">
                    <ShoppingBag size={18} />
                    <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-gold-400 rounded-full pointer-events-none" />
                </button>
                <button className="flex items-center gap-3 pl-5 pr-4 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-gold-400 hover:text-black hover:border-gold-400 transition-all duration-300 group">
                    <span className="text-[0.7rem] uppercase tracking-widest font-bold">
                        Menú
                    </span>
                    <Menu
                        size={18}
                        className="group-hover:rotate-180 transition-transform duration-500"
                    />
                </button>
            </div>
        </nav>
    );
}
