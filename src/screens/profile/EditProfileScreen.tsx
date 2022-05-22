import { useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../App';
import { Button } from '../../components/Button';
import InputField from '../../components/InputField';
import { addUserInfo } from '../../store/actions/UserActions';
import { general } from '../../styles/General';
import { typography } from '../../styles/Typography';

export default function EditProfileScreen({ navigation }: any) {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const [firstNameValid, setFirstNameValid] = useState(false);
  const [lastNameValid, setLastNameValid] = useState(false);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const isFormValid = firstNameValid && lastNameValid;
  const [errorMessage, setErrorMessage] = useState('');

  const handleSafeInfo = () => {
    try {
      dispatch(addUserInfo(firstName, lastName, user.email, user.userId));
    } catch {
      setErrorMessage('Somethin went wrong');
    } finally {
      navigation.navigate('Profile');
    }
  };

  return (
    <>
      <View style={general.generalContainer}>
        <Text style={typography.h1}>Edit Profile</Text>
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
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Button buttonType={isFormValid ? 'primary' : 'disabled'} title='Save changes' onPress={handleSafeInfo} />
      </View>
    </>
  );
}
