import React from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    View
} from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');
const isSmallScreen = screenHeight < 750;

const dynamicHeight = screenHeight / 5.8;
const dynamicImageHeight = screenHeight / 6.9;
const dynamicMaxWidth = screenWidth / 1.6;



export default function ConfirmationAlert() {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                You have successfuly sent
                <Text style={styles.bold}> $19</Text>
                <Text> to </Text>
                <Text style={styles.bold}> Pedro Gonzales.</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    bold: {
        color: "#2743FD",
        fontSize: 21,
        fontFamily: "Montserrat",
        fontWeight: "700",

    },
    text: {
        color: "#2743FD",
        fontSize: 21,
        fontFamily: "Montserrat",
        fontWeight: "400",
        maxWidth: 259,
        textAlign: "center"
    }
});