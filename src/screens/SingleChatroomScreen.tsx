import React, { useState } from 'react'
import { Button, FlatList, Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import ChatMessage from '../components/ChatMessage'
import { Chatmessage } from '../entities/Chatroom'
import { addChatmessage } from '../store/actions/ChatActions'
import { v4 as uuid } from 'uuid'
import { RootState } from '../../App'

export default function SingleChatroomScreen({ route }: any) {
  const { title, chatmessages, id } = route.params
  const [text, setText] = useState('')
  const renderItem = ({ item }: any) => <ChatMessage text={item.text} />
  const dispatch = useDispatch()
  const [messages, setMessages] = useState(chatmessages ? chatmessages : [])
  const unique_id = uuid()
  const allMessages = useSelector((state: RootState) => state.chat.chatrooms)
  console.log(allMessages, 'All chatrooms')
  const handleAddMessage = () => {
    let now = new Date()
    setMessages((oldMessages: Chatmessage[]) => [...oldMessages, new Chatmessage(text, now)])
    dispatch(addChatmessage(id, messages, title))
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <FlatList key={unique_id} data={messages} renderItem={renderItem} />
          <View>
            <TextInput value={text} onChangeText={(text) => setText(text)} onSubmitEditing={handleAddMessage} placeholder='Message' style={styles.textInput} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    // justifyContent: 'space-between',
    // flexDirection: 'column',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
    alignSelf: 'baseline',
  },
  messages: {},
})
