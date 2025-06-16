// import Slider from '@/components/Slider';
// import { ImageSlider } from '@/data/SliderData';
// import React from 'react';
// import { Dimensions, StyleSheet, View } from 'react-native';

// const { width: screenWidth } = Dimensions.get('window');

// export default function Cards() {
//     return (
//         <View style={styles.screen}>
//             <View style={styles.container}>
//                 <View style={styles.sliderWrapper}>
//                     <Slider itemList={ImageSlider}/>
//                 </View>
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     screen: {
//         flex: 1,
//         backgroundColor: '#F5F5F5',
//         marginBottom: 200
//     },
//     container: {
//         backgroundColor: '#1937FE',
//         width: screenWidth,
//         height: 293,
//         borderBottomLeftRadius: 65,
//         borderBottomRightRadius: 65,
//         paddingTop: 208,        
//     },
//     sliderWrapper: {
//         // This ensures proper placement of the slider 70px down
//         flex: 1,
//     },
// });

import Slider from '@/components/Slider';
import TransactionCategory from '@/components/transactionCategory';
import { ImageSlider } from '@/data/SliderData';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');
const containerHeight = screenHeight / 3;

export default function Cards() {
    const gapValue = screenHeight < 800 ? 10 : 20;

    return (
        <View style={styles.screen}>
            <View style={styles.titleWrapper}>
                <Image
                    source={require("../assets/images/leftArrow.png")}
                    resizeMode="cover"
                    style={styles.image}
                />
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

            <View style={[styles.categoryWrapper, { gap: gapValue }]}>
                <TransactionCategory
                    title="Shopping"
                    date="15 Mar 2025, 15:00 PM"
                    price="-120$"
                    category="shopping"
                />
                <TransactionCategory
                    title="medicine"
                    date="15 Mar 2025, 15:00 PM"
                    price="-120$"
                    category="medicine"
                />
                <TransactionCategory
                    title="sport"
                    date="15 Mar 2025, 15:00 PM"
                    price="-120$"
                    category="sport"
                />
                <TransactionCategory
                    title="travel"
                    date="15 Mar 2025, 15:00 PM"
                    price="-120$"
                    category="travel"
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
        top: 68,
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
    categoryWrapper: {
        marginBottom: 31,
        marginTop: 20,
    },
    transactionTitle: {
        fontSize: 22,
        fontWeight: '700',
        fontFamily: 'Montserrat',
        color: '#000000',
        marginLeft: 32,
    },
});
