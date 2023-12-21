import SCALE from "./scale";

const {rf} = SCALE;

const COLORS = {
  // primary  colors
  primary: "#5499D9",

  // danger
  danger: "#D7191C",
  lightDanger: "#FEB9BA",

  // success
  success: "#199E74",
  lightSuccess: "#ABF8DF",

  warning: "#FFC709",

  // black
  black: "#333333",

  // white
  white: "#FFFFFF",

  //grey
  lightGrey: "#e1e1e1",
  darkGrey: "#C2C2C2",

  // shadow
  blackShadow: "rgba(20, 20, 20, 0.37)",
};

const SIZES = {
  // global sizes
  base: 10,
  font: 14,
  radius: 12,
  padding: 16,
  margin: 20,

  // font sizes
  largeTitle: rf(40),
  h1: rf(30),
  h2: rf(22),
  h3: rf(16),
  h4: rf(14),
  h5: rf(12),
  body1: rf(30),
  body2: rf(22),
  body3: rf(16),
  body4: rf(14),
  body5: rf(12),
};

const FONTS = {
  largeTitle: {fontFamily: "Roboto-Black", fontSize: SIZES.largeTitle},
  h1: {fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22},
  h5: {fontFamily: "Roboto-Bold", fontSize: SIZES.h5, lineHeight: 22},
  body1: {fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22},
  body4: {fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22},
  body5: {fontFamily: "Roboto-Regular", fontSize: SIZES.body5, lineHeight: 22},
};

export {COLORS, SIZES, FONTS};
