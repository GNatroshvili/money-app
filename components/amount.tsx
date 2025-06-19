// import React from 'react';
// import {
//     Dimensions,
//     StyleSheet,
//     Text,
//     TextInput,
//     View
// } from 'react-native';

// const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

// const dynamicWidth = screenWidth / 1.6;

// type Props = {
//     amount: string;
//     setAmount: (val: string) => void;
// };

// export default function Amount({ amount, setAmount }: Props) {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Enter Amount</Text>
//             <View style={styles.valuteWrapper}>
//                 <Text style={styles.valute}>$</Text>
//                 <TextInput
//                     style={styles.input}
//                     keyboardType="numeric"
//                     placeholder="0"
//                     placeholderTextColor="#B6BFFF"
//                     value={amount}
//                     onChangeText={setAmount}
//                 />
//             </View>
//             <View style={styles.line} />
//             <Text style={styles.to}>To</Text>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         alignItems: "center",
//         gap: 10,
//         width: dynamicWidth,

//     },
//     title: {
//         fontSize: 20,
//         fontWeight: '400',
//         fontFamily: 'Montserrat',
//         color: '#2743FD',
//     },
//     valuteWrapper: {
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "center"
//     },
//     valute: {
//         fontSize: 40,
//         fontWeight: '700',
//         fontFamily: 'Montserrat',
//         color: '#2743FD',
//     },
//     input: {
//         width: dynamicWidth,
//         fontSize: 40,
//         fontWeight: '700',
//         fontFamily: 'Montserrat',
//         color: '#B6BFFF',
//         marginLeft: 10,
//         padding: 0,
//         textAlign: 'center',
//     },
//     line: {
//         height: 1,
//         backgroundColor: "#DEE1EF",
//         width: dynamicWidth,
//     },
//     to: {
//         fontSize: 20,
//         fontWeight: '400',
//         fontFamily: 'Montserrat',
//         color: '#2743FD',
//     }
// });

import React from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';

const { width: screenWidth } = Dimensions.get('screen');
const dynamicWidth = screenWidth / 1.6;

type Props = {
    amount: string;
    setAmount: (val: string) => void;
};

export default function Amount({ amount, setAmount }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter Amount</Text>
            <View style={styles.valuteWrapper}>
                <Text style={styles.valute}>$</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    placeholder="0"
                    placeholderTextColor="#B6BFFF"
                    value={amount}
                    onChangeText={setAmount}
                    returnKeyType="done"
                    blurOnSubmit={true}
                    contextMenuHidden={true}
                    selectionColor="#2743FD"
                />
            </View>
            <View style={styles.line} />
            <Text style={styles.to}>To</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        gap: 10,
        width: dynamicWidth,
    },
    title: {
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Montserrat',
        color: '#2743FD',
    },
    valuteWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    valute: {
        fontSize: 40,
        fontWeight: '700',
        fontFamily: 'Montserrat',
        color: '#2743FD',
    },
    input: {
        width: dynamicWidth,
        fontSize: 40,
        fontWeight: '700',
        fontFamily: 'Montserrat',
        color: '#B6BFFF',
        marginLeft: 10,
        padding: 0,
        textAlign: 'center',
    },
    line: {
        height: 1,
        backgroundColor: "#DEE1EF",
        width: dynamicWidth,
    },
    to: {
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Montserrat',
        color: '#2743FD',
    }
});


