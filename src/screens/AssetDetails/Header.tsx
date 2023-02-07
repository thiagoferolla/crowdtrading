import { Ionicons } from "@expo/vector-icons";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, View, Text, Dimensions } from "react-native";
import styles from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../store/configure";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function HeaderComponent(props: { code: string; goBack: () => void }) {
  const fund = useSelector((state: RootState) =>
    state.funds.funds.find((f) => f.code === props.code)
  );
  const { top } = useSafeAreaInsets();

  return (
    <View style={[styles.headerContainer, {paddingTop: top}]}>
      <View style={styles.headerBackButtonContainer}>
        <TouchableOpacity onPress={props.goBack}>
          <View>
            <Ionicons name="arrow-back-outline" size={24} />
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Text style={styles.headerTitle}>{fund?.name}</Text>
        <Text style={styles.headerSubtitle}>{fund?.code}</Text>
      </View>
      <View style={{ width: 60 }} />
    </View>
  );
}

export default function Header({
  navigation,
  route,
}): BottomTabNavigationOptions {
  return {
    header: () => {
      const { code } = route.params;

      return <HeaderComponent code={code} goBack={navigation.goBack} />;
    },
  };
}
