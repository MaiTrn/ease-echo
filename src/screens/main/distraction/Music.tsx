import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Container } from '../../../components';
import { palette } from '../../../assets/constants';
import { fetchMusicData } from '../../../utils/fetchMusicData';

export const renderSongCard = ({ item }) => {
  return (
    <TouchableOpacity>
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        {/* <Image source={{ uri: item.gifUrl }} style={styles.cardImage} resizeMode="contain" /> */}
      </View>
    </TouchableOpacity>
  );
};

const MusicPlayer = () => {
  // const [songs, setSongs] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);

  //     const result = await fetchMusicData(
  //       'https://deezerdevs-deezer.p.rapidapi.com/search?q=relaxing',
  //     );

  //     if (result.error) setError(result.error);

  //     setSongs(result.data);
  //     setIsLoading(false);
  //   };

  //   fetchData();
  // }, []);

  return <Text>Music Player</Text>;
};

const MusicPlaylist = () => {
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const result = await fetchMusicData(
        'https://deezerdevs-deezer.p.rapidapi.com/search?q=relaxing',
      );

      if (result.error) setError(result.error);

      setSongs(result.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" color={palette.primary} />
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : (
        <FlatList
          data={songs}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderSongCard}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export const Music = () => {
  return (
    <Container styleOverrides={{ paddingTop: 50 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Choose a song to relax with</Text>
      </View>
      <MusicPlayer />
      <MusicPlaylist />
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
    backgroundColor: palette.primary,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 15,
  },
  headerText: {
    fontSize: 22,
    fontWeight: '600',
  },
  cardContainer: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    marginBottom: 16,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: palette.primary,
    marginBottom: 8,
  },
  cardImage: {
    width: '100%',
    height: 100,
    marginBottom: 8,
  },
});
