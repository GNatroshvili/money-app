import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import React from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.imageWrapper}>
        <Image
          source={require("../assets/images/signIn.png")}
          resizeMode="cover"
          style={styles.image}
        />
      </View>

      {/* Button Container Fixed from Bottom */}
      <View style={styles.buttonContainer}>
        {/* Sign In Button */}
        <TouchableOpacity style={styles.button}>
          <LinearGradient
            colors={["#6075FF", "#1433FF"]}
            start={{ x: 0.1, y: 0 }}
            end={{ x: 0.9, y: 1 }}
            style={styles.gradient}
          >
            <Text style={styles.buttonText}>Sign In</Text>
            <Image
              source={require("../assets/images/whiteArrow.png")}
              resizeMode="contain"
              style={styles.whiteArrow}
            />
            <Image
              source={require("../assets/images/signInButton.png")}
              resizeMode="cover"
              style={styles.signInButton}
            />
          </LinearGradient>
        </TouchableOpacity>

        {/* Sign Up Button */}
        <TouchableOpacity style={[styles.button, styles.outlinedButton]}>
          <View style={styles.outlinedContent}>
            <Text style={[styles.buttonText, styles.outlinedText]}>
              Sign Up
            </Text>
            <Image
              source={require("../assets/images/blueArrow.png")}
              resizeMode="contain"
              style={styles.whiteArrow}
            />
            <Image
              source={require("../assets/images/signUpButton.png")}
              resizeMode="cover"
              style={styles.signInButton}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    position: "relative",
  },
  imageWrapper: {
    width: "100%",
    height: 500,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 75,
    width: "100%",
    alignItems: "center",
  },
  button: {
    marginTop: 20,
    width: 315,
    height: 72,
    borderRadius: 28,
    overflow: "hidden",
  },
  gradient: {
    flex: 1,
    borderRadius: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  outlinedButton: {
    borderWidth: 1,
    borderColor: "#556BFF",
    backgroundColor: "transparent",
  },
  outlinedContent: {
    flex: 1,
    borderRadius: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "400",
    fontFamily: "Montserrat",
    color: "#fff",
  },
  outlinedText: {
    color: "#556BFF",
  },
  whiteArrow: {
    width: 25,
    height: 17,
  },
  signInButton: {
    position: "absolute",
  },
});
