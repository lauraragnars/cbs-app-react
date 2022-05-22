import React, { useState } from 'react';
import { View, StyleSheet, Button, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-native-datepicker';
import InputField from '../../components/InputField';
import { addEvent } from '../../store/actions/EventActions';
import { forms } from '../../styles/Forms';
import { general } from '../../styles/General';
import { variables } from '../../styles/Variables';

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
  const [date, setDate] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isImageUrlValid, setIsImageUrlValid] = useState(false);
  const [description, setDescription] = useState('');
  const [isDescriptionValid, setIsDescriptionValid] = useState(false);

  const handleButtonClick = () => {
    dispatch(addEvent(title, category, location, postalCode, city, imageUrl, description));
    navigation.navigate('Events');
  };

  return (
    <KeyboardAvoidingView style={general.generalContainer} keyboardVerticalOffset={230}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View style={[forms.formContainer]}>
            <InputField text={title} setText={setTitle} label='Event name' placeholder='Event name' isValid={isTitleValid} setIsValid={setIsTitleValid} />
            <InputField text={category} setText={setCategory} label='Category' placeholder='Category' isValid={isCategoryValid} setIsValid={setIsCategoryValid} />
            <InputField text={imageUrl} setText={setImageUrl} label='Image' placeholder='Link to image' isValid={isImageUrlValid} setIsValid={setIsImageUrlValid} />
            <View style={styles.datePickerContainer}>
              <Text style={styles.date}>Date</Text>
              <DatePicker
                date={date}
                mode='date'
                placeholder='Select date'
                format='DD/MM/YYYY'
                minDate='01-01-2022'
                maxDate='01-01-2060'
                confirmBtnText='Confirm'
                cancelBtnText='Cancel'
                showIcon={false}
                customStyles={{
                  dateInput: {
                    borderColor: variables.colors.gray,
                    alignItems: 'flex-start',
                    borderWidth: 0,
                    borderBottomWidth: 1,
                    justifyContent: 'flex-start'
                  },
                  placeholderText: {
                    fontSize: variables.fontSizes.normal,
                    color: variables.colors.gray,
                    fontFamily: variables.fonts.openSans.regular,
                    marginTop: 3
                  },
                  dateText: {
                    fontSize: 17
                  }
                }}
                onDateChange={(date: any) => {
                  setDate(date);
                }}
              />
            </View>
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
          <Button title='Add Event' onPress={handleButtonClick}></Button>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  datePickerContainer: {
    width: '100%',
    padding: 10
  },
  date: {
    fontFamily: variables.fonts.openSans.bold,
    fontSize: variables.fontSizes.xsmall,
    color: variables.colors.blue300,
    textTransform: 'uppercase'
  }
});

export default AddNewEventScreen;
