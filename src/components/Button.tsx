import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  Text,
} from "react-native";

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
      <View
        style={{
          paddingVertical: 16,
          backgroundColor: "#770FDF",
          borderRadius: 4,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: "#fff",
            fontFamily: "Sora_500Medium",
          }}
        >
          {props.title}
        </Text>
      </View>
    </Touchable>
  );
}
