"use client";

import { useEffect, useState } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import { ArrowUp } from "lucide-react";

export const ScrollToTop = () => {
    const { pathname } = useLocation();
    const navType = useNavigationType();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        const handleScrollRestoration = () => {
            if (navType === "POP") {
                const savedPosition = sessionStorage.getItem(`scrollPos:${pathname}`);
                if (savedPosition) {
                    const targetY = parseInt(savedPosition, 10);
                    let attempts = 0;

                    const attemptScroll = () => {
                        // If document is tall enough, scroll to it
                        if (document.documentElement.scrollHeight >= targetY) {
                            window.scrollTo(0, targetY);
                            // If we landed roughly where we wanted (allow small epsilon), we're good
                            if (Math.abs(window.scrollY - targetY) < 50) {
                                return true;
                            }
                        }
                        return false;
                    };

                    // Initial attempt
                    if (!attemptScroll()) {
                        const interval = setInterval(() => {
                            attempts++;
                            if (attemptScroll() || attempts > 10) {
                                clearInterval(interval);
                            }
                        }, 50);
                    }
                }
            } else {
                window.scrollTo(0, 0);
            }
        };

        handleScrollRestoration();

        const saveScrollPosition = () => {
            sessionStorage.setItem(`scrollPos:${pathname}`, window.scrollY.toString());
        };

        window.addEventListener('beforeunload', saveScrollPosition);

        // Also save on route change (cleanup)
        return () => {
            saveScrollPosition();
            window.removeEventListener('beforeunload', saveScrollPosition);
        };
    }, [pathname, navType]);

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

                        <ArrowUp size={22} className=" text-white drop-shadow-md z-10" />
                    </button>
                </div>
            )}
        </>
    );
};

export default ScrollToTop;
