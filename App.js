import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import ChatScreen from "./screens/ChatScreen";
import DiscoverScreen from "./screens/DiscoverScreen";
import MenuScreen from "./screens/MenuScreen";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import chatReducer from "./store/reducers/ChatReducer";
import SignupScreen from "./screens/SignupScreen";
import userReducer from "./store/reducers/UserReducer";

const rootReducer = combineReducers({
  chat: chatReducer,
  user: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={SignupScreen} />
          <Tab.Screen name="Discover" component={DiscoverScreen} />
          <Tab.Screen name="Chat" component={ChatScreen} options={{ tabBarBadge: 3 }} />
          <Tab.Screen name="Menu" component={MenuScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
