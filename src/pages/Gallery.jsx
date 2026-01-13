import React, { useState } from 'react';
import PageHero from '../components/common/PageHero';
import Button from '../components/ui/Button';
import { ArrowRight } from 'lucide-react';

// Gallery Images
// Gallery Images
import gallery1 from '../assets/images/gallery/gallery-1.avif'
import gallery2 from '../assets/images/gallery/gallery-2.avif'
import gallery3 from '../assets/images/gallery/gallery-3.avif'
import gallery4 from '../assets/images/gallery/gallery-4.avif'
import gallery5 from '../assets/images/gallery/gallery-5.avif'
import gallery6 from '../assets/images/gallery/gallery-6.avif'

// Placeholder images since specific assets weren't provided or found
// In a real scenario, these would be imports or API data
const photoItems = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6
];

const videoItems = [
    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop", // Placeholder for video thumb
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop"
];

const Gallery = () => {
    const [activeTab, setActiveTab] = useState('photos'); // 'photos' | 'videos'

    return (
        <div className="min-h-screen bg-[#0B1221] text-white">
            <PageHero
                title="Media Gallery"
                h1={<span>Memories <span className="text-yellow-400">That Matter</span></span>}
                description="Videos And Photographs Capturing Life, Learning, And Celebrations At Krisar Academy."
            >
                <Button className="mt-8 flex items-center gap-2">
                    CALL NOW <ArrowRight size={18} />
                </Button>
            </PageHero>

            {/* Gallery Tabs & Grid */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">

                {/* Tabs */}
                <div className="flex justify-center mb-16">
                    <div className="inline-flex bg-[#151E38] p-1.5 rounded-lg border border-white/10">
                        <button
                            onClick={() => setActiveTab('photos')}
                            className={`px-8 py-2.5 rounded transition-all duration-300 font-medium ${activeTab === 'photos'
                                ? 'bg-yellow-400 text-black shadow-lg'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            Photo Gallery
                        </button>
                        <button
                            onClick={() => setActiveTab('videos')}
                            className={`px-8 py-2.5 rounded transition-all duration-300 font-medium ${activeTab === 'videos'
                                ? 'bg-yellow-400 text-black shadow-lg'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            Video Gallery
                        </button>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {activeTab === 'photos' ? (
                        photoItems.map((src, index) => (
                            <div key={index} className="relative aspect-video overflow-hidden">
                                <img
                                    src={src}
                                    alt={`Gallery Image ${index + 1}`}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        ))
                    ) : (
                        videoItems.map((src, index) => (
                            <div key={index} className="group relative aspect-video bg-[#151E38] rounded-xl overflow-hidden border border-white/10 hover:border-yellow-400/50 transition-colors cursor-pointer">
                                <img
                                    src={src}
                                    alt={`Video Thumbnail ${index + 1}`}
                                    className="w-full h-full object-contain opacity-80 group-hover:opacity-60 transition-all"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-yellow-400/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-black border-b-[10px] border-b-transparent ml-1"></div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

            </section>
        </div>
    );
};

export default Gallery;
