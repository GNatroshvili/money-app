import React from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');
const isSmallScreen = screenHeight < 750;

const dynamicHeight = screenHeight / 12.9;
const dynamicWidth = screenWidth / 4.3;

export default function ProfilePic() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/images/userPicture.png')}
                style={styles.icon}
                resizeMode="contain"
            />
            <Text style={styles.userName}>Pedro Gonzales</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    icon: {
        width: 46,
        height: 46
    },
    userName: {
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Montserrat',
        color: '#000000',
    }
});
