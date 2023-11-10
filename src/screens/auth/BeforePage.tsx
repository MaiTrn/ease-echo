import { CommonActions, useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import DocTorLogo from './../../assets/Doctor.svg';

export const BeforePage = () => {
  const navigator = useNavigation();

  // TODO: Handle patient login
  const handlePatientLogin = () => {
    navigator.dispatch(CommonActions.navigate('LoginAsPatient'));
  };

  // Handle doctor login
  const handleDoctorLogin = () => {
    navigator.dispatch(CommonActions.navigate('LoginAsDoctor'));
  };

  // Handle registration
  const handleRegister = () => {
    // TODO: Navigate to registration screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>{/* <DocTorLogo /> */}</View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.patientButton]}
          onPress={handlePatientLogin}
        >
          <Text style={styles.buttonText}>Login as Patient</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.doctorButton]} onPress={handleDoctorLogin}>
          <Text style={styles.buttonText}>Login as Doctor</Text>
        </TouchableOpacity>
        <Text style={styles.registerText} onPress={handleRegister}>
          Don't have an account? Register
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // or any color that matches your design
  },
  logoContainer: {
    // styles for logo container
  },
  buttonContainer: {
    // styles for button container
  },
  button: {
    // Base styles for button
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
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
