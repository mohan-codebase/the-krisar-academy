
import '../assets/styles/fonts.css'
import Banner from '../components/sections/home/Banner'
import Strip from '../components/sections/home/Strip'
import AboutUs from '../components/sections/home/AboutUs'
import WhyChooseUs from '../components/sections/home/WhyChooseUs'
import Facilities from '../components/sections/home/Facilities'
import AcademicExcellence from '../components/sections/home/AcademicExcellence'
import Management from '../components/sections/home/Management'
import SuccessStories from '../components/sections/home/SuccessStories'
import InstagramFeed from '../components/sections/home/InstagramFeed'
import NewsUpdates from '../components/sections/home/NewsUpdates'
import VirtualTourSection from '../components/common/VirtualTourSection'
const Home = () => {
  return (
    <div >
      <Banner />
      <Strip />
      <AboutUs />
      <WhyChooseUs />
      <Facilities />     
     <VirtualTourSection />
      <AcademicExcellence />
      <Management />
      <SuccessStories />
      <InstagramFeed />
      <NewsUpdates />

    </div>
  )
}

export default Home;