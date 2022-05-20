import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { general } from '../../styles/General'
import { typography } from '../../styles/Typography'
import { Button } from '../../components/Button'
import { variables } from '../../styles/Variables'
import { SafeAreaView } from 'react-native-safe-area-context'

const VerifyResetPasswordScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.whiteH1}>Check Your Inbox</Text>
        <Text style={styles.whiteText}>We've sent you a verification email. Open it and tap the "Change Password" link to continue.</Text>
        <Image style={styles.image} source={require('../../../assets/rrp.png')} />
        <View style={styles.fullWidth}>
          <Button buttonType='secondary' title='Log in' onPress={() => navigation.navigate('Login')} />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  fullWidth: {
    width: '100%'
  },
  container: {
    backgroundColor: variables.colors.blue200,
    flex: 1,
    justifyContent: 'center'
  },
  innerContainer: {
    padding: 15,
    alignItems: 'center'
  },
  image: {
    width: 250,
    height: 288,
    marginBottom: 50
  },
  whiteH1: {
    fontSize: variables.fontSizes.large,
    fontFamily: variables.fonts.teko.medium,
    color: variables.colors.white,
    marginTop: 10,
    marginBottom: 10
  },
  whiteText: {
    color: variables.colors.white,
    fontSize: variables.fontSizes.normal,
    fontFamily: variables.fonts.openSans.regular,
    textAlign: 'center',
    marginBottom: 40
  }
})

export default VerifyResetPasswordScreen
