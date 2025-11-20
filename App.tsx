import React from 'react';
import Hero from './components/Hero';
import DeathList from './components/DeathList';
import HanzoDojo from './components/HanzoDojo';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-kb-black overflow-x-hidden selection:bg-kb-red selection:text-white">
      {/* Sticky Nav for quick access */}
      <nav className="sticky top-0 z-50 bg-kb-black/90 backdrop-blur-sm border-b border-gray-800 py-4 px-6 flex justify-between items-center">
        <div className="font-anton text-2xl text-kb-yellow tracking-wider">KB <span className="text-white">VOL.3</span></div>
        <div className="hidden md:flex gap-6 font-condensed uppercase tracking-widest text-sm text-gray-300">
          <span className="hover:text-kb-yellow cursor-pointer transition-colors">The Bride</span>
          <span className="hover:text-kb-yellow cursor-pointer transition-colors">Enemies</span>
          <span className="hover:text-kb-yellow cursor-pointer transition-colors">Weapons</span>
        </div>
        <button className="bg-kb-yellow text-black font-bold font-condensed px-4 py-1 text-sm uppercase hover:bg-white transition-colors">
          Enter
        </button>
      </nav>

      <main>
        <Hero />
        <DeathList />
        
        {/* Transition Section */}
        <div className="w-full h-24 bg-gradient-to-b from-kb-white to-kb-black relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-1 bg-red-600"></div>
            </div>
        </div>

        <HanzoDojo />
        
        {/* Crazy 88 Silhouette Section (Visual only) */}
        <section className="w-full py-20 bg-kb-yellow relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
            <div className="container mx-auto px-4 relative z-10 text-center">
                <h3 className="font-anton text-6xl md:text-8xl text-black mb-6">CRAZY 88</h3>
                <p className="font-condensed text-black text-xl max-w-2xl mx-auto mb-12 font-bold">
                    "Leave the limbs you've lost. They belong to me now."
                </p>
                <div className="flex justify-center gap-2 overflow-hidden whitespace-nowrap opacity-80">
                     {/* Simulating silhouettes with CSS */}
                     {[...Array(10)].map((_, i) => (
                         <div key={i} className="w-12 h-32 bg-black rounded-t-full mx-1 transform translate-y-4 hover:translate-y-0 transition-transform duration-300"></div>
                     ))}
                </div>
            </div>
            {/* Silhouette Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;