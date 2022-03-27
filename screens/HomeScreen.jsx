import { Text, View, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { subtract, toggleHappy, add } from "../store/actions/ChatActions";

export default function HomeScreen() {
  const isHappy = useSelector((state) => state.chat.isHappy); // subscribing to the store's chat slice/part
  const numberOfIcecreams = useSelector((state) => state.chat.counter);
  const dispatch = useDispatch();

  return (
    <>
      <View>
        <Text>Home screen</Text>
        <Text>Is Laura happy? {isHappy.toString()}</Text>
        <Text>How many icecreams should Christians children have {numberOfIcecreams}</Text>
        <Button title="Flip happy" onPress={() => dispatch(toggleHappy())} />
        <Button title="Give Icecream" onPress={() => dispatch(add())} />
        <Button title="Steal Icecream" onPress={() => dispatch(subtract())} />
      </View>
    </>
  );
}
