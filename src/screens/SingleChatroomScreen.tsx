import React, { useState } from 'react'
import { FlatList, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import ChatMessage from '../components/ChatMessage'
import { Chatmessage } from '../entities/Chatroom'
import { addChatmessage } from '../store/actions/ChatActions'
import { RootState } from '../../App'
import { forms } from '../styles/Forms'
import { variables } from '../styles/Variables'

export default function SingleChatroomScreen({ route }: any) {
  const { title, chatmessages, id } = route.params
  const [text, setText] = useState('')
  const [messages, setMessages] = useState(chatmessages || [])

  const dispatch = useDispatch()

  const handleAddMessage = () => {
    const now = new Date()
    setMessages((oldMessages: Chatmessage[]) => [...oldMessages, new Chatmessage(text, now)])
    dispatch(addChatmessage(id, messages, title))
    setText('')
  }

  const renderItem = ({ item }: any) => <ChatMessage text={item.text} />

  return (
    <KeyboardAvoidingView keyboardVerticalOffset={130} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <FlatList keyExtractor={(item) => item.timestamp} data={messages} renderItem={renderItem} />

      <View style={forms.formContainer}>
        <TextInput
          placeholderTextColor={variables.colors.darkGray}
          value={text}
          onChangeText={(text) => setText(text)}
          onSubmitEditing={handleAddMessage}
          placeholder='Message...'
          style={styles.textInput}
        />
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 70,
    color: variables.colors.blue300,
    padding: 20,
    alignSelf: 'baseline',
  },
})
