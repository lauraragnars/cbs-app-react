import { Text, View, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/actions/UserActions";

export default function HomeScreen() {
  const dispatch = useDispatch();

  return (
    <>
      <View>
        <Text>Home screen</Text>
        <Button onPress={() => dispatch(logout())} title="logout"></Button>
      </View>
    </>
  );
}
