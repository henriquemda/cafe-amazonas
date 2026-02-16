"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Search, ShoppingBag } from "lucide-react";
import FullScreenMenu from "./FullScreenMenu";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="absolute top-0 left-0 w-full z-50 px-6 py-8 md:px-12 flex justify-between items-center">
                {/* Left Links — Deep Glass Pill */}
                <div className="hidden md:flex items-center p-1.5 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_8px_20px_-4px_rgba(0,0,0,0.5)]">
                    <div className="flex items-center gap-1 px-4 py-2 rounded-full border border-white/[0.02] bg-black/20">
                        <NavItem href="/tienda" label="Tienda" />
                        <Separator />
                        <NavItem href="#origins" label="Origen" />
                        <Separator />
                        <NavItem href="#" label="Impacto" />
                    </div>
                </div>

                {/* Logo — absolute center */}
                <Link
                    href="/"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition-transform duration-500 cursor-pointer z-10"
                >
                    <Image
                        src="/AmaruyaLogo.webp"
                        alt="Café Amazonas"
                        width={160}
                        height={64}
                        className="h-14 md:h-16 w-auto object-contain drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
                        priority
                    />
                </Link>

                {/* Right Actions — Glass Buttons */}
                <div className="flex items-center gap-3">
                    <IconButton icon={Search} />
                    <IconButton icon={ShoppingBag} badge />
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="flex items-center gap-3 pl-5 pr-4 py-2.5 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/[0.08] text-white hover:bg-gold-400 hover:text-black hover:border-gold-400 transition-all duration-300 group shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
                    >
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

            {/* Full Screen Menu Overlay */}
            <FullScreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
    );
}

/* ── Micro-Components for Granularity ── */

function NavItem({ href, label }: { href: string; label: string }) {
    return (
        <Link
            href={href}
            className="relative px-5 py-1 text-[10px] uppercase tracking-[0.2em] font-medium text-gray-300 hover:text-white transition-colors duration-300 group overflow-hidden"
        >
            <span className="relative z-10">{label}</span>
            {/* Hover Glow */}
            <span className="absolute inset-0 bg-white/[0.08] scale-0 rounded-md group-hover:scale-100 transition-transform duration-300" />
        </Link>
    );
}

function Separator() {
    return <div className="w-0.5 h-0.5 rounded-full bg-white/20" />;
}

function IconButton({ icon: Icon, badge }: { icon: React.ElementType; badge?: boolean }) {
    return (
        <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/[0.08] text-white hover:bg-gold-400 hover:text-black hover:border-gold-400 transition-all duration-300 relative shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] group">
            <Icon size={18} />
            {badge && (
                <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-gold-400 rounded-full pointer-events-none group-hover:bg-black transition-colors" />
            )}
        </button>
    );
}
