import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
	"./index.html",
	"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
	extend: {
		colors: {
			primary: '#1D4ED8',
			'text-fade': '#4D4D4D'
		},
		keyframes: {
			'accordion-down': {
				from: {
					height: '0'
				},
				to: {
					height: 'var(--radix-accordion-content-height)'
				}
			},
			'accordion-up': {
				from: {
					height: 'var(--radix-accordion-content-height)'
				},
				to: {
					height: '0'
				}
			}
		},
		animation: {
			'accordion-down': 'accordion-down 0.2s ease-out',
			'accordion-up': 'accordion-up 0.2s ease-out'
		}
	}
  },
  plugins: [
	tailwindcssAnimate
  ],
}