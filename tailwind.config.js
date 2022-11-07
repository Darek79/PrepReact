/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            gridTemplateColumns: {
                mobile: '1fr',
                tablet: '10px 1fr 10px',
                desktop: '0.15fr 1fr 0.15fr',
                gridCard: 'repeat(auto-fit,minmax(300px,1fr))',
            },
        },
    },
    plugins: [],
};
