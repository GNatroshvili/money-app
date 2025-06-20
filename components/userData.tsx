import { Stack } from "expo-router";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

const dynamicHeight = screenHeight / 3.4;
const dynamicWidth = screenWidth / 1.65;
const dynamicUserHeight = screenHeight / 14.2;

export default function UserData() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.userDataWrapper}>
        <View>
          <Image
            source={require("../assets/images/profilePicture.png")}
            style={styles.profileImage}
          />
        </View>
        <View>
          <Text style={styles.name}>Charles Leclerc</Text>
          <Text style={styles.userName}>Online</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userDataWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  profileImage: {
    width: dynamicUserHeight,
    height: dynamicUserHeight,
    borderRadius: 1,
  },
  name: {
    fontFamily: "Montserrat",
    fontSize: 19,
    fontWeight: "700",
    color: "#2743FD",
  },
  userName: {
    fontFamily: "Montserrat",
    fontSize: 18,
    fontWeight: "300",
    color: "#2743FD",
  },
});
