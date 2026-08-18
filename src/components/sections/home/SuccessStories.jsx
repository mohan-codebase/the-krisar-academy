import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Star, ChevronLeft, ChevronRight, User, Quote, X } from 'lucide-react';
import activeDot from '../../../assets/images/ui/carousel-dot-active.svg';
import inactiveDot from '../../../assets/images/ui/carousel-dot-inactive.svg';

import img1 from '../../../assets/images/home/success-stories/testimonial-1.avif';
import img2 from '../../../assets/images/home/success-stories/testimonial-2.jpeg';
import img3 from '../../../assets/images/home/success-stories/testimonial-3.jpeg';
import img4 from '../../../assets/images/home/success-stories/testimonial-4.jpeg';
import img5 from '../../../assets/images/home/success-stories/testimonial-5.jpeg';
import img6 from '../../../assets/images/home/success-stories/testimonial-6.jpeg';
import img7 from '../../../assets/images/home/success-stories/testimonial-7.jpeg';
import img8 from '../../../assets/images/home/success-stories/testimonial-8.jpeg';
import img9 from '../../../assets/images/home/success-stories/testimonial-9.jpg';

const stories = [
    {
        id: 1,
        name: "A Krisar Parent",
        role: "Parent",
        image: img1,
        rating: 5.0,
        review: "When we shifted from Chennai, we were clueless where to admit her for academics. We found our school in Google and enquired a few relatives and admitted her in the middle of UKG. Teachers were so kind and helpful to improve and make her adapt to the environment. She started showing interest in academics based on the encouragement given by the organisation. Now she is pursuing in Grade 3, she is disciplined, more attentive, respecting everyone. She is also focusing on extra curriculars which is making her body fit and energetic.\n\nOverall we are very satisfied with the academics and complete school patterns and structures."
    },
    {
        id: 2,
        name: "A Krisar Parent",
        role: "Parent (Grade 3)",
        image: img2,
        rating: 5.0,
        review: "I am a parent of J. Yuvanesh (Grade 3C). First, I would like to thank you for giving me an opportunity to share my thoughts about our Krisar Academy. The teaching environment and atmosphere of the school encourage him to feel confident. It is wonderful to see the way the school balances academics, sports, and extra-curricular activities. This school gives very good communication skills to students. I would like to thank the teachers for supporting and encouraging my son in all the activities."
    },
    {
        id: 3,
        name: "Lakshmi S.D",
        role: "Mother of Dharshik Vaibhav M.J (Grade 3-C)",
        image: img3,
        rating: 5.0,
        review: "We are extremely happy and satisfied with Krisar Academy School. The school has one of the best infrastructures in our surroundings, providing a modern, safe, and comfortable environment for students to learn, explore, and grow.\n\nWhat we appreciate most is that the school focuses not only on academics but also on practical knowledge, sports, and real-world learning. Educational visits to various industries and other places give children valuable opportunities to understand concepts practically and gain meaningful exposure beyond the classroom. The school also encourages students to actively participate in sports and extracurricular activities, helping them develop teamwork, discipline, confidence, and a healthy lifestyle.\n\nThe teachers are caring, supportive, and dedicated to the overall development of every student. We truly appreciate the sincere efforts of the management and teachers in providing quality education, excellent facilities, practical exposure, sports opportunities, and individual attention to every child.\n\nAs parents, we are proud and happy to be part of the Krisar Academy family and look forward to seeing our children grow into confident, knowledgeable, responsible, and well-rounded individuals and achieve greater heights."
    },
    {
        id: 4,
        name: "A Krisar Parent",
        role: "Parent",
        image: img8,
        rating: 5.0,
        review: "I would like to share my appreciation for the wonderful environment The Krisar Academy provides for my children. The dedication of teachers and management, the encouragement given to students, and the focus on both academics and extracurricular activities have made a significant positive impact. I have noticed how much my children enjoy attending the school and their confidence and skills have grown. The overall development truly stands out. Thank you to the entire staff for your hard work and care. As a parent, I feel proud and grateful that my children are part of Krisarites."
    },
    {
        id: 5,
        name: "A Krisar Parent",
        role: "Parent",
        image: img9,
        rating: 5.0,
        review: "We are very happy and satisfied with our child's learning experience at Krisar Academy. The teachers are very caring, supportive, and dedicated towards the students. We truly appreciate the school for providing a safe, positive, and encouraging environment where children can learn, grow, and develop their confidence and skills. The academic guidance, discipline, extracurricular activities, and individual attention given to the students are commendable. We are grateful to all the teachers and management for their continuous efforts and support. We are proud to be a part of the Krisar Academy family and look forward to seeing our child achieve many more milestones in the future. Thank you, Krisar Academy, for your wonderful support and guidance!"
    },
    {
        id: 6,
        name: "A Krisar Parent",
        role: "Parent",
        image: img4,
        rating: 5.0,
        review: "At The Krisar Academy, we truly appreciate the strong bond between parents and teachers. The teachers are approachable, supportive, and always keep us informed about our child's progress. Their guidance and regular communication help us work together for the overall development of our children. We are happy to be part of a school where parents and teachers work hand in hand for the better future of every child."
    },
    {
        id: 7,
        name: "A Krisar Parent",
        role: "Parent",
        image: img5,
        rating: 5.0,
        review: "We are happy to see that sports are given an important place at Krisar Academy. The school encourages every child to participate and develop fitness, teamwork, discipline, confidence, and leadership skills. We appreciate the opportunities provided through regular sports activities and training, which help our children face challenges positively, respect others, and strive for excellence both on and off the field."
    },
    {
        id: 8,
        name: "A Krisar Parent",
        role: "Parent",
        image: img6,
        rating: 5.0,
        review: "We are happy that Krisar Academy focuses on the overall development of our children, not just academics. The school provides a good balance of studies, sports, co-curricular activities, English communication, discipline, values, and leadership opportunities. We appreciate the efforts taken by the school to nurture our children into confident, responsible, and well-rounded individuals, prepared to face the future with confidence."
    },
    {
        id: 9,
        name: "A Krisar Parent",
        role: "Parent",
        image: img7,
        rating: 5.0,
        review: "Overall, we are very happy with the school and the teachers. We appreciate the care, guidance, and effort given towards the students. We would be happy to see more opportunities for interactive activities and practical learning, which would make the learning experience even more enjoyable for the children. Thank you for your continued support."
    },
    {
        id: 10,
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
    const [selectedStory, setSelectedStory] = useState(null);

    useEffect(() => {
        if (selectedStory) {
            const handleKeyDown = (e) => {
                if (e.key === 'Escape') setSelectedStory(null);
            };
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
            return () => {
                document.body.style.overflow = 'unset';
                window.removeEventListener('keydown', handleKeyDown);
            };
        }
    }, [selectedStory]);

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
                <div className="relative w-full max-w-5xl mx-auto">
                    <Swiper
                        modules={[Autoplay]}
                        loop
                        speed={600}
                        autoplay={{ delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                        onSwiper={(swiper) => { swiperRef.current = swiper; }}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        className="w-full"
                    >
                        {stories.map((story) => (
                            <SwiperSlide key={story.id} className="h-auto">
                                <div className="bg-brand-primary/70 backdrop-blur-sm border border-white/10 rounded-3xl mx-1 my-2 p-5 sm:p-6 md:p-7 flex flex-col md:flex-row gap-6 md:gap-8 min-h-[460px] md:h-[430px] text-left relative overflow-hidden">

                                    {/* Left: Parent photo container with ambient background for landscape & portrait ratios */}
                                    {story.image && (
                                        <div className="relative shrink-0 w-full md:w-[42%] aspect-[16/10] md:aspect-auto md:h-full overflow-hidden rounded-2xl ring-1 ring-white/15 shadow-2xl bg-black/40 flex items-center justify-center p-2">
                                            {/* Ambient blurred backdrop so any wide or tall ratio blends seamlessly */}
                                            <img
                                                src={story.image}
                                                alt=""
                                                aria-hidden="true"
                                                className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 opacity-30 pointer-events-none"
                                            />
                                            {/* Crisp foreground image fitted cleanly with no cutoff */}
                                            <img
                                                src={story.image}
                                                alt={`${story.name} with family at The Krisar Academy`}
                                                loading="lazy"
                                                className="relative z-10 w-full h-full object-contain rounded-xl drop-shadow-md"
                                            />
                                        </div>
                                    )}

                                    {/* Right: Content container with uniform height & Read More */}
                                    <div className={`flex-1 flex flex-col justify-between h-full min-w-0 ${story.image ? 'p-1 md:py-2 md:px-2' : 'p-3 md:p-8 md:max-w-2xl md:mx-auto'}`}>
                                        <div className="flex-1 flex flex-col">
                                            <Quote size={28} className="text-brand-secondary/80 mb-3 shrink-0" fill="currentColor" />

                                            <div className="relative">
                                                <p className="text-gray-200 text-sm sm:text-base md:text-[16px] lg:text-[17px] leading-relaxed line-clamp-4 md:line-clamp-5">
                                                    {story.review}
                                                </p>

                                                {story.review.length > 220 && (
                                                    <button
                                                        type="button"
                                                        onClick={() => setSelectedStory(story)}
                                                        className="text-brand-secondary hover:text-white font-semibold text-xs sm:text-sm inline-flex items-center gap-1 mt-2.5 underline underline-offset-4 cursor-pointer transition-colors"
                                                    >
                                                        Read more <ChevronRight size={14} />
                                                    </button>
                                                )}
                                            </div>
                                        </div>

                                        {/* Author & Rating Footer */}
                                        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 pt-4 border-t border-white/10 mt-4">
                                            <div className="min-w-0">
                                                <h3 className="text-base sm:text-lg font-bold text-white leading-tight truncate">{story.name}</h3>
                                                <p className="text-gray-400 text-xs sm:text-sm truncate">{story.role}</p>
                                            </div>

                                            <div className="flex gap-1 shrink-0">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={16}
                                                        fill={i < Math.round(story.rating) ? 'currentColor' : 'none'}
                                                        className="text-brand-secondary"
                                                    />
                                                ))}
                                            </div>
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
                        aria-label="Previous testimonial"
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
                                aria-label={`Go to slide ${index + 1}`}
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
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={24} className="text-gray-400 hover:text-white" />
                    </button>
                </div>
            </div>

            {/* Full Review Modal Dialog */}
            {selectedStory && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
                    onClick={() => setSelectedStory(null)}
                    role="dialog"
                    aria-modal="true"
                >
                    <div
                        className="bg-brand-primary border border-white/20 rounded-3xl p-6 md:p-8 max-w-2xl w-full max-h-[88vh] flex flex-col shadow-2xl relative text-left text-white"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            type="button"
                            onClick={() => setSelectedStory(null)}
                            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors cursor-pointer"
                            aria-label="Close"
                        >
                            <X size={20} />
                        </button>

                        {/* Modal Header */}
                        <div className="flex items-center gap-4 mb-5 pb-5 border-b border-white/10 pr-10 shrink-0">
                            {selectedStory.image && (
                                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shrink-0 ring-2 ring-brand-secondary/40 bg-black/40">
                                    <img
                                        src={selectedStory.image}
                                        alt={selectedStory.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold text-white">{selectedStory.name}</h3>
                                <p className="text-gray-300 text-xs sm:text-sm">{selectedStory.role}</p>
                                <div className="flex gap-1 mt-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={15}
                                            fill={i < Math.round(selectedStory.rating) ? 'currentColor' : 'none'}
                                            className="text-brand-secondary"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Modal Body */}
                        <div className="overflow-y-auto pr-2 space-y-4">
                            <Quote size={28} className="text-brand-secondary/80 shrink-0" fill="currentColor" />
                            <div className="text-gray-200 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                                {selectedStory.review}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default SuccessStories;
