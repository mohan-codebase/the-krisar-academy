import React from 'react';
import PageHero from '../components/common/PageHero';
import SEO from '../components/common/SEO';
import ScrollReveal from '../components/common/ScrollReveal';
import { CreditCard, ExternalLink } from 'lucide-react';
import paymentImg from '../assets/images/home/banner/banner-2.avif'; // Placeholder

const ERPAndPayment = () => {
    return (
        <div className='bg-brand-primary min-h-screen text-white'>
            <SEO
                title="ERP & Payment"
                description="Secure and convenient ERP & Payment portal for The Krisar Academy. Manage fees, view academic progress, and stay connected with the school administration."
                keywords="School ERP, Online Payment, Fee Payment, Krisar Academy Portal, Student Login, Parent Portal"
            />

            {/* Hero Section */}
            <PageHero
                title="ERP & Payment"
                h1={<span>School <span className="text-brand-secondary">Portal</span></span>}
                description="Access our integrated school management system for seamless fee payments, academic records, and communication."
            />

            <section className='max-w-[1440px] mx-auto px-4 md:px-8 py-16'>
                <ScrollReveal>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center'>
                        {/* Image Column */}
                        <div className='relative group'>
                            <div className="absolute inset-0 bg-brand-secondary/20 blur-3xl rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                            <div className='relative rounded-3xl overflow-hidden border border-white/10'>
                                <img
                                    src={paymentImg}
                                    alt="ERP and Payment"
                                    className='w-full h-full object-cover shadow-2xl transform group-hover:scale-105 transition-transform duration-700'
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 to-transparent"></div>
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className='space-y-8'>
                            <div>
                                <div className="inline-block px-4 py-1.5 rounded border border-white/20 bg-white/5 backdrop-blur-sm mb-6">
                                    <span className="text-gray-300 text-sm uppercase tracking-wider">Digital Campus</span>
                                </div>
                                <h2 className='text-3xl md:text-5xl font-bold mb-6'>
                                    Smart School <span className="text-brand-secondary">Management</span>
                                </h2>
                                <p className='text-gray-400 text-lg leading-relaxed'>
                                    Experience the convenience of our digital campus. Our ERP system provides a unified platform for parents and students to handle fee payments, check attendance, view report cards, and communicate with teachers.
                                </p>
                            </div>

                            <div className='bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm'>
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-brand-secondary/20 flex items-center justify-center text-brand-secondary">
                                        <CreditCard size={18} />
                                    </span>
                                    Pay Fees Online
                                </h3>
                                <p className="text-gray-400 mb-8">
                                    Securely pay school fees using Credit Card, Debit Card, Net Banking, or UPI.
                                </p>
                                <a
                                    href="#"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-brand-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-secondary/90 transition-all transform hover:-translate-y-1 shadow-lg shadow-brand-secondary/20 w-full md:w-auto justify-center"
                                >
                                    Login to ERP Portal
                                    <ExternalLink size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    )
}

export default ERPAndPayment;
