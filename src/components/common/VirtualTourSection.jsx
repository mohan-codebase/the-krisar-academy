import React, { useState } from 'react'
import { RefreshCw, ArrowRight, X } from 'lucide-react'
import Button from '../ui/Button'
import bgImage from '../../assets/images/VirtualTourSection/bg.png'

const VirtualTourSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
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
                            onClick={handleOpenModal}
                            className=""
                        >
                            START VIRTUAL TOUR <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                        </Button>
                    </div>

                </div>
            </section>

            {/* Video Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={handleCloseModal}>
                    <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                        >
                            <X size={24} />
                        </button>
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/wvJ6U1ai6LY?autoplay=1"
                            title="Krisar Academy Virtual Tour"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </>
    )
}

export default VirtualTourSection
