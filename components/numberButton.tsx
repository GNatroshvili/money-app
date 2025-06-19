// import React from 'react';
// import {
//     Dimensions,
//     Image,
//     StyleSheet,
//     Text,
//     TouchableOpacity
// } from 'react-native';

// const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');
// const isSmallScreen = screenHeight < 750;

// const dynamicHeight = screenHeight / 12.9;
// const dynamicWidth = screenWidth / 4.3;

// type Props = {
//     number?: string;
//     type: 'number' | 'send';
// };

// export default function NumberButton({ number, type }: Props) {
//     return (
//         <TouchableOpacity
//             style={[
//                 styles.container,
//                 type === 'send' && styles.sendContainer
//             ]}
//         >
//             {type === 'number' ? (
//                 <Text style={styles.text}>{number}</Text>
//             ) : (
//                 <Image
//                     source={require('../assets/images/rightArrow.png')}
//                     style={styles.icon}
//                     resizeMode="contain"
//                 />
//             )}
//         </TouchableOpacity>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: '#F5F6FA',
//         width: dynamicWidth,
//         height: dynamicHeight,
//         borderRadius: 15,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     sendContainer: {
//         backgroundColor: '#2743FD',
//     },
//     text: {
//         fontSize: 32,
//         fontWeight: '400',
//         fontFamily: 'Inter',
//         color: '#2743FD',
//     },
//     icon: {
//         width: 24,
//         height: 24,
//         tintColor: '#fff',
//     },
// });




import React from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');
const dynamicHeight = screenHeight / 12.9;
const dynamicWidth = screenWidth / 4.3;

type Props = {
    number?: string;
    type: 'number' | 'send';
    onPress?: () => void;
};

export default function NumberButton({ number, type, onPress }: Props) {
    return (
        <TouchableOpacity
            style={[styles.container, type === 'send' && styles.sendContainer]}
            onPress={onPress}
        >
            {type === 'number' ? (
                <Text style={styles.text}>{number}</Text>
            ) : (
                <Image
                    source={require('../assets/images/rightArrow.png')}
                    style={styles.icon}
                    resizeMode="contain"
                />
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F6FA',
        width: dynamicWidth,
        height: dynamicHeight,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sendContainer: {
        backgroundColor: '#2743FD',
    },
    text: {
        fontSize: 32,
        fontWeight: '400',
        fontFamily: 'Inter',
        color: '#2743FD',
    },
    icon: {
        width: 24,
        height: 24,
        tintColor: '#fff',
    },
});
