import { View, FlatList, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-screens';
import ExerciseCard from './ExerciseCard';

// Dummy data for exercise cards
const exercises = [
  {
    id: '1',
    image: 'https://i.ytimg.com/vi/XNYzGnyywtk/maxresdefault.jpg',
    name: 'Yatoro God',
    description: 'TI 12 Winner',
    isFavorite: true,
  },
  {
    id: '1',
    image: 'https://i.ytimg.com/vi/XNYzGnyywtk/maxresdefault.jpg',
    name: 'Yatoro God',
    description: 'TI 12 Winner',
    isFavorite: true,
  },
  {
    id: '1',
    image: 'https://i.ytimg.com/vi/XNYzGnyywtk/maxresdefault.jpg',
    name: 'Yatoro God',
    description: 'TI 12 Winner',
    isFavorite: true,
  },
  {
    id: '1',
    image: 'https://i.ytimg.com/vi/XNYzGnyywtk/maxresdefault.jpg',
    name: 'Yatoro God',
    description: 'TI 12 Winner',
    isFavorite: true,
  },
  {
    id: '1',
    image: 'https://i.ytimg.com/vi/XNYzGnyywtk/maxresdefault.jpg',
    name: 'Yatoro God',
    description: 'TI 12 Winner',
    isFavorite: true,
  },
  {
    id: '1',
    image: 'https://i.ytimg.com/vi/XNYzGnyywtk/maxresdefault.jpg',
    name: 'Yatoro God',
    description: 'TI 12 Winner',
    isFavorite: true,
  },
];

export const ExerciseList = () => {
  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={<SearchBar placeholder="Search Exercise" />}
      data={exercises}
      renderItem={({ item }) => <ExerciseCard exercise={item} isFavorite={item.isFavorite} />}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});
