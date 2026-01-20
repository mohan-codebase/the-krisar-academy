"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {isVisible && (
                <div
                    className="fixed bottom-5 right-5 z-50 flex items-center justify-center transition-opacity duration-300"
                >
                    <button
                        onClick={scrollToTop}
                        className="
              relative
              flex items-center justify-center 
              w-11 h-11 
              rounded-full 
              bg-brand-secondary
              border-[1.5px] border-white/40
              transition-all duration-300 
              group 
              overflow-hidden
            "
                        aria-label="Scroll to top"
                        style={{
                            backdropFilter: 'blur(8px)',
                            WebkitBackdropFilter: 'blur(8px)',
                        }}
                    >
                        {/* Upper Glare */}
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent pointer-events-none rounded-t-full"></div>

                        {/* Bottom Reflection */}
                        <div className="absolute bottom-1 left-2 right-2 h-1/3 bg-gradient-to-t from-white/10 to-transparent rounded-b-full pointer-events-none filter blur-[2px]"></div>

                        <ArrowUp size={22} className="text-white drop-shadow-md z-10" />
                    </button>
                </div>
            )}
        </>
    );
};

export default ScrollToTop;
