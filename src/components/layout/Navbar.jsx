import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
// logo image
import logo from '../../assets/images/logo/logo.png'
import Button from '../ui/Button';
import { Menu, X, ChevronRight } from 'lucide-react';

// One source for both the desktop bar and the mobile panel, so a route added in one
// place cannot go missing from the other.
const NAV_LINKS = [
  { to: '/', label: 'HOME' },
  { to: '/projects', label: 'ABOUT US' },
  { to: '/facilities', label: 'FACILITIES' },
  { to: '/uat-academics', label: 'ACADEMICS' },
  { to: '/uat-beyond-academics', label: 'BEYOND ACADEMICS' },
  { to: '/gallery', label: 'GALLERY' },
  { to: '/blogs', label: 'BLOGS' },
]

// The utility routes the top bar also carries. They are secondary in the mobile
// panel, so they get their own quieter group rather than sitting in the main list.
const QUICK_LINKS = [
  { to: '/erp-and-payment', label: 'ERP & Payment' },
  { to: '/cbse-disclosure', label: 'CBSE Disclosure' },
  { to: '/admissions', label: 'Admission Form' },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  // The panel covers the viewport, so the page behind it must not scroll with it —
  // otherwise closing the menu drops you somewhere you never chose to be.
  //
  // The lock carries the md: escape hatch rather than being a plain overflow:hidden,
  // because the panel itself is md:hidden: growing past the breakpoint — rotating a
  // phone to landscape is enough — would otherwise hide the menu and leave the page
  // frozen with no visible way to release it. Letting the breakpoint live in CSS keeps
  // that tied to the same condition that hides the panel.
  useEffect(() => {
    if (!isMenuOpen) return;
    const lock = ['overflow-hidden', 'md:overflow-auto'];
    document.body.classList.add(...lock);
    return () => document.body.classList.remove(...lock);
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event) => { if (event.key === 'Escape') setIsMenuOpen(false); };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen]);

  return (
    <>
      <div className='bg-transparent py-3 absolute w-full left-0 z-50'>
        <div className='max-w-[1440px] mx-auto w-full flex items-center justify-between px-4'>
          <a href='/' className="flex items-center">
            <img src={logo} alt="The Krisar Academy Logo" className="h-14 md:h-18 lg:h-22 w-auto object-contain" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className='flex items-center gap-5 text-text-primary font-medium text-sm lg:text-base'>
              {NAV_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    aria-current={pathname === to ? 'page' : undefined}
                    className={`transition-colors hover:text-brand-secondary ${pathname === to ? 'text-brand-secondary' : ''}`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block ">
            <Button to="/contact" className="!text-sm">CONTACT US</Button>
          </div>

          {/* Mobile Menu Button. The chip gives the icon a surface of its own — a bare
              glyph over slide artwork reads as a stray mark rather than a control — and
              sizes the tap target to 44px. */}
          <button
            type="button"
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 active:bg-white/25"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel. Fixed to the viewport rather than hung under the navbar:
          as a dropdown it stopped short of the fold and let the banner's pagination
          dots show through underneath it. */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 z-[60] flex flex-col bg-brand-primary animate-fadeIn"
        >
          <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-4 py-3">
            <Link to="/" onClick={closeMenu} className="flex items-center">
              <img src={logo} alt="The Krisar Academy Logo" className="h-14 w-auto object-contain" />
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 active:bg-white/25"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto overscroll-contain px-4" aria-label="Main">
            <ul className="flex flex-col">
              {NAV_LINKS.map(({ to, label }) => {
                const isActive = pathname === to;
                return (
                  <li key={to}>
                    <Link
                      to={to}
                      onClick={closeMenu}
                      aria-current={isActive ? 'page' : undefined}
                      className={`flex items-center justify-between gap-4 border-b border-white/10 py-4 text-base font-semibold tracking-wide transition-colors ${isActive ? 'text-brand-secondary' : 'text-text-primary hover:text-brand-secondary'}`}
                    >
                      <span>{label}</span>
                      <ChevronRight size={18} className="shrink-0 opacity-40" />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <p className="mt-8 mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
              Quick Links
            </p>
            <ul className="flex flex-col">
              {QUICK_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    onClick={closeMenu}
                    aria-current={pathname === to ? 'page' : undefined}
                    className="flex items-center justify-between gap-4 border-b border-white/5 py-3 text-sm font-medium text-brand-secondary transition-colors hover:text-white"
                  >
                    <span>{label}</span>
                    <ChevronRight size={16} className="shrink-0 opacity-40" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="shrink-0 border-t border-white/10 px-4 py-4">
            <Button to="/contact" onClick={closeMenu} className="w-full">CONTACT US</Button>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar;
