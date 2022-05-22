import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { RootState } from '../../../App';
import { Chatroom } from '../../entities/Chatroom';
import { variables } from '../../styles/Variables';
import ChatroomScreen from './ChatroomScreen';
import SingleChatroomScreen from './SingleChatroomScreen';

export default function ChatScreen() {
  const Stack = createNativeStackNavigator();
  const chatrooms = useSelector((state: RootState) => state.chat.chatrooms);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Chatrooms'
        component={ChatroomScreen}
        options={{
          headerShown: false
        }}
      />
      {chatrooms.map((chatroom: Chatroom) => (
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'white'
            },
            headerTintColor: variables.colors.blue200,
            headerBackTitle: 'BACK',
            headerBackTitleStyle: {
              fontFamily: variables.fonts.teko.medium,
              fontSize: variables.fontSizes.medium
            },
            headerTitleStyle: {
              fontFamily: variables.fonts.teko.medium,
              fontSize: variables.fontSizes.medium
            },
            headerTitle: chatroom.title
          }}
          key={chatroom.id}
          name={chatroom.id}
          component={SingleChatroomScreen}
        />
      ))}
    </Stack.Navigator>
  );
}
