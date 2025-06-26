import CompleteButton from '@/components/completeButton';
import ConfirmationAlert from '@/components/confirmationAlert';
import OtpButton from '@/components/otpButton';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import {
    Dimensions,
    Image,
    Pressable,
    StyleSheet,
    Text,
    View
} from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');
const isSmallScreen = screenHeight < 750;

const dynamicHeight = screenHeight / 5.8;
const dynamicImageHeight = screenHeight / 6.9;
const dynamicImageWidth = screenWidth / 3.2;
const dynamicProfileHeight = screenHeight / 9.3;
const dynamicProfilewidth = screenWidth / 3.2;
const dynamicGap = screenHeight / 42.6;
const dynamicMarginTop1 = screenHeight / 10.6;
const dynamicMarginTop2 = screenHeight / 21.3;
const dynamicGap2 = screenWidth / 5.5;

export default function Confirmation() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#4950F9', '#1937FE']}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.header}
            >
                <View style={styles.headerWrapper}>
                    <View style={styles.arrowAndTitleWrapper}>
                        <Pressable onPress={() => router.push('/transfer')}>
                            <Image
                                source={require('../assets/images/leftArrow.png')}
                                resizeMode="contain"
                                style={styles.arrow}
                            />
                        </Pressable>
                        <Text style={styles.title}>Transaction</Text>
                    </View>
                </View>
            </LinearGradient>
            <View style={styles.confirmWrapper}>
                <Image
                    source={require('../assets/images/confirm.png')}
                    resizeMode="contain"
                    style={styles.confirm}
                />
            </View>
            <View style={styles.alertWrapper}>
                <ConfirmationAlert />
            </View>
            <View style={styles.imageWrapper}>
                <Image
                    source={require('../assets/images/profilePicture.png')}
                    resizeMode="contain"
                    style={styles.profilePicture}
                />
            </View>
            <View style={styles.buttonsWrapper}>
                <OtpButton text='Execute Again' />
                <CompleteButton
                    text="complete"
                    disabled={false}
                    textColor={true ? "#2743FD" : "#C8C8C8"}
                    useBlueMark={true}
                    border={true}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: "center"
    },
    header: {
        width: screenWidth,
        height: dynamicHeight,
        borderBottomRightRadius: 60,
        borderBottomLeftRadius: 60,
        borderBottomWidth: 3,
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
        gap: dynamicGap2,
        marginLeft: 30,
    },
    confirm: {
        width: dynamicImageWidth,
        height: dynamicImageHeight
    },
    profilePicture: {
        height: dynamicProfileHeight,
        width: dynamicProfilewidth
    },
    buttonsWrapper: {
        gap: dynamicGap,
        marginTop: dynamicMarginTop1
    },
    imageWrapper: {
        marginTop: dynamicMarginTop2
    },
    alertWrapper: {
        marginTop: dynamicGap
    },
    confirmWrapper: {
        marginTop: dynamicMarginTop1
    }
});
