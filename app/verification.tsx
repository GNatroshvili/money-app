// import OtpButton from "@/components/otpButton";
// import { Stack, useRouter } from "expo-router";
// import React from "react";
// import { Dimensions, Image, StatusBar, StyleSheet, Text, View } from "react-native";
// import { Provider as PaperProvider, TextInput } from "react-native-paper";

// const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

// const dynamicHeight = screenHeight / 3.15;
// const dynamicWidth = screenWidth / 1.5;
// const dynamicMarginTop = screenHeight / 34;
// const dynamicMarginTop2 = screenHeight / 17;
// const dynamicMarginTop3 = screenHeight / 30.5;
// const dynamicMarginTop4 = screenHeight / 9.2;
// const dynamicMarginTop5 = screenHeight / 8.5;

// export default function Verification() {
//   const router = useRouter();

//   return (
//     <PaperProvider>
//       <View style={styles.container}>
//         <StatusBar hidden />
//         <Stack.Screen options={{ headerShown: false }} />

//         <View>
//           <Image
//             source={require("../assets/images/verification.png")}
//             resizeMode="contain"
//             style={styles.image}
//           />
//         </View>

//         <View style={styles.actionsWrapper}>
//           <Text style={styles.title}>OTP Verification</Text>
//           <Text style={styles.subtitle}>
//             We will send you a one-time password to this mobile number.
//           </Text>
//           <Text style={styles.label}>Enter mobile number</Text>

//           <View style={styles.inputWrapper}>
//             <TextInput
//               mode="flat"
//               underlineColor="#2743FD"
//               activeUnderlineColor="#2743FD"
//               style={styles.input}
//               contentStyle={styles.inputContent}
//               placeholder="Your phone number"
//               keyboardType="phone-pad"
//             />
//           </View>

//           <View style={styles.buttonWrapper}>
//             <OtpButton text="Get OTP" onPress={() => router.push("/verify")} />
//           </View>
//         </View>
//       </View>
//     </PaperProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingHorizontal: 24,
//   },
//   image: {
//     width: dynamicWidth,
//     height: dynamicHeight,
//     marginTop: dynamicMarginTop5,
//     alignSelf: "center",
//   },
//   actionsWrapper: {
//     marginTop: dynamicMarginTop2,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     textAlign: "center",
//     color: "#3A3A3A",
//   },
//   subtitle: {
//     fontSize: 14,
//     textAlign: "center",
//     marginTop: dynamicMarginTop3,
//     maxWidth: 254,
//     alignSelf: "center",
//     color: "#3A3A3A",
//   },
//   label: {
//     fontSize: 16,
//     marginTop: dynamicMarginTop3,
//     alignSelf: "center",
//     color: "#B9B9B9",
//   },
//   input: {
//     width: 251,
//     backgroundColor: "transparent",
//     fontSize: 16,
//     marginTop: dynamicMarginTop3,
//     height: dynamicMarginTop,
//     alignSelf: "center",
//   },
//   inputContent: {
//     height: dynamicMarginTop,
//     paddingTop: 0,
//     paddingBottom: 8,
//     textAlign: "center",
//     lineHeight: 16,
//   },
//   inputWrapper: {
//     alignSelf: "center",
//   },
//   buttonWrapper: {
//     marginTop: dynamicMarginTop4,
//     alignItems: "center",
//   },
// });
import OtpButton from "@/components/otpButton";
import { Stack, useRouter } from "expo-router";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Image,
  Keyboard,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Provider as PaperProvider, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");

const dynamicHeight = screenHeight / 3.15;
const dynamicWidth = screenWidth / 1.5;
const dynamicMarginTop = screenHeight / 34;
const dynamicMarginTop2 = screenHeight / 17;
const dynamicMarginTop3 = screenHeight / 30.5;
const dynamicMarginTop4 = screenHeight / 9.2;
const dynamicMarginTop5 = screenHeight / 8.5;

export default function Verification() {
  const router = useRouter();

  const contentTranslateY = useRef(new Animated.Value(0)).current;

  const slideUp = (keyboardHeight: number) => {
    const offset =
      Platform.OS === "ios" ? keyboardHeight * 0.8 : keyboardHeight * 0.8;
    Animated.timing(contentTranslateY, {
      toValue: -offset,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const slideDown = () => {
    Animated.timing(contentTranslateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      (e) => {
        slideUp(e.endCoordinates.height);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        slideDown();
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const dismissKeyboardAndSlideDown = () => {
    Keyboard.dismiss();
    slideDown();
  };

  return (
    <PaperProvider>
      <TouchableWithoutFeedback
        onPress={dismissKeyboardAndSlideDown}
        accessible={false}
      >
        <SafeAreaView
          style={styles.container}
          edges={["bottom", "left", "right"]}
        >
          <StatusBar hidden />
          <Stack.Screen options={{ headerShown: false }} />

          <Animated.View
            style={[
              styles.animatedScreenContent,
              { transform: [{ translateY: contentTranslateY }] },
            ]}
          >
            <View>
              <Image
                source={require("../assets/images/verification.png")}
                resizeMode="contain"
                style={styles.image}
              />
            </View>

            <View style={styles.actionsWrapper}>
              <Text style={styles.title}>OTP Verification</Text>
              <Text style={styles.subtitle}>
                We will send you a one-time password to this mobile number.
              </Text>
              <Text style={styles.label}>Enter mobile number</Text>

              <View style={styles.inputWrapper}>
                <TextInput
                  mode="flat"
                  underlineColor="#2743FD"
                  activeUnderlineColor="#2743FD"
                  style={styles.input}
                  contentStyle={styles.inputContent}
                  placeholder="Your phone number"
                  keyboardType="phone-pad"
                />
              </View>

              <View style={styles.buttonWrapper}>
                <OtpButton
                  text="Get OTP"
                  onPress={() => router.push("/verify")}
                />
              </View>
            </View>
          </Animated.View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  animatedScreenContent: {
    flex: 1,
    width: "100%",
  },
  image: {
    width: dynamicWidth,
    height: dynamicHeight,
    marginTop: dynamicMarginTop5,
    alignSelf: "center",
  },
  actionsWrapper: {
    marginTop: dynamicMarginTop2,
    paddingHorizontal: 24,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#3A3A3A",
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    marginTop: dynamicMarginTop3,
    maxWidth: 254,
    alignSelf: "center",
    color: "#3A3A3A",
  },
  label: {
    fontSize: 16,
    marginTop: dynamicMarginTop3,
    alignSelf: "center",
    color: "#B9B9B9",
  },
  input: {
    width: 251,
    backgroundColor: "transparent",
    fontSize: 16,
    marginTop: dynamicMarginTop3,
    height: dynamicMarginTop,
    alignSelf: "center",
  },
  inputContent: {
    height: dynamicMarginTop,
    paddingTop: 0,
    paddingBottom: 8,
    textAlign: "center",
    lineHeight: 16,
  },
  inputWrapper: {
    alignSelf: "center",
  },
  buttonWrapper: {
    marginTop: dynamicMarginTop4,
    alignItems: "center",
  },
});
