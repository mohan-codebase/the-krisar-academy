import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PageHero from '../components/common/PageHero'
import SEO from '../components/common/SEO'
import '../assets/styles/fonts.css'
import ScrollReveal from '../components/common/ScrollReveal'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Images
import imgLibrary from '../assets/images/facilities/modern-library.png'
import imgLab from '../assets/images/facilities/lab-facilities.png'
import imgRobotics from '../assets/images/facilities/robotic-lab.png'
import imgComputer from '../assets/images/facilities/computer-lab.png'
import imgMaths from '../assets/images/facilities/vedic-maths-lab.png'
import imgWinners from '../assets/images/facilities/winners-img.jpeg'
import imgApproach from '../assets/images/academics/Academic Approach.avif'

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
        image: imgLibrary,
        id: "academic-approach"
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
        image: imgLab,
        id: "academic-curriculum"
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
        image: imgRobotics,
        id: "beyond-academics"
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
        image: imgComputer,
        id: "kindergarten"
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
        image: imgMaths,
        id: "primary-secondary"
    },
    {
        id: "life-skills",
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
        image: imgWinners
    }
];

const Academics = () => {
    const location = useLocation();

    useEffect(() => {
        // Handle hash navigation manually
        if (location.hash) {
            // Disable browser's default scroll restoration to avoid conflicts
            if ('scrollRestoration' in window.history) {
                window.history.scrollRestoration = 'manual';
            }

            const scrollToElement = () => {
                const id = location.hash.slice(1);
                const element = document.getElementById(id);

                if (element) {
                    // Check if element has height (meaning it's rendered and not hidden)
                    const rect = element.getBoundingClientRect();
                    if (rect.height > 0) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        return true;
                    }
                }
                return false;
            };

            // Initial attempt
            if (!scrollToElement()) {
                // Retry loop - keeps trying until successful or timeout
                const intervalId = setInterval(() => {
                    if (scrollToElement()) {
                        clearInterval(intervalId);
                    }
                }, 100);

                // Stop giving up after 3 seconds
                setTimeout(() => {
                    clearInterval(intervalId);
                }, 3000);
            }
        } else {
            // For non-hash pages, ensure we start at top, unless POP handled by ScrollToTop
            // We leave scrollRestoration as manual since ScrollToTop handles it.
        }
    }, [location]);

    return (
        <div className="bg-brand-primary min-h-screen">
            <SEO
                title="Academics | CBSE Schools in Vellore & Ranipet | Krisar Academy"
                description="Explore academics at Krisar Academy, one of the leading CBSE schools in Vellore and Ranipet offering a strong curriculum, modern learning and holistic development."
                keywords="CBSE Curriculum, Primary Education, Middle School, Senior Secondary, Holistic Learning"
            />
            <PageHero
                title="Academic Excellence"
                h1={<span>Academic Excellence <span className="text-brand-secondary">At Krisar</span></span>}
                description="Our Approach To Academics Blends Strong Fundamentals With Holistic Development, Empowering Students To Discover Their Strengths And Achieve Their Full Potential."
            />

            <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-10 pb-20">

                <ScrollReveal>
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
                </ScrollReveal>

                {/* Static Layout */}
                <div className="relative max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        {/* Right Image - Prominent & Sticky on Desktop */}
                        <div className="w-full lg:w-5/12 order-1 lg:order-2">
                            <ScrollReveal delay={0.2} className="lg:sticky lg:top-32 h-fit">
                                <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
                                    <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-brand-primary/0 transition-colors z-10"></div>
                                    <img
                                        src={imgApproach}
                                        alt="Academic Excellence at Krisar"
                                        className="w-full h-[300px] lg:h-[600px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Decorative Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-brand-primary/80 to-transparent z-10"></div>
                                    <div className="absolute bottom-6 left-6 z-20">
                                        <h3 className="text-2xl font-bold text-white mb-2">World-Class Facilities</h3>
                                        <p className="text-gray-300 text-sm max-w-xs">Creating an environment that inspires learning and innovation.</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Left Content List */}
                        <div className="w-full lg:w-7/12 order-2 lg:order-1 space-y-6">
                            {sections.map((section, index) => (
                                <div key={index} id={section.id} className="scroll-mt-32">
                                    <ScrollReveal delay={index * 0.1}>
                                        <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 md:p-8 hover:bg-white/10 transition-all duration-500 group">
                                            <div className="flex flex-col md:flex-row gap-4 items-start">
                                                {/* Number/Icon Placeholder */}
                                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-secondary/20 flex items-center justify-center border border-brand-secondary/30 text-brand-secondary font-bold text-xl group-hover:bg-brand-secondary group-hover:text-brand-primary transition-colors">
                                                    {index + 1}
                                                </div>

                                                <div className="flex-grow">
                                                    <h3 className="text-xl md:text-2xl font-bold text-brand-secondary mb-3">
                                                        {section.title}
                                                    </h3>
                                                    <div className="text-gray-300 leading-relaxed text-base">
                                                        {section.description}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Academics
