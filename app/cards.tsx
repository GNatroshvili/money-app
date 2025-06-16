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
import { ImageSlider } from '@/data/SliderData';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

const { width: screenWidth } = Dimensions.get('screen');

export default function Cards() {
    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <View style={styles.sliderWrapper}>
                    <Slider itemList={ImageSlider} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    container: {
        backgroundColor: '#1937FE',
        width: screenWidth,
        height: 293,
        borderBottomLeftRadius: 65,
        borderBottomRightRadius: 65,
        paddingTop: 208,
        overflow: 'visible',
    },
    sliderWrapper: {
        flex: 1,
        marginTop: 25,
    },
});