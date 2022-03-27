import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chatrooms from "./Chatrooms";
import Screen3 from "./Screen3";
import Screen4 from "./Screen4";

export default function ChatScreen() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Chatrooms" component={Chatrooms} />
      <Stack.Screen name="Screen 3" component={Screen3} />
      <Stack.Screen name="Screen 4" component={Screen4} />
    </Stack.Navigator>
  );
}
