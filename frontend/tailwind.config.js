/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				baligo: ["Baligo"],
				playwright: ["Playwrite HR Lijeva"],
			},
		},
	},
	plugins: [],
};
