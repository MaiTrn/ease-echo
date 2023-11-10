import { Text } from 'react-native';
import { Container } from '../../components';
import { Button } from 'react-native-paper';
import { palette } from '../../assets/constants';

export const Profile = ({ navigation }): React.ReactElement => {
  const onSignOut = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Landing' }],
    });
  };

  return (
    <Container>
      <Button mode="contained" buttonColor={palette.primary} onPress={onSignOut}>
        <Text>Log out</Text>
      </Button>
    </Container>
  );
};
