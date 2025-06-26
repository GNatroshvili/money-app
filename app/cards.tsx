import Slider from '@/components/Slider';
import TransactionCategory from '@/components/transactionCategory';
import { ImageSlider } from '@/data/SliderData';
import { useRouter } from 'expo-router';
import React from 'react';
import {
    Dimensions,
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');
const containerHeight = screenHeight / 3.1;

export default function Cards() {
    const router = useRouter();
    const gapValue = screenHeight < 800 ? 10 : 20;
    const categoryMarginTop = screenHeight < 800 ? 10 : 20;
    const categoryMarginBottom = screenHeight < 800 ? 16 : 31;
    const titleWrapperTop = screenHeight / 12.5;

    return (
        <View style={styles.screen}>
            <View style={[styles.titleWrapper, { top: titleWrapperTop }]}>
                <Pressable onPress={() => router.push('/wallet')}>
                    <Image
                        source={require("../assets/images/leftArrow.png")}
                        resizeMode="cover"
                        style={styles.image}
                    />
                </Pressable>
                <Text style={styles.title}>
                    You can check your cards here.
                </Text>
            </View>

            <View style={styles.container} />

            <View style={styles.sliderWrapper}>
                <Slider itemList={ImageSlider} />
            </View>

            <View>
                <Text style={styles.transactionTitle}>
                    Recent Transactions
                </Text>
            </View>

            <View
                style={[
                    {
                        gap: gapValue,
                        marginTop: categoryMarginTop,
                        marginBottom: categoryMarginBottom,
                    },
                ]}
            >
                <TransactionCategory
                    title="Shopping"
                    date="15 Mar 2025, 15:00 PM"
                    price="-120$"
                    category="shopping"
                    variant={1}
                />
                <TransactionCategory
                    title="medicine"
                    date="15 Mar 2025, 15:00 PM"
                    price="-120$"
                    category="medicine"
                    variant={1}
                />
                <TransactionCategory
                    title="sport"
                    date="15 Mar 2025, 15:00 PM"
                    price="-120$"
                    category="sport"
                    variant={1}
                />
                <TransactionCategory
                    title="travel"
                    date="15 Mar 2025, 15:00 PM"
                    price="-120$"
                    category="travel"
                    variant={1}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        justifyContent: 'space-between',
    },
    container: {
        backgroundColor: '#1937FE',
        width: screenWidth,
        height: containerHeight,
        borderBottomLeftRadius: 65,
        borderBottomRightRadius: 65,
        overflow: 'visible',
    },
    sliderWrapper: {
        flex: 1,
        position: 'relative',
        top: -60,
    },
    image: {
        width: 26,
        height: 21,
    },
    titleWrapper: {
        position: 'absolute',
        left: 30,
        zIndex: 1,
    },
    title: {
        color: "#FFFFFF",
        fontSize: 24,
        fontWeight: "700",
        fontFamily: "Montserrat",
        maxWidth: 246,
        marginTop: 32,
    },
    transactionTitle: {
        fontSize: 22,
        fontWeight: '700',
        fontFamily: 'Montserrat',
        color: '#000000',
        marginLeft: 32,
    },
});
