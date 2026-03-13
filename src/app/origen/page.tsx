"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Origins from "@/components/Origins";

export default function OrigenPage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-gold-500 selection:text-black font-sans transition-colors duration-1000">
            <Navbar />

            <main className="relative z-10 pt-20">
                {/* ── IMMERSIVE ORIGINS COMPONENT ── */}
                <Origins />

                {/* Smooth Gradient Transition to Footer */}
                <div className="h-48 w-full bg-gradient-to-b from-[#060a06] to-[#050505]" />
            </main>

            <Footer />
        </div>
    );
}
