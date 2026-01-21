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

const Home = () => {
  return (
    <div>
      <SEO
        title="Welcome"
        description="World book of recordsNSA 2024 Sports day 2025TOEFLSchool Facilities Website Banner NEET-JEESchool Facilities Website Banner Multipurpose IndoorSchool Facilities Website Banner Learn ArtificialSchool Facilities Website Banner Free LunchGEC AwardAC Smart Class Admissions Going On From Pre-Kg to Grade 1..."
        keywords="Krisar Academy, CBSE School, Best School in Arani, Holistic Education, Top Schools Vellore, Ranipet Schools"
      />
      <Banner />
      <Strip />
      <ScrollReveal><AboutUs /></ScrollReveal>
      <ScrollReveal><WhyChooseUs /></ScrollReveal>
      <ScrollReveal><Facilities /></ScrollReveal>
      <ScrollReveal><VirtualTourSection /></ScrollReveal>
      <ScrollReveal><AcademicExcellence /></ScrollReveal>
      <ScrollReveal><Management /></ScrollReveal>
      <ScrollReveal><SuccessStories /></ScrollReveal>
      <ScrollReveal><InstagramFeed /></ScrollReveal>
      <ScrollReveal><NewsUpdates /></ScrollReveal>

    </div>
  )
}

export default Home;