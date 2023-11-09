import { Text, View } from 'react-native';
import { Button, Container } from '../../components';
import { CommonActions, useNavigation } from '@react-navigation/native';

export const Profile = (): React.ReactElement => {
  const navigator = useNavigation();

  const onSignOut = () => {
    navigator.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      }),
    );
  };

  return (
    <Container>
      <Button onPress={onSignOut}>
        <Text>Log out</Text>
      </Button>
    </Container>
  );
};
