import { Text, TextInput, View, StyleSheet } from "react-native";
import { inputs } from "../styles/Forms";

interface InputFieldProps {
  label: string;
  placeholder: string;
  text?: string;
  textContentType?: any;
}

export default function TextField({ label, placeholder, text, textContentType = "none" }: InputFieldProps) {

  return (
    <View style={inputs.inputField}>
      <Text style={styles.label}>{label}</Text>
      <TextInput editable={false} textContentType={textContentType} value={text} placeholder={placeholder} />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 10,
    textTransform: "uppercase"
  }
});
