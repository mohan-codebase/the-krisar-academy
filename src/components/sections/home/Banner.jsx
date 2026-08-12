import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import activeDot from '../../../assets/images/ui/carousel-dot-active.svg'
import inactiveDot from '../../../assets/images/ui/carousel-dot-inactive.svg'
import Button from '../../ui/Button'

// Slide artwork. The folder carries the variant, so a slide's mobile art
// shares its desktop filename: banner/desktop/slide-x.avif + banner/mobile/slide-x.avif.
// Only slides with dedicated mobile art need a mobile/ import.
import slideOurPurpose from '../../../assets/images/home/banner/desktop/slide-our-purpose.avif'
import slideCbseAffiliation from '../../../assets/images/home/banner/desktop/slide-cbse-affiliation.avif'
import slideAward2026 from '../../../assets/images/home/banner/desktop/slide-award-2026.avif'
import slideAnnualDay from '../../../assets/images/home/banner/desktop/slide-annual-day.avif'
import slideEquinox2026 from '../../../assets/images/home/banner/desktop/slide-equinox-2026.avif'
import slideSpectrumLaunch from '../../../assets/images/home/banner/desktop/slide-spectrum-launch.avif'
import slideSportsInauguration from '../../../assets/images/home/banner/desktop/slide-sports-inauguration.avif'
import slideRobotics from '../../../assets/images/home/banner/desktop/slide-robotics.avif'
import slideBeyondClassroom from '../../../assets/images/home/banner/desktop/slide-beyond-classroom.avif'
import slideNeetJee from '../../../assets/images/home/banner/desktop/slide-neet-jee.avif'
import slideWelcome from '../../../assets/images/home/banner/desktop/slide-welcome.avif'

import slideAward2026Mobile from '../../../assets/images/home/banner/mobile/slide-award-2026.avif'

const slides = [
    {
        id: 1,
        layout: 'standard',
        image: slideOurPurpose,
        badge: "Our School Takes Pride in Our Purpose",
        title: <>Our School Takes Pride in <span className="text-brand-secondary">Our Purpose</span></>,
        leftContent: {
            title: <>Academic<br />Excellence</>,
            desc: "By combining academic excellence, innovative learning, and cultural values."
        },
        rightContent: {
            title: <>Future<br />Preparation</>,
            desc: "The school prepares students for the future through leadership and growth."
        },
        buttonText: "Learn More",
        buttonLink: "/projects"
    },
    {
        id: 2,
        layout: 'left-aligned',
        image: slideCbseAffiliation,
        bgPosition: 'bg-[10%_center]',
        badge: "CBSE Academic Affiliation",
        title: <>CBSE Academic <span className="text-brand-secondary">Affiliation</span></>,
        description: "Our academy is proudly affiliated with the CBSE board, ensuring that the school provides nationally recognised education with intellectual depth and academic standards.",
        buttonText: "View Curriculum",
        buttonLink: "/uat-academics"
    },
    {
        id: 3,
        layout: 'image-only',
        image: slideAward2026,
        mobileImage: slideAward2026Mobile,
        bgPosition: 'bg-center',
        bgColor: '#061A4D',
    },
    {
        id: 4,
        layout: 'left-aligned',
        image: slideAnnualDay,
        bgPosition: 'bg-center',
        badge: "Annual Day Celebration",
        title: <>Frequenzeee'26 <span className="text-brand-secondary">Annual Day</span></>,
        description: "Celebrating excellence, talent, and achievements of our students at The Krisar Academy Annual Day Celebration.",
        buttonText: "Explore Events",
        buttonLink: "/uat-beyond-academics"
    },
    {
        id: 5,
        layout: 'left-aligned',
        image: slideEquinox2026,
        badge: "Equinox 2026 – Make in India",
        title: <>A Science Exhibition <span className="text-brand-secondary">World Record</span></>,
        description: "Our students showcased innovation, science and entrepreneurship at Equinox 2026 – Make in India, an exhibition recognised with a world record attempt certificate.",
        buttonText: "Explore Events",
        buttonLink: "/uat-beyond-academics"
    },
    {
        id: 6,
        layout: 'left-aligned',
        image: slideSpectrumLaunch,
        badge: "Spectrum – School Anthem Launch",
        title: <>Our School <span className="text-brand-secondary">Anthem</span></>,
        description: "The official launch of Spectrum, the anthem of The Krisar Academy, celebrating the identity, values and shared spirit of our school community.",
        buttonText: "Watch Highlights",
        buttonLink: "/gallery"
    },
    {
        id: 7,
        layout: 'left-aligned',
        image: slideSportsInauguration,
        badge: "Sports Facilities Inauguration",
        title: <>A New Home for <span className="text-brand-secondary">Sport</span></>,
        description: "Our new cricket ground and sports facilities are open, giving students professional-standard space to train, compete and build discipline through sport.",
        buttonText: "See Facilities",
        buttonLink: "/facilities"
    },
    {
        id: 8,
        layout: 'left-aligned',
        image: slideRobotics,
        badge: "Engineering the Future",
        title: <>Engineering <span className="text-brand-secondary">the Future</span></>,
        description: "Our advanced visionary steps ensure students move beyond traditional classroom experiences. We elevate learners from passive users to active creators through a curriculum designed for the future.",
        buttonText: "Explore More",
        buttonLink: "/facilities"
    },
    {
        id: 9,
        layout: 'left-aligned',
        image: slideBeyondClassroom,
        badge: "Learning Beyond the Traditional Classroom",
        title: <>Beyond the <span className="text-brand-secondary">Traditional Classroom</span></>,
        description: "Practical exposure, project-based learning, and technology-driven instruction help students connect academic knowledge with real-world applications.",
        buttonText: "See More",
        buttonLink: "/uat-beyond-academics"
    },
    {
        id: 10,
        layout: 'standard',
        image: slideRobotics,
        badge: "AI & Robotics",
        title: <><span className="text-brand-secondary">AI & Robotics</span> Laboratory</>,
        leftContent: {
            title: <>Artificial<br />Intelligence</>,
            desc: "Gain hands-on experience in AI and building skills for the future."
        },
        rightContent: {
            title: <>Advanced<br />Robotics</>,
            desc: "World-class facilities for students to master modern technology."
        },
        buttonText: "Enquire Now",
        buttonLink: "/contact"
    },
    {
        id: 11,
        layout: 'left-aligned',
        image: slideNeetJee,
        badge: "NEET & JEE Coaching",
        title: <><span className="text-brand-secondary">NEET & JEE</span> Coaching Success</>,
        description: "Our academy's specialised coaching and mentorship help students succeed in competitive examinations, guiding learners toward careers in medicine and engineering.",
        buttonText: "Admission Now",
        buttonLink: "/admission"
    },
    {
        id: 12,
        layout: 'left-aligned',
        image: slideWelcome,
        badge: "Welcome to The Krisar Academy",
        title: <>Empowering <span className="text-brand-secondary">Future Leaders</span></>,
        description: "Discover a dynamic learning environment that embraces innovation, nurtures potential, and builds the perfect foundation for your child's success.",
        buttonText: "Start Your Journey",
        buttonLink: "/admission"
    },
]

// Scrim that keeps slide copy legible over the artwork. The left-to-right ramp reads
// well on a wide screen, but on a narrow portrait one it covers the entire width and
// smothers the photo, so mobile gets a bottom-up ramp instead: clear at the top,
// opaque behind the copy at the bottom.
const overlayClass = (layout) => {
    if (layout === 'image-only') {
        return 'bg-gradient-to-b from-brand-primary/70 via-transparent to-transparent'
    }
    if (layout === 'world-record' || layout === 'bottom-grid' || layout === 'collage-right') {
        // These layouts supply their own styled artwork.
        return 'bg-brand-primary/0'
    }
    if (layout === 'left-aligned') {
        return 'bg-gradient-to-t from-brand-primary via-brand-primary/70 to-brand-primary/20 md:bg-gradient-to-r md:from-brand-primary md:via-brand-primary/65 md:to-brand-primary/10'
    }
    return 'bg-brand-primary/40 md:bg-brand-primary/0'
}

// Renders the slide artwork. Slides with dedicated mobile art get both layers, each
// gated by a breakpoint, so the scrim only has to be described once.
const SlideBackground = ({ slide }) => {
    const box = slide.layout === 'image-only'
        ? 'inset-x-0 top-24 bottom-16 md:top-28 md:bottom-20 bg-contain bg-no-repeat'
        : 'inset-0 bg-cover'
    const layers = slide.mobileImage
        ? [{ src: slide.mobileImage, visibility: 'md:hidden' }, { src: slide.image, visibility: 'hidden md:block' }]
        : [{ src: slide.image, visibility: '' }]

    return layers.map(({ src, visibility }) => (
        <div
            key={src}
            className={`absolute z-0 ${box} ${slide.bgPosition || 'bg-center'} ${visibility}`}
            style={{ backgroundImage: `url(${src})`, backgroundColor: slide.bgColor }}
        >
            <div className={`absolute inset-0 ${overlayClass(slide.layout)}`}></div>
        </div>
    ))
}

const Banner = () => {
    const swiperRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <section className="bg-brand-primary h-[calc(100svh-80px)] md:h-[calc(100vh-100px)] lg:h-[calc(130vh-140px)] min-h-[600px] md:min-h-[500px] text-white overflow-hidden relative group">
            {/* Navigation Arrows — hidden on mobile, where they would sit on top of the
                slide heading. Touch swipe and the pagination dots cover navigation there. */}
            <button
                type="button"
                aria-label="Previous slide"
                className="hidden md:block absolute top-1/2 left-8 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-xl border border-white/20 transition-colors z-30 cursor-pointer"
                onClick={() => swiperRef.current?.slidePrev()}
            >
                <ArrowLeft size={24} />
            </button>
            <button
                type="button"
                aria-label="Next slide"
                className="hidden md:block absolute top-1/2 right-8 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-xl border border-white/20 transition-colors z-30 cursor-pointer"
                onClick={() => swiperRef.current?.slideNext()}
            >
                <ArrowRight size={24} />
            </button>

            <Swiper
                modules={[Autoplay]}
                loop
                speed={700}
                autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                onSwiper={(swiper) => { swiperRef.current = swiper }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={slide.id ?? index} className="relative h-full">
                            <SlideBackground slide={slide} />

                            <div className='max-w-[1540px] mx-auto px-4 h-full flex items-center justify-center relative z-10'>

                                {slide.layout === 'collage-right' ? (
                                    <div className="flex flex-col md:flex-row items-center w-full h-full relative pt-24 md:pt-0 pb-8 md:pb-0">

                                        {/* Left: Text Content */}
                                        <div className="flex flex-col items-center md:items-start text-center md:text-left z-10 w-full md:w-1/2 px-4 md:pl-16 lg:pl-24">
                                            {/* Badge */}
                                            <div className="bg-[#2A3C55]/20 backdrop-blur-md rounded px-4 py-2 border border-white/20 text-xs md:text-sm mb-6 inline-flex items-center gap-2 shadow-lg">
                                                <span className="text-brand-secondary">●</span>
                                                {slide.badge}
                                            </div>

                                            {/* Main Heading */}
                                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                                                {slide.title}
                                            </h1>

                                            {/* Description */}
                                            <p className="text-gray-200 text-sm md:text-xl mb-8 leading-relaxed max-w-xl font-medium">
                                                {slide.description}
                                            </p>

                                            {/* CTA Button */}
                                            <Button
                                                to={slide.buttonLink || "/admission"}
                                                className="flex items-center gap-3 transition-colors cursor-pointer bg-brand-secondary text-brand-primary hover:bg-white border-none font-bold px-8 py-3 md:py-4 text-base md:text-lg"
                                            >
                                                {slide.buttonText} <ArrowRight size={24} />
                                            </Button>
                                        </div>

                                        {/* Right: Side Image */}
                                        <div className="w-full md:w-1/2 h-full flex items-center justify-center md:justify-end md:pr-12 relative z-10 mt-8 md:mt-0">
                                            <img
                                                src={slide.sideImage}
                                                alt="Krisar Academy Collage"
                                                className="w-full max-w-[500px] md:max-w-none md:w-auto md:h-[70%] object-contain drop-shadow-2xl"
                                            />
                                        </div>
                                    </div>
                                ) : slide.layout === 'bottom-grid' ? (
                                    <div className="flex flex-col items-center w-full h-full relative justify-center pt-0 pb-8 md:pt-40 md:pb-12">

                                        {/* Center Content */}
                                        <div className="flex flex-col items-center text-center z-10 max-w-4xl mx-auto px-4 md:px-0">
                                            {/* Badge */}
                                            <div className="bg-[#2A3C55]/60 backdrop-blur-md rounded px-4 py-2 border border-white/20 text-xs md:text-sm mb-4 md:mb-6 inline-flex items-center gap-2 shadow-lg">
                                                <span className="text-brand-secondary">●</span>
                                                {slide.badge}
                                            </div>

                                            {/* Main Heading */}
                                            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 leading-tight">
                                                {slide.title}
                                            </h1>

                                            {/* Description */}
                                            <p className="text-gray-200 text-sm md:text-xl mb-6 md:mb-8 leading-relaxed max-w-2xl font-medium">
                                                {slide.description}
                                            </p>

                                            {/* CTA Button */}
                                            <div className="hidden md:block">
                                                <Button
                                                    to={slide.buttonLink || "/admission"}
                                                    className="flex items-center gap-3 transition-colors cursor-pointer bg-brand-secondary text-brand-primary hover:bg-white border-none font-bold px-8 py-3 md:py-4 text-base md:text-lg"
                                                >
                                                    {slide.buttonText} <ArrowRight size={24} />
                                                </Button>
                                            </div>
                                        </div>

                                        {/* Bottom Images Grid */}
                                        <div className="w-full z-20 px-4 md:px-12 max-w-[1600px] mx-auto mt-4 md:mt-auto">
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
                                                {slide.images.map((img, idx) => (
                                                    <div key={idx} className="transform transition-transform hover:-translate-y-1 duration-300">
                                                        <img src={img} alt={`${slide.title} highlight`} className="w-full h-28 md:h-64 object-cover rounded-sm border-2 border-white/50 shadow-lg" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : slide.layout === 'world-record' ? (
                                    <div className="flex flex-col items-center w-full h-full relative justify-center pt-0 pb-8 md:pb-0">

                                        {/* Center Content */}
                                        <div className="flex flex-col items-center text-center z-10 max-w-4xl mx-auto px-4 md:px-0">
                                            {/* Logo */}
                                            <div className="mb-3 md:mb-6 relative">
                                                <img src={slide.centerLogo} alt="Kingdom World Records" className="w-24 md:w-44 h-auto drop-shadow-2xl" />
                                            </div>

                                            {/* Badge */}
                                            <div className="bg-[#2A3C55]/80 backdrop-blur-md rounded px-3 py-1.5 md:px-6 md:py-2 border border-white/10 text-[10px] md:text-sm mb-3 md:mb-6 inline-flex items-center gap-2 shadow-lg">
                                                <span className="text-[#FFD700] text-lg leading-none">•</span>
                                                {slide.badge}
                                            </div>

                                            {/* Main Heading */}
                                            <h1 className="text-xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4 leading-tight">
                                                {slide.title}
                                            </h1>

                                            {/* Description */}
                                            <p className="text-gray-200 text-[10px] md:text-xl mb-0 md:mb-8 leading-relaxed max-w-2xl font-medium px-2">
                                                {slide.description}
                                            </p>

                                            {/* CTA Button - Desktop Only */}
                                            <div className="hidden md:block">
                                                <Button
                                                    to={slide.buttonLink || "/admission"}
                                                    className="flex items-center gap-3 transition-colors cursor-pointer bg-brand-secondary text-brand-primary hover:bg-white border-none font-bold px-8 py-4 text-lg"
                                                >
                                                    {slide.buttonText} <ArrowRight size={24} />
                                                </Button>
                                            </div>
                                        </div>

                                        {/* Images Container */}
                                        <div className="w-full md:absolute md:inset-0 md:pointer-events-none md:mt-0 z-20 mt-6">
                                            {/* Mobile Grid View */}
                                            <div className="grid grid-cols-2 gap-2 px-3 md:hidden">
                                                {slide.images.map((img, idx) => (
                                                    <img key={idx} src={img} alt="World Record Event" className="w-full h-24 object-cover" />
                                                ))}
                                            </div>

                                            {/* Desktop Floating View */}
                                            <div className="hidden md:block relative w-full h-full max-w-[1700px] mx-auto">
                                                {/* Top Left */}
                                                <img src={slide.images[2]} alt="World Record Celebration 1" className="absolute top-[40%] left-4 lg:left-12 w-92 h-44 object-contain rounded" />

                                                {/* Bottom Left */}
                                                <img src={slide.images[1]} alt="World Record Celebration 2" className="absolute bottom-[15%] left-4 lg:left-12 w-92 h-44 object-contain rounded" />

                                                {/* Top Right */}
                                                <img src={slide.images[0]} alt="World Record Celebration 3" className="absolute top-[40%] right-4 lg:right-12 w-92 h-44 object-contain rounded" />

                                                {/* Bottom Right */}
                                                <img src={slide.images[3]} alt="World Record Celebration 4" className="absolute bottom-[15%] right-4 lg:right-12 w-92 h-44 object-contain rounded" />
                                            </div>
                                        </div>
                                    </div>
                                ) : slide.layout === 'standard' ? (
                                    // Standard Layout (Centered Title, Split Content)
                                    // pt clears the overlaid navbar, pb clears the pagination dots.
                                    <div className="flex flex-col items-center w-full h-full justify-center gap-5 md:gap-8 pt-24 pb-20 md:pt-0 md:pb-0">
                                        {/* Main Heading */}
                                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center leading-tight">
                                            {slide.title}
                                        </h1>

                                        {/* Admissions Badge */}
                                        <div className="bg-white/10 backdrop-blur-md rounded px-4 py-2 md:px-6 md:py-2 border border-white/20 text-sm md:text-base text-center">
                                            <span className="text-brand-secondary">● </span>
                                            {slide.badge}
                                        </div>

                                        {/* Content Grid */}
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full items-center">
                                            {/* Left Content */}
                                            <div className="text-center md:text-left space-y-2 md:space-y-4 max-w-sm mx-auto md:mx-0 hidden md:block">
                                                <h3 className="text-brand-secondary text-xl md:text-2xl font-bold">{slide.leftContent.title}</h3>
                                                <p className="text-sm text-gray-300 leading-relaxed">
                                                    {slide.leftContent.desc}
                                                </p>
                                            </div>

                                            {/* Center Spacer */}
                                            <div className="flex justify-center">
                                                <Button
                                                    to={slide.buttonLink || "/contact"}
                                                    className="flex items-center gap-3 transition-colors cursor-pointer"
                                                >
                                                    {slide.buttonText || "Enquire Now"} <ArrowRight size={20} />
                                                </Button>
                                            </div>

                                            {/* Right Content */}
                                            <div className="text-center md:text-right space-y-2 md:space-y-4 max-w-sm mx-auto md:mx-0 md:ml-auto hidden md:block">
                                                <h3 className="text-brand-secondary text-xl md:text-2xl font-bold">{slide.rightContent.title}</h3>
                                                <p className="text-sm text-gray-300 leading-relaxed">
                                                    {slide.rightContent.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ) : slide.layout === 'image-only' ? (
                                    <div className="w-full h-full"></div>
                                ) : (
                                    // Left Aligned Layout (Certificates)
                                    // pt clears the overlaid navbar, pb clears the pagination dots.
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full items-center pl-0 md:pl-16 px-4 pt-24 pb-20 md:pt-0 md:pb-0">
                                        {/* Content Column */}
                                        <div className="text-left space-y-4 md:space-y-6 max-w-2xl">
                                            {/* Badge */}
                                            {slide.badge && (
                                                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded px-4 py-2 border border-white/20 w-fit">
                                                    <span className="text-brand-secondary text-xs">●</span>
                                                    <span className="text-xs md:text-sm font-medium">{slide.badge}</span>
                                                </div>
                                            )}

                                            {/* Heading */}
                                            {slide.title && (
                                                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                                    {slide.title}
                                                </h1>
                                            )}

                                            {/* Description */}
                                            {slide.description && (
                                                <p className="text-sm md:text-lg text-gray-200 leading-relaxed max-w-xl">
                                                    {slide.description}
                                                </p>
                                            )}

                                            {/* CTA Button */}
                                            {slide.buttonText && (
                                                <Button
                                                    to={slide.buttonLink || "/admission"}
                                                    className={`inline-flex items-center gap-2 transition-colors cursor-pointer mt-4 ${slide.buttonStyle === 'secondary' ? 'hover:bg-yellow-400' : 'hover:bg-white/20'}`}
                                                >
                                                    {slide.buttonText} <ArrowRight size={20} />
                                                </Button>
                                            )}
                                        </div>

                                        {/* Right Column (Certificates) */}
                                        <div className="hidden md:flex justify-center md:justify-end gap-4 pr-0 md:pr-10">
                                            {/* Certificates removed as per request */}
                                        </div>
                                    </div>
                                )}
                            </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Pagination Dots */}
            {/* Pagination Dots — 12 dots at gap-4 span the full width of a small phone,
                so the mobile gap is tightened to keep them clear of the screen edges. */}
            <div className="flex justify-center items-center gap-2 md:gap-4 px-4 absolute bottom-4 md:bottom-8 left-0 right-0 z-30">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        aria-label={`Go to slide ${index + 1}`}
                        aria-current={index === activeIndex}
                        className="shrink-0 transition-all focus:outline-none cursor-pointer"
                        onClick={() => swiperRef.current?.slideToLoop(index)}
                    >
                        <img
                            src={index === activeIndex ? activeDot : inactiveDot}
                            alt=""
                            aria-hidden="true"
                            className="w-2.5 h-2.5 md:w-4 md:h-4"
                        />
                    </button>
                ))}
            </div>
        </section>
    )
}

export default Banner
