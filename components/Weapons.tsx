import React from 'react';

const Weapons: React.FC = () => {
    return (
        <div className="min-h-screen bg-kb-black text-white pt-20">
            <section className="py-12 px-6 max-w-7xl mx-auto">
                <h1 className="font-anton text-6xl md:text-8xl text-kb-yellow mb-4 text-center">THE ARMORY</h1>
                <p className="font-condensed text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
                    "I can tell you with no ego, this is my finest sword. If on your journey, you should encounter God, God will be cut." — Hattori Hanzo
                </p>

                <div className="space-y-20">
                    {/* The Bride's Sword */}
                    <div className="flex flex-col md:flex-row gap-10 items-center">
                        <div className="w-full md:w-1/2 aspect-video bg-gray-800 relative overflow-hidden border-4 border-kb-yellow group">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="font-anton text-9xl text-white opacity-10">LION</span>
                            </div>
                            {/* Placeholder for sword image */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h2 className="font-anton text-4xl text-white mb-2">THE BRIDE'S KATANA</h2>
                            <p className="text-kb-yellow font-condensed text-xl mb-6">FORGED BY HATTORI HANZO</p>
                            <p className="font-condensed text-gray-300 mb-6 leading-relaxed">
                                A custom-made katana created by Hattori Hanzo after breaking his oath.
                                The blade features an engraved lion, symbolizing the Bride's ferocity.
                                It is the only sword Hanzo made after his retirement, described as his "finest sword."
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-900 p-3 border-l-2 border-kb-red">
                                    <span className="block text-xs text-gray-500 uppercase">Length</span>
                                    <span className="font-bold">27 Inches</span>
                                </div>
                                <div className="bg-gray-900 p-3 border-l-2 border-kb-red">
                                    <span className="block text-xs text-gray-500 uppercase">Symbol</span>
                                    <span className="font-bold">Shisa (Lion-Dog)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bill's Sword */}
                    <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
                        <div className="w-full md:w-1/2 aspect-video bg-gray-800 relative overflow-hidden border-4 border-gray-700 group">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="font-anton text-9xl text-white opacity-10">DEVIL</span>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 text-right md:text-left">
                            <h2 className="font-anton text-4xl text-white mb-2">BILL'S KATANA</h2>
                            <p className="text-gray-400 font-condensed text-xl mb-6">FORGED BY HATTORI HANZO</p>
                            <p className="font-condensed text-gray-300 mb-6 leading-relaxed">
                                Bill's personal sword, featuring a devil face carved onto the scabbard.
                                Like all Hanzo steel, it is a masterpiece of destruction.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-900 p-3 border-r-2 md:border-r-0 md:border-l-2 border-gray-600">
                                    <span className="block text-xs text-gray-500 uppercase">Owner</span>
                                    <span className="font-bold">Snake Charmer</span>
                                </div>
                                <div className="bg-gray-900 p-3 border-r-2 md:border-r-0 md:border-l-2 border-gray-600">
                                    <span className="block text-xs text-gray-500 uppercase">Symbol</span>
                                    <span className="font-bold">Devil / Demon</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Gogo's Weapon */}
                    <div className="flex flex-col md:flex-row gap-10 items-center">
                        <div className="w-full md:w-1/2 aspect-video bg-gray-800 relative overflow-hidden border-4 border-gray-700 group">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="font-anton text-9xl text-white opacity-10">METEOR</span>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h2 className="font-anton text-4xl text-white mb-2">METEOR HAMMER</h2>
                            <p className="text-kb-red font-condensed text-xl mb-6">WIELDED BY GOGO YUBARI</p>
                            <p className="font-condensed text-gray-300 mb-6 leading-relaxed">
                                A modern variation of the traditional Chinese meteor hammer.
                                It consists of a heavy metal ball with retractable blades attached to a chain.
                                Brutal, unpredictable, and terrifying.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-900 p-3 border-l-2 border-kb-red">
                                    <span className="block text-xs text-gray-500 uppercase">Type</span>
                                    <span className="font-bold">Blunt / Slashing</span>
                                </div>
                                <div className="bg-gray-900 p-3 border-l-2 border-kb-red">
                                    <span className="block text-xs text-gray-500 uppercase">Range</span>
                                    <span className="font-bold">Mid-Long Range</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Weapons;
