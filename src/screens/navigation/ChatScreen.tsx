import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatroomScreen from "../ChatroomScreen";
import Screen3 from "../Screen3";
import Screen4 from "../Screen4";

export default function ChatScreen() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Chatrooms" component={ChatroomScreen} />
      <Stack.Screen name="Screen 3" component={Screen3} />
      <Stack.Screen name="Screen 4" component={Screen4} />
    </Stack.Navigator>
  );
}
