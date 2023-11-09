import { Text } from 'react-native';
import { Button, Container } from '../../components';
import { CommonActions, useNavigation } from '@react-navigation/native';

export const Exercise = (): React.ReactElement => {
  const navigator = useNavigation();

  return (
    <Container>
      <Text>Exercise!</Text>
      <Button onPress={() => navigator.dispatch(CommonActions.navigate('LevelComplete'))}>
        <Text>Complete Level</Text>
      </Button>
    </Container>
  );
};
