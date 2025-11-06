import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Available presets: https://panda-css.com/docs/presets
	// presets: ["@pandacss/preset-base", "@pandacss/preset-panda"],

	// Use strict token usage
	strictTokens: true,

	// Use strict property values
	strictPropertyValues: true,

	// Where to look for your css declarations
	include: ["./src/components/**/*.{ts,tsx,js,jsx}", "./src/app/**/*.{ts,tsx,js,jsx}"],

	// Files to exclude
	exclude: [],

	// eject: true,
	// utilities: {
	// 	color: {
	// 		values: "colors",
	// 	},
	// },

	// Useful for theme customization
	theme: {
		extend: {
			semanticTokens: {
				colors: {
					// used for base bg color
					bg: {
						value: { base: "#fff", _dark: "#000" },
					},
					// used for base text color (foreground)
					fg: {
						value: { base: "{colors.blue.500}", _dark: "{colors.blue.300}" },
					},
				},
			},
		},
	},

	jsxFramework: "react",

	// The output directory for your css system
	outdir: "styled-system",
	conditions: {
		light: "[data-color-mode=light] &",
		dark: "[data-color-mode=dark] &",
	},
});
