import { LinearGradient } from "expo-linear-gradient";
import { Stack, useRouter } from "expo-router";
import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");

export default function Index() {
  const router = useRouter();

  const isSmallScreen = screenHeight < 700;
  const dynamicCardHeight = isSmallScreen ? screenHeight / 1.45 : screenHeight / 1.7;
  const dynamicButtonBottom = isSmallScreen ? 25 : 75;

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Stack.Screen options={{ headerShown: false }} />

      <View style={[styles.imageWrapper, { height: dynamicCardHeight }]}>
        <Image
          source={require("../assets/images/signIn.png")}
          resizeMode="cover"
          style={styles.image}
        />
      </View>

      {/* Button Container Fixed from Bottom */}
      <View style={[styles.buttonContainer, { bottom: dynamicButtonBottom }]}>
        {/* Sign In Button */}
        <TouchableOpacity
          style={[styles.button, styles.shadow]}
          onPress={() => router.push("/signin")}
        >
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
        <TouchableOpacity
          style={[styles.button, styles.outlinedButton, styles.shadow]}
          onPress={() => router.push("/signup")}
        >
          <View style={styles.outlinedContent}>
            <Text style={[styles.buttonText, styles.outlinedText]}>Sign Up</Text>
            <Image
              source={require("../assets/images/blueArrow.png")}
              resizeMode="contain"
              style={styles.whiteArrow}
            />
            <Image
              source={require("../assets/images/signUpButton.png")}
              resizeMode="cover"
              style={styles.signUpButton}
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
    width: screenWidth,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    position: "absolute",
    alignItems: "center",
  },
  button: {
    marginTop: 26,
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
    paddingVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
  whiteArrow: {
    width: 24,
    height: 24,
  },
  signInButton: {
    position: "absolute",
    top: 0,
    left: 185,
    width: 130,
    height: 55,
  },
  signUpButton: {
    position: "absolute",
    top: 0,
    left: 185,
    width: 130,
    height: 70,
  },
  outlinedButton: {
    backgroundColor: "#fff",
    borderColor: "#1433FF",
    borderWidth: 2,
  },
  outlinedContent: {
    flex: 1,
    borderRadius: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 10,
    position: "relative",
  },
  outlinedText: {
    color: "#1433FF",
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
