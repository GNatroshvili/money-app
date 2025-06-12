import { Stack } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function UserData() {
    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            <View style={styles.userDataWrapper}>
                <View>
                    <Image
                        source={require("../assets/images/profilePicture.png")}
                        style={styles.profileImage}
                    />
                </View>
                <View>
                    <Text style={styles.name}>Charles Leclerc</Text>
                    <Text style={styles.userName}>Online</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userDataWrapper: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 1,
    },
    name: {
        fontFamily: "Montserrat",
        fontSize: 19,
        fontWeight: "700",
        color: "#2743FD",
    },
    userName: {
        fontFamily: "Montserrat",
        fontSize: 18,
        fontWeight: "300",
        color: "#2743FD",
    }
});
