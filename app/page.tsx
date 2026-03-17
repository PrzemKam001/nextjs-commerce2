export const dynamic = 'force-dynamic';

import Footer from "components/layout/footer";

export const metadata = {
  title: "MensCaveSaloon – Designer Gadgets for Your Man Cave",
  description:
    "LED Shelves, Jersey Frames, Personalized Mugs & premium man cave gear. Ships worldwide • Your cave. Your rules.",
  openGraph: {
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      {/* === HERO WORLDWIDE MENS CAVE SALOON === */}
      <div className="relative h-screen bg-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1a1a1a_0%,transparent_70%)]" />
        
        {/* neon glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-600/10 to-transparent" />

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="inline-block bg-red-600/90 text-white text-sm tracking-[3px] px-6 py-2 rounded-full mb-6 font-bold">
            SHIPS WORLDWIDE 🌍
          </div>

          <h1 className="text-7xl md:text-[100px] font-black tracking-[-5px] text-white mb-4 leading-none">
            MENS CAVE<br />SALOON
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-400 mb-4">
            Premium gear for real men
          </p>
          <p className="text-xl md:text-2xl text-gray-500 mb-10 max-w-2xl mx-auto">
            LED Shelves • Personalized Mugs • Jersey Frames<br />
            <span className="text-red-500">Your cave. Your rules.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/search"
              className="bg-red-600 hover:bg-red-700 transition-all px-14 py-6 rounded-3xl text-2xl font-bold text-white shadow-2xl shadow-red-600/30"
            >
              Shop Now →
            </a>
            <a 
              href="/search"
              className="border-2 border-white/70 hover:bg-white/10 transition-all px-14 py-6 rounded-3xl text-2xl font-bold text-white"
            >
              Browse Collections
            </a>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-red-600 text-3xl animate-bounce">
          ↓
        </div>
      </div>

      {/* === BENEFITS SECTION === */}
      <div className="bg-zinc-950 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <div>
            <div className="text-5xl mb-4">🔥</div>
            <h3 className="text-2xl font-bold text-white mb-3">Premium Quality</h3>
            <p className="text-gray-400">Only the best materials and hand-crafted personalization</p>
          </div>
          <div>
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="text-2xl font-bold text-white mb-3">Worldwide Shipping</h3>
            <p className="text-gray-400">Fast and secure delivery to every corner of the world</p>
          </div>
          <div>
            <div className="text-5xl mb-4">🛡️</div>
            <h3 className="text-2xl font-bold text-white mb-3">Satisfaction Guarantee</h3>
            <p className="text-gray-400">30-day returns • Support 7 days a week</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}