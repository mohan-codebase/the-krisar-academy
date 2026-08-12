import React from 'react'
import PageHero from '../components/common/PageHero'
import SEO from '../components/common/SEO'
import DimensionCard from '../components/sections/beyond-academics/DimensionCard'
import ScrollReveal from '../components/common/ScrollReveal'
import '../assets/styles/fonts.css'

// Hero Image

// Sports Images
import sports1 from '../assets/images/beyond-academics/sports-activities-1.avif'
import sports2 from '../assets/images/beyond-academics/sports-and-activities-2.avif'
import sports3 from '../assets/images/beyond-academics/sports-and-activities-3.avif'

// Diet Images
import diet1 from '../assets/images/beyond-academics/diet-and-dining-1.avif'
import diet2 from '../assets/images/beyond-academics/diet-and-dining-2.avif'
import diet3 from '../assets/images/beyond-academics/diet-and-dining-3.avif'

// Special Images
import special1 from '../assets/images/beyond-academics/special-education-1.avif'
import special2 from '../assets/images/beyond-academics/special-education-2.avif'
import special3 from '../assets/images/beyond-academics/special-education-3.avif'

// Counselling Images
import counsel1 from '../assets/images/beyond-academics/counselling-1.avif'
import counsel2 from '../assets/images/beyond-academics/counselling-2.avif'
import counsel3 from '../assets/images/beyond-academics/counselling-3.avif'


const UatBeyondAcademics = () => {
    return (
        <div className="bg-[url('./assets/images/home/news-updates/bg.avif')] bg-cover bg-center min-h-screen">
            <SEO
                title="Beyond Academics Activities | Krisar Academy Vellore"
                description="Discover beyond academics programs at Krisar Academy, one of the top CBSE schools in Vellore and Ranipet offering sports, arts and skill development."
                keywords="Co-curricular Activities, Sports Education, Student Wellness, Holisitc Development, Arts and Culture"
            />
            <PageHero
                title="Beyond Academics"
                h1={<span>Learning Does <span className="text-brand-secondary">Not End In Classrooms.</span></span>}
                description="At Krisar Academy, Students Grow Through Experiences That Shape Character, Confidence, And Care."
            />

            <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-10 pb-20">

                <ScrollReveal>
                    <div className="text-center mb-20">
                        <div className="inline-block px-4 py-1.5 rounded border border-white/20 bg-white/5 backdrop-blur-sm mb-4">
                            <span className="text-gray-300 text-sm uppercase tracking-wider">Beyond The Classroom</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Nurturing Every Dimension</h2>
                        <p className="text-gray-400 max-w-3xl mx-auto">
                            we are committed to holistic education where intellectual, emotional, and social journeys shape our purpose.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal>
                    <DimensionCard


                        title="Sports & Activities"
                        description={
                            <>
                                <p>
                                    Sports play an integral role in holistic development. We encourage all our students to find their passion - be it on the track, in the gymnasium, or through team sports. Physical activity builds resilience and teamwork.
                                </p>
                                <p>
                                    Beside athletics, our students are encouraged to participate in diverse extramural activities including theater, arts, and club organizations to develop leadership skills presented via teamwork.
                                </p>
                            </>
                        }
                        mainImage={sports1}
                        subImages={[sports2, sports3]}
                    />
                </ScrollReveal>

                <ScrollReveal>
                    <DimensionCard
                        title="Diet & Dining"
                        description={
                            <>
                                <p>
                                    Healthy bodies build healthy minds. Our cafeteria serves nutritious, balanced meals prepared with hygiene and care.
                                </p>
                                <p>
                                    The joys of communal eating encourage social bonding and manners. We take special attention to ensure diet charts are periodically reviewed.
                                </p>
                            </>
                        }
                        mainImage={diet1}
                        subImages={[diet2, diet3]}
                        isReversed={true}
                    />
                </ScrollReveal>

                <ScrollReveal>
                    <DimensionCard
                        title="Special Education"
                        description={
                            <>
                                <p>
                                    Special Education programs are designed to ensure inclusivity, recognizing the diverse learning needs of every child. Our specialized faculty ensures personalized attention and aids cognitive and social development where it matters the most.
                                </p>
                                <p>
                                    Our commitment is to ensure no child is left behind, using scientific tools and therapeutic interventions. Every potential is nurtured with love, care, and competence of our staff.
                                </p>
                            </>
                        }
                        mainImage={special1}
                        subImages={[special2, special3]}
                    />
                </ScrollReveal>

                <ScrollReveal>
                    <DimensionCard
                        title="Counselling Students (Individual And Group)"
                        description={
                            <>
                                <p>
                                    Growing up can ask difficult questions. Our dedicated counselors provide a safe space or students to discuss their emotional well-being offering guidance, career counseling, and support to help navigate the years.
                                </p>
                                <p>
                                    Counseling sessions guide students to mental wellness and emotional resilience. We stand by our promise to shape character, values and confidence in every individual we have the privilege to skill.
                                </p>
                            </>
                        }
                        mainImage={counsel1}
                        subImages={[counsel2, counsel3]}
                        isReversed={true}
                    />
                </ScrollReveal>

            </section>
        </div>
    )
}

export default UatBeyondAcademics;
