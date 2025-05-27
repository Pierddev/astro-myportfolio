const pxFontSizes = Object.fromEntries(
  Array.from({ length: 999 }, (_, i) => [i, `${i}px`])
);

const pxRounded = Object.fromEntries(
  Array.from({ length: 51 }, (_, i) => [i, `${i}px`])
);

export default {
	safelist: [
		{
			pattern:
				/bg-(astro|github|tailwindcss|figma|django|python|pycharm|trello)\/30/,
		},
	],
	theme: {
		extend: {
			transitionTimingFunction: {
				spring: "cubic-bezier(0.34, 1.76, 0.64, 1)", // effet ressort
			},
		},
		spacing: Object.fromEntries(
			[...Array(9999).keys()].map((i) => [i, `${i}px`])
		),
		fontSize: pxFontSizes,
		borderRadius: pxRounded,
	},
};
