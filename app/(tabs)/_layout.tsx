// import { Tabs } from "expo-router/tabs";
// import { Image, StatusBar, StyleSheet, View } from "react-native";

// export default function TabLayout() {
//   return (
//     <View style={{ flex: 1 }}>
//       {/* Hide Status Bar */}
//       <StatusBar hidden={true} />

//       <Tabs
//         screenOptions={{
//           headerShown: false,
//           tabBarShowLabel: false, // hide tab bar labels
//           tabBarStyle: styles.tabBar,
//           tabBarActiveTintColor: "#2B47FC",
//           tabBarInactiveTintColor: "#3A3A3A",
//         }}
//       >
//         <Tabs.Screen
//           name="wallet"
//           options={{
//             tabBarIcon: ({ focused }) => (
//               <Image
//                 source={require("../../assets/images/wallet.png")}
//                 style={[
//                   styles.tabIcon,
//                   { tintColor: focused ? "#2B47FC" : "#3A3A3A" },
//                 ]}
//               />
//             ),
//           }}
//         />
//         <Tabs.Screen
//           name="bell"
//           options={{
//             tabBarIcon: ({ focused }) => (
//               <Image
//                 source={require("../../assets/images/bell.png")}
//                 style={[
//                   styles.notification,
//                   { tintColor: focused ? "#2B47FC" : "#3A3A3A" },
//                 ]}
//               />
//             ),
//           }}
//         />
//         <Tabs.Screen
//           name="user"
//           options={{
//             tabBarIcon: ({ focused }) => (
//               <Image
//                 source={require("../../assets/images/user.png")}
//                 style={[
//                   styles.profile,
//                   { tintColor: focused ? "#2B47FC" : "#3A3A3A" },
//                 ]}
//               />
//             ),
//           }}
//         />
//       </Tabs>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   tabBar: {
//     backgroundColor: "#ffffff",
//     height: 108,
//     paddingTop: 35,
//   },
//   tabIcon: {
//     width: 26,
//     height: 25,
//   },
//   notification: {
//     width: 19,
//     height: 23,
//   },
//   profile: {
//     width: 21,
//     height: 25,
//   },
// });





import { Tabs } from "expo-router/tabs";
import React, { useEffect, useRef } from "react";
import { Animated, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import { MenuProvider, useMenu } from './context/MenuContext';

export default function RootLayout() {
  return (
    <MenuProvider>
      <LayoutContent />
    </MenuProvider>
  );
}

function LayoutContent() {
  const { menuVisible, closeMenu } = useMenu();
  const { width } = useWindowDimensions();
  const menuWidth = 288;
  const contentShiftAmount = 270;
  
  const slideAnim = useRef(new Animated.Value(-menuWidth)).current;
  const mainContentTranslateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animate burger menu in/out
    Animated.timing(slideAnim, {
      toValue: menuVisible ? 0 : -menuWidth,
      duration: 200,
      useNativeDriver: true,
    }).start();

    // Animate main content shifting right
    Animated.timing(mainContentTranslateX, {
      toValue: menuVisible ? contentShiftAmount : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [menuVisible]);

  return (
    <View style={{ flex: 1 }}>
      {/* Hide Status Bar */}
      <StatusBar hidden={true} />

      {/* Main Content (Tabs + Content) with Shift Animation */}
      <Animated.View 
        style={{ 
          flex: 1, 
          transform: [{ translateX: mainContentTranslateX }],
          overflow: 'hidden',
        }}
      >
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: [
              styles.tabBar, 
              menuVisible && styles.hiddenTabBar
            ],
            tabBarActiveTintColor: "#2B47FC",
            tabBarInactiveTintColor: "#3A3A3A",
          }}
        >
          <Tabs.Screen
            name="wallet"
            options={{
              tabBarIcon: ({ focused }) => (
                <Image
                  source={require("../../assets/images/wallet.png")}
                  style={[
                    styles.tabIcon,
                    { tintColor: focused ? "#2B47FC" : "#3A3A3A" },
                  ]}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="bell"
            options={{
              tabBarIcon: ({ focused }) => (
                <Image
                  source={require("../../assets/images/bell.png")}
                  style={[
                    styles.notification,
                    { tintColor: focused ? "#2B47FC" : "#3A3A3A" },
                  ]}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="user"
            options={{
              tabBarIcon: ({ focused }) => (
                <Image
                  source={require("../../assets/images/user.png")}
                  style={[
                    styles.profile,
                    { tintColor: focused ? "#2B47FC" : "#3A3A3A" },
                  ]}
                />
              ),
            }}
          />
        </Tabs>
      </Animated.View>

      {/* Overlay that covers entire screen */}
      {menuVisible && (
        <TouchableOpacity
          style={StyleSheet.absoluteFill}
          activeOpacity={1}
          onPress={closeMenu}
        >
          <Animated.View 
            style={[
              styles.overlay, 
              { opacity: menuVisible ? 0.3 : 0 }
            ]} 
          />
        </TouchableOpacity>
      )}
      
      {/* Side Menu */}
      <Animated.View style={[
        styles.sideMenu, 
        { 
          transform: [{ translateX: slideAnim }],
          width: menuWidth,
        }
      ]}>
        <TouchableOpacity onPress={closeMenu}>
          <Text style={styles.closeText}>Close</Text>
        </TouchableOpacity>
        <Text style={styles.menuItem}>Home</Text>
        <Text style={styles.menuItem}>Profile</Text>
        <Text style={styles.menuItem}>Settings</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#ffffff",
    height: 108,
    paddingTop: 35,
  },
  hiddenTabBar: {
    zIndex: -1,
    elevation: -1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "#000000",
  },
  sideMenu: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    backgroundColor: "#FFFFFF",
    zIndex: 30,
    padding: 20,
    elevation: 6,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20
  },
  closeText: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
  },
  menuItem: {
    fontSize: 16,
    paddingVertical: 12,
    fontWeight: "400",
  },
  tabIcon: {
    width: 26,
    height: 25,
  },
  notification: {
    width: 19,
    height: 23,
  },
  profile: {
    width: 21,
    height: 25,
  },
});