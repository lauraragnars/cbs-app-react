import { useState, useEffect } from "react";
import { Button, Text, TextInput, FlatList, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../App";
import { addChatroom, deleteChatroom, fetchChatrooms } from "../store/actions/ChatActions";

export default function ChatroomScreen() {
  const dispatch = useDispatch();
  const chatrooms = useSelector((state: RootState) => state.chat.chatrooms);
  const [text, setText] = useState("");
  console.log(chatrooms);

  useEffect(() => {
    dispatch(fetchChatrooms());
  }, []);

  const renderItem = ({ item }: any) => (
    <TouchableOpacity>
      <Text>{item.title}</Text>
      <Button title="Delete this chatroom" onPress={() => dispatch(deleteChatroom(item.id))} />
    </TouchableOpacity>
  );

  return (
    <>
      <Text>Chatrooms</Text>
      <TextInput onChangeText={(newText) => setText(newText)} value={text} />
      <Button title="Add new chatroom"  onPress={() => dispatch(addChatroom(text))}></Button>

      <FlatList data={chatrooms} renderItem={renderItem} />
    </>
  );
}
