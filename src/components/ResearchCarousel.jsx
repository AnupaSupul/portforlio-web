import React, { useState, useEffect, useRef } from 'react';

// 2. Animated Research Carousel (Cinema Mode)
const ResearchCarousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % items.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % items.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [isPaused, items.length]);

    const handleTouchStart = (e) => { touchStartX.current = e.targetTouches[0].clientX; };
    const handleTouchMove = (e) => { touchEndX.current = e.targetTouches[0].clientX; };
    const handleTouchEnd = () => {
        if (touchStartX.current - touchEndX.current > 50) nextSlide();
        if (touchStartX.current - touchEndX.current < -50) prevSlide();
    };

    return (
        <div
            className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-2xl border border-orange-500/30 bg-black group shadow-xl"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {/* Cinematic Image Layer */}
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 opacity-80"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10"></div>

                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000"
                    />

                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                        <div className="inline-block px-3 py-1 rounded-full bg-brand-orange text-white text-xs font-mono font-bold uppercase mb-2">
                            Field Specimen {index + 1}
                        </div>
                        <h4 className="text-2xl md:text-3xl font-bold text-white mb-2 font-sans">{item.title}</h4>
                        <p className="text-slate-300 text-sm max-w-xl font-sans">{item.description}</p>
                    </div>
                </div>
            ))}

            {/* Navigation Dots */}
            <div className="absolute bottom-8 right-8 z-30 flex items-center gap-2">
                {items.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            idx === currentIndex ? 'w-8 bg-brand-orange' : 'w-2 bg-white/40 hover:bg-white'
                        }`}
                        aria-label={`Slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ResearchCarousel;
