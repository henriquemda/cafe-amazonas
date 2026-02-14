"use client";

import Image from "next/image";
import { ArrowUpRight, Play, Volume2, MessageCircle } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative w-full h-screen min-h-[800px] overflow-hidden bg-black text-white">
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
                src="/coffe-hero.mp4"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50 z-[1] pointer-events-none" />

            {/* Main Content Grid */}
            <div className="relative z-10 w-full h-full flex flex-col justify-center px-6 md:px-12 pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
                    {/* Left Column: Product Card + Badge */}
                    <div className="lg:col-span-5 flex flex-col justify-end h-full py-12 lg:py-20">
                        {/* 100% Comercio Justo Badge */}
                        <div className="mb-8 hidden lg:block">
                            <div className="bg-black/30 backdrop-blur-md p-6 border-l-2 border-gold-400 inline-block">
                                <p className="text-white font-serif text-3xl">100%</p>
                                <p className="text-gray-300 text-sm uppercase tracking-widest">
                                    Comercio Justo
                                </p>
                            </div>
                        </div>

                        {/* Floating Product Card */}
                        <div className="relative group">
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl w-full max-w-xs md:max-w-sm hover:bg-white/10 transition-all duration-500">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-serif text-xl mb-1">Amaruya Gold</h3>
                                        <p className="text-xs text-gray-400 mb-4">
                                            Tostado Oscuro • 340g
                                        </p>
                                        <span className="text-lg font-bold block">$24.00</span>
                                    </div>
                                    <div className="w-16 h-16 rounded-full overflow-hidden border border-white/20">
                                        <Image
                                            src="https://picsum.photos/seed/coffeebean/200/200"
                                            alt="Textura de Café"
                                            width={200}
                                            height={200}
                                            className="w-full h-full object-cover opacity-80"
                                        />
                                    </div>
                                </div>

                                {/* Product Bag Shape */}
                                <div className="relative w-full h-48 mt-4 flex items-center justify-center">
                                    <div className="relative z-10 w-32 h-40 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-sm shadow-2xl flex items-center justify-center border-b-4 border-gold-400 transform group-hover:-translate-y-2 transition-transform duration-500">
                                        <div className="text-center">
                                            <span className="block text-gold-400 font-serif text-2xl font-bold">
                                                A
                                            </span>
                                            <span className="text-[8px] uppercase tracking-widest text-gray-500">
                                                Tostado
                                            </span>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 w-24 h-4 bg-black/50 blur-xl rounded-[100%]" />
                                </div>

                                <button className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gold-400 transition-colors">
                                    <ArrowUpRight size={18} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Headline & Description */}
                    <div className="lg:col-span-7 flex flex-col justify-center h-full py-12 lg:py-20 lg:pl-12">
                        {/* Headline Group */}
                        <div className="animate-fade-in-up">
                            <span className="text-gold-400 uppercase tracking-[0.2em] text-xs font-bold mb-4 block">
                                Serie Origen Único
                            </span>
                            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8">
                                Despierta el <br />
                                <span className="italic text-gray-400">Espíritu</span> de la{" "}
                                <br />
                                Amazonía.
                            </h1>
                        </div>

                        {/* Description */}
                        <div className="max-w-md text-sm text-gray-400 leading-relaxed">
                            <p className="mb-6 border-l border-gold-400 pl-4">
                                Cosechado de manera sostenible en los suelos ricos de la cuenca
                                del Río Negro. Un café tan profundo, misterioso y poderoso como
                                el río mismo.
                            </p>
                            <button className="bg-gold-400 text-black px-8 py-3 rounded-none hover:bg-white transition-colors duration-300 font-semibold uppercase tracking-wider text-xs">
                                Descubrir Más
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Side Floating Actions */}
                <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
                    <button className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-gold-400 hover:text-black transition-all">
                        <Play size={20} fill="currentColor" className="ml-1" />
                    </button>
                    <button className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-gold-400 hover:text-black transition-all">
                        <Volume2 size={20} />
                    </button>
                </div>

                {/* Chat Bubble */}
                <div className="absolute bottom-12 right-6 md:right-12 z-20">
                    <button className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-lg shadow-white/10 hover:scale-110 transition-transform">
                        <MessageCircle size={24} />
                    </button>
                </div>
            </div>

            {/* Decorative Gradient */}
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
        </section>
    );
}
