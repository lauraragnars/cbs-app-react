import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../App';
import { Button } from '../components/Button';
import EventCard from '../components/EventCard';
import { fetchEvents } from '../store/actions/EventActions';
import { general } from '../styles/General';

const EventsScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const events = useSelector((state: RootState) => state.event.events);

  useEffect(() => {
    dispatch(fetchEvents());
  }, []);

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(item.title, {
          title: item.title,
          category: item.category,
          location: item.location,
          postalCode: item.postalCode,
          city: item.city,
          imageUrl: item.imageUrl,
          description: item.description
        })
      }
    >
      <EventCard
        title={item.title}
        category={item.category}
        location={item.location}
        postalCode={item.postalCode}
        city={item.city}
        imageUrl={item.imageUrl}
        description={item.description}
      />
    </TouchableOpacity>
  );

  return (
    <>
      <View style={general.generalContainer}>
        <FlatList data={events} renderItem={renderItem} />
        <Button title='Add new event' onPress={() => navigation.navigate('AddEvent')}></Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default EventsScreen;
