import { useState } from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../App";
import InputField from "../components/InputField";

export default function EditProfileScreen({}) {
  const [inputValid1, setInputValid1] = useState(false);
  const [inputValid2, setInputValid2] = useState(false);

  const user = useSelector((state: RootState) => state.user);
  const [text, setText] = useState(user.username);
  const [text2, setText2] = useState(user.username);

  return (
    <>
      <Text>Is form valid? {inputValid1 && inputValid2 ? "Yes" : "No"}</Text>
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

      <InputField
        isValid={inputValid2}
        setIsValid={setInputValid2}
        placeholder="Input field 2"
        errorMessage="Invalid name"
        label="Input field"
        text={text2}
        setText={setText2}
      />
    </>
  );
}
