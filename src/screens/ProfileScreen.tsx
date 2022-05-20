import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../App'
import { logout } from '../store/actions/UserActions'
import { Button } from '../components/Button'
import TextField from '../components/TextField'
import { Image, StyleSheet, Text, View } from 'react-native'
import { typography } from '../styles/Typography'
import { variables } from '../styles/Variables'
import React from 'react'
import { general } from '../styles/General'

export default function ProfileScreen ({ navigation }: any) {
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()

  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
          }}
        />
        <View>
          <Text style={[typography.h1, styles.bigText]}>
            {user.firstName} {user.lastName}
          </Text>
          <Text>{user.email}</Text>
        </View>
      </View>

      {/* <TextField placeholder='Email' label='Email' text={user.email} /> */}
      <View style={general.generalContainer}>
        <Button buttonType='primary' title='Edit Profile' onPress={() => navigation.navigate('Edit profile')} />
        <Button buttonType='secondary' onPress={() => dispatch(logout())} title='Log out' />
      </View>
    </>
  )
}

export const styles = StyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
    flexDirection: 'row',
    maxHeight: 130
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 50,
    marginRight: 20
  },
  smallText: {
    fontSize: 12,
    fontFamily: variables.fonts.openSans.regular
  },
  bigText: {
    marginBottom: 0
  }
})
