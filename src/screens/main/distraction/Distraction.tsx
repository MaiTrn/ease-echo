import React, { useState } from 'react';
import { StyleSheet, Text, Switch } from 'react-native';
import { Card } from 'react-native-paper';
import { Headphones } from 'phosphor-react-native';
import { Container, MenuItem } from '../../../components';

export const Distraction = ({ navigation }): React.ReactElement => {
  const [distractionSelected, setDistractionSelected] = useState<string>('');

  return (
    <Container>
      <Text style={styles.headerText}>What would you like to do today?</Text>
      <MenuItem
        title="Music"
        icon={<Headphones />}
        onClick={() => setDistractionSelected('music')}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
