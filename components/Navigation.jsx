import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import ChatScreen from "../screens/navigation/ChatScreen";
import DiscoverScreen from "../screens/navigation/DiscoverScreen";
import MenuScreen from "../screens/navigation/MenuScreen";
import SignupScreen from "../screens/authentication/SignupScreen";
import LoginScreen from "../screens/authentication/LoginScreen";
import HomeScreen from "../screens/navigation/HomeScreen";
import { useSelector } from "react-redux";
import ProfileScreen from "../screens/ProfileScreen";
import EditProfileScreen from "../screens/EditProfileScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Navigation() {
  const user = useSelector((state) => state.user);
  console.log(user);
  return <>{user.idToken ? <MainNavigation /> : <Authentication />}</>;
}

function MainNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Discover" component={DiscoverScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} options={{ tabBarBadge: 3 }} />
      <Tab.Screen name="Menu" component={MenuScreenNavigation} />
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
