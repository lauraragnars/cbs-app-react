import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { RootState } from '../../../App';
import { Chatroom } from '../../entities/Chatroom';
import ChatroomScreen from '../ChatroomScreen';
import SingleChatroomScreen from '../SingleChatroomScreen';

export default function ChatScreen() {
  const Stack = createNativeStackNavigator();
  const chatrooms = useSelector((state: RootState) => state.chat.chatrooms);
  console.log(chatrooms);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Chatrooms' component={ChatroomScreen} />
      {chatrooms.map((chatroom: Chatroom) => (
        <Stack.Screen key={chatroom.id} name={chatroom.title} component={SingleChatroomScreen} />
      ))}
    </Stack.Navigator>
  );
}
