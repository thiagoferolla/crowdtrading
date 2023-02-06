import { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import NewsCard from "./NewsCard";
import styles from "./styles";

export default function FundBreakdown() {
  const options = ["Highlighted", "Value", "Vintage", "Registry"];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fund Breakdown</Text>

      <View style={styles.sectionsContainer}>
        {options.map((op) => (
          <View key={op} style={{ marginRight: 20 }}>
            <TouchableOpacity onPress={() => setSelectedOption(op)}>
              <View
                style={{
                  borderBottomColor: "#770FDF",
                  borderBottomWidth: op === selectedOption ? 2 : 0,
                }}
              >
                <Text
                  style={[
                    styles.sectionTitle,
                    {
                      color: op === selectedOption ? "#000000" : "#A0A0A0",
                    },
                  ]}
                >
                  {op}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <ScrollView horizontal>
        <View style={{ width: 20 }} />
        <NewsCard
          image={require("./mock_images/Background1.png")}
          logo={require("./mock_images/logo1.png")}
          description="Aspira is building a modular, direct air capture system with the energy supply integrated into the modules."
        />
        <NewsCard
          image={require("./mock_images/Background2.png")}
          logo={require("./mock_images/logo2.png")}
          description="uses renewable geothermal energy and waste heat to capture CO₂ directly from the air."
        />
      </ScrollView>
    </View>
  );
}
