import { useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../App';
import { Button } from '../components/Button';
import InputField from '../components/InputField';
import { addUserInfo } from '../store/actions/UserActions';

export default function EditProfileScreen({}) {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  //console.log(user['lastName'], 'useruseruser');
  const [firstNameValid, setFirstNameValid] = useState(false);
  const [lastNameValid, setLastNameValid] = useState(false);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const isFormValid = firstNameValid && lastNameValid;

  return (
    <>
      <Text>Is form valid? {isFormValid ? 'Yes' : 'No'}</Text>
      <Text>Edit Profile</Text>
      <View>
        <InputField
          isValid={firstNameValid}
          setIsValid={setFirstNameValid}
          placeholder='First Name'
          errorMessage='Please enter a name'
          label='First name '
          text={firstName}
          setText={setFirstName}
        />

        <InputField
          isValid={lastNameValid}
          setIsValid={setLastNameValid}
          placeholder='Last name'
          errorMessage='Please enter a name'
          label='Last name'
          text={lastName}
          setText={setLastName}
        />
      </View>

      <Button buttonType='primary' title='Save info' onPress={() => dispatch(addUserInfo(firstName, lastName, user.email))} />
    </>
  );
}
