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

export default function BankAccountButton({
  text,
  onPress,
  disabled = false,
}: OtpButtonProps) {
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
          <View style={styles.contentRow}>
            <Text style={styles.buttonText}>{text}</Text>
            <Image
              source={require("../assets/images/bankArrow.png")}
              resizeMode="cover"
              style={styles.arrow}
            />
          </View>

          <Image
            source={require("../assets/images/bankAccounts.png")}
            resizeMode="cover"
            style={styles.leftCircles}
          />

          {disabled && <View style={styles.disabledOverlay} />}
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  button: {
    width: 315,
    height: 125,
    borderRadius: 28,
    overflow: "hidden",
  },
  gradient: {
    flex: 1,
    borderRadius: 28,
    justifyContent: "center",
  },
  contentRow: {
    position: "absolute",
    left: 32,
    right: 32,
    top: 38,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 2,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
    maxWidth: 150,
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
    left: 185,
    width: 130,
    height: 125,
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
  arrow: {
    width: 7,
    height: 12,
  },
});
