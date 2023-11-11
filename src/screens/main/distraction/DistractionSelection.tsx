import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Headphones, PaintBrush } from 'phosphor-react-native';
import { Container } from '../../../components';
import { MenuItem } from './MenuItem';

export const DistractionSelection = ({ navigation }): React.ReactElement => {
  return (
    <Container>
      <Text style={styles.headerText}>What would you like to do today?</Text>
      <View style={{ gap: 50, paddingTop: 50 }}>
        <MenuItem
          title="Music"
          icon={<Headphones size={60} />}
          onClick={() => navigation.navigate('Music')}
        />
        <MenuItem
          title="Art"
          icon={<PaintBrush size={60} />}
          onClick={() => navigation.navigate('Art')}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 22,
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
