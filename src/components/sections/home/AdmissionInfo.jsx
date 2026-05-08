import React from 'react';
import { UserPlus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../../ui/Button';

const AdmissionInfo = () => {
    return (
        <section className="">
            <div className="max-w-6xl mx-auto">
                <div className="relative group overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#151E38] to-[#0B1221] p-1 md:p-1.5 focus-within:border-brand-secondary/50 transition-all duration-500">
                    <div className="relative z-10 bg-[#0B1221]/80 backdrop-blur-xl rounded-[1.8rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
                        <div className="relative flex-shrink-0">
                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-brand-secondary/10 flex items-center justify-center border border-brand-secondary/20 rotate-3 group-hover:rotate-6 transition-transform duration-500">
                                <UserPlus size={48} className="text-brand-secondary" />
                            </div>
                            <div className="absolute -inset-4 bg-brand-secondary/20 blur-3xl rounded-full opacity-50 group-hover:opacity-75 transition-opacity duration-500 -z-10"></div>
                        </div>

                        <div className="flex-grow text-center md:text-left">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                Admissions
                            </h2>
                            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-4xl">
                                We accept admissions for students from Pre-KG to Grade 12, offering a continuous learning journey from early childhood through higher grades.
                            </p>
                        </div>

                        <div className="flex-shrink-0">
                            <Link to="/admission">
                                <Button className="text-brand-primary font-bold group/btn">
                                    APPLY NOW 
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
                </div>
            </div>
        </section>
    );
};

export default AdmissionInfo;
