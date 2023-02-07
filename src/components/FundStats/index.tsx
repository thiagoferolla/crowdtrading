import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, Dimensions } from "react-native";

interface FundStatsProps {
  data: { title: string; value: string }[];
}

export default function FundStats(props: FundStatsProps) {
  const { width } = Dimensions.get("screen");

  return (
    <View style={{ marginTop: 40, marginBottom: 40, paddingHorizontal: 20 }}>
      <Text
        style={{
          fontSize: 17,
          fontFamily: "Sora_600SemiBold",
          color: "#000000",
          marginBottom: 20,
        }}
      >
        Info & Stats
      </Text>

      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {props.data.map((item) => (
          <View
            style={{ width: (width - 40) / 2, marginBottom: 18 }}
            key={item.title}
          >
            <View
              style={{
                flexDirection: "row",
                marginBottom: 8,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#A0A0A0",
                  fontSize: 14,
                  fontFamily: "Sora_400Regular",
                  marginRight: 4,
                }}
              >
                {item.title}
              </Text>

              <Ionicons
                name="information-circle-outline"
                size={16}
                color="#A0A0A0"
              />
            </View>

            <Text
              style={{
                color: "#000000",
                fontSize: 14,
                fontFamily: "Sora_400Regular",
              }}
            >
              {item.value}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
