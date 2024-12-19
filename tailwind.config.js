/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				green: {
					light: "#FAFCE5",
					// medium: "#D9E75F", // Même couleur que le logo original
					// medium: "#d0e322",
					medium: "#bacc12",
					dark: "#5C6B2F"
				},
				gray: {
					light: "#7D8189",
					dark: "#333333"
				},
			}
		},
		plugins: []
	}
}
