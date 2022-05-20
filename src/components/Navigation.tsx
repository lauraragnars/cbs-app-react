import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as SecureStore from 'expo-secure-store'

// Screens
<<<<<<< HEAD
import ChatScreen from '../screens/navigation/ChatScreen';
import DiscoverScreen from '../screens/navigation/DiscoverScreen';
import SignupScreen from '../screens/authentication/SignupScreen';
import LoginScreen from '../screens/authentication/LoginScreen';
import HomeScreen from '../screens/navigation/HomeScreen';
import { useSelector } from 'react-redux';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import { RootState } from '../../App';
import Icon, { IconType } from './Icon';
import { variables } from '../styles/Variables';
import ResetPasswordScreen from '../screens/authentication/ResetPasswordScreen';
import VerifyResetPasswordScreen from '../screens/authentication/VerifyResetPasswordScreen';
import DiscoverStack from '../screens/navigation/DiscoverStack';
=======
import ChatScreen from '../screens/navigation/ChatScreen'
import DiscoverScreen from '../screens/navigation/DiscoverScreen'
import SignupScreen from '../screens/authentication/SignupScreen'
import LoginScreen from '../screens/authentication/LoginScreen'
import HomeScreen from '../screens/navigation/HomeScreen'
import { useDispatch, useSelector } from 'react-redux'
import ProfileScreen from '../screens/ProfileScreen'
import EditProfileScreen from '../screens/EditProfileScreen'
import { RootState } from '../../App'
import Icon, { IconType } from './Icon'
import { variables } from '../styles/Variables'
import ResetPasswordScreen from '../screens/authentication/ResetPasswordScreen'
import VerifyResetPasswordScreen from '../screens/authentication/VerifyResetPasswordScreen'
import { useEffect } from 'react'
import { logout, refreshUser, storeUser, storeUserInfo } from '../store/actions/UserActions'
>>>>>>> main

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

export default function Navigation() {
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()

  async function load() {
    const emailFromSecureStore = await SecureStore.getItemAsync('email')
    const tokenFromSecureStore = await SecureStore.getItemAsync('idToken')
    const userIdFromSecureStore = await SecureStore.getItemAsync('userId')
    const firstNameFromSecureStore = await SecureStore.getItemAsync('firstName')
    const lastNameFromSecureStore = await SecureStore.getItemAsync('lastName')
    const refreshTokenFromSecureStore = await SecureStore.getItemAsync('refreshToken')

    if (emailFromSecureStore && tokenFromSecureStore && userIdFromSecureStore && refreshTokenFromSecureStore) {
      console.log('success', emailFromSecureStore)
      dispatch(refreshUser(refreshTokenFromSecureStore))
      dispatch(storeUser(emailFromSecureStore, userIdFromSecureStore))
    } else {
      console.log('fail')
      dispatch(logout)
    }

    if (firstNameFromSecureStore && lastNameFromSecureStore) {
      console.log('User info found')
      dispatch(storeUserInfo(firstNameFromSecureStore, lastNameFromSecureStore))
    } else {
      console.log('No user info found')
    }
  }

  useEffect(() => {
    load()
  }, [])

  return <>{user.idToken ? <MainNavigation /> : <Authentication />}</>
}

function MainNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIconStyle: {
          marginTop: 10,
        },
        tabBarLabelStyle: {
          fontFamily: 'Teko_500Medium',
          fontSize: 16,
          marginBottom: -5,
        },
        headerTitleStyle: {
          fontFamily: 'Teko_500Medium',
          fontSize: variables.fontSizes.large,
          color: variables.colors.blue200,
          textTransform: 'uppercase',
        },
        tabBarActiveTintColor: variables.colors.blue200,
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Icon fill={variables.colors.blue200} type={IconType.HOME} />,
        }}
      />
      <Tab.Screen
        name='Discover'
        component={DiscoverStack}
        options={{
          tabBarIcon: () => <Icon fill={variables.colors.blue200} type={IconType.SEARCH} />,
        }}
      />
      <Tab.Screen
        name='Chat'
        component={ChatScreen}
        options={{
          tabBarBadge: 3,
          tabBarIcon: () => <Icon fill={variables.colors.blue200} type={IconType.CHAT} />,
        }}
      />
      <Tab.Screen
        name='Menu'
        component={MenuScreenNavigation}
        options={{
          tabBarIcon: () => <Icon fill={variables.colors.blue200} type={IconType.MENU} />,
        }}
      />
    </Tab.Navigator>
  )
}

function Authentication() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{
<<<<<<< HEAD
          headerShown: false
=======
          headerShown: false,
>>>>>>> main
        }}
      />
      <Stack.Screen
        name='Signup'
        component={SignupScreen}
        options={{
<<<<<<< HEAD
          headerShown: false
=======
          headerShown: false,
>>>>>>> main
        }}
      />
      <Stack.Screen
        name='ResetPassword'
        component={ResetPasswordScreen}
        options={{
          headerStyle: {
<<<<<<< HEAD
            backgroundColor: 'white'
=======
            backgroundColor: 'white',
>>>>>>> main
          },
          headerTintColor: variables.colors.blue200,
          headerBackTitle: 'BACK',
          headerBackTitleStyle: {
            fontFamily: variables.fonts.teko.medium,
<<<<<<< HEAD
            fontSize: 20
          },
          headerTitleStyle: {
            color: 'white'
          }
=======
            fontSize: 20,
          },
          headerTitleStyle: {
            color: 'white',
          },
>>>>>>> main
        }}
      />
      <Stack.Screen
        name='VerifyResetPassword'
        component={VerifyResetPasswordScreen}
        options={{
<<<<<<< HEAD
          headerShown: false
=======
          headerShown: false,
>>>>>>> main
        }}
      />
    </Stack.Navigator>
  )
}

function MenuScreenNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Profile' component={ProfileScreen} />
      <Stack.Screen name='Edit profile' component={EditProfileScreen} />
    </Stack.Navigator>
  )
}
