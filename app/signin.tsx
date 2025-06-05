import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import React, { useState } from "react";
import {
    Dimensions,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const IMAGE_WIDTH = SCREEN_WIDTH - 20;
const IMAGE_HEIGHT = IMAGE_WIDTH * (397 / 497);

export default function Index() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView style={styles.container} edges={["bottom", "left", "right"]}>
                <StatusBar hidden />
                <Stack.Screen options={{ headerShown: false }} />

                {/* Background Image */}
                <View>
                    <Image
                        source={require("../assets/images/threeCircle.png")}
                        resizeMode="contain"
                        style={styles.image}
                    />
                </View>

                {/* Logo */}
                <View style={styles.logoWrapper}>
                    <Image
                        source={require("../assets/images/whiteLogo.png")}
                        resizeMode="cover"
                        style={styles.logo}
                    />
                    <Text style={styles.logoText}>Welcome back</Text>
                </View>

                {/* Sign In Button */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.button, styles.shadow]}>
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
                </View>

                {/* Form */}
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={{ flex: 1 }}
                    keyboardVerticalOffset={Platform.OS === "ios" ? 90 : -260}
                >
                    <ScrollView
                        contentContainerStyle={styles.formWrapper}
                        keyboardShouldPersistTaps="handled"
                    >
                        <Text style={styles.title}>Sign In</Text>
                        <TextInput
                            label="Email Address"
                            value={email}
                            onChangeText={setEmail}
                            mode="flat"
                            style={styles.input}
                            keyboardType="email-address"
                            underlineColor="#6075FF"
                            activeUnderlineColor="#B9B9B9"
                            contentStyle={{ paddingVertical: 8 }}
                            underlineStyle={{ backgroundColor: "#6075FF" }}
                            selectionColor="#1433FF"
                        />
                        <TextInput
                            label="Password"
                            value={password}
                            onChangeText={setPassword}
                            mode="flat"
                            style={styles.input}
                            keyboardType="default"
                            secureTextEntry
                            underlineColor="#6075FF"
                            activeUnderlineColor="#B9B9B9"
                            contentStyle={{ paddingVertical: 8 }}
                            underlineStyle={{ backgroundColor: "#6075FF" }}
                        />
                        <Text style={styles.forgetPassword}>forgot password?</Text>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    image: {
        position: "absolute",
        top: 0,
        left: 0,
        width: IMAGE_WIDTH,
        height: IMAGE_HEIGHT,
    },
    logoWrapper: {
        position: "absolute",
        top: 60,
        left: 55,
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
    buttonContainer: {
        position: "absolute",
        bottom: 75,
        left: 0,
        right: 0,
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
    formWrapper: {
        flexGrow: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 240,
    },
    input: {
        width: 315,
        marginBottom: 12,
        backgroundColor: "transparent",
        fontSize: 16,
    },
    title: {
        color: "#3A3A3A",
        fontSize: 28,
        fontWeight: "700",
        fontFamily: "Montserrat",
        marginBottom: 47
    },
    forgetPassword: {
        color: "#2B47FC",
        fontSize: 16,
        fontWeight: "400",
        fontFamily: "Montserrat",
        marginTop: 25
    }
});


