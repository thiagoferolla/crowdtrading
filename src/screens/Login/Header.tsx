import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MainNavigatorScreens } from "../../navigation/types";
import { View } from "react-native";
import styles from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function HeaderComponent() {
  const { top } = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.headerContainer,
        {
          paddingTop: top,
          height: 41 + top,
        },
      ]}
    />
  );
}

export default function CustomLoginOptions(): NativeStackNavigationOptions {
  return {
    header: () => <HeaderComponent />,
  };
}
