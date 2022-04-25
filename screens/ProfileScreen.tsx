import { Button, Text } from "react-native";
import { useSelector } from "react-redux";

export default function ProfileScreen({ navigation }: any) {
  const user = useSelector((state) => state.user);

  return (
    <>
      <Text>Profile</Text>
      <Text>{user.email}</Text>
      <Button title="Edit Profile" onPress={() => navigation.navigate("Edit profile")} />
    </>
  );
}
