import Notifications from "@/components/Notifications";
import SearchInput from "@/components/SearchInput";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <SearchInput />
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>
          You can check your notifications here.
        </Text>
      </View>
      <Notifications/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  titleWrapper: {
    marginTop: 40,
    maxWidth: 224
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "Montserrat",
    color: "#3A3A3A",
  },
});
