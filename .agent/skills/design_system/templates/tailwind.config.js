/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#8B5CF6",
                    500: "#8B5CF6",
                    600: "#7C3AED",
                },
                success: {
                    DEFAULT: "#10B981",
                    500: "#10B981",
                },
                warning: {
                    DEFAULT: "#F59E0B",
                    500: "#F59E0B",
                },
                error: {
                    DEFAULT: "#EF4444",
                    500: "#EF4444",
                },
                dark: {
                    900: "#0F0F23",
                    800: "#1A1A2E",
                    700: "#25253D",
                    600: "#2D2D4A",
                    500: "#374151",
                },
            },
            fontFamily: {
                sans: ["Lato", "Inter", "system-ui", "sans-serif"],
                mono: ["Consolas", "monospace"],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
