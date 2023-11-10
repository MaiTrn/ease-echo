import React from 'react';
import { Container } from '..';
import { Text, StyleSheet } from 'react-native';
import ProgressBar from '@ramonak/react-progress-bar';

type StatusBarData = {
  completed;
};

const UserProfile = (): React.ReactElement => {
  return (
    <Container>
      <UserAvatar />
    </Container>
  );
};

const UserAvatar = (): React.ReactElement => {
  const lv = <Text>"Level 10"</Text>;
  const currency = <Text>"100 Gold"</Text>;

  return (
    <Container styleOverrides={styles.column}>
      <StatusBar trailing={currency} />
      <StatusBar trailing={lv} />
    </Container>
  );
};

const StatusBar = ({ trailing }: any) => {
  return (
    <Container styleOverrides={styles.row}>
      <ProgressBar completed={69} bgColor="black" />
    </Container>
  );
};

const styles = StyleSheet.create({
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
    borderWidth: 1,
    borderColor: 'black',
  },
  container: {
    flex: 1, // This will make the container take up as much space as possible
    marginRight: 10, // Adjust this margin based on your design
  },
  trailingComponent: {
    // Add styles for your trailing component as needed
  },
});
