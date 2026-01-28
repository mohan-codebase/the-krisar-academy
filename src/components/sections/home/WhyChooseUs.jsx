import React, { useState } from 'react';
import {
    Leaf,
    Baby,
    Building2,
    Trophy,
    Stethoscope,
    ArrowLeft,
    ArrowRight,
    GraduationCap
} from 'lucide-react';
// import Button from '../../ui/Button';

const features = [
    {
        icon: Stethoscope,
        type: 'component',
        title: <p>Hygienic <span className='text-brand-secondary font-bold'>Environment</span></p>,
        description: "Clean, Safe & Healthy Campus",
        color: "text-blue-400"
    },
    {
        icon: Leaf,
        type: 'component',
        title: <p>Green <span className='text-brand-secondary font-bold'>Campus</span></p>,
        description: "Learn in Nature's Calm",
        color: "text-green-400"
    },
    {
        icon: Baby,
        type: 'component',
        title: <p>Montessori <span className='text-brand-secondary font-bold'>Kindergarten</span></p>,
        description: "Early Learning with Trained Teachers",
        color: "text-yellow-400"
    },
    {
        icon: Building2,
        type: 'component',
        title: <p>Indoor <span className='text-brand-secondary font-bold'>Auditorium</span></p>,
        description: "1000-Seat Space for Events & Play",
        color: "text-purple-400"
    },
    {
        icon: Trophy,
        type: 'component',
        title: <p>Competitive <span className='text-brand-secondary font-bold'>Exams</span></p>,
        description: "Foundation for IIT-JEE, NEET & More",
        color: "text-red-400"
    }
];

const WhyChooseUs = () => {
    const [activeIndex, setActiveIndex] = useState(2); // Start with middle item
    const radius = 700; // Radius of the circle
    const cardAngle = 35; // Angle between cards

    const handlePrev = () => {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : features.length - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev < features.length - 1 ? prev + 1 : 0));
    };

    return (
        <section className="bg-[url('./assets/images/home/WhyChooseUs/bg.avif')] bg-cover bg-center md:py-20 py-10 relative overflow-hidden min-h-[600px] text-white">
            <div className="max-w-[1440px] mx-auto px-4 relative z-10 flex flex-col items-center">

                {/* Header */}
                <div className="text-center mb-12 md:mb-20">
                    <div className="inline-flex items-center gap-2 border border-white/20 rounded px-6 py-2 bg-white/5 backdrop-blur-sm mb-6">
                        <GraduationCap size={16} className="text-brand-secondary" />
                        <span className="uppercase tracking-wider text-sm text-gray-300">Why Choose Us</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Why Choose <span className="text-brand-secondary">Krisar Academy</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        World-class facilities and comprehensive educational programs designed to nurture excellence in every student
                    </p>
                </div>

                {/* Curved Carousel Container */}
                <div className="relative w-full md:h-[400px] h-[300px] flex justify-center md:mt-8 mt-0">
                    {/* The "Wheel" */}
                    <div
                        className="relative w-full h-full flex justify-center transition-transform duration-500 ease-out"
                        style={{
                            // We don't rotate the container itself for this effect, 
                            // instead we position items relative to a center point far below.
                            // Actually, rotating the container to counter-rotate cards is a valid strategy,
                            // OR we can calculate positions based on active index.
                            // Let's go with calculating absolute positions for simpler "React" control.
                        }}
                    >
                        {features.map((feature, index) => {
                            // Calculate angle relative to active index
                            // If index === activeIndex, angle is 0 (top center)
                            const offset = index - activeIndex;
                            const angle = offset * cardAngle;

                            // Calculate opacity/scale/visibility
                            const isActive = index === activeIndex;
                            const isVisible = Math.abs(offset) <= 2; // Only show close neighbors

                            return (
                                <div
                                    key={index}
                                    className={`absolute top-0 left-1/2 w-64 md:w-72 p-6 rounded-2xl border transition-all duration-500 ease-out flex flex-col items-center text-center gap-4 cursor-pointer
                                        ${isActive
                                            ? 'bg-white/0 border-brand-secondary shadow-[0_0_30px_rgba(255,165,0,0.2)] z-20 scale-100 opacity-100'
                                            : 'bg-white/5 border-white/10 z-10 scale-90 opacity-60 hover:opacity-80'
                                        }
                                    `}
                                    style={{
                                        // Mathematics of the arc:
                                        // transform-origin is point around which we rotate. 
                                        // We want the point to be far below the card.
                                        transformOrigin: `50% ${radius}px`,
                                        transform: `translateX(-50%) rotate(${angle}deg)`,
                                        // Ensure standard stacking context logic doesn't break origin
                                    }}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <div
                                        className={`p-4 rounded-full ${feature.color} mb-2 flex items-center justify-center transition-transform duration-500 ease-out`}
                                        style={{ transform: `rotate(${-angle}deg)` }}
                                    >
                                        <feature.icon size={32} />
                                    </div>
                                    <h3 className={`text-lg font-bold ${isActive ? 'text-white' : 'text-gray-300'}`}>
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-gray-400">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-4 mt-8 md:mt-12 z-20">
                    <button
                        onClick={handlePrev}
                        className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-secondary transition-colors group"
                    >
                        <ArrowLeft size={24} className="text-gray-400 group-hover:text-brand-secondary" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-secondary transition-colors group"
                    >
                        <ArrowRight size={24} className="text-gray-400 group-hover:text-brand-secondary" />
                    </button>
                </div>

            </div>

            {/* Background Gradient/Glow */}
            {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/20 blur-[10px] rounded-full pointer-events-none" /> */}
        </section>
    );
};

export default WhyChooseUs;