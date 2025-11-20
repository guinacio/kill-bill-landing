import React from 'react';

const Enemies: React.FC = () => {
    const vipers = [
        {
            name: "O-REN ISHII",
            codename: "COTTONMOUTH",
            status: "DECEASED",
            cause: "Scalped by Hattori Hanzo Sword",
            desc: "Leader of the Tokyo Yakuza and the Crazy 88. A master sniper and swordswoman."
        },
        {
            name: "VERNITA GREEN",
            codename: "COPPERHEAD",
            status: "DECEASED",
            cause: "Knife to the heart",
            desc: "Expert in knife combat. Attempted to live a normal suburban life as Jeannie Bell."
        },
        {
            name: "BUDD",
            codename: "SIDEWINDER",
            status: "DECEASED",
            cause: "Black Mamba snake bite",
            desc: "Bill's brother. A bouncer with a pawned Hanzo sword. Lived in a trailer."
        },
        {
            name: "ELLE DRIVER",
            codename: "CALIFORNIA MOUNTAIN SNAKE",
            status: "UNKNOWN",
            cause: "Blinded (Both eyes plucked out)",
            desc: "Bill's lover and rival to The Bride. Ruthless, treacherous, and trained by Pai Mei."
        },
        {
            name: "BILL",
            codename: "SNAKE CHARMER",
            status: "DECEASED",
            cause: "Five-Point-Palm Exploding Heart Technique",
            desc: "Leader of the DiVAS. The Bride's former lover and father of her child."
        }
    ];

    return (
        <div className="min-h-screen bg-kb-black text-white pt-20">
            <section className="py-12 px-6 max-w-7xl mx-auto">
                <h1 className="font-anton text-6xl md:text-8xl text-kb-yellow mb-12 text-center">THE DEADLY VIPERS</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {vipers.map((viper, idx) => (
                        <div key={idx} className="bg-gray-900 border-t-4 border-kb-red p-6 hover:bg-gray-800 transition-all group">
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="font-anton text-3xl text-white group-hover:text-kb-yellow transition-colors">{viper.name}</h2>
                                <span className="font-condensed text-xs bg-gray-800 px-2 py-1 rounded text-gray-400 border border-gray-700">
                                    {viper.codename}
                                </span>
                            </div>

                            <div className="mb-6">
                                <span className={`font-bold font-condensed px-3 py-1 text-sm ${viper.status === 'DECEASED' ? 'bg-red-900/30 text-red-500' : 'bg-yellow-900/30 text-yellow-500'
                                    }`}>
                                    {viper.status}
                                </span>
                            </div>

                            <p className="font-condensed text-gray-400 mb-6 h-20">
                                {viper.desc}
                            </p>

                            <div className="border-t border-gray-800 pt-4">
                                <p className="text-xs text-gray-500 uppercase font-bold mb-1">Fate</p>
                                <p className="font-hand text-kb-red text-lg">{viper.cause}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Others Section */}
                <div className="mt-20 border-t border-gray-800 pt-12">
                    <h3 className="font-anton text-4xl text-gray-600 mb-8 text-center">HONORABLE MENTIONS</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-gray-900/50 p-6 border-l-2 border-gray-700">
                            <h4 className="font-anton text-2xl text-white">GOGO YUBARI</h4>
                            <p className="font-condensed text-gray-400">O-Ren's psychotic bodyguard. Wields a meteor hammer.</p>
                        </div>
                        <div className="bg-gray-900/50 p-6 border-l-2 border-gray-700">
                            <h4 className="font-anton text-2xl text-white">JOHNNY MO</h4>
                            <p className="font-condensed text-gray-400">Leader of the Crazy 88. Personal army of O-Ren Ishii.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Enemies;
