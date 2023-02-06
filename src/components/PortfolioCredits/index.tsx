import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import Button from "../Button";
import PortfolioIcon from "./icon";
import styles from "./styles";

interface PortfolioCreditsProps {
  percentage: string;
  percentageDirection: "up" | "down";
  daysSinceLastPurchase: number;
  credits: number;
  totalValue: string;
  retiredCredits: number;
}

export default function PortfolioCredits(props: PortfolioCreditsProps) {
  const iconColor = props.percentageDirection === "up" ? "#0FDF8F" : "#EE8688";
  const iconRotation = props.percentageDirection === "up" ? "-45deg" : "45deg";

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <PortfolioIcon />
        <Text style={styles.title}>Your Portfolio</Text>
      </View>

      <View>
        <View style={styles.creditsContainer}>
          <Text style={styles.numberOfCredits}>{props.credits} credits</Text>

          <Text style={styles.valueOfCredits}>{props.totalValue}</Text>
        </View>

        <View style={styles.creditsSubContainer}>
          <View style={styles.percentageContainer}>
            <Ionicons
              name={"arrow-forward"}
              size={16}
              color={iconColor}
              style={{ transform: [{ rotate: iconRotation }] }}
            />

            <Text
              style={[
                styles.percentage,
                {
                  color: iconColor,
                },
              ]}
            >
              {props.percentage}
            </Text>
          </View>

          <Text style={styles.lastPurchase}>
            Last purchase {props.daysSinceLastPurchase}d ago
          </Text>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <Button.Outline title="Sell" onPress={() => null} />
        </View>

        <View style={styles.button}>
          <Button title="Retire Credits" color="#0FDF8F" onPress={() => null} />
        </View>
      </View>

      <Text style={styles.retiredCredits}>
        You’ve previously retired {props.retiredCredits} credits of this asset
      </Text>
    </View>
  );
}
