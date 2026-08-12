import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Star, ChevronLeft, ChevronRight, User, Quote } from 'lucide-react';
import activeDot from '../../../assets/images/ui/carousel-dot-active.svg';
import inactiveDot from '../../../assets/images/ui/carousel-dot-inactive.svg';

import img5 from '../../../assets/images/home/success-stories/testimonial-4.jpeg';
import img6 from '../../../assets/images/home/success-stories/testimonial-5.jpeg';
import img7 from '../../../assets/images/home/success-stories/testimonial-6.jpeg';
import img8 from '../../../assets/images/home/success-stories/testimonial-7.jpeg';

const stories = [
    {
        id: 5,
        name: "A Krisar Parent",
        role: "Parent",
        image: img5,
        rating: 5.0,
        review: "At The Krisar Academy, we truly appreciate the strong bond between parents and teachers. The teachers are approachable, supportive, and always keep us informed about our child's progress. Their guidance and regular communication help us work together for the overall development of our children. We are happy to be part of a school where parents and teachers work hand in hand for the better future of every child."
    },
    {
        id: 6,
        name: "A Krisar Parent",
        role: "Parent",
        image: img6,
        rating: 5.0,
        review: "We are happy to see that sports are given an important place at Krisar Academy. The school encourages every child to participate and develop fitness, teamwork, discipline, confidence, and leadership skills. We appreciate the opportunities provided through regular sports activities and training, which help our children face challenges positively, respect others, and strive for excellence both on and off the field."
    },
    {
        id: 7,
        name: "A Krisar Parent",
        role: "Parent",
        image: img7,
        rating: 5.0,
        review: "We are happy that Krisar Academy focuses on the overall development of our children, not just academics. The school provides a good balance of studies, sports, co-curricular activities, English communication, discipline, values, and leadership opportunities. We appreciate the efforts taken by the school to nurture our children into confident, responsible, and well-rounded individuals, prepared to face the future with confidence."
    },
    {
        id: 8,
        name: "A Krisar Parent",
        role: "Parent",
        image: img8,
        rating: 5.0,
        review: "Overall, we are very happy with the school and the teachers. We appreciate the care, guidance, and effort given towards the students. We would be happy to see more opportunities for interactive activities and practical learning, which would make the learning experience even more enjoyable for the children. Thank you for your continued support."
    },
    {
        id: 9,
        name: "A Krisar Parent",
        role: "Parent",
        image: null,
        rating: 5.0,
        review: "Our heart-felt appreciation goes to the Krisar Academy management, teachers and staff for its strong academic excellence, co-curricular and extra curricular activities. It also inculcates value education. It helps for holistic development by focusing on sports, arts and cultural activities. Yes, it provides a wonderful foundation to all the children for the best future."
    }
];

const SuccessStories = () => {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="bg-[url('./assets/images/home/news-updates/bg.avif')] bg-cover bg-center md:py-20 py-10 relative overflow-hidden text-center text-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col items-center">

                {/* Header */}
                <div className="mb-10 md:mb-14">
                    <div className="inline-flex items-center gap-2 border border-white/20 rounded px-4 py-1.5 bg-white/5 backdrop-blur-sm mb-6">
                        <User size={16} className="text-gray-300" />
                        <span className="uppercase tracking-wider text-sm text-gray-300">Our Parents Say</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Parent's <span className="text-brand-secondary">Feedback</span> & Alumni Impact
                    </h2>

                    <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
                        Parents consistently praise our academy's innovative teaching methods and learning experiences that inspire curiosity and confidence among students. The alumni of Krisar Academy reflect the learning, values, and confidence gained during their years at the school.
                    </p>
                </div>

                {/* Testimonial Carousel */}
                <div className="relative w-full max-w-3xl mx-auto">
                    <Swiper
                        modules={[Autoplay]}
                        loop
                        autoHeight
                        speed={600}
                        autoplay={{ delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                        onSwiper={(swiper) => { swiperRef.current = swiper }}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    >
                        {stories.map((story) => (
                            <SwiperSlide key={story.id}>
                                <div className="bg-[#1e293b] border border-white/10 rounded-3xl p-8 md:p-10 mx-1 my-2 flex flex-col items-center text-center gap-5">
                                    <Quote size={32} className="text-brand-secondary/70" fill="currentColor" />

                                    <p className="text-gray-200 text-base md:text-lg leading-relaxed max-w-2xl">
                                        {story.review}
                                    </p>

                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={18}
                                                fill={i < Math.round(story.rating) ? 'currentColor' : 'none'}
                                                className="text-yellow-500"
                                            />
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-3 mt-1">
                                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/10 shrink-0 flex items-center justify-center bg-white/5">
                                            {story.image
                                                ? <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                                                : <User size={24} className="text-gray-400" />
                                            }
                                        </div>
                                        <div className="flex flex-col text-left">
                                            <h3 className="text-lg font-bold text-white leading-tight">{story.name}</h3>
                                            <p className="text-gray-400 text-sm">{story.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Navigation: arrows + dots */}
                <div className="flex items-center gap-6 mt-8">
                    <button
                        type="button"
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-secondary transition-colors cursor-pointer"
                    >
                        <ChevronLeft size={24} className="text-gray-400 hover:text-white" />
                    </button>

                    <div className="flex gap-3">
                        {stories.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                className="transition-all focus:outline-none cursor-pointer"
                                onClick={() => swiperRef.current?.slideToLoop(index)}
                            >
                                <img
                                    src={index === activeIndex ? activeDot : inactiveDot}
                                    alt={index === activeIndex ? "Active testimonial" : "Inactive testimonial"}
                                    className="w-3 h-3 md:w-3.5 md:h-3.5"
                                />
                            </button>
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={() => swiperRef.current?.slideNext()}
                        className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-secondary transition-colors cursor-pointer"
                    >
                        <ChevronRight size={24} className="text-gray-400 hover:text-white" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;
