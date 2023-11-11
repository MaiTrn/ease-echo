import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Container, ItemPreview } from '../../components';
import { Button, Card } from 'react-native-paper';
import SkeletonContent from 'react-native-skeleton-content';
import UserProfile from '../../components/user-profile/UserProfile';
import { palette } from '../../assets/constants';

const Avatar = ({ size }) => (
  <View style={{ width: size, height: size, borderRadius: size / 2, backgroundColor: 'gray' }} />
);

export const Dashboard = ({ navigation }): React.ReactElement => {
  return (
    <Container styleOverrides={styles.dashboard}>
      <Text>Top Nav</Text>
      <UserProfile />
      <View style={styles.dashboardSection}>
        <Text>Favorite Distraction</Text>
        <View style={styles.itemContainer}>
          <ItemPreview title={'Art'} />
          <ItemPreview title={'Music'} />
          <ItemPreview title={'More...'} handlePress={() => navigation.navigate('Distraction')} />
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  dashboard: {
    paddingHorizontal: 37,
    display: 'flex',
    justifyContent: 'flex-start',
  },
  dashboardSection: {
    borderRadius: 13,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  itemContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});
