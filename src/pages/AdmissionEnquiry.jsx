import React, { useState, useEffect } from 'react';
import { Check, ChevronRight, GraduationCap, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Button from '../components/ui/Button';
import ModernCarousel from '../components/ui/ModernCarousel';
import ScrollReveal from '../components/common/ScrollReveal';

import bannerImg from '../assets/images/home/banner/desktop/slide-robotics.avif';

// Generic icon for gallery items
import iconGallery from '../assets/images/facilities/modern-library.svg';

// Load all images from gallery directory
const allImagesModules = import.meta.glob('../assets/images/gallery/*.{png,jpg,jpeg,webp}', { eager: true });
const allImages = Object.values(allImagesModules).map(mod => mod.default);

// A modern, simplified "Expression of Interest" admission page optimized for mobile / social links
const InputField = ({ label, name, type = "text", value, onChange, placeholder, required = false, options = null }) => (
    <div className="flex flex-col gap-1.5 mb-4">
        <label className="text-gray-300 text-sm font-medium">{label} {required && <span className="text-yellow-400">*</span>}</label>
        {options ? (
            <select
                name={name}
                value={value}
                onChange={onChange}
                className="bg-[#151E38] border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors w-full cursor-pointer"
                required={required}
            >
                <option value="" disabled>Select {label}</option>
                {options.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                ))}
            </select>
        ) : (
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="bg-[#151E38] border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors w-full"
                required={required}
            />
        )}
    </div>
);

const AdmissionEnquiry = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [displayPhotos, setDisplayPhotos] = useState([]);

    const [formData, setFormData] = useState({
        parentFirstName: '',
        parentLastName: '',
        mobileNumber: '',
        parentEmail: '',
        admissionType: '',
        addressState: '',
        addressCity: '',
        addressArea: '',
        sessionApplyingFor: '',
        consent: false
    });

    useEffect(() => {
        // Shuffle photos on mount
        const shuffled = [...allImages];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        setDisplayPhotos(shuffled.slice(0, 10)); // Just show top 10 for this page
    }, []);

    const formattedPhotoData = displayPhotos.map((src, index) => ({
        icon: iconGallery,
        title: `Campus Memory ${index + 1}`,
        description: "Capturing the essence of learning, friendship, and success at The Krisar Academy.",
        image: src
    }));

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError('');

        try {
            // Re-using the same endpoint as Admissions.jsx
            const response = await fetch('/api/send-email-secure', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    type: 'admissions_enquiry',
                    data: formData
                }),
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                const errorData = await response.json().catch(() => ({}));
                setSubmitError(errorData.message || 'Failed to submit enquiry. Please try again.');
                console.error('Submission failed:', response.status, response.statusText, errorData);
            }
        } catch (error) {
            console.error('Submission error:', error);
            setSubmitError(`Error: ${error.message || 'An error occurred. Please check your internet connection and try again.'}`);
        } finally {
            setIsSubmitting(false);
        }
    };



    return (
        <div className="bg-[#0B1221] text-white min-h-screen">
            <SEO
                title="Expression of Interest | Krisar Academy Admissions"
                description="Register your interest for admissions at Krisar Academy. A premier CBSE school offering holistic education and modern facilities."
                keywords="Krisar Academy Admission, EOI, CBSE School Admission"
            />

            {/* Hero / Form Section */}
            <div className="flex flex-col md:flex-row pt-24 md:pt-[120px] pb-12 min-h-screen">
            
            {/* Left/Top Section - Branding & Value Prop */}
            <div className="relative w-full md:w-1/2 flex flex-col justify-start md:justify-center items-center p-8 lg:p-16 overflow-hidden md:sticky md:top-[120px] md:h-[calc(100vh-120px)]">
                <div className="absolute inset-0 z-0">
                    {/* Dark gradient overlay on top of a subtle pattern or image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B1221]/90 via-[#0B1221]/80 to-transparent z-10"></div>
                    <img 
                        src={bannerImg} 
                        alt="School Campus" 
                        className="w-full h-full object-cover opacity-40"
                        onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    {/* Fallback abstract background if image is missing */}
                    <div className="absolute inset-0 bg-[#0B1221] -z-10"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>
                </div>

                <div className="relative z-20 w-full max-w-lg mx-auto md:mx-0">
                    <div className="mb-8 inline-flex items-center justify-center p-3 bg-yellow-400/10 rounded-2xl border border-yellow-400/20">
                        <GraduationCap className="w-8 h-8 text-yellow-400" />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                        Begin Your <br />
                        <span className="text-yellow-400">Extraordinary</span> <br />
                        Journey Here.
                    </h1>
                    <p className="text-gray-300 text-lg mb-8 max-w-md">
                        Express your interest for the upcoming academic session. Experience holistic education, state-of-the-art facilities, and nurturing environment.
                    </p>

                    <div className="hidden md:flex flex-col gap-4 mt-12">
                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                <Phone size={18} className="text-yellow-400" />
                            </div>
                            <span>+91 94432 23456</span>
                        </div>
                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                <Mail size={18} className="text-yellow-400" />
                            </div>
                            <span>admissions@krisaracademy.com</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right/Bottom Section - The Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-8 lg:p-16 relative z-10 bg-[#0B1221]">
                <div className="w-full max-w-md bg-[#111827]/80 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 shadow-2xl relative">
                    
                    {isSubmitted ? (
                        <div className="text-center py-10 animate-fadeIn">
                            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Check size={40} className="text-green-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Expression Received!</h3>
                            <p className="text-gray-400 mb-8">
                                Thank you for your interest in Krisar Academy. Our admissions team will get back to you shortly.
                            </p>
                            <Link to="/">
                                <Button className="w-full">Return to Home</Button>
                            </Link>
                        </div>
                    ) : (
                        <>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <InputField 
                                    label="Parent's First Name" 
                                    name="parentFirstName" 
                                    value={formData.parentFirstName} 
                                    onChange={handleChange} 
                                    placeholder="Parent's First Name"
                                    required 
                                />
                                
                                <InputField 
                                    label="Parent's Last Name" 
                                    name="parentLastName" 
                                    value={formData.parentLastName} 
                                    onChange={handleChange} 
                                    placeholder="Parent's Last Name"
                                    required 
                                />

                                <div className="flex flex-col gap-1.5 mb-4">
                                    <label className="text-gray-300 text-sm font-medium">Mobile Number <span className="text-yellow-400">*</span></label>
                                    <div className="flex">
                                        <div className="bg-[#151E38] border border-gray-700 border-r-0 text-gray-300 rounded-l-lg px-4 py-3 flex items-center">
                                            +91
                                        </div>
                                        <input
                                            type="tel"
                                            name="mobileNumber"
                                            value={formData.mobileNumber}
                                            onChange={handleChange}
                                            placeholder="Mobile Number"
                                            className="bg-[#151E38] border border-gray-700 text-white rounded-r-lg px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors w-full"
                                            required
                                        />
                                    </div>
                                </div>

                                <InputField 
                                    label="Parent's Email Id" 
                                    name="parentEmail" 
                                    type="email"
                                    value={formData.parentEmail} 
                                    onChange={handleChange} 
                                    placeholder="Parent's Email Id"
                                    required 
                                />

                                <InputField 
                                    label="Admission Type" 
                                    name="admissionType" 
                                    value={formData.admissionType} 
                                    onChange={handleChange} 
                                    options={['Regular Admission', 'Transfer', 'Other']} 
                                    required 
                                />

                                <InputField 
                                    label="Current/Local Address State" 
                                    name="addressState" 
                                    value={formData.addressState} 
                                    onChange={handleChange} 
                                    options={['Tamil Nadu', 'Karnataka', 'Andhra Pradesh', 'Kerala', 'Other']} 
                                    required 
                                />

                                <InputField 
                                    label="Current/Local Address City" 
                                    name="addressCity" 
                                    value={formData.addressCity} 
                                    onChange={handleChange} 
                                    options={['Vellore', 'Ranipet', 'Arcot', 'Walajapet', 'Other']} 
                                    required 
                                />

                                <InputField 
                                    label="Current/Local Address Area" 
                                    name="addressArea" 
                                    value={formData.addressArea} 
                                    onChange={handleChange} 
                                    options={['Arcot', 'Ranipet', 'Walajapet', 'Visharam', 'Sathuvachari', 'Katpadi', 'Other']} 
                                    required 
                                />

                                <InputField 
                                    label="Session Applying For" 
                                    name="sessionApplyingFor" 
                                    value={formData.sessionApplyingFor} 
                                    onChange={handleChange} 
                                    options={['2024-2025', '2025-2026']} 
                                    required 
                                />

                                <div className="pt-2">
                                    <label className="flex items-start gap-3 cursor-pointer group">
                                        <div className="relative flex items-center mt-1">
                                            <input
                                                type="checkbox"
                                                name="consent"
                                                checked={formData.consent}
                                                onChange={handleChange}
                                                className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-600 bg-[#151E38] checked:border-yellow-400 checked:bg-yellow-400 transition-all"
                                                required
                                            />
                                            <Check size={14} className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black opacity-0 peer-checked:opacity-100 transition-opacity" />
                                        </div>
                                        <span className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-300 transition-colors">
                                            I authorise Krisar Academy and its representatives to call, SMS, Email or Whatsapp me about the institution. This consent overrides any registration for DNC/DND. All information in the registration form must be accurate. False or inaccurate details may result in cancellation of registration. Please review carefully before submitting. <span className="text-red-500">*</span>
                                        </span>
                                    </label>
                                </div>

                                {submitError && (
                                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm text-center">
                                        {submitError}
                                    </div>
                                )}

                                <div className="pt-4">
                                    <Button 
                                        type="submit" 
                                        disabled={isSubmitting}
                                        className="w-full flex items-center justify-center gap-2 py-4 font-bold text-lg rounded-xl transition-all hover:scale-[1.02]"
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Submit Interest'}
                                        {!isSubmitting && <ChevronRight size={20} />}
                                    </Button>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
            </div>

            {/* The Approach Section */}
            <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
                <ScrollReveal>
                    <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4 tracking-wide">The Krisar Academy Approach</h2>
                    <div className="h-1 w-48 bg-[#FFC107] mb-12 rounded"></div>
                    <p className="text-gray-300 leading-relaxed text-lg md:text-xl font-light text-justify">
                        The Krisar Academy is progressive in its approach, follows an experiential pedagogy, and integrates technology into its educational practices, placing significant curricular emphasis on sports, arts, and holistic well-being. The school offers diverse learning approaches, including international and national curricula, to suit the learning requirements of our students. The focus is on interdisciplinary learning and real-life application. Through project-based learning, educators nurture creativity, leadership, and community engagement in students by encouraging inquiry, collaboration, and critical thinking. The school emphasizes excellence across disciplines, scholastic and co-scholastic, enabling students to connect with real-world experiences and prepare for life.
                    </p>
                </ScrollReveal>
            </section>

            {/* Journey In Frames - The Interactive Gallery */}
            <section className="py-20 bg-[#0B1221] overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 mb-12">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4 tracking-wide text-center">Journey In <span className="text-yellow-400">Frames</span></h2>
                        <p className="text-gray-400 text-center max-w-2xl mx-auto">
                            Glimpses of the vibrant life, modern infrastructure, and engaging activities at The Krisar Academy.
                        </p>
                    </ScrollReveal>
                </div>

                <ScrollReveal>
                    <div className="relative py-10">
                        <ModernCarousel
                            items={formattedPhotoData}
                            showContent={false}
                            onItemClick={(item) => setSelectedImage(item.image)}
                        />
                    </div>
                </ScrollReveal>

                <div className="flex justify-center mt-16">
                    <Link to="/gallery">
                        <Button className="flex items-center gap-2">
                            View Full Gallery <ArrowRight size={18} />
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Admission Process Section */}
            <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto mb-20">
                <ScrollReveal>
                    <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4 tracking-wide">Admission Process</h2>
                    <div className="h-1 w-48 bg-[#FFC107] mb-12 rounded"></div>
                </ScrollReveal>
                
                <ScrollReveal delay={0.1}>
                    <div className="bg-[#151E38] p-8 md:p-12 rounded-3xl mb-16 border border-gray-700 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFC107]/5  blur-[80px] pointer-events-none"></div>
                        <p className="text-gray-300 mb-6 text-lg">
                            Your journey with Krisar Academy begins here! Start by filling out our registration form.
                        </p>
                        <p className="text-gray-300 mb-6 text-lg">
                            Registrations open for a limited time, and the form must be completed within the given timeframe. The number of seats in each class is limited, & registration alone does not guarantee admission. In the event the registration is closed, we encourage you to fill out the Expression Of Interest (EOI) form. If a vacancy arises, our admissions team will connect to guide you through the next steps.
                        </p>
                        <p className="text-gray-300 text-lg">
                            Early Years may have a draw of lots process for the shortlisted applications. We have a well-defined internal criteria of selection, which includes points for siblings and staff, and we also take the diversity of parent profiles and the boy-to-girl ratio into consideration.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Steps Timeline */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center relative mt-16">
                    {/* Optional Connecting Line for Desktop */}
                    <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-700 z-0"></div>

                    {[
                        { step: '01', title: 'Fill the application form & pay the registration fee' },
                        { step: '02', title: 'Upload the required documents' },
                        { step: '03', title: 'Interaction, learner assessment*' },
                        { step: '04', title: 'Admission status updates' },
                        { step: '05', title: 'Pay the admission fee' }
                    ].map((item, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div className="flex flex-col items-center relative z-10 group">
                                <h4 className="text-xl font-bold mb-4 text-gray-400 group-hover:text-white transition-colors">Step</h4>
                                <div className="w-24 h-24 rounded-full bg-[#151E38] border-4 border-[#0B1221] shadow-[0_0_0_2px_#374151] group-hover:shadow-[0_0_0_2px_#FACC15] flex items-center justify-center text-3xl font-bold text-white mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600">
                                    {item.step}
                                </div>
                                <p className="text-sm md:text-base text-gray-300 px-2 leading-relaxed">
                                    {item.title}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative max-w-7xl max-h-[90vh] w-full flex items-center justify-center outline-none"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            className="absolute -top-12 right-0 z-10 p-2 bg-white/10 hover:bg-red-500 text-white rounded-full transition-colors backdrop-blur-md"
                            onClick={() => setSelectedImage(null)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        <img
                            src={selectedImage}
                            alt="Gallery Fullscreen"
                            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdmissionEnquiry;
