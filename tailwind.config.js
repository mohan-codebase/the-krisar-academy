/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    primary: "#061E3F",
                    secondary: "#FFC107",
                    accent: "#ff0707ff",
                },
                text: {
                    primary: "#EEEEEE",
                    secondary: "#061E3F",
                    muted: "#D1D5DB",
                },
            },
            animation: {
                fadeIn: 'fadeIn 0.5s ease-in-out',
                marquee: 'marquee 25s linear infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                marquee: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            },
        },
    },
    plugins: [],
};
