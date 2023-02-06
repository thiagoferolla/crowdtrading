import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import CoinIcon from "./coin";

export default function PortfolioBalance() {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingBottom: 30,
        paddingHorizontal: 20,
        paddingTop: 16,
        borderBottomWidth: 1,
        borderColor: "#F4F4F4",
        alignItems: "flex-end",
      }}
    >
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontFamily: "Sora_400Regular",
            fontSize: 12,
            color: "#000",
            marginBottom: 5,
          }}
        >
          Portfolio
        </Text>

        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          <Text
            style={{
              fontFamily: "Sora_600SemiBold",
              fontSize: 24,
            }}
          >
            $1,245.23
          </Text>
          <View style={{ flexDirection: "row", marginLeft: 2 }}>
            <Ionicons
              name={"arrow-forward"}
              size={18}
              color={"#0FDF8F"}
              style={{ transform: [{ rotate: "-45deg" }] }}
            />
            <Text
              style={{
                color: "#0FDF8F",
                fontFamily: "Sora_400Regular",
                fontSize: 14,
              }}
            >
              31.82%
            </Text>
          </View>
        </View>
      </View>

      <View>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: "#F7EFFF",
              paddingHorizontal: 9,
              paddingVertical: 10,
              borderRadius: 4,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <CoinIcon width={14} height={10} color="#770FDF" />
            <Text
              style={{
                fontFamily: "Sora_600SemiBold",
                fontSize: 11,
                color: "#770FDF",
                marginLeft: 5,
              }}
            >
              Earn Rewards
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
