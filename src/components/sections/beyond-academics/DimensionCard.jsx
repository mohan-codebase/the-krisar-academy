import React from 'react';

const DimensionCard = ({ title, description, mainImage, subImages = [], isReversed = false }) => {
    return (
        <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-20 items-center my-20`}>

            {/* Main Image Section - Always first in DOM, order controlled by flex-row/reverse */}
            <div className="flex-1 w-full relative">
                <img
                    src={mainImage}
                    alt={title}
                    className="w-full h-auto object-cover rounded-2xl shadow-lg min-h-[300px] lg:min-h-[500px]"
                />
            </div>

            {/* Text & Sub-Images Content Section */}
            <div className="flex-1 text-center lg:text-left flex flex-col gap-8">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold text-brand-secondary mb-6 relative inline-block">
                        {title}
                    </h2>
                    <div className="text-gray-300 space-y-4 leading-relaxed text-lg">
                        {description}
                    </div>
                </div>

                {/* Sub Images Grid - Now part of the content side */}
                {subImages.length > 0 && (
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        {subImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`${title} detail ${index + 1}`}
                                className="w-full h- object-cover shadow-md hover:scale-105 transition-transform duration-300"
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DimensionCard;
