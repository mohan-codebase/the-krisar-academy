import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import activeDot from '../../../assets/images/home/banner/active.svg'
import inactiveDot from '../../../assets/images/home/banner/not-active.svg'
import Button from '../../ui/Button'

import banner1 from '../../../assets/images/home/banner/banner-1.avif'
import banner2 from '../../../assets/images/home/banner/newbanner2.png'
import bannerNew from '../../../assets/images/home/banner/Banner new.avif'

import banner4 from '../../../assets/images/home/banner/banner-4.avif'
import banner5 from '../../../assets/images/home/banner/banner-5.avif'
import banner6 from '../../../assets/images/home/banner/banner-6.avif'
import wrImg1 from '../../../assets/images/home/banner/banner-6/bannertop-img-1.png'
import wrImg2 from '../../../assets/images/home/banner/banner-6/bannertop-img-2.png'
import wrImg3 from '../../../assets/images/home/banner/banner-6/bannertop-img-3.png'
import wrImg4 from '../../../assets/images/home/banner/banner-6/bannertop-img-4.png'
import wrLogo from '../../../assets/images/home/banner/banner-6/center-logo.webp'

import bannerRoboticsNew from '../../../assets/images/home/banner/upscale-banner.jpg'
import bannerExtra4 from '../../../assets/images/home/banner/banner-by-krisar-acadamy-4.avif'
import bannerExtra5 from '../../../assets/images/home/banner/banner-by-krisar-acadamy-5.avif'
import bannerExtra5Mobile from '../../../assets/images/home/banner/mobileview-banner.png'

const slides = [
    {
        id: 1,
        layout: 'standard',
        image: banner1,
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
        image: banner2,
        bgPosition: 'bg-[10%_center]',
        badge: "CBSE Academic Affiliation",
        title: <>CBSE Academic <span className="text-brand-secondary">Affiliation</span></>,
        description: "Our academy is proudly affiliated with the CBSE board, ensuring that the school provides nationally recognised education with intellectual depth and academic standards.",
        buttonText: "View Curriculum",
        buttonLink: "/uat-academics"
    },
    {
        id: 10,
        layout: 'image-only',
        image: bannerExtra5,
        mobileImage: bannerExtra5Mobile,
        bgPosition: 'bg-center',
    },
    {
        id: 11,
        layout: 'left-aligned',
        image: bannerExtra4,
        bgPosition: 'bg-center',
        badge: "Annual Day Celebration",
        title: <>Frequenzeee'26 <span className="text-brand-secondary">Annual Day</span></>,
        description: "Celebrating excellence, talent, and achievements of our students at The Krisar Academy Annual Day Celebration.",
        buttonText: "Explore Events",
        buttonLink: "/uat-beyond-academics"
    },
    // {
    //     id: 3,
    //     layout: 'standard',
    //     image: banner1,
    //     badge: "Building Confident Learners",
    //     title: <>Building <span className="text-brand-secondary">Confident Learners</span></>,
    //     leftContent: {
    //         title: <>Think<br />Independently</>,
    //         desc: "Students are encouraged to think independently and explore new ideas."
    //     },
    //     rightContent: {
    //         title: <>Succeed in<br />the World</>,
    //         desc: "We focus on strengthening both knowledge and character for success."
    //     },
    //     buttonText: "Our Approach"
    // },
    {
        id: 4,
        layout: 'left-aligned',
        image: bannerRoboticsNew,
        badge: "Engineering the Future",
        title: <>Engineering <span className="text-brand-secondary">the Future</span></>,
        description: "Our advanced visionary steps ensure students move beyond traditional classroom experiences. We elevate learners from passive users to active creators through a curriculum designed for the future.",
        buttonText: "Explore More",
        buttonLink: "/facilities"
    },
    {
        id: 5,
        layout: 'left-aligned',
        image: banner5,
        badge: "Learning Beyond the Traditional Classroom",
        title: <>Beyond the <span className="text-brand-secondary">Traditional Classroom</span></>,
        description: <span>Practical exposure, project-based learning,<br /> and technology-driven <br />instruction help students <br />  connect academicknowledge <br />with real-world applications.</span>,
        buttonText: "See More",
        buttonLink: "/uat-beyond-academics"
    },
    {
        id: 6,
        layout: 'standard',
        image: bannerRoboticsNew,
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
        id: 7,
        layout: 'left-aligned',
        image: banner4,
        badge: "NEET & JEE Coaching",
        title: <><span className="text-brand-secondary">NEET & JEE</span> Coaching Success</>,
        description: "Our academy's specialised coaching and mentorship help students succeed in competitive examinations, guiding learners toward careers in medicine and engineering.",
        buttonText: "Admission Now",
        buttonLink: "/admission"
    },
    // {
    //     id: 8,
    //     layout: 'standard',
    //     image: banner1,
    //     badge: "Montessori Kindergarten",
    //     title: <>Montessori <span className="text-brand-secondary">Kindergarten</span></>,
    //     leftContent: {
    //         title: <>Independence &<br />Creativity</>,
    //         desc: "Focusing on building a strong foundation of learning for young children."
    //     },
    //     rightContent: {
    //         title: <>Curiosity &<br />Foundation</>,
    //         desc: "Our program nurtures independent thinkers from early childhood."
    //     },
    //     buttonText: "Join Us"
    // },
    {
        id: 9,
        layout: 'left-aligned',
        image: bannerNew,
        badge: "Welcome to The Krisar Academy",
        title: <>Empowering <span className="text-brand-secondary">Future Leaders</span></>,
        description: "Discover a dynamic learning environment that embraces innovation, nurtures potential, and builds the perfect foundation for your child's success.",
        buttonText: "Start Your Journey",
        buttonLink: "/admission"
    },
]

const Banner = () => {
    // Memoize plugins to prevent re-initialization on every render
    const plugins = React.useMemo(() => [Autoplay({ delay: 4000 })], [])
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
        <section className="bg-brand-primary h-[calc(100vh-80px)] md:h-[calc(100vh-100px)] lg:h-[calc(130vh-140px)] min-h-[500px] text-white overflow-hidden relative group">
            {/* Navigation Arrows */}
            <button
                type="button"
                className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 md:p-3 rounded-xl border border-white/20 transition-colors z-30 cursor-pointer"
                onClick={scrollPrev}
            >
                <ArrowLeft size={24} />
            </button>
            <button
                type="button"
                className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 md:p-3 rounded-xl border border-white/20 transition-colors z-30 cursor-pointer"
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
                                className={`absolute inset-0 bg-cover z-0 ${slide.bgPosition || 'bg-center'} ${slide.mobileImage ? 'hidden md:block' : ''}`}
                                style={{ backgroundImage: `url(${slide.image})` }}
                            >
                                {/* Gradient Overlay based on layout */}
                                <div className={`absolute inset-0 ${slide.layout === 'image-only' ? 'hidden' :
                                    slide.layout === 'world-record' || slide.layout === 'bottom-grid' || slide.layout === 'collage-right'
                                        ? 'bg-brand-primary/0' // Keep transparent for these custom graphical slides if bg is already dark/styled
                                        : slide.layout === 'left-aligned'
                                            ? 'bg-gradient-to-r from-brand-primary via-brand-primary/80 md:via-brand-primary/10 to-brand-primary/40 md:to-transparent'
                                            : 'bg-brand-primary/40 md:bg-brand-primary/0'
                                    }`}></div>
                            </div>

                            {/* Mobile Background Image (if provided) */}
                            {slide.mobileImage && (
                                <div
                                    className={`absolute inset-0 bg-cover z-0 ${slide.bgPosition || 'bg-center'} md:hidden`}
                                    style={{ backgroundImage: `url(${slide.mobileImage})` }}
                                >
                                    {/* Gradient Overlay based on layout */}
                                    <div className={`absolute inset-0 ${slide.layout === 'image-only' ? 'hidden' :
                                        slide.layout === 'world-record' || slide.layout === 'bottom-grid' || slide.layout === 'collage-right'
                                            ? 'bg-brand-primary/0' // Keep transparent for these custom graphical slides if bg is already dark/styled
                                            : slide.layout === 'left-aligned'
                                                ? 'bg-gradient-to-r from-brand-primary via-brand-primary/80 md:via-brand-primary/10 to-brand-primary/40 md:to-transparent'
                                                : 'bg-brand-primary/40 md:bg-brand-primary/0'
                                        }`}></div>
                                </div>
                            )}

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
                                    <div className="flex flex-col items-center w-full pt-28  pb-8 md:py-1 h-full justify-center">
                                        {/* Main Heading */}
                                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-4 md:mb-0 leading-tight md:mt-42">
                                            {slide.title}
                                        </h1>

                                        {/* Admissions Badge */}
                                        <div className="bg-white/10 backdrop-blur-md rounded px-4 py-2 md:px-6 md:py-2 mb-8 md:mb-32 md:mt-12 border border-white/20 text-sm md:text-base text-center">
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
                                            <div className="flex justify-center mb-20 md:mt-98">
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
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full items-center pl-0 md:pl-16 px-4">
                                        {/* Content Column */}
                                        <div className="text-left space-y-4 md:space-y-6 max-w-2xl pt-28 md:pt-0">
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