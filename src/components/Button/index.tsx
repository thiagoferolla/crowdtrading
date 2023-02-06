import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import styles from "./styles";

interface ButtonProps {
  title: string;
  onPress: () => void;
  color?: string;
}

export default function Button(props: ButtonProps) {
  const Touchable = Platform.select({
    ios: TouchableOpacity,
    // @ts-expect-error - TouchableOpacity and TouchableNativeFeedback are compatible for what this component needs
    android: TouchableNativeFeedback,
  });

  return (
    <Touchable onPress={props.onPress}>
      <View
        style={[
          styles.container,
          { backgroundColor: props.color || "#770FDF" },
        ]}
      >
        <Text style={styles.label}>{props.title}</Text>
      </View>
    </Touchable>
  );
}

Button.Outline = function (props: ButtonProps) {
  const Touchable = Platform.select({
    ios: TouchableOpacity,
    // @ts-expect-error - TouchableOpacity and TouchableNativeFeedback are compatible for what this component needs
    android: TouchableNativeFeedback,
  });

  return (
    <Touchable onPress={props.onPress}>
      <View style={[styles.container, styles.outlineContainer]}>
        <Text style={[styles.label, { color: props.color || "#770FDF" }]}>
          {props.title}
        </Text>
      </View>
    </Touchable>
  );
};