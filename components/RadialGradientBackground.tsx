import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg';

const RadialGradientBackground = () => {
  return (
    <View style={styles.container}>
      <Svg height="100%" width="100%">
        <Defs>
          <RadialGradient
            id="grad1"
            cx="10.05%"
            cy="101.64%"
            rx="136.25%"
            ry="97.38%"
            fx="10.05%"
            fy="101.64%"
          >
            <Stop offset="60%" stopColor="#40D3F2" stopOpacity="0.6" />
            <Stop offset="100%" stopColor="#40D3F2" stopOpacity="0" />
          </RadialGradient>

          <RadialGradient
            id="grad2"
            cx="77.51%"
            cy="6.56%"
            rx="90.46%"
            ry="49.68%"
            fx="77.51%"
            fy="6.56%"
          >
            <Stop offset="80%" stopColor="#E100FF" stopOpacity="0.4" />
            <Stop offset="100%" stopColor="#E100FF" stopOpacity="0" />
          </RadialGradient>

          <RadialGradient
            id="grad3"
            cx="100%"
            cy="72.3%"
            rx="73.22%"
            ry="53.93%"
            fx="100%"
            fy="72.3%"
          >
            <Stop offset="60%" stopColor="#2B47FC" stopOpacity="0.4" />
            <Stop offset="100%" stopColor="#2B47FC" stopOpacity="0" />
          </RadialGradient>
        </Defs>

        <Rect x="0" y="0" width="100%" height="100%" fill="#FFFFFF" />
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad1)" />
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad2)" />
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad3)" />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
});

export default RadialGradientBackground;
