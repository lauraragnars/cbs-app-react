import { useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup, storeUser } from "../../store/actions/UserActions";
import InputField from "../../components/InputField";

const SignupScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const dispatch = useDispatch();

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
      <InputField label="Username" textContentType="username" placeholder="Username" isValid={isUsernameValid} setIsValid={setIsUsernameValid} text={username} setText={setUsername} />
      <InputField label="Email" textContentType="emailAddress"  placeholder="Email" isValid={isEmailValid} setIsValid={setIsEmailValid} text={email} setText={setEmail} />
      <InputField label="Password" textContentType="password" placeholder="Password" isValid={isPasswordValid} setIsValid={setIsPasswordValid} text={password} setText={setPassword} />
      <Button title="Signup" onPress={() => dispatch(signup(email, password, username ))} />
      <Button title="Already have an account? Login" onPress={() => navigation.navigate("Login")} />
    </View>
  );
};

export default SignupScreen;
