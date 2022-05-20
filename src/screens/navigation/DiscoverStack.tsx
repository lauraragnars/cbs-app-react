import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventsScreen from '../EventsScreen';
import DiscoverScreen from './DiscoverScreen';

export default function DiscoverStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='DiscoverScreen'
        component={DiscoverScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name='Events' component={EventsScreen} />
    </Stack.Navigator>
  );
}
