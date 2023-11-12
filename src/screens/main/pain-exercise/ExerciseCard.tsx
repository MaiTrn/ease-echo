import { Pressable, View, Image, Text, StyleSheet } from 'react-native';
import { palette } from '../../../assets/constants';
import FavoriteExercise from './FavoriteExercise';

export const ExerciseCard = ({ item }) => {
  const handlePress = () => {
    // addFavorite(item);
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Image source={{ uri: item.gifUrl }} style={styles.cardImage} resizeMode="contain" />
        {/* Additional exercise information can go here */}
        <FavoriteExercise exerciseName={item.name} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: palette.primary,
    marginBottom: 8,
  },
  cardImage: {
    width: '100%',
    height: 100,
    marginBottom: 8,
  },
});
