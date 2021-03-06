import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SecureStore from 'expo-secure-store';
import { RootState } from '../../App';
import { variables } from '../styles/Variables';
import Icon, { IconType } from './Icon';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { logout, refreshUser, storeUser, storeUserInfo } from '../store/actions/UserActions';

// Screens
import ChatScreen from '../screens/chat/ChatScreen';
import SignupScreen from '../screens/authentication/SignupScreen';
import LoginScreen from '../screens/authentication/LoginScreen';
import HomeScreen from '../screens/home/HomeScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import EditProfileScreen from '../screens/profile/EditProfileScreen';
import ResetPasswordScreen from '../screens/authentication/ResetPasswordScreen';
import VerifyResetPasswordScreen from '../screens/authentication/VerifyResetPasswordScreen';
import DiscoverStack from '../screens/discover/DiscoverStack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Navigation() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  async function load() {
    const emailFromSecureStore = await SecureStore.getItemAsync('email');
    const tokenFromSecureStore = await SecureStore.getItemAsync('idToken');
    const userIdFromSecureStore = await SecureStore.getItemAsync('userId');
    const firstNameFromSecureStore = await SecureStore.getItemAsync('firstName');
    const lastNameFromSecureStore = await SecureStore.getItemAsync('lastName');
    const refreshTokenFromSecureStore = await SecureStore.getItemAsync('refreshToken');

    if (emailFromSecureStore && tokenFromSecureStore && userIdFromSecureStore && refreshTokenFromSecureStore) {
      dispatch(refreshUser(refreshTokenFromSecureStore));
      dispatch(storeUser(emailFromSecureStore, userIdFromSecureStore));
    } else {
      dispatch(logout);
    }

    if (firstNameFromSecureStore && lastNameFromSecureStore) {
      dispatch(storeUserInfo(firstNameFromSecureStore, lastNameFromSecureStore));
    }
  }

  useEffect(() => {
    load();
  }, []);

  return <>{user.idToken ? <MainNavigation /> : <Authentication />}</>;
}

function MainNavigation() {
  const chatrooms = useSelector((state: RootState) => state.chat.chatrooms);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIconStyle: {
          marginTop: 10
        },
        tabBarLabelStyle: {
          fontFamily: 'Teko_500Medium',
          fontSize: 16,
          marginBottom: -5
        },
        headerTitleStyle: {
          fontFamily: 'Teko_500Medium',
          fontSize: variables.fontSizes.large,
          color: variables.colors.blue200,
          textTransform: 'uppercase'
        },
        tabBarActiveTintColor: variables.colors.blue200
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Icon fill={variables.colors.blue200} type={IconType.HOME} />
        }}
      />
      <Tab.Screen
        name='Discover'
        component={DiscoverStack}
        options={{
          tabBarIcon: () => <Icon fill={variables.colors.blue200} type={IconType.SEARCH} />
        }}
      />
      <Tab.Screen
        name='Chat'
        component={ChatScreen}
        options={{
          tabBarBadge: chatrooms.length ? chatrooms.length : 0,
          tabBarIcon: () => <Icon fill={variables.colors.blue200} type={IconType.CHAT} />
        }}
      />
      <Tab.Screen
        name='Menu'
        component={MenuScreenNavigation}
        options={{
          tabBarIcon: () => <Icon fill={variables.colors.blue200} type={IconType.MENU} />
        }}
      />
    </Tab.Navigator>
  );
}

function Authentication() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='Signup'
        component={SignupScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='ResetPassword'
        component={ResetPasswordScreen}
        options={{
          headerStyle: {
            backgroundColor: 'white'
          },
          headerTintColor: variables.colors.blue200,
          headerBackTitle: 'BACK',
          headerBackTitleStyle: {
            fontFamily: variables.fonts.teko.medium,
            fontSize: 20
          },
          headerTitleStyle: {
            color: 'white'
          }
        }}
      />
      <Stack.Screen
        name='VerifyResetPassword'
        component={VerifyResetPasswordScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}

function MenuScreenNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='Profile' component={ProfileScreen} />
      <Stack.Screen name='Edit profile' component={EditProfileScreen} />
    </Stack.Navigator>
  );
}
