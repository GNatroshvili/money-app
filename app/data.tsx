// import CompleteButton from "@/components/completeButton";
// import * as ImagePicker from "expo-image-picker";
// import { LinearGradient } from "expo-linear-gradient";
// import { Stack, useRouter } from "expo-router";
// import React, { useState } from "react";
// import {
//     Dimensions,
//     Image,
//     KeyboardAvoidingView,
//     Platform,
//     StatusBar,
//     StyleSheet,
//     TouchableOpacity,
//     View
// } from "react-native";
// import Input from "../components/input";

// const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

// const dynamicTop = screenHeight / 12.5;
// const dynamicTop1 = screenHeight / 10.1;
// const dynamicHeight = screenHeight / 6;
// const dynamicWidth = screenWidth / 2.75;
// const dynamicMarginTop = screenHeight / 34;
// const dynamicMarginTop2 = screenHeight / 11.3;
// const dynamicMarginTop3 = screenHeight / 3.2;
// const dynamicMarginTop4 = screenHeight / 9.2;
// const dynamicMarginTop5 = screenHeight / 8.5;

// export default function HomeScreen() {
//     const [form, setForm] = useState({
//         username: { value: "", isValid: false },
//         firstName: { value: "", isValid: false },
//         lastName: { value: "", isValid: false },
//         dob: { value: "", isValid: false },
//     });

//     const [selectedImage, setSelectedImage] = useState<string | null>(null);

//     const router = useRouter();

//     const handleCompletePress = () => {
//         if (allValid) {
//             router.push("/wallet");
//         }
//     };

//     const updateField = (field: keyof typeof form, value: string, isValid: boolean) => {
//         setForm((prev) => ({
//             ...prev,
//             [field]: { value, isValid },
//         }));
//     };

//     const allValid = Object.values(form).every((f) => f.isValid);

//     const handleImagePick = async () => {
//         const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
//         if (!permission.granted) {
//             alert("Permission to access media library is required!");
//             return;
//         }

//         const result = await ImagePicker.launchImageLibraryAsync({
//             mediaTypes: ImagePicker.MediaTypeOptions.Images,
//             allowsEditing: true,
//             aspect: [1, 1],
//             quality: 1,
//         });

//         if (!result.canceled && result.assets.length > 0) {
//             setSelectedImage(result.assets[0].uri);
//         }
//     };

//     return (
//         <LinearGradient
//             colors={["#4950F9", "#1937FE"]}
//             start={{ x: 0.1, y: 0 }}
//             end={{ x: 0.9, y: 1 }}
//             style={styles.container}
//         >
//             <StatusBar hidden />
//             <Stack.Screen options={{ headerShown: false }} />

//             <View style={styles.leftArrowWrapper}>
//                 <TouchableOpacity onPress={() => router.push("/verify")}>
//                     <Image
//                         source={require("../assets/images/leftArrow.png")}
//                         resizeMode="contain"
//                         style={styles.leftArrow}
//                     />
//                 </TouchableOpacity>
//             </View>

//             {/* Image uploader */}
//             <TouchableOpacity onPress={handleImagePick}>
//                 <Image
//                     source={
//                         selectedImage
//                             ? { uri: selectedImage }
//                             : require("../assets/images/imageUploader.png")
//                     }
//                     resizeMode="cover"
//                     style={styles.imageUploader}
//                 />
//             </TouchableOpacity>

//             <KeyboardAvoidingView
//                 behavior={Platform.OS === "ios" ? "padding" : "height"}
//                 style={styles.keyboardAvoidContainer}
//                 keyboardVerticalOffset={Platform.select({ ios: 100, android: -50 })}
//             >
//                 <View style={styles.inputWrapper}>
//                     <Input
//                         label="Username"
//                         placeholder="Your username"
//                         type="text"
//                         value={form.username.value}
//                         onChange={(value, isValid) => updateField("username", value, isValid)}
//                     />
//                     <Input
//                         label="First Name"
//                         placeholder="Your name"
//                         type="text"
//                         value={form.firstName.value}
//                         onChange={(value, isValid) => updateField("firstName", value, isValid)}
//                     />
//                     <Input
//                         label="Last Name"
//                         placeholder="Your last name"
//                         type="text"
//                         value={form.lastName.value}
//                         onChange={(value, isValid) => updateField("lastName", value, isValid)}
//                     />
//                     <Input
//                         label="Date of Birth"
//                         placeholder="dd-mm-yyyy"
//                         type="date"
//                         value={form.dob.value}
//                         onChange={(value, isValid) => updateField("dob", value, isValid)}
//                     />
//                 </View>
//             </KeyboardAvoidingView>

//             <View style={styles.completeButtonWrapper}>
//                 <CompleteButton
//                     text="complete"
//                     disabled={!allValid}
//                     textColor={allValid ? "#2743FD" : "#C8C8C8"}
//                     useBlueMark={allValid}
//                     onPress={handleCompletePress}
//                 />
//             </View>
//         </LinearGradient>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     leftArrowWrapper: {
//         position: "absolute",
//         top: dynamicTop,
//         left: 30,
//     },
//     leftArrow: {
//         width: 26,
//         height: 21,
//     },
//     imageUploader: {
//         width: 143,
//         height: 143,
//         borderRadius: 30,
//         position: "absolute",
//         top: dynamicTop1,
//         alignSelf: "center",
//     },
//     keyboardAvoidContainer: {
//         flex: 1,
//         width: '100%',
//         marginTop: dynamicMarginTop3,
//     },
//     scrollContainer: {},
//     inputWrapper: {
//         gap: dynamicMarginTop,
//         alignItems: "center",
//         paddingHorizontal: 35,
//     },
//     completeButtonWrapper: {
//         position: "absolute",
//         bottom: dynamicMarginTop2,
//         left: 24,
//         right: 24,
//         alignItems: "center",
//     },
// });

import CompleteButton from "@/components/completeButton";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";
import { Stack, useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  Keyboard,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../components/input";

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");

const dynamicTop = screenHeight / 12.5;
const dynamicTop1 = screenHeight / 10.1;
const dynamicMarginTop = screenHeight / 34;
const dynamicMarginTop2 = screenHeight / 11.3;
const dynamicMarginTop3 = screenHeight / 3.2;

export default function HomeScreen() {
  const [form, setForm] = useState({
    username: { value: "", isValid: false },
    firstName: { value: "", isValid: false },
    lastName: { value: "", isValid: false },
    dob: { value: "", isValid: false },
  });

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const router = useRouter();
  const contentTranslateY = useRef(new Animated.Value(0)).current;

  const handleCompletePress = () => {
    if (allValid) {
      router.push("/wallet");
    }
  };

  const updateField = (
    field: keyof typeof form,
    value: string,
    isValid: boolean
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: { value, isValid },
    }));
  };

  const allValid = Object.values(form).every((f) => f.isValid);

  const handleImagePick = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      alert("Permission to access media library is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const slideUp = (keyboardHeight: number) => {
    const offset =
      Platform.OS === "ios" ? keyboardHeight * 0.7 : keyboardHeight * 0.8;
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
    <LinearGradient
      colors={["#4950F9", "#1937FE"]}
      start={{ x: 0.1, y: 0 }}
      end={{ x: 0.9, y: 1 }}
      style={styles.container}
    >
      <StatusBar hidden />
      <Stack.Screen options={{ headerShown: false }} />

      <TouchableWithoutFeedback
        onPress={dismissKeyboardAndSlideDown}
        accessible={false}
      >
        <SafeAreaView style={styles.safeArea}>
          <Animated.View
            style={[
              styles.animatedContent,
              { transform: [{ translateY: contentTranslateY }] },
            ]}
          >
            {allValid && (
              <View style={styles.figureWrapper}>
                <Image
                  source={require("../assets/images/figure.png")}
                  resizeMode="contain"
                  style={styles.figure}
                />
              </View>
            )}
            <View style={styles.leftArrowWrapper}>
              <TouchableOpacity onPress={() => router.push("/verify")}>
                <Image
                  source={require("../assets/images/leftArrow.png")}
                  resizeMode="contain"
                  style={styles.leftArrow}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={handleImagePick}>
              <Image
                source={
                  selectedImage
                    ? { uri: selectedImage }
                    : require("../assets/images/imageUploader.png")
                }
                resizeMode="cover"
                style={styles.imageUploader}
              />
            </TouchableOpacity>

            <ScrollView
              style={styles.scrollView}
              contentContainerStyle={styles.scrollContent}
              keyboardShouldPersistTaps="handled"
              keyboardDismissMode="on-drag"
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.inputWrapper}>
                <Input
                  label="Username"
                  placeholder="Your username"
                  type="text"
                  value={form.username.value}
                  onChange={(value, isValid) =>
                    updateField("username", value, isValid)
                  }
                />
                <Input
                  label="First Name"
                  placeholder="Your name"
                  type="text"
                  value={form.firstName.value}
                  onChange={(value, isValid) =>
                    updateField("firstName", value, isValid)
                  }
                />
                <Input
                  label="Last Name"
                  placeholder="Your last name"
                  type="text"
                  value={form.lastName.value}
                  onChange={(value, isValid) =>
                    updateField("lastName", value, isValid)
                  }
                />
                <Input
                  label="Date of Birth"
                  placeholder="dd-mm-yyyy"
                  type="date"
                  value={form.dob.value}
                  onChange={(value, isValid) =>
                    updateField("dob", value, isValid)
                  }
                />
              </View>
            </ScrollView>
            <View style={styles.completeButtonWrapper}>
              <CompleteButton
                text="complete"
                disabled={!allValid}
                textColor={allValid ? "#2743FD" : "#C8C8C8"}
                useBlueMark={allValid}
                onPress={handleCompletePress}
              />
            </View>
          </Animated.View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  animatedContent: {
    flex: 1,
    width: "100%",
  },
  leftArrowWrapper: {
    position: "absolute",
    top: dynamicTop,
    left: 30,
    zIndex: 10,
  },
  leftArrow: {
    width: 26,
    height: 21,
  },
  figureWrapper: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  figure: {
    width: 250,
    height: 245,
  },
  imageUploader: {
    width: 143,
    height: 143,
    borderRadius: 30,
    position: "absolute",
    top: dynamicTop1,
    alignSelf: "center",
    zIndex: 5,
  },
  scrollView: {
    flex: 1,
    marginTop: dynamicMarginTop3,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 150,
  },
  inputWrapper: {
    gap: dynamicMarginTop,
    alignItems: "center",
    paddingHorizontal: 35,
  },
  completeButtonWrapper: {
    position: "absolute",
    bottom: dynamicMarginTop2,
    left: 24,
    right: 24,
    alignItems: "center",
    zIndex: 100,
    backgroundColor: "transparent",
  },
});
