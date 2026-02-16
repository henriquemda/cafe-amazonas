import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Origins from "@/components/Origins";
import Ritual from "@/components/Ritual";
import Collection from "@/components/Collection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black text-white selection:bg-gold-500 selection:text-black hover:cursor-default">
      {/* 
        ULTRATHINK IMPLEMENTATION
        Stateless layout composition for maximum performance.
        Each component handles its own intersection observers/animations.
      */}

      <Navbar />

      <Hero />

      {/* 
        The "Origins" section was recently enhanced by the user.
        We place it here as the foundational narrative element.
      */}
      <div id="origins">
        <Origins />
      </div>

      <Ritual />

      <Collection />

      <Footer />

      {/* Global Grain Overlay (High z-index to sit on top of everything) */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
      </div>
    </main>
  );
}
