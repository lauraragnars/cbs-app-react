import React from 'react';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';
import { general } from '../../styles/General';
import { typography } from '../../styles/Typography';

export default function SingleEventScreen({ route }: any) {
  const { title, category, location, postalCode, city, imageUrl, description } = route.params;
  return (
    <>
      <SafeAreaView>
        <View style={styles.imageContainer}>
          <ImageBackground source={{ uri: imageUrl }} style={styles.image} />
        </View>
        <View style={general.generalContainer}>
          <Text style={typography.h1}>{title}</Text>
          <Text style={typography.text}>{category}</Text>
          <Text style={typography.text}>
            {location}, {postalCode} {city}
          </Text>
          <Text style={typography.h2}>Description</Text>
          <Text style={typography.text}>{description}</Text>
        </View>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  imageContainer: {
    height: '55%'
  },
  image: {
    resizeMode: 'stretch',
    width: '100%',
    height: '100%'
  }
});
