// import Amount from '@/components/amount';
// import NumberButton from '@/components/numberButton';
// import ProfilePic from '@/components/profilePic';
// import { LinearGradient } from 'expo-linear-gradient';
// import React, { useState } from 'react';
// import {
//     Dimensions,
//     Image,
//     StyleSheet,
//     Text,
//     View
// } from 'react-native';

// const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');
// const isSmallScreen = screenHeight < 750;

// const dynamicHeight = screenHeight / 5.8;
// const dynamicMarginTop = screenHeight / 14.2;
// const dynamicMarginBottom = screenHeight / 42.5;
// const dynamicProfileMarginBottom = screenHeight / 15.2;

// export default function Transfer() {
//     const [amount, setAmount] = useState('');

//     const handleNumberPress = (value: string) => {
//         setAmount(prev => prev + value);
//     };

//     const handleSend = () => {
//         console.log('Sending amount:', amount);
//     };

//     return (
//         <View style={styles.container}>
//             <LinearGradient
//                 colors={['#4950F9', '#1937FE']}
//                 start={{ x: 1, y: 0 }}
//                 end={{ x: 0, y: 1 }}
//                 style={styles.header}
//             >
//                 <View style={styles.headerWrapper}>
//                     <View style={styles.arrowAndTitleWrapper}>
//                         <Image
//                             source={require('../assets/images/leftArrow.png')}
//                             resizeMode="contain"
//                             style={styles.arrow}
//                         />
//                         <Text style={styles.title}>Transfer</Text>
//                     </View>
//                 </View>
//             </LinearGradient>
//             <View style={styles.amountWrapper}>
//                 <Amount amount={amount} setAmount={setAmount} />
//             </View>
//             <View style={styles.profilePicWrapper}>
//                 <ProfilePic />
//             </View>
//             <View style={styles.buttonsWrapper}>
//                 {[
//                     ['1', '2', '3'],
//                     ['4', '5', '6'],
//                     ['7', '8', '9'],
//                     ['.', '0', 'send'],
//                 ].map((row, rowIndex) => (
//                     <View key={rowIndex} style={styles.buttons}>
//                         {row.map((item, index) =>
//                             item === 'send' ? (
//                                 <NumberButton key={index} type="send" onPress={handleSend} />
//                             ) : (
//                                 <NumberButton
//                                     key={index}
//                                     type="number"
//                                     number={item}
//                                     onPress={() => handleNumberPress(item)}
//                                 />
//                             )
//                         )}
//                     </View>
//                 ))}
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#FFFFFF',
//         alignItems: "center"
//     },
//     header: {
//         width: screenWidth,
//         height: dynamicHeight,
//         borderBottomRightRadius: 60,
//         borderBottomLeftRadius: 60,
//         borderBottomWidth: 5,
//         borderColor: '#80E0FF',
//     },
//     headerWrapper: {
//         gap: isSmallScreen ? 25 : 50,
//         marginTop: 66,
//     },
//     arrow: {
//         width: 26,
//         height: 21,
//     },
//     title: {
//         fontSize: 20,
//         fontWeight: '700',
//         fontFamily: 'Inter',
//         color: '#FFFFFF',
//     },
//     arrowAndTitleWrapper: {
//         flexDirection: 'row',
//         justifyContent: 'flex-start',
//         gap: 70,
//         marginLeft: 30,
//     },
//     buttonsWrapper: {
//         gap: 10
//     },
//     buttons: {
//         flexDirection: "row",
//         gap: 30
//     },
//     amountWrapper: {
//         marginTop: dynamicMarginTop,
//         marginBottom: dynamicMarginBottom
//     },
//     profilePicWrapper: {
//         marginBottom: dynamicProfileMarginBottom
//     }
// });





import Amount from '@/components/amount';
import NumberButton from '@/components/numberButton';
import ProfilePic from '@/components/profilePic';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import {
    Animated,
    Dimensions,
    Image,
    Keyboard,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
} from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');
const isSmallScreen = screenHeight < 750;

const dynamicHeight = screenHeight / 5.8;
const dynamicMarginTop = screenHeight / 14.2;
const dynamicMarginBottom = screenHeight / 42.5;
const dynamicProfileMarginBottom = screenHeight / 15.2;

export default function Transfer() {
    const [amount, setAmount] = useState('');
    const router = useRouter(); // ✅ Added router hook

    // Animated value for overall content translation
    const contentTranslateY = useRef(new Animated.Value(0)).current;

    const handleNumberPress = (value: string) => {
        setAmount(prev => prev + value);
    };

    const handleSend = () => {
        console.log('Sending amount:', amount);
        Keyboard.dismiss();
        slideDown(); // Slide content back down after sending
        router.push('/confirmation'); // ✅ Navigate to confirmation
    };

    const slideUp = (keyboardHeight: number) => {
        const offset = keyboardHeight * 0.7;
        Animated.timing(contentTranslateY, {
            toValue: -offset,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const slideDown = () => {
        Animated.timing(contentTranslateY, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            (e) => {
                slideUp(e.endCoordinates.height);
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                slideDown();
            }
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    const dismissKeyboardAndSlideDown = () => {
        Keyboard.dismiss();
        slideDown();
    };

    return (
        <TouchableWithoutFeedback onPress={dismissKeyboardAndSlideDown}>
            <View style={styles.container}>
                <Animated.View
                    style={[styles.animatedScreenContent, { transform: [{ translateY: contentTranslateY }] }]}
                >
                    <LinearGradient
                        colors={['#4950F9', '#1937FE']}
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        style={styles.header}
                    >
                        <View style={styles.headerWrapper}>
                            <View style={styles.arrowAndTitleWrapper}>
                                <Image
                                    source={require('../assets/images/leftArrow.png')}
                                    resizeMode="contain"
                                    style={styles.arrow}
                                />
                                <Text style={styles.title}>Transfer</Text>
                            </View>
                        </View>
                    </LinearGradient>

                    <View style={styles.amountWrapper}>
                        <Amount amount={amount} setAmount={setAmount} />
                    </View>
                    <View style={styles.profilePicWrapper}>
                        <ProfilePic />
                    </View>
                    <View style={styles.buttonsWrapper}>
                        {[
                            ['1', '2', '3'],
                            ['4', '5', '6'],
                            ['7', '8', '9'],
                            ['.', '0', 'send'],
                        ].map((row, rowIndex) => (
                            <View key={rowIndex} style={styles.buttons}>
                                {row.map((item, index) =>
                                    item === 'send' ? (
                                        <NumberButton key={index} type="send" onPress={handleSend} />
                                    ) : (
                                        <NumberButton
                                            key={index}
                                            type="number"
                                            number={item}
                                            onPress={() => handleNumberPress(item)}
                                        />
                                    )
                                )}
                            </View>
                        ))}
                    </View>
                </Animated.View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    animatedScreenContent: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    header: {
        width: screenWidth,
        height: dynamicHeight,
        borderBottomRightRadius: 60,
        borderBottomLeftRadius: 60,
        borderBottomWidth: 5,
        borderColor: '#80E0FF',
    },
    headerWrapper: {
        gap: isSmallScreen ? 25 : 50,
        marginTop: 66,
    },
    arrow: {
        width: 26,
        height: 21,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        fontFamily: 'Inter',
        color: '#FFFFFF',
    },
    arrowAndTitleWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 70,
        marginLeft: 30,
    },
    buttonsWrapper: {
        gap: 10,
    },
    buttons: {
        flexDirection: "row",
        gap: 30
    },
    amountWrapper: {
        marginTop: dynamicMarginTop,
        marginBottom: dynamicMarginBottom,
    },
    profilePicWrapper: {
        marginBottom: dynamicProfileMarginBottom
    }
});
