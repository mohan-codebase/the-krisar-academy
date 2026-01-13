
import React from 'react';
import PageHero from '../components/common/PageHero';
import { FileText, Shield, Flame, Droplets, Users, Calendar, Award, CheckCircle } from 'lucide-react';
import { Download } from 'lucide-react';

const DisclosureCard = ({ title, icon: Icon, href = "#" }) => (
    <div className="bg-[#151E38]/50 backdrop-blur-md border border-white/10 rounded-xl p-8 flex flex-col items-center text-center hover:border-yellow-400/50 transition-all group">
        <div className="w-16 h-16 rounded-full bg-transparent border-2 border-yellow-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Icon size={32} className="text-yellow-400" />
        </div>
        <h3 className="text-white text-lg font-semibold mb-6 min-h-[56px] flex items-center justify-center">{title}</h3>
        <a
            href={href}
            className="w-full py-3 px-4 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center gap-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
        >
            <Download size={16} />
            View / Download
        </a>
    </div>
);

const SectionTitle = ({ title, subtitle }) => (
    <div className="mb-10 border-b border-gray-800 pb-4">
        <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
        <p className="text-gray-400 text-sm">{subtitle}</p>
    </div>
);

const CBSEDisclosure = () => {
    return (
        <div className="min-h-screen bg-[#0B1221] text-white pb-20">
            <PageHero
                title="Approvals And Certifications"
                h1={<span>CBSE <span className="text-yellow-400">Disclosure</span></span>}
                description="As Per CBSE Norms, The Following Documents Are Disclosed To Ensure Transparency, Safety, And Academic Integrity."
            />

            <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-10 relative z-10">
                <div className="bg-[#0B1221]/80 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl space-y-20">

                    {/* Section 1: Recognition & Compliance */}
                    <section>
                        <SectionTitle
                            title="School Recognition & Compliance"
                            subtitle="Official Approvals And Certifications Issued By Governing Authorities."
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <DisclosureCard title="Recognition" icon={FileText} />
                            <DisclosureCard title="NOC" icon={FileText} />
                            <DisclosureCard title="Extension Letter" icon={FileText} />
                            <DisclosureCard title="Mandatory Disclosure" icon={FileText} />
                            <DisclosureCard title="Self Certification" icon={Shield} />
                        </div>
                    </section>

                    {/* Section 2: Safety & Infrastructure */}
                    <section>
                        <SectionTitle
                            title="Safety & Infrastructure"
                            subtitle="Certificates Ensuring Student Safety And Infrastructure Standards."
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <DisclosureCard title="Building Safety Certificate" icon={CheckCircle} />
                            <DisclosureCard title="Fire Safety Certificate" icon={Flame} />
                            <DisclosureCard title="Sanitation Certificate" icon={Shield} />
                        </div>
                    </section>

                    {/* Section 3: Governance & Committees */}
                    <section>
                        <SectionTitle
                            title="Governance & Committees"
                            subtitle="Documents Related To School Governance And Statutory Committees."
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <DisclosureCard title="Trust Deed" icon={FileText} />
                            <DisclosureCard title="School Management Committee (SMC)" icon={Users} />
                            <DisclosureCard title="Parents Teachers Committee (PTC)" icon={Users} />
                        </div>
                    </section>

                    {/* Section 4: Academic Information */}
                    <section>
                        <SectionTitle
                            title="Academic Information"
                            subtitle="Academic Planning And CBSE-Related Academic Disclosures."
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <DisclosureCard title="Academic Calendar" icon={Calendar} />
                            <DisclosureCard title="D Form" icon={FileText} />
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default CBSEDisclosure;
