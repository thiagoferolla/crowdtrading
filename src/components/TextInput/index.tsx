import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  TextInput as RNTextInput,
  Text,
  View,
  TouchableOpacity,
  TextInputProps as RNTextInputProps,
} from "react-native";
import styles from "./styles";

interface TextInputProps {
  label: string;
  placeholder: string;
  value: string;
  onValueChange: (value: string) => void;
  sensitive?: boolean;
  autoCapitalize?: RNTextInputProps["autoCapitalize"];
  autoComplete?: RNTextInputProps["autoComplete"];
  keyboardType?: RNTextInputProps["keyboardType"];
}

export default function TextInput(props: TextInputProps) {
  const [textHidden, setTextHidden] = useState(true);

  return (
    <>
      <Text style={styles.label}>{props.label}</Text>

      <View style={styles.inputContainer}>
        <RNTextInput
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.onValueChange}
          placeholderTextColor="#CFCFCF"
          style={styles.input}
          secureTextEntry={props.sensitive && textHidden}
        />

        {Boolean(props.sensitive) && (
          <TouchableOpacity onPress={() => setTextHidden((t) => !t)}>
            <Ionicons
              name={textHidden ? "eye-outline" : "eye-off-outline"}
              color={"#A0A0A0"}
              size={18}
            />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
}
