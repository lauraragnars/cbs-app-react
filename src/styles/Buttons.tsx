import { StyleSheet } from "react-native";
import { variables } from "./Variables";

export const buttons = StyleSheet.create({
  largeButton: {
    backgroundColor: variables.colors.blue300,
    color: variables.colors.white,
    padding: 18,
    borderRadius: 7,
    margin: 15
  }
});
