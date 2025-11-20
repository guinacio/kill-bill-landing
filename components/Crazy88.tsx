import React, { useState, useEffect } from 'react';

const Crazy88Member: React.FC = () => {
    const [isCut, setIsCut] = useState(false);
    const [cutAngle, setCutAngle] = useState(0);
    const [cutOffset, setCutOffset] = useState(0); // Vertical offset for the cut

    useEffect(() => {
        // Random angle between -30 and 30 degrees
        setCutAngle(Math.random() * 60 - 30);
        // Random offset between 30% and 70% height
        setCutOffset(Math.random() * 40 + 30);
    }, []);

    const handleCut = () => {
        if (!isCut) setIsCut(true);
    };

    // Calculate clip paths based on angle and offset
    // This is a simplified approximation. For a perfect diagonal cut across a rectangle,
    // the math is a bit more complex, but for a visual effect, we can use a rotated line.
    // Actually, rotating the container of the halves might be easier than calculating complex polygon coordinates.
    // Let's try a simpler approach: Two divs, one for top, one for bottom, clipped.

    // Better approach for "cut":
    // 1. Container with the silhouette image/color.
    // 2. On click, replace with TWO containers (Top and Bottom).
    // 3. Top container has clip-path: polygon(0 0, 100% 0, 100% Y2, 0 Y1);
    // 4. Bottom container has clip-path: polygon(0 Y1, 100% Y2, 100% 100%, 0 100%);
    // 5. Animate Top container sliding down/rotating.

    // Let's calculate Y1 and Y2 (percentages) based on angle.
    // Center of cut is at 50% width, `cutOffset`% height.
    // tan(angle) = dy / dx. dx is 50%.
    // deltaY = 50 * tan(angle).
    // Y1 (left) = cutOffset - deltaY
    // Y2 (right) = cutOffset + deltaY

    const rad = (cutAngle * Math.PI) / 180;
    const deltaY = 50 * Math.tan(rad);
    const y1 = cutOffset + deltaY;
    const y2 = cutOffset - deltaY; // Inverted because Y grows downwards

    return (
        <div
            className="relative w-12 h-32 mx-1 cursor-pointer group"
            onClick={handleCut}
        >
            {/* Blood Spray Background (Hidden until cut) */}
            <div
                className={`absolute inset-0 bg-kb-red transition-opacity duration-100 ${isCut ? 'opacity-100' : 'opacity-0'}`}
                style={{
                    clipPath: `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`, // Full fill
                    transform: isCut ? 'scale(1.5)' : 'scale(1)',
                    transition: 'transform 0.2s ease-out, opacity 0.1s'
                }}
            ></div>

            {/* Uncut Silhouette (Visible only when NOT cut) */}
            {!isCut && (
                <div className="absolute inset-0 bg-black rounded-t-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"></div>
            )}

            {/* Cut Halves (Visible only when CUT) */}
            {isCut && (
                <>
                    {/* Top Half */}
                    <div
                        className="absolute inset-0 bg-black rounded-t-full"
                        style={{
                            clipPath: `polygon(0% 0%, 100% 0%, 100% ${y2}%, 0% ${y1}%)`,
                            transform: isCut ? `translate(-5px, 10px) rotate(${cutAngle * -0.5}deg)` : 'none',
                            transition: 'transform 0.8s cubic-bezier(0.6, -0.28, 0.735, 0.045)',
                            transformOrigin: 'bottom center'
                        }}
                    ></div>

                    {/* Bottom Half */}
                    <div
                        className="absolute inset-0 bg-black rounded-t-full"
                        style={{
                            clipPath: `polygon(0% ${y1}%, 100% ${y2}%, 100% 100%, 0% 100%)`
                        }}
                    ></div>
                </>
            )}
        </div>
    );
};

const Crazy88: React.FC = () => {
    return (
        <section className="w-full py-20 bg-kb-yellow relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
            <div className="container mx-auto px-4 relative z-10 text-center">
                <h3 className="font-anton text-6xl md:text-8xl text-black mb-6">CRAZY 88</h3>
                <p className="font-condensed text-black text-xl max-w-2xl mx-auto mb-12 font-bold">
                    "Leave the limbs you've lost. They belong to me now."
                </p>
                <div className="flex justify-center gap-2 overflow-hidden whitespace-nowrap opacity-80 h-40 items-end">
                    {[...Array(10)].map((_, i) => (
                        <Crazy88Member key={i} />
                    ))}
                </div>
                <p className="mt-8 font-condensed text-sm text-black/60 uppercase tracking-widest animate-pulse">
                    Click to eliminate
                </p>
            </div>
            {/* Silhouette Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
        </section>
    );
};

export default Crazy88;
