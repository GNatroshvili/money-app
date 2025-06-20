// import { LinearGradient } from "expo-linear-gradient";
// import { Stack, useRouter } from "expo-router";
// import React, { useState } from "react";
// import {
//     Dimensions,
//     Image,
//     KeyboardAvoidingView,
//     Platform,
//     ScrollView,
//     StatusBar,
//     StyleSheet,
//     Text,
//     TouchableOpacity,
//     View,
// } from "react-native";
// import { TextInput } from "react-native-paper";
// import { SafeAreaView } from "react-native-safe-area-context";

// const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
// const IMAGE_WIDTH = SCREEN_WIDTH - 20;
// const IMAGE_HEIGHT = IMAGE_WIDTH * (397 / 497);

// const isSmallScreen = SCREEN_HEIGHT < 750;
// const isVerySmallScreen = SCREEN_HEIGHT < 700;

// export default function Index() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [showPassword, setShowPassword] = useState(false);
//     const [submitAttempted, setSubmitAttempted] = useState(false);

//     const router = useRouter();

//     const isEmailValid = (email: string) =>
//         /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

//     return (
//         <View style={{ flex: 1 }}>
//             <SafeAreaView
//                 style={styles.container}
//                 edges={["bottom", "left", "right"]}
//             >
//                 <StatusBar hidden />
//                 <Stack.Screen options={{ headerShown: false }} />

//                 {/* Background Image */}
//                 <View>
//                     <Image
//                         source={require("../assets/images/threeCircle.png")}
//                         resizeMode="contain"
//                         style={styles.image}
//                     />
//                 </View>

//                 {/* Logo */}
//                 <View style={styles.logoWrapper}>
//                     <Image
//                         source={require("../assets/images/whiteLogo.png")}
//                         resizeMode="cover"
//                         style={styles.logo}
//                     />
//                     <Text style={styles.logoText}>Welcome back</Text>
//                 </View>

//                 {/* Form with Keyboard Avoiding */}
//                 <KeyboardAvoidingView
//                     behavior={Platform.OS === "ios" ? "padding" : "height"}
//                     style={{ flex: 1 }}
//                     keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -260}
//                 >
//                     <ScrollView
//                         contentContainerStyle={styles.scrollContent}
//                         keyboardShouldPersistTaps="handled"
//                     >
//                         <View
//                             style={[
//                                 styles.formWrapper,
//                                 {
//                                     paddingBottom: isVerySmallScreen
//                                         ? 45
//                                         : isSmallScreen
//                                         ? 55
//                                         : 75,
//                                 },
//                             ]}
//                         >
//                             <Text
//                                 style={[
//                                     styles.title,
//                                     {
//                                         marginBottom: isVerySmallScreen
//                                             ? 25
//                                             : isSmallScreen
//                                             ? 35
//                                             : 47,
//                                     },
//                                 ]}
//                             >
//                                 Sign Up
//                             </Text>

//                             {/* Email Field */}
//                             <View style={{ width: "100%" }}>
//                                 <TextInput
//                                     label="Email Address"
//                                     value={email}
//                                     onChangeText={setEmail}
//                                     mode="flat"
//                                     keyboardType="email-address"
//                                     style={styles.input}
//                                     underlineColor={
//                                         submitAttempted && !isEmailValid(email)
//                                             ? "#FD2727"
//                                             : "#6075FF"
//                                     }
//                                     activeUnderlineColor={
//                                         submitAttempted && !isEmailValid(email)
//                                             ? "#FD2727"
//                                             : "#B9B9B9"
//                                     }
//                                     placeholderTextColor={
//                                         submitAttempted && !isEmailValid(email)
//                                             ? "#FD2727"
//                                             : "#757575"
//                                     }
//                                     contentStyle={{ paddingVertical: 8 }}
//                                     underlineStyle={{
//                                         backgroundColor:
//                                             submitAttempted && !isEmailValid(email)
//                                                 ? "#FD2727"
//                                                 : "#6075FF",
//                                     }}
//                                     selectionColor="#1433FF"
//                                     right={
//                                         email.length > 2 &&
//                                         email.includes("@") &&
//                                         isEmailValid(email) ? (
//                                             <TextInput.Icon
//                                                 icon={() => (
//                                                     <Image
//                                                         source={require("../assets/images/checkmark.png")}
//                                                         style={styles.checkmarkIcon}
//                                                     />
//                                                 )}
//                                             />
//                                         ) : null
//                                     }
//                                 />
//                                 {submitAttempted && !isEmailValid(email) && (
//                                     <Text style={styles.errorText}>
//                                         The email address is incomplete.
//                                     </Text>
//                                 )}
//                             </View>

//                             {/* Password Field */}
//                             <TextInput
//                                 label="Password"
//                                 value={password}
//                                 onChangeText={setPassword}
//                                 mode="flat"
//                                 style={styles.input}
//                                 keyboardType="default"
//                                 secureTextEntry={!showPassword}
//                                 underlineColor="#6075FF"
//                                 activeUnderlineColor="#B9B9B9"
//                                 contentStyle={{ paddingVertical: 8 }}
//                                 underlineStyle={{ backgroundColor: "#6075FF" }}
//                                 selectionColor="#1433FF"
//                                 right={
//                                     password.length > 0 ? (
//                                         <TextInput.Icon
//                                             icon={() => (
//                                                 <Image
//                                                     source={
//                                                         showPassword
//                                                             ? require("../assets/images/show.png")
//                                                             : require("../assets/images/eye.png")
//                                                     }
//                                                     style={
//                                                         showPassword ? styles.showIcon : styles.eyeIcon
//                                                     }
//                                                 />
//                                             )}
//                                             onPress={() => setShowPassword(!showPassword)}
//                                         />
//                                     ) : null
//                                 }
//                             />

//                             <Text style={styles.forgetPassword}>forgot password?</Text>

//                             {/* Sign Up Button */}
//                             <TouchableOpacity
//                                 style={[
//                                     styles.button,
//                                     styles.shadow,
//                                     {
//                                         marginTop: isVerySmallScreen
//                                             ? 40
//                                             : isSmallScreen
//                                             ? 50
//                                             : 93,
//                                     },
//                                 ]}
//                                 onPress={() => {
//                                     setSubmitAttempted(true);
//                                     router.push("/verification");
//                                     // if (isEmailValid(email) && password.length > 0) {
//                                     // }
//                                 }}
//                             >
//                                 <LinearGradient
//                                     colors={["#6075FF", "#1433FF"]}
//                                     start={{ x: 0.1, y: 0 }}
//                                     end={{ x: 0.9, y: 1 }}
//                                     style={styles.gradient}
//                                 >
//                                     <Text style={styles.buttonText}>Sign Up</Text>
//                                     <Image
//                                         source={require("../assets/images/whiteArrow.png")}
//                                         resizeMode="contain"
//                                         style={styles.whiteArrow}
//                                     />
//                                     <Image
//                                         source={require("../assets/images/signInButton.png")}
//                                         resizeMode="cover"
//                                         style={styles.signInButton}
//                                     />
//                                 </LinearGradient>
//                             </TouchableOpacity>
//                         </View>
//                     </ScrollView>
//                 </KeyboardAvoidingView>
//             </SafeAreaView>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//     },
//     scrollContent: {
//         flexGrow: 1,
//         justifyContent: "flex-end",
//     },
//     image: {
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: IMAGE_WIDTH,
//         height: IMAGE_HEIGHT,
//     },
//     logoWrapper: {
//         position: "absolute",
//         top: 60,
//         left: 55,
//     },
//     logo: {
//         width: 60,
//         height: 59,
//     },
//     logoText: {
//         color: "#fff",
//         fontSize: 28,
//         fontWeight: "400",
//         fontFamily: "Montserrat",
//         maxWidth: 134,
//         marginTop: 16,
//     },
//     formWrapper: {
//         alignItems: "center",
//         paddingHorizontal: 35,
//     },
//     input: {
//         width: "100%",
//         backgroundColor: "transparent",
//         fontSize: 16,
//     },
//     title: {
//         color: "#3A3A3A",
//         fontSize: 28,
//         fontWeight: "700",
//         fontFamily: "Montserrat",
//         alignSelf: "flex-start",
//     },
//     forgetPassword: {
//         color: "#2B47FC",
//         fontSize: 16,
//         fontWeight: "400",
//         fontFamily: "Montserrat",
//         marginTop: 25,
//         alignSelf: "flex-start",
//     },
//     button: {
//         width: 315,
//         height: 72,
//         borderRadius: 28,
//         overflow: "hidden",
//     },
//     gradient: {
//         flex: 1,
//         borderRadius: 28,
//         flexDirection: "row",
//         justifyContent: "space-between",
//         alignItems: "center",
//         paddingHorizontal: 24,
//         paddingVertical: 10,
//     },
//     buttonText: {
//         color: "#fff",
//         fontSize: 20,
//         fontWeight: "600",
//     },
//     whiteArrow: {
//         width: 24,
//         height: 24,
//     },
//     signInButton: {
//         position: "absolute",
//         top: 0,
//         left: 185,
//         width: 130,
//         height: 55,
//     },
//     shadow: {
//         shadowColor: "#1433FF",
//         shadowOffset: {
//             width: 0,
//             height: 6,
//         },
//         shadowOpacity: 0.2,
//         shadowRadius: 10,
//         elevation: 8,
//     },
//     checkmarkIcon: {
//         width: 18,
//         height: 13,
//         marginRight: 12,
//     },
//     eyeIcon: {
//         width: 18,
//         height: 12,
//         marginRight: 12,
//     },
//     showIcon: {
//         width: 18,
//         height: 17,
//         marginRight: 12,
//     },
//     errorText: {
//         color: "#FD2727",
//         fontSize: 12,
//         fontFamily: "Montserrat",
//         marginTop: 4,
//         marginLeft: 4,
//     },
// });

import { LinearGradient } from "expo-linear-gradient";
import { Stack, useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated, // Import Animated
  Dimensions,
  Image,
  Keyboard, // Import Keyboard
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback, // Import TouchableWithoutFeedback
  View,
} from "react-native";
import { TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const IMAGE_WIDTH = SCREEN_WIDTH - 20;
const IMAGE_HEIGHT = IMAGE_WIDTH * (397 / 497);

const isSmallScreen = SCREEN_HEIGHT < 750;
const isVerySmallScreen = SCREEN_HEIGHT < 700;

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const router = useRouter();

  // Animated value for content translation
  const contentTranslateY = useRef(new Animated.Value(0)).current;

  const isEmailValid = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

  // Functions for keyboard animation
  const slideUp = (keyboardHeight: number) => {
    const offset =
      Platform.OS === "ios" ? keyboardHeight * 0.75 : keyboardHeight * 0.8;
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

  // Effect hook to listen for keyboard events
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

        <Animated.View // Use Animated.View here
          style={[
            styles.animatedScreenContent,
            { transform: [{ translateY: contentTranslateY }] },
          ]}
        >
          {/* Background Image */}
          <Image
            source={require("../assets/images/threeCircle.png")}
            resizeMode="contain"
            style={styles.image}
          />

          {/* Logo */}
          <View style={styles.logoWrapper}>
            <Image
              source={require("../assets/images/whiteLogo.png")}
              resizeMode="cover"
              style={styles.logo}
            />
            <Text style={styles.logoText}>Welcome back</Text>
          </View>

          {/* Form Content */}
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="on-drag"
            showsVerticalScrollIndicator={false}
          >
            <View
              style={[
                styles.formWrapper,
                {
                  paddingBottom: isVerySmallScreen
                    ? 45
                    : isSmallScreen
                    ? 55
                    : 75,
                },
              ]}
            >
              <Text
                style={[
                  styles.title,
                  {
                    marginBottom: isVerySmallScreen
                      ? 25
                      : isSmallScreen
                      ? 35
                      : 47,
                  },
                ]}
              >
                Sign Up
              </Text>

              {/* Email Field */}
              <View style={styles.inputWrapper}>
                <TextInput
                  label="Email Address"
                  value={email}
                  onChangeText={setEmail}
                  mode="flat"
                  keyboardType="email-address"
                  style={styles.input}
                  underlineColor={
                    submitAttempted && !isEmailValid(email)
                      ? "#FD2727"
                      : "#6075FF"
                  }
                  activeUnderlineColor={
                    submitAttempted && !isEmailValid(email)
                      ? "#FD2727"
                      : "#B9B9B9"
                  }
                  placeholderTextColor={
                    submitAttempted && !isEmailValid(email)
                      ? "#FD2727"
                      : "#757575"
                  }
                  contentStyle={{ paddingVertical: 8 }}
                  underlineStyle={{
                    backgroundColor:
                      submitAttempted && !isEmailValid(email)
                        ? "#FD2727"
                        : "#6075FF",
                  }}
                  selectionColor="#1433FF"
                  right={
                    email.length > 2 &&
                    email.includes("@") &&
                    isEmailValid(email) ? (
                      <TextInput.Icon
                        icon={() => (
                          <Image
                            source={require("../assets/images/checkmark.png")}
                            style={styles.checkmarkIcon}
                          />
                        )}
                      />
                    ) : null
                  }
                />
                {submitAttempted && !isEmailValid(email) && (
                  <Text style={styles.errorText}>
                    The email address is incomplete.
                  </Text>
                )}
                <TextInput
                  label="Password"
                  value={password}
                  onChangeText={setPassword}
                  mode="flat"
                  style={styles.input}
                  keyboardType="default"
                  secureTextEntry={!showPassword}
                  underlineColor="#6075FF"
                  activeUnderlineColor="#B9B9B9"
                  contentStyle={{ paddingVertical: 8 }}
                  underlineStyle={{ backgroundColor: "#6075FF" }}
                  selectionColor="#1433FF"
                  right={
                    password.length > 0 ? (
                      <TextInput.Icon
                        icon={() => (
                          <Image
                            source={
                              showPassword
                                ? require("../assets/images/show.png")
                                : require("../assets/images/eye.png")
                            }
                            style={
                              showPassword ? styles.showIcon : styles.eyeIcon
                            }
                          />
                        )}
                        onPress={() => setShowPassword(!showPassword)}
                      />
                    ) : null
                  }
                />
              </View>
              <Text style={styles.forgetPassword}>forgot password?</Text>

              {/* Sign Up Button */}
              <TouchableOpacity
                style={[
                  styles.button,
                  styles.shadow,
                  {
                    marginTop: isVerySmallScreen ? 40 : isSmallScreen ? 50 : 93,
                  },
                ]}
                onPress={() => {
                  setSubmitAttempted(true);
                  router.push("/verification");
                  // if (isEmailValid(email) && password.length > 0) {
                  // }
                }}
              >
                <LinearGradient
                  colors={["#6075FF", "#1433FF"]}
                  start={{ x: 0.1, y: 0 }}
                  end={{ x: 0.9, y: 1 }}
                  style={styles.gradient}
                >
                  <Text style={styles.buttonText}>Sign Up</Text>
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
            </View>
          </ScrollView>
        </Animated.View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
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
    position: "relative",
    paddingTop:
      Platform.OS === "ios" ? SCREEN_HEIGHT * 0.25 : SCREEN_HEIGHT * 0.2,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    zIndex: 0,
  },
  logoWrapper: {
    position: "absolute",
    top: 60,
    left: 55,
    zIndex: 1,
  },
  logo: {
    width: 60,
    height: 59,
  },
  logoText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "400",
    fontFamily: "Montserrat",
    maxWidth: 134,
    marginTop: 16,
  },
  formWrapper: {
    alignItems: "center",
    paddingHorizontal: 35,
    width: "100%",
  },
  input: {
    width: "100%",
    backgroundColor: "transparent",
    fontSize: 16,
  },
  title: {
    color: "#3A3A3A",
    fontSize: 28,
    fontWeight: "700",
    fontFamily: "Montserrat",
    alignSelf: "flex-start",
  },
  forgetPassword: {
    color: "#2B47FC",
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Montserrat",
    marginTop: 25,
    alignSelf: "flex-start",
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
  checkmarkIcon: {
    width: 18,
    height: 13,
    marginRight: 12,
  },
  eyeIcon: {
    width: 18,
    height: 12,
    marginRight: 12,
  },
  showIcon: {
    width: 18,
    height: 17,
    marginRight: 12,
  },
  errorText: {
    color: "#FD2727",
    fontSize: 12,
    fontFamily: "Montserrat",
    marginTop: 4,
    marginLeft: 4,
  },
  inputWrapper: {
    width: "100%",
    gap: isVerySmallScreen || isSmallScreen ? 20 : 40,
  },
});
