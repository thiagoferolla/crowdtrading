import { View, Text } from "react-native";
import Image from "./image";
import styles from "./styles";

export default function CarbonCreditTipCard() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{"Learn more about\ncarbon credits"}</Text>

        <Text style={styles.subtitle}>Check out our top tips!</Text>
      </View>

      <Image width={94} height={87} />
    </View>
  );
}
