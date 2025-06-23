import { useRouter } from "expo-router";
import { Tabs } from "expo-router/tabs";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions
} from "react-native";
import { MenuProvider, useMenu } from './context/MenuContext';

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');
const isSmallScreen = screenHeight < 750;

const dynamicHeight = screenHeight / 7.8;
const dynamBottom = screenHeight / 29.3;



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
  const router = useRouter();

  const slideAnim = useRef(new Animated.Value(-menuWidth)).current;
  const mainContentTranslateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: menuVisible ? 0 : -menuWidth,
      duration: 200,
      useNativeDriver: true,
    }).start();

    Animated.timing(mainContentTranslateX, {
      toValue: menuVisible ? contentShiftAmount : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [menuVisible]);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden={true} />

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
              menuVisible && styles.hiddenTabBar,
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

      {menuVisible && (
        <TouchableOpacity
          style={StyleSheet.absoluteFill}
          activeOpacity={1}
          onPress={closeMenu}
        >
          <Animated.View
            style={[
              styles.overlay,
              { opacity: menuVisible ? 0.3 : 0 },
            ]}
          />
        </TouchableOpacity>
      )}

      <Animated.View
        style={[
          styles.sideMenu,
          {
            transform: [{ translateX: slideAnim }],
            width: menuWidth,
          },
        ]}
      >
        <View style={styles.userDataWrapper}>
          <View>
            <Image
              source={require("../../assets/images/profilePicture.png")}
              style={styles.profileImage}
            />
          </View>
          <View>
            <Text style={styles.name}>Charles Leclerc</Text>
            <Text style={styles.userName}>@ScuderiaFerrari</Text>
          </View>
        </View>

        <View style={styles.menuItems}>
          <View style={styles.menuItemWrapper}>
            <View style={styles.leftSide}>
              <Image
                source={require("../../assets/images/payments.png")}
                style={styles.walletIcon}
              />
              <Text style={styles.menuItem}>Payments</Text>
            </View>
            <View style={styles.rightSide}>
              <Image
                source={require("../../assets/images/blueRight.png")}
                style={styles.blueArrow}
              />
            </View>
          </View>

          {/* Modified Transactions Item to Navigate */}
          <TouchableOpacity
            style={styles.menuItemWrapper}
            onPress={() => {
              closeMenu();
              router.push("/transactions");
            }}
          >
            <View style={styles.leftSide}>
              <Image
                source={require("../../assets/images/transactions.png")}
                style={styles.transactionsIcon}
              />
              <Text style={styles.menuItem}>Transactions</Text>
            </View>
            <View style={styles.rightSide}>
              <Image
                source={require("../../assets/images/blueRight.png")}
                style={styles.blueArrow}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItemWrapper}
            onPress={() => {
              closeMenu();
              router.push("/cards");
            }}
          >
            <View style={styles.leftSide}>
              <Image
                source={require("../../assets/images/cards.png")}
                style={styles.CardsIcon}
              />
              <Text style={styles.menuItem}>My Cards</Text>
            </View>
            <View style={styles.rightSide}>
              <Image
                source={require("../../assets/images/blueRight.png")}
                style={styles.blueArrow}
              />
            </View>
          </TouchableOpacity>

          <View style={styles.menuItemWrapper}>
            <View style={styles.leftSide}>
              <Image
                source={require("../../assets/images/promotions.png")}
                style={styles.promotionsIcon}
              />
              <Text style={styles.menuItem}>Promotions</Text>
            </View>
            <View style={styles.rightSide}>
              <Image
                source={require("../../assets/images/blueRight.png")}
                style={styles.blueArrow}
              />
            </View>
          </View>

          <View style={styles.menuItemWrapper}>
            <View style={styles.leftSide}>
              <Image
                source={require("../../assets/images/savings.png")}
                style={styles.savingsIcon}
              />
              <Text style={styles.menuItem}>Savings</Text>
            </View>
            <View style={styles.rightSide}>
              <Image
                source={require("../../assets/images/blueRight.png")}
                style={styles.blueArrow}
              />
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.closeWrapper} onPress={closeMenu}>
          <Text style={styles.close}>Sign Out</Text>
          <Image
            source={require("../../assets/images/logout.png")}
            style={styles.logOutIcon}
          />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#ffffff",
    height: dynamicHeight,
    paddingTop: dynamBottom,
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
    padding: 32,
    elevation: 6,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  closeWrapper: {
    position: "absolute",
    bottom: 81,
    left: 32,
    right: 32,
    borderWidth: 1,
    borderColor: "#556BFF",
    borderRadius: 28,
    alignItems: 'center',
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 24,
    paddingRight: 24,
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
  },
  close: {
    fontSize: 18,
    fontWeight: "400",
    fontFamily: "Montserrat",
    color: "#556BFF",
  },
  menuItem: {
    fontSize: 18,
    fontWeight: "400",
    color: "#2B47FC",
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
  menuItemWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  walletIcon: {
    width: 18,
    height: 18,
  },
  transactionsIcon: {
    width: 11,
    height: 15,
  },
  CardsIcon: {
    width: 19,
    height: 15,
  },
  promotionsIcon: {
    width: 20,
    height: 20,
  },
  savingsIcon: {
    width: 18,
    height: 21,
  },
  menuItems: {
    gap: 30,
    marginTop: 50,
  },
  leftSide: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  rightSide: {
    alignItems: "center",
  },
  blueArrow: {
    width: 7,
    height: 12,
  },
  logOutIcon: {
    width: 21,
    height: 20,
  },
  userDataWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 36,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 1,
  },
  name: {
    fontFamily: "Montserrat",
    fontSize: 16,
    fontWeight: "700",
    color: "#000000",
  },
  userName: {
    fontFamily: "Montserrat",
    fontSize: 15,
    fontWeight: "400",
    color: "#000000",
  },
});