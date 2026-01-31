import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

// Local images
import img1 from '../../../assets/images/home/AcademicExcellence/68209124de66dcbcf4a3b32734ee40051197b4d2.png'
import img2 from '../../../assets/images/home/AcademicExcellence/f583c67342e8778ae0ecedd4ca91d2565cbb1840.png'
import img3 from '../../../assets/images/home/AcademicExcellence/26bef2949edf83ca4ebf20cc5a7e0f2ce4a70527.png'
import img4 from '../../../assets/images/home/AcademicExcellence/885ad5dfb38b0f999a4efedfc97a23ef89791f1d.png'
import img5 from '../../../assets/images/home/AcademicExcellence/105700e68f1ed99bda141dfff4979d7562c32ce4.png'
import img6 from '../../../assets/images/home/AcademicExcellence/71db062cadeb11633aa912795a5bf02e8007b43d.png'

const academics = [
    {
        title: "Academic Approach",
        image: img1,
        link: "/uat-academics"
    },
    {
        title: "Academic Curriculum",
        image: img2,
        link: "/uat-academics"
    },
    {
        title: "Beyond Academics",
        image: img3,
        link: "/uat-beyond-academics"
    },
    {
        title: "Kindergarten",
        image: img4,
        link: "/uat-academics"
    },
    {
        title: "The Primary School",
        image: img5,
        link: "/uat-academics"
    },
    {
        title: "Life Skills Teaching",
        image: img6,
        link: "/uat-beyond-academics"
    }
];

const AcademicExcellence = () => {
    return (
        <section className="bg-[#0B132B] py-20 relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 border border-white/20 rounded px-4 py-1.5 bg-white/5 backdrop-blur-sm mb-6">
                        <BookOpen size={16} className="text-white" />
                        <span className="uppercase tracking-wider text-sm text-gray-300">Educational Excellence</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Academics
                    </h2>

                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Comprehensive academic programs designed to nurture intellectual growth
                        and character development
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {academics.map((item, index) => (
                        <Link
                            to={item.link}
                            key={index}
                            className="group relative flex items-center bg-[#151E38] border border-white/10 rounded-2xl overflow-hidden hover:border-brand-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand-secondary/10"
                        >
                            {/* Image Container - Left Side */}
                            <div className="w-1/3 h-28 relative overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#151E38]/30" />
                            </div>

                            {/* Content - Right Side */}
                            <div className="flex-1 px-6 flex items-center justify-between">
                                <h3 className="text-xl font-bold text-white group-hover:text-brand-secondary transition-colors">
                                    {item.title}
                                </h3>

                                <div className="w-10 h-10 rounded-full bg-brand-secondary flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                                    <ArrowRight size={20} className="text-[#0B132B]" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Integrated Courses Banner */}
                <div className="mt-8 md:mt-12 max-w-6xl mx-auto rounded-2xl overflow-hidden relative border border-white/10 group cursor-pointer hover:border-brand-secondary/50 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#061E3F] to-[#FFC107] opacity-90"></div>

                    <div className="relative z-10 p-10 md:p-14 text-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-wide">
                            Integrated IIT-JEE, NEET Courses, And Competitive Exams
                        </h3>
                        <p className="text-gray-100 max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed">
                            Specialized coaching and mentorship programs to prepare students for competitive
                            examinations and higher education opportunities
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AcademicExcellence;
