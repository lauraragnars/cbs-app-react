import { Text, TextInput, View, StyleSheet } from "react-native";
import { useState } from "react";
// import { forms } from "../styles/Forms";
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
    <View style={styles.inputField}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.inputText} textContentType={textContentType} onBlur={handleOnBlur} onChangeText={handleChangeText} value={text} placeholder={placeholder} />
      {!isValid && entered && <Text>{errorMessage}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontFamily: variables.fonts.openSans.bold,
    fontSize: variables.fontSizes.xsmall,
    color: variables.colors.blue300,
    textTransform: "uppercase"
  },
  inputText: {
    fontFamily: variables.fonts.openSans.regular,
    fontSize: variables.fontSizes.normal,
    color: variables.colors.blue300
  },
  inputField: {
    borderColor: variables.colors.gray,
    padding: 10,
    borderStyle: "solid",
    width: "100%",
    borderBottomWidth: 1
  }
});
