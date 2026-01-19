import { Link } from 'react-router-dom'
import '../../assets/styles/fonts.css'

const NavbarTop = () => {
    return (
        <>
            <div className="bg-brand-secondary overflow-hidden py-2 md:py-4 px-4 text-center relative z-50">
                <div className="animate-marquee whitespace-nowrap inline-block text-xs md:text-base font-medium">
                    <span className="mx-4">
                        <Link to="/payment" className="hover:underline">ERP & Payment</Link>
                        <span className="mx-2">|</span>
                        <Link to="/cbse-disclosure" className="hover:underline">CBSE Disclosure</Link>
                        <span className="mx-2">|</span>
                        <Link to="/admission" className="hover:underline">Admission Registration Form</Link>
                    </span>
                </div>
            </div>
        </>
    )
}

export default NavbarTop;