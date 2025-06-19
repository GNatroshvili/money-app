import Line from '@/components/line';
import RepaymentButton from '@/components/repaymentButton';
import SearchInput from '@/components/SearchInput';
import TransactionCard from '@/components/transactionCard';
import TransactionCategory from '@/components/transactionCategory';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router'; 
import React, { useState } from 'react';
import {
    Dimensions,
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {
    GestureHandlerRootView,
    PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
    runOnJS,
    useAnimatedGestureHandler,
    useAnimatedReaction,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');
const isSmallScreen = screenHeight < 750;

const dynamicHeight = screenHeight / 3.2;
const tabMinHeight = screenHeight / 6.6;
const tabMaxHeight = screenHeight / 1.54;

export default function Transactions() {
    const tabHeight = useSharedValue(tabMinHeight);
    const startY = useSharedValue(tabMinHeight);
    const router = useRouter(); 

    const [isTabExpanded, setIsTabExpanded] = useState(false);

    useAnimatedReaction(
        () => tabHeight.value,
        (currentHeight) => {
            const expanded = currentHeight === tabMaxHeight;
            runOnJS(setIsTabExpanded)(expanded);
        },
        []
    );

    const animatedStyle = useAnimatedStyle(() => ({
        height: tabHeight.value,
    }));

    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
            ctx.startY = tabHeight.value;
        },
        onActive: (event, ctx) => {
            const newHeight = ctx.startY - event.translationY;
            tabHeight.value = Math.min(Math.max(newHeight, tabMinHeight), tabMaxHeight);
        },
        onEnd: (event) => {
            const dragThreshold = 50;

            if (event.translationY < -dragThreshold) {
                tabHeight.value = withSpring(tabMaxHeight, { damping: 20 });
            } else if (event.translationY > dragThreshold) {
                tabHeight.value = withSpring(tabMinHeight, { damping: 20 });
            } else {
                const midPoint = (tabMaxHeight + tabMinHeight) / 2;
                tabHeight.value = withSpring(
                    tabHeight.value > midPoint ? tabMaxHeight : tabMinHeight,
                    { damping: 20 }
                );
            }
        },
    });

    const collapseTab = () => {
        tabHeight.value = withSpring(tabMinHeight, { damping: 20 });
    };

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={styles.container}>
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
                            <Text style={styles.title}>Transactions</Text>
                        </View>
                        <View style={styles.dataWrapper}>
                            <Text style={styles.text}>Your total expenses</Text>
                            <Text style={styles.money}>$14,053.06</Text>
                        </View>
                    </View>
                </LinearGradient>

                <View style={styles.cardTitleWrapper}>
                    <Text style={styles.cardTitle}>Your total expenses</Text>
                </View>

                <View style={styles.categoriesWrapper}>
                    <View style={styles.firstLine}>
                        <TransactionCard title="travel" money="$120.00" category="travel" />
                        <TransactionCard title="Shopping" money="$120.00" category="shopping" />
                    </View>
                    <View style={styles.secondLine}>
                        <TransactionCard title="sport" money="$12000.00" category="sport" />
                        <TransactionCard title="medicine" money="$120.00" category="medicine" />
                    </View>
                </View>

                <View style={styles.buttonWrapper}>
                    <RepaymentButton
                        text="Credit card repayment"
                        onPress={() => router.push('/transfer')} 
                    />
                </View>

                {isTabExpanded && (
                    <Pressable
                        style={StyleSheet.absoluteFill}
                        onPress={collapseTab}
                    />
                )}

                <PanGestureHandler onGestureEvent={gestureHandler}>
                    <Animated.View style={[styles.tabWrapper, animatedStyle]}>
                        <LinearGradient
                            colors={['#4950F9', '#1937FE']}
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            style={styles.innerTab}
                        >
                            <View style={styles.line}>
                                <Line />
                            </View>
                            <View style={styles.inputWrapper}>
                                <SearchInput variant='blue' />
                            </View>
                            <View style={styles.categories}>
                                <TransactionCategory
                                    title="Shopping"
                                    date="15 Mar 2025, 15:00 PM"
                                    price="-120$"
                                    category="shopping"
                                    variant={2}
                                />
                                <TransactionCategory
                                    title="travel"
                                    date="15 Mar 2025, 15:00 PM"
                                    price="-120$"
                                    category="travel"
                                    variant={2}
                                />
                                <TransactionCategory
                                    title="medicine"
                                    date="15 Mar 2025, 15:00 PM"
                                    price="-120$"
                                    category="medicine"
                                    variant={2}
                                />
                                <TransactionCategory
                                    title="sport"
                                    date="15 Mar 2025, 15:00 PM"
                                    price="-120$"
                                    category="sport"
                                    variant={2}
                                />
                                <TransactionCategory
                                    title="Shopping"
                                    date="15 Mar 2025, 15:00 PM"
                                    price="-120$"
                                    category="shopping"
                                    variant={2}
                                />
                                <TransactionCategory
                                    title="travel"
                                    date="15 Mar 2025, 15:00 PM"
                                    price="-120$"
                                    category="travel"
                                    variant={2}
                                />
                            </View>
                        </LinearGradient>
                    </Animated.View>
                </PanGestureHandler>
            </View>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        width: screenWidth,
        height: dynamicHeight,
        borderBottomRightRadius: 60,
        borderBottomLeftRadius: 60,
        borderBottomWidth: 5,
        borderColor: '#80E0FF',
    },
    border: {
        backgroundColor: "red",
        height: 5
    },
    headerWrapper: {
        gap: isSmallScreen ? 25 : 50,
        marginTop: 66,
    },
    arrow: {
        width: 26,
        height: 21,
    },
    arrowAndTitleWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 70,
        marginLeft: 30,
    },
    dataWrapper: {
        gap: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        fontFamily: 'Inter',
        color: '#FFFFFF',
    },
    text: {
        fontSize: 22,
        fontWeight: '400',
        fontFamily: 'Montserrat',
        color: '#80E0FF',
    },
    money: {
        fontSize: 26,
        fontWeight: '700',
        fontFamily: 'Montserrat',
        color: '#FFFFFF',
    },
    categoriesWrapper: {
        gap: 13,
        paddingHorizontal: 30,
        alignItems: 'center',
    },
    firstLine: {
        gap: 10,
        flexDirection: 'row',
    },
    secondLine: {
        gap: 10,
        flexDirection: 'row',
    },
    cardTitleWrapper: {
        paddingLeft: 30,
        paddingVertical: isSmallScreen ? 20 : 30,
    },
    cardTitle: {
        fontSize: 22,
        fontWeight: '700',
        fontFamily: 'Montserrat',
        color: '#000000',
    },
    buttonWrapper: {
        alignItems: 'center',
        marginTop: 20,
    },
    tabWrapper: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderTopLeftRadius: 65,
        borderTopRightRadius: 65,
        overflow: 'hidden',
    },
    innerTab: {
        flex: 1,
        padding: 20,
    },
    line: {
        alignItems: "center"
    },
    inputWrapper: {
        marginTop: 30
    },
    categories: {
        marginTop: 30,
        gap: 20
    }
});
