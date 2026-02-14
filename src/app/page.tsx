import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black text-white selection:bg-gold-500 selection:text-black">
      <Navbar />
      <Hero />
    </main>
  );
}
