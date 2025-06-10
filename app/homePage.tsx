import { Stack } from "expo-router";
import {
  StatusBar,
  StyleSheet,
  View
} from "react-native";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Stack.Screen options={{ headerShown: false }} />

    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end", // ensures tab bar is at the bottom
  },
});
