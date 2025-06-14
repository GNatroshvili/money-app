// import { ImageSliderType } from '@/data/SliderData';
// import React from 'react';
// import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

// type Props = {
//     item: ImageSliderType;
//     index: number;
// };

// const { width, height } = Dimensions.get('screen');

// const SliderItem = ({ item, index }: Props) => {
//     return (
//         <View style={styles.fullscreenWrapper}>
//             <View style={styles.container}>
//                 <View
//                     style={[
//                         styles.itemWrapper,
//                         { backgroundColor: item.backgroundColor || '#fff' }
//                     ]}
//                 >
//                     <View style={styles.topWrapper}>
//                         <Text style={[
//                             styles.balance,
//                             { color: item.color || '#fff' }
//                         ]}>{item.balance}
//                         </Text>
//                         <Text
//                             style={[
//                                 styles.title,
//                                 { color: item.color || '#fff' }
//                             ]}>{item.title}
//                         </Text>
//                     </View>
//                     <View style={styles.downWrapper}>
//                         <View style={styles.leftSide}>
//                             <Text style={[
//                                 styles.expire,
//                                 { color: item.color || '#fff' }
//                             ]}>{item.expire}
//                             </Text>
//                             <Text style={[
//                                 styles.number,
//                                 { color: item.color || '#fff' }
//                             ]} >{item.number}
//                             </Text>
//                         </View>
//                         <View style={styles.rightSide}>
//                             <Image style={styles.icon} source={item.icon} />
//                         </View>
//                     </View>
//                 </View>
//             </View>
//         </View>
//     );
// };

// export default SliderItem;

// const styles = StyleSheet.create({
//     fullscreenWrapper: {
//         width,
//         height,
//         position: 'relative',
//     },
//     container: {
//         padding: 16,
//         borderRadius: 10,
//         alignItems: 'center',
//         justifyContent: 'center',
//         gap: 25,
//     },
//     title: {
//         fontSize: 16,
//         fontWeight: '700',
//     },
//     itemWrapper: {
//         width: 209,
//         height: 305,
//         borderRadius: 25,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     balance: {
//         fontSize: 24,
//         fontWeight: '700',
//     },
//     expire: {
//         fontSize: 14,
//         fontWeight: '400',
//     },
//     number: {
//         fontSize: 14,
//         fontWeight: '400',
//     },
//     topWrapper: {

//     },
//     downWrapper: {
//         flexDirection: "row",
//         justifyContent: "space-between"
//     },
//     leftSide: {

//     },
//     rightSide: {

//     },
//     icon: {
//         width: 40,
//         height: 33
//     }
// });






import { ImageSliderType } from '@/data/SliderData';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

type Props = {
    item: ImageSliderType;
    index: number;
};

const { width, height } = Dimensions.get('screen');

const SliderItem = ({ item }: Props) => {
    return (
        <View style={styles.fullscreenWrapper}>
            <View style={styles.container}>
                <View
                    style={[
                        styles.itemWrapper,
                        { backgroundColor: item.backgroundColor || '#fff' },
                    ]}
                >
                    <View>
                        <Text style={[styles.balance, { color: item.color || '#fff' }]}>
                            {item.balance}
                        </Text>
                        <Text style={[styles.title, { color: item.color || '#fff' }]}>
                            {item.title}
                        </Text>
                    </View>
                    <View style={styles.downWrapper}>
                        <View>
                            <Text style={[styles.expire, { color: item.color || '#fff' }]}>
                                {item.expire}
                            </Text>
                            <Text style={[styles.number, { color: item.color || '#fff' }]}>
                                {item.number}
                            </Text>
                        </View>
                        <View>
                            <Image style={styles.icon} source={item.icon} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default SliderItem;

const styles = StyleSheet.create({
    fullscreenWrapper: {
        width,
        height,
        position: 'relative',
    },
    container: {
        padding: 16,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 25,
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
    },
    itemWrapper: {
        width: 209,
        height: 305,
        borderRadius: 25,
        paddingBottom: 32,
        paddingTop: 32,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-between',
    },
    balance: {
        fontSize: 24,
        fontWeight: '700',
    },
    expire: {
        fontSize: 14,
        fontWeight: '400',
    },
    number: {
        fontSize: 14,
        fontWeight: '400',
        marginTop: 8
    },
    downWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon: {
        width: 40,
        height: 33,
        resizeMode: 'contain',
    },
});
