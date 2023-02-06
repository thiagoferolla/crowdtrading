import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  TextInput as RNTextInput,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

interface TextInputProps {
  label: string;
  placeholder: string;
  value: string;
  onValueChange: (value: string) => void;
  sensitive?: boolean;
}

export default function TextInput(props: TextInputProps) {
  const [textHidden, setTextHidden] = useState(true);

  return (
    <>
      <Text
        style={{
          color: "#A0A0A0",
          fontSize: 11,
          fontFamily: "Sora_400Regular",
        }}
      >
        {props.label}
      </Text>

      <View
        style={{
          backgroundColor: "#F4F4F4",
          borderRadius: 4,
          marginTop: 5,
          paddingHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <RNTextInput
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.onValueChange}
          placeholderTextColor="#CFCFCF"
          style={{
            color: "#000000",
            fontSize: 14,
            fontFamily: "Sora_400Regular",
            paddingVertical: 14,
            flex: 1,
          }}
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
