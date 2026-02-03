import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default function PrimaryButton({ title = "Button", onPress, disabled }) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[styles.btn, disabled && styles.disabled]}
      disabled={disabled}
    >
      <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: width * 0.78,
    height: 54,
    borderRadius: 999,
    backgroundColor: "#39D353",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 14,
  },
  disabled: {
    opacity: 0.6,
  },
  txt: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
});
