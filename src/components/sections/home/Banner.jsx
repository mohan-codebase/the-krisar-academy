import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { ArrowRight, ArrowLeft } from 'lucide-react'
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
        focus: 'md:object-[10%_center]',
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

// The copy sits below the artwork rather than on top of it at every width, so the art
// needs no scrim for legibility — only a fade along its bottom edge so the band
// dissolves into the brand navy the copy sits on instead of ending on a hard line.
const FOOT_FADE = 'bg-gradient-to-t from-brand-primary from-0% via-transparent via-35% to-transparent'

// Roughly the height the copy takes at the foot of a desktop slide — the type sizes are
// fixed, so it only moves by a line of description either way. The arrows use it to work
// out where the artwork band ends; nothing is laid out from it.
const COPY_BAND = '15rem'

const overlayClass = (layout) => {
    if (layout === 'image-only') {
        return 'bg-gradient-to-b from-brand-primary/70 via-transparent to-transparent'
    }
    return FOOT_FADE
}

// Renders the slide artwork. Slides with dedicated mobile art get both layers, each
// gated by a breakpoint, so the scrim only has to be described once.
//
// The art is an <img> rather than a CSS background so the browser can defer the
// off-screen slides: a background-image on an in-tree element is fetched eagerly,
// which pulled all twelve slides (~1.7 MB) down on first paint.
const SlideArtwork = ({ slide, eager }) => {
    // The artwork always fills whatever band its parent gives it — the top of the
    // slide's flex column (see the slide markup), at every width.
    const box = slide.layout === 'image-only'
        ? 'inset-x-0 top-24 bottom-16 md:top-28 md:bottom-20'
        : 'inset-0'
    const isImageOnly = slide.layout === 'image-only'
    const hasMobileArt = Boolean(slide.mobileImage)
    // Every source photo here is a landscape event shot (~3:2–2:1). Cropped with
    // object-cover into the portrait band a phone gives the artwork, that means
    // covering the height and losing most of the width — people at the edges of a
    // group photo vanish. Slides without their own mobile crop fall back to showing
    // the whole frame (object-contain) on small screens, backed by a blurred,
    // scaled-up copy of the same image so there's no empty letterbox bar. From md up
    // the band is wide enough that object-cover reads fine, same as before.
    const needsSafeMobileFit = !isImageOnly && !hasMobileArt
    const fit = isImageOnly ? 'object-contain' : 'object-cover'
    const desktopFit = isImageOnly ? 'md:object-contain' : 'md:object-cover'
    // The section is deliberately taller than any of these ~3:2 event photos are wide
    // (115svh, so the artwork reads as a full landscape shot rather than a letterbox
    // strip — see the section below). object-cover has to crop roughly a third of
    // every photo's height to fill that band; centered, that crop lands half on the
    // top of people's heads. Biasing the window up trims the (usually empty) floor
    // and legs at the bottom instead, so faces stay in frame.
    const desktopFocus = slide.focus || 'md:object-[center_25%]'
    const layers = hasMobileArt
        ? [{ src: slide.mobileImage, visibility: 'md:hidden' }, { src: slide.image, visibility: 'hidden md:block' }]
        : [{ src: slide.image, visibility: '' }]

    // The insets live on a wrapper rather than on the <img> itself: insets alone do not
    // size a replaced element, so an image positioned that way falls back to its
    // intrinsic size and object-fit has nothing to fit against. w-full/h-full against
    // this box is what makes the cover/contain crop work.
    return (
        <div className="absolute inset-0 z-0" style={{ backgroundColor: slide.bgColor }}>
            <div className={`absolute ${box}`}>
                {needsSafeMobileFit && (
                    <img
                        src={slide.image}
                        alt=""
                        aria-hidden="true"
                        loading={eager ? 'eager' : 'lazy'}
                        decoding={eager ? 'sync' : 'async'}
                        className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-70 md:hidden"
                    />
                )}
                {layers.map(({ src, visibility }) => (
                    <img
                        key={src}
                        src={src}
                        alt={slide.alt || ''}
                        loading={eager ? 'eager' : 'lazy'}
                        fetchPriority={eager ? 'high' : 'auto'}
                        decoding={eager ? 'sync' : 'async'}
                        className={`absolute inset-0 w-full h-full ${needsSafeMobileFit ? 'object-contain' : fit} object-center ${desktopFit} ${desktopFocus} ${visibility}`}
                    />
                ))}
                <div className={`absolute inset-0 ${overlayClass(slide.layout)}`}></div>

                {/* The overlaid navbar sits on bare artwork now that the scrim has moved to
                    the foot of the band, so the logo needs its own tint to stay legible
                    over a bright photo. */}
                {slide.layout !== 'image-only' && (
                    <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-brand-primary/85 to-transparent md:h-32"></div>
                )}
            </div>
        </div>
    )
}

const Banner = () => {
    const swiperRef = useRef(null)

    // On a phone the banner fills what is left of the fold once NavbarTop is accounted
    // for — NavbarTop is the only element above it, and its height is its own padding
    // (py-2) plus a line of text, hence 2rem. From md up it deliberately overruns the
    // fold at 115svh so the artwork band reads as a full landscape photo rather than a
    // letterbox strip; the copy beneath it starts near the bottom of the fold and is
    // finished by scrolling.
    return (
        <section
            aria-label="School highlights"
            className="bg-brand-primary h-[calc(100svh-2rem)] md:h-[calc(115svh-3.5rem)] min-h-[600px] md:min-h-[700px] text-white overflow-hidden relative group"
        >
            {/* Navigation Arrows — hidden on mobile, where they would sit on top of the
                slide heading and touch swipe covers navigation anyway.
                They centre on the artwork band, not on the section: the copy occupies the
                foot of every slide, so this box stops short of it (COPY_BAND) and centres
                its two children in what is left. The box itself must not take pointer
                events, or it would swallow the drag gesture across the whole photo. */}
            <div
                className="hidden md:flex absolute inset-x-0 top-0 items-center justify-between px-8 z-30 pointer-events-none"
                style={{ bottom: COPY_BAND }}
            >
                <button
                    type="button"
                    aria-label="Previous slide"
                    className="pointer-events-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-xl border border-white/20 transition-colors cursor-pointer"
                    onClick={() => swiperRef.current?.slidePrev()}
                >
                    <ArrowLeft size={24} />
                </button>
                <button
                    type="button"
                    aria-label="Next slide"
                    className="pointer-events-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-xl border border-white/20 transition-colors cursor-pointer"
                    onClick={() => swiperRef.current?.slideNext()}
                >
                    <ArrowRight size={24} />
                </button>
            </div>

            <Swiper
                modules={[Autoplay]}
                loop
                speed={700}
                lazyPreloadPrevNext={1}
                observer={true}
                observeParents={true}
                autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                onSwiper={(swiper) => { swiperRef.current = swiper }}
                className="h-full w-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={slide.id ?? index} className="relative h-full w-full overflow-hidden">
                        {/* The slide is a column at every width: the artwork band takes
                            whatever height the copy leaves it, and the copy sits beneath it
                            on solid navy. A fixed percentage band cannot do this — long copy
                            on a short viewport would ride up over the photo. */}
                        <div className="h-full flex flex-col">
                            <div className="relative flex-1 min-h-[30%]">
                                <SlideArtwork slide={slide} eager={index === 0} />
                            </div>

                            <div className="shrink-0 relative z-10 w-full overflow-hidden">
                                <div className='w-full max-w-[1540px] mx-auto px-4 flex items-end justify-center'>

                                    {slide.layout === 'standard' ? (
                                        // Standard Layout (Centered Title, Split Content)
                                        // h-auto is what lets the parent's items-end settle this
                                        // block at the foot of the slide.
                                        <div className="flex flex-col items-center w-full h-auto justify-center gap-4 pt-5 pb-8">
                                            {/* Main Heading. The copy now shares the fold with the
                                                artwork instead of overlaying it, so the type is a
                                                step down — every pixel this band takes comes
                                                straight off the height of the photo above it. */}
                                            <h1 className="text-3xl font-bold text-center leading-tight">
                                                {slide.title}
                                            </h1>

                                            {/* Admissions Badge */}
                                            <div className="bg-white/10 backdrop-blur-md rounded px-4 py-1.5 border border-white/20 text-xs md:text-sm text-center">
                                                <span className="text-brand-secondary">● </span>
                                                {slide.badge}
                                            </div>

                                            {/* Content Grid */}
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-center">
                                                {/* Left Content */}
                                                <div className="text-center md:text-left space-y-2 max-w-sm mx-auto md:mx-0 hidden md:block">
                                                    <h3 className="text-brand-secondary text-lg md:text-xl font-bold">{slide.leftContent.title}</h3>
                                                    <p className="text-sm text-gray-300 leading-relaxed">
                                                        {slide.leftContent.desc}
                                                    </p>
                                                </div>

                                                {/* Center Spacer */}
                                                <div className="flex justify-center">
                                                    <Button
                                                        to={slide.buttonLink || "/contact"}
                                                        size="sm"
                                                        className="flex items-center gap-3 transition-colors cursor-pointer"
                                                    >
                                                        {slide.buttonText || "Enquire Now"} <ArrowRight size={16} />
                                                    </Button>
                                                </div>

                                                {/* Right Content */}
                                                <div className="text-center md:text-right space-y-2 max-w-sm mx-auto md:mx-0 md:ml-auto hidden md:block">
                                                    <h3 className="text-brand-secondary text-lg md:text-xl font-bold">{slide.rightContent.title}</h3>
                                                    <p className="text-sm text-gray-300 leading-relaxed">
                                                        {slide.rightContent.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ) : slide.layout === 'image-only' ? (
                                        <div className="w-full h-full"></div>
                                    ) : (
                                        // Centred Layout. The copy is capped by its own max-w
                                        // rather than by a half-width grid column: the artwork
                                        // no longer shares the horizontal space, and half a
                                        // container was too narrow to hold the longest headline
                                        // on one line.
                                        <div className="w-full px-4 pt-5 pb-8">
                                            {/* Content Column. Every pixel this band takes comes
                                                straight off the height of the photo above it, so
                                                the type and rhythm here stay deliberately tight
                                                and the description gets a width that holds it to
                                                two lines rather than three. */}
                                            <div className="text-center space-y-4 max-w-3xl mx-auto">
                                                {/* Badge */}
                                                {slide.badge && (
                                                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded px-3 py-1.5 border border-white/20 w-fit">
                                                        <span className="text-brand-secondary text-xs">●</span>
                                                        <span className="text-xs font-medium">{slide.badge}</span>
                                                    </div>
                                                )}

                                                {/* Heading */}
                                                {slide.title && (
                                                    <h1 className="text-3xl font-bold leading-tight">
                                                        {slide.title}
                                                    </h1>
                                                )}

                                                {/* Description */}
                                                {slide.description && (
                                                    <p className="text-sm text-gray-200 leading-relaxed max-w-xl md:max-w-2xl mx-auto">
                                                        {slide.description}
                                                    </p>
                                                )}

                                                {/* CTA Button */}
                                                {slide.buttonText && (
                                                    <Button
                                                        to={slide.buttonLink || "/admission"}
                                                        size="sm"
                                                        className="inline-flex items-center gap-2 transition-colors cursor-pointer mt-4 md:mt-1 hover:bg-white/20"
                                                    >
                                                        {slide.buttonText} <ArrowRight size={16} />
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

        </section>
    )
}

export default Banner
