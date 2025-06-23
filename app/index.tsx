// import { LinearGradient } from "expo-linear-gradient";
// import { Stack, useRouter } from "expo-router";
// import {
//   Dimensions,
//   Image,
//   StatusBar,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View
// } from "react-native";

// export default function Index() {
//   const { height: screenHeight } = Dimensions.get("window");
//   const router = useRouter(); // ✅ Initialize router

//   const DESIGN_WIDTH = 337;
//   const DESIGN_HEIGHT = 367;

//   const calculatedHeight = screenHeight - 475;
//   const scaleFactor = calculatedHeight / DESIGN_HEIGHT;
//   const calculatedWidth = DESIGN_WIDTH * scaleFactor;

//   return (
//     <View style={styles.container}>
//       <StatusBar hidden />
//       <Stack.Screen options={{ headerShown: false }} />

//       <View style={styles.imageWrapper}>
//         <Image
//           source={require("../assets/images/logoWithoutText.png")}
//           resizeMode="cover"
//           style={styles.logo}
//         />
//         <Image
//           source={require("../assets/images/saveMoney.png")}
//           resizeMode="cover"
//           style={styles.saveMoney}
//         />
//       </View>

//       <View style={styles.textWrapper}>
//         <View
//           style={{
//             position: "absolute",
//             width: calculatedWidth,
//             height: calculatedHeight,
//             left: 0,
//             bottom: 0,
//           }}
//         >
//           <Image
//             source={require("../assets/images/circle.png")}
//             resizeMode="contain"
//             style={{
//               width: "100%",
//               height: "100%",
//               position: "absolute",
//             }}
//           />
//           <Text style={[styles.circleTitle, { top: 65 }]}>
//             Save your money conveniently.
//           </Text>
//           <Text style={[styles.circleDescription, { top: 163 }]}>
//             Get 5% cash back for each transaction and spend it easily.
//           </Text>
//           <Image
//             source={require("../assets/images/Indicator1.png")}
//             resizeMode="contain"
//             style={{
//               position: "absolute",
//               bottom: 60,
//               left: 30,
//               width: 40,
//               height: 5
//             }}
//           />
//           <TouchableOpacity
//             style={[
//               styles.button,
//               styles.shadow,
//               { right: -15, bottom: 30, position: "absolute" }
//             ]}
//             onPress={() => router.push("/secure")} // ← Redirects to /secure now
//           >
//             <LinearGradient
//               colors={["#6075FF", "#1433FF"]}
//               start={{ x: 0.1, y: 0 }}
//               end={{ x: 0.9, y: 1 }}
//               style={styles.gradient}
//             >
//               <Text style={styles.buttonText}>Next</Text>
//               <Image
//                 source={require("../assets/images/whiteArrow.png")}
//                 resizeMode="contain"
//                 style={styles.whiteArrow}
//               />
//               <Image
//                 source={require("../assets/images/signInButton.png")}
//                 resizeMode="cover"
//                 style={styles.signInButton}
//               />
//             </LinearGradient>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//   },
//   imageWrapper: {
//     marginTop: 90,
//     alignItems: "center",
//   },
//   logo: {
//     width: 55,
//     height: 53,
//   },
//   saveMoney: {
//     width: 280,
//     height: 202,
//     marginTop: 80,
//   },
//   textWrapper: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//   },
//   circleTitle: {
//     position: "absolute",
//     left: 20,
//     maxWidth: 227,
//     fontWeight: "700",
//     fontFamily: "Montserrat",
//     fontSize: 25,
//     lineHeight: 36,
//     color: "#2743FD",
//   },
//   circleDescription: {
//     position: "absolute",
//     left: 20,
//     maxWidth: 271,
//     fontWeight: "400",
//     fontFamily: "Montserrat",
//     fontSize: 18,
//     lineHeight: 28,
//     color: "#2743FD",
//   },
//   button: {
//     width: 153,
//     height: 64,
//     borderRadius: 28,
//     overflow: "hidden",
//   },
//   gradient: {
//     flex: 1,
//     borderRadius: 28,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 20,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 20,
//     fontWeight: "400",
//   },
//   shadow: {
//     shadowColor: "#1433FF",
//     shadowOffset: {
//       width: 0,
//       height: 6,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 10,
//     elevation: 8,
//   },
//   whiteArrow: {
//     width: 24,
//     height: 24,
//   },
//   signInButton: {
//     position: "absolute",
//     top: 0,
//     left: 75,
//     width: 80,
//     height: 55,
//   },
// });

// import { LinearGradient } from "expo-linear-gradient";
// import { Stack, useRouter } from "expo-router";
// import { useRef, useState } from "react";
// import {
//   Dimensions,
//   FlatList,
//   Image,
//   StatusBar,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   ViewToken,
// } from "react-native";

// const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

// const DESIGN_WIDTH = 337;
// const DESIGN_HEIGHT = 367;
// const calculatedHeight = screenHeight - 475;
// const scaleFactor = calculatedHeight / DESIGN_HEIGHT;
// const calculatedWidth = DESIGN_WIDTH * scaleFactor;

// const onboardingData = [
//   {
//     key: "1",
//     image: require("../assets/images/saveMoney.png"),
//     title: "Save your money conveniently.",
//     description: "Get 5% cash back for each transaction and spend it easily.",
//     indicator: require("../assets/images/Indicator1.png"),
//   },
//   {
//     key: "2",
//     image: require("../assets/images/secure.png"),
//     title: "Secure your money for free and get rewards.",
//     description: "Get the most secure payment app ever and enjoy it.",
//     indicator: require("../assets/images/Indicator2.png"),
//   },
//   {
//     key: "3",
//     image: require("../assets/images/trading.png"),
//     title: "Trade and Earn effortlessly.",
//     description: "Use your money smarter and grow your savings.",
//     indicator: require("../assets/images/Indicator3.png"),
//   },
// ];

// export default function Onboarding() {
//   const flatListRef = useRef<FlatList>(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const router = useRouter();

//   const handleNext = () => {
//     if (currentIndex < onboardingData.length - 1) {
//       flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
//     } else {
//       router.push("/signin");
//     }
//   };

//   const onViewableItemsChanged = useRef(
//     ({ viewableItems }: { viewableItems: ViewToken[] }) => {
//       if (viewableItems.length > 0) {
//         setCurrentIndex(viewableItems[0].index ?? 0);
//       }
//     }
//   ).current;

//   return (
//     <View style={styles.container}>
//       <StatusBar hidden />
//       <Stack.Screen options={{ headerShown: false }} />

//       <FlatList
//         ref={flatListRef}
//         data={onboardingData}
//         horizontal
//         pagingEnabled
//         scrollEnabled={true} // ✅ Enable swipe
//         showsHorizontalScrollIndicator={false}
//         onViewableItemsChanged={onViewableItemsChanged}
//         viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
//         keyExtractor={(item) => item.key}
//         renderItem={({ item }) => (
//           <View style={{ width: screenWidth, alignItems: "center" }}>
//             <View style={styles.imageWrapper}>
//               <Image
//                 source={require("../assets/images/logoWithoutText.png")}
//                 resizeMode="cover"
//                 style={styles.logo}
//               />
//               <Image
//                 source={item.image}
//                 resizeMode="cover"
//                 style={styles.mainImage}
//               />
//             </View>

//             <View style={styles.textWrapper}>
//               <View
//                 style={{
//                   position: "absolute",
//                   width: calculatedWidth,
//                   height: calculatedHeight,
//                   left: 0,
//                   bottom: 0,
//                 }}
//               >
//                 <Image
//                   source={require("../assets/images/circle.png")}
//                   resizeMode="contain"
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     position: "absolute",
//                   }}
//                 />
//                 <Text style={[styles.circleTitle, { top: 65 }]}>
//                   {item.title}
//                 </Text>
//                 <Text style={[styles.circleDescription, { top: 163 }]}>
//                   {item.description}
//                 </Text>
//                 <Image
//                   source={item.indicator}
//                   resizeMode="contain"
//                   style={styles.indicator}
//                 />

//                 <TouchableOpacity
//                   style={[styles.button, styles.shadow, styles.absoluteButton]}
//                   onPress={handleNext}
//                 >
//                   <LinearGradient
//                     colors={["#6075FF", "#1433FF"]}
//                     start={{ x: 0.1, y: 0 }}
//                     end={{ x: 0.9, y: 1 }}
//                     style={styles.gradient}
//                   >
//                     <Text style={styles.buttonText}>
//                       {currentIndex === onboardingData.length - 1
//                         ? "Get Started"
//                         : "Next"}
//                     </Text>
//                     <Image
//                       source={require("../assets/images/whiteArrow.png")}
//                       resizeMode="contain"
//                       style={styles.whiteArrow}
//                     />
//                     <Image
//                       source={require("../assets/images/signInButton.png")}
//                       resizeMode="cover"
//                       style={styles.signInButton}
//                     />
//                   </LinearGradient>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   imageWrapper: {
//     marginTop: 90,
//     alignItems: "center",
//   },
//   logo: {
//     width: 55,
//     height: 53,
//   },
//   mainImage: {
//     width: 280,
//     height: 202,
//     marginTop: 80,
//   },
//   textWrapper: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//   },
//   circleTitle: {
//     position: "absolute",
//     left: 20,
//     maxWidth: 298,
//     fontWeight: "700",
//     fontFamily: "Montserrat",
//     fontSize: 25,
//     lineHeight: 36,
//     color: "#2743FD",
//   },
//   circleDescription: {
//     position: "absolute",
//     left: 20,
//     maxWidth: 271,
//     fontWeight: "400",
//     fontFamily: "Montserrat",
//     fontSize: 18,
//     lineHeight: 28,
//     color: "#2743FD",
//   },
//   button: {
//     width: 153,
//     height: 64,
//     borderRadius: 28,
//     overflow: "hidden",
//   },
//   gradient: {
//     flex: 1,
//     borderRadius: 28,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 20,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 20,
//     fontWeight: "600",
//   },
//   whiteArrow: {
//     width: 24,
//     height: 24,
//   },
//   signInButton: {
//     position: "absolute",
//     top: 0,
//     left: 75,
//     width: 80,
//     height: 55,
//   },
//   shadow: {
//     shadowColor: "#1433FF",
//     shadowOffset: {
//       width: 0,
//       height: 6,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 10,
//     elevation: 8,
//   },
//   indicator: {
//     position: "absolute",
//     bottom: 60,
//     left: 30,
//     width: 40,
//     height: 5,
//   },
//   absoluteButton: {
//     position: "absolute",
//     right: -15,
//     bottom: 30,
//   },
// });

import { LinearGradient } from "expo-linear-gradient";
import { Stack, useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Easing,
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewToken,
} from "react-native";

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

// const DESIGN_WIDTH = 337;
// const DESIGN_HEIGHT = 367;
// const calculatedHeight = screenHeight - 475;
// const scaleFactor = calculatedHeight / DESIGN_HEIGHT;
// const calculatedWidth = DESIGN_WIDTH * scaleFactor;
const dynamicHeight = screenHeight / 2.32;
const dynamicWidth = screenWidth / 1.16;
const dynamicMarginTop = screenHeight / 10.6;
const dynamicMarginTop1 = screenHeight / 9.4;
const dynamicImageHeight = screenHeight / 4.2;
const dynamicImageWidth = screenWidth / 1.6;
const dynamicTitleFont = screenHeight / 34;
const dynamicTitleLine = screenHeight / 23.6;
const dynamicDescFont = screenHeight / 47.3;
const dynamicDescLine = screenHeight / 30.4;
const dynamicButtonWidth = screenWidth / 2.56;
const dynamicButtonHeight = screenHeight / 13.3;
const dynamicMaxWidth = screenWidth / 1.51;
const dynamicMaxWidth2 = screenWidth / 1.75;

const onboardingData = [
  {
    key: "1",
    image: require("../assets/images/saveMoney.png"),
    title: "Save your money conveniently.",
    description: "Get 5% cash back for each transaction and spend it easily.",
    indicator: require("../assets/images/Indicator1.png"),
  },
  {
    key: "2",
    image: require("../assets/images/secure.png"),
    title: "Secure your money for free and get rewards.",
    description: "Get the most secure payment app ever and enjoy it.",
    indicator: require("../assets/images/Indicator2.png"),
  },
  {
    key: "3",
    image: require("../assets/images/trading.png"),
    title: "Enjoy commission-free stock trading.",
    description: "Online investing has never been easier than it is right now.",
    indicator: require("../assets/images/Indicator3.png"),
  },
];

export default function Onboarding() {
  const imageListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexRef = useRef(currentIndex);
  const textOpacity = useRef(new Animated.Value(1)).current;
  const router = useRouter();

  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      Animated.timing(textOpacity, {
        toValue: 0,
        duration: 200,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start(() => {
        const nextIndex = currentIndex + 1;
        setCurrentIndex(nextIndex);
        imageListRef.current?.scrollToIndex({ index: nextIndex });

        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 200,
          easing: Easing.ease,
          useNativeDriver: true,
        }).start();
      });
    } else {
      router.push("/login");
    }
  };

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        const newIndex = viewableItems[0].index ?? 0;

        if (newIndex !== currentIndexRef.current) {
          Animated.timing(textOpacity, {
            toValue: 0,
            duration: 200,
            easing: Easing.ease,
            useNativeDriver: true,
          }).start(() => {
            setCurrentIndex(newIndex);
            currentIndexRef.current = newIndex;

            Animated.timing(textOpacity, {
              toValue: 1,
              duration: 200,
              easing: Easing.ease,
              useNativeDriver: true,
            }).start();
          });
        }
      }
    }
  ).current;

  const currentSlide = onboardingData[currentIndex];

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.imageWrapper}>
        <Image
          source={require("../assets/images/logoWithoutText.png")}
          resizeMode="cover"
          style={styles.logo}
        />
      </View>

      <FlatList
        ref={imageListRef}
        data={onboardingData}
        horizontal
        pagingEnabled
        scrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
        keyExtractor={(item) => item.key}
        style={styles.imageList}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image
              source={item.image}
              resizeMode="cover"
              style={[
                styles.mainImage,
                item.key === "2" && { width: 187, height: 202 },
              ]}
            />
          </View>
        )}
      />

      <View style={styles.textWrapper}>
        <View style={styles.circleContainer}>
          <Image
            source={require("../assets/images/circle.png")}
            resizeMode="contain"
            style={styles.circleBackground}
          />

          <Animated.View style={[styles.textContent, { opacity: textOpacity }]}>
            <Text style={styles.circleTitle}>{currentSlide.title}</Text>
            <Text style={styles.circleDescription}>
              {currentSlide.description}
            </Text>
            <Image
              source={currentSlide.indicator}
              resizeMode="contain"
              style={styles.indicator}
            />
          </Animated.View>

          <TouchableOpacity
            style={[
              styles.button,
              styles.shadow,
              styles.absoluteButton,
              currentIndex === onboardingData.length - 1 && {
                width: 189,
                height: 64,
              },
            ]}
            onPress={handleNext}
          >
            <LinearGradient
              colors={["#6075FF", "#1433FF"]}
              start={{ x: 0.1, y: 0 }}
              end={{ x: 0.9, y: 1 }}
              style={[
                styles.gradient,
                currentIndex === onboardingData.length - 1 && {
                  borderRadius: 28,
                },
              ]}
            >
              <Text style={styles.buttonText}>
                {currentIndex === onboardingData.length - 1
                  ? "Get Started"
                  : "Next"}
              </Text>
              <Image
                source={require("../assets/images/whiteArrow.png")}
                resizeMode="contain"
                style={styles.whiteArrow}
              />
              <Image
                source={require("../assets/images/signInButton.png")}
                resizeMode="cover"
                style={styles.signInButton}
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageWrapper: {
    marginTop: dynamicMarginTop1,
    alignItems: "center",
  },
  logo: {
    width: 55,
    height: 53,
  },
  imageList: {
    flexGrow: 0,
    height: dynamicImageHeight,
    marginTop: dynamicMarginTop,
  },
  imageContainer: {
    width: screenWidth,
    alignItems: "center",
  },
  mainImage: {
    width: dynamicImageWidth,
    height: dynamicImageHeight,
  },
  textWrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  // circleContainer: {
  //   position: "absolute",
  //   width: dynamicWidth - 6,
  //   height: dynamicHeight,
  //   // width: 335,
  //   // height: 365,
  //   left: 0,
  //   bottom: 0,
  // },
  circleContainer: {
    position: "absolute",
    width:
      screenHeight < 700
        ? dynamicWidth - 60
        : screenHeight < 800
          ? dynamicWidth - 18
          : dynamicWidth - 6,
    height: dynamicHeight,
    left: 0,
    bottom: 0,
  },
  circleBackground: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  textContent: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  circleTitle: {
    position: "absolute",
    left: 20,
    top: 65,
    maxWidth: dynamicMaxWidth,
    fontWeight: "700",
    fontFamily: "Montserrat",
    fontSize: dynamicTitleFont,
    lineHeight: dynamicTitleLine,
    color: "#2743FD",
  },
  circleDescription: {
    position: "absolute",
    left: 20,
    top: 163,
    maxWidth: dynamicMaxWidth2,
    fontWeight: "400",
    fontFamily: "Montserrat",
    fontSize: dynamicDescFont,
    lineHeight: dynamicDescLine,
    color: "#2743FD",
  },
  button: {
    width: dynamicButtonWidth,
    height: dynamicButtonHeight,
    borderRadius: 28,
    overflow: "hidden",
  },
  gradient: {
    flex: 1,
    borderRadius: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
  whiteArrow: {
    width: 24,
    height: 24,
    zIndex: 2
  },
  signInButton: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 110,
    height: 55,
  },
  shadow: {
    shadowColor: "#1433FF",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
  },
  indicator: {
    position: "absolute",
    bottom: 60,
    left: 30,
    width: 40,
    height: 5,
  },
  absoluteButton: {
    position: "absolute",
    right: -15,
    bottom: 30,
  },
});
