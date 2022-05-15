import { useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup, storeUser } from "../../store/actions/UserActions";
import { RootState } from "../../App";

const SignupScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userTest = useSelector((state: RootState) => state.user.email);

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
      <Text>Signup</Text>
      <TextInput placeholder="Email" onChangeText={setEmail} value={email} />

      <TextInput textContentType="password" placeholder="Password" onChangeText={setPassword} value={password} />

      <Button title="Signup" onPress={() => dispatch(signup(email, password))} />

      <Button title="Already have an account? Login" onPress={() => navigation.navigate("Login")} />
    </View>
  );
};

export default SignupScreen;
