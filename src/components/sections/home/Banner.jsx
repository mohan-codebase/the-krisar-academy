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
        focus: 'object-[10%_center]',
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
        bgColor: '#061A4D',
        // This slide carries its copy inside the artwork, so the alt text has to
        // stand in for the whole slide rather than describe decoration.
        alt: "The Krisar Academy receives the Outstanding School in Learning Initiative & Skill Development Award 2026 at the Education Leadership Summit Awards.",
    },
    {
        id: 4,
        layout: 'left-aligned',
        image: slideAnnualDay,
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
// On mobile the copy sits below the artwork rather than on top of it, so the art
// needs no scrim for legibility — only a fade along its bottom edge so the band
// dissolves into the brand navy the copy sits on instead of ending on a hard line.
// The md: stops restore the full left-to-right ramp the desktop overlay layout needs,
// and have to reset the gradient stop positions the mobile ramp sets.
const MOBILE_FOOT_FADE = 'bg-gradient-to-t from-brand-primary from-0% via-transparent via-35% to-transparent'

const overlayClass = (layout) => {
    if (layout === 'image-only') {
        return 'bg-gradient-to-b from-brand-primary/70 via-transparent to-transparent'
    }
    if (layout === 'left-aligned') {
        return `${MOBILE_FOOT_FADE} md:bg-gradient-to-r md:from-brand-primary md:from-0% md:via-brand-primary/65 md:via-50% md:to-brand-primary/10`
    }
    return `${MOBILE_FOOT_FADE} md:bg-none`
}

// Renders the slide artwork. Slides with dedicated mobile art get both layers, each
// gated by a breakpoint, so the scrim only has to be described once.
//
// The art is an <img> rather than a CSS background so the browser can defer the
// off-screen slides: a background-image on an in-tree element is fetched eagerly,
// which pulled all twelve slides (~1.7 MB) down on first paint.
const SlideArtwork = ({ slide, eager }) => {
    // The artwork always fills whatever band its parent gives it. On a phone that band
    // is the top of a flex column (see the slide markup); from md up the parent goes
    // static and this resolves against the slide itself, going full-bleed.
    const box = slide.layout === 'image-only'
        ? 'inset-x-0 top-24 bottom-16 md:top-28 md:bottom-20'
        : 'inset-0'
    const fit = slide.layout === 'image-only' ? 'object-contain' : 'object-cover'
    const layers = slide.mobileImage
        ? [{ src: slide.mobileImage, visibility: 'md:hidden' }, { src: slide.image, visibility: 'hidden md:block' }]
        : [{ src: slide.image, visibility: '' }]

    // The insets live on a wrapper rather than on the <img> itself: insets alone do not
    // size a replaced element, so an image positioned that way falls back to its
    // intrinsic size and object-fit has nothing to fit against. w-full/h-full against
    // this box is what makes the cover/contain crop work.
    return (
        <div className="absolute inset-0 z-0" style={{ backgroundColor: slide.bgColor }}>
            <div className={`absolute ${box}`}>
                {layers.map(({ src, visibility }) => (
                    <img
                        key={src}
                        src={src}
                        alt={slide.alt || ''}
                        loading={eager ? 'eager' : 'lazy'}
                        fetchPriority={eager ? 'high' : 'auto'}
                        decoding={eager ? 'sync' : 'async'}
                        className={`absolute inset-0 w-full h-full ${fit} ${slide.focus || 'object-center'} ${visibility}`}
                    />
                ))}
                <div className={`absolute inset-0 ${overlayClass(slide.layout)}`}></div>

                {/* The overlaid navbar sits on bare artwork now that the mobile scrim has
                    moved to the foot of the band, so the logo needs its own tint to stay
                    legible over a bright photo. Desktop gets this from its own ramp. */}
                {slide.layout !== 'image-only' && (
                    <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-brand-primary/85 to-transparent md:hidden"></div>
                )}
            </div>
        </div>
    )
}

const Banner = () => {
    const swiperRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(0)

    // The banner fills what is left of the fold once NavbarTop is accounted for.
    // NavbarTop is the only element above it, and its height is its own padding
    // (py-2 / md:py-4) plus a line of text — hence 2rem / 3.5rem. Overshooting here
    // pushes the pagination dots below the fold, where nobody finds them.
    return (
        <section
            aria-label="School highlights"
            className="bg-brand-primary h-[calc(100svh-2rem)] md:h-[calc(100svh-3.5rem)] min-h-[600px] md:min-h-[500px] text-white overflow-hidden relative group"
        >
            {/* Navigation Arrows — hidden on mobile, where they would sit on top of the
                slide heading. Touch swipe and the pagination dots cover navigation there. */}
            <button
                type="button"
                aria-label="Previous slide"
                className="hidden md:block absolute bottom-6 md:bottom-10 left-8 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-xl border border-white/20 transition-colors z-30 cursor-pointer"
                onClick={() => swiperRef.current?.slidePrev()}
            >
                <ArrowLeft size={24} />
            </button>
            <button
                type="button"
                aria-label="Next slide"
                className="hidden md:block absolute bottom-6 md:bottom-10 right-8 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-xl border border-white/20 transition-colors z-30 cursor-pointer"
                onClick={() => swiperRef.current?.slideNext()}
            >
                <ArrowRight size={24} />
            </button>

            <Swiper
                modules={[Autoplay]}
                loop
                speed={700}
                lazyPreloadPrevNext={1}
                autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                onSwiper={(swiper) => { swiperRef.current = swiper }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={slide.id ?? index} className="relative h-full">
                        {/* On a phone the slide is a column: the artwork band takes whatever
                            height the copy leaves it, and the copy sits beneath it on solid
                            navy. From md up the band goes static and the copy goes absolute,
                            so they stack again as the full-bleed overlay design. A fixed
                            percentage band cannot do this — long copy on a short phone would
                            ride up over the photo. */}
                        <div className="h-full flex flex-col md:block">
                            <div className="relative flex-1 min-h-[30%] md:static md:min-h-0">
                                <SlideArtwork slide={slide} eager={index === 0} />
                            </div>

                            <div className="shrink-0 relative z-10 md:absolute md:inset-0">
                                <div className='max-w-[1540px] mx-auto px-4 md:h-full flex items-end md:items-center justify-center'>

                                    {slide.layout === 'standard' ? (
                                        // Standard Layout (Centered Title, Split Content)
                                        // h-auto on mobile is what lets the parent's items-end
                                        // settle this block at the foot of the slide; pb clears
                                        // the pagination dots.
                                        <div className="flex flex-col items-center w-full h-auto md:h-full justify-center gap-5 md:gap-8 pt-6 pb-14 md:pt-0 md:pb-0">
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
                                        // Left Aligned Layout. The empty second column is what
                                        // holds the copy to the left half on md+ and lets the
                                        // artwork carry the right.
                                        // pb clears the pagination dots.
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full items-center pl-0 md:pl-16 px-4 pt-6 pb-14 md:pt-0 md:pb-0">
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
                                                        className="inline-flex items-center gap-2 transition-colors cursor-pointer mt-4 hover:bg-white/20"
                                                    >
                                                        {slide.buttonText} <ArrowRight size={20} />
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
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
