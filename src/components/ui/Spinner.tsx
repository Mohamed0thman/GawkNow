import {StyleSheet, View, ActivityIndicator} from "react-native";
import React from "react";
import {COLORS} from "../../constants";

type Props = {};

export default ({}: Props) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>
  );
};

const styles = StyleSheet.create({});
