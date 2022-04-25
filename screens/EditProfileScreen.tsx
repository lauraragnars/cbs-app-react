import { useState } from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import InputField from "../components/InputField";

export default function EditProfileScreen({}) {
  const [inputValid1, setInputValid1] = useState(false);
  const user = useSelector((state) => state.user);
  const [text, setText] = useState(user.username);

  console.log(inputValid1, text);

  return (
    <>
      <Text>Edit Profile</Text>
      <InputField
        isValid={inputValid1}
        setIsValid={setInputValid1}
        placeholder="Input field"
        errorMessage="Invalid name"
        label="Input field"
        text={text}
        setText={setText}
      />
    </>
  );
}
