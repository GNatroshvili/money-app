import { Stack } from "expo-router";
import React from "react";
import {
    StatusBar,
    StyleSheet,
    View
} from "react-native";

export default function data() {

    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <Stack.Screen options={{ headerShown: false }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 24,
    },
});