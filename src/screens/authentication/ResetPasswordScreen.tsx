import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import InputField from '../../components/InputField'
import { forms } from '../../styles/Forms'
import { general } from '../../styles/General'
import { typography } from '../../styles/Typography'
import { Button } from '../../components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { requestResetPassword } from '../../store/actions/UserActions'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RootState } from '../../../App'
import ErrorMessage from '../../components/ErrorMessage'

const ResetPasswordScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('')
  const [isEmailValid, setIsEmailValid] = useState(false)
  const dispatch = useDispatch()
  const error = useSelector((state: RootState) => state.user.errorMessage)

  const handleButtonPress = () => {
    dispatch(requestResetPassword(email))
    navigation.navigate('VerifyResetPassword')
  }

  return (
    <ScrollView keyboardShouldPersistTaps='handled'>
      <SafeAreaView style={general.generalContainer}>
        <Text style={typography.h1}>Reset Password</Text>
        <Text style={typography.text}>If you do not know your current password, you can change it.</Text>
        <View style={forms.formContainer}>
          <InputField label='E-mail' placeholder='Email' isValid={isEmailValid} setIsValid={setIsEmailValid} text={email} setText={setEmail} />
        </View>
        <ErrorMessage error={error} />
        <Button buttonType={isEmailValid ? 'primary' : 'disabled'} title='Reset' onPress={handleButtonPress} />
      </SafeAreaView>
    </ScrollView>
  )
}

export default ResetPasswordScreen
