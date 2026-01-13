import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import { blogData } from '../data/blogData.jsx';
import PageHero from '../components/common/PageHero';

const BlogDetail = () => {
    const { id } = useParams();
    const blog = blogData.find((item) => item.id === parseInt(id));

    // Fallback if blog not found
    if (!blog) {
        return (
            <div className="min-h-screen bg-[#0B1221] text-white flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Post Not Found</h2>
                    <Link to="/blog" className="text-brand-secondary hover:underline">Back to Blogs</Link>
                </div>
            </div>
        );
    }

    // Recent articles (excluding current one)
    const recentArticles = blogData.filter(item => item.id !== blog.id).slice(0, 5);

    return (
        <div className="min-h-screen bg-[#0B1221] text-white">
            {/* Using Page Header style but maybe simpler or same */}
            <section className="bg-brand-primary py-24 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                        {blog.title}
                    </h1>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Featured Image */}
                        <div className="mb-8 rounded-xl overflow-hidden border border-white/10">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Article Content */}
                        <article className="prose prose-invert prose-lg max-w-none">
                            {/* Render content - assuming JSX or string from data */}
                            {typeof blog.content === 'string' ? (
                                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                            ) : (
                                blog.content
                            )}
                        </article>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">

                        {/* Recent Articles Widget */}
                        <div className="bg-[#151E38]/50 p-6 rounded-xl border border-white/10">
                            <h3 className="text-xl font-bold mb-6 text-yellow-400 border-b border-white/10 pb-2">Recent Articles</h3>
                            <div className="space-y-4">
                                {recentArticles.map(article => (
                                    <Link to={`/blog/${article.id}`} key={article.id} className="flex gap-4 group">
                                        <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                                            <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-300 group-hover:text-yellow-400 transition-colors line-clamp-2">
                                                {article.title}
                                            </h4>
                                            <span className="text-xs text-brand-secondary mt-1 block">Read More</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Contact Widget */}
                        <div className="bg-[#151E38]/50 p-6 rounded-xl border border-white/10">
                            <h3 className="text-xl font-bold mb-6 text-yellow-400 border-b border-white/10 pb-2">Contact Us</h3>
                            <div className="space-y-4 text-sm text-gray-300">
                                <div className="flex gap-3 items-center">
                                    <Phone size={16} className="text-yellow-400" />
                                    <span>Office: +91 7540096387</span>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <Phone size={16} className="text-yellow-400" />
                                    <span>Admission: +91 7540088387</span>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <Phone size={16} className="text-yellow-400" />
                                    <span>Transport: +91 7540098387</span>
                                </div>
                                <div className="border-t border-white/10 my-4"></div>
                                <div className="flex gap-3 items-center">
                                    <Mail size={16} className="text-yellow-400" />
                                    <span className="text-xs break-all">info.thekrisaracademy@gmail.com</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
