import React, { useState } from 'react';
import { View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import InputField from '../../components/InputField';
import { addEvent } from '../../store/actions/EventActions';
import { forms } from '../../styles/Forms';
import { general } from '../../styles/General';
import { Button } from '../../components/Button';

const AddNewEventScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [isTitleValid, setIsTitleValid] = useState(false);
  const [category, setCategory] = useState('');
  const [isCategoryValid, setIsCategoryValid] = useState(false);
  const [location, setLocation] = useState('');
  const [isLocationValid, setIsLocationValid] = useState(false);
  const [postalCode, setPostalCode] = useState('');
  const [isPostalCodeValid, setIsPostalCodeValid] = useState(false);
  const [city, setCity] = useState('');
  const [isCityValid, setIsCityValid] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [isImageUrlValid, setIsImageUrlValid] = useState(false);
  const [description, setDescription] = useState('');
  const [isDescriptionValid, setIsDescriptionValid] = useState(false);
  const isFormValid = isTitleValid && isCategoryValid && isLocationValid && isPostalCodeValid && isCityValid && isImageUrlValid && isDescriptionValid;
  const handleButtonClick = () => {
    dispatch(addEvent(title, category, location, postalCode, city, imageUrl, description));
    navigation.navigate('Events');
  };

  return (
    <KeyboardAvoidingView keyboardVerticalOffset={130} style={general.generalContainer}>
      <ScrollView keyboardShouldPersistTaps='handled'>
        <View style={[forms.formContainer]}>
          <InputField text={title} setText={setTitle} label='Event name' placeholder='Event name' isValid={isTitleValid} setIsValid={setIsTitleValid} />
          <InputField text={category} setText={setCategory} label='Category' placeholder='Category' isValid={isCategoryValid} setIsValid={setIsCategoryValid} />
          <InputField text={imageUrl} setText={setImageUrl} label='Image' placeholder='Link to image' isValid={isImageUrlValid} setIsValid={setIsImageUrlValid} />
          <InputField text={location} setText={setLocation} label='Location' placeholder='Location' isValid={isLocationValid} setIsValid={setIsLocationValid} />
          <InputField text={postalCode} setText={setPostalCode} label='Postal Code' placeholder='Postal Code' isValid={isPostalCodeValid} setIsValid={setIsPostalCodeValid} />
          <InputField text={city} setText={setCity} label='City' placeholder='City' isValid={isCityValid} setIsValid={setIsCityValid} />
          <InputField
            text={description}
            setText={setDescription}
            label='Description'
            placeholder='Tell us about your event'
            isValid={isDescriptionValid}
            setIsValid={setIsDescriptionValid}
          />
        </View>
        <Button buttonType={isFormValid ? 'primary' : 'disabled'} title='Add Event' onPress={handleButtonClick}></Button>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddNewEventScreen;
