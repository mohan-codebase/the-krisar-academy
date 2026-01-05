
import '../assets/styles/fonts.css'
import Banner from '../components/sections/home/Banner'
import Strip from '../components/sections/home/Strip'
import AboutUs from '../components/sections/home/AboutUs'
import VirtualTourSection from '../components/common/VirtualTourSection'
const Home = () => {
  return (
    <div >
      <Banner />
      <Strip />
      <AboutUs />
      <VirtualTourSection />
    </div>
  )
}

export default Home;