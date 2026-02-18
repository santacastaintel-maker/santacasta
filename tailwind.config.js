/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: "#11d452",
                "primary-dark": "#0ea640",
                "bg-light": "#f8fcf9",
                "bg-dark": "#0d1b12",
                "surface-dark": "#1a2e22",
                "text-main": "#0d1b12",
                "text-muted": "#4c6655",
            },
            fontFamily: {
                sans: ["Manrope", "sans-serif"],
                serif: ["Playfair Display", "serif"],
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.5s ease-out',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
