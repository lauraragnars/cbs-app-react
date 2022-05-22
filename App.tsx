import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import chatReducer from './src/store/reducers/ChatReducer';
import userReducer from './src/store/reducers/UserReducer';
import Navigation from './src/components/Navigation';
import AppLoading from 'expo-app-loading';
import { useFonts, OpenSans_300Light, OpenSans_400Regular, OpenSans_600SemiBold, OpenSans_700Bold, OpenSans_800ExtraBold } from '@expo-google-fonts/open-sans';
import { Teko_300Light, Teko_400Regular, Teko_500Medium, Teko_600SemiBold, Teko_700Bold } from '@expo-google-fonts/teko';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { variables } from './src/styles/Variables';
import EventReducer from './src/store/reducers/EventReducer';

const rootReducer = combineReducers({
  chat: chatReducer,
  user: userReducer,
  event: EventReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_800ExtraBold,
    Teko_300Light,
    Teko_400Regular,
    Teko_500Medium,
    Teko_600SemiBold,
    Teko_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const CustomTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: variables.colors.white
    }
  };

  return (
    <Provider store={store}>
      <NavigationContainer theme={CustomTheme}>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}
