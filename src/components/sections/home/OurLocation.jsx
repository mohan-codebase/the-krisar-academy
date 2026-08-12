import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import ScrollReveal from '../../common/ScrollReveal';

// One query behind both the embedded map and the directions link, so the pin the
// visitor sees and the place their maps app opens can never drift apart.
const MAP_QUERY = 'Krisar Academy Paradarami Village Arani Main Road'
const MAP_EMBED_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=15&output=embed`
const MAP_DIRECTIONS_HREF = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`

const OurLocation = () => {
    return (
        <section className="bg-[#0B1221] py-24 px-4 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-secondary/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-6xl mx-auto">
                <ScrollReveal>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        
                        {/* Text Content */}
                        <div className="lg:col-span-7 text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 mb-8">
                                <MapPin size={18} className="text-brand-secondary" />
                                <span className="text-brand-secondary font-bold uppercase tracking-widest text-xs">Find Us</span>
                            </div>

                            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
                                Our <span className="text-brand-secondary">Location</span>
                            </h2>

                            <div className="space-y-6">
                                <p className="text-gray-300 text-xl md:text-2xl leading-relaxed italic border-l-4 border-brand-secondary pl-6">
                                    "We are located in Paradarami Village, Arcot Taluk, along the Arani Main Road."
                                </p>
                                
                                <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                                    Our campus is strategically positioned to be easily accessible for families from 
                                    <span className="text-white font-medium"> Arani, Timiri, Arcot, Vellore, Ranipet, and Walajapet</span>.
                                </p>
                            </div>

                            <div className="mt-10 flex flex-wrap gap-4">
                                <a
                                    href={MAP_DIRECTIONS_HREF}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-brand-secondary text-brand-primary font-bold rounded-2xl hover:scale-105 transition-transform duration-300 shadow-xl shadow-brand-secondary/20"
                                >
                                    <Navigation size={20} />
                                    GET DIRECTIONS
                                </a>
                            </div>
                        </div>

                        {/* Embedded map. The q=…&output=embed form needs no Maps API key. */}
                        <div className="lg:col-span-5 relative group">
                            <div className="absolute -inset-4 bg-brand-secondary/20 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#151E38] p-2 aspect-square md:aspect-video lg:aspect-square">
                                <iframe
                                    title="Map showing The Krisar Academy on Arani Main Road, Paradarami Village"
                                    src={MAP_EMBED_SRC}
                                    className="w-full h-full rounded-[2rem] border-0"
                                    loading="lazy"
                                    allowFullScreen
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default OurLocation;
