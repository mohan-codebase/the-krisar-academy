import React, { useState } from 'react'
import PageHero from '../components/common/PageHero'
import SEO from '../components/common/SEO'
import '../assets/styles/fonts.css'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Images
import imgApproach from '../assets/images/academics/Academic Approach.avif'
import imgCurriculum from '../assets/images/academics/Academic Curriculum.avif'
import imgBeyond from '../assets/images/academics/Beyond Academicss.avif'
import imgKindergarten from '../assets/images/academics/Kindergarten.avif'
import imgPrimary from '../assets/images/academics/The Primary & The Secondary Schooling Years.avif'
import imgLifeSkills from '../assets/images/academics/Life Skills Teaching.avif'

const sections = [
    {
        title: "Academic Approach",
        description: (
            <>
                <p className="mb-4">
                    We believe in an approach that nurtures creativity, critical thinking, and innovation. Our teaching methodology moves beyond rote learning to encourage understanding and application of concepts.
                </p>
                <p>
                    The curriculum is designed to balance academic rigor with co-curricular activities, ensuring a well-rounded development for every learner in our care.
                </p>
            </>
        ),
        image: imgApproach
    },
    {
        title: "Academic Curriculum",
        description: (
            <>
                <p className="mb-4">
                    Our curriculum focuses on a student-centric approach where every child's unique potential is recognized. We follow a structured yet flexible framework that adheres to national standards while incorporating global best practices.
                </p>
                <p>
                    It is designed to prepare students for the changing world, with emphasis on problem-solving, digital literacy, and collaborative learning.
                </p>
            </>
        ),
        image: imgCurriculum
    },
    {
        title: "Beyond Academics",
        description: (
            <>
                <p className="mb-4">
                    Education extends beyond textbooks. We provide ample opportunities for students to explore their interests in arts, music, dance, and sports.
                </p>
                <p>
                    These activities are integrated into the daily schedule to ensure physical fitness and creative expression are given equal importance alongside academic excellence.
                </p>
            </>
        ),
        image: imgBeyond
    },
    {
        title: "Kindergarten",
        description: (
            <>
                <p className="mb-4">
                    Kindergarten is the first step in a child's educational journey. We provide a safe, nurturing, and stimulating environment where children learn through play and exploration.
                </p>
                <p>
                    Our focus is on developing rapid motor skills, social interaction, and emotional intelligence, laying a strong foundation for future learning.
                </p>
            </>
        ),
        image: imgKindergarten
    },
    {
        title: "The Primary & The Secondary Schooling Years",
        description: (
            <>
                <p className="mb-4">
                    A seamless transition from primary to secondary years ensures continuity in learning. The primary years focus on building strong foundational skills in literacy and numeracy.
                </p>
                <p>
                    As students move to secondary schooling, the focus shifts to specialized subject knowledge, analytical thinking, and preparation for higher education and competitive exams.
                </p>
            </>
        ),
        image: imgPrimary
    },
    {
        title: "Life Skills Teaching",
        description: (
            <>
                <p className="mb-4">
                    Life skills education is an integral part of our curriculum. We conduct regular workshops and sessions on leadership, communication, and decision-making.
                </p>
                <p>
                    We aim to empower students with the skills necessary to navigate real-world challenges with confidence, empathy, and resilience.
                </p>
            </>
        ),
        image: imgLifeSkills
    }
];

const Academics = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % sections.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + sections.length) % sections.length);
    };

    return (
        <div className="bg-brand-primary min-h-screen">
            <SEO
                title="Academics"
                description="Discover The Krisar Academy's academic approach, curriculum, and holistic learning framework."
                keywords="CBSE Curriculum, Academic Excellence, Holistic Learning, Kindergarten to Grade 12, Life Skills Education"
            />
            <PageHero
                title="Academic Excellence"
                h1={<span>Academic Excellence <span className="text-brand-secondary">At Krisar</span></span>}
                description="Our Approach To Academics Blends Strong Fundamentals With Holistic Development, Empowering Students To Discover Their Strengths And Achieve Their Full Potential."
            />

            <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-10 pb-20">

                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 rounded border border-white/20 bg-white/5 backdrop-blur-sm mb-4">
                        <span className="text-gray-300 text-sm uppercase tracking-wider">Our Academic Framework</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Learning At Krisar Academy</h2>
                    <p className="text-gray-400 max-w-3xl mx-auto">
                        Our approach encourages exploration, ownership of learning, and the development of talents
                        across academics, sports, arts, and life skills.
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative max-w-7xl mx-auto">
                    {/* Navigation Buttons - Absolute on desktop */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 2xl:-left-12 top-1/2 -translate-y-1/2 z-10 p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-sm transition-all text-white hidden md:block"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-4 2xl:-right-12 top-1/2 -translate-y-1/2 z-10 p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-sm transition-all text-white hidden md:block"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Main Slide Card */}
                    <div className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                        <div className="flex flex-col md:flex-row min-h-[500px]">
                            {/* Left Content */}
                            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
                                {/* Decorative Gradient */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-secondary to-transparent opacity-50"></div>

                                <h3 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-2 inline-block relative">
                                    {sections[currentIndex].title}
                                    <span className="absolute -bottom-2 left-0 w-24 h-1 bg-brand-secondary rounded-full"></span>
                                </h3>

                                <div className="mt-8 text-gray-300 leading-relaxed text-base md:text-lg">
                                    {sections[currentIndex].description}
                                </div>
                            </div>

                            {/* Right Image */}
                            <div className="w-full md:w-1/2 relative h-[300px] md:h-auto">
                                <img
                                    src={sections[currentIndex].image}
                                    alt={sections[currentIndex].title}
                                    className="w-full h-full object-cover"
                                />
                                {/* Overlay for smooth transition if needed */}
                                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-brand-primary/20 to-transparent"></div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Navigation & Pagination */}
                    <div className="flex items-center justify-center gap-6 mt-8">
                        <button
                            onClick={prevSlide}
                            className="p-3 rounded-xl bg-white/10 border border-white/10 text-white md:hidden"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <div className="flex items-center gap-2">
                            {sections.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex
                                        ? 'w-8 bg-brand-secondary'
                                        : 'w-2.5 bg-white/20 hover:bg-white/40'
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextSlide}
                            className="p-3 rounded-xl bg-white/10 border border-white/10 text-white md:hidden"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Academics
