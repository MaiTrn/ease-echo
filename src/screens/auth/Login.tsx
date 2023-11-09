import React from 'react';
import { Text } from 'react-native';
import { Button, Container, TextInput } from '../../components';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from 'phosphor-react-native';

export const Login = (): React.ReactElement => {
  const navigator = useNavigation();

  const onSignIn = () => {
    navigator.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Main' }],
      }),
    );
  };

  return (
    <Container styleOverrides={{ gap: 20 }}>
      <Text>Login</Text>
      <TextInput icon={<User />} />
      <Button onPress={onSignIn}>
        <Text>Log in</Text>
      </Button>
    </Container>
  );
};
