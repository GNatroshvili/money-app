import Notifications from "@/components/Notifications";
import SearchInput from "@/components/SearchInput";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <SearchInput />
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>You can check your notifications here.</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.notificationsWrapper}
        showsVerticalScrollIndicator={false}
      >
        <Notifications />
        <Notifications />
        <Notifications />
        <Notifications />
        <Notifications />
        <Notifications />
        <Notifications />
        <Notifications />
        <Notifications />
        <Notifications />
        <Notifications />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingTop: 84,
  },
  inputWrapper: {
    alignItems: "center",
  },
  titleWrapper: {
    marginTop: 40,
    maxWidth: 224,
    // marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "Montserrat",
    color: "#3A3A3A",
  },
  notificationsWrapper: {
    gap: 20,
    paddingTop: 40,
  },
});
