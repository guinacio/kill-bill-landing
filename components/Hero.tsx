import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-kb-yellow overflow-hidden border-b-8 border-black">
      {/* The Stripe */}
      <div className="absolute top-0 bottom-0 left-10 md:left-32 w-4 md:w-12 bg-black z-10"></div>
      <div className="absolute top-0 bottom-0 left-16 md:left-48 w-1 md:w-2 bg-black z-10"></div>

      <div className="z-20 text-center px-4">
        <h2 className="text-black font-condensed tracking-[0.3em] text-xl md:text-2xl font-bold mb-4">
          THE 4TH FILM BY QUENTIN TARANTINO
        </h2>
        <h1 className="text-6xl md:text-9xl font-anton text-black drop-shadow-lg mb-2">
          KILL BILL
        </h1>
        <p className="text-kb-red font-anton text-2xl md:text-5xl tracking-wider uppercase transform -rotate-2 mt-4">
          Revenge is a dish best served cold
        </p>
        
        <div className="mt-16 flex flex-col items-center space-y-4">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-black rounded-full flex items-center justify-center border-4 border-kb-red shadow-2xl animate-bounce">
             <span className="text-kb-yellow font-anton text-2xl md:text-3xl">VS</span>
          </div>
          <p className="text-black font-condensed font-bold text-lg">VOLUME 1 & 2</p>
        </div>
      </div>

      {/* Decorative blood splatter (CSS shapes) */}
      <div className="absolute top-20 right-10 w-32 h-32 opacity-80 pointer-events-none">
         <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#D00000" d="M44.5,-76.4C58.9,-69.3,72.4,-60.9,81.3,-49.6C90.2,-38.3,94.5,-24.1,93.1,-10.4C91.7,3.3,84.6,16.5,76.1,28.7C67.6,40.9,57.7,52.1,46.2,61.2C34.7,70.3,21.6,77.3,7.8,79.8C-6,82.3,-20.4,80.4,-33.2,74.2C-46,68,-57.1,57.5,-66.4,45.6C-75.7,33.7,-83.1,20.4,-84.6,6.4C-86.1,-7.6,-81.7,-22.3,-73.5,-35.1C-65.3,-47.9,-53.3,-58.8,-40.4,-66.7C-27.5,-74.6,-13.7,-79.5,0.6,-80.5C14.9,-81.5,29.8,-78.6,44.5,-76.4Z" transform="translate(100 100)" />
         </svg>
      </div>
    </section>
  );
};

export default Hero;