import { View, Text, StyleSheet } from 'react-native';
import { Button } from '../../components';
// import DocTorLogo from './../../assets/Doctor.svg';

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
      <View style={styles.logoContainer}>{/* <DocTorLogo /> */}</View>
      <View style={styles.buttonContainer}>
        <Button containerStyle={styles.button} onPress={handlePatientLogin}>
          <Text style={styles.buttonText}>Login as Patient</Text>
        </Button>
        <Button containerStyle={styles.button} onPress={handleDoctorLogin}>
          <Text style={styles.buttonText}>Login as Doctor</Text>
        </Button>
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
