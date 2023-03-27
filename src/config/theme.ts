export const theme = {
  color: {
    black: "#17181D",
    white: "#FFFFFF",
    blue: "#0091E2",
    gray: "#C6C9D3",
    pink: "#F9A5B0",
    "gray-light": "#F4F4F4",
  },
  font: {
    primary: "Josefin Sans",
  },
  space: [...Array(16)].reduce(
    (acc, _, i) => {
      acc[i + 1] = `${(i + 1) * 0.25}rem`;
      return acc;
    },
    { 32: "8rem" }
  ),
  shadow: "4px 4px 0 0 var(--color-blue)",
  text: {
    sm: "0.875rem",
    base: "1rem",
    lg: "1.25rem",
    xl: "2.25rem",
    "2xl": "3rem",
    "3xl": "6rem",
    "4xl": "8rem",
  },
};
