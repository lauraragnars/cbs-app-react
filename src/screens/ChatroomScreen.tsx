import React, { useState, useEffect } from 'react';
import { Text, FlatList, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../App';
import InputField from '../components/InputField';
import { Chatroom } from '../entities/Chatroom';
import { addChatroom, deleteChatroom, fetchChatrooms } from '../store/actions/ChatActions';
import { Button } from '../components/Button';
import { typography } from '../styles/Typography';
import { variables } from '../styles/Variables';

export default function ChatroomScreen({ navigation }: any) {
  const dispatch = useDispatch();
  const chatrooms = useSelector((state: RootState) => state.chat.chatrooms);
  const [text, setText] = useState('');
  const [errorMessage, setErrormessage] = useState('');
  const [isNameValid, setIsNameValid] = useState(false);
  const [isTitleUnique, setIsTitleUnique] = useState(false);
  const [lastCreatedChatroom, setLastCreatedChatroom] = useState('');

  useEffect(() => {
    dispatch(fetchChatrooms());
  }, []);

  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.chatroomContainer} onPress={() => navigation.navigate(item.title, { title: item.title, chatmessages: item.chatmessages })}>
      <View style={styles.textImage}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
          }}
        />

        <Text style={typography.h1}>{item.title}</Text>
      </View>
      <TouchableOpacity style={styles.deleteButton}>
        <Text style={styles.deleteButtonText} onPress={() => dispatch(deleteChatroom(item.id))}>
          Delete
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  const handleAddChatroom = () => {
    setErrormessage('');
    setIsTitleUnique(true);

    console.log(text.length, isNameValid, lastCreatedChatroom, 'is name valid');

    // check if chatroom already exits
    chatrooms.forEach((chatroom: Chatroom) => {
      if (chatroom.title === text) {
        setIsTitleUnique(false);
      }
    });

    if (isNameValid && isTitleUnique && text !== lastCreatedChatroom) {
      setLastCreatedChatroom(text);
      dispatch(addChatroom(text));
      setErrormessage('');
      setText('');
    } else if (!isNameValid) {
      setErrormessage('Please provide a chatroom name');
    } else if (!isTitleUnique) {
      setErrormessage('There is already a chatroom with this name');
    }
  };

  return (
    <>
      <View style={styles.container}>
        <InputField text={text} setText={setText} label='Chatroom name' placeholder='Chatroom name' isValid={isNameValid} setIsValid={setIsNameValid} />
        <Text>{errorMessage}</Text>
        <Button buttonType='primary' title='Add new chatroom' onPress={handleAddChatroom}></Button>
        <FlatList data={chatrooms} renderItem={renderItem} />
      </View>
    </>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: variables.colors.gray,
  },
  chatroomTitle: {
    margin: 5,
    marginLeft: 15,
  },
  chatroomContainer: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  deleteButton: {
    backgroundColor: 'red', //@TODO breyta i variable rauðann
    margin: 10,
    padding: 10,
    borderRadius: 5,
    paddingTop: 8,
    textAlignVertical: 'center',
  },
  deleteButtonText: {
    color: variables.colors.white,
    fontFamily: variables.fonts.openSans.semibold,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 20,
  },
  textImage: {
    flex: 1,
    flexDirection: 'row',
  },
});
