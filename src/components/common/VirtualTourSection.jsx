import React from 'react'
import { RefreshCw, ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import bgImage from '../../assets/images/VirtualTourSection/bg.png'

const VirtualTourSection = () => {
    return (
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax-like fixed attachment or just cover */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                {/* Heavy Dark Blue Overlay */}
                {/* Overlay with reduced opacity to let image show through */}
                <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply"></div>

            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">

                {/* 360 Experience Badge */}
                <div className="inline-flex items-center gap-2 border border-white/30 rounded px-6 py-2 bg-white/10 backdrop-blur-sm mb-8">
                    <RefreshCw size={18} className="text-white" />
                    <span className="uppercase tracking-wider text-sm font-medium">360° EXPERIENCE</span>
                </div>

                {/* Title */}
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                    Experience Our <span className="text-brand-secondary">Campus Virtually</span>
                </h2>

                {/* Description */}
                <p className="text-gray-300 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                    Take an immersive virtual tour of our state-of-the-art campus. Explore classrooms,
                    laboratories, sports facilities, and more—all from the comfort of your home.
                </p>

                {/* CTA Button */}
                <div className="flex justify-center">
                    <Button
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 text-sm md:text-lg font-bold rounded-xl whitespace-nowrap hover:bg-yellow-400 transition-transform hover:scale-105 active:scale-95 text-brand-primary"
                    >
                        START VIRTUAL TOUR <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                    </Button>


                </div>

            </div>
        </section>
    )
}

export default VirtualTourSection
