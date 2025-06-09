import OtpButton from "@/components/otpButton";
import { Stack, useRouter } from "expo-router";
import React from "react";
import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider, TextInput } from "react-native-paper";

export default function Verification() {
  const router = useRouter(); 

  return (
    <PaperProvider>
      <View style={styles.container}>
        <StatusBar hidden />
        <Stack.Screen options={{ headerShown: false }} />

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
            <OtpButton text="Get OTP" onPress={() => router.push("/verify")} />
          </View>
        </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
  },
  image: {
    width: 257,
    height: 269,
    marginTop: 100,
    alignSelf: "center",
  },
  actionsWrapper: {
    marginTop: 50,
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
    marginTop: 28,
    maxWidth: 254,
    alignSelf: "center",
    color: "#3A3A3A",
  },
  label: {
    fontSize: 16,
    marginTop: 28,
    alignSelf: "center",
    color: "#B9B9B9",
  },
  input: {
    width: 251,
    backgroundColor: "transparent",
    fontSize: 16,
    marginTop: 28,
    height: 25,
    alignSelf: "center",
  },
  inputContent: {
    height: 25,
    paddingTop: 0,
    paddingBottom: 8,
    textAlign: "center",
    lineHeight: 16,
  },
  inputWrapper: {
    alignSelf: "center",
  },
  buttonWrapper: {
    marginTop: 92,
    alignItems: "center",
  },
});
