import { useState, useEffect } from "react";
import { Button, Text, TextInput, FlatList, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../App";
import { addChatroom, deleteChatroom, fetchChatrooms } from "../store/actions/ChatActions";

export default function Chatrooms({ navigation }:any) {
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
      {/* keyExtractor={(item: any) => item.title} */}
      {/* <View>
        <Text>All chatrooms</Text>
        {chatrooms.map((chatroom) => {
          return <Text>{chatroom.title}</Text>;
        })}
      </View> */}

      <FlatList data={chatrooms} renderItem={renderItem} />

      <Button title="Go to Screen 3" onPress={() => navigation.navigate("Screen 3")} />
      <Button title="Go to Screen 4" onPress={() => navigation.navigate("Screen 4")} />
    </>
  );
}
