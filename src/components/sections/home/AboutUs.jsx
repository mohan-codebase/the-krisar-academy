import React from 'react'
import { Info } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import activeDot from '../../../assets/images/home/banner/active.svg'
import inactiveDot from '../../../assets/images/home/banner/not-active.svg'
import bgImage from '../../../assets/images/home/about/bg-img.avif'
import imgLeft from '../../../assets/images/home/about/about-1.avif'
import imgCenter from '../../../assets/images/home/about/about-2.avif'
import imgRight from '../../../assets/images/home/about/about-3.avif'

const AboutUs = () => {
  // Embla setup for mobile slider
  const plugins = React.useMemo(() => [Autoplay({ delay: 3000 })], [])
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, plugins)
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [scrollSnaps, setScrollSnaps] = React.useState([])

  const onInit = React.useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = React.useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  React.useEffect(() => {
    if (!emblaApi) return
    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return (
    <section
      className="bg-cover bg-center text-white py-16 md:py-40 relative overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className=" mx-auto md:px-0 px-4">
        {/* Header */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 border border-white/20 rounded px-6 py-2 bg-white/5 backdrop-blur-sm">
            <Info size={16} className="text-white" />
            <span className="uppercase tracking-wider text-sm">About Us</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
          About The <span className="text-brand-secondary">Krisar Academy</span>
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-center max-w-4xl mx-auto mb-16 leading-relaxed text-sm md:text-base">
          The Krisar Academy is the advanced visionary step towards the future of Education. It is instituted in the year 2018
          with an aim to offer holistic education to the children in the villages around the major towns i.e., Arani, Timiri, Arcot,
          Vellore, Ranipet & Walajapet.
        </p>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-40 items-stretch">
          {/* Left Card */}
          <div className="bg-gradient-to-br from-white/10 to-transparent p-7 rounded-[30px] lg:rounded-tr-[30px] lg:rounded-br-[30px] lg:rounded-tl-none lg:rounded-bl-none border border-white/30 flex backdrop-blur flex-col justify-center h-full text-center lg:text-center">
            <h3 className="text-xl md:text-2xl font-medium leading-relaxed">
              The School Takes Pride In <br /> Adopting The Motto <br />
              <span className="text-brand-secondary font-bold">"Learners Today, Leaders <br /> Tomorrow".</span>
            </h3>
          </div>

          {/* Center Image Area */}
          <div className="relative flex flex-col items-center justify-center my-8 lg:my-0">

            {/* Desktop Layout - Hidden on mobile */}
            <div className="hidden md:flex justify-center items-center gap-3 md:gap-4">
              <img src={imgLeft} alt="Activities" className="w-28 md:w-56 h-40 md:h-84 object-cover rounded-xl shadow-lg border border-white/100" />
              <img src={imgCenter} alt="Students" className="w-32 md:w-56 h-48 md:h-84 object-cover rounded-xl shadow-xl border border-white/100" />
              <img src={imgRight} alt="Awards" className="w-28 md:w-56 h-40 md:h-84 object-cover rounded-xl shadow-lg border border-white/100" />
            </div>

            {/* Mobile Slider - Hidden on desktop */}
            <div className="md:hidden w-full max-w-[300px]" ref={emblaRef}>
              <div className="flex">
                <div className="flex-[0_0_100%] min-w-0 flex justify-center px-2">
                  <img src={imgLeft} alt="Activities" className="w-full h-64 object-cover rounded-xl shadow-lg border border-white/100" />
                </div>
                <div className="flex-[0_0_100%] min-w-0 flex justify-center px-2">
                  <img src={imgCenter} alt="Students" className="w-full h-64 object-cover rounded-xl shadow-lg border border-white/100" />
                </div>
                <div className="flex-[0_0_100%] min-w-0 flex justify-center px-2">
                  <img src={imgRight} alt="Awards" className="w-full h-64 object-cover rounded-xl shadow-lg border border-white/100" />
                </div>
              </div>
            </div>

            {/* Pagination Dots (Mobile Only) */}
            <div className="flex justify-center gap-3 mt-6 md:hidden">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className="transition-all focus:outline-none cursor-pointer"
                  onClick={() => emblaApi && emblaApi.scrollTo(index)}
                >
                  <img
                    src={index === selectedIndex ? activeDot : inactiveDot}
                    alt={`Slide ${index + 1}`}
                    className="w-2.5 h-2.5"
                  />
                </button>
              ))}
            </div>

          </div>

          {/* Right Card */}
          <div className="bg-gradient-to-bl from-white/10 to-transparent p-7 rounded-[30px] lg:rounded-tl-[30px] lg:rounded-bl-[30px] lg:rounded-tr-none lg:rounded-br-none border border-white/30 flex flex-col justify-center h-full text-center lg:text-center">
            <h3 className="text-xl md:text-2xl font-medium leading-relaxed ">
              The School Is Managed By <br />
              <span className="text-brand-secondary font-bold">Sri Krisar Trust.</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs