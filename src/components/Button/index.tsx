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
}

export default function Button(props: ButtonProps) {
  const Touchable = Platform.select({
    ios: TouchableOpacity,
    // @ts-expect-error - TouchableOpacity and TouchableNativeFeedback are compatible for what this component needs
    android: TouchableNativeFeedback,
  });

  return (
    <Touchable onPress={props.onPress}>
      <View style={styles.container}>
        <Text style={styles.label}>{props.title}</Text>
      </View>
    </Touchable>
  );
}
