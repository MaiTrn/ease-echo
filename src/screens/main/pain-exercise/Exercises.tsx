import { Text } from 'react-native';
import { Button, Container } from '../../../components';

export const Exercise = ({ navigation, route }): React.ReactElement => {
  const { bodyParts } = route.params;

  return (
    <Container>
      {bodyParts?.map((item: string) => (
        <Text>{item}</Text>
      ))}
      <Text>Exercise!</Text>
      <Button onPress={() => navigation.navigate('LevelComplete')}>
        <Text>Complete Level</Text>
      </Button>
    </Container>
  );
};
