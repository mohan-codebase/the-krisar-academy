import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, User } from 'lucide-react';

import img1 from '../../../assets/images/home/SuccessStories/revathi.png';
import img2 from '../../../assets/images/home/SuccessStories/vijaya.png';
import img3 from '../../../assets/images/home/SuccessStories/sarika.png';
import img4 from '../../../assets/images/home/SuccessStories/lakshmi.png';
import img5 from '../../../assets/images/home/SuccessStories/Ellipse 16.svg';

import img6 from '../../../assets/images/home/SuccessStories/Ellipse 17.svg';
import img7 from '../../../assets/images/home/SuccessStories/Ellipse 18.svg';

const stories = [
    {
        id: 1,
        name: "Revathi G",
        role: "Parent",
        image: img1,
        rating: 5.0,
        review: "It is truly innovative and creative projects explanations in all the levels. The day was mesmerizing. Kudos for the team."
    },
    {
        id: 2,
        name: "vijaya kumar",
        role: "Parent",
        image: img2,
        rating: 3.0,
        review: "Good experience overall."
    },
    {
        id: 3,
        name: "SARIKA SABAPATHY",
        role: "Parent",
        image: img3,
        rating: 5.0,
        review: "The students are excellent The performance were too good ❤️❤️"
    },
    {
        id: 4,
        name: "Lakshmi Lak",
        role: "Parent",
        image: img4,
        rating: 5.0,
        review: "It was a truly mesmerizing and incredible job by our krisarites"
    }
];

const SuccessStories = () => {
    const [activeIndex, setActiveIndex] = useState(1); // Start with the second item active

    const handlePrev = () => {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : stories.length - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev < stories.length - 1 ? prev + 1 : 0));
    };

    return (
        <section className="bg-[url('./assets/images/home/NewsUpdates/bg.avif')] bg-cover bg-center md:py-20 py-16 relative overflow-hidden text-center text-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col items-center">

                {/* Header */}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 border border-white/20 rounded px-4 py-1.5 bg-white/5 backdrop-blur-sm mb-6">
                        <User size={16} className="text-gray-300" />
                        <span className="uppercase tracking-wider text-sm text-gray-300">Our Parents Say</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Our Success Stories
                    </h2>

                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Our alumni reflect the learning, values, and confidence built here,
                        inspiring future generations to dream bigger and achieve more.
                    </p>
                </div>

                {/* Avatar Row */}
                <div className="flex justify-center items-center gap-4 mb-16 flex-wrap">
                    {stories.map((story, index) => (
                        <div
                            key={story.id}
                            onClick={() => setActiveIndex(index)}
                            className={`relative rounded-full overflow-hidden cursor-pointer transition-all duration-300 border-2
                                ${index === activeIndex
                                    ? 'w-20 h-20 border-brand-secondary scale-110 shadow-[0_0_15px_rgba(255,200,87,0.5)] z-10'
                                    : 'w-14 h-14 border-transparent opacity-50 hover:opacity-80 grayscale hover:grayscale-0'
                                }
                            `}
                        >
                            <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>

                {/* Testimonial Cards Carousel */}
                <div className="relative w-full max-w-6xl mx-auto h-[400px] md:h-[320px] flex items-center justify-center perspective-1000">
                    {stories.map((story, index) => {
                        // Calculate offset from active index
                        let offset = index - activeIndex;
                        // Handle wrapping for infinite-like feel in calculation (optional, but keeping simple for now logic-wise)
                        // For true infinite loop visuals we need more complex logic, 
                        // but standard carousel logic: previous, current, next is enough.

                        // We only show current, prev, and next for the layout
                        if (Math.abs(offset) > 1 && !(index === 0 && activeIndex === stories.length - 1) && !(index === stories.length - 1 && activeIndex === 0)) {
                            // This checks if item is far away. 
                            // Let's simplified visibility: Show only Active, Prev (or last if active is first), Next (or first if active is last)
                        }

                        // Determine visual state
                        let isActive = index === activeIndex;
                        let isPrev = index === activeIndex - 1 || (activeIndex === 0 && index === stories.length - 1);
                        let isNext = index === activeIndex + 1 || (activeIndex === stories.length - 1 && index === 0);

                        // If it's not one of these 3, hide it or push it back
                        if (!isActive && !isPrev && !isNext) return null;

                        let transformClass = '';
                        let opacityClass = '';
                        let zIndexClass = '';

                        if (isActive) {
                            transformClass = 'scale-100 translate-x-0';
                            opacityClass = 'opacity-100';
                            zIndexClass = 'z-20';
                        } else if (isPrev) {
                            transformClass = 'scale-90 -translate-x-full md:-translate-x-[60%] blur-[20px]';
                            opacityClass = 'opacity-40';
                            zIndexClass = 'z-10';
                        } else if (isNext) {
                            transformClass = 'scale-90 translate-x-full md:translate-x-[60%] blur-[20px]';
                            opacityClass = 'opacity-40';
                            zIndexClass = 'z-10';
                        }

                        return (
                            <div
                                key={story.id}
                                className={`absolute w-full md:w-[420px] p-8 rounded-3xl transition-all duration-500 ease-out flex flex-col items-start text-left gap-4
                                    ${isActive
                                        ? 'bg-[#1e293b] border-2 border-brand-secondary shadow-lg z-20 scale-100 opacity-100'
                                        : 'bg-[#151E38]/50 border border-white/5 z-10 scale-95 opacity-60'
                                    }
                                    ${isPrev ? '-translate-x-[110%] md:-translate-x-[105%]' : ''}
                                    ${isNext ? 'translate-x-[110%] md:translate-x-[105%]' : ''}
                                `}
                            >
                                {/* Header: Image + Name */}
                                <div className="flex items-center gap-4 w-full mb-2">
                                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/10 shrink-0">
                                        <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-xl font-bold text-white leading-tight">{story.name}</h3>
                                        <p className="text-gray-400 text-sm">{story.role}</p>
                                    </div>
                                </div>

                                {/* Stars */}
                                <div className="flex gap-1 text-brand-secondary">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={18} fill="currentColor" className="text-yellow-500" />
                                    ))}
                                    <span className="text-gray-400 text-sm ml-2 mt-0.5">{story.rating}</span>
                                </div>

                                {/* Review */}
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {story.review}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-4 mt-8">
                    <button
                        onClick={handlePrev}
                        className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-secondary transition-colors"
                    >
                        <ChevronLeft size={24} className="text-gray-400 hover:text-white" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-secondary transition-colors"
                    >
                        <ChevronRight size={24} className="text-gray-400 hover:text-white" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;
