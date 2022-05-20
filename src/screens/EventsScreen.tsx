import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../App';
import { Button } from '../components/Button';
import InputField from '../components/InputField';
import { Event } from '../entities/Event';
import { addEvent } from '../store/actions/EventActions';
import { forms } from '../styles/Forms';
import { general } from '../styles/General';

const EventsScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const events = useSelector((state: RootState) => state.event.events);
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

  const renderItem = ({ item }: any) => (
    <TouchableOpacity onPress={() => navigation.navigate(item.title, { title: item.title })}>
      <View>
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <View style={general.generalContainer}>
        <View style={[forms.formContainer]}>
          <InputField text={title} setText={setTitle} label='Event name' placeholder='Event name' isValid={isTitleValid} setIsValid={setIsTitleValid} />
          <InputField text={category} setText={setCategory} label='Category' placeholder='Category' isValid={isCategoryValid} setIsValid={setIsCategoryValid} />
          <InputField text={location} setText={setLocation} label='Location' placeholder='Location' isValid={isLocationValid} setIsValid={setIsLocationValid} />
          <InputField text={postalCode} setText={setPostalCode} label='Postal Code' placeholder='Postal Code' isValid={isPostalCodeValid} setIsValid={setIsPostalCodeValid} />
          <InputField text={city} setText={setCity} label='City' placeholder='City' isValid={isCityValid} setIsValid={setIsCityValid} />
        </View>
        <Button title='Add Event' onPress={() => dispatch(addEvent(title))}></Button>
        <FlatList data={events} renderItem={renderItem} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default EventsScreen;
