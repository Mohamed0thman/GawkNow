import { Dimensions, PixelRatio } from "react-native";

const fontScale = PixelRatio.getFontScale();

const { width, height } = Dimensions.get("window");
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const SC_Width = Dimensions.get("window").width;
const SC_HEIGHT = Dimensions.get("window").height;

export const scale = (size: number) =>
  (shortDimension / guidelineBaseWidth) * size;
export const verticalScale = (size: number) =>
  (longDimension / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
export const moderateVerticalScale = (size: number, factor = 0.5) =>
  size + (verticalScale(size) - size) * factor;

const calcFont = (size: number) => {
  return size / fontScale;
};

export default {
  s: scale,
  vs: verticalScale,
  ms: moderateScale,
  mvs: moderateVerticalScale,
  rf: calcFont,
  SC_Width,
  SC_HEIGHT,
};
