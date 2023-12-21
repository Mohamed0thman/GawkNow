import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import React from "react";
import {COLORS, FONTS, SCALE, SIZES} from "../../constants";
import Typography from "./Typography";

const {mvs} = SCALE;

type Props = TouchableOpacityProps & {
  label: string;
  labelColor?: string;
};

const CustomButton = ({
  label,
  style,
  labelColor = COLORS.white,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Typography style={[styles.title]} color={labelColor}>
        {label}
      </Typography>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.radius,
  },
  title: {
    ...FONTS.h2,
    paddingVertical: mvs(SIZES.base),
  },
});
