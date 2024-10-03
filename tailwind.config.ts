import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
		},
		spacing: {
			none: "0rem",
			xs: "0.25rem",
			sm: "0.5rem",
			md: "1rem",
			lg: "2rem",
			xl: "4rem",
			xxl: "8rem",
			"icon-xs": "0.75rem",
			"icon-sm": "1rem",
			"icon-md": "1.5rem",
			"icon-lg": "2rem",
			"icon-xl": "3rem",
			"icon-xxl": "4rem",
		},
		borderRadius: {
			none: "0rem",
			sm: "0.125rem",
			md: "0.25rem",
			lg: "0.5rem",
			xl: "1rem",
			xxl: "2rem",
			rounded: "9999px",
		},
		fontFamily: {
			poppins: ["Poppins", "sans-serif"],
		},
		fontSize: {
			h1: [
				"2.5rem",
				{
					lineHeight: "3rem",
					letterSpacing: "0.02rem",
					fontWeight: "700",
				},
			],
			h2: [
				"2rem",
				{
					lineHeight: "2.5rem",
					letterSpacing: "0.02rem",
					fontWeight: "700",
				},
			],
			h3: [
				"1.75rem",
				{
					lineHeight: "2.25rem",
					letterSpacing: "0.015rem",
					fontWeight: "600",
				},
			],
			h4: [
				"1.5rem",
				{
					lineHeight: "2rem",
					letterSpacing: "0.015rem",
					fontWeight: "600",
				},
			],
			h5: [
				"1.25rem",
				{
					lineHeight: "1.75rem",
					letterSpacing: "0.01rem",
					fontWeight: "500",
				},
			],
			h6: [
				"1rem",
				{
					lineHeight: "1.5rem",
					letterSpacing: "0.01rem",
					fontWeight: "500",
				},
			],
			large: [
				"1.125rem",
				{
					lineHeight: "1.625rem",
					letterSpacing: "0.01rem",
					fontWeight: "400",
				},
			],
			regular: [
				"1rem",
				{
					lineHeight: "1.5rem",
					letterSpacing: "0.005rem",
					fontWeight: "400",
				},
			],
			small: [
				"0.875rem",
				{
					lineHeight: "1.25rem",
					letterSpacing: "0.005rem",
					fontWeight: "400",
				},
			],
			caption: [
				"0.75rem",
				{
					letterSpacing: "1rem",
					lineHeight: "0rem",
					fontWeight: "400",
				},
			],
		},
	},
	plugins: [],
};
export default config;
