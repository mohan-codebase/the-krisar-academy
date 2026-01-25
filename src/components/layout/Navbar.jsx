import { useState } from 'react';
import { Link } from 'react-router-dom'
// logo image
import logo from '../../assets/images/navbar/logo.svg'
import Button from '../ui/Button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='bg-transparent py-3 absolute w-full left-0 z-50'>
        <div className='max-w-[1440px] mx-auto w-full flex items-center justify-between px-4'>
          {/* logo */}
          <a href='/'>
            <img src={logo} alt="logo" className="w-32 md:w-auto" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className='flex items-center gap-5 text-text-primary font-medium text-sm lg:text-base'>
              <li><Link to="/" className="hover:text-brand-secondary transition-colors">HOME</Link></li>
              <li><Link to="/projects" className="hover:text-brand-secondary transition-colors">ABOUT US</Link></li>
              <li><Link to="/facilities" className="hover:text-brand-secondary transition-colors">FACILITIES</Link></li>
              <li><Link to="/uat-academics" className="hover:text-brand-secondary transition-colors">ACADEMICS</Link></li>
              <li><Link to="/uat-beyond-academics" className="hover:text-brand-secondary transition-colors">BEYOND ACADEMICS</Link></li>
              <li><Link to="/gallery" className="hover:text-brand-secondary transition-colors">GALLERY</Link></li>
              <li><Link to="/blog" className="hover:text-brand-secondary transition-colors">BLOG</Link></li>
            </ul>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Button to="/contact">CONTACT US</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-brand-primary/95 backdrop-blur-lg border-t border-white/10 md:hidden flex flex-col items-center py-8 gap-6 shadow-xl">
            <ul className='flex flex-col items-center gap-6 text-text-primary text-lg font-medium'>
              <li><Link to="/" onClick={() => setIsMenuOpen(false)}>HOME</Link></li>
              <li><Link to="/projects" onClick={() => setIsMenuOpen(false)}>ABOUT US</Link></li>
              <li><Link to="/facilities" onClick={() => setIsMenuOpen(false)}>FACILITIES</Link></li>
              <li><Link to="/uat-academics" onClick={() => setIsMenuOpen(false)}>ACADEMICS</Link></li>
              <li><Link to="/uat-beyond-academics" onClick={() => setIsMenuOpen(false)}>BEYOND ACADEMICS</Link></li>
              <li><Link to="/gallery" onClick={() => setIsMenuOpen(false)}>GALLERY</Link></li>
              <li><Link to="/blog" onClick={() => setIsMenuOpen(false)}>BLOG</Link></li>

              <div className="w-full h-[1px] bg-white/10 my-2"></div>

              <li className="text-brand-secondary text-sm"><Link to="/erp-and-payment" onClick={() => setIsMenuOpen(false)}>ERP & PAYMENT</Link></li>
              <li className="text-brand-secondary text-sm"><Link to="/cbse-disclosure" onClick={() => setIsMenuOpen(false)}>CBSE DISCLOSURE</Link></li>
              <li className="text-brand-secondary text-sm"><Link to="/admission-form2" onClick={() => setIsMenuOpen(false)}>ADMISSION FORM</Link></li>
            </ul>
            <Button to="/contact" onClick={() => setIsMenuOpen(false)}>CONTACT US</Button>
          </div>
        )}
      </div>

    </>
  )
}

export default Navbar;