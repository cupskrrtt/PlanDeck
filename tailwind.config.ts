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
			"2xs": "0.25rem",
			xs: "0.5rem",
			sm: "1rem",
			md: "1.5rem",
			lg: "2rem",
			xl: "3rem",
			"2xl": "4rem",
			"3xl": "5rem",
			"icon-2xs": "0.75rem",
			"icon-xs": "1rem",
			"icon-sm": "1.25rem",
			"icon-md": "1.5rem",
			"icon-lg": "2rem",
			"icon-xl": "3rem",
			"icon-xxl": "4rem",
		},
		borderRadius: {
			none: "0rem",
			"2xs": "0.125rem",
			xs: "0.25rem",
			sm: "0.5rem",
			md: "0.75rem",
			lg: "1rem",
			xl: "1.5rem",
			"2xl": "2rem",
			rounded: "9999px",
		},
		fontFamily: {
			poppins: ["Poppins", "sans-serif"],
		},
		fontSize: {
			h1: [
				"2.488rem",
				{
					lineHeight: "1.2",
					letterSpacing: "-0.02rem",
					fontWeight: "700",
				},
			],
			h2: [
				"2.222rem",
				{
					lineHeight: "1.3",
					letterSpacing: "-0.02rem",
					fontWeight: "700",
				},
			],
			h3: [
				"1.985rem",
				{
					lineHeight: "1.3",
					letterSpacing: "-0.015rem",
					fontWeight: "600",
				},
			],
			h4: [
				"1.767rem",
				{
					lineHeight: "1.35",
					letterSpacing: "-0.01rem",
					fontWeight: "600",
				},
			],
			h5: [
				"1.574rem",
				{
					lineHeight: "1.4",
					letterSpacing: "0rem",
					fontWeight: "500",
				},
			],
			h6: [
				"1.396rem",
				{
					lineHeight: "1.4",
					letterSpacing: "0",
					fontWeight: "500",
				},
			],
			large: [
				"1.25rem",
				{
					lineHeight: "1.6",
					letterSpacing: "0rem",
					fontWeight: "400",
				},
			],
			regular: [
				"1rem",
				{
					lineHeight: "1.5",
					letterSpacing: "0rem",
					fontWeight: "400",
				},
			],
			small: [
				"0.889rem",
				{
					lineHeight: "1.45",
					letterSpacing: "0.01rem",
					fontWeight: "400",
				},
			],
			caption: [
				"0.79rem",
				{
					lineHeight: "1.4",
					letterSpacing: "0.02rem",
					fontWeight: "400",
				},
			],
			overline: [
				"0.703rem",
				{
					lineHeight: "1.35",
					letterSpacing: "0.04rem",
					fontWeight: "600",
				},
			],
			"button-primary": [
				"1rem",
				{
					lineHeight: "1.5",
					letterSpacing: "0.01rem",
					fontWeight: "600",
				},
			],
			"button-secondary": [
				"0.889rem",
				{
					lineHeight: "1.5",
					letterSpacing: "0.02rem",
					fontWeight: "500",
				},
			],
			"button-small": [
				"0.79rem",
				{
					lineHeight: "1.4",
					letterSpacing: "0.03rem",
					fontWeight: "500",
				},
			],
		},
	},
	plugins: [],
};
export default config;
