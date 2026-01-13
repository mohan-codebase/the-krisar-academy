import { Routes, Route } from 'react-router-dom'
import './App.css'
import './assets/styles/fonts.css'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Facilities from './pages/Facilities'
import Academics from './pages/Academics'
import BeyondAcademics from './pages/BeyondAcademics'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Admissions from './pages/Admissions'
import CBSEDisclosure from './pages/CBSEDisclosure'
import MakePayment from './pages/MakePayment'
import Navbar from './components/layout/Navbar'
import NavbarTop from './components/layout/NavbarTop'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/common/ScrollToTop'

function App() {

  return (
    <div>
      <NavbarTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/beyond-academics" element={<BeyondAcademics />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admission" element={<Admissions />} />
        <Route path="/cbse-disclosure" element={<CBSEDisclosure />} />
        <Route path="/payment" element={<MakePayment />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
