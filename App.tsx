import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Hero from './components/Hero';
import DeathList from './components/DeathList';
import HanzoDojo from './components/HanzoDojo';
import Footer from './components/Footer';
import TheBride from './components/TheBride';
import Enemies from './components/Enemies';
import Weapons from './components/Weapons';
import Crazy88 from './components/Crazy88';

const Home: React.FC = () => (
  <>
    <Hero />
    <DeathList />

    {/* Transition Section */}
    <div className="w-full h-24 bg-gradient-to-b from-kb-white to-kb-black relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-1 bg-red-600"></div>
      </div>
    </div>

    <HanzoDojo />

    <Crazy88 />
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen w-full bg-kb-black overflow-x-hidden selection:bg-kb-red selection:text-white">
        {/* Sticky Nav for quick access */}
        <nav className="sticky top-0 z-50 bg-kb-black/90 backdrop-blur-sm border-b border-gray-800 py-4 px-6 flex justify-between items-center">
          <Link to="/" className="font-anton text-2xl text-kb-yellow tracking-wider hover:text-white transition-colors">
            KB <span className="text-white">VOL.3</span>
          </Link>
          <div className="hidden md:flex gap-6 font-condensed uppercase tracking-widest text-sm text-gray-300">
            <Link to="/bride" className="hover:text-kb-yellow cursor-pointer transition-colors">The Bride</Link>
            <Link to="/enemies" className="hover:text-kb-yellow cursor-pointer transition-colors">Enemies</Link>
            <Link to="/weapons" className="hover:text-kb-yellow cursor-pointer transition-colors">Weapons</Link>
          </div>
          <Link to="/" className="bg-kb-yellow text-black font-bold font-condensed px-4 py-1 text-sm uppercase hover:bg-white transition-colors">
            Enter
          </Link>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bride" element={<TheBride />} />
            <Route path="/enemies" element={<Enemies />} />
            <Route path="/weapons" element={<Weapons />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;