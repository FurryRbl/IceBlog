import daisyui from "daisyui";
import tailwindcss from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*{vue,js}", "./template/**/*.html"],
	plugins: [tailwindcss, daisyui],
	theme: {
		extend: {
			colors: {
				c: {
					cyan: "#50DCFF",
					blue: "#4CC3FF",
					green: "#65FFB2",
					purple: "#9965ff",
					yellow: "#fff265",
					blue_green: "#65FFE5",
				},
			},
		},
		fontFamily: {
			serif: [
				"Noto Serif",
				"Noto Serif SC",
				"Noto Color Emoji",
				"sans-serif",
				...defaultTheme.fontFamily.serif,
			],
			mono: [
				"JetBrains Mono Variable",
				"Noto Serif SC",
				"Noto Color Emoji",
				"monospace",
				...defaultTheme.fontFamily.mono,
			],
		},
	},
	/** @type {import('daisyui').Config} */
	daisyui: {
		themes: ["nord"],
		logs: false,
	},
};
