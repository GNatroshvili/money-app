import { Stack } from "expo-router";
import React, { useState } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";

type InputProps = {
  placeholder: string;
  label: string;
};

export default function Input({ placeholder, label }: InputProps) {
  const [value, setValue] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Stack.Screen options={{ headerShown: false }} />

      {/* Label placed above the input */}
      <Text style={styles.label}>{label}</Text>

      <TextInput
        mode="flat"
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        underlineColor="#ffffff" // bottom border color
        activeUnderlineColor="#ffffff"
        style={styles.input}
        theme={{
          colors: {
            placeholder: "#80E0FF", // placeholder text color
            text: "#FFFFFF", // input text color
            primary: "#ffffff", // underline and active colors fallback
            background: "transparent",
          },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: "#80E0FF",
    fontSize: 16,
    alignSelf: "flex-start",
  },
  input: {
    width: 323,
    backgroundColor: "transparent",
    fontSize: 16,
    height: 40,
    paddingHorizontal: 0,
  },
});
