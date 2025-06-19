// import { ImageSliderType } from '@/data/SliderData';
// import React from 'react';
// import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

// type Props = {
//     item: ImageSliderType;
//     index: number;
// };

// const { width, height } = Dimensions.get('screen');

// const SliderItem = ({ item }: Props) => {
//     return (
//         <View style={styles.fullscreenWrapper}>
//             <View style={styles.container}>
//                 <View
//                     style={[
//                         styles.itemWrapper,
//                         { backgroundColor: item.backgroundColor || '#fff' },
//                     ]}
//                 >
//                     <View>
//                         <Text style={[styles.balance, { color: item.color || '#fff' }]}>
//                             {item.balance}
//                         </Text>
//                         <Text style={[styles.title, { color: item.color || '#fff' }]}>
//                             {item.title}
//                         </Text>
//                     </View>
//                     <View style={styles.downWrapper}>
//                         <View>
//                             <Text style={[styles.expire, { color: item.color || '#fff' }]}>
//                                 {item.expire}
//                             </Text>
//                             <Text style={[styles.number, { color: item.color || '#fff' }]}>
//                                 {item.number}
//                             </Text>
//                         </View>
//                         <View>
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
//         paddingBottom: 32,
//         paddingTop: 32,
//         paddingLeft: 20,
//         paddingRight: 20,
//         justifyContent: 'space-between',
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
//         marginTop: 8
//     },
//     downWrapper: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center'
//     },
//     icon: {
//         width: 40,
//         height: 33,
//         resizeMode: 'contain',
//     },
// });


import { ImageSliderType } from '@/data/SliderData';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Animated, {
    Extrapolation,
    interpolate,
    SharedValue,
    useAnimatedStyle,
} from 'react-native-reanimated';

type Props = {
  item: ImageSliderType;
  scrollX: SharedValue<number>;
  index: number;
};

const { width } = Dimensions.get('window');
const { height: screenHeight } = Dimensions.get('screen');
const cardHeight = screenHeight / 3.1;

const SliderItem = ({ item, index, scrollX }: Props) => {
  const rnAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [-width * 0.25, 0, width * 0.25],
            Extrapolation.CLAMP
          ),
        },
        {
          scale: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [0.85, 1, 0.85],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  return (
    <Animated.View style={[styles.container, rnAnimatedStyle]}>
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
    </Animated.View>
  );
};

export default SliderItem;

const styles = StyleSheet.create({
  container: {
    width: width - 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  itemWrapper: {
    width: 209,
    height: cardHeight,
    borderRadius: 25,
    paddingBottom: 32,
    paddingTop: 32,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',

    // iOS shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.11,
    shadowRadius: 25,

    // Android shadow
    elevation: 10,
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
    marginTop: 8,
  },
  downWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 33,
    resizeMode: 'contain',
  },
});
