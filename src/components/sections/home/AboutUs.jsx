import React from 'react'
import { Info } from 'lucide-react'
import bgImage from '../../../assets/images/home/about/bg-img.avif'
import imgLeft from '../../../assets/images/home/about/img.png'
import imgCenter from '../../../assets/images/home/about/img1.png'
import imgRight from '../../../assets/images/home/about/img2.png'

const AboutUs = () => {
  return (
    <section
      className="bg-cover bg-center text-white py-16 md:py-20 relative overflow-hidden"
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

          {/* Center Image Collage */}
          <div className="relative h-[300px] md:h-[200px] flex items-center justify-center my-8 lg:my-0">
            <div className="relative w-full h-full flex justify-center items-center ">
              {/* Left Image */}
              <img src={imgRight} alt="Awards" className="absolute w-30 md:w-48 h-40 md:h-84 object-contain rounded-xl transform rotate-5 right-1/2 translate-x-[150%] md:translate-x-[145%] z-10 shadow-xl" />

              <img src={imgLeft} alt="Activities" className="absolute w-30 md:w-48 h-40 md:h-84 object-contain rounded-xl transform -rotate-2 left-1/2 -translate-x-[150%] md:-translate-x-[145%] z-10 shadow-xl" />
              {/* Center Image */}
              <img src={imgCenter} alt="Students" className="absolute w-36 md:w-56 h-48 md:h-84 object-contain rounded-xl z-20 shadow-2xl" />
              {/* Right Image */}
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