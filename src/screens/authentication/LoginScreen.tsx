import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/actions/UserActions';
import { forms } from '../../styles/Forms';
import InputField from '../../components/InputField';
import { Button } from '../../components/Button';
import { typography } from '../../styles/Typography';
import { general } from '../../styles/General';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon, { IconType } from '../../components/Icon';
import { RootState } from '../../../App';
import ErrorMessage from '../../components/ErrorMessage';

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const dispatch = useDispatch();
  const error = useSelector((state: RootState) => state.user.errorMessage);
  const isFormValid = isPasswordValid && isEmailValid;

  return (
    <KeyboardAvoidingView>
      <ScrollView keyboardShouldPersistTaps='handled'>
        <SafeAreaView style={general.generalContainer}>
          <View style={styles.image}>
            <View style={styles.icon}>
              <Icon type={IconType.CBS_LOGO} />
            </View>
          </View>
          <Text style={typography.h1}>Log in</Text>
          <View style={forms.formContainer}>
            <InputField label='E-mail' placeholder='Email' isValid={isEmailValid} setIsValid={setIsEmailValid} text={email} setText={setEmail} />
            <InputField label='Password' password={true} placeholder='Password' isValid={isPasswordValid} setIsValid={setIsPasswordValid} text={password} setText={setPassword} />
          </View>
          <ErrorMessage error={error} />
          <Button buttonType='link' title='Forgot password?' onPress={() => navigation.navigate('ResetPassword')} />
          <Button buttonType={isFormValid ? 'primary' : 'disabled'} title='Login' onPress={() => dispatch(login(email, password))} />
          <Button buttonType='link' title="Don't have an account? Sign up" onPress={() => navigation.navigate('Signup')} />
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  image: {
    marginTop: 30,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 90,
    height: 90
  }
});

export default LoginScreen;
