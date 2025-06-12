import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

type DataItemProps = {
  title: string;
  value: string;
};

export default function DataItem({ title, value }: DataItemProps) {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <View>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.valueWrapper}>
          <Text style={styles.value}>{value}</Text>
        </View>
        <View style={styles.line} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: "#DEE1EF",
    width: 323,
  },
  title: {
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "Inter",
    color: "#3A3A3A",
  },
  value: {
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "Inter",
    color: "#2743FD",
  },
  titleWrapper: {
    paddingLeft: 5,
  },
  valueWrapper: {
    paddingLeft: 5,
    marginTop: 16,
  },
});
