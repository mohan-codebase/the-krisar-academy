
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Button from '../components/ui/Button';
import PageHero from '../components/common/PageHero';
import SEO from '../components/common/SEO';
import ScrollReveal from '../components/common/ScrollReveal';
// import bgImage from '../assets/images/PageHero/PageHero.avif';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = React.useState(''); // '', 'loading', 'success', 'error'

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    type: 'contact',
                    data: formData
                }),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', phone: '', email: '', message: '' });
                setTimeout(() => setStatus(''), 5000);
            } else {
                const errorData = await response.json().catch(() => ({}));
                console.error('Submission failed:', response.status, response.statusText, errorData);
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

    return (
        <div className="min-h-screen bg-[#0B1221] text-white">
            <SEO
                title="Contact"
                description="Contact Us Reach Us #136/6, Arcot to Arani Main Road, Paradarami Village,Arcot Taluk, Ranipet District, Pin – 632512, Tamil Nadu, India Call Us Office: +91 7540096387Admission : +91 7540088387Transport: +91 7540098387 Email Us info.thekrisaracademy@gmail.com Follow Us Facebook-f Youtube Instagram ..."
                keywords="Contact School, Admissions Enquiry, School Transport, School Address, Phone Number"
            />
            {/* Hero Section */}
            <PageHero h1="We're here to help 24/7" title='Contact Us' />

            {/* Content Section */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 pb-20 md:p-10 ">
                <ScrollReveal>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 border  border-white/50 p-10 rounded-xl">

                        {/* Left Column: Contact Info */}
                        <div className="space-y-12">
                            <div className="prose prose-invert">
                                <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
                                <p className="text-gray-400">
                                    We usually respond within 1 working day.
                                    <br />
                                    For urgent queries, call us directly.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="space-y-4">
                                    <h4 className="text-xl font-semibold text-yellow-400">Address</h4>
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-5 h-5 text-gray-400 mt-1 shrink-0" />
                                        <div className="text-gray-300">
                                            <a
                                                href="https://www.google.com/maps?ll=12.785774,79.311696&z=17&t=m&hl=en-US&gl=US&mapclient=embed&cid=15873151573545962547"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-white transition-colors"
                                            >
                                                <p>#136/6, Arcot to Arani Main Road,</p>
                                                <p>Paradarami Village, Arcot Taluk,</p>
                                                <p>Ranipet District, Pin - 632512,</p>
                                                <p>Tamil Nadu, India</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <h4 className="text-xl font-semibold text-yellow-400">Contact Us</h4>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-5 h-5 text-gray-400" />
                                        <span className="text-gray-300">Office: <a href="tel:+917540096387" className="hover:text-white transition-colors">+91 7540096387</a></span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-5 h-5 text-gray-400" />
                                        <span className="text-gray-300">Admission : <a href="tel:+917540088387" className="hover:text-white transition-colors">+91 7540088387</a></span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-5 h-5 text-gray-400" />
                                        <span className="text-gray-300">Transport: <a href="tel:+917540098387" className="hover:text-white transition-colors">+91 7540098387</a></span>
                                    </div>
                                </div>

                                <div className="space-y-4 pt-4">
                                    <h4 className="text-xl font-semibold text-yellow-400">Email Us</h4>
                                    <p className="text-xs text-gray-500">(Use this email for enquiries, feedback, or to apply for career opportunities with us.)</p>
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-5 h-5 text-gray-400" />
                                        <a href="mailto:info.thekrisaracademy@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                                            info.thekrisaracademy@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="w-full h-64 bg-gray-800 rounded-xl overflow-hidden border border-white/10 relative group">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3890.8881124565596!2d79.311696!3d12.785774!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad3241faaaaa83%3A0xdc48c341af23cc33!2sThe%20Krisar%20Academy%20-%20CBSE%20Affiliation%20NO%3A1931107!5e0!3m2!1sen!2sus!4v1768822858161!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="grayscale group-hover:grayscale-0 transition-all duration-500"
                                ></iframe>
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div className="bg-[#151E38]/50 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Your name"
                                            className="w-full bg-transparent border-b border-gray-700 focus:border-yellow-400 px-0 py-2.5 outline-none transition-colors text-white placeholder-gray-600"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium text-gray-300">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            placeholder="Your Phone Number"
                                            className="w-full bg-transparent border-b border-gray-700 focus:border-yellow-400 px-0 py-2.5 outline-none transition-colors text-white placeholder-gray-600"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Id</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your Email"
                                        className="w-full bg-transparent border-b border-gray-700 focus:border-yellow-400 px-0 py-2.5 outline-none transition-colors text-white placeholder-gray-600"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        placeholder="Type Message"
                                        className="w-full bg-transparent border-b border-gray-700 focus:border-yellow-400 px-0 py-2.5 outline-none transition-colors text-white placeholder-gray-600 resize-none"
                                    ></textarea>
                                </div>

                                <div className="pt-4">
                                    <Button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="w-auto px-8 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {status === 'loading' ? 'Sending...' : 'Send Message'}
                                    </Button>
                                    {status === 'success' && (
                                        <p className="text-green-400 mt-2 text-sm">Message sent successfully!</p>
                                    )}
                                    {status === 'error' && (
                                        <p className="text-red-400 mt-2 text-sm">Failed to send message. Please try again.</p>
                                    )}
                                </div>

                            </form>
                        </div>

                    </div>
                </ScrollReveal>
            </section>
        </div>
    );
};

export default Contact;
