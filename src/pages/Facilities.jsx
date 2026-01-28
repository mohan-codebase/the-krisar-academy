import React from 'react'
import PageHero from '../components/common/PageHero'
import SEO from '../components/common/SEO'
import '../assets/styles/fonts.css'
import ScrollReveal from '../components/common/ScrollReveal'
import { BookOpen, Bot, FlaskConical, Monitor, Calculator, Bus, Droplets, Stethoscope } from 'lucide-react'

// Images
import imgLibrary from '../assets/images/facilities/modern-library.png'
import imgRobotic from '../assets/images/facilities/winners-img.jpeg'
import imgLab from '../assets/images/facilities/lab-facilities.png'
import imgComputer from '../assets/images/facilities/computer-lab.png'
import imgVedic from '../assets/images/facilities/vedic-maths-lab.png'
import imgTransport from '../assets/images/facilities/transport.png'
import imgSanitation from '../assets/images/facilities/sanitation.png'
import imgMedical from '../assets/images/facilities/medical-facilities.png'
import bgImage from '../assets/images/home/about/bg-img.avif'

// Icons
import iconLibrary from '../assets/images/facilities/modern-library.svg'
import iconRobotic from '../assets/images/facilities/robotic-lab.svg'
import iconLab from '../assets/images/facilities/lab-facilities.svg'
import iconComputer from '../assets/images/facilities/computer-lab.svg'
import iconVedic from '../assets/images/facilities/vedic-maths-lab.svg'
import iconTransport from '../assets/images/facilities/transport.svg'
import iconSanitation from '../assets/images/facilities/sanitation.svg'
import iconMedical from '../assets/images/facilities/medical-facilities.svg'


const facilitiesData = [
    {
        icon: iconLibrary,
        title: "Modern Library",
        description: "The hub of peaceful learning and exploration, research and application well stocked with books old and new. The Resource Centre.",
        image: imgLibrary
    },
    {
        icon: iconRobotic,
        title: "Sports Achievements",
        description: "Students are honored for outstanding performance in school sports competitions.The school promotes teamwork, discipline, and excellence through active participation.",
        image: imgRobotic
    },
    {
        icon: iconLab,
        title: "Lab Facilities",
        description: "State-of-the-art Physics, Chemistry, and Biology labs designed to foster scientific temper and hands-on experimentation.",
        image: imgLab
    },
    {
        icon: iconComputer,
        title: "Computer Lab",
        description: "It has advanced infrastructure in terms of hardware and software which cater to the requirements of the students.",
        image: imgComputer
    },
    {
        icon: iconVedic,
        title: "Vedic Maths Lab",
        description: "Welcome to the wonderful world of \"Vedic\" mathematics, a science that its founder claims was lost due to the advent of modern mathematics.",
        image: imgVedic
    },
    {
        icon: iconTransport,
        title: "Transport",
        description: "The school has bus facility that covers an enormous area. Specially designed buses for safety & comfort of the students.",
        image: imgTransport
    },
    {
        icon: iconSanitation, // Using Droplets for Sanitation
        title: "Sanitation",
        description: "Every floor has a bathroom at both ends, with separate toilet facilities for boys and girls. The housekeeping staff has sufficient number of staff.",
        image: imgSanitation
    },
    {
        icon: iconMedical,
        title: "Medical Facilities",
        description: "KRISAR has a well-stocked sick bay, with a trained nurse to attend the students. We also have a tie up with the nearest hospital.",
        image: imgMedical
    }
]

const Facilities = () => {
    return (
        <div className="bg-brand-primary min-h-screen">
            <SEO
                title="Facilities"
                description="Facilities Resource Centre – LibraryThe hub of peaceful learning and exploration, research and application well stocked with books old and new. The Resource Centre, comprising the Library and the Teacher’s Resource Centre, has become a unique repository of books, CDs, audio as well as video titl..."
                keywords="School Infrastructure, Science Labs, Library, Computer Lab, Robotic Lab, School Transport"
            />
            <PageHero
                title="Our Facilities"
                h1={<span>Learning Spaces <span className="text-brand-secondary">That Inspire</span></span>}
                description="A Safe, Engaging, And Well-Equipped Environment For Holistic Education."
            />

            <div className="bg-cover bg-center relative" style={{ backgroundImage: `url(${bgImage})` }}>
                <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-10 pb-20">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <div className="inline-block px-4 py-1.5 rounded border border-white/20 bg-white/5 backdrop-blur-sm mb-4">
                                <span className="text-gray-300 text-sm uppercase tracking-wider">Our Facilities</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">World-Class <span className="text-brand-secondary">Facilities</span></h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Modern amenities and resources created to enhance every student's learning experience.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                        {facilitiesData.map((facility, index) => (
                            <ScrollReveal key={index} delay={index * 0.1}>
                                <div className="bg-transparent border border-white/10 rounded-2xl overflow-hidden group hover:border-brand-secondary/50 transition-all duration-300 hover:shadow-xl hover:shadow-brand-secondary/10 flex flex-col">
                                    {/* Image Area */}
                                    <div className="p-2">
                                        <div className="h-50 relative overflow-hidden rounded-xl">
                                            <img
                                                src={facility.image}
                                                alt={facility.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="p-6 flex-1 flex flex-col pt-2">
                                        <div className="flex items-center gap-4 mb-3">
                                            <img src={facility.icon} alt={facility.title} className="w-12 h-12 shrink-0" />
                                            <h3 className="text-xl font-bold text-white group-hover:text-brand-secondary transition-colors">
                                                {facility.title}
                                            </h3>
                                        </div>

                                        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                                            {facility.description}
                                        </p>

                                        {/* <span className="text-brand-secondary text-xs font-bold cursor-pointer hover:underline tracking-wider">
                                            See more..
                                        </span> */}
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                </section>
            </div>
        </div>
    )
}

export default Facilities
