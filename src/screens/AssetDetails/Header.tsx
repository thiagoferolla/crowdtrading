import { Ionicons } from "@expo/vector-icons";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "./styles";

export default function Header({
  navigation,
  route,
}): BottomTabNavigationOptions {
  return {
    headerLeft: () => (
      <View style={{ marginLeft: 20 }}>
        <TouchableOpacity onPress={navigation.goBack}>
          <View>
            <Ionicons name="arrow-back-outline" size={24} />
          </View>
        </TouchableOpacity>
      </View>
    ),
    headerTitle: () => {
      return (
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={styles.headerTitle}>Wind Fund</Text>
          <Text style={styles.headerSubtitle}>{route.params?.code}</Text>
        </View>
      );
    },
  };
}
