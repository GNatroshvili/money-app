import DataItem from "@/components/dataItem";
import LogoutButton from "@/components/logoutButton";
import UserData from "@/components/userData";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

const dynamicHeight = screenHeight / 3.4;
const dynamicWidth = screenWidth / 1.65;
const dynamicPaddingTop = screenHeight / 8.5;
const dynamicMarginTop = screenHeight / 21.3;
const dynamicMarginTop2 = screenHeight / 28.4;
const dynamicGap = screenHeight / 34;
const dynamicItemWrapperSize = screenHeight / 2.8;
const dynamicBottom = screenHeight <= 700 ? 20 : screenHeight / 18.9;
const dynamicUserHeight = screenHeight / 14.2;

export default function User() {
  return (
    <View style={styles.container}>
      <View style={styles.decorationWrapper}>
        <Image
          source={require("../../assets/images/decoration.png")}
          style={styles.decoration}
        />
      </View>

      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Profile</Text>
      </View>

      <View style={styles.userDataWrapper}>
        <UserData />
      </View>

      <View style={styles.dataItemWrapper}>
        <DataItem title="username" value="ScuderiaFerrari" />
        <DataItem title="First Name" value="Leclerc" />
        <DataItem title="Last Name" value="Charles" />
        <DataItem title="Date of Birth" value="9-10-1995" />
      </View>

      <View style={styles.logoutButtonWrapper}>
        <LogoutButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: dynamicPaddingTop,
  },
  userDataWrapper: {
    height: dynamicUserHeight,
    width: 323,
    marginTop: dynamicMarginTop2,
  },
  dataItemWrapper: {
    gap: dynamicGap,
    height: dynamicItemWrapperSize,
    width: 323,
    marginTop: dynamicMarginTop,
  },
  logoutButtonWrapper: {
    position: "absolute",
    bottom: dynamicBottom,
    width: 315,
  },
  titleWrapper: {
    width: 323,
    alignItems: "flex-start",
  },
  title: {
    fontFamily: "Montserrat",
    fontSize: dynamicMarginTop,
    fontWeight: "700",
    color: "#000000",
  },
  decorationWrapper: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  decoration: {
    height: dynamicHeight,
    width: dynamicWidth,
  },
});
