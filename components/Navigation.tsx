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
import { RootState } from "../App";
import Icon, { IconType } from "./Icon";

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
          <Icon type={IconType.HOME} />
        ),
      }}  />
      <Tab.Screen name="Discover" component={DiscoverScreen} options={{
        tabBarIcon: () => (
          <Icon type={IconType.SEARCH} />
        ),
      }} />
      <Tab.Screen name="Chat" component={ChatScreen} options={{ 
        tabBarBadge: 3, 
        tabBarIcon: () => (
          <Icon type={IconType.CHAT} />
        ), 
      }} />
      <Tab.Screen name="Menu" component={MenuScreenNavigation} options={{ 
        tabBarIcon: () => (
          <Icon type={IconType.MENU} />
        ), 
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
