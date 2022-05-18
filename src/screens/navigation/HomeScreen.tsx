import { Text, View, Button } from "react-native";
import { useDispatch } from "react-redux";
import { logout } from "../../store/actions/UserActions";

export default function HomeScreen() {
  const dispatch = useDispatch();

  return (
    <>
      <View>
        <Text style={{ fontFamily: 'Teko_500Medium', fontSize: 40 }}>Home screen</Text>
        <Button onPress={() => dispatch(logout())} title="logout"></Button>
      </View>
    </>
  );
}
