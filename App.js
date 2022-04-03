import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatScreen from "./screens/navigation/ChatScreen";
import DiscoverScreen from "./screens/navigation/DiscoverScreen";
import MenuScreen from "./screens/navigation/MenuScreen";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import chatReducer from "./store/reducers/ChatReducer";
import SignupScreen from "./screens/authentication/SignupScreen";
import userReducer from "./store/reducers/UserReducer";
import LoginScreen from "./screens/authentication/LoginScreen";

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
          <Tab.Screen name="Home/Login" component={LoginScreen} />
          <Tab.Screen name="Signup" component={SignupScreen} />
          <Tab.Screen name="Discover" component={DiscoverScreen} />
          <Tab.Screen name="Chat" component={ChatScreen} options={{ tabBarBadge: 3 }} />
          <Tab.Screen name="Menu" component={MenuScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
