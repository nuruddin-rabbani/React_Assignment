/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#F26922",
                secondary: "#09090B",
                tertiary: "#a1a1aa",
                accent: "#71717A",
            },
            // backgroundImage: {
            //     "gradient-primary":
            //         "linear-gradient(180deg, #00d2ff 0%, #059dbe 100%)",
            //     "gradient-secondary":
            //         "linear-gradient(161.45deg, #00d2ff -5.54%, #9aedff 59.11%)",
            // },
            boxShadow: {
                "chatBtn-shadow": "0px 4px 48px 0px rgba(0, 0, 0, 0.06)", 
            },
            fontFamily: {
                onest: ['"Onest"', "sans-serif"],
            },
        },
    },
    plugins: [],
};
