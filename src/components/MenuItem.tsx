import React, { useState } from 'react';
import { StyleSheet, Text, Switch } from 'react-native';
import { Card } from 'react-native-paper';

export const MenuItem = ({ onClick, title, icon }): React.ReactElement => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        {icon}
        <Text style={styles.menuTitle}>{title}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  menuTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
