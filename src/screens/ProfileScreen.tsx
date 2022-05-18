import { Button, Text } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../App";

export default function ProfileScreen({ navigation }: any) {
  const user = useSelector((state: RootState) => state.user);

  return (
    <>
      <Text>Profile</Text>
      <Text>{user.email}</Text>
      <Button title="Edit Profile" onPress={() => navigation.navigate("Edit profile")} />
    </>
  );
}
