import React from 'react'
import PageHero from '../components/common/PageHero'
import SEO from '../components/common/SEO'
import DimensionCard from '../components/sections/beyond-academics/DimensionCard'
import '../assets/styles/fonts.css'

// Hero Image
// import heroBg from '../assets/images/beyond-academics/hero-beyond-academics.png'

// Sports Images
import sports1 from '../assets/images/beyond-academics/Sports & Activities-1.avif'
import sports2 from '../assets/images/beyond-academics/Sports & Activities-2.avif'
import sports3 from '../assets/images/beyond-academics/Sports & Activities-3.avif'

// Diet Images
import diet1 from '../assets/images/beyond-academics/Diet & Dining-1.avif'
import diet2 from '../assets/images/beyond-academics/Diet & Dining-2.avif'
import diet3 from '../assets/images/beyond-academics/Diet & Dining-3.avif'

// Special Images
import special1 from '../assets/images/beyond-academics/Special Education-1.avif'
import special2 from '../assets/images/beyond-academics/Special Education-2.avif'
import special3 from '../assets/images/beyond-academics/Special Education-3.avif'

// Counselling Images
import counsel1 from '../assets/images/beyond-academics/Rectangle 4540.avif'
import counsel2 from '../assets/images/beyond-academics/Rectangle 4541.avif'
import counsel3 from '../assets/images/beyond-academics/Rectangle 4542.avif'


const BeyondAcademics = () => {
    return (
        <div className="bg-[url('./assets/images/home/NewsUpdates/bg.avif')] bg-cover bg-center min-h-screen">
            <SEO
                title="Beyond Academics"
                description="Explore The Krisar Academy's co-curricular activities, including sports, arts, diet, and special education."
            />
            <PageHero
                title="Beyond Academics"
                h1={<span>Learning Does <span className="text-brand-secondary">Not End In Classrooms.</span></span>}
                description="At Krisar Academy, Students Grow Through Experiences That Shape Character, Confidence, And Care."
            // bgImage={heroBg}
            />

            <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-10 pb-20">

                <div className="text-center mb-20">
                    <div className="inline-block px-4 py-1.5 rounded border border-white/20 bg-white/5 backdrop-blur-sm mb-4">
                        <span className="text-gray-300 text-sm uppercase tracking-wider">Beyond The Classroom</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Nurturing Every Dimension</h2>
                    <p className="text-gray-400 max-w-3xl mx-auto">
                        we are committed to holistic education where intellectual, emotional, and social journeys shape our purpose.
                    </p>
                </div>

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

            </section>
        </div>
    )
}

export default BeyondAcademics;
