"use client";
import React, { useState, useEffect } from 'react';
import { Phone } from "lucide-react";

const CallButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const phoneNumber = '919585335552';

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

    return (
        <>
            {isVisible && (
                <div
                    className="fixed bottom-36 right-5 z-50 flex items-center justify-center placeholder:blur-xl transition-opacity duration-300"
                >
                    <a
                        href={`tel:${phoneNumber}`}
                        className="
              relative
              flex items-center justify-center 
              w-11 h-11 
              rounded-full 
              bg-brand-secondary
              border-[0px] border-white/40
              shadow-[0_4px_15px_rgba(11,19,43,0.4),inset_0_2px_10px_rgba(255,255,255,0.3)]
              transition-all duration-300 
              group 
              overflow-hidden
            "
                        aria-label="Call Us"
                        style={{
                            backdropFilter: 'blur(8px)',
                            WebkitBackdropFilter: 'blur(8px)',
                        }}
                    >
                        {/* Upper Glare */}
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent pointer-events-none rounded-t-full"></div>

                        {/* Bottom Reflection */}
                        <div className="absolute bottom-1 left-2 right-2 h-1/3 bg-gradient-to-t from-white/10 to-transparent rounded-b-full pointer-events-none filter blur-[2px]"></div>

                        {/* Tooltip */}
                        <span className="absolute right-full mr-4 bg-white/80 backdrop-blur-md border border-white/40 text-[#0B132B] px-3 py-1 rounded-lg text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                            Call Us
                        </span>

                        <Phone size={22} className="text-white drop-shadow-md z-10" />
                    </a>
                </div>
            )}
        </>
    );
};

export default CallButton;
