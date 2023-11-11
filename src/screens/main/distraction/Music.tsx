import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-paper';
import { Container } from '../../../components';
import { palette } from '../../../assets/constants';
import { musicOption, fetchMusicData } from '../../../utils/fetchMusicData'; // Make sure to import your API call configurations

export const Music = () => {
  return (
    <Container>
      <Text>a</Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  musicPlayer: {
    borderRadius: 12,
  },
});
