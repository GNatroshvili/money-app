import React from "react";
import {
    StatusBar,
    StyleSheet,
    View
} from "react-native";

export default function Line() {
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <View style={styles.line} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
    },
    line: {
        backgroundColor: "#FFFFFF",
        width: 70,
        height: 3,
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,

    }
});
