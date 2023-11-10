import React from 'react';
import { Button } from 'react-native-paper';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';

import { palette } from '../../assets/constants';

export const Landing = ({ navigation }) => {
  // TODO: Handle patient login
  const handlePatientLogin = () => {
    navigation.navigate('LoginAsPatient');
  };

  // Handle doctor login
  const handleDoctorLogin = () => {
    navigation.navigate('LoginAsDoctor');
  };

  // Handle registration
  const handleRegister = () => {
    // TODO: Navigate to registration screen
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.header}>
        <Image
          source={require('../../assets/patient.png')}
          style={{ marginBottom: 90, width: 300, height: 100 }}
        />
      </View>
      <View style={styles.footer}>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: palette.background,
          }}
        >
          <View style={styles.footerContent}>
            <Text style={styles.subTitle}>Ease Echo</Text>
            <View style={styles.buttonContainer}>
              <Button mode="contained" style={styles.button} onPress={handlePatientLogin}>
                <Text style={styles.buttonText}>Login as Patient</Text>
              </Button>
              <Button mode="contained" style={styles.button} onPress={handleDoctorLogin}>
                <Text style={styles.buttonText}>Login as Doctor</Text>
              </Button>
              <Text style={styles.registerText} onPress={handleRegister}>
                Don't have an account? Register
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.background,
  },
  header: {
    flex: 1,
    backgroundColor: palette.background,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  footer: {
    height: 400,
  },
  footerContent: {
    flex: 1,
    backgroundColor: palette.secondary,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 50,
  },
  subTitle: {
    color: palette.primary,
    textAlign: 'center',
    marginBottom: 12,
    fontSize: 40,
    fontWeight: '600',
  },
  buttonContainer: {
    // styles for button container
  },
  button: {
    // Base styles for button
    marginVertical: 10,
    backgroundColor: palette.primary,
  },
  patientButton: {
    // Additional styles for patient button
    backgroundColor: '#007bff',
  },
  doctorButton: {
    // Additional styles for doctor button
    backgroundColor: '#007bff',
  },
  buttonText: {
    // Styles for text inside button
    textAlign: 'center',
    color: '#fff', // Replace with your color
  },
  registerText: {
    marginTop: 20,
  },
});
