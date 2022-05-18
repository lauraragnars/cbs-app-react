import { Text } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../App";
import { useDispatch } from "react-redux";
import { logout } from "../store/actions/UserActions";
import { Button } from "../components/PrimaryButton";
import InputField from "../components/InputField";
import TextField from "../components/TextField";


export default function ProfileScreen({ navigation }: any) {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  return (
    <>
      <TextField
        placeholder="Email"
        label="Email"
        text={user.email}
      />
      <Button buttonType="primary" title="Edit Profile" onPress={() => navigation.navigate("Edit profile")} />

      <Button buttonType="secondary" onPress={() => dispatch(logout())} title="Log out"/> 

    </>
  );
}
