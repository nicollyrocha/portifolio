/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,ts,tsx,jsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Prompt', 'sans-serif'],
			},
			colors: {
				brand: {
					50: '#fff1f6',
					100: '#ffe0ec',
					200: '#fecdd9',
					300: '#fda4bd',
					400: '#fb6f9c',
					500: '#f43f7d',
					600: '#e11d63',
					700: '#be1252',
					800: '#8d1140',
					900: '#5c1029',
				},
			},
			keyframes: {
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(16px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
			},
			animation: {
				fadeInUp: 'fadeInUp 0.6s ease-out both',
			},
		},
	},
	plugins: [],
};
