import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import InputField from '../../components/InputField';
import { forms } from '../../styles/Forms';
import { general } from '../../styles/General';
import { typography } from '../../styles/Typography';
import { Button } from '../../components/Button';

import { useDispatch, useSelector } from 'react-redux';
import { requestResetPassword } from '../../store/actions/UserActions';

const ResetPasswordScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const dispatch = useDispatch();

  const handleButtonPress = () => {
    if (isEmailValid) {
      console.log('email is valid');
      //Add check if email is in database
      dispatch(requestResetPassword(email));
      navigation.navigate('VerifyResetPassword');
    } else {
      console.log('reset did not go through');
      // if (!isEmailValid) {
      //   setErrorMessage('E-mail is required');
      // } else if (password !== repeatPassword) {
      //   setErrorMessage('Passwords do not match');
      // } else {
      //   setErrorMessage('');
      // }
    }
  };

  return (
    <View style={general.padding}>
      <Text style={typography.h1}>Reset Password</Text>
      <Text style={typography.text}>If you do not know your current password, you can change it.</Text>
      <View style={forms.formContainer}>
        <InputField label='E-mail' textContentType='emailAddress' placeholder='Email' isValid={isEmailValid} setIsValid={setIsEmailValid} text={email} setText={setEmail} />
      </View>

      <Button title='Reset' onPress={handleButtonPress} />
    </View>
  );
};

export default ResetPasswordScreen;
