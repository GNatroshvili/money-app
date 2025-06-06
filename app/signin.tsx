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
    const [showPassword, setShowPassword] = useState(false);
    const [submitAttempted, setSubmitAttempted] = useState(false);

    const isEmailValid = (email: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView
                style={styles.container}
                edges={["bottom", "left", "right"]}
            >
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

                {/* Form with Keyboard Avoiding */}
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={{ flex: 1 }}
                    keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -260}
                >
                    <ScrollView
                        contentContainerStyle={styles.scrollContent}
                        keyboardShouldPersistTaps="handled"
                    >
                        <View style={styles.formWrapper}>
                            <Text style={styles.title}>Sign In</Text>

                            {/* Email Field */}
                            <View style={{ width: "100%" }}>
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
                            </View>

                            {/* Password Field */}
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

                            <Text style={styles.forgetPassword}>forgot password?</Text>

                            {/* Sign In Button */}
                            <TouchableOpacity
                                style={[styles.button, styles.shadow]}
                                onPress={() => setSubmitAttempted(true)}
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
                        </View>
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
    formWrapper: {
        alignItems: "center",
        paddingHorizontal: 35,
        paddingBottom: 75,
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
        marginBottom: 47,
        alignSelf: "flex-start"
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
        marginTop: 93,
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
});

