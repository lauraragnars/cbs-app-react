import { Text, View, StyleSheet } from 'react-native'
import { variables } from '../styles/Variables'

interface ChatMessageProps {
  text: string
}

export default function ChatMessage({ text }: ChatMessageProps) {
  return (
    <View style={styles.messageContainer}>
      <Text style={styles.messageText}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  messageContainer: {
    backgroundColor: variables.colors.blue200,
    borderRadius: 12,
    borderBottomRightRadius: 4,
    padding: 10,
    margin: 5,
  },
  messageText: {
    color: variables.colors.white,
  },
})
