import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Origins from "@/components/Origins";
import Collection from "@/components/Collection";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black text-white selection:bg-gold-500 selection:text-black">
      <Navbar />
      <Hero />
      <Origins />
      <Collection />
    </main>
  );
}
