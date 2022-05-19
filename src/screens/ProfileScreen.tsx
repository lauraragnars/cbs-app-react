import { useSelector } from 'react-redux';
import { RootState } from '../../App';
import { useDispatch } from 'react-redux';
import { logout } from '../store/actions/UserActions';
import { Button } from '../components/Button';
import TextField from '../components/TextField';
import { Text } from 'react-native';

export default function ProfileScreen({ navigation }: any) {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const userFullName = user.firstName + user.lastName;

  return (
    <>
      <Text>{userFullName}</Text>

      <TextField placeholder='Email' label='Email' text={user.email} />
      <Button buttonType='primary' title='Edit Profile' onPress={() => navigation.navigate('Edit profile')} />
      <Button buttonType='secondary' onPress={() => dispatch(logout())} title='Log out' />
    </>
  );
}
