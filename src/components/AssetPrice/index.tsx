import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

interface AssetPriceProps {
  date: string;
  currentPrice: string;
  totalChange: string;
  percentageChange: string;
  percentageDirection: "up" | "down";
}

export default function AssetPrice(props: AssetPriceProps) {
  const iconColor = props.percentageDirection === "up" ? "#0FDF8F" : "#EE8688";
  const iconRotation = props.percentageDirection === "up" ? "-45deg" : "45deg";

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.price}>{props.currentPrice}</Text>
        <View style={{ flexDirection: "row" }}>
          <Ionicons
            name={"arrow-forward"}
            size={18}
            color={iconColor}
            style={{ transform: [{ rotate: iconRotation }] }}
          />

          <Text style={[styles.percentage, { color: iconColor }]}>
            {props.percentageChange} ({props.totalChange})
          </Text>
        </View>
      </View>

      <Text style={styles.date}>{props.date}</Text>
    </View>
  );
}
