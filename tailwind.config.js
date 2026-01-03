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
        },
    },
    plugins: [],
};
