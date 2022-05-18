import { StyleSheet } from 'react-native';
import { variables } from './Variables';

export const general = StyleSheet.create({
  background: {
    fontSize: variables.fontSizes.large,
    fontFamily: variables.fonts.teko.medium,
    color: variables.colors.blue300
  },
  padding: {
    paddingTop: 50,
    paddingLeft: 15,
    paddingRight: 15
  }
});
