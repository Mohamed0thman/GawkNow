import {StyleProp, StyleSheet, Text, TextStyle} from "react-native";
import React, {FC, PropsWithChildren} from "react";
import {COLORS} from "../../constants";

type Props = {
  style?: StyleProp<TextStyle>;
  color?: string;
};

const Typography: FC<PropsWithChildren<Props>> = ({
  children,
  style,
  color = COLORS.black,
}) => {
  return (
    <Text
      style={[
        {
          color,
        },
        style,
      ]}>
      {children}
    </Text>
  );
};
export default Typography;

const styles = StyleSheet.create({});
