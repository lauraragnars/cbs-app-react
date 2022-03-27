import { useState } from "react";
import { Button, Text, TextInput, FlatList, TouchableOpacity } from "react-native";
//import { Chatroom } from "../entities/Chatroom";
import { useSelector, useDispatch } from "react-redux";
import { addChatroom, deleteChatroom } from "../store/actions/ChatActions";

export default function Chatrooms({ navigation }) {
  const dispatch = useDispatch();
  const chatrooms = useSelector((state) => state.chat.chatrooms);
  const [text, setText] = useState("");
  console.log(chatrooms);

  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <Text>{item.title}</Text>
      <Button title="Delete this chatroom" onPress={() => dispatch(deleteChatroom(item.title))} />
    </TouchableOpacity>
  );

  return (
    <>
      <Text>Chatrooms</Text>
      <TextInput onChangeText={(newText) => setText(newText)} value={text} />
      <Button title="Add new chatroom" keyExtractor={(item) => item.title} onPress={() => dispatch(addChatroom(text))}></Button>

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
