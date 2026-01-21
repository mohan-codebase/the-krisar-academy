import React from 'react';
import { Anchor, Trophy, ArrowRight } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import SEO from '../components/common/SEO';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData.jsx';

const Blog = () => {
    return (
        <div className="min-h-screen bg-[#0B1221] text-white">
            <SEO
                title="Blog"
                description="Stay updated with the latest news, achievements, and educational insights from The Krisar Academy."
                keywords="School Blog, Education News, Student Achievements, Educational Insights, School Events"
            />
            <PageHero
                title="Blogs & Updates"
                h1={<span>From Our <span className="text-yellow-400">School To You</span></span>}
                description="Read About Academic Insights, Student Experiences, Events, And Educational Perspectives From Krisar Academy."
            >
                {/* <Button >
                    KNOW MORE <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                </Button> */}
            </PageHero>

            {/* List Section */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">

                {/* Section Header */}
                <div className="flex flex-col items-center mb-12">
                    <div className="inline-flex items-center gap-2 border border-white/20 rounded px-4 py-1.5 bg-white/5 backdrop-blur-sm mb-6">
                        <Anchor size={16} className="text-gray-300" />
                        <span className="uppercase tracking-wider text-sm ">LATEST NEWS</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                        News & <span className="text-brand-secondary">Updates</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed text-center">
                        Stay updated with the latest achievements and events at The Krisar Academy
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogData.map((item) => (
                        <div
                            key={item.id}
                            className="group h-full bg-[#151E38]/50 border border-white/10 rounded-xl overflow-hidden hover:border-brand-secondary/50 transition-all duration-300 flex flex-col"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Category Badge */}
                                <div className="absolute top-4 right-4 bg-[#151E38]/90 backdrop-blur-sm px-3 py-1.5 rounded flex items-center gap-2 border border-brand-secondary/30 text-brand-secondary text-sm font-medium">
                                    <Trophy size={16} />
                                    {item.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-grow text-left flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-medium leading-snug mb-4 text-white group-hover:text-brand-secondary transition-colors line-clamp-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4">{item.date}</p>
                                </div>

                                <Button to={`/blog/${item.slug}`} className="w-full">Know more</Button>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
        </div>
    );
};

export default Blog;
