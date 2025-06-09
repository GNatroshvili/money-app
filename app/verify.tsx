// import OtpButton from "@/components/otpButton";
// import { Stack, useRouter } from "expo-router";
// import React from "react";
// import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
// import { Provider as PaperProvider, TextInput } from "react-native-paper";

// export default function Verification() {
//     const router = useRouter();

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
//                         Enter  the OTP sent to +995 555 551 452
//                     </Text>
//                     <View style={styles.inputWrapper}>
//                         <TextInput
//                             mode="flat"
//                             underlineColor="#2743FD"
//                             activeUnderlineColor="#2743FD"
//                             style={styles.input}
//                             contentStyle={styles.inputContent}
//                             placeholder="Your phone number"
//                             keyboardType="phone-pad"
//                         />
//                     </View>
//                     <Text style={styles.label}>Didn’t you receive the OTP? <Text style={styles.span}>Resend OTP</Text></Text>
//                     <View style={styles.buttonWrapper}>
//                         <OtpButton text="Get OTP" onPress={() => router.push("/verify")} />
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
//         width: 257,
//         height: 269,
//         marginTop: 100,
//         alignSelf: "center",
//     },
//     actionsWrapper: {
//         marginTop: 50,
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
//         marginTop: 28,
//         maxWidth: 277,
//         alignSelf: "center",
//         color: "#3A3A3A",
//     },
//     label: {
//         fontSize: 16,
//         marginTop: 40,
//         alignSelf: "center",
//         color: "#B9B9B9",
//     },
//     input: {
//         width: 251,
//         backgroundColor: "transparent",
//         fontSize: 16,
//         marginTop: 50,
//         height: 25,
//         alignSelf: "center",
//     },
//     inputContent: {
//         height: 25,
//         paddingTop: 0,
//         paddingBottom: 8,
//         textAlign: "center",
//         lineHeight: 16,
//     },
//     inputWrapper: {
//         alignSelf: "center",
//     },
//     buttonWrapper: {
//         marginTop: 63,
//         alignItems: "center",
//     },
//     span: {
//         color: "#2743FD",
//         fontSize: 14,
//         fontWeight: "400",
//     }
// });

import OtpButton from "@/components/otpButton";
import { Stack, useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
    Image,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

export default function Verification() {
    const router = useRouter();
    const [otp, setOtp] = useState("");
    const inputRef = useRef<TextInput>(null);

    const handleChange = (text: string) => {
        if (text.length <= 4) {
            setOtp(text);
        }
    };

    const isOtpValid = otp.length === 4;

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
                        Enter the OTP sent to +995 555 551 452
                    </Text>

                    {/* Hidden TextInput to capture input */}
                    <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
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
        maxWidth: 277,
        alignSelf: "center",
        color: "#3A3A3A",
    },
    otpContainer: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
        marginTop: 50,
        position: "relative",
    },
    otpBox: {
        width: 40,
        height: 50,
        borderBottomWidth: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    otpDigit: {
        fontSize: 28,
        color: "#000",
        textAlign: "center",
    },
    hiddenInput: {
        position: "absolute",
        width: 160,
        height: 50,
        opacity: 0,
    },
    label: {
        fontSize: 16,
        marginTop: 40,
        alignSelf: "center",
        color: "#B9B9B9",
    },
    span: {
        color: "#2743FD",
        fontSize: 14,
        fontWeight: "400",
    },
    buttonWrapper: {
        marginTop: 63,
        alignItems: "center",
    },
});
