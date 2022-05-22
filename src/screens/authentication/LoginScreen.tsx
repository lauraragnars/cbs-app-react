import * as SecureStore from 'expo-secure-store'
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { login, storeUser } from '../../store/actions/UserActions'
import { forms } from '../../styles/Forms'
import { RootState } from '../../../App'
import InputField from '../../components/InputField'
import { Button } from '../../components/Button'
import { variables } from '../../styles/Variables'
import { typography } from '../../styles/Typography'
import { general } from '../../styles/General'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon, { IconType } from '../../components/Icon'

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isPasswordValid, setIsPasswordValid] = useState(false)
  const [isEmailValid, setIsEmailValid] = useState(false)
  const dispatch = useDispatch()

  return (
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
        <Button buttonType='link' title='Forgot password?' onPress={() => navigation.navigate('ResetPassword')} />
        <Button title='Login' onPress={() => dispatch(login(email, password))} />
        <Button buttonType='link' title="Don't have an account? Sign up" onPress={() => navigation.navigate('Signup')} />
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  whiteBackground: {
    backgroundColor: variables.colors.white,
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

export default LoginScreen
