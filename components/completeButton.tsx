// import React from "react";
// import {
//     Image,
//     StatusBar,
//     StyleSheet,
//     Text,
//     TouchableOpacity,
//     View,
// } from "react-native";

// type OtpButtonProps = {
//   text: string;
//   onPress?: () => void;
//   disabled?: boolean;
// };

// export default function CompleteButton({
//   text,
//   onPress,
//   disabled = false,
// }: OtpButtonProps) {
//   return (
//     <View style={styles.container}>
//       <StatusBar hidden />

//       <TouchableOpacity
//         style={[styles.button, styles.shadow]}
//         onPress={onPress}
//         disabled={disabled}
//         activeOpacity={disabled ? 1 : 0.7}
//       >
//         <View style={styles.buttonInner}>
//           <View style={styles.centerWrapper}>
//             <Text style={styles.buttonText}>{text}</Text>
//             <Image
//               source={require("../assets/images/grayMark.png")}
//               resizeMode="cover"
//               style={styles.grayMark}
//             />
//           </View>
//           {disabled && <View style={styles.disabledOverlay} />}
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: 24,
//   },
//   button: {
//     width: 315,
//     height: 72,
//     borderRadius: 28,
//     overflow: "hidden",
//   },
//   buttonInner: {
//     flex: 1,
//     backgroundColor: "#FFFFFF",
//     borderRadius: 28,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   centerWrapper: {
//     zIndex: 2,
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 10,
//   },
//   buttonText: {
//     color: "#C8C8C8",
//     fontSize: 20,
//     fontWeight: "600",
//   },
//   grayMark: {
//     width: 18,
//     height: 13,
//   },
//   disabledOverlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: "#FFFFFF80",
//     zIndex: 5,
//     borderRadius: 28,
//   },
//   shadow: {
//     shadowColor: "#1433FF",
//     shadowOffset: {
//       width: 0,
//       height: 6,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 10,
//     elevation: 8,
//   },
// });

import React from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type OtpButtonProps = {
  text: string;
  onPress?: () => void;
  disabled?: boolean;
  textColor?: string;
  useBlueMark?: boolean;
  border?: boolean;
};

export default function CompleteButton({
  text,
  onPress,
  disabled = false,
  textColor = "#C8C8C8",
  useBlueMark = false,
  border = false,
}: OtpButtonProps) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <TouchableOpacity
        style={[
          styles.button,
          styles.shadow,
          border && styles.borderStyle,
        ]}
        onPress={onPress}
        disabled={disabled}
        activeOpacity={disabled ? 1 : 0.7}
      >
        <View style={styles.buttonInner}>
          <View style={styles.centerWrapper}>
            <Text style={[styles.buttonText, { color: textColor }]}>
              {text}
            </Text>
            <Image
              source={
                useBlueMark
                  ? require("../assets/images/blueMark.png")
                  : require("../assets/images/grayMark.png")
              }
              resizeMode="cover"
              style={styles.grayMark}
            />
          </View>
          {disabled && <View style={styles.disabledOverlay} />}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    width: 315,
    height: 72,
    borderRadius: 28,
    overflow: "hidden",
  },
  borderStyle: {
    borderWidth: 1,
    borderColor: "#2743FD",
    borderRadius: 28,
  },
  buttonInner: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  centerWrapper: {
    zIndex: 2,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "600",
  },
  grayMark: {
    width: 18,
    height: 13,
  },
  disabledOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#FFFFFF80",
    zIndex: 5,
    borderRadius: 28,
  },
  shadow: {
    shadowColor: "#1B39FF",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 8,
  },
});
