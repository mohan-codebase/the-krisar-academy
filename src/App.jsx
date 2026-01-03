import { Routes, Route } from 'react-router-dom'
import './App.css'
import './assets/styles/fonts.css'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Facilities from './pages/Facilities'
import Academics from './pages/Academics'
import BeyondAcademics from './pages/BeyondAcademics'
import Blog from './pages/Blog'
import Navbar from './components/layout/Navbar'
import NavbarTop from './components/layout/NavbarTop'
import Footer from './components/layout/Footer'

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
      </Routes>
      <Footer />
    </div>
  )
}

export default App
