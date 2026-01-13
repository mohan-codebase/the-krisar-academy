
import React, { useState } from 'react';
import PageHero from '../components/common/PageHero';
import Button from '../components/ui/Button';
import { ArrowRight, Check, ChevronRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Steps = ({ currentStep }) => {
    const steps = [
        { id: 1, label: "Student Information" },
        { id: 2, label: "Parent / Guardian Information" },
        { id: 3, label: "Final Details" }
    ];

    return (
        <div className="flex items-center justify-between w-full mb-12 relative max-w-3xl mx-auto">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-700 -z-10 transform -translate-y-1/2"></div>
            {steps.map((step) => (
                <div key={step.id} className="flex flex-col items-center bg-[#0B1221] px-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${currentStep >= step.id
                        ? 'bg-yellow-400 border-yellow-400 text-black font-bold'
                        : 'bg-transparent border-gray-600 text-gray-500'
                        }`}>
                        {currentStep > step.id ? <Check size={20} /> : step.id}
                    </div>
                    <span className={`mt-2 text-sm font-medium ${currentStep >= step.id ? 'text-white' : 'text-gray-500'}`}>
                        {step.label}
                    </span>
                </div>
            ))}
        </div>
    );
};

const InputGroup = ({ label, name, type = "text", value, onChange, placeholder, required = false, options = null }) => (
    <div className="flex flex-col gap-2">
        <label className="text-gray-300 text-sm font-medium">{label} {required && <span className="text-yellow-400">*</span>}</label>
        {options ? (
            <select
                name={name}
                value={value}
                onChange={onChange}
                className="bg-[#151E38] border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors w-full"
            >
                <option value="">Select {label}</option>
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

const SuccessModal = ({ isOpen }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-[#151E38] border border-gray-700 rounded-2xl p-8 max-w-md w-full text-center relative shadow-2xl">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(34,197,94,0.5)]">
                    <Check size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-gray-300 mb-8">
                    Your admission application has been submitted successfully. Our team will contact you shortly.
                </p>
                <Link to="/">
                    <Button className="w-full">Back to Home</Button>
                </Link>
            </div>
        </div>
    );
};

const Admissions = () => {
    const [step, setStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        // Step 1
        firstName: '', lastName: '', dob: '', age: '', gender: '', bloodGroup: '',
        grade: '', previousSchool: '', place: '',
        // Step 2
        fatherName: '', fatherQual: '', fatherOccup: '', fatherIncome: '', fatherContact: '', fatherEmail: '',
        motherName: '', motherQual: '', motherOccup: '', motherIncome: '', motherContact: '', motherEmail: '',
        // Step 3
        address: '', contactNo: '', emailId: '', declaration: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleNext = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setStep(prev => prev + 1);
    };

    const handleBack = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setStep(prev => prev - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send data to backend
        console.log("Form Submitted:", formData);
        setIsSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-[#0B1221] text-white pb-20">
            <PageHero
                title="Admissions"
                h1={<span>Start Your Child's <span className="text-yellow-400">Admission</span></span>}
                description="Join The Krisar Academy Family. Fill Out The Form Below To Begin The Journey."
            />

            <section className="max-w-5xl mx-auto px-4 relative z-10 -mt-20">
                <div className="bg-[#0B1221]/90 backdrop-blur-xl border border-gray-800 rounded-3xl p-6 md:p-10 shadow-2xl">

                    <Steps currentStep={step} />

                    <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }}>

                        {/* STEP 1: Student Information */}
                        {step === 1 && (
                            <div className="space-y-8 animate-fadeIn">
                                <h3 className="text-xl font-bold text-yellow-400 border-l-4 border-yellow-400 pl-4 py-1 uppercase tracking-wide">
                                    Student Information
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <InputGroup label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required />
                                    <InputGroup label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} required />
                                    <InputGroup label="Date of Birth" name="dob" type="date" value={formData.dob} onChange={handleChange} required />
                                    <InputGroup label="Age" name="age" type="number" value={formData.age} onChange={handleChange} placeholder="Years" />
                                    <InputGroup label="Gender" name="gender" value={formData.gender} onChange={handleChange} options={['Male', 'Female', 'Other']} required />
                                    <InputGroup label="Blood Group" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} options={['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']} />
                                    <InputGroup label="Grade Seeking Admission" name="grade" value={formData.grade} onChange={handleChange} options={['Pre-KG', 'LKG', 'UKG', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12']} required />
                                    <InputGroup label="Previous School (Optional)" name="previousSchool" value={formData.previousSchool} onChange={handleChange} />
                                    <InputGroup label="Place" name="place" value={formData.place} onChange={handleChange} required />
                                </div>
                            </div>
                        )}

                        {/* STEP 2: Parent Information */}
                        {step === 2 && (
                            <div className="space-y-8 animate-fadeIn">
                                {/* Father */}
                                <div>
                                    <h3 className="text-xl font-bold text-yellow-400 border-l-4 border-yellow-400 pl-4 py-1 uppercase tracking-wide mb-6">
                                        Father's Details
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <InputGroup label="Name" name="fatherName" value={formData.fatherName} onChange={handleChange} required />
                                        <InputGroup label="Qualification" name="fatherQual" value={formData.fatherQual} onChange={handleChange} />
                                        <InputGroup label="Occupation" name="fatherOccup" value={formData.fatherOccup} onChange={handleChange} />
                                        <InputGroup label="Annual Income" name="fatherIncome" value={formData.fatherIncome} onChange={handleChange} />
                                        <InputGroup label="Contact No" name="fatherContact" value={formData.fatherContact} onChange={handleChange} required />
                                        <InputGroup label="Email ID" name="fatherEmail" type="email" value={formData.fatherEmail} onChange={handleChange} />
                                    </div>
                                </div>

                                {/* Mother */}
                                <div>
                                    <h3 className="text-xl font-bold text-yellow-400 border-l-4 border-yellow-400 pl-4 py-1 uppercase tracking-wide mb-6">
                                        Mother's Details
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <InputGroup label="Name" name="motherName" value={formData.motherName} onChange={handleChange} required />
                                        <InputGroup label="Qualification" name="motherQual" value={formData.motherQual} onChange={handleChange} />
                                        <InputGroup label="Occupation" name="motherOccup" value={formData.motherOccup} onChange={handleChange} />
                                        <InputGroup label="Annual Income" name="motherIncome" value={formData.motherIncome} onChange={handleChange} />
                                        <InputGroup label="Contact No" name="motherContact" value={formData.motherContact} onChange={handleChange} required />
                                        <InputGroup label="Email ID" name="motherEmail" type="email" value={formData.motherEmail} onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* STEP 3: Final Details */}
                        {step === 3 && (
                            <div className="space-y-8 animate-fadeIn">
                                <h3 className="text-xl font-bold text-yellow-400 border-l-4 border-yellow-400 pl-4 py-1 uppercase tracking-wide">
                                    Final Details
                                </h3>
                                <div className="grid grid-cols-1 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-gray-300 text-sm font-medium">Residential Address <span className="text-yellow-400">*</span></label>
                                        <textarea
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            rows="4"
                                            className="bg-[#151E38] border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors w-full resize-none"
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <InputGroup label="Primary Contact No" name="contactNo" value={formData.contactNo} onChange={handleChange} required />
                                        <InputGroup label="Primary Email ID" name="emailId" type="email" value={formData.emailId} onChange={handleChange} required />
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <label className="flex items-start gap-3 cursor-pointer group">
                                        <div className="relative flex items-center">
                                            <input
                                                type="checkbox"
                                                name="declaration"
                                                checked={formData.declaration}
                                                onChange={handleChange}
                                                className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-600 bg-[#151E38] checked:border-yellow-400 checked:bg-yellow-400 transition-all"
                                                required
                                            />
                                            <Check size={14} className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black opacity-0 peer-checked:opacity-100 transition-opacity" />
                                        </div>
                                        <span className="text-gray-400 text-smGroup group-hover:text-gray-300 transition-colors">
                                            I hereby declare that the information provided above is true and correct to the best of my knowledge. I agree to the terms and conditions of The Krisar Academy.
                                        </span>
                                    </label>
                                </div>
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-800">
                            {step > 1 ? (
                                <button
                                    type="button"
                                    onClick={handleBack}
                                    className="px-6 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all flex items-center gap-2"
                                >
                                    <ArrowLeft size={18} /> Previous
                                </button>
                            ) : <div></div>}

                            <Button type="submit" className="min-w-[140px]">
                                {step === 3 ? 'Submit Application' : 'Next Step'}
                                {step !== 3 && <ChevronRight size={18} className="ml-1" />}
                            </Button>
                        </div>
                    </form>
                </div>
            </section>

            <SuccessModal isOpen={isSubmitted} />
        </div>
    );
};

export default Admissions;
