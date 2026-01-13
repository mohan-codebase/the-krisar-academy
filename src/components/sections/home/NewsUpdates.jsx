import React from 'react';
import { Trophy, Anchor } from 'lucide-react';
import Button from '../../ui/Button';
import { blogData } from '../../../data/blogData.jsx';
import { Link } from 'react-router-dom';

const NewsUpdates = () => {
    // Take the first 3 items from blogData
    const newsItems = blogData.slice(0, 3);

    return (
        <section className="bg-[url('src/assets/images/home/NewsUpdates/bg.avif')] bg-cover bg-center py-20 relative overflow-hidden text-center text-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col items-center">

                {/* Header */}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 border border-white/20 rounded px-4 py-1.5 bg-white/5 backdrop-blur-sm mb-6">
                        <Anchor size={16} className="text-gray-300" />
                        <span className="uppercase tracking-wider text-sm ">LATEST NEWS</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        News & <span className="text-brand-secondary">Updates</span>
                    </h2>

                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Stay updated with the latest achievements and events at The Krisar Academy
                    </p>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
                    {newsItems.map((item) => (
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
                                <h3 className="text-xl font-medium leading-snug mb-6 text-white group-hover:text-brand-secondary transition-colors line-clamp-3">
                                    {item.title}
                                </h3>

                                <Button to={`/blog/${item.id}`} className="w-full">Know More</Button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default NewsUpdates;
