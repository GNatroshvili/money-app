import Slider from '@/components/Slider';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

export default function Cards() {
    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <View style={styles.sliderWrapper}>
                    <Slider />
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
        paddingTop: 208, // create space from top
    },
    sliderWrapper: {
        // This ensures proper placement of the slider 70px down
        flex: 1,
    },
});
