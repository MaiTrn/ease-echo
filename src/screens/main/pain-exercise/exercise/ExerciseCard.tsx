import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-vector-icons';

const ExerciseCard = ({ exercise, isFavorite }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: exercise.image }} />
      <View style={styles.info}>
        <Text style={styles.title}>{exercise.name}</Text>
        <Text style={styles.description}>{exercise.description}</Text>
      </View>
      <Icon name={isFavorite ? 'star' : 'star-outline'} color="#ffd700" />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    // flexDirection: 'row',
    // padding: 10,
    // marginVertical: 8,
    // backgroundColor: '#fff',
    // borderRadius: 5,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.22,
    // shadowRadius: 2.22,
    // elevation: 3,
    // alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 25,
  },
  info: {
    flex: 1,
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  description: {
    color: 'gray',
  },
});

export default ExerciseCard;
