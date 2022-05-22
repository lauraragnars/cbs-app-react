import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { RootState } from '../../../App';
import EventsScreen from './EventsScreen';
import AddNewEventScreen from './AddNewEventScreen';
import DiscoverScreen from './DiscoverScreen';
import SingleEventScreen from './SingleEventScreen';
import { Event } from '../../entities/Event';
import { variables } from '../../styles/Variables';

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
      <Stack.Screen
        name='Events'
        component={EventsScreen}
        options={{
          headerStyle: {
            backgroundColor: variables.colors.white
          },
          headerTintColor: variables.colors.blue200,
          headerBackTitleStyle: {
            fontFamily: variables.fonts.teko.medium,
            fontSize: 20
          },
          headerTitleStyle: {
            color: variables.colors.blue200,
            fontFamily: variables.fonts.teko.medium,
            fontSize: variables.fontSizes.large
          }
        }}
      />
      <Stack.Screen
        name='Add Event'
        component={AddNewEventScreen}
        options={{
          headerStyle: {
            backgroundColor: variables.colors.white
          },
          headerTintColor: variables.colors.blue200,
          headerBackTitleStyle: {
            fontFamily: variables.fonts.teko.medium,
            fontSize: 20
          },
          headerTitleStyle: {
            color: variables.colors.blue200,
            fontFamily: variables.fonts.teko.medium,
            fontSize: variables.fontSizes.large
          }
        }}
      />
      {events.map((event: Event) => (
        <Stack.Screen
          key={event.id}
          name={event.id}
          component={SingleEventScreen}
          options={{
            headerStyle: {
              backgroundColor: variables.colors.white
            },
            headerTitle: event.title,
            headerTintColor: variables.colors.blue200,
            headerBackTitleStyle: {
              fontFamily: variables.fonts.teko.medium,
              fontSize: 20
            },
            headerTitleStyle: {
              color: variables.colors.blue200,
              fontFamily: variables.fonts.teko.medium,
              fontSize: variables.fontSizes.large
            }
          }}
        />
      ))}
    </Stack.Navigator>
  );
}
