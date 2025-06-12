import { Stack } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function LogoutButton() {
    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            <TouchableOpacity style={styles.closeWrapper}>
                <Text style={styles.close}>Sign Out</Text>
                <Image
                    source={require("../assets/images/logout.png")}
                    style={styles.logOutIcon}
                />
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    closeWrapper: {
        width: 315,
        height: 72,
        borderWidth: 1, // closest realistic value
        borderColor: "#2743FD",
        borderRadius: 28,
        alignItems: "center",
        flexDirection: "row",
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 24,
        paddingRight: 24,
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF",
    },

    close: {
        fontSize: 24,
        fontWeight: "400",
        fontFamily: "Montserrat",
        color: "#2743FD"
    },
    logOutIcon: {
        width: 25,
        height: 24
    },
});
