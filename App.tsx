import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import chatReducer from "./store/reducers/ChatReducer";
import userReducer from "./store/reducers/UserReducer";
import Navigation from "./components/Navigation";
import { NavigationContainer } from "@react-navigation/native";

const rootReducer = combineReducers({
  chat: chatReducer,
  user: userReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}
