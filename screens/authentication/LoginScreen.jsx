import * as SecureStore from "expo-secure-store";
import { useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, storeUser } from "../../store/actions/UserActions";
import { inputs } from "../../styles/Forms";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userTest = useSelector((state) => state.user.email);
  console.log(userTest, "test user");

  async function load() {
    const emailFromSecureStore = await SecureStore.getItemAsync("email");
    const tokenFromSecureStore = await SecureStore.getItemAsync("idToken");

    if (emailFromSecureStore && tokenFromSecureStore) {
      console.log("success", emailFromSecureStore);
      dispatch(storeUser(emailFromSecureStore, tokenFromSecureStore));
    } else {
      console.log("fail");
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <View>
      <Text>Login</Text>
      <TextInput style={inputs.inputField} placeholder="Email" onChangeText={setEmail} value={email} />
      <TextInput style={inputs.inputField} textContentType="password" placeholder="Password" onChangeText={setPassword} value={password} />
      <Button title="Login" onPress={() => dispatch(login(email, password))} />
      <Button title="Don't have an account? Signup" onPress={() => navigation.navigate("Signup")} />
    </View>
  );
};

export default LoginScreen;
