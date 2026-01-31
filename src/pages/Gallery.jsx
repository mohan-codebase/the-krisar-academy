import React, { useState } from 'react';
import PageHero from '../components/common/PageHero';
import SEO from '../components/common/SEO';
import Button from '../components/ui/Button';
import { ArrowRight, Youtube, LayoutGrid, SlidersHorizontal, Image as ImageIcon, Video } from 'lucide-react';
import ModernCarousel from '../components/ui/ModernCarousel';
import ScrollReveal from '../components/common/ScrollReveal';

// Generic icon for gallery items
import iconGallery from '../assets/images/facilities/modern-library.svg';

// Gallery Images
// Gallery Images
import gallery1 from '../assets/images/gallery/gal1.jpeg'
import gallery2 from '../assets/images/gallery/gal2.jpeg'
import gallery3 from '../assets/images/gallery/gal3.jpeg'
import gallery4 from '../assets/images/gallery/gal4.jpeg'
import gallery5 from '../assets/images/gallery/gal5.jpeg'
import gallery6 from '../assets/images/gallery/gal6.jpeg'
import gallery7 from '../assets/images/gallery/gal10.jpeg'
import gallery8 from '../assets/images/gallery/gal8.jpeg'
import gallery9 from '../assets/images/gallery/gal9.jpeg'
import gallery10 from '../assets/images/gallery/gal11.jpeg'
import gallery11 from '../assets/images/gallery/gal8.jpeg'

// Load all images from allImages directory
const allImagesModules = import.meta.glob('../assets/images/allImages/*.{png,jpg,jpeg,webp}', { eager: true });
const allImages = Object.values(allImagesModules).map(mod => mod.default);

// Select 20 random images
const randomImages = allImages
    .sort(() => Math.random() - 0.5)
    .slice(0, 20);

// Placeholder images since specific assets weren't provided or found
// In a real scenario, these would be imports or API data
const photoItems = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
    gallery10,
    gallery11,
    ...randomImages
];

const videoData = [
    { id: "zezZZcPvGR0", title: "Airport Role Play by Students | World Tourism Day celebration" },
    { id: "XMa8mmQgMrU", title: "Family Sports Day Celebration | The Krisar Academy" },
    { id: "betuccsEZO4", title: "Annual State Level Sports & Games Tournament 2024" },
    { id: "vaU0HOkq2DI", title: "#pongal Thiruvizha 2024 | The Krisar Academy" },
    { id: "Ct9dGimM8zw", title: "Equinox | Annual Science Expo | The Krisar Academy" },
    { id: "HkAxVbH3EVk", title: "National Mathematics Day | #maths | The Krisar Academy" },
    { id: "5wnYzv-D__s", title: "Revised Inspection Video | The Krisar Academy" },
    { id: "SqSBvaFQQTk", title: "GEC Award for Best Skills Development Initiative | The Krisar Academy" },
    { id: "uEYhrmXQpuo", title: "Hayagreevar Pooja | The Krisar Academy" },
    { id: "cIS69WivOaA", title: "The Adventures of Lord Krishna | The Krisar Academy" },
    { id: "5psVuPs8nDg", title: "The Adventures Of Lord Krishna Promo | The Krisar Academy" },
    { id: "zBFRefKwjzU", title: "CBSE INSPECTION FOR UPGRADATION | THE KRISAR ACADEMY" }
];

const Gallery = () => {
    const [activeTab, setActiveTab] = useState('photos'); // 'photos' | 'videos'
    const [viewMode, setViewMode] = useState('grid'); // 'carousel' | 'grid'
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const formattedPhotoData = photoItems.map((src, index) => ({
        icon: iconGallery,
        title: `Campus Memory ${index + 1}`,
        description: "Capturing the essence of learning, friendship, and success at The Krisar Academy.",
        image: src
    }));

    const formattedVideoData = videoData.map((video) => ({
        icon: iconGallery,
        title: video.title,
        description: "Experience our vibrant school culture and student performances through these videos.",
        image: `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`,
        id: video.id
    }));

    return (
        <div className="min-h-screen bg-[#0B1221] text-white">
            <SEO
                title="Gallery"
                description="View photos and videos of life at The Krisar Academy, including events, celebrations, and academic activities."
                keywords="School Photos, School Events, Photo Gallery, Video Gallery, Student Activities"
            />
            <PageHero
                title="Media Gallery"
                h1={<span>Memories <span className="text-yellow-400">That Matter</span></span>}
                description="Videos And Photographs Capturing Life, Learning, And Celebrations At Krisar Academy."
            >
                <Button href="/contact">
                    Enquire Now <ArrowRight className="w-5 h-5 md:w-6 md:h-5 ml-2" />
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

                {/* View Toggle */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex p-1 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                        <button
                            onClick={() => setViewMode('carousel')}
                            className={`flex items-center gap-2 px-6 py-2 rounded-lg transition-all ${viewMode === 'carousel' ? 'bg-yellow-400 text-black' : 'text-gray-400 hover:text-white'}`}
                        >
                            <SlidersHorizontal size={18} />
                            <span className="font-bold">Interactive</span>
                        </button>
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`flex items-center gap-2 px-6 py-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-yellow-400 text-black' : 'text-gray-400 hover:text-white'}`}
                        >
                            <LayoutGrid size={18} />
                            <span className="font-bold">Grid</span>
                        </button>
                    </div>
                </div>

                {/* Content */}
                {viewMode === 'carousel' ? (
                    <ScrollReveal>
                        <div className="relative py-10">
                            <ModernCarousel
                                items={activeTab === 'photos' ? formattedPhotoData : formattedVideoData}
                                showContent={false}
                                onItemClick={(item) => {
                                    if (activeTab === 'photos') {
                                        setSelectedImage(item.image);
                                    } else {
                                        setSelectedVideo(item.id);
                                    }
                                }}
                            />
                        </div>
                    </ScrollReveal>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {activeTab === 'photos' ? (
                            photoItems.map((src, index) => (
                                <ScrollReveal key={index} delay={index * 0.05}>
                                    <div
                                        className="relative aspect-video overflow-hidden rounded border border-white/10 bg-[#151E38] cursor-pointer group"
                                        onClick={() => setSelectedImage(src)}
                                    >
                                        <img
                                            src={src}
                                            alt={`Gallery Image ${index + 1}`}
                                            className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                            <div className="bg-black/50 p-3 rounded-full backdrop-blur-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                                    <path d="M15 3h6v6M14 10l6.1-6.1M9 21H3v-6M10 14l-6.1 6.1" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))
                        ) : (
                            videoData.map((video, index) => (
                                <ScrollReveal key={video.id} delay={index * 0.05}>
                                    <div
                                        onClick={() => setSelectedVideo(video.id)}
                                        className="group relative aspect-video bg-[#151E38] rounded overflow-hidden border border-white/10 hover:border-yellow-400/50 transition-all cursor-pointer shadow-lg hover:shadow-yellow-400/10"
                                    >
                                        <img
                                            src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                                            alt={video.title}
                                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                                                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-black border-b-[10px] border-b-transparent ml-1"></div>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                                            <p className="text-sm font-medium text-white line-clamp-2">{video.title}</p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))
                        )}
                    </div>
                )}

                {/* More Videos Button */}
                {activeTab === 'videos' && (
                    <div className="flex justify-center mt-16">
                        <a href="https://www.youtube.com/@thekrisaracademycbse" target="_blank" rel="noopener noreferrer">
                            <Button className="bg-[#FF0000] hover:bg-[#CC0000] text-white border-none flex items-center gap-2 px-8 py-3">
                                <Youtube size={20} />
                                WATCH MORE VIDEOS
                            </Button>
                        </a>
                    </div>
                )}

            </section>

            {/* Video Modal */}
            {selectedVideo && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                    onClick={() => setSelectedVideo(null)}
                >
                    <div
                        className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-red-500 text-white rounded-full transition-colors backdrop-blur-md"
                            onClick={() => setSelectedVideo(null)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        <iframe
                            src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                            title="YouTube video player"
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative max-w-7xl max-h-[90vh] w-full flex items-center justify-center outline-none"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            className="absolute -top-12 right-0 z-10 p-2 bg-white/10 hover:bg-red-500 text-white rounded-full transition-colors backdrop-blur-md"
                            onClick={() => setSelectedImage(null)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        <img
                            src={selectedImage}
                            alt="Gallery Fullscreen"
                            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
