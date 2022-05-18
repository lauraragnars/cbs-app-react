import { StyleSheet } from "react-native";
import { variables } from "./Variables";

export const inputs = StyleSheet.create({
  inputField: {
    borderColor: variables.colors.gray,
    padding: 10,
    borderStyle: "solid",
    borderWidth: 1,
    width: "100%"
  },

  formContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: variables.colors.white
  }
});
