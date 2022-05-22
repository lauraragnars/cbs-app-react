import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { variables } from '../styles/Variables';

interface EventCardProps {
  title: string;
  category: string;
  location: string;
  postalCode: string;
  imageUrl: string;
  city: string;
  description?: string;
}

export default function EventCard({ title, category, location, postalCode, city, imageUrl, description }: EventCardProps) {
  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: imageUrl }} style={styles.image} imageStyle={{ borderRadius: 7 }}>
        <View style={styles.overlay} />
        <View style={styles.innerContainer}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardInfo}>{category}</Text>
          <Text style={styles.cardInfo}>
            {location}, {postalCode} {city}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 160,
    margin: 10,
    borderRadius: 7,
    justifyContent: 'flex-end'
  },
  innerContainer: {
    padding: 15
  },
  cardTitle: {
    color: variables.colors.white,
    fontSize: variables.fontSizes.large,
    fontFamily: variables.fonts.teko.medium
  },
  cardInfo: {
    color: variables.colors.white,
    fontFamily: variables.fonts.openSans.regular,
    fontSize: variables.fontSizes.normal
  },
  overlay: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    borderRadius: 7,
    backgroundColor: 'black',
    opacity: 0.6
  },

  image: {
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    borderRadius: 7
  }
});
