import { Link } from 'react-router-dom'
import '../../assets/styles/fonts.css'

const NavbarTop = () => {
    return (
        <>
            <div className="bg-brand-secondary overflow-hidden py-2 md:py-4 px-4 relative z-50 flex flex-col md:flex-row items-center justify-center md:justify-between gap-2 md:gap-0">
                <div className='animate-marquee hidden md:block'>
                    <Link to="/" className="hover:underline">Learners Today, Leaders Tomorrow.</Link>
                </div>
                <div className="text-[10px] sm:text-xs md:text-base font-medium flex flex-wrap justify-center gap-2 md:gap-0">
                    <Link to="/erp-and-payment" className="hover:underline whitespace-nowrap">ERP & Payment</Link>
                    <span className="hidden sm:inline mx-1 md:mx-2 text-gray-600">|</span>
                    <Link to="/cbse-disclosure" className="hover:underline whitespace-nowrap">CBSE Disclosure</Link>
                    <span className="hidden sm:inline mx-1 md:mx-2 text-gray-600">|</span>
                    <Link to="/admission-form2" className="hover:underline text-center">Admission Registration Form</Link>
                </div>
            </div>
        </>
    )
}

export default NavbarTop;