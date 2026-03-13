import { Carousel } from "components/carousel";
import { ThreeItemGrid } from "components/grid/three-items";
import Footer from "components/layout/footer";

export const metadata = {
  title: "MensCaveSaloon – Designerskie gadżety dla Twojej jaskini",
  description:
    "Regały LED, ramki na koszulki piłkarskie, personalizowane puchary, półki na kolekcje i więcej. Twoja męska jaskinia level 100.",
  openGraph: {
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      {/* === NOWY HERO MENS CAVE SALOON === */}
      <div className="relative h-screen bg-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1a1a1a_0%,transparent_70%)]" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-7xl md:text-[90px] font-black tracking-[-4px] text-white mb-6 leading-none">
            MENS CAVE<br />SALOON
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Designerskie wyposażenie dla prawdziwych facetów.<br />
            Regały z LED • Personalizowane puchary • Ramki na koszulki • Twoja jaskinia, Twoje zasady.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a 
              href="/collections/all"
              className="bg-red-600 hover:bg-red-700 transition px-12 py-5 rounded-2xl text-xl font-bold text-white"
            >
              Przejdź do sklepu →
            </a>
            <a 
              href="/collections/regaly-led"
              className="border-2 border-white/70 hover:bg-white/10 transition px-12 py-5 rounded-2xl text-xl font-bold text-white"
            >
              Regały LED
            </a>
          </div>
        </div>

        {/* subtelny neonowy efekt */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-red-600 text-2xl animate-pulse">
          ↓ scroll ↓
        </div>
      </div>

      {/* === Twoje istniejące komponenty szablonu (nic się nie zmienia) === */}
      <ThreeItemGrid />
      <Carousel />
      <Footer />
    </>
  );
}