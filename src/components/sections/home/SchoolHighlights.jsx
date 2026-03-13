import React from 'react';
import {
    GraduationCap,
    Laptop,
    FlaskConical,
    Microscope,
    Users,
    Utensils,
    ShieldCheck,
    Smile,
    Bell,
    Target,
    Music,
    Sun,
    Heart,
    Rocket,
    Landmark,
    Sword
} from 'lucide-react';
import ScrollReveal from '../../common/ScrollReveal';

const highlights = [
    {
        title: "Academic Excellence and Discipline",
        description: "Our structured academic environment encourages students to develop strong study habits, analytical thinking, and a deep understanding of subjects that support long-term academic success.",
        icon: GraduationCap,
        color: "text-blue-400",
        bg: "bg-blue-400/10"
    },
    {
        title: "Smart Facilities",
        description: "Our classrooms are fully air-conditioned smart classrooms, equipped with modern teaching technology that enhances student engagement and learning outcomes.",
        icon: Laptop,
        color: "text-purple-400",
        bg: "bg-purple-400/10"
    },
    {
        title: "Technical Laboratories",
        description: "We provide advanced science and technology laboratories, offering practical exposure that exceeds standard school learning environments.",
        icon: FlaskConical,
        color: "text-emerald-400",
        bg: "bg-emerald-400/10"
    },
    {
        title: "Practical Scientific Exploration",
        description: "Our students are encouraged to experiment, observe, and analyse through hands-on scientific activities. Laboratory learning helps strengthen conceptual understanding and curiosity in science and technology.",
        icon: Microscope,
        color: "text-yellow-400",
        bg: "bg-yellow-400/10"
    },
    {
        title: "The 1000-Seat auditorium",
        description: "Our large auditorium serves as a hub for academic presentations, cultural events, and celebrations that bring together the school community.",
        icon: Landmark,
        color: "text-brand-secondary",
        bg: "bg-brand-secondary/10"
    },
    {
        title: "Nutrition & Student Well-Being",
        description: "We provide a free healthy lunch program for all students, ensuring that nutrition supports both physical health and academic performance.",
        icon: Utensils,
        color: "text-orange-400",
        bg: "bg-orange-400/10"
    },
    {
        title: "Safety & Green Campus",
        description: "Our green campus environment offers a calm learning space away from city pollution. A clean, safe, and secure campus provides parents with complete peace of mind while their children learn and grow.",
        icon: ShieldCheck,
        color: "text-green-400",
        bg: "bg-green-400/10"
    },
    {
        title: "A Positive Learning Atmosphere",
        description: "Our supportive and well-maintained environment allows students to focus on learning without distractions. The campus atmosphere promotes discipline, cooperation, and mutual respect among students and teachers.",
        icon: Smile,
        color: "text-pink-400",
        bg: "bg-pink-400/10"
    },
    {
        title: "Real-Time Parent Updates",
        description: "Parents receive real-time performance reports and academic updates, enabling them to stay actively involved in their children's education. Transparent communication helps families stay informed and engaged throughout their children's academic journey.",
        icon: Bell,
        color: "text-indigo-400",
        bg: "bg-indigo-400/10"
    },
    {
        title: "Skating & Archery",
        description: "Professional training in sports such as Skating and Archery helps improve physical agility, concentration, and discipline among students.",
        icon: Target,
        color: "text-red-400",
        bg: "bg-red-400/10"
    },
    {
        title: "Music & Dance",
        description: "Students explore creativity through Music and Dance, embracing both classical and modern artistic styles.",
        icon: Music,
        color: "text-rose-400",
        bg: "bg-rose-400/10"
    },
    {
        title: "Silambam",
        description: "Training in Silambam, a traditional martial art, connects students with cultural heritage while building discipline and strength.",
        icon: Sword,
        color: "text-amber-400",
        bg: "bg-amber-400/10"
    },
    {
        title: "Yoga",
        description: "Regular Yoga sessions support mental clarity, emotional balance, and physical well-being.",
        icon: Sun,
        color: "text-cyan-400",
        bg: "bg-cyan-400/10"
    },
    {
        title: "Leadership & Life Skills",
        description: "We emphasise the development of leadership skills, communication abilities, and confidence so that learners grow into capable future leaders.",
        icon: Users,
        color: "text-sky-400",
        bg: "bg-sky-400/10"
    },
    {
        title: "Character Development",
        description: "Krisar Academy aims to develop responsible citizens characterised by integrity, respect, and strong moral values, shaping students who contribute positively to society.",
        icon: Heart,
        color: "text-red-500",
        bg: "bg-red-500/10"
    },
    {
        title: "Encouraging Personal Development",
        description: "Beyond academics, students are encouraged to develop teamwork and communication skills that prepare them for leadership roles in their future careers and communities.",
        icon: Rocket,
        color: "text-violet-400",
        bg: "bg-violet-400/10"
    }
];

const SchoolHighlights = () => {
    return (
        <section className="bg-[#0B132B] py-24 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-secondary/5 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center mb-20">
                    <ScrollReveal>
                        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                            Academic Excellence <span className="text-brand-secondary">and Discipline</span>                        </h2>
                        <div className="w-24 h-1.5 bg-brand-secondary mx-auto rounded-full mb-8"></div>
                        <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                            Our structured academic environment encourages students to develop strong study habits, analytical thinking, and a deep understanding of subjects that support long-term academic success.                        </p>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {highlights.map((item, index) => (
                        <ScrollReveal key={index} delay={index * 0.05}>
                            <div className="group h-full p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-brand-secondary/40 hover:bg-white/10 transition-all duration-500 flex flex-col items-start backdrop-blur-sm">
                                <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                    <item.icon className={`${item.color}`} size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-secondary transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed font-light">
                                    {item.description}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>

                    {/* Integrated Courses Banner */}
                <div className="mt-8 md:mt-12 max-w-6xl mx-auto rounded-2xl overflow-hidden relative border border-white/10 group cursor-pointer hover:border-brand-secondary/50 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#061E3F] to-[#FFC107] opacity-90"></div>

                    <div className="relative z-10 p-10 md:p-14 text-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-wide">
                            Integrated IIT-JEE, NEET Courses, And Competitive Exams
                        </h3>
                        <p className="text-gray-100 max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed">
                            Our academy's specialised coaching and mentorship help students succeed in competitive examinations such as NEET and JEE, guiding learners toward careers in medicine and engineering. We elevate learners from passive users to active creators through a curriculum designed for the future of education.
                        </p>
                    </div>
                </div>
        </section>
    );
};

export default SchoolHighlights;
