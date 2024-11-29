/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			green: {
				light: "#FAFCE5",
				// medium: "#D9E75F", // Même couleur que le logo original
				medium: "#d0e322",
				dark: "#5C6B2F"
			},
			gray: {
				light: "#7D8189",
				dark: "#333333"
			},
			white: "#ffffff",
			extend: {}
		},
		plugins: []
	}
}
