import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MainNavigatorScreens } from "../../navigation/types";
import { Dimensions, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function HeaderComponent(props: { goBack: () => void }) {
  const { width } = Dimensions.get("window");
  const { top } = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.headerContainer,
        {
          paddingTop: top,
        },
      ]}
    >
      <View style={styles.headerBackButtonContainer}>
        <TouchableOpacity onPress={props.goBack}>
          <View>
            <Ionicons name="arrow-back-outline" size={24} />
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={[styles.headerBarProgressMainContainer, { width: width - 120 }]}
      >
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

      <View style={{ width: 60 }} />
    </View>
  );
}

export default function CustomSignUpHeaderOptions({
  navigation,
}: {
  navigation: NativeStackNavigationProp<MainNavigatorScreens>;
}): NativeStackNavigationOptions {
  return {
    header: () => <HeaderComponent goBack={navigation.goBack} />,
  };
}
