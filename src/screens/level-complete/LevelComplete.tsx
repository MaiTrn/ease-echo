import LottieView from 'lottie-react-native';
import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { Container } from '../../components';
import { palette } from '../../assets/constants';
import { Button } from 'react-native-paper';
import { CommonActions } from '@react-navigation/native';

export const LevelComplete = ({ navigation }): React.ReactElement => {
  console.log('console.log', navigation);
  return (
    <>
      <Container styleOverrides={{ gap: 20 }}>
        <Image source={require('../../assets/confetti.png')} style={{ width: 150, height: 150 }} />
        <Text style={styles.header}>Congratulations!</Text>
        <Text>You earned 20 points!</Text>
        <Button
          mode="contained"
          style={{ marginBottom: 20, backgroundColor: palette.primary }}
          onPress={() => navigation.navigate('Dashboard')}
        >
          <Text style={{ color: palette.white, fontSize: 16, fontWeight: '600' }}>
            I want more points!
          </Text>
        </Button>
      </Container>
      <LottieView
        source={require('../../assets/confetti.json')}
        autoPlay
        loop
        style={styles.lottie}
        resizeMode="cover"
      />
    </>
  );
};

const styles = StyleSheet.create({
  lottie: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    pointerEvents: 'none',
  },
  header: {
    fontSize: 36,
    fontWeight: 'bold',
    color: palette.primary,
    marginTop: 30,
  },
});
