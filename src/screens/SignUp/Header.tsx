import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MainNavigatorScreens } from "../../navigation/types";
import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

export default function CustomSignUpHeaderOptions({
  navigation,
}: {
  navigation: NativeStackNavigationProp<MainNavigatorScreens>;
}): NativeStackNavigationOptions {
  return {
    headerLeft: () => (
      <TouchableOpacity onPress={navigation.goBack}>
        <View>
          <Ionicons name="arrow-back-outline" size={24} />
        </View>
      </TouchableOpacity>
    ),
    headerTitle: () => (
      <View style={styles.headerBarProgressMainContainer}>
        <View
          style={[
            styles.headerBarProgress,
            {
              marginRight: 5,
            },
          ]}
        />
        <View
          style={[
            styles.headerBarProgress,
            {
              marginRight: 5,
            },
          ]}
        />
        <View style={styles.headerBarProgress} />
      </View>
    ),
  };
}
