import { Stack } from "expo-router";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

const dynamicPaddingVertical = screenHeight / 42.6;
const dynamicPaddingHorizontal = screenWidth / 16.3;
const dynamicHeight = screenHeight / 11.8;

export default function LogoutButton() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <TouchableOpacity style={styles.closeWrapper}>
        <Text style={styles.close}>Sign Out</Text>
        <Image
          source={require("../assets/images/logout.png")}
          style={styles.logOutIcon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  closeWrapper: {
    width: 315,
    height: dynamicHeight,
    borderWidth: 1,
    borderColor: "#2743FD",
    borderRadius: 28,
    alignItems: "center",
    flexDirection: "row",
    paddingTop: dynamicPaddingVertical,
    paddingBottom: dynamicPaddingVertical,
    paddingLeft: dynamicPaddingHorizontal,
    paddingRight: dynamicPaddingHorizontal,
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
  },

  close: {
    fontSize: 24,
    fontWeight: "400",
    fontFamily: "Montserrat",
    color: "#2743FD",
  },
  logOutIcon: {
    width: 25,
    height: 24,
  },
});
