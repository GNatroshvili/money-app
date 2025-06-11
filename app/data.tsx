import CompleteButton from "@/components/completeButton";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";
import { Stack, useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    View
} from "react-native";
import Input from "../components/input";

export default function HomeScreen() {
    const [form, setForm] = useState({
        username: { value: "", isValid: false },
        firstName: { value: "", isValid: false },
        lastName: { value: "", isValid: false },
        dob: { value: "", isValid: false },
    });

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const router = useRouter();

    const handleCompletePress = () => {
        if (allValid) {
            router.push("/wallet");
        }
    };

    const updateField = (field: keyof typeof form, value: string, isValid: boolean) => {
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
                <TouchableOpacity onPress={() => router.push("/verify")}>
                    <Image
                        source={require("../assets/images/leftArrow.png")}
                        resizeMode="contain"
                        style={styles.leftArrow}
                    />
                </TouchableOpacity>
            </View>

            {/* Image uploader */}
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

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.keyboardAvoidContainer}
                keyboardVerticalOffset={Platform.select({ ios: 100, android: -50 })}
            >
                <View style={styles.inputWrapper}>
                    <Input
                        label="Username"
                        placeholder="Your username"
                        type="text"
                        value={form.username.value}
                        onChange={(value, isValid) => updateField("username", value, isValid)}
                    />
                    <Input
                        label="First Name"
                        placeholder="Your name"
                        type="text"
                        value={form.firstName.value}
                        onChange={(value, isValid) => updateField("firstName", value, isValid)}
                    />
                    <Input
                        label="Last Name"
                        placeholder="Your last name"
                        type="text"
                        value={form.lastName.value}
                        onChange={(value, isValid) => updateField("lastName", value, isValid)}
                    />
                    <Input
                        label="Date of Birth"
                        placeholder="dd-mm-yyyy"
                        type="date"
                        value={form.dob.value}
                        onChange={(value, isValid) => updateField("dob", value, isValid)}
                    />
                </View>
            </KeyboardAvoidingView>

            <View style={styles.completeButtonWrapper}>
                <CompleteButton
                    text="complete"
                    disabled={!allValid}
                    textColor={allValid ? "#2743FD" : "#C8C8C8"}
                    useBlueMark={allValid}
                    onPress={handleCompletePress}
                />
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        borderRadius: 30,
        position: "absolute",
        top: 84,
        alignSelf: "center",
    },
    keyboardAvoidContainer: {
        flex: 1,
        width: '100%',
        marginTop: 267,
    },
    scrollContainer: {},
    inputWrapper: {
        gap: 25,
        alignItems: "center",
        paddingHorizontal: 35,
    },
    completeButtonWrapper: {
        position: "absolute",
        bottom: 75,
        left: 24,
        right: 24,
        alignItems: "center",
    },
});
