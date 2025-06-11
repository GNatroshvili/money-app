import { Tabs } from "expo-router/tabs";
import { Image, StatusBar, StyleSheet, View } from "react-native";

export default function TabLayout() {
  return (
    <View style={{ flex: 1 }}>
      {/* Hide Status Bar */}
      <StatusBar hidden={true} />

      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false, // hide tab bar labels
          tabBarStyle: styles.tabBar,
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
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#ffffff",
    height: 108,
    paddingTop: 35,
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
