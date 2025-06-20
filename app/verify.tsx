// import OtpButton from "@/components/otpButton";
// import { Stack, useRouter } from "expo-router";
// import React, { useRef, useState } from "react";
// import {
//     Dimensions,
//     Image,
//     StatusBar,
//     StyleSheet,
//     Text,
//     TextInput,
//     TouchableWithoutFeedback,
//     View
// } from "react-native";
// import { Provider as PaperProvider } from "react-native-paper";

// const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

// const dynamicHeight = screenHeight / 3.15;
// const dynamicWidth = screenWidth / 1.5;
// const dynamicMarginTop = screenHeight / 8.5;
// const dynamicMarginTop2 = screenHeight / 17;
// const dynamicMarginTop3 = screenHeight / 30.5;
// const dynamicMarginTop4 = screenHeight / 21.3;
// const dynamicMarginTop5 = screenHeight / 13.5;

// export default function Verification() {
//     const router = useRouter();
//     const [otp, setOtp] = useState("");
//     const inputRef = useRef<TextInput>(null);

//     const handleChange = (text: string) => {
//         if (text.length <= 4) {
//             setOtp(text);
//         }
//     };

//     const isOtpValid = otp.length === 4;

//     return (
//         <PaperProvider>
//             <View style={styles.container}>
//                 <StatusBar hidden />
//                 <Stack.Screen options={{ headerShown: false }} />

//                 <View>
//                     <Image
//                         source={require("../assets/images/verification.png")}
//                         resizeMode="contain"
//                         style={styles.image}
//                     />
//                 </View>

//                 <View style={styles.actionsWrapper}>
//                     <Text style={styles.title}>OTP Verification</Text>
//                     <Text style={styles.subtitle}>
//                         Enter the OTP sent to +995 555 551 452
//                     </Text>

//                     {/* Hidden TextInput to capture input */}
//                     <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
//                         <View style={styles.otpContainer}>
//                             {[0, 1, 2, 3].map((i) => (
//                                 <View
//                                     key={i}
//                                     style={[
//                                         styles.otpBox,
//                                         {
//                                             borderBottomColor: otp[i] ? "#2743FD" : "#B9B9B9",
//                                         },
//                                     ]}
//                                 >
//                                     <Text style={styles.otpDigit}>{otp[i] || ""}</Text>
//                                 </View>
//                             ))}
//                             <TextInput
//                                 ref={inputRef}
//                                 value={otp}
//                                 onChangeText={handleChange}
//                                 keyboardType="numeric"
//                                 maxLength={4}
//                                 style={styles.hiddenInput}
//                                 autoFocus
//                             />
//                         </View>
//                     </TouchableWithoutFeedback>

//                     <Text style={styles.label}>
//                         Didn’t you receive the OTP?{" "}
//                         <Text style={styles.span}>Resend OTP</Text>
//                     </Text>

//                     <View style={styles.buttonWrapper}>
//                         <OtpButton
//                             text="Verify"
//                             onPress={() => router.push("/data")}
//                             disabled={!isOtpValid}
//                         />
//                     </View>
//                 </View>
//             </View>
//         </PaperProvider>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//         paddingHorizontal: 24,
//     },
//     image: {
//         width: dynamicWidth,
//         height: dynamicHeight,
//         marginTop: dynamicMarginTop,
//         alignSelf: "center",
//     },
//     actionsWrapper: {
//         marginTop: dynamicMarginTop2,
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: "bold",
//         textAlign: "center",
//         color: "#3A3A3A",
//     },
//     subtitle: {
//         fontSize: 14,
//         textAlign: "center",
//         marginTop: dynamicMarginTop3,
//         maxWidth: 277,
//         alignSelf: "center",
//         color: "#3A3A3A",
//     },
//     otpContainer: {
//         flexDirection: "row",
//         justifyContent: "center",
//         gap: 10,
//         marginTop: dynamicMarginTop2,
//         position: "relative",
//     },
//     otpBox: {
//         width: 40,
//         height: dynamicMarginTop2,
//         borderBottomWidth: 2,
//         alignItems: "center",
//         justifyContent: "center",
//     },
//     otpDigit: {
//         fontSize: dynamicMarginTop4,
//         color: "#000",
//         textAlign: "center",
//     },
//     hiddenInput: {
//         position: "absolute",
//         width: 160,
//         height: dynamicMarginTop2,
//         opacity: 0,
//     },
//     label: {
//         fontSize: 16,
//         marginTop: dynamicMarginTop4,
//         alignSelf: "center",
//         color: "#B9B9B9",
//     },
//     span: {
//         color: "#2743FD",
//         fontSize: 14,
//         fontWeight: "400",
//     },
//     buttonWrapper: {
//         marginTop: dynamicMarginTop5,
//         alignItems: "center",
//     },
// });

import OtpButton from "@/components/otpButton";
import { Stack, useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  Keyboard,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");

const dynamicHeight = screenHeight / 3.15;
const dynamicWidth = screenWidth / 1.5;
const dynamicMarginTop = screenHeight / 8.5;
const dynamicMarginTop2 = screenHeight / 17;
const dynamicMarginTop3 = screenHeight / 30.5;
const dynamicMarginTop4 = screenHeight / 21.3;
const dynamicMarginTop5 = screenHeight / 13.5;

export default function Verification() {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const inputRef = useRef<TextInput>(null);

  const contentTranslateY = useRef(new Animated.Value(0)).current;

  const handleChange = (text: string) => {
    if (text.length <= 4) {
      setOtp(text);
    }
  };

  const isOtpValid = otp.length === 4;

  const slideUp = (keyboardHeight: number) => {
    const offset =
      Platform.OS === "ios" ? keyboardHeight * 0.85 : keyboardHeight * 0.8;
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
                Enter the OTP sent to +995 555 551 452
              </Text>

              {/* Hidden TextInput to capture input */}
              <TouchableWithoutFeedback
                onPress={() => inputRef.current?.focus()}
              >
                <View style={styles.otpContainer}>
                  {[0, 1, 2, 3].map((i) => (
                    <View
                      key={i}
                      style={[
                        styles.otpBox,
                        {
                          borderBottomColor: otp[i] ? "#2743FD" : "#B9B9B9",
                        },
                      ]}
                    >
                      <Text style={styles.otpDigit}>{otp[i] || ""}</Text>
                    </View>
                  ))}
                  <TextInput
                    ref={inputRef}
                    value={otp}
                    onChangeText={handleChange}
                    keyboardType="numeric"
                    maxLength={4}
                    style={styles.hiddenInput}
                    autoFocus
                  />
                </View>
              </TouchableWithoutFeedback>

              <Text style={styles.label}>
                Didn’t you receive the OTP?{" "}
                <Text style={styles.span}>Resend OTP</Text>
              </Text>

              <View style={styles.buttonWrapper}>
                <OtpButton
                  text="Verify"
                  onPress={() => router.push("/data")}
                  disabled={!isOtpValid}
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
    marginTop: dynamicMarginTop,
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
    maxWidth: 277,
    alignSelf: "center",
    color: "#3A3A3A",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginTop: dynamicMarginTop2,
    position: "relative",
  },
  otpBox: {
    width: 40,
    height: dynamicMarginTop2,
    borderBottomWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  otpDigit: {
    fontSize: dynamicMarginTop4,
    color: "#000",
    textAlign: "center",
  },
  hiddenInput: {
    position: "absolute",
    width: 160,
    height: dynamicMarginTop2,
    opacity: 0,
  },
  label: {
    fontSize: 16,
    marginTop: dynamicMarginTop4,
    alignSelf: "center",
    color: "#B9B9B9",
  },
  span: {
    color: "#2743FD",
    fontSize: 14,
    fontWeight: "400",
  },
  buttonWrapper: {
    marginTop: dynamicMarginTop5,
    alignItems: "center",
  },
});
