import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, Share2, Info } from 'lucide-react';

const ModernCarousel = ({ items = [], onItemClick, showContent = true }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const containerRef = useRef(null);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % items.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    // Drag constraints and logic
    const dragX = useMotionValue(0);
    const dragProgress = useTransform(dragX, [-100, 100], [0.5, -0.5]);

    const onDragEnd = (event, info) => {
        const threshold = 50;
        if (info.offset.x < -threshold) {
            nextSlide();
        } else if (info.offset.x > threshold) {
            prevSlide();
        }
    };

    if (!items || items.length === 0) return null;

    return (
        <div
            className="relative w-full max-w-6xl mx-auto h-[500px] md:h-[600px] flex items-center justify-center overflow-visible px-4 select-none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            ref={containerRef}
        >
            <div className="relative w-full h-full flex items-center justify-center perspective-[2000px]">
                <AnimatePresence initial={false} custom={direction}>
                    {items.map((item, index) => {
                        // Calculate distance from center
                        let offset = index - currentIndex;
                        if (offset > items.length / 2) offset -= items.length;
                        if (offset < -items.length / 2) offset += items.length;

                        const isCenter = index === currentIndex;
                        const isPrev = offset === -1 || (currentIndex === 0 && index === items.length - 1);
                        const isNext = offset === 1 || (currentIndex === items.length - 1 && index === 0);

                        // Hide items that are too far
                        const isVisible = isCenter || isPrev || isNext;

                        if (!isVisible) return null;

                        return (
                            <motion.div
                                key={index}
                                custom={direction}
                                initial={{
                                    opacity: 0,
                                    scale: 0.8,
                                    x: direction > 0 ? 300 : -300,
                                    rotateY: direction > 0 ? 45 : -45,
                                    z: -200
                                }}
                                animate={{
                                    opacity: isCenter ? 1 : 0.6,
                                    scale: isCenter ? 1 : 0.85,
                                    x: isCenter ? 0 : offset * 250,
                                    rotateY: isCenter ? 0 : offset * -30,
                                    z: isCenter ? 0 : -200,
                                    filter: isCenter ? 'blur(0px)' : 'blur(2px)',
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.8,
                                    x: direction > 0 ? -300 : 300,
                                    rotateY: direction > 0 ? -45 : 45,
                                    z: -200
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30,
                                    opacity: { duration: 0.3 }
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                onDragEnd={onDragEnd}
                                style={{ x: isCenter ? dragX : offset * 250 }}
                                className={`absolute w-full max-w-[320px] md:max-w-[400px] h-[400px] md:h-[500px] cursor-grab active:cursor-grabbing z-${isCenter ? 30 : 10}`}
                            >
                                <div
                                    onClick={() => !showContent && onItemClick && onItemClick(item)}
                                    className={`w-full h-full bg-[#151E38]/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col group/card transition-all duration-500 hover:border-brand-secondary/50 ${!showContent ? 'cursor-pointer' : ''}`}
                                >
                                    {/* Image Section */}
                                    <div className={`${showContent ? 'h-2/5 md:h-1/2' : 'h-full'} relative overflow-hidden p-3`}>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover/card:scale-110"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-t ${showContent ? 'from-[#151E38] via-transparent' : 'from-[#151E38]/20 via-transparent'} to-transparent opacity-60`}></div>

                                        {!showContent && (
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                                                <div className="bg-brand-secondary text-brand-primary p-4 rounded-full shadow-2xl">
                                                    <ChevronRight size={32} />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Content Section */}
                                    {showContent && (
                                        <div className="flex-1 p-6 md:p-8 flex flex-col">
                                            <div className="flex items-start gap-4 mb-4">
                                                <div className="p-3 bg-brand-secondary/10 rounded-xl group-hover/card:bg-brand-secondary/20 transition-colors">
                                                    <img src={item.icon} alt="" className="w-8 h-8 md:w-10 md:h-10" />
                                                </div>
                                                <h3 className="text-xl md:text-2xl font-bold text-white group-hover/card:text-brand-secondary transition-colors">
                                                    {item.title}
                                                </h3>
                                            </div>

                                            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 line-clamp-3 md:line-clamp-none flex-1">
                                                {item.description}
                                            </p>

                                            <div className="flex items-center justify-between mt-auto">
                                                <div className="flex gap-2">
                                                    <button className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-all">
                                                        <Share2 size={18} />
                                                    </button>
                                                    <button className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-all">
                                                        <Info size={18} />
                                                    </button>
                                                </div>

                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        onItemClick && onItemClick(item);
                                                    }}
                                                    className="flex items-center gap-2 text-brand-secondary font-bold text-sm tracking-widest uppercase hover:gap-3 transition-all group/btn"
                                                >
                                                    Explore
                                                    <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="absolute inset-x-0 bottom-0 top-0 flex items-center justify-between px-4 md:-mx-12 pointer-events-none">
                <button
                    onClick={prevSlide}
                    className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-white pointer-events-auto transition-all hover:scale-110 active:scale-95 group"
                >
                    <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <button
                    onClick={nextSlide}
                    className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-white pointer-events-auto transition-all hover:scale-110 active:scale-95 group"
                >
                    <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
            </div>

            {/* Progress Indicators */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-3">
                {items.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setDirection(index > currentIndex ? 1 : -1);
                            setCurrentIndex(index);
                        }}
                        className={`transition-all duration-300 rounded-full ${index === currentIndex
                            ? 'w-10 h-2 bg-brand-secondary'
                            : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ModernCarousel;
