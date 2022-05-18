import { StyleSheet } from "react-native";
import { variables } from "./Variables";

export const inputs = StyleSheet.create({
  inputField: {
    borderColor: variables.colors.gray,
    padding: 10,
    borderStyle: "solid",
    borderWidth: 1,
    width: "100%"
  }
});
