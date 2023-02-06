import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MainNavigatorScreens } from "../../navigation/types";
import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            marginRight: 5,
            borderRadius: 99,
            backgroundColor: "#F4F4F4",
            height: 5,
            width: 50,
          }}
        />
        <View
          style={{
            marginRight: 5,
            borderRadius: 99,
            backgroundColor: "#F4F4F4",
            height: 5,
            width: 50,
          }}
        />
        <View
          style={{
            borderRadius: 99,
            backgroundColor: "#F4F4F4",
            height: 5,
            width: 50,
          }}
        />
      </View>
    ),
  };
}
