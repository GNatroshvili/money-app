import React from "react";
import {
    Image,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from "react-native";

type CategoryType = 'shopping' | 'medicine' | 'sport' | 'travel';

type Props = {
    title: string;
    date: string;
    price: string;
    category: CategoryType;
};

const categoryAssets: Record<CategoryType, { icon: any; backgroundColor: string }> = {
    shopping: {
        icon: require("../assets/images/shopping.png"),
        backgroundColor: '#FFC56E',
    },
    medicine: {
        icon: require("../assets/images/medicine.png"),
        backgroundColor: '#CB3EF9',
    },
    sport: {
        icon: require("../assets/images/sport.png"),
        backgroundColor: '#80E0FF',
    },
    travel: {
        icon: require("../assets/images/travel.png"),
        backgroundColor: '#FF8787',
    },
};

export default function TransactionCategory({ title, date, price, category }: Props) {
    const { icon, backgroundColor } = categoryAssets[category];

    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <View style={styles.leftSide}>
                <View style={[styles.imageWrapper, { backgroundColor }]}>
                    <Image
                        source={icon}
                        resizeMode="contain"
                        style={styles.image}
                    />
                </View>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>
            </View>
            <View style={styles.priceWrapper}>
                <Text style={styles.price}>{price}</Text>
                <Image
                    source={require("../assets/images/transactionsIcon.png")}
                    resizeMode="contain"
                    style={styles.arrow}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        backgroundColor: 'transparent',
        shadowColor: 'transparent',  
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
    },
    imageWrapper: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    image: {
        width: 22,
        height: 25,
    },
    textWrapper: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: '400',
        fontFamily: 'Montserrat',
        color: '#000000',
    },
    date: {
        fontSize: 12,
        color: '#B9B9B9',
        fontFamily: 'Montserrat',
        fontWeight: '400',
    },
    priceWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    price: {
        fontSize: 16,
        fontWeight: '400',
        color: '#000000',
        fontFamily: 'Montserrat',

    },
    arrow: {
        width: 7,
        height: 12,
    },
    leftSide: {
        flexDirection: 'row',
        gap: 10,
    }
});
