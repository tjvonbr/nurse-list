export const fadeInListItems = {
  rest: { opacity: 0, y: 100 },
  animate: (idx: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * idx,
    },
  }),
};

export const fadeInSection = {
  rest: { opacity: 0, y: 100 },
  animate: () => ({
    opacity: 1,
    y: 0,
  }),
};
