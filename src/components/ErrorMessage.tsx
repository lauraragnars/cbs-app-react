import { Text, View, StyleSheet } from 'react-native'
import { errorMessages } from '../entities/ErrorMessages'
import { variables } from '../styles/Variables'

interface ErrorMessageProps {
  error: string
}

export default function ErrorMessage({ error }: ErrorMessageProps) {
  const errorMessage = errorMessages[error as keyof typeof errorMessages]
  return (
    <>
      {error && error.length ? (
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>{errorMessage}</Text>
        </View>
      ) : null}
    </>
  )
}

const styles = StyleSheet.create({
  messageContainer: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 11,
  },
  messageText: {
    color: variables.colors.red,
    fontFamily: variables.fonts.openSans.semibold,
    fontSize: variables.fontSizes.xsmall,
  },
})
