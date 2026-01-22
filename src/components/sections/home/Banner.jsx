import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import activeDot from '../../../assets/images/home/banner/active.svg'
import inactiveDot from '../../../assets/images/home/banner/not-active.svg'
import Button from '../../ui/Button'

import banner1 from '../../../assets/images/home/banner/banner-1.avif'
import banner2 from '../../../assets/images/home/banner/banner-2.avif'
import banner3 from '../../../assets/images/home/banner/banner-3.avif'



const slides = [
    {
        id: 1,
        layout: 'standard', // Centered title, split content at bottom
        image: banner1,
        badge: "Admissions Going On – Pre-KG To Grade 11",
        title: <>Shaping Future Leaders <span className="text-brand-secondary">Through Excellence</span></>,
        leftContent: {
            title: <>Visionary Education<br />Since 2018</>,
            desc: "Krishar Academy Was Established With A Clear Mission To Deliver Holistic, Future-Ready Education, Nurturing Students To Grow As Confident Learners And Responsible Leaders."
        },
        rightContent: {
            title: <>Learners Today,<br />Leaders Tomorrow</>,
            desc: "With A Strong Focus On Academics, Life Skills, And Values, Krishar Academy Creates A Supportive Environment That Prepares Students To Excel In Both Education And Life."
        },
    },
    {
        id: 2,
        layout: 'left-aligned', // Left aligned title, content on left, certificates on right
        image: banner2,
        badge: "National & Guinness World Record Recognized",
        title: <>Proud Holders Of <span className="text-brand-secondary">National & Guinness</span> World Records</>,
        description: "Recognized For Outstanding Participation, Discipline, And Achievement That Sets Global Benchmarks.",
        isCertSlide: true
    },
    {
        id: 3,
        layout: 'left-aligned',
        image: banner3,
        badge: "Visionary Education Since 2018",
        title: <>Proud Holders Of <span className="text-brand-secondary">National & Guinness</span> World Records</>,
        description: "Recognized For Outstanding Participation, Discipline, And Achievement That Sets Global Benchmarks.",
        isCertSlide: true
    }
]

const Banner = () => {
    // Memoize plugins to prevent re-initialization on every render
    const plugins = React.useMemo(() => [Autoplay({ delay: 10000 })], [])
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, plugins)

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    // Simple dot navigation
    const [selectedIndex, setSelectedIndex] = React.useState(0)
    const [scrollSnaps, setScrollSnaps] = React.useState([])

    const onInit = useCallback((emblaApi) => {
        setScrollSnaps(emblaApi.scrollSnapList())
    }, [])

    const onSelect = useCallback((emblaApi) => {
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
        <section className="bg-brand-primary h-[calc(100vh-80px)] md:h-[calc(100vh-100px)] lg:h-[calc(110vh-140px)] min-h-[500px] text-white overflow-hidden relative group">
            {/* Navigation Arrows */}
            <button
                type="button"
                className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 md:p-3 rounded-xl border border-white/20 transition-colors z-30 cursor-pointer hidden md:block"
                onClick={scrollPrev}
            >
                <ArrowLeft size={24} />
            </button>
            <button
                type="button"
                className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 md:p-3 rounded-xl border border-white/20 transition-colors z-30 cursor-pointer hidden md:block"
                onClick={scrollNext}
            >
                <ArrowRight size={24} />
            </button>

            <div className="embla h-full overflow-hidden" ref={emblaRef}>
                <div className="embla__container h-full flex">
                    {slides.map((slide, index) => (
                        <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 relative h-full">
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center z-0"
                                style={{ backgroundImage: `url(${slide.image})` }}
                            >
                                {/* Gradient Overlay based on layout */}
                                <div className={`absolute inset-0 ${slide.layout === 'left-aligned'
                                    ? 'bg-gradient-to-r from-brand-primary via-brand-primary/80 md:via-brand-primary/60 to-brand-primary/40 md:to-transparent'
                                    : 'bg-brand-primary/40 md:bg-brand-primary/0'
                                    }`}></div>
                            </div>

                            <div className='max-w-[1440px] mx-auto px-4 h-full flex items-center justify-center relative z-10'>

                                {slide.layout === 'standard' ? (
                                    // Standard Layout (Centered Title, Split Content)
                                    <div className="flex flex-col items-center w-full pt-28  pb-8 md:py-1 h-full justify-center">
                                        {/* Main Heading */}
                                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-4 md:mb-0 leading-tight mt-48">
                                            {slide.title}
                                        </h1>

                                        {/* Admissions Badge */}
                                        <div className="bg-white/10 backdrop-blur-md rounded px-4 py-2 md:px-6 md:py-2 mb-8 md:mb-32 border border-white/20 text-sm md:text-base">
                                            <span className="text-brand-secondary">● </span>
                                            {slide.badge}
                                        </div>

                                        {/* Content Grid */}
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full items-center mt-auto md:mt-0">
                                            {/* Left Content */}
                                            <div className="text-center md:text-left space-y-2 md:space-y-4 max-w-sm mx-auto md:mx-0 hidden md:block">
                                                <h3 className="text-brand-secondary text-xl md:text-2xl font-bold">{slide.leftContent.title}</h3>
                                                <p className="text-sm text-gray-300 leading-relaxed">
                                                    {slide.leftContent.desc}
                                                </p>
                                            </div>

                                            {/* Center Spacer */}
                                            <div className="flex justify-center mb-5 md:mt-98">
                                                <Button
                                                    href="tel:919585335552"
                                                    className="flex items-center gap-3 transition-colors cursor-pointer"
                                                >
                                                    CALL NOW <ArrowRight size={20} />
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
                                ) : (
                                    // Left Aligned Layout (Certificates)
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full items-center pl-0 md:pl-16 px-4">
                                        {/* Content Column */}
                                        <div className="text-left space-y-4 md:space-y-6 max-w-2xl pt-28 md:pt-0">
                                            {/* Badge */}
                                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded px-4 py-2 border border-white/20 w-fit">
                                                <span className="text-brand-secondary text-xs">●</span>
                                                <span className="text-xs md:text-sm font-medium">{slide.badge}</span>
                                            </div>

                                            {/* Heading */}
                                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                                {slide.title}
                                            </h1>

                                            {/* Description */}
                                            <p className="text-sm md:text-lg text-gray-200 leading-relaxed max-w-xl">
                                                {slide.description}
                                            </p>

                                            {/* CTA Button */}
                                            <Button
                                                href="tel:919585335552"
                                                className="inline-flex items-center gap-2 hover:bg-yellow-400 transition-colors cursor-pointer mt-4"
                                            >
                                                CALL NOW <ArrowRight size={20} />
                                            </Button>
                                        </div>

                                        {/* Right Column (Certificates) */}
                                        <div className="hidden md:flex justify-center md:justify-end gap-4 pr-0 md:pr-10">
                                            {/* Certificates removed as per request */}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-4 absolute bottom-4 md:bottom-8 left-0 right-0 z-30">
                {scrollSnaps.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className="transition-all focus:outline-none cursor-pointer"
                        onClick={() => emblaApi && emblaApi.scrollTo(index)}
                    >
                        <img
                            src={index === selectedIndex ? activeDot : inactiveDot}
                            alt={index === selectedIndex ? "Active slide" : "Inactive slide"}
                            className="w-3 h-3 md:w-4 md:h-4"
                        />
                    </button>
                ))}
            </div>
        </section>
    )
}

export default Banner