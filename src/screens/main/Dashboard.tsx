import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Container, ItemPreview, ScrollContainer } from '../../components';
import { Plus } from 'phosphor-react-native';
import { palette } from '../../assets/constants';
import UserProfilePanel from '../../components/UserProfilePanel';

export const Dashboard = ({ navigation }): React.ReactElement => {
  return (
    <Container>
      <ScrollContainer styleOverrides={styles.scrollContainer}>
        <UserProfilePanel />
        <View style={styles.dashboardSection}>
          <View style={styles.favoriteExercises}>
            <Text style={styles.sectionTitle}>Favorite Exercises</Text>
            <Pressable
              onPress={() => navigation.reset({ index: 0, routes: [{ name: 'PainExercise' }] })}
            >
              <Plus size={20} color={palette2.primary} />
            </Pressable>
          </View>
          <View style={styles.itemContainer}>
            <ItemPreview title={'Back'} />
            <ItemPreview title={'Neck'} />
            <ItemPreview title={'Hands'} />
            <ItemPreview title={'Legs'} />
            <ItemPreview
              title={'More...'}
              handlePress={() => navigation.reset({ index: 0, routes: [{ name: 'PainExercise' }] })}
            />
          </View>
        </View>
        <View style={styles.dashboardSection}>
          <View style={styles.favoriteExercises}>
            <Text style={styles.sectionTitle}>Favorite Distraction</Text>
            <Pressable
              onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Distraction' }] })}
            >
              <Plus size={20} color={palette2.primary} />
            </Pressable>
          </View>
          <View style={styles.itemContainer}>
            <ItemPreview title={'Art'} handlePress={() => navigation.navigate('Art')} />
            <ItemPreview title={'Music'} handlePress={() => navigation.navigate('Music')} />
            <ItemPreview
              title={'More...'}
              handlePress={() => navigation.reset({ index: 0, routes: [{ name: 'Distraction' }] })}
            />
          </View>
        </View>
      </ScrollContainer>
    </Container>
  );
};

// Define your palette colors in this object
const palette2 = {
  primary: '#007bff',
  lightGrey: '#f0f0f0',
  midGrey: '#d6d6d6',
  darkGrey: '#333',
  red: '#ff3b30',
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 80,
  },
  dashboardSection: {
    borderRadius: 20,
    backgroundColor: palette.lightGray,
    marginVertical: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginVertical: 10,
    marginHorizontal: -12,
    gap: 5,
  },
  favoriteExercises: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: palette.darkGray,
  },
  avatar: {
    backgroundColor: palette.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
