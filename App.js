import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import ChatScreen from "./screens/ChatScreen";
import DiscoverScreen from "./screens/DiscoverScreen";
import MenuScreen from "./screens/MenuScreen";

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import chatReducer from "./store/reducers/ChatReducer";

const rootReducer = combineReducers({
  chat: chatReducer,
  // posts: postReducer,
  // events: eventReducer
});

const store = createStore(rootReducer);
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Discover" component={DiscoverScreen} />
          <Tab.Screen name="Chat" component={ChatScreen} options={{ tabBarBadge: 3 }} />
          <Tab.Screen name="Menu" component={MenuScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
