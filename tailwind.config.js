/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./*.tsx",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                frost: "#f4ffff",
                honey: "#fdca7b",
                sage: "#c9d4ac",
                timber: "#c3914c",
                moss: "#739642",
                evergreen: "#0e2c08",
                // aliases for easy use
                primary: "#739642",   // moss
                "primary-dark": "#0e2c08",   // evergreen
                accent: "#fdca7b",   // honey
                "accent-dark": "#c3914c",   // timber
                surface: "#f4ffff",   // frost
                "surface-alt": "#c9d4ac",   // sage
            },
            fontFamily: {
                sans: ["'DM Sans'", "sans-serif"],
                serif: ["'Fraunces'", "serif"],
                mono: ["'JetBrains Mono'", "monospace"],
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.6s ease-out both',
                'fade-in': 'fadeIn 0.5s ease-out both',
                'slide-in-left': 'slideInLeft 0.6s ease-out both',
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s ease-in-out infinite',
                'shimmer': 'shimmer 2.5s linear infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(24px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-24px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-12px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% center' },
                    '100%': { backgroundPosition: '200% center' },
                },
            },
            boxShadow: {
                'honey': '0 8px 40px rgba(253, 202, 123, 0.35)',
                'moss': '0 8px 40px rgba(115, 150, 66, 0.30)',
                'evergreen': '0 8px 40px rgba(14, 44, 8, 0.40)',
                'glow': '0 0 60px rgba(115, 150, 66, 0.20)',
            },
            backgroundImage: {
                'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
            },
        },
    },
    plugins: [],
}
