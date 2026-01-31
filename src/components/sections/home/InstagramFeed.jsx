import React, { useState } from 'react';
import { UserCheck, Play, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Button from '../../ui/Button';

import reel1 from '../../../assets/images/home/instagram/reel-1.jpg';
import reel2 from '../../../assets/images/home/instagram/reel-2.jpg';
import reel3 from '../../../assets/images/home/instagram/reel-3.jpg';
import reel4 from '../../../assets/images/home/instagram/reel-4.jpg';
import reel5 from '../../../assets/images/home/instagram/reel-5.jpg';

// Mock data for Instagram posts
const posts = [
    {
        id: 1,
        image: reel1,
        link: "https://www.instagram.com/p/DAbHgGOvVIi/"
    },
    {
        id: 2,
        image: reel2,
        link: "https://www.instagram.com/p/C8mKbRWPSVF/"
    },
    {
        id: 3,
        image: reel3,
        link: "https://www.instagram.com/p/DTVH1AkkxNb/"
    },
    {
        id: 4,
        image: reel5,
        link: "https://www.instagram.com/reel/DTQAVQdkzuw/"
    }
];

const InstagramFeed = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const handlePrev = () => {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : posts.length - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev < posts.length - 1 ? prev + 1 : 0));
    };

    return (
        <section className="bg-[url('./assets/images/home/NewsUpdates/bg.avif')] bg-cover bg-center md:py-20 relative overflow-hidden text-center text-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col items-center">

                {/* Header */}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 border border-white/20 rounded px-4 py-1.5 bg-white/5 backdrop-blur-sm mb-6">
                        <UserCheck size={16} className="text-gray-300" />
                        <span className="uppercase tracking-wider text-sm text-gray-300">FEEL THE EXPERIENCE</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        See More. <span className="text-brand-secondary">Know More.</span>
                    </h2>

                    <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
                        Discover real stories of discipline, confidence, and success from our students and mentors. Experience how learning at Krisar shapes futures beyond the classroom.                    </p>
                </div>

                {/* Carousel */}
                <div className="relative w-full max-w-6xl mx-auto h-[400px] md:h-[550px] flex items-center justify-center mb-12">

                    {/* Navigation Buttons (Desktop: Absolute sides, Mobile: Below?) - Design has them on sides */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 md:left-4 z-30 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-secondary transition-colors"
                    >
                        <ChevronLeft size={24} className="text-gray-400 hover:text-white" />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-0 md:right-4 z-30 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-secondary transition-colors"
                    >
                        <ChevronRight size={24} className="text-gray-400 hover:text-white" />
                    </button>


                    {posts.map((post, index) => {
                        // Logic similar to SuccessStories for 3-item focus
                        let offset = index - activeIndex;

                        // Calculate proper offset for circular wrapping
                        if (offset > posts.length / 2) offset -= posts.length;
                        if (offset < -posts.length / 2) offset += posts.length;

                        // Identify positions
                        const isActive = offset === 0;
                        const isPrev = offset === -1;
                        const isNext = offset === 1;

                        // Only render active, prev, next
                        if (!isActive && !isPrev && !isNext) return null;

                        let transformClass = '';
                        let opacityClass = '';
                        let zIndexClass = '';
                        let borderClass = 'border-transparent';

                        if (isActive) {
                            transformClass = 'scale-100 translate-x-0';
                            opacityClass = 'opacity-100';
                            zIndexClass = 'z-20';
                            borderClass = 'border-brand-secondary';
                        } else if (isPrev) {
                            transformClass = 'scale-90 -translate-x-full md:-translate-x-[80%] blur-[1px]';
                            opacityClass = 'opacity-40';
                            zIndexClass = 'z-10';
                        } else if (isNext) {
                            transformClass = 'scale-90 translate-x-full md:translate-x-[80%] blur-[1px]';
                            opacityClass = 'opacity-40';
                            zIndexClass = 'z-10';
                        }

                        return (
                            <a
                                key={post.id}
                                href={post.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`absolute w-72 md:w-96 aspect-[4/5] rounded-2xl overflow-hidden transition-all duration-500 ease-out border-2 ${borderClass} ${transformClass} ${opacityClass} ${zIndexClass}`}
                            >
                                <img src={post.image} alt="Instagram Post" className="w-full h-full object-cover" />

                                {/* Overlay & Play Button */}
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group cursor-pointer">
                                    <div className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center group-hover:scale-110 transition-transform bg-white/10 backdrop-blur-sm">
                                        <Play size={20} fill="white" className="text-white ml-1" />
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>

                {/* Footer CTA */}
                {/* <a href="https://www.instagram.com/thekrisaracademy_cbse/" target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary">
                        VISIT INSTAGRAM <ArrowRight size={28} />
                    </Button>
                </a> */}

            </div>
        </section>
    );
};

export default InstagramFeed;
