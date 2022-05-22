import { StyleSheet } from 'react-native';
import { variables } from './Variables';

export const typography = StyleSheet.create({
  h1: {
    fontSize: variables.fontSizes.large,
    fontFamily: variables.fonts.teko.medium,
    color: variables.colors.blue300,
    marginTop: 10,
    marginBottom: 10
  },
  h2: {
    fontSize: variables.fontSizes.normal,
    fontFamily: variables.fonts.openSans.semibold,
    color: variables.colors.blue300,
    marginTop: 4,
    marginBottom: 4
  },
  h3: {
    fontSize: variables.fontSizes.xsmall,
    fontFamily: variables.fonts.openSans.regular,
    color: variables.colors.blue300,
    marginTop: 4,
    marginBottom: 4
  },
  text: {
    fontSize: variables.fontSizes.normal,
    fontFamily: variables.fonts.openSans.regular,
    color: variables.colors.blue300
  }
});
