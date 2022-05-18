import { useState, useEffect } from 'react';
import { Button, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../App';
import InputField from '../components/InputField';
import { Chatroom } from '../entities/Chatroom';
import { addChatroom, deleteChatroom, fetchChatrooms } from '../store/actions/ChatActions';

export default function ChatroomScreen({ navigation }: any) {
  const dispatch = useDispatch();
  const chatrooms = useSelector((state: RootState) => state.chat.chatrooms);
  const [text, setText] = useState('');
  const [errorMessage, setErrormessage] = useState('');
  const [isNameValid, setIsNameValid] = useState(false);
  const [isTitleUnique, setIsTitleUnique] = useState(false);

  useEffect(() => {
    dispatch(fetchChatrooms());
  }, []);

  const renderItem = ({ item }: any) => (
    <TouchableOpacity onPress={() => navigation.navigate(item.title)}>
      <Text>{item.title}</Text>
      <Button title='Delete this chatroom' onPress={() => dispatch(deleteChatroom(item.id))} />
    </TouchableOpacity>
  );

  const handleAddChatroom = () => {
    console.log(chatrooms, 'CHATROOMS');
    setIsTitleUnique(true);
    chatrooms.forEach((chatroom: Chatroom) => {
      if (chatroom.title === text) {
        setIsTitleUnique(false);
      }
    });

    if (isNameValid && isTitleUnique) {
      console.log('dispatch');
      dispatch(addChatroom(text));
    } else if (isNameValid && !isTitleUnique) {
      setErrormessage('There is already a chatroom with this name');
    } else {
      setErrormessage('Please provide a chatroom name');
    }
  };

  return (
    <>
      <InputField text={text} setText={setText} label='Chatroom name' placeholder='Chatroom name' isValid={isNameValid} setIsValid={setIsNameValid} />
      <Text>{errorMessage}</Text>
      <Button title='Add new chatroom' onPress={handleAddChatroom}></Button>

      <FlatList data={chatrooms} renderItem={renderItem} />
    </>
  );
}
