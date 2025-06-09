// import { Stack } from "expo-router";
// import React, { useState } from "react";
// import { StatusBar, StyleSheet, Text, View } from "react-native";
// import { TextInput } from "react-native-paper";

// export default function Input() {
//   const [value, setValue] = useState("");

//   return (
//     <View style={styles.container}>
//       <StatusBar hidden />
//       <Stack.Screen options={{ headerShown: false }} />

//       {/* Label placed 41px above the input */}
//       <Text style={styles.label}>Phone Number</Text>

//       <TextInput
//         mode="flat"
//         placeholder="Your phone number"
//         placeholderTextColor="#80E0FF" // This actually won't work directly, will fix below
//         value={value}
//         onChangeText={setValue}
//         underlineColor="#ffffff" // bottom border color
//         activeUnderlineColor="#ffffff"
//         style={styles.input}
//         theme={{
//           colors: {
//             placeholder: "#80E0FF", // placeholder text color
//             text: "#FFFFFF", // input text color (adjust if needed)
//             primary: "#ffffff", // underline and active colors fallback
//             background: "#80E0FF", // input background color
//           },
//         }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 24,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   label: {
//     color: "#80E0FF",
//     fontSize: 16,
//     alignSelf: "flex-start",
//   },
//   input: {
//     width: 323,
//     backgroundColor: "transparent",
//     fontSize: 16,
//     height: 40,
//     paddingHorizontal: 0,
//   },
// });

import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import React from "react";
import { Image, StatusBar, StyleSheet, View } from "react-native";
import Input from "../components/input"; // Import the Input component

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={["#4950F9", "#1937FE"]}
      start={{ x: 0.1, y: 0 }}
      end={{ x: 0.9, y: 1 }}
      style={styles.container}
    >
      <StatusBar hidden />
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.leftArrowWrapper}>
        <Image
          source={require("../assets/images/leftArrow.png")}
          resizeMode="contain"
          style={styles.leftArrow}
        />
      </View>

      <Image
        source={require("../assets/images/imageUploader.png")}
        resizeMode="contain"
        style={styles.imageUploader}
      />

      <View style={styles.inputWrapper}>
        <Input label="username" placeholder="Your username" />
        <Input label="First Name" placeholder="Your name" />
        <Input label="Last Name" placeholder="Your last name" />
        <Input label="Date of Birth" placeholder="Your birthday (dd-mm-yyyy)" />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  leftArrowWrapper: {
    position: "absolute",
    top: 68,
    left: 30,
  },
  leftArrow: {
    width: 26,
    height: 21,
  },
  imageUploader: {
    width: 143,
    height: 143,
    position: "absolute",
    top: 84,
    alignSelf: "center",
  },
  inputWrapper: {
    position: "absolute",
    top: 260,
    left: 0,
    right: 0,
    alignItems: "center",
    marginTop: 40,
    gap: 25,
  },
});
