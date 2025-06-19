import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

type Variant = "white" | "blue";

interface SearchInputProps extends TextInputProps {
  variant?: Variant;
}

const SearchInput: React.FC<SearchInputProps> = ({ variant = "white", ...props }) => {
  const isBlue = variant === "blue";

  const containerStyle: ViewStyle = {
    ...styles.container,
    backgroundColor: isBlue ? "#05199E" : "#F5F6FA",
  };

  const inputStyle: TextStyle = {
    ...styles.input,
    color: isBlue ? "#80E0FF" : "#1A5CFF",
  };

  const placeholderTextColor = isBlue ? "#80E0FF" : "#1A5CFF";

  const iconColor = isBlue ? "#80E0FF" : "#1A5CFF";

  return (
    <View style={containerStyle}>
      <Ionicons
        name="search-outline"
        size={20}
        color={iconColor}
        style={styles.icon}
      />
      <TextInput
        style={inputStyle}
        placeholder="Search"
        placeholderTextColor={placeholderTextColor}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    paddingHorizontal: 12,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});

export default SearchInput;
