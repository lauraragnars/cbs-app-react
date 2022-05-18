import { StyleSheet } from "react-native";
import { variables } from "./Variables";

export const forms = StyleSheet.create({
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: variables.colors.white,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: variables.colors.gray,
    borderRadius: 5,
    marginBottom: 10
  }
});
