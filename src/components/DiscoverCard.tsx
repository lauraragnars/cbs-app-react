import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { variables } from '../styles/Variables';

interface DiscoverCardProps {
  title: string;
  cardType: 'purple' | 'blue' | 'green';
}

export default function DiscoverCard({ title, cardType }: DiscoverCardProps) {
  switch (cardType) {
    case 'purple':
      return (
        <View style={styles.container}>
          <ImageBackground source={require('../../assets/eventspic.png')} style={styles.image} imageStyle={{ borderRadius: 7 }}>
            <View style={[styles.purpleCard, styles.overlay]} />
            <Text style={styles.cardTitle}>{title}</Text>
          </ImageBackground>
        </View>
      );
    case 'blue':
      return (
        <View style={styles.container}>
          <ImageBackground source={require('../../assets/studentorganisationspic.png')} style={styles.image} imageStyle={{ borderRadius: 7 }}>
            <View style={[styles.blueCard, styles.overlay]} />
            <Text style={styles.cardTitle}>{title}</Text>
          </ImageBackground>
        </View>
      );
    case 'green':
      return (
        <View style={styles.container}>
          <ImageBackground source={require('../../assets/allpostspic.png')} style={styles.image} imageStyle={{ borderRadius: 7 }}>
            <View style={[styles.greenCard, styles.overlay]} />
            <Text style={styles.cardTitle}>{title}</Text>
          </ImageBackground>
        </View>
      );
  }
}
const styles = StyleSheet.create({
  container: {
    height: 140,
    margin: 15,
    borderRadius: 7
  },
  cardTitle: {
    color: variables.colors.white,
    fontSize: variables.fontSizes.large,
    fontFamily: variables.fonts.teko.medium,
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  overlay: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    borderRadius: 7
  },
  purpleCard: {
    backgroundColor: variables.colors.purple,
    opacity: 0.8
  },
  blueCard: {
    backgroundColor: variables.colors.blue300,
    opacity: 0.8
  },
  greenCard: {
    backgroundColor: variables.colors.green,
    opacity: 0.8
  },
  image: {
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    borderRadius: 7
  }
});
