import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import DiscoverCard from '../../components/DiscoverCard';

const DiscoverScreen = ({ navigation }: any) => {
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate('Events')}>
        <DiscoverCard title='All Events' cardType='purple' />
      </TouchableOpacity>
      <DiscoverCard title='All Student Organisations' cardType='blue' />
      <DiscoverCard title='All Posts' cardType='green' />
    </>
  );
};

const styles = StyleSheet.create({});

export default DiscoverScreen;
