// import { ImageSlider, ImageSliderType } from "@/data/SliderData";
// import React from "react";
// import { FlatList, StyleSheet, View } from "react-native";
// import SliderItem from "./SliderItem";

// type Props = {
//   itemList: ImageSliderType[]
// }

// const Slider = ({itemList} : Props) => {
//   return (
//     <View>
//       <FlatList
//         data={itemList}
//         renderItem={({ item, index }) => (
//           <SliderItem item={item} index={index} />
//         )}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         pagingEnabled
//       />
//     </View>
//   );
// };

// export default Slider;

// const styles = StyleSheet.create({});

import { ImageSliderType } from "@/data/SliderData";
import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import SliderItem from "./SliderItem";

type Props = {
  itemList: ImageSliderType[]
}

const Slider = ({itemList} : Props) => {
  const scrollX = useSharedValue(0);
  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollX.value = e.contentOffset.x;
    }
  });
  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={itemList}
        renderItem={({ item, index }) => (
          <SliderItem item={item} scrollX={scrollX} index={index}/>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        contentContainerStyle={styles.contentContainer}
        onScroll={onScrollHandler}
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    height: 305,
  },
  contentContainer: {
    alignItems: 'center',
  },
});