import React from 'react'
import PageHero from '../components/common/PageHero'
import SEO from '../components/common/SEO'
import '../assets/styles/fonts.css'
import ScrollReveal from '../components/common/ScrollReveal'
import {
    Users,
    HandHeart,
    Scale,
    ShieldCheck,
    UserCheck,
    Award,
    Lightbulb,
    Compass,
    Target,
    Eye
} from 'lucide-react'

// Images
import aboutMain from '../assets/images/about-us/about-main.avif'
import gallery1 from '../assets/images/about-us/gallery-1.avif'
import gallery2 from '../assets/images/about-us/gallery-2.avif'
import gallery3 from '../assets/images/about-us/gallery-3.avif'

const valuesData = [
    { icon: Scale, title: "Integrity" },
    { icon: HandHeart, title: "Respect" },
    { icon: UserCheck, title: "Self-Discipline" },
    { icon: ShieldCheck, title: "Responsibility" },
    { icon: Users, title: "Citizenship" },
    { icon: Award, title: "Leadership" },
    { icon: Lightbulb, title: "Innovation" },
    { icon: Compass, title: "Exploring" },
]

const Projects = () => {
    return (
        <div className="bg-brand-primary min-h-screen text-white">
            <SEO
                title="About Us"
                description="About us Who We AreThe Krisar Academy is the advanced visionary step towards the future of Education. It is instituted in the year 2018 with an aim to offer holistic education to the children in the villages around the major towns i.e., Arani, Timiri, Arcot, Vellore, Ranipet & Walajapet. The school..."
                keywords="About Krisar Academy, School History, Educational Vision, Best Faclities Arani, School Mission"
            />
            {/* 1. Hero Section */}
            <PageHero
                title="About Us"
                h1={<span>Shaping The Future Through <span className="text-brand-secondary">Quality Education</span></span>}
                description="The Krisar Academy Is A Visionary Institution Dedicated To Nurturing Young Minds Through Holistic Education, Modern Learning Methods, And Strong Values."
            />

            <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-16 space-y-24">

                {/* 2. Intro & Stats Section */}
                <ScrollReveal>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block px-4 py-1.5 rounded border border-white/20 bg-white/5 backdrop-blur-sm mb-6">
                                <span className="text-gray-300 text-sm uppercase tracking-wider">About Us</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                About The <span className="text-brand-secondary">Krisar Academy</span>
                            </h2>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                The Krisar Academy is the advanced visionary step towards the future of Education. It was instituted in the year 2018 with an aim to offer world-class educational opportunities to children in the villages around major towns like Arani, Timiri, Arcot, Vellore, Ranipet & Walajapet.
                            </p>
                            <p className="text-gray-400 mb-10 leading-relaxed">
                                The school is managed by <span className="text-brand-secondary font-bold">Sri Krisar Trust</span>. The school is co-educational and follows the CBSE curriculum. We believe that every child is unique and has the potential to excel.
                            </p>

                            <div className="flex gap-12">
                                <div>
                                    <h4 className="text-4xl font-bold text-brand-secondary mb-2">100%</h4>
                                    <p className="text-gray-400 text-sm">Student Success Rate</p>
                                </div>
                                <div>
                                    <h4 className="text-4xl font-bold text-brand-secondary mb-2">7</h4>
                                    <p className="text-gray-400 text-sm">Years Experience</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src={aboutMain}
                                alt="Founders and Awards"
                                className="w-full rounded-xl "
                            />
                            {/* Decorative glow */}
                            <div className="absolute "></div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* 3. Topmost Banner */}
                <ScrollReveal>
                    <div className="relative rounded-3xl overflow-hidden border border-white/20">
                        <div className="absolute inset-0 bg-transparent blur-3xl shadow-4xl z-0"></div>
                        <div className="relative z-10 p-10 md:p-14 text-center">
                            <h3 className="text-2xl md:text-4xl font-bold mb-4">
                                Topmost Among The Leading CBSE Schools
                            </h3>
                            <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
                                The Krisar Academy has secured its position among leading CBSE schools locally with world-class infrastructure. The ethos being excellence... dedicated to molding children into responsible citizens with strong moral values. We are committed to academic excellence and individual attention.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>

                {/* 4. Where Children Come First */}
                <ScrollReveal>
                    <div className="text-center">
                        <div className="inline-block px-4 py-1.5 rounded border border-white/20 bg-white/5 backdrop-blur-sm mb-6">
                            <span className="text-gray-300 text-sm uppercase tracking-wider">Our Ethics</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-12">Where Children <span className="text-brand-secondary">Come First!</span></h2>
                        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
                            Finding your child in a competitive environment means selecting the right school represents a big decision. We welcome the opportunity to show you just what makes The Krisar Academy such a special place.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <img src={gallery1} alt="Children Learning" className="w-full h-80 object-cover rounded-2xl  hover:scale-105 transition-transform duration-500" />
                            <img src={gallery2} alt="Group Activity" className="w-full h-80 object-cover rounded-2xl  hover:scale-105 transition-transform duration-500" />
                            <img src={gallery3} alt="Play Time" className="w-full h-80 object-cover rounded-2xl  hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>
                </ScrollReveal>

                {/* 5. Our Values */}
                <ScrollReveal>
                    <div>
                        <div className="text-center mb-16">
                            <div className="inline-block px-4 py-1.5 rounded border border-white/20 bg-white/5 backdrop-blur-sm mb-4">
                                <span className="text-gray-300 text-sm uppercase tracking-wider mb-5">Core Principles</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold">Our <span className="text-brand-secondary">Values</span></h2>
                            <p className="mt-4 text-gray-400">We nurture values that guide our students in every walk of life.</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                            {valuesData.map((val, idx) => (
                                <div key={idx} className="bg-transparent border border-white/10 p-3 md:p-6 rounded-xl flex items-center gap-3 md:gap-4 hover:border-brand-secondary/50 transition-colors group">
                                    <div className="p-2 md:p-3 bg-white/5 rounded-lg group-hover:bg-brand-secondary/20 transition-colors shrink-0">
                                        <val.icon className="text-brand-secondary w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <span className="font-semibold text-sm md:text-lg break-words">{val.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/* 6. Vision & Mission */}
                <ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Vision */}
                        <div className="bg-transparent border border-white/10 p-10 rounded-3xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Eye size={120} />
                            </div>
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 mb-6 text-brand-secondary">
                                    <Eye size={24} />
                                    <h3 className="text-2xl font-bold uppercase tracking-wider">Our Vision</h3>
                                </div>
                                <p className="text-gray-300 leading-loose">
                                    Our vision is to be a Modern School with Indian Culture, Driving our Creative Thinking, using Scientific Technologies - to build leaders of tomorrow through **Discipline**, **Values**, and **Building Character**, preparing them to be Energetic, Global citizens and Patriotic Nationals.
                                </p>
                                <p className="text-gray-300 leading-loose mt-4">
                                    We provide **Strong Communication** and problem-solving skills for all our students with a nurtured attitude towards lessons, and to take responsibility for their actions.
                                </p>
                            </div>
                        </div>

                        {/* Mission */}
                        <div className="bg-transparent border border-white/10 p-10 rounded-3xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Target size={120} />
                            </div>
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 mb-6 text-brand-secondary">
                                    <Target size={24} />
                                    <h3 className="text-2xl font-bold uppercase tracking-wider">Our Mission</h3>
                                </div>
                                <p className="text-gray-300 leading-loose">
                                    Being one of the best CBSE schools in Arani, we aspire to make every student at 'Summit Achiever' in an ever-changing global world. A holistic approach for individual focus on the rich culture and heritage are embedded in the curriculum. Honesty, co-operation, and conduct are instilled within students.
                                </p>
                                <p className="text-gray-300 leading-loose mt-4">
                                    Nurture and promote human aspects and all co-scholastic activities/Events for children to learn common sense and socialization skills, and to develop into talented individuals - for self and also for him a valuable citizen.
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

            </section>
        </div>
    )
}

export default Projects
