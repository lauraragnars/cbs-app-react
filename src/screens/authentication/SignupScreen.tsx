import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useDispatch } from 'react-redux'
import { signup } from '../../store/actions/UserActions'
import InputField from '../../components/InputField'
import { Button } from '../../components/Button'
import { variables } from '../../styles/Variables'
import { forms } from '../../styles/Forms'
import { typography } from '../../styles/Typography'
import { general } from '../../styles/General'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon, { IconType } from '../../components/Icon'

const SignupScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [isPasswordValid, setIsPasswordValid] = useState(false)
  const [isRepeatPasswordValid, setIsRepeatPasswordValid] = useState(false)
  const [isEmailValid, setIsEmailValid] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const dispatch = useDispatch()

  const handleButtonPress = () => {
    const isFormValid = isEmailValid && isPasswordValid
    if (isFormValid && password === repeatPassword) {
      console.log('form is valid')
      dispatch(signup(email, password))
    } else {
      console.log('form is not valid')
      if (!isEmailValid) {
        setErrorMessage('E-mail is required')
      } else if (password !== repeatPassword) {
        setErrorMessage('Passwords do not match')
      } else {
        setErrorMessage('')
      }
    }
  }

  return (
    <ScrollView keyboardShouldPersistTaps='handled'>
      <SafeAreaView style={general.generalContainer}>
        <View style={styles.image}>
          <View style={styles.icon}>
            <Icon type={IconType.CBS_LOGO} />
          </View>
        </View>
        <Text style={typography.h1}>Signup to get access</Text>
        <View style={forms.formContainer}>
          <InputField label='E-mail' placeholder='Email' isValid={isEmailValid} setIsValid={setIsEmailValid} text={email} setText={setEmail} />
          <InputField label='Password' password={true} placeholder='Password' isValid={isPasswordValid} setIsValid={setIsPasswordValid} text={password} setText={setPassword} />
          <InputField
            label='Repeat Password'
            password={true}
            placeholder='Repeat Password'
            isValid={isRepeatPasswordValid}
            setIsValid={setIsRepeatPasswordValid}
            text={repeatPassword}
            setText={setRepeatPassword}
          />
          {errorMessage ? <Text style={general.errorMessage}>{errorMessage}</Text> : null}
        </View>

        <Button title='Get access' onPress={handleButtonPress} />
        <Button buttonType='link' title='Already have an account? Login' onPress={() => navigation.navigate('Login')} />
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  tiny: {
    width: '5%',
  },
  image: {
    marginTop: 30,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 115,
    height: 115,
  },
  header: {
    fontSize: variables.fontSizes.large,
    fontFamily: variables.fonts.teko.medium,
    color: variables.colors.blue300,
  },
})

export default SignupScreen
