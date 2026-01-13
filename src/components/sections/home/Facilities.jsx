import React, { useState } from 'react';
import {
    BookOpen,
    Trophy,
    Library,
    FlaskConical,
    Bus,
    Drumstick,
    Compass
} from 'lucide-react';
import Button from '../../ui/Button';

import img1 from '../../../assets/images/home/Facilities/Rectangle 20.png';
import img2 from '../../../assets/images/home/Facilities/Rectangle 22.png';
import img3 from '../../../assets/images/home/Facilities/Rectangle 23.png';
import img4 from '../../../assets/images/home/Facilities/Rectangle 24.png';
import img5 from '../../../assets/images/home/Facilities/Rectangle 4520.png';
import img6 from '../../../assets/images/home/Facilities/Rectangle 4520 (1).png';

// Placeholder images - using simple colored gradients for now until generic placeholders or real images are set
// In a real scenario, we would import images. 
// For this demo, I'll use some random Unsplash source URLs or just colored divs if I can't generate images. 
// I will use colors + icons to match the "design" vibe if real images aren't available, 
// but the prompt implies I can use generic ones. I'll use placeholders.

const facilities = [
    {
        id: 1,
        title: <p className='underline'>Academics</p>,
        icon: BookOpen,
        // color: "from-blue-500 to-blue-700",
        image: img1
    },
    {
        id: 2,
        title: <p className='underline'>Beyond Academics</p>,
        icon: Trophy,
        // color: "from-pink-500 to-pink-700",
        image: img5
    },
    {
        id: 3,
        title: <p className='underline'>Campus Life</p>,
        icon: Library,
        // color: "from-green-500 to-green-700",
        image: img2
    },
    {
        id: 4,
        title: <p className='underline'>Transport</p>,
        icon: FlaskConical,
        color: "from-purple-500 to-purple-700",
        image: img3
    },
    {
        id: 5,
        title: <p className='underline'>Qualified Teachers</p>,
        icon: Bus,
        // color: "from-yellow-500 to-orange-700",
        image: img6
    },
    {
        id: 6,
        title: <p className='underline'>Modern Library</p>,
        icon: Drumstick,
        // color: "from-red-500 to-pink-700",
        image: img4
    }
];

const Facilities = () => {
    const [activeId, setActiveId] = useState(1);

    return (
        <section className="bg-[#0B132B] py-20 relative overflow-hidden min-h-[600px] text-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-12 items-center">

                {/* Left Content */}
                <div className="w-full lg:w-1/3 flex flex-col items-start text-left z-10">
                    <div className="inline-flex items-center gap-2 border border-white/20 rounded px-4 py-2 bg-white/5 backdrop-blur-sm mb-6">
                        <Compass size={16} className="text-white" />
                        <span className="uppercase tracking-wider text-sm">Explore More</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        More <span className="text-yellow-400">Facilities</span>
                    </h2>

                    <p className="text-gray-400 mb-8 leading-relaxed max-w-md">
                        Modern facilities for every aspect of learning and growth.
                        We provide state-of-the-art infrastructure to ensure holistic development.
                    </p>

                    <Button className="!px-8">
                        View All
                    </Button>
                </div>

                {/* Right Content - Horizontal Accordion */}
                <div className="w-full lg:w-2/3 h-[500px] flex flex-col md:flex-row gap-4">
                    {facilities.map((facility) => (
                        <div
                            key={facility.id}
                            className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out
                                ${activeId === facility.id
                                    ? 'h-[250px] md:h-full md:flex-[4] shadow-2xl ring-2 ring-white/20'
                                    : 'h-[80px] md:h-full md:flex-[1] hover:md:flex-[1.5] opacity-70 hover:opacity-100'
                                }
                            `}
                            onClick={() => setActiveId(facility.id)}
                            onMouseEnter={() => setActiveId(facility.id)}
                        >
                            {/* Background Image */}
                            <img
                                src={facility.image}
                                alt={facility.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110 "
                            />

                            {/* Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${facility.color} mix-blend-multiply opacity-80 md:opacity-60 transition-opacity duration-500`} />

                            {/* Dark Gradient for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                            {/* Content */}
                            <div className={`absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end transition-all duration-500
                                ${activeId === facility.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                            `}>
                                <div className={`p-3 rounded-xl bg-white/20 backdrop-blur-md w-fit mb-3
                                     ${activeId === facility.id ? 'block' : 'hidden md:block'}
                                `}>
                                    <facility.icon size={24} className="text-white" />
                                </div>

                                <h3 className={`font-bold text-white whitespace-nowrap transition-all duration-300
                                    ${activeId === facility.id ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl md:rotate-[-90deg] md:origin-left md:translate-x-8 md:-translate-y-8'}
                                `}>
                                    {facility.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Facilities;
