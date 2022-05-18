import { Text, View, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";

export default function HomeScreen() {
  const dispatch = useDispatch();

  return (
    <>
      <View>
        <Text>Home screen</Text>
      </View>
    </>
  );
}
