import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/actions/UserActions";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userTest = useSelector((state) => state.user.email);
  console.log(userTest, "test user");
  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
      <TextInput textContentType="password" placeholder="Password" onChangeText={setPassword} value={password} />
      <Button title="Login" onPress={() => dispatch(login(email, password))} />
    </View>
  );
};

export default LoginScreen;
