import React, { useState } from 'react';
import { Check, ChevronRight, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';

const InputField = ({ label, name, type = "text", value, onChange, placeholder, required = false, options = null }) => (
    <div className="flex flex-col gap-1.5 mb-4">
        <label className="text-gray-300 text-xs font-semibold tracking-wide uppercase">{label} {required && <span className="text-yellow-400">*</span>}</label>
        {options ? (
            <select
                name={name}
                value={value}
                onChange={onChange}
                className="bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-yellow-400 focus:bg-white/10 transition-all w-full appearance-none shadow-inner"
                required={required}
            >
                <option value="" disabled className="text-gray-900">Select {label}</option>
                {options.map(opt => (
                    <option key={opt} value={opt} className="text-gray-900">{opt}</option>
                ))}
            </select>
        ) : (
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-yellow-400 focus:bg-white/10 transition-all w-full placeholder-gray-500 shadow-inner"
                required={required}
            />
        )}
    </div>
);

const ParentsEnquiry = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');

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
            }
        } catch (error) {
            setSubmitError(`Error: ${error.message || 'Please check your connection and try again.'}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-[#0B1221] text-white min-h-screen relative overflow-hidden font-sans">
            <SEO
                title="Admissions Enquiry | Krisar Academy"
                description="Interest form for The Krisar Academy."
            />

            {/* Premium Background Elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-400/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

            <div className="relative z-10 w-full max-w-lg mx-auto p-5 pb-20 pt-32 md:pt-30 min-h-screen flex flex-col items-center">
                
                {/* Header branding */}
                <div className="mb-6 text-center animate-fadeIn">
                    <div className="inline-flex items-center justify-center p-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl mb-4">
                        <GraduationCap className="w-10 h-10 text-yellow-400" />
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight mb-2">Join <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-300 to-yellow-600">The Krisar</span> Family</h1>
                    <p className="text-gray-400 text-sm">Please fill out the form below to register your interest for upcoming admissions.</p>
                </div>

                <div className="w-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
                    
                    {isSubmitted ? (
                        <div className="text-center py-12 animate-fadeIn">
                            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 ring-4 ring-green-500/10">
                                <Check size={40} className="text-green-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">Expression Received!</h3>
                            <p className="text-gray-400 mb-8 text-sm leading-relaxed">
                                Thank you for your interest. Our admissions team will be in touch with you shortly on the provided contact details.
                            </p>
                            <Link to="/">
                                <button className="w-full py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 transition-colors font-semibold text-white">Return to Website</button>
                            </Link>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-1 animate-fadeIn">
                            
                            <div className="grid grid-cols-2 gap-4">
                                <InputField 
                                    label="First Name" 
                                    name="parentFirstName" 
                                    value={formData.parentFirstName} 
                                    onChange={handleChange} 
                                    placeholder="Parent's First"
                                    required 
                                />
                                <InputField 
                                    label="Last Name" 
                                    name="parentLastName" 
                                    value={formData.parentLastName} 
                                    onChange={handleChange} 
                                    placeholder="Parent's Last"
                                    required 
                                />
                            </div>

                            <div className="flex flex-col gap-1.5 mb-4 mt-3!">
                                <label className="text-gray-300 text-xs font-semibold tracking-wide uppercase">Mobile Number <span className="text-yellow-400">*</span></label>
                                <div className="flex shadow-inner rounded-xl overflow-hidden">
                                    <div className="bg-white/5 backdrop-blur-md border border-r-0 border-white/10 text-gray-400 px-4 py-3.5 flex items-center font-medium">
                                        +91
                                    </div>
                                    <input
                                        type="tel"
                                        name="mobileNumber"
                                        value={formData.mobileNumber}
                                        onChange={handleChange}
                                        placeholder="10-digit number"
                                        pattern="[0-9]{10}"
                                        title="Please enter a valid 10-digit mobile number"
                                        className="bg-white/5 backdrop-blur-md border border-l-0 border-white/10 text-white px-4 py-3.5 focus:outline-none focus:bg-white/10 transition-all w-full placeholder-gray-500"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mt-3!">
                                <InputField 
                                    label="Email Address" 
                                    name="parentEmail" 
                                    type="email"
                                    value={formData.parentEmail} 
                                    onChange={handleChange} 
                                    placeholder="Parent's Email ID"
                                    required 
                                />
                            </div>

                            <div className="mt-3!">
                                <InputField 
                                    label="Admission Type" 
                                    name="admissionType" 
                                    value={formData.admissionType} 
                                    onChange={handleChange} 
                                    options={['Regular Admission', 'Transfer', 'Other']} 
                                    required 
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-3!">
                                <InputField 
                                    label="State" 
                                    name="addressState" 
                                    value={formData.addressState} 
                                    onChange={handleChange} 
                                    options={['Tamil Nadu', 'Karnataka', 'Andhra Pradesh', 'Kerala', 'Other']} 
                                    required 
                                />
                                <InputField 
                                    label="City" 
                                    name="addressCity" 
                                    value={formData.addressCity} 
                                    onChange={handleChange} 
                                    options={['Vellore', 'Ranipet', 'Arcot', 'Walajapet', 'Other']} 
                                    required 
                                />
                            </div>

                            <div className="mt-3!">
                                <InputField 
                                    label="Local Area" 
                                    name="addressArea" 
                                    value={formData.addressArea} 
                                    onChange={handleChange} 
                                    options={['Arcot', 'Ranipet', 'Walajapet', 'Visharam', 'Sathuvachari', 'Katpadi', 'Other']} 
                                    required 
                                />
                            </div>

                            <div className="mt-3! mb-6">
                                <InputField 
                                    label="Session Applying For" 
                                    name="sessionApplyingFor" 
                                    value={formData.sessionApplyingFor} 
                                    onChange={handleChange} 
                                    options={['2024-2025', '2025-2026']} 
                                    required 
                                />
                            </div>

                            <div className="pt-4 pb-2 border-t border-white/10">
                                <label className="flex items-start gap-4 cursor-pointer group">
                                    <div className="relative shrink-0 flex items-center mt-0.5">
                                        <input
                                            type="checkbox"
                                            name="consent"
                                            checked={formData.consent}
                                            onChange={handleChange}
                                            className="peer h-6 w-6 cursor-pointer appearance-none rounded-md border border-gray-500 bg-white/5 checked:border-yellow-400 checked:bg-yellow-400 transition-all focus:ring-2 focus:ring-yellow-400/50 outline-none"
                                            required
                                        />
                                        <Check size={16} strokeWidth={3} className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#0B1221] opacity-0 peer-checked:opacity-100 transition-opacity" />
                                    </div>
                                    <span className="text-gray-400 text-[11px] sm:text-xs leading-relaxed transition-colors group-hover:text-gray-300">
                                        I authorise <strong className="text-gray-200">The Krisar Academy</strong> and its representatives to call, SMS, Email or Whatsapp me about the institution. This consent overrides any registration for DNC/DND. All information in the registration form must be accurate. <span className="text-yellow-500/80">*</span>
                                    </span>
                                </label>
                            </div>

                            {submitError && (
                                <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm text-center backdrop-blur-md">
                                    {submitError}
                                </div>
                            )}

                            <div className="pt-6">
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-yellow-400 hover:bg-yellow-500 text-[#0B1221] font-bold text-lg rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_24px_rgba(250,204,21,0.2)] disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Complete Enquiry'}
                                    {!isSubmitting && <ChevronRight size={22} className="opacity-80" />}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
                
                {/* Minimal Footer */}
                <div className="mt-8 text-center text-gray-500 text-xs">
                    &copy; {new Date().getFullYear()} The Krisar Academy. All rights reserved.
                </div>
            </div>
        </div>
    );
};

export default ParentsEnquiry;
