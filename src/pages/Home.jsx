import '../assets/styles/fonts.css'
import SEO from '../components/common/SEO'
import VirtualTourSection from '../components/common/VirtualTourSection'
import ScrollReveal from '../components/common/ScrollReveal'
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
import AdmissionInfo from '../components/sections/home/AdmissionInfo'
import OperatingHours from '../components/sections/home/OperatingHours'
import SchoolHighlights from '../components/sections/home/SchoolHighlights'
import OurLocation from '../components/sections/home/OurLocation'

const Home = () => {
  return (
    <div>
      <SEO
        title="Best CBSE Schools in Vellore & Ranipet | Krisar Academy"
        description="Krisar Academy is among the leading CBSE schools in Vellore and Ranipet, offering quality education from Pre-KG to Grade 11 with modern learning and holistic growth."
        keywords="Krisar Academy, CBSE School, Best School in Arani, Holistic Education, Top Schools Vellore, Ranipet Schools"
      />
      <Banner />
      <Strip />
      <ScrollReveal><AboutUs /></ScrollReveal>
      <ScrollReveal><WhyChooseUs /></ScrollReveal>
      <ScrollReveal><Facilities /></ScrollReveal>
      <ScrollReveal><VirtualTourSection /></ScrollReveal>
      {/* <AcademicExcellence /> */}
      <SchoolHighlights />
      <ScrollReveal><Management /></ScrollReveal>
      <ScrollReveal><SuccessStories /></ScrollReveal>
      <ScrollReveal><OurLocation /></ScrollReveal>
      <ScrollReveal><AdmissionInfo /></ScrollReveal>
      <ScrollReveal><OperatingHours /></ScrollReveal>
      <ScrollReveal><InstagramFeed /></ScrollReveal>
      <ScrollReveal><NewsUpdates /></ScrollReveal>
    </div>
  )
}

export default Home;