import React from "react";
import {
    Dimensions,
    Image,
    StatusBar,
    StyleSheet,
    Text,
    View
} from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');
const dynamicHeight = screenHeight / 8.5;
const dynamicWidth = screenWidth / 2.45;

type CategoryType = "shopping" | "travel" | "sport" | "medicine";

type Props = {
    title: string;
    money: string;
    category: CategoryType;
};

const getCategoryStyles = (category: CategoryType) => {
    switch (category) {
        case "shopping":
            return {
                backgroundColor: "#FBC16B",
                image: require("../assets/images/yellowCircle.png")
            };
        case "travel":
            return {
                backgroundColor: "#EE7B7B",
                image: require("../assets/images/redCircle.png")
            };
        case "sport":
            return {
                backgroundColor: "#84DFFC",
                image: require("../assets/images/blueCircle.png")
            };
        case "medicine":
            return {
                backgroundColor: "#CE43FB",
                image: require("../assets/images/purpleCircle.png")
            };
        default:
            return {
                backgroundColor: "#FBC16B",
                image: require("../assets/images/yellowCircle.png")
            };
    }
};

export default function TransactionCard({ title, money, category }: Props) {
    const { backgroundColor, image } = getCategoryStyles(category);

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <StatusBar hidden />
            <Image
                source={image}
                resizeMode="contain"
                style={styles.circle}
            />
            <View style={styles.textWrapper}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.money}>{money}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: dynamicWidth,
        height: dynamicHeight,
        borderRadius: 25,
        overflow: "hidden"
    },
    textWrapper: {
        position: "absolute",
        top: 15,
        left: 10,
    },
    circle: {
        position: "absolute",
        top: -5,
        left: 0,
        width: 120,
        height: 92
    },
    title: {
        fontSize: 18,
        fontWeight: '400',
        fontFamily: "Montserrat",
        color: "#FFFFFF"
    },
    money: {
        fontSize: 20,
        fontWeight: '700',
        fontFamily: "Montserrat",
        color: "#FFFFFF"
    }
});
