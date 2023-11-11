import React from 'react';
import { Container } from '..';
import { Text, StyleSheet, Image, View } from 'react-native';
import * as Progress from 'react-native-progress';

type StatusBarData = {
  progress: number;
  barColor: string;
  containerColor: string;
  trailing: string;
};

const UserProfile = (): React.ReactElement => {
  const lv = 'Level 10';
  const currency = '100 Gold';

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'red',
        width: '100%',
        height: 100,
        justifyContent: 'space-between',
        padding: 0,
        margin: 0,
      }}
    >
      <UserAvatar />
      <Container
        styleOverrides={{
          display: 'flex',
          flexDirection: 'column',
          flex: 'auto',
        }}
      >
        <StatusBar progress={1} barColor="red" containerColor="black" trailing={currency} />
        <StatusBar progress={0.69} barColor="yellow" containerColor="black" trailing={lv} />
      </Container>
    </View>
  );
};

const UserAvatar = (): React.ReactElement => {
  return (
    <Container>
      <Image source={require('../../assets/meow.png')} style={styles.image} />
    </Container>
  );
};

const StatusBar = ({ progress, barColor, containerColor, trailing }: StatusBarData) => {
  return (
    <Container styleOverrides={styles.row}>
      <Progress.Bar
        width={125}
        height={20}
        progress={progress}
        color={barColor}
        unfilledColor={containerColor}
      />
      <View
        style={{
          width: 10,
        }}
      ></View>
      <Text>{trailing}</Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  outerRow: {},
  column: {
    flexDirection: 'column',
    justifyContent: 'space-between', // This will place the two components at the start and end of the row
    alignItems: 'center', // This will vertically center the content
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between', // This will place the two components at the start and end of the row
    alignItems: 'center', // This will vertically center the content
    padding: 10,
    borderWidth: 0,
    paddingBottom: 5,
    paddingTop: 0,
    marginBottom: 0,
    marginTop: 0,
    backgroundColor: 'green',
    width: '80%',
    height: 200,
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },
  container: {
    flex: 1, // This will make the container take up as much space as possible
    marginRight: 10, // Adjust this margin based on your design
  },
  trailingComponent: {
    // Add styles for your trailing component as needed
  },
});

export default UserProfile;
