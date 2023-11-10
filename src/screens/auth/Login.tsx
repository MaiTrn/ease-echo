import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button, Container, TextInput } from '../../components';
import { User, SignIn } from 'phosphor-react-native';

export const Login =
  (userType: string) =>
  ({ navigation }): React.ReactElement => {
    const onSignIn = () => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Main' }],
      });
    };

    return (
      <Container styleOverrides={styles.container}>
        <View style={styles.logoContainer}>{}</View>
        <Text style={styles.title}>EASE ECHO</Text>
        <TextInput
          icon={<User weight="bold" />}
          placeholder="Username"
          styleOverrides={styles.input}
        />
        <TextInput
          icon={<SignIn weight="bold" />}
          placeholder="Password"
          secureTextEntry
          styleOverrides={styles.input}
        />
        <Button onPress={onSignIn} containerStyle={styles.button}>
          <Text style={styles.buttonText}>Login as {userType}</Text>
        </Button>
        <Text style={styles.register}>
          Do not have an account? <Text style={styles.registerLink}>Register</Text>
        </Text>
      </Container>
    );
  };

const styles = StyleSheet.create({
  container: {
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logoContainer: {
    marginBottom: 30,
    // Add your logo styles here
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    // Style your TextInput component
  },
  button: {
    // Style your Button component
    marginTop: 10,
  },
  buttonText: {
    // Style the text inside your Button component
  },
  register: {
    marginTop: 20,
  },
  registerLink: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});
