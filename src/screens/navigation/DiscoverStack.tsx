import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { RootState } from '../../../App';
import eventReducer from '../../store/reducers/EventReducer';
import EventsScreen from '../EventsScreen';
import AddNewEventScreen from './AddNewEventScreen';
import DiscoverScreen from './DiscoverScreen';
import SingleEventScreen from './SingleEventScreen';
import { Event } from '../../entities/Event';

export default function DiscoverStack() {
  const Stack = createNativeStackNavigator();
  const events = useSelector((state: RootState) => state.event.events);

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
      <Stack.Screen name='AddEvent' component={AddNewEventScreen} />
      {events.map((event: Event) => (
        <Stack.Screen key={event.id} name={event.title} component={SingleEventScreen} />
      ))}
    </Stack.Navigator>
  );
}
