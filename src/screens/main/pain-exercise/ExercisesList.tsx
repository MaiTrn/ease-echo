import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { Button } from 'react-native-paper';
import { Container } from '../../../components';
import { palette } from '../../../assets/constants';
import { exerciseOption, fetchExerciseData } from '../../../utils/fetchExerciseData'; // Make sure to import your API call configurations
import { ExerciseCard } from './ExerciseCard';

export const ExerciseList = ({ navigation }): React.ReactElement => {
  const [exercises, setExercises] = useState([]);
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchExerciseData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOption,
      );
      setBodyParts(['all', ...bodyPartsData]);
      console.log(['all', ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (!search) {
      return;
    }
    setLoading(true);
    try {
      if (search) {
        const exercisesData = await fetchExerciseData(
          'https://exercisedb.p.rapidapi.com/exercises',
          exerciseOption,
        );
        const lowerCaseSearch = search.toLowerCase();
        let searchedExercises = exercisesData?.filter(
          (item) =>
            item.name.toLowerCase().includes(lowerCaseSearch) ||
            item.target.toLowerCase().includes(lowerCaseSearch) ||
            item.equipment.toLowerCase().includes(lowerCaseSearch) ||
            item.bodyPart.toLowerCase().includes(lowerCaseSearch),
        );
        if (lowerCaseSearch === 'all') {
          searchedExercises = exercisesData;
        }
        // console.log(searchedExercises);

        setSearch('');
        setExercises(searchedExercises);
      }
    } catch (err) {
      setError('Failed to fetch exercises');
      console.error(err); // Consider a more user-friendly error handling
    }
    setLoading(false);
  };

  return (
    <Container styleOverrides={{ paddingTop: 50 }}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search by body part"
        value={search}
        onChangeText={setSearch}
        onSubmitEditing={handleSearch} // Trigger search when user submits the input
      />
      {loading ? (
        <ActivityIndicator size="large" color={palette.primary} />
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : (
        <FlatList
          data={exercises}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <ExerciseCard item={item} />}
          showsVerticalScrollIndicator={false}
        />
      )}
      <Button mode="contained" onPress={() => navigation.navigate('LevelComplete')}>
        Complete Level
      </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    borderWidth: 1,
    borderColor: palette.primary,
    borderRadius: 28,
    padding: 10,
    margin: 10,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
  },
  exerciseItem: {
    marginBottom: 10,
    // Add your styling here
  },
  exerciseText: {
    color: palette.primary,
    // Add your styling here
  },
});

export default ExerciseList;
