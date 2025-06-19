import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type OtpButtonProps = {
  text: string;
  onPress?: () => void;
  disabled?: boolean;
};

export default function OtpButton({ text, onPress, disabled = false }: OtpButtonProps) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <TouchableOpacity
        style={[styles.button, styles.shadow]}
        onPress={onPress}
        disabled={disabled}
        activeOpacity={disabled ? 1 : 0.7}
      >
        <LinearGradient
          colors={["#6075FF", "#1433FF"]}
          start={{ x: 0.1, y: 0 }}
          end={{ x: 0.9, y: 1 }}
          style={styles.gradient}
        >
          <View style={styles.centerWrapper}>
            <Text style={styles.buttonText}>{text}</Text>
          </View>
          <Image
            source={require("../assets/images/leftCircles.png")}
            resizeMode="cover"
            style={styles.leftCircles}
          />
          <Image
            source={require("../assets/images/rightCircles.png")}
            resizeMode="cover"
            style={styles.rightCircles}
          />

          {disabled && <View style={styles.disabledOverlay} />}
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    // paddingHorizontal: 24,
  },
  button: {
    width: 315,
    height: 72,
    borderRadius: 28,
    overflow: "hidden",
  },
  gradient: {
    flex: 1,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  centerWrapper: {
    zIndex: 2,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
  disabledOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#FFFFFF80",
    zIndex: 5,
    borderRadius: 28,
  },
  leftCircles: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 130,
    height: 55,
    zIndex: 0,
  },
  rightCircles: {
    position: "absolute",
    top: 0,
    left: 185,
    width: 130,
    height: 55,
    zIndex: 0,
  },
  shadow: {
    shadowColor: "#1433FF",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
  },
});
