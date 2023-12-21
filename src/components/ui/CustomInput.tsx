import {
  StyleSheet,
  View,
  TextInput,
  TextInputProps,
  Pressable,
} from "react-native";
import React from "react";
import Typography from "./Typography";
import {COLORS, SCALE, SIZES, FONTS} from "../../constants";

const {ms, vs} = SCALE;

type Props = TextInputProps & {
  btnIcon?: React.ReactNode;
  icon?: React.ReactNode;
  error?: string;
  onPress?: () => void;
};

const CustomInput = ({btnIcon, icon, error, onPress, ...otherProps}: Props) => {
  function renderBtnIcon() {
    return (
      <Pressable onPress={onPress} style={styles.btn}>
        {btnIcon}
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, {flexDirection: "row"}]}>
        {icon}
        <TextInput style={[styles.input]} {...otherProps} />
        {renderBtnIcon()}
      </View>
      {error && <Typography>{error}</Typography>}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {width: "100%"},
  inputContainer: {
    height: vs(50),
    width: "100%",
    alignItems: "center",
    position: "relative",
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: SIZES.radius,
    paddingHorizontal: ms(SIZES.base),
  },
  input: {
    flex: 1,
    paddingHorizontal: ms(SIZES.padding),
    bac: COLORS.black,
    ...FONTS.h4,
  },
  btn: {
    backgroundColor: COLORS.primary,
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: ms(SIZES.padding),
    borderRadius: SIZES.radius,
  },
});
