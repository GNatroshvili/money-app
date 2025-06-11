import BankAccountButton from "@/components/bankAccountButton";
import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import { Image, Pressable, StatusBar, StyleSheet, Text, View } from "react-native";

export default function Notifications() {
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <Stack.Screen options={{ headerShown: false }} />
            <LinearGradient
                colors={["#4950F9", "#1937FE"]}
                start={{ x: 0.1, y: 0 }}
                end={{ x: 0.9, y: 1 }}
                style={styles.header}
            >
                <View style={styles.topHeader}>
                    <Pressable
                        style={styles.burgerContainer}
                        onPress={() => {
                            // Handle burger menu press here
                        }}
                    >
                        <View style={styles.burgerLine} />
                        <View style={styles.burgerLine} />
                        <View style={styles.burgerLine} />
                    </Pressable>

                    <Image
                        source={require("../../assets/images/profilePicture.png")}
                        style={styles.profileImage}
                    />
                </View>

                <View style={styles.userNameTextWrapper}>
                    <Text style={styles.userNameText}>Good morning Emma,</Text>
                </View>
                <View style={styles.balanceCard}>
                    <View style={styles.firstLine}>
                        <Text style={styles.title}>
                            Your total balance
                        </Text>
                        <Text style={styles.dots}>
                            ...
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.balance}>
                            $850.00
                        </Text>
                    </View>
                    <View style={styles.graphWrapper}>
                        <Image
                            source={require("../../assets/images/graph.png")}
                            style={styles.graph}
                        />
                    </View>
                </View>
            </LinearGradient>
            <View style={styles.buttonWrapper}>
                <BankAccountButton text="Check Your Bank Accounts" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        flex: 1,
    },
    header: {
        height: 278,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 50,
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
    },
    topHeader: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 100,
    },
    burgerContainer: {
        position: "absolute",
        top: 80,
        left: 30,
        width: 24,
        height: 12,
        justifyContent: "space-between",
    },
    burgerLine: {
        width: 24,
        height: 1,
        backgroundColor: "#fff",
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 1,
        position: "absolute",
        top: 68,
        right: 30,
    },
    userNameTextWrapper: {
        paddingLeft: 50,
        width: "100%",
    },
    userNameText: {
        fontFamily: "Montserrat",
        fontSize: 32,
        fontWeight: "400",
        color: "#FFFFFF",
        maxWidth: 244,
    },
    graph: {
        width: 250,
        height: 166
    },
    balanceCard: {
        position: "absolute",
        top: 238,
        borderRadius: 40,
        backgroundColor: "#FFFFFF",
        padding: 32
    },
    dots: {
        fontFamily: "SF Pro Rounded",
        fontSize: 14,
        fontWeight: "400",
    },
    firstLine: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    title: {
        fontFamily: "Montserrat",
        fontSize: 16,
        fontWeight: "400",
        color: "#000000",
    },
    balance: {
        fontFamily: "Montserrat",
        fontSize: 30,
        fontWeight: "700",
        color: "#2D99FF",
        marginTop: 8
    },
    graphWrapper: {
        marginTop: 26
    },
    buttonWrapper: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    alignItems: "center",
}
});
