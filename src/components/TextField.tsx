import { Text, TextInput, View, StyleSheet } from "react-native";
import { variables } from "../styles/Variables";

interface InputFieldProps {
  label: string;
  placeholder: string;
  text?: string;
  textContentType?: any;
}

export default function TextField({ label, placeholder, text, textContentType = "none" }: InputFieldProps) {

  return (
    <View style={styles.inputField}>
      <Text style={styles.label}>{label}</Text>
      <TextInput editable={false} textContentType={textContentType} value={text} placeholder={placeholder} />
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
