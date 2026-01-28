import React from 'react';
import defaultBg from '../../assets/images/PageHero/student-bg.png';

const PageHero = (props) => {

  const { title, h1, bgImage } = props;

  return (
    <div>
      <section
        className="relative max-md:py-20 max-md:pb-8 md:min-h-[500px] px-4 flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage || defaultBg})`,
          backgroundColor: !bgImage ? '#0B1221' : 'transparent'
        }}
      >
        {/* Overlay for better text readability if image exists */}
        {bgImage && <div className="absolute inset-0 bg-black/10 z-0"></div>}

        <div className="relative z-10 w-full flex flex-col items-center">
          <div className="inline-block px-4 py-1.5 rounded border border-white/20 bg-white/5 backdrop-blur-sm mb-6 md:mb-8">
            <span className="text-gray-300 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded bg-yellow-400 "></span>{title}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">{h1}</h1>



          {/* Dynamic Description */}
          {props.description ? (
            <p className="text-gray-200 max-w-2xl text-lg mb-8">
              {props.description}
            </p>
          ) : (
            <p className="max-w-2xl text-lg text-white">
              Reach Out To Us For Admissions, Enquiries, Or Any Assistance You Need.
            </p>
          )}

          {/* Optional Children (CTA Buttons etc) */}
          {props.children}
        </div>
      </section>
    </div>
  )
}

export default PageHero