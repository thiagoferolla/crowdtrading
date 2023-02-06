import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, TouchableWithoutFeedback, ScrollView } from "react-native";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import { MainNavigatorScreens } from "../../navigation/types";

function Login() {
  const navigation = useNavigation<NavigationProp<MainNavigatorScreens>>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView
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

        <TextInput
          label="Email"
          placeholder="john@doe.com"
          value={email}
          onValueChange={setEmail}
        />

        <View style={{ marginTop: 20, marginBottom: 37 }}>
          <TextInput
            label="Password"
            placeholder="Minimum 8 characters"
            value={password}
            onValueChange={setPassword}
            sensitive
          />
        </View>

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
    </ScrollView>
  );
}

export default Login;
