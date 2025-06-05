import { LinearGradient } from "expo-linear-gradient";
import { Stack, useRouter } from "expo-router";
import {
    Dimensions,
    Image,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

export default function Index() {
    const router = useRouter(); // ✅ Add useRouter to enable navigation
    const { height: screenHeight } = Dimensions.get("window");

    const DESIGN_WIDTH = 337;
    const DESIGN_HEIGHT = 367;

    const calculatedHeight = screenHeight - 475;
    const scaleFactor = calculatedHeight / DESIGN_HEIGHT;
    const calculatedWidth = DESIGN_WIDTH * scaleFactor;

    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <Stack.Screen options={{ headerShown: false }} />

            <View style={styles.imageWrapper}>
                <Image
                    source={require("../assets/images/logoWithoutText.png")}
                    resizeMode="cover"
                    style={styles.logo}
                />
                <Image
                    source={require("../assets/images/trading.png")}
                    resizeMode="cover"
                    style={styles.saveMoney}
                />
            </View>

            <View style={styles.textWrapper}>
                <View
                    style={{
                        position: "absolute",
                        width: calculatedWidth,
                        height: calculatedHeight,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <Image
                        source={require("../assets/images/circle.png")}
                        resizeMode="contain"
                        style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                        }}
                    />
                    <Text style={[styles.circleTitle, { top: 65 }]}>
                        Enjoy commission-free stock trading.
                    </Text>
                    <Text style={[styles.circleDescription, { top: 163 }]}>
                        Online investing has never been easier than it is right now.
                    </Text>
                    <Image
                        source={require("../assets/images/Indicator3.png")}
                        resizeMode="contain"
                        style={{
                            position: "absolute",
                            bottom: 60,
                            left: 30,
                            width: 40,
                            height: 5
                        }}
                    />
                    <TouchableOpacity
                        style={[
                            styles.button,
                            styles.shadow,
                            { right: -15, bottom: 30, position: "absolute" }
                        ]}
                        onPress={() => router.push("/login")}
                    >
                        <LinearGradient
                            colors={["#6075FF", "#1433FF"]}
                            start={{ x: 0.1, y: 0 }}
                            end={{ x: 0.9, y: 1 }}
                            style={styles.gradient}
                        >
                            <Text style={styles.buttonText}>Get Started</Text>
                            <Image
                                source={require("../assets/images/signInButton.png")}
                                resizeMode="cover"
                                style={styles.signInButton}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    imageWrapper: {
        marginTop: 90,
        alignItems: "center",
    },
    logo: {
        width: 55,
        height: 53,
    },
    saveMoney: {
        width: 243,
        height: 203,
        marginTop: 80,
    },
    textWrapper: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "100%",
    },
    circleTitle: {
        position: "absolute",
        left: 20,
        maxWidth: 298,
        fontWeight: "700",
        fontFamily: "Montserrat",
        fontSize: 25,
        lineHeight: 36,
        color: "#2743FD",
    },
    circleDescription: {
        position: "absolute",
        left: 20,
        maxWidth: 276,
        fontWeight: "400",
        fontFamily: "Montserrat",
        fontSize: 18,
        lineHeight: 28,
        color: "#2743FD",
    },
    button: {
        width: 189,
        height: 64,
        borderRadius: 28,
        overflow: "hidden",
    },
    gradient: {
        flex: 1,
        borderRadius: 28,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    buttonText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "400",
        paddingLeft: 24,
        paddingRight: 24
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
    whiteArrow: {
        width: 24,
        height: 24,
    },
    signInButton: {
        position: "absolute",
        top: 0,
        left: 108,
        width: 80,
        height: 55,
    },
});
