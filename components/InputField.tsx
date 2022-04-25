import { Text, TextInput, View } from "react-native";
import { useState } from "react";

interface InputFieldProps {
  label: string;
  errorMessage: string;
  placeholder: string;
  //inputValue: string;
  isValid: boolean;
  setIsValid: Function;
  text: string;
  setText: Function;
}

export default function InputField({ label, errorMessage, placeholder, isValid, setIsValid, text, setText }: InputFieldProps) {
  //const [text, setText] = useState(inputValue);
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
    <View>
      <Text>{label}</Text>
      <TextInput onBlur={handleOnBlur} onChangeText={handleChangeText} value={text} placeholder={placeholder} />
      {!isValid && entered && <Text>{errorMessage}</Text>}
    </View>
  );
}
