import { Text, TextInput, View, StyleSheet } from "react-native";
import { useState } from "react";
import { inputs } from "../styles/Forms";
import { variables } from "../styles/Variables";

interface InputFieldProps {
  label: string;
  errorMessage?: string;
  placeholder: string;
  isValid: boolean;
  setIsValid: Function;
  text?: string;
  setText: Function;
  textContentType?: any;
}

export default function InputField({ label, errorMessage, placeholder, isValid, setIsValid, text, setText, textContentType = "none" }: InputFieldProps) {
  const [entered, setEntered] = useState(false);

  const handleChangeText = (text: string) => {
    setText(text);
    setEntered(true);
    if (text === "") {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  const handleOnBlur = (b: any) => {
    setEntered(true);
  };
  return (
    <View style={inputs.inputField}>
      <Text style={styles.label}>{label}</Text>
      <TextInput textContentType={textContentType} onBlur={handleOnBlur} onChangeText={handleChangeText} value={text} placeholder={placeholder} />
      {!isValid && entered && <Text>{errorMessage}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 10,
    textTransform: "uppercase"
  }
});
