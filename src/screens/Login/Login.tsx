import { NavigationProp, useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, TouchableWithoutFeedback } from "react-native";
import Button from "../../components/Button";
import { MainNavigatorScreens } from "../../navigation/types";

function Login() {
  const navigation = useNavigation<NavigationProp<MainNavigatorScreens>>();

  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      <View style={{ paddingHorizontal: 20 }}>
        <Text
          style={{
            marginTop: 20,
            marginBottom: 34,
            fontFamily: "Sora_600SemiBold",
            fontSize: 18,
            alignSelf: "center",
          }}
        >
          Login
        </Text>

        <TextInput placeholder="john@doe.com" />
        <TextInput placeholder="Minimum 8 characters" />

        <Button
          title="Login"
          onPress={() => navigation.navigate("TabNavigator")}
        />

        <TouchableWithoutFeedback onPress={() => navigation.navigate("SignUp")}>
          <Text
            style={{
              alignSelf: "center",
              marginTop: 13,
              fontFamily: "Sora_400Regular",
              color: "#A0A0A0",
            }}
          >
            Don't have an account?{" "}
            <Text style={{ textDecorationLine: "underline" }}>Sign up</Text>{" "}
            here
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

export default Login;
