import { Text, TextInput, View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
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
  disabled?: boolean;
}

export default function InputField({ label, errorMessage, placeholder, isValid, setIsValid, text, setText, textContentType = "none", disabled = false }: InputFieldProps) {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (text === "") {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, []);

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
