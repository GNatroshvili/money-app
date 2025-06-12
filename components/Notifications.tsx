import { Stack } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Notifications() {
    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            <View style={styles.cardWrapper}>
                <View style={styles.leftSide}>
                    <Image
                        source={require("../assets/images/userPic.png")}
                        style={styles.profilePicture}
                    />
                    <View style={styles.textWrapper}>
                        <Text style={styles.name}>Georgo Armani</Text>
                        <Text style={styles.message}>Georgo Just sent you $15.</Text>
                    </View>
                </View>
                <Image
                    source={require("../assets/images/blueLeft.png")}
                    style={styles.arrow}
                />

            </View>
            <View style={styles.line}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    line: {
        borderBottomWidth: 1,
        borderColor: "#DEE1EF",
        width: 333,
        marginTop: 20,
    },
    profilePicture: {
        width: 45,
        height: 45
    },
    arrow: {
        width: 10,
        height: 18
    },
    name: {
        fontSize: 16,
        fontWeight: "400",
        fontFamily: "Montserrat",
        color: "#000000",
    },
    message: {
        fontSize: 16,
        fontWeight: "400",
        fontFamily: "Montserrat",
        color: "#3D56FA",
    },
    textWrapper: {
        gap: 5,
    },
    cardWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: 333,
    },
    leftSide : {
        flexDirection: "row",
        gap: 16,
    }
});
