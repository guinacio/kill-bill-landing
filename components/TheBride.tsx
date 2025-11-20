import React from 'react';

const TheBride: React.FC = () => {
    return (
        <div className="min-h-screen bg-kb-black text-white pt-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-kb-yellow opacity-10"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>

                <div className="text-center z-10">
                    <h1 className="font-anton text-8xl md:text-9xl text-kb-yellow mb-2 tracking-wider">BEATRIX KIDDO</h1>
                    <h2 className="font-condensed text-4xl text-white uppercase tracking-[0.5em] bg-kb-red inline-block px-4 py-1 transform -skew-x-12">
                        Black Mamba
                    </h2>
                </div>
            </section>

            {/* Stats Grid */}
            <section className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-gray-900 p-8 border-l-4 border-kb-yellow">
                        <h3 className="font-anton text-2xl text-gray-500 mb-2">STATUS</h3>
                        <p className="font-condensed text-4xl text-white">ALIVE</p>
                    </div>
                    <div className="bg-gray-900 p-8 border-l-4 border-kb-yellow">
                        <h3 className="font-anton text-2xl text-gray-500 mb-2">CONFIRMED KILLS</h3>
                        <p className="font-condensed text-4xl text-white">70+</p>
                    </div>
                    <div className="bg-gray-900 p-8 border-l-4 border-kb-yellow">
                        <h3 className="font-anton text-2xl text-gray-500 mb-2">WEAPON</h3>
                        <p className="font-condensed text-4xl text-white">HATTORI HANZO KATANA</p>
                    </div>
                </div>

                {/* Content Split */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="font-anton text-5xl text-kb-yellow mb-8">THE ORIGIN</h3>
                        <div className="font-condensed text-xl text-gray-300 space-y-6 leading-relaxed">
                            <p>
                                Once a member of the Deadly Viper Assassination Squad, Beatrix Kiddo was Bill's finest student and lover.
                                Known by the codename <span className="text-kb-yellow">Black Mamba</span>, she was the deadliest woman in the world.
                            </p>
                            <p>
                                After discovering she was pregnant with Bill's child, she attempted to leave the life of an assassin behind.
                                This betrayal led to the massacre at the Two Pines Wedding Chapel, where Bill shot her in the head, leaving her for dead.
                            </p>
                            <p>
                                Four years later, she awoke from a coma with a single purpose: <span className="text-kb-red font-bold">REVENGE</span>.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-anton text-5xl text-kb-yellow mb-8">TECHNIQUES</h3>
                        <ul className="space-y-4">
                            <li className="bg-gray-900 p-4 border-r-4 border-kb-red hover:bg-gray-800 transition-colors">
                                <h4 className="font-anton text-xl text-white">PAI MEI'S KUNG FU</h4>
                                <p className="font-condensed text-gray-400">Mastery of the Eagle's Claw and Bak Mei styles.</p>
                            </li>
                            <li className="bg-gray-900 p-4 border-r-4 border-kb-red hover:bg-gray-800 transition-colors">
                                <h4 className="font-anton text-xl text-white">KENJUTSU</h4>
                                <p className="font-condensed text-gray-400">Unrivaled swordsmanship with the katana.</p>
                            </li>
                            <li className="bg-gray-900 p-4 border-r-4 border-kb-red hover:bg-gray-800 transition-colors">
                                <h4 className="font-anton text-xl text-white">FIVE-POINT-PALM EXPLODING HEART</h4>
                                <p className="font-condensed text-gray-400">The deadliest blow in all of martial arts. The victim takes five steps and their heart explodes.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TheBride;
