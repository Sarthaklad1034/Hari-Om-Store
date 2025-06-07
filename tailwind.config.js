/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'ocean-blue': '#0EA5E9',
                'fresh-green': '#10B981',
                'warm-orange': '#F97316',
            }
        },
    },
    plugins: [],
}