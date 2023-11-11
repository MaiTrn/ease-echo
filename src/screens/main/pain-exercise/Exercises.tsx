import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { Container } from '../../../components';
import { palette } from '../../../assets/constants';
import { exerciseOption, fetchData } from '../../../utils/fetchData'; // Make sure to import your API call configurations

export const Exercise = ({ navigation }): React.ReactElement => {
  const [exercises, setExercises] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      // Handle empty search query appropriately
      return;
    }
    setLoading(true);
    try {
      const data = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${searchTerm.toLowerCase()}?limit=5`,
        exerciseOption,
      );
      console.log(data);
      setExercises(data);
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
        value={searchTerm}
        onChangeText={setSearchTerm}
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
          renderItem={({ item }) => (
            <View style={styles.exerciseItem}>
              <Text style={styles.exerciseText}>Exercise Name: {item.name}</Text>
              {/* You can display more exercise details here */}
            </View>
          )}
        />
      )}
      <Button
        mode="contained"
        color={palette.primary}
        onPress={() => navigation.navigate('LevelComplete')}
      >
        Complete Level
      </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    borderWidth: 1,
    borderColor: palette.primary,
    borderRadius: 5,
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
  // Add other styles as needed
});

export default Exercise;
