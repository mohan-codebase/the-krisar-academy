import { Link } from 'react-router-dom'
import '../../assets/styles/fonts.css'

const NavbarTop = () => {
    return (
        <>
            <div className="flex items-center justify-center py-2 md:py-4 bg-brand-secondary px-4 text-center">
                <div className="text-xs md:text-base font-medium flex gap-1 md:gap-2">
                    <Link to="/payment" className="hover:underline">ERP & Payment</Link>
                    <span>|</span>
                    <Link to="/cbse-disclosure" className="hover:underline">CBSE Disclosure</Link>
                    <span>|</span>
                    <Link to="/admission" className="hover:underline">Admission Registration Form</Link>
                </div>

            </div>
        </>
    )
}

export default NavbarTop;