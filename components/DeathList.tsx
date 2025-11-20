import React, { useState } from 'react';
import { Target } from '../types';

const INITIAL_TARGETS: Target[] = [
  { id: 1, name: "O-Ren Ishii", alias: "Cottonmouth", status: 'ALIVE', description: "Yakuza Boss. Queen of the Tokyo Underworld." },
  { id: 2, name: "Vernita Green", alias: "Copperhead", status: 'ALIVE', description: "Housewife. Expert with knives." },
  { id: 3, name: "Budd", alias: "Sidewinder", status: 'ALIVE', description: "Bill's Brother. Bouncer at a strip club." },
  { id: 4, name: "Elle Driver", alias: "California Mountain Snake", status: 'ALIVE', description: "The Rival. One-eyed assassin." },
  { id: 5, name: "Bill", alias: "Snake Charmer", status: 'ALIVE', description: "The Target. The Mastermind." },
];

const DeathList: React.FC = () => {
  const [targets, setTargets] = useState<Target[]>(INITIAL_TARGETS);

  const toggleStatus = (id: number) => {
    setTargets(prev => prev.map(t => {
      if (t.id === id) {
        return { ...t, status: t.status === 'ALIVE' ? 'DEAD' : 'ALIVE' };
      }
      return t;
    }));
  };

  return (
    <section className="w-full py-20 bg-kb-white text-kb-black px-6 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-anton mb-12 text-center border-b-4 border-kb-black pb-4">
          DEATH LIST FIVE
        </h2>
        
        <div className="space-y-6 font-hand text-2xl md:text-3xl relative z-10">
          {targets.map((target, index) => (
            <div 
              key={target.id}
              onClick={() => toggleStatus(target.id)}
              className={`
                relative cursor-pointer p-6 border-2 border-kb-black transition-all duration-300 transform hover:scale-105 hover:bg-gray-100
                ${target.status === 'DEAD' ? 'opacity-70' : 'opacity-100'}
              `}
            >
              <div className="flex justify-between items-center flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <span className="font-anton text-4xl text-kb-red">{index + 1}.</span>
                  <div>
                    <p className="font-bold tracking-widest uppercase">{target.name}</p>
                    <p className="text-sm font-condensed text-gray-600 uppercase tracking-widest">Code Name: {target.alias}</p>
                  </div>
                </div>
                <div className="font-condensed text-sm bg-kb-black text-kb-white px-3 py-1 uppercase">
                  {target.status}
                </div>
              </div>
              
              {/* Red strike through effect */}
              <div className={`absolute top-1/2 left-0 w-full h-2 bg-kb-red transform -translate-y-1/2 transition-all duration-500 ease-out ${target.status === 'DEAD' ? 'scale-x-100' : 'scale-x-0 origin-left'}`}></div>
              
              {/* Description reveals on hover/active if alive */}
              {target.status === 'ALIVE' && (
                 <div className="mt-2 text-base font-condensed text-gray-500 pl-10">
                    Target Profile: {target.description}
                 </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center font-condensed italic text-gray-500">
          "Click a name to cross them off the list."
        </div>
      </div>
      
      {/* Background Blood stain */}
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-20 pointer-events-none z-0">
         <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#D00000" d="M39.6,-65.3C51.9,-60.8,62.6,-51.6,70.3,-40.4C78,-29.2,82.6,-15.9,81.3,-3.1C80,9.7,72.7,22,63.6,32.1C54.5,42.2,43.5,50.1,31.9,56.1C20.3,62.1,8.1,66.2,-2.7,70.9C-13.5,75.6,-22.9,80.9,-33.2,78.1C-43.5,75.3,-54.7,64.4,-63.6,52.2C-72.5,40,-79.1,26.5,-79.9,12.6C-80.7,-1.3,-75.7,-15.6,-67.4,-27.2C-59.1,-38.8,-47.5,-47.7,-36.1,-52.7C-24.7,-57.7,-13.5,-58.8,0.1,-59C13.7,-59.2,27.3,-69.8,39.6,-65.3Z" transform="translate(100 100)" />
         </svg>
      </div>
    </section>
  );
};

export default DeathList;