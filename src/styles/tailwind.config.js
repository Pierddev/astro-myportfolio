const pxFontSizes = Object.fromEntries(
  Array.from({ length: 999 }, (_, i) => [i, `${i}px`])
);

const pxRounded = Object.fromEntries(
  Array.from({ length: 51 }, (_, i) => [i, `${i}px`])
);

export default {
  theme: {
    spacing: Object.fromEntries(
      [...Array(9999).keys()].map((i) => [i, `${i}px`])
    ),
    fontSize: pxFontSizes,
    borderRadius: pxRounded,
  },
};
