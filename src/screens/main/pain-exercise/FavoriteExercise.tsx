import { Heart } from 'phosphor-react-native';
import { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const FavoriteExercise = ({ exerciseName }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoritesList, setFavoritesList] = useState([]);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      setFavoritesList([...favoritesList, exerciseName]);
    } else {
      setFavoritesList(favoritesList.filter((item) => item !== exerciseName));
    }
  };

  return (
    <View style={styles.heartContainer}>
      <Pressable onPress={handleFavorite}>
        <Heart size={32} color="orange" weight={isFavorite ? 'fill' : 'regular'} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  heartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 220,
  },
});
export default FavoriteExercise;
