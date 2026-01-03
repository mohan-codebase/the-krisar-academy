import { Link } from 'react-router-dom'
// logo image
import logo from '../../assets/images/navbar/logo.svg'
import Button from '../ui/Button';

const Navbar = () => {
  return (
    <>

      <div className='bg-transparent py-3 absolute w-full left-0 z-50'>
        <div className='max-w-[1440px] mx-auto w-full flex items-center justify-between'>
          {/* logo */}
          <div>
            <img src={logo} alt="logo" />
          </div>
          {/* menu */}
          <div>
            <ul className='flex items-center gap-5 text-text-primary'>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/about">ABOUT US</Link></li>
              <li><Link to="/facilities">FACILITIES</Link></li>
              <li><Link to="/academics">ACADEMICS</Link></li>
              <li><Link to="/beyond-academics">BEYOND ACADEMICS</Link></li>
              <li><Link to="/blog">BLOG</Link></li>

            </ul>
          </div>
          {/* button */}
          <div>
            <Button onclick={() => { console.log("contact"); }}>CONTACT</Button>
          </div>
        </div>

      </div>

    </>
  )
}

export default Navbar;