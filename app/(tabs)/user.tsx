import DataItem from "@/components/dataItem";
import LogoutButton from "@/components/logoutButton";
import UserData from "@/components/userData";
import { Image, StyleSheet, Text, View } from "react-native";

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
    paddingTop: 100,
  },
  userDataWrapper: {
    height: 60,
    width: 323,
    marginTop: 30,
  },
  dataItemWrapper: {
    gap: 25,
    height: 307,
    width: 323,
    marginTop: 40,
  },
  logoutButtonWrapper: {
    position: "absolute",
    bottom: 45,
    width: 315,
  },
  titleWrapper: {
    width: 323,
    alignItems: "flex-start",
  },
  title: {
    fontFamily: "Montserrat",
    fontSize: 40,
    fontWeight: "700",
    color: "#000000",
  },
  decorationWrapper : {
    position: "absolute",
    top: 0,
    right: 0
  },
  decoration: {
    height: 251,
    width: 235
  }
});
