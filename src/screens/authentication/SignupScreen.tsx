import { useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import { View, Text, StyleSheet, Image } from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup, storeUser } from "../../store/actions/UserActions";
import InputField from "../../components/InputField";
import { PrimaryButton } from "../../components/PrimaryButton";
import { variables } from "../../styles/Variables";
import Icon, { IconType } from "../../components/Icon";

const SignupScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [username, setUsername] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  //const [isUsernameValid, setIsUsernameValid] = useState(false);
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
      {/* <Icon type={IconType.LOGO} /> */}
      <Text style={styles.header}>Signup to get access</Text>
      {/* <InputField label="Username" textContentType="username" placeholder="Username" isValid={isUsernameValid} setIsValid={setIsUsernameValid} text={username} setText={setUsername} /> */}
      <View style={styles.formContainer}>
        <InputField label="Email" textContentType="emailAddress" placeholder="Email" isValid={isEmailValid} setIsValid={setIsEmailValid} text={email} setText={setEmail} />
        <InputField label="Password" textContentType="password" placeholder="Password" isValid={isPasswordValid} setIsValid={setIsPasswordValid} text={password} setText={setPassword} />
      </View>

      <PrimaryButton title="Get access" onPress={() => dispatch(signup(email, password))} />
      <PrimaryButton title="Already have an account? Login" onPress={() => navigation.navigate("Login")} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 18
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: variables.colors.white
  }
});

export default SignupScreen;