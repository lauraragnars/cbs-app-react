import { StyleSheet, TouchableOpacity, Text, GestureResponderEvent } from "react-native";
import { variables } from "../styles/Variables";

interface PrimaryButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
}

export const PrimaryButton = ({ onPress, title }: PrimaryButtonProps) => (
  <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: variables.colors.blue200,
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 12,
    margin: 5
  },
  buttonText: {
    fontSize: variables.fontSizes.normal,
    fontFamily: variables.fonts.openSans.semibold,
    color: variables.colors.white
  }
});
