import React from 'react';
import { Users } from 'lucide-react';

import img1 from '../../../assets/images/home/Management/Mr.K.K.E.V.Krishnamoorthy.png';
import img2 from '../../../assets/images/home/Management/Mrs.K.Saroja.png';
import img3 from '../../../assets/images/home/Management/Mr.K.K.Rajan.png';
import img4 from '../../../assets/images/home/Management/Ms. Sindhu Rajan.png';

const managementTeam = [
    {
        name: "Mr.K.K.E.V.Krishnamoorthy",
        title: "Founder (1957 - 2021)",
        image: img1
    },
    {
        name: "Mrs.K.Saroja",
        title: "Founder & Director",
        image: img2
    },
    {
        name: "Mr.K.K.Rajan",
        title: "Founder & Chairman",
        image: img3
    },
    {
        name: "Ms. Sindhu Rajan",
        title: "Correspondent & Director",
        image: img4
    }
];

const Management = () => {
    return (
        <section className="bg-[url('./assets/images/home/NewsUpdates/bg.avif')] bg-cover bg-center md:py-20 relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 border border-white/20 rounded px-6 py-2 bg-white/5 backdrop-blur-sm mb-6">
                        <Users size={16} className="text-brand-secondary" />
                        <span className="uppercase tracking-wider text-sm text-gray-300">Our Founders</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Management
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Visionary leaders dedicated to shaping the future of education
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {managementTeam.map((member, index) => (
                        <div key={index} className="flex flex-col items-center">
                            {/* Card with Yellow Background */}
                            <div className="w-56 md:w-full aspect-square bg-brand-secondary rounded-2xl overflow-hidden relative mb-6 mx-auto">
                                {/* Image */}
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[90%] object-cover object-top"
                                    style={{
                                        borderTopLeftRadius: '20px',
                                        borderTopRightRadius: '20px'
                                    }}
                                />
                            </div>

                            {/* Info */}
                            <h3 className="text-xl font-bold text-white mb-2 text-center">
                                {member.name}
                            </h3>
                            <p className="text-brand-secondary text-sm font-medium tracking-wide uppercase text-center">
                                {member.title}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Management;
