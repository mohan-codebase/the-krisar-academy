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
        layout: 'standard',
        image: banner3,
        badge: "Visionary Education Since 2018",
        title: <>Learners Today, <span className="text-brand-secondary">Leaders Tomorrow</span></>,
        leftContent: {
            title: "Holistic Development",
            desc: "We believe in nurturing every aspect of a child's growth - academic, physical, emotional, and social."
        },
        rightContent: {
            title: "Global Standards",
            desc: "Our curriculum and facilities are designed to meet international standards of educational excellence."
        }
    }
]

const Banner = () => {
    // Memoize plugins to prevent re-initialization on every render
    const plugins = React.useMemo(() => [Autoplay({ delay: 5000 })], [])
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
        <section className="bg-brand-primary h-[calc(110vh-140px)] min-h-[600px] text-white overflow-hidden relative group">
            {/* Navigation Arrows */}
            <button
                type="button"
                className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-lg border border-white/10 transition-colors z-30 cursor-pointer"
                onClick={scrollPrev}
            >
                <ArrowLeft size={24} />
            </button>
            <button
                type="button"
                className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-lg border border-white/10 transition-colors z-30 cursor-pointer"
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
                                    ? 'bg-gradient-to-r from-brand-primary via-brand-primary/60 to-transparent'
                                    : 'bg-brand-primary/0'
                                    }`}></div>
                            </div>

                            <div className='max-w-[1440px] mx-auto px-4 h-full flex items-center justify-center relative z-10'>

                                {slide.layout === 'standard' ? (
                                    // Standard Layout (Centered Title, Split Content)
                                    <div className="flex flex-col items-center w-full py-12">
                                        {/* Main Heading */}
                                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
                                            {slide.title}
                                        </h1>

                                        {/* Admissions Badge */}
                                        <div className="bg-white/10 backdrop-blur-md rounded md:mb-50 px-6 py-2 mb-12 border border-white/20">
                                            <span className="text-brand-secondary">● </span>
                                            {slide.badge}
                                        </div>

                                        {/* Content Grid */}
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-center mt-auto">
                                            {/* Left Content */}
                                            <div className="text-center md:text-left space-y-4 max-w-sm mx-auto md:mx-0">
                                                <h3 className="text-brand-secondary text-2xl font-bold">{slide.leftContent.title}</h3>
                                                <p className="text-sm text-gray-300 leading-relaxed">
                                                    {slide.leftContent.desc}
                                                </p>
                                            </div>

                                            {/* Center Spacer */}
                                            <div className="hidden md:flex justify-center md:mt-70">
                                                <Button
                                                    className="flex items-center gap-2 hover:bg-yellow-400 transition-colors cursor-pointer"
                                                >
                                                    CALL NOW <ArrowRight size={20} />
                                                </Button>
                                            </div>

                                            {/* Right Content */}
                                            <div className="text-center md:text-right space-y-4 max-w-sm mx-auto md:mx-0 md:ml-auto">
                                                <h3 className="text-brand-secondary text-2xl font-bold">{slide.rightContent.title}</h3>
                                                <p className="text-sm text-gray-300 leading-relaxed">
                                                    {slide.rightContent.desc}
                                                </p>
                                            </div>
                                        </div>
                                        {/* Mobile CTA */}
                                        <div className="md:hidden mt-8">
                                            <Button
                                                className="flex items-center gap-2 hover:bg-yellow-400 transition-colors cursor-pointer"
                                            >
                                                CALL NOW <ArrowRight size={20} />
                                            </Button>
                                        </div>
                                    </div>
                                ) : (
                                    // Left Aligned Layout (Certificates)
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-center pl-8 md:pl-16">
                                        {/* Content Column */}
                                        <div className="text-left space-y-6 max-w-2xl">
                                            {/* Badge */}
                                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded px-4 py-2 border border-white/20 w-fit">
                                                <span className="text-brand-secondary text-xs">●</span>
                                                <span className="text-sm font-medium">{slide.badge}</span>
                                            </div>

                                            {/* Heading */}
                                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                                {slide.title}
                                            </h1>

                                            {/* Description */}
                                            <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-xl">
                                                {slide.description}
                                            </p>

                                            {/* CTA Button */}
                                            <Button
                                                className="flex items-center gap-2 hover:bg-yellow-400 transition-colors cursor-pointer mt-4"
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
            <div className="flex justify-center gap-4 absolute bottom-8 left-0 right-0 z-30">
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
                            className="w-4 h-4"
                        />
                    </button>
                ))}
            </div>
        </section>
    )
}

export default Banner