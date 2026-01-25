import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import './App.css'
import './assets/styles/fonts.css'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Facilities from './pages/Facilities'
import UatAcademics from './pages/UatAcademics'
import UatBeyondAcademics from './pages/UatBeyondAcademics'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Admissions from './pages/Admissions'
import CBSEDisclosure from './pages/CBSEDisclosure'
import ERPAndPayment from './pages/ERPAndPayment'
import NotFound from './pages/NotFound'
import Navbar from './components/layout/Navbar'
import NavbarTop from './components/layout/NavbarTop'
import Footer from './components/layout/Footer'
import WhatsAppButton from './components/common/WhatsAppButton'
import CallButton from './components/common/CallButton'
import ScrollToTop from './components/common/ScrollToTop'
import PageTransition from './components/common/PageTransition'

function App() {
  const location = useLocation();

  return (
    <div>
      <NavbarTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
          <Route path="/facilities" element={<PageTransition><Facilities /></PageTransition>} />
          <Route path="/uat-academics" element={<PageTransition><UatAcademics /></PageTransition>} />
          <Route path="/uat-beyond-academics" element={<PageTransition><UatBeyondAcademics /></PageTransition>} />
          <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
          <Route path="/blog/:slug" element={<PageTransition><BlogDetail /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
          <Route path="/admission-form2" element={<PageTransition><Admissions /></PageTransition>} />
          <Route path="/cbse-disclosure" element={<PageTransition><CBSEDisclosure /></PageTransition>} />
          <Route path="/erp-and-payment" element={<PageTransition><ERPAndPayment /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <WhatsAppButton />
      <CallButton />
      <ScrollToTop />
    </div>
  )
}

export default App
