// import BankAccountButton from "@/components/bankAccountButton";
// import { LinearGradient } from "expo-linear-gradient";
// import { Stack } from "expo-router";
// import { Image, Pressable, StatusBar, StyleSheet, Text, View } from "react-native";

// export default function Notifications() {
//     return (
//         <View style={styles.container}>
//             <StatusBar hidden />
//             <Stack.Screen options={{ headerShown: false }} />
//             <LinearGradient
//                 colors={["#4950F9", "#1937FE"]}
//                 start={{ x: 0.1, y: 0 }}
//                 end={{ x: 0.9, y: 1 }}
//                 style={styles.header}
//             >
//                 <View style={styles.topHeader}>
//                     <Pressable
//                         style={styles.burgerContainer}
//                         onPress={() => {
//                             // Handle burger menu press here
//                         }}
//                     >
//                         <View style={styles.burgerLine} />
//                         <View style={styles.burgerLine} />
//                         <View style={styles.burgerLine} />
//                     </Pressable>

//                     <Image
//                         source={require("../../assets/images/profilePicture.png")}
//                         style={styles.profileImage}
//                     />
//                 </View>

//                 <View style={styles.userNameTextWrapper}>
//                     <Text style={styles.userNameText}>Good morning Emma,</Text>
//                 </View>
//                 <View style={styles.balanceCard}>
//                     <View style={styles.firstLine}>
//                         <Text style={styles.title}>
//                             Your total balance
//                         </Text>
//                         <Text style={styles.dots}>
//                             ...
//                         </Text>
//                     </View>
//                     <View>
//                         <Text style={styles.balance}>
//                             $850.00
//                         </Text>
//                     </View>
//                     <View style={styles.graphWrapper}>
//                         <Image
//                             source={require("../../assets/images/graph.png")}
//                             style={styles.graph}
//                         />
//                     </View>
//                 </View>
//             </LinearGradient>
//             <View style={styles.buttonWrapper}>
//                 <BankAccountButton text="Check Your Bank Accounts" />
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         position: "relative",
//         flex: 1,
//     },
//     header: {
//         height: 278,
//         justifyContent: "center",
//         alignItems: "center",
//         paddingTop: 50,
//         borderBottomLeftRadius: 60,
//         borderBottomRightRadius: 60,
//     },
//     topHeader: {
//         position: "absolute",
//         top: 0,
//         left: 0,
//         right: 0,
//         height: 100,
//     },
//     burgerContainer: {
//         position: "absolute",
//         top: 80,
//         left: 30,
//         width: 24,
//         height: 12,
//         justifyContent: "space-between",
//     },
//     burgerLine: {
//         width: 24,
//         height: 1,
//         backgroundColor: "#fff",
//     },
//     profileImage: {
//         width: 50,
//         height: 50,
//         borderRadius: 1,
//         position: "absolute",
//         top: 68,
//         right: 30,
//     },
//     userNameTextWrapper: {
//         paddingLeft: 50,
//         width: "100%",
//     },
//     userNameText: {
//         fontFamily: "Montserrat",
//         fontSize: 32,
//         fontWeight: "400",
//         color: "#FFFFFF",
//         maxWidth: 244,
//     },
//     graph: {
//         width: 250,
//         height: 166
//     },
//     balanceCard: {
//         position: "absolute",
//         top: 238,
//         borderRadius: 40,
//         backgroundColor: "#FFFFFF",
//         padding: 32
//     },
//     dots: {
//         fontFamily: "SF Pro Rounded",
//         fontSize: 14,
//         fontWeight: "400",
//     },
//     firstLine: {
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "space-between"
//     },
//     title: {
//         fontFamily: "Montserrat",
//         fontSize: 16,
//         fontWeight: "400",
//         color: "#000000",
//     },
//     balance: {
//         fontFamily: "Montserrat",
//         fontSize: 30,
//         fontWeight: "700",
//         color: "#2D99FF",
//         marginTop: 8
//     },
//     graphWrapper: {
//         marginTop: 26
//     },
//     buttonWrapper: {
//     position: "absolute",
//     bottom: 30,
//     left: 0,
//     right: 0,
//     alignItems: "center",
// }
// });

// import BankAccountButton from "@/components/bankAccountButton";
// import { LinearGradient } from "expo-linear-gradient";
// import { Stack } from "expo-router";
// import { useEffect, useRef, useState } from "react";
// import {
//     Animated,
//     Image,
//     Pressable,
//     StatusBar,
//     StyleSheet,
//     Text,
//     View
// } from "react-native";

// export default function Notifications() {
//     const [menuVisible, setMenuVisible] = useState(false);
//     const slideAnim = useRef(new Animated.Value(-288)).current;

//     useEffect(() => {
//         Animated.timing(slideAnim, {
//             toValue: menuVisible ? 0 : -288,
//             duration: 200,
//             useNativeDriver: false,
//         }).start();
//     }, [menuVisible]);

//     return (
//         <View style={styles.container}>
//             <StatusBar hidden />
//             <Stack.Screen options={{ headerShown: false }} />
//             <LinearGradient
//                 colors={["#4950F9", "#1937FE"]}
//                 start={{ x: 0.1, y: 0 }}
//                 end={{ x: 0.9, y: 1 }}
//                 style={styles.header}
//             >
//                 <View style={styles.topHeader}>
//                     <Pressable
//                         style={styles.burgerContainer}
//                         onPress={() => setMenuVisible(true)}
//                     >
//                         <View style={styles.burgerLine} />
//                         <View style={styles.burgerLine} />
//                         <View style={styles.burgerLine} />
//                     </Pressable>

//                     <Image
//                         source={require("../../assets/images/profilePicture.png")}
//                         style={styles.profileImage}
//                     />
//                 </View>

//                 <View style={styles.userNameTextWrapper}>
//                     <Text style={styles.userNameText}>Good morning Emma,</Text>
//                 </View>
//                 <View style={styles.balanceCard}>
//                     <View style={styles.firstLine}>
//                         <Text style={styles.title}>Your total balance</Text>
//                         <Text style={styles.dots}>...</Text>
//                     </View>
//                     <View>
//                         <Text style={styles.balance}>$850.00</Text>
//                     </View>
//                     <View style={styles.graphWrapper}>
//                         <Image
//                             source={require("../../assets/images/graph.png")}
//                             style={styles.graph}
//                         />
//                     </View>
//                 </View>
//             </LinearGradient>
//             <View style={styles.buttonWrapper}>
//                 <BankAccountButton text="Check Your Bank Accounts" />
//             </View>

//             {/* Overlay (click outside to close) */}
//             {menuVisible && (
//                 <Pressable
//                     onPress={() => setMenuVisible(false)}
//                     style={StyleSheet.absoluteFill}
//                 >
//                     <View style={styles.overlay} />
//                 </Pressable>
//             )}

//             {/* Animated Side Menu */}
//             <Animated.View style={[styles.sideMenu, { left: slideAnim }]}>
//                 <Pressable onPress={() => setMenuVisible(false)}>
//                     <Text style={styles.closeText}>Close</Text>
//                 </Pressable>
//                 {/* Add menu items here */}
//                 <Text style={styles.menuItem}>Home</Text>
//                 <Text style={styles.menuItem}>Profile</Text>
//                 <Text style={styles.menuItem}>Settings</Text>
//             </Animated.View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         position: "relative",
//         flex: 1,
//     },
//     header: {
//         height: 278,
//         justifyContent: "center",
//         alignItems: "center",
//         paddingTop: 50,
//         borderBottomLeftRadius: 60,
//         borderBottomRightRadius: 60,
//     },
//     topHeader: {
//         position: "absolute",
//         top: 0,
//         left: 0,
//         right: 0,
//         height: 100,
//     },
//     burgerContainer: {
//         position: "absolute",
//         top: 80,
//         left: 30,
//         width: 24,
//         height: 12,
//         justifyContent: "space-between",
//     },
//     burgerLine: {
//         width: 24,
//         height: 1,
//         backgroundColor: "#fff",
//     },
//     profileImage: {
//         width: 50,
//         height: 50,
//         borderRadius: 1,
//         position: "absolute",
//         top: 68,
//         right: 30,
//     },
//     userNameTextWrapper: {
//         paddingLeft: 50,
//         width: "100%",
//     },
//     userNameText: {
//         fontFamily: "Montserrat",
//         fontSize: 32,
//         fontWeight: "400",
//         color: "#FFFFFF",
//         maxWidth: 244,
//     },
//     graph: {
//         width: 250,
//         height: 166
//     },
//     balanceCard: {
//         position: "absolute",
//         top: 238,
//         borderRadius: 40,
//         backgroundColor: "#FFFFFF",
//         padding: 32
//     },
//     dots: {
//         fontFamily: "SF Pro Rounded",
//         fontSize: 14,
//         fontWeight: "400",
//     },
//     firstLine: {
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "space-between"
//     },
//     title: {
//         fontFamily: "Montserrat",
//         fontSize: 16,
//         fontWeight: "400",
//         color: "#000000",
//     },
//     balance: {
//         fontFamily: "Montserrat",
//         fontSize: 30,
//         fontWeight: "700",
//         color: "#2D99FF",
//         marginTop: 8
//     },
//     graphWrapper: {
//         marginTop: 26
//     },
//     buttonWrapper: {
//         position: "absolute",
//         bottom: 30,
//         left: 0,
//         right: 0,
//         alignItems: "center",
//     },
//     sideMenu: {
//         position: "absolute",
//         top: 0,
//         bottom: 0,
//         width: 288,
//         backgroundColor: "#FFFFFF",
//         zIndex: 9999,
//         padding: 20,
//         elevation: 6
//     },
//     overlay: {
//         position: "absolute",
//         top: 0,
//         left: 0,
//         bottom: 0,
//         right: 0,
//         backgroundColor: "rgba(0,0,0,0.3)",
//         zIndex: 9998,
//     },
//     closeText: {
//         fontSize: 18,
//         fontWeight: "600",
//         marginBottom: 20,
//     },
//     menuItem: {
//         fontSize: 16,
//         paddingVertical: 12,
//         fontWeight: "400",
//     },
// });

// import BankAccountButton from "@/components/bankAccountButton";
// import { LinearGradient } from "expo-linear-gradient";
// import { Stack } from "expo-router";
// import { useEffect, useRef, useState } from "react";
// import {
//     Animated,
//     Image,
//     StatusBar,
//     StyleSheet,
//     Text,
//     TouchableOpacity, // <-- changed here
//     View,
// } from "react-native";

// export default function Notifications() {
//     const [menuVisible, setMenuVisible] = useState(false);
//     const slideAnim = useRef(new Animated.Value(-288)).current; // burger menu slide
//     const mainContentTranslateX = useRef(new Animated.Value(0)).current; // main content slide

//     useEffect(() => {
//         // Animate burger menu in/out
//         Animated.timing(slideAnim, {
//             toValue: menuVisible ? 0 : -288,
//             duration: 200,
//             useNativeDriver: false,
//         }).start();

//         // Animate main content shifting right/left
//         Animated.timing(mainContentTranslateX, {
//             toValue: menuVisible ? 270 : 0,
//             duration: 200,
//             useNativeDriver: false,
//         }).start();
//     }, [menuVisible]);

//     return (
//         <View style={styles.container}>
//             <StatusBar hidden />
//             <Stack.Screen options={{ headerShown: false }} />

//             <TouchableOpacity
//                 style={{ flex: 1 }}
//                 onPress={() => {
//                     if (menuVisible) {
//                         setMenuVisible(false);
//                     }
//                 }}
//                 activeOpacity={1} // valid here on TouchableOpacity
//             >
//                 {/* Overlay with semi-transparent black, only visible when menu is open */}
//                 {menuVisible && <View style={styles.overlay} />}

//                 <Animated.View
//                     style={[
//                         styles.mainContent,
//                         { transform: [{ translateX: mainContentTranslateX }] },
//                     ]}
//                 >
//                     <LinearGradient
//                         colors={["#4950F9", "#1937FE"]}
//                         start={{ x: 0.1, y: 0 }}
//                         end={{ x: 0.9, y: 1 }}
//                         style={styles.header}
//                     >
//                         <View style={styles.topHeader}>
//                             <TouchableOpacity
//                                 style={styles.burgerContainer}
//                                 onPress={() => setMenuVisible(true)}
//                             >
//                                 <View style={styles.burgerLine} />
//                                 <View style={styles.burgerLine} />
//                                 <View style={styles.burgerLine} />
//                             </TouchableOpacity>

//                             <Image
//                                 source={require("../../assets/images/profilePicture.png")}
//                                 style={styles.profileImage}
//                             />
//                         </View>

//                         <View style={styles.userNameTextWrapper}>
//                             <Text style={styles.userNameText}>Good morning Emma,</Text>
//                         </View>
//                         <View style={styles.balanceCard}>
//                             <View style={styles.firstLine}>
//                                 <Text style={styles.title}>Your total balance</Text>
//                                 <Text style={styles.dots}>...</Text>
//                             </View>
//                             <View>
//                                 <Text style={styles.balance}>$850.00</Text>
//                             </View>
//                             <View style={styles.graphWrapper}>
//                                 <Image
//                                     source={require("../../assets/images/graph.png")}
//                                     style={styles.graph}
//                                 />
//                             </View>
//                         </View>
//                     </LinearGradient>
//                     <View style={styles.buttonWrapper}>
//                         <BankAccountButton text="Check Your Bank Accounts" />
//                     </View>
//                 </Animated.View>
//             </TouchableOpacity>

//             {/* Animated Side Menu */}
//             <Animated.View style={[styles.sideMenu, { left: slideAnim }]}>
//                 <TouchableOpacity onPress={() => setMenuVisible(false)}>
//                     <Text style={styles.closeText}>Close</Text>
//                 </TouchableOpacity>
//                 {/* Add menu items here */}
//                 <Text style={styles.menuItem}>Home</Text>
//                 <Text style={styles.menuItem}>Profile</Text>
//                 <Text style={styles.menuItem}>Settings</Text>
//             </Animated.View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         position: "relative",
//         flex: 1,
//     },
//     mainContent: {
//         flex: 1,
//         backgroundColor: "#fff",
//     },
//     overlay: {
//         ...StyleSheet.absoluteFillObject,
//         backgroundColor: "#0000004D",
//         position: "absolute",
//         zIndex: 10,
//     },
//     header: {
//         height: 278,
//         justifyContent: "center",
//         alignItems: "center",
//         paddingTop: 50,
//         borderBottomLeftRadius: 60,
//         borderBottomRightRadius: 60,
//     },
//     topHeader: {
//         position: "absolute",
//         top: 0,
//         left: 0,
//         right: 0,
//         height: 100,
//     },
//     burgerContainer: {
//         position: "absolute",
//         top: 80,
//         left: 30,
//         width: 24,
//         height: 12,
//         justifyContent: "space-between",
//     },
//     burgerLine: {
//         width: 24,
//         height: 1,
//         backgroundColor: "#fff",
//     },
//     profileImage: {
//         width: 50,
//         height: 50,
//         borderRadius: 1,
//         position: "absolute",
//         top: 68,
//         right: 30,
//     },
//     userNameTextWrapper: {
//         paddingLeft: 50,
//         width: "100%",
//     },
//     userNameText: {
//         fontFamily: "Montserrat",
//         fontSize: 32,
//         fontWeight: "400",
//         color: "#FFFFFF",
//         maxWidth: 244,
//     },
//     graph: {
//         width: 250,
//         height: 166,
//     },
//     balanceCard: {
//         position: "absolute",
//         top: 238,
//         borderRadius: 40,
//         backgroundColor: "#FFFFFF",
//         padding: 32,
//     },
//     dots: {
//         fontFamily: "SF Pro Rounded",
//         fontSize: 14,
//         fontWeight: "400",
//     },
//     firstLine: {
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "space-between",
//     },
//     title: {
//         fontFamily: "Montserrat",
//         fontSize: 16,
//         fontWeight: "400",
//         color: "#000000",
//     },
//     balance: {
//         fontFamily: "Montserrat",
//         fontSize: 30,
//         fontWeight: "700",
//         color: "#2D99FF",
//         marginTop: 8,
//     },
//     graphWrapper: {
//         marginTop: 26,
//     },
//     buttonWrapper: {
//         position: "absolute",
//         bottom: 30,
//         left: 0,
//         right: 0,
//         alignItems: "center",
//     },
//     sideMenu: {
//         position: "absolute",
//         top: 0,
//         bottom: 0,
//         width: 288,
//         backgroundColor: "#FFFFFF",
//         zIndex: 9999,
//         padding: 20,
//         elevation: 6,
//         borderTopRightRadius: 20,
//         borderBottomRightRadius: 20
//     },
//     closeText: {
//         fontSize: 18,
//         fontWeight: "600",
//         marginBottom: 20,
//     },
//     menuItem: {
//         fontSize: 16,
//         paddingVertical: 12,
//         fontWeight: "400",
//     },
// });

import BankAccountButton from "@/components/bankAccountButton";
import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useMenu } from "./context/MenuContext";

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");

const dynamicHeight = screenHeight / 3;
const dynamicTop = screenHeight / 3.6;
const dynamicImageHeight = screenHeight / 5.1;
const dynamicImageWidth = screenWidth / 1.55;
const dynamicPaddingVertical = screenHeight / 26.6;
const dynamicPaddingHorizontal = screenWidth / 12.3;

export default function Notifications() {
  const { toggleMenu } = useMenu();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <LinearGradient
        colors={["#4950F9", "#1937FE"]}
        start={{ x: 0.1, y: 0 }}
        end={{ x: 0.9, y: 1 }}
        style={styles.header}
      >
        <View style={styles.topHeader}>
          <TouchableOpacity style={styles.burgerContainer} onPress={toggleMenu}>
            <View style={styles.burgerLine} />
            <View style={styles.burgerLine} />
            <View style={styles.burgerLine} />
          </TouchableOpacity>

          <Image
            source={require("../../assets/images/profilePicture.png")}
            style={styles.profileImage}
          />
        </View>

        <View style={styles.userNameTextWrapper}>
          <Text style={styles.userNameText}>Good morning Emma,</Text>
        </View>
        <View style={styles.balanceCard}>
          <View style={styles.firstLine}>
            <Text style={styles.title}>Your total balance</Text>
            <Text style={styles.dots}>...</Text>
          </View>
          <View>
            <Text style={styles.balance}>$850.00</Text>
          </View>
          <View style={styles.graphWrapper}>
            <Image
              source={require("../../assets/images/graph.png")}
              style={styles.graph}
            />
          </View>
        </View>
      </LinearGradient>
      <View style={styles.buttonWrapper}>
        <BankAccountButton text="Check Your Bank Accounts" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: dynamicHeight,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },
  topHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 100,
  },
  burgerContainer: {
    position: "absolute",
    top: 80,
    left: 30,
    width: 24,
    height: 12,
    justifyContent: "space-between",
  },
  burgerLine: {
    width: 24,
    height: 1,
    backgroundColor: "#fff",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 1,
    position: "absolute",
    top: 68,
    right: 30,
  },
  userNameTextWrapper: {
    paddingLeft: 50,
    width: "100%",
  },
  userNameText: {
    fontFamily: "Montserrat",
    fontSize: 32,
    fontWeight: "400",
    color: "#FFFFFF",
    maxWidth: 244,
  },
  graph: {
    width: dynamicImageWidth,
    height: dynamicImageHeight,
  },
  balanceCard: {
    position: "absolute",
    top: dynamicTop,
    borderRadius: 40,
    backgroundColor: "#FFFFFF",
    // padding: 32,
    paddingHorizontal: dynamicPaddingHorizontal,
    paddingVertical: dynamicPaddingVertical,
  },
  dots: {
    fontFamily: "SF Pro Rounded",
    fontSize: 14,
    fontWeight: "400",
  },
  firstLine: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "Montserrat",
    fontSize: 16,
    fontWeight: "400",
    color: "#000000",
  },
  balance: {
    fontFamily: "Montserrat",
    fontSize: 30,
    fontWeight: "700",
    color: "#2D99FF",
    marginTop: 8,
  },
  graphWrapper: {
    marginTop: 26,
  },
  buttonWrapper: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    alignItems: "center",
  },
});
