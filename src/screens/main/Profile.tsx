import { Text } from 'react-native';
import { Button, Container } from '../../components';

export const Profile = ({ navigation }): React.ReactElement => {
  const onSignOut = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Landing' }],
    });
  };

  return (
    <Container>
      <Button onPress={onSignOut}>
        <Text>Log out</Text>
      </Button>
    </Container>
  );
};
