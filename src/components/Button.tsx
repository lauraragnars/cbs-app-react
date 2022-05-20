import { StyleSheet, TouchableOpacity, Text, GestureResponderEvent } from 'react-native'
import { variables } from '../styles/Variables'

interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
  buttonType?: 'primary' | 'secondary' | 'link' | 'disabled';
}

export const Button = ({ onPress, title, buttonType = 'primary' }: ButtonProps) => {
  switch (buttonType) {
    case 'primary':
      return (
        <TouchableOpacity onPress={onPress} style={primaryStyles.buttonContainer}>
          <Text style={primaryStyles.buttonText}>{title}</Text>
        </TouchableOpacity>
      )
    case 'secondary':
      return (
        <TouchableOpacity onPress={onPress} style={secondaryStyles.buttonContainer}>
          <Text style={secondaryStyles.buttonText}>{title}</Text>
        </TouchableOpacity>
      )
    case 'link':
      return (
        <TouchableOpacity onPress={onPress} style={linkStyles.buttonContainer}>
          <Text style={linkStyles.buttonText}>{title}</Text>
        </TouchableOpacity>
      )
    case 'disabled':
      return (
        <TouchableOpacity disabled={true} onPress={onPress} style={disabledStyles.buttonContainer}>
          <Text style={disabledStyles.buttonText}>{title}</Text>
        </TouchableOpacity>
      )
  }
}

const primaryStyles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: variables.colors.blue200,
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 12,
    margin: 5,
    shadowColor: variables.colors.gray,
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: {
      width: 5,
      height: 5
    }
  },
  buttonText: {
    fontSize: variables.fontSizes.normal,
    color: variables.colors.white,
    fontFamily: variables.fonts.openSans.bold
  }
})

const secondaryStyles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: variables.colors.white,
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 12,
    margin: 5,
    shadowColor: variables.colors.gray,
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: {
      width: 5,
      height: 5
    }
  },
  buttonText: {
    fontSize: variables.fontSizes.large,
    color: variables.colors.blue300,
    fontFamily: variables.fonts.teko.medium,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    alignSelf: 'center'
  }
})

const linkStyles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: variables.colors.white,
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 12,
    margin: 5
  },
  buttonText: {
    fontSize: variables.fontSizes.normal,
    color: variables.colors.blue200,
    fontFamily: variables.fonts.openSans.bold,
    alignSelf: 'center'
  }
})

const disabledStyles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: variables.colors.gray,
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 12,
    margin: 5
  },
  buttonText: {
    fontSize: variables.fontSizes.normal,
    color: variables.colors.blue100,
    fontFamily: variables.fonts.openSans.bold,
    alignSelf: 'center'
  }
})
