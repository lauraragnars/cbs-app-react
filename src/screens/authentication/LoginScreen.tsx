import * as SecureStore from 'expo-secure-store';
import { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, storeUser } from '../../store/actions/UserActions';
import { forms } from '../../styles/Forms';
import { RootState } from '../../../App';
import InputField from '../../components/InputField';
import { Button } from '../../components/Button';
import { variables } from '../../styles/Variables';
import { typography } from '../../styles/Typography';
import { general } from '../../styles/General';

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  //const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const dispatch = useDispatch();
  const userTest = useSelector((state: RootState) => state.user.email);

  async function load() {
    const emailFromSecureStore = await SecureStore.getItemAsync('email');
    const tokenFromSecureStore = await SecureStore.getItemAsync('idToken');

    if (emailFromSecureStore && tokenFromSecureStore) {
      console.log('success', emailFromSecureStore);
      dispatch(storeUser(emailFromSecureStore, tokenFromSecureStore));
    } else {
      console.log('fail');
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <View style={general.padding}>
      <View style={styles.center}>
        <Image source={require('../../../assets/cbs-logo.png')} />
      </View>
      <Text style={typography.h1}>Log in</Text>
      {/* <TextInput style={inputs.inputField} placeholder="Email" onChangeText={setEmail} value={email} />
      <TextInput style={inputs.inputField} textContentType="password" placeholder="Password" onChangeText={setPassword} value={password} /> */}
      <View style={forms.formContainer}>
        <InputField label='E-mail' textContentType='emailAddress' placeholder='Email' isValid={isEmailValid} setIsValid={setIsEmailValid} text={email} setText={setEmail} />
        <InputField label='Password' textContentType='password' placeholder='Password' isValid={isPasswordValid} setIsValid={setIsPasswordValid} text={password} setText={setPassword} />
      </View>
      <Button buttonType='link' title='Forgot password?' onPress={() => navigation.navigate('ResetPassword')} />
      <Button title='Login' onPress={() => dispatch(login(email, password))} />
      <Button buttonType='link' title="Don't have an account? Sign up" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
};

const styles = StyleSheet.create({
  whiteBackground: {
    backgroundColor: variables.colors.white
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontSize: variables.fontSizes.large,
    fontFamily: variables.fonts.teko.medium,
    color: variables.colors.blue300
  }
});

export default LoginScreen;
