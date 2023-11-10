import { FlatList, Text } from 'react-native';
import { Button } from 'react-native-paper';

import { Container } from '../../../components';
import { palette } from '../../../assets/constants';
import { ExerciseList } from './exercise/ExerciseList';

export const Exercise = ({ navigation, route }): React.ReactElement => {
  const { bodyParts } = route.params;

  return (
    <Container>
      {bodyParts?.map((item: string) => (
        <Text>{item}</Text>
      ))}
      <Text>Exercise!</Text>
      <Button
        mode="contained"
        buttonColor={palette.primary}
        onPress={() => navigation.navigate('LevelComplete')}
      >
        <Text>Complete Level</Text>
      </Button>
      <ExerciseList />
    </Container>
  );
};
