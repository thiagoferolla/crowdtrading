import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, TouchableWithoutFeedback, ScrollView } from "react-native";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import { MainNavigatorScreens } from "../../navigation/types";
import styles from "./styles";

function Login() {
  const navigation = useNavigation<NavigationProp<MainNavigatorScreens>>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView style={styles.mainContainer}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        label="Email"
        placeholder="john@doe.com"
        value={email}
        onValueChange={setEmail}
      />

      <View style={styles.passwordInputContainer}>
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
        <Text style={styles.signUpHintText}>
          Don't have an account?{" "}
          <Text style={{ textDecorationLine: "underline" }}>Sign up</Text> here
        </Text>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

export default Login;
