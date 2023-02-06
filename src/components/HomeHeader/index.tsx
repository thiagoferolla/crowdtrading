import PortfolioBalance from "../PortfolioBalance";
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Person from "./icons/person";
import Bell from "./icons/bell";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

function HomeHeader() {
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: top }}>
      <View style={styles.headerContainer}>
        <View style={styles.personContainer}>
          <Person />
        </View>

        <View style={styles.accountBalanceContainer}>
          <Text style={styles.accountBalance}>Account: $1,457.23</Text>

          <Ionicons name="chevron-down" size={18} color="#000" />
        </View>

        <View style={styles.bellContainer}>
          <Bell />
        </View>
      </View>

      <PortfolioBalance />
    </View>
  );
}

export default HomeHeader;
