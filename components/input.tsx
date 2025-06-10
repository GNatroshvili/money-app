// import { Stack } from "expo-router";
// import React, { useState } from "react";
// import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
// import { TextInput } from "react-native-paper";

// type InputProps = {
//   placeholder: string;
//   label: string;
//   type?: 'text' | 'date';
// };

// export default function Input({ placeholder, label, type = 'text' }: InputProps) {
//   const [value, setValue] = useState("");

//   // Validation functions
//   const isValidText = value.length >= 2;
//   const isValidDate = /^\d{2}-\d{2}-\d{4}$/.test(value);

//   // Determine if we should show checkmark based on input type
//   const showCheckmark = type === 'date' ? isValidDate : isValidText;

//   return (
//     <View style={styles.container}>
//       <StatusBar hidden />
//       <Stack.Screen options={{ headerShown: false }} />

//       {/* Label placed above the input */}
//       <Text style={styles.label}>{label}</Text>

//       <View style={styles.inputContainer}>
//         <TextInput
//           mode="flat"
//           placeholder={placeholder}
//           value={value}
//           onChangeText={setValue}
//           underlineColor="#ffffff"
//           activeUnderlineColor="#ffffff"
//           placeholderTextColor="#80E0FF"
//           textColor="#FFFFFF"
//           style={styles.input}
//           contentStyle={styles.inputContent}
//           theme={{
//             colors: {
//               background: "transparent",
//             },
//           }}
//         />
//         {showCheckmark && (
//           <Image
//             source={require('../assets/images/checkmark.png')}
//             style={styles.checkmark}
//           />
//         )}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//   },
//   label: {
//     color: "#80E0FF",
//     fontSize: 14,
//     fontWeight: '400',
//     paddingLeft: 5,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   input: {
//     flex: 1,
//     backgroundColor: "transparent",
//     fontSize: 14,
//     fontWeight: '400',
//     height: 40,
//     paddingHorizontal: 0,
//   },
//   inputContent: {
//     paddingLeft: 5,
//   },
//   checkmark: {
//     width: 18,
//     height: 13,
//     marginLeft: 10,
//     position: 'absolute',
//     right: 15,
//   },
// });

import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";

type InputProps = {
  placeholder: string;
  label: string;
  type?: 'text' | 'date';
  value: string;
  onChange: (value: string, isValid: boolean) => void;
};

export default function Input({
  placeholder,
  label,
  type = 'text',
  value,
  onChange,
}: InputProps) {
  const [internalValue, setInternalValue] = useState(value);

  const validate = (val: string): boolean => {
    return type === "date"
      ? /^\d{2}-\d{2}-\d{4}$/.test(val)
      : val.length >= 2;
  };

  useEffect(() => {
    const isValid = validate(internalValue);
    onChange(internalValue, isValid);
  }, [internalValue]);

  const showCheckmark = validate(internalValue);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          mode="flat"
          placeholder={placeholder}
          value={internalValue}
          onChangeText={setInternalValue}
          underlineColor="#ffffff"
          activeUnderlineColor="#ffffff"
          placeholderTextColor="#80E0FF"
          textColor="#FFFFFF"
          style={styles.input}
          contentStyle={styles.inputContent}
          theme={{ colors: { background: "transparent" } }}
        />
        {showCheckmark && (
          <Image
            source={require("../assets/images/checkmark.png")}
            style={styles.checkmark}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: "100%" },
  label: {
    color: "#80E0FF",
    fontSize: 14,
    fontWeight: "400",
    paddingLeft: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "transparent",
    fontSize: 14,
    fontWeight: "400",
    height: 40,
    paddingHorizontal: 0,
  },
  inputContent: {
    paddingLeft: 5,
  },
  checkmark: {
    width: 18,
    height: 13,
    marginLeft: 10,
    position: "absolute",
    right: 15,
  },
});
