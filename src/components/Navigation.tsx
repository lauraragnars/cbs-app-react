import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import ChatScreen from "../screens/navigation/ChatScreen";
import DiscoverScreen from "../screens/navigation/DiscoverScreen";
import SignupScreen from "../screens/authentication/SignupScreen";
import LoginScreen from "../screens/authentication/LoginScreen";
import HomeScreen from "../screens/navigation/HomeScreen";
import { useSelector } from "react-redux";
import ProfileScreen from "../screens/ProfileScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import { RootState } from "../../App";
import Icon, { IconType } from "./Icon";
import { variables } from "../styles/Variables";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Navigation() {
  const user = useSelector((state: RootState) => state.user);
  console.log(user, "user on nav");
  return <>{user.idToken ? <MainNavigation /> : <Authentication />}</>;
}

function MainNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: () => (
          <Icon fill={variables.colors.blue200} type={IconType.HOME} />
        ),
        tabBarIconStyle: {
          marginTop: 10,
        },
        tabBarLabelStyle: {
          fontFamily: 'Teko_500Medium',
          fontSize: 16,
          marginBottom: -5
        }
      }}  />
      <Tab.Screen name="Discover" component={DiscoverScreen} options={{
        tabBarIcon: () => (
          <Icon fill={variables.colors.blue200} type={IconType.SEARCH} />
        ),
        tabBarIconStyle: {
          marginTop: 10,
        },
        tabBarLabelStyle: {
          fontFamily: 'Teko_500Medium',
          fontSize: 16,
          marginBottom: -5
        },
      }} />
      <Tab.Screen name="Chat" component={ChatScreen} options={{ 
        tabBarBadge: 3, 
        tabBarIcon: () => (
          <Icon fill={variables.colors.blue200} type={IconType.CHAT} />
        ), 
        tabBarIconStyle: {
          marginTop: 10,
        },
        tabBarLabelStyle: {
          fontFamily: 'Teko_500Medium',
          fontSize: 16,
          marginBottom: -5
        }
      }} />
      <Tab.Screen name="Menu" component={MenuScreenNavigation} options={{ 
        tabBarIcon: () => (
          <Icon fill={variables.colors.blue200} type={IconType.MENU} />
        ), 
        tabBarIconStyle: {
          marginTop: 10,
        },
        tabBarLabelStyle: {
          fontFamily: 'Teko_500Medium',
          fontSize: 16,
          marginBottom: -5
        },
      }} />
    </Tab.Navigator>
  );
}

function Authentication() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function MenuScreenNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Edit profile" component={EditProfileScreen} />
    </Stack.Navigator>
  );
}
