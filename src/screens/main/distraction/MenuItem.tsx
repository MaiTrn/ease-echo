import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { palette } from '../../../assets/constants';

export const MenuItem = ({ onClick, title, icon }): React.ReactElement => {
  return (
    <Card style={styles.card} mode="contained">
      <TouchableOpacity style={styles.buttonContainer} onPress={onClick}>
        <Card.Content style={styles.cardContent}>
          {icon}
          <Text style={styles.menuTitle}>{title}</Text>
        </Card.Content>
      </TouchableOpacity>
    </Card>
  );
};

const styles = StyleSheet.create({
  menuTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flex: 1,
    flexGrow: 1,
    width: 250,
    borderRadius: 15,
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 188,
    backgroundColor: palette.cardBackground,
  },
  cardContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
});
