import { useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup, storeUser } from '../../store/actions/UserActions';
import InputField from '../../components/InputField';
import { Button } from '../../components/Button';
import { variables } from '../../styles/Variables';
import { forms } from '../../styles/Forms';
import { typography } from '../../styles/Typography';
import { general } from '../../styles/General';

const SignupScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  //const [username, setUsername] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isRepeatPasswordValid, setIsRepeatPasswordValid] = useState(false);
  //const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();

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

  const handleButtonPress = () => {
    const isFormValid = isEmailValid && isPasswordValid;
    if (isFormValid && password === repeatPassword) {
      console.log('form is valid');
      dispatch(signup(email, password));
    } else {
      console.log('form is not valid');
      if (!isEmailValid) {
        setErrorMessage('E-mail is required');
      } else if (password !== repeatPassword) {
        setErrorMessage('Passwords do not match');
      } else {
        setErrorMessage('');
      }
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <View style={general.padding}>
      <View style={styles.center}>
        <Image source={require('../../../assets/cbs-logo.png')} />
      </View>
      {/* <Icon style={styles.tiny} type={IconType.CANCEL}></Icon> */}
      <Text style={typography.h1}>Signup to get access</Text>
      {/* <InputField label="Username" textContentType="username" placeholder="Username" isValid={isUsernameValid} setIsValid={setIsUsernameValid} text={username} setText={setUsername} /> */}
      <View style={forms.formContainer}>
        <InputField label='E-mail' textContentType='emailAddress' placeholder='Email' isValid={isEmailValid} setIsValid={setIsEmailValid} text={email} setText={setEmail} />
        <InputField label='Password' textContentType='password' placeholder='Password' isValid={isPasswordValid} setIsValid={setIsPasswordValid} text={password} setText={setPassword} />
        <InputField
          label='Repeat Password'
          textContentType='password'
          placeholder='Repeat Password'
          isValid={isRepeatPasswordValid}
          setIsValid={setIsRepeatPasswordValid}
          text={repeatPassword}
          setText={setRepeatPassword}
        />

        <Text style={general.errorMessage}>{errorMessage}</Text>
      </View>

      <Button title='Get access' onPress={handleButtonPress} />
      {/* <Button title='Get access' onPress={() => dispatch(signup(email, password))} /> */}
      <Button buttonType='link' title='Already have an account? Login' onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  tiny: {
    width: '5%',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: variables.fontSizes.large,
    fontFamily: variables.fonts.teko.medium,
    color: variables.colors.blue300,
  },
});

export default SignupScreen;
