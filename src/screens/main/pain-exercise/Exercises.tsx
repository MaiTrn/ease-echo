import { Text } from 'react-native';
import { Button, Container } from '../../../components';
import { CommonActions } from '@react-navigation/native';

export const Exercise = ({ navigation }): React.ReactElement => {
  return (
    <Container>
      <Text>Exercise!</Text>
      <Button onPress={() => navigation.dispatch(CommonActions.navigate('LevelComplete'))}>
        <Text>Complete Level</Text>
      </Button>
    </Container>
  );
};
