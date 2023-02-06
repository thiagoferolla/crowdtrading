import { View, Dimensions, Text } from "react-native";
import styles from "./styles";

export default function HintList() {
  const { width } = Dimensions.get("screen");
  const hints = ["Why should I invest here?", ""];

  return (
    <View style={styles.hintListContainer}>
      {hints.map((h, index) => (
        <View
          key={h}
          style={[
            styles.hintListCard,
            {
              width: (width - 40 - 16) / 2,
              marginLeft: index % 2 === 0 ? 0 : 16,
            },
          ]}
        >
          <Text style={styles.hintListCardTitle}>{h}</Text>
        </View>
      ))}
    </View>
  );
}
