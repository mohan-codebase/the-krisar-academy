
import React from 'react';
import PageHero from '../components/common/PageHero';
import SEO from '../components/common/SEO';
import Button from '../components/ui/Button';
import { CreditCard, CheckCircle, Headphones, ArrowRight, ShieldCheck } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="bg-[#151E38]/50 backdrop-blur-md border border-white/10 rounded-xl p-8 flex flex-col items-center text-center">
        <Icon size={48} className="text-yellow-400 mb-6" />
        <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
    </div>
);

const MakePayment = () => {
    return (
        <div className="min-h-screen bg-[#0B1221] text-white pb-20">
            <SEO
                title="Make Payment"
                description="Securely pay school fees online via UPI, Credit Card, Debit Card, or Net Banking."
            />
            <PageHero
                title="Payment"
                h1={<span>Make a <span className="text-yellow-400">Payment</span></span>}
                description="Secure Online Payment For School-Related Fees And Services. All Payments Are Processed Through A Secure And Trusted Gateway."
            />

            <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-20 relative z-10">

                {/* Main Payment Card */}
                <div className="bg-[#151E38]/10 backdrop-blur-xl border border-gray-400/20 rounded-3xl p-10 md:p-20 text-center shadow-2xl mb-12 max-w-4xl mx-auto">
                    <div className="w-20 h-20 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-yellow-400/20">
                        <CreditCard size={40} className="text-yellow-400" />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Proceed to Online Payment</h2>
                    <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                        Click Below To Securely Make A Payment Using UPI, Debit Card, Credit Card, Or Net Banking.
                    </p>

                    <div className="flex justify-center gap-4 mb-10">
                        <span className="px-4 py-2 bg-white/5 rounded-lg text-sm text-gray-300 border border-white/10">UPI</span>
                        <span className="px-4 py-2 bg-white/5 rounded-lg text-sm text-gray-300 border border-white/10">Cards</span>
                        <span className="px-4 py-2 bg-white/5 rounded-lg text-sm text-gray-300 border border-white/10">Net Banking</span>
                    </div>

                    <a href="https://rzp.io/l/KrisarAcademy" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full md:w-auto min-w-[300px] inline-flex items-center justify-center gap-2 px-6 py-3 md:px-4 md:py-3 text-sm md:text-lg font-bold rounded-xl whitespace-nowrap transition-transform text-brand-primary">
                            MAKE A PAYMENT <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                        </Button>
                    </a>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <FeatureCard
                        icon={ShieldCheck}
                        title="Secure Payment"
                        description="256-Bit SSL Encryption"
                    />
                    <FeatureCard
                        icon={CheckCircle}
                        title="Instant Confirmation"
                        description="Immediate Receipt Via Email"
                    />
                    <FeatureCard
                        icon={Headphones}
                        title="Support Available"
                        description="24/7 Assistance"
                    />
                </div>

            </div>

            <div className="text-center text-gray-500 text-sm mt-12 pb-8">
                For Any Payment-Related Assistance, Please Contact The School Office.
            </div>
        </div>
    );
};

export default MakePayment;
