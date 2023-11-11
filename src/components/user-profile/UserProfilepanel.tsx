import React from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';
import { Bar } from 'react-native-progress';
import { palette } from '../../assets/constants';

type StatusBarData = {
  progress: number;
  barColor: string;
  containerColor: string;
  trailing: string;
};

const UserProfilePanel = (): React.ReactElement => {
  const lv = 'Level 10';
  const currency = '100 Gold';

  return (
    <View style={styles.outerPanel}>
      <UserAvatar />
      <View style={styles.statusBarWrapper}>
        <Text style={styles.usernameText}>Meow Knight</Text>
        <StatusBar progress={1} barColor="#FF4136" containerColor="#F0F0F0" trailing={currency} />
        <StatusBar progress={0.69} barColor="#0074D9" containerColor="#F0F0F0" trailing={lv} />
      </View>
    </View>
  );
};

const UserAvatar = (): React.ReactElement => {
  return (
    <View style={styles.avatarBg}>
      <Image source={require('../../assets/meow.png')} style={styles.image} />
    </View>
  );
};

const StatusBar = ({ progress, barColor, containerColor, trailing }: StatusBarData) => {
  return (
    <View style={styles.barContainer}>
      <Bar
        width={null}
        height={10}
        progress={progress}
        color={barColor}
        unfilledColor={containerColor}
        borderWidth={0}
        borderRadius={5}
        useNativeDriver={false}
        style={styles.progressBar}
      />
      <Text style={styles.trailingText}>{trailing}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  outerPanel: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: palette.lightGray, // Light background color
    borderRadius: 10, // Rounded corners
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statusBarWrapper: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
  },
  avatarBg: {
    backgroundColor: '#A333C8', // Vibrant purple color
    borderRadius: 50, // Fully rounded corners for the circle
    width: 80, // Slightly smaller avatar
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 60, // Slightly larger image to fill avatar space
    height: 60,
    borderRadius: 30, // Rounded corners for the image
  },
  usernameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333', // Dark color for text for better readability
    marginBottom: 4, // Space between name and progress bar
  },
  barContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2, // Space between bars
  },
  progressBar: {
    flex: 1, // Take up available space
    marginRight: 10, // Space between bar and trailing text
  },
  trailingText: {
    fontSize: 12,
    color: '#333333', // Dark color for text for better readability
  },
});

export default UserProfilePanel;
