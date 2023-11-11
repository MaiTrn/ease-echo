import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { palette } from '../../../assets/constants';
import { Container } from '../../../components';
import { artPrompts } from '../../../assets/art-prompts';
import { Card } from 'react-native-paper';
import { Info, Image as ImageIcon } from 'phosphor-react-native';

export const Art = () => {
  const [photo, setPhoto] = useState(null);

  const artPrompt = artPrompts[Math.floor(Math.random() * artPrompts.length)];

  const handleChoosePhoto = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response) {
        setPhoto(response);
      }
    });
  };

  return (
    <Container>
      <View style={styles.header}>
        <Text style={styles.headerText}>Your art prompt for today is</Text>
      </View>
      <View style={styles.artPrompt}>
        <Text style={styles.artPromptTitle}>{artPrompt.title}</Text>
        <Text style={styles.artPromptText}>{artPrompt.content}</Text>
      </View>
      <View style={styles.extra}>
        <Info size={24} color="#9a9a9a" />
        <Text style={styles.extraText}>
          Feel free to interpret these prompts in your own unique style and let your imagination run
          wild!
        </Text>
      </View>
      <View style={styles.artUpload}>
        <Text style={styles.artUploadHeader}>Upload your creation here to get points</Text>
        <View style={styles.artUploadBox}>
          {photo && <Image source={{ uri: photo.uri }} style={{ width: 300, height: 300 }} />}
          {!photo && (
            <TouchableWithoutFeedback onPress={handleChoosePhoto}>
              <View>
                <ImageIcon size={24} color="#9a9a9a" />
                <Text style={styles.artUploadText}>Select an image or file</Text>
              </View>
            </TouchableWithoutFeedback>
          )}
        </View>
      </View>
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
  artPrompt: {
    width: 300,
    marginHorizontal: 20,
  },
  artPromptTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
  },
  artPromptText: {
    fontSize: 18,
    textAlign: 'center',
  },
  extra: {
    margin: 20,
    padding: 20,
    width: 300,
    backgroundColor: palette.cardBackground,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    gap: 20,
  },
  extraText: {
    fontSize: 14,
    color: palette.textSecondary,
  },
  artUpload: {
    marginTop: 20,
    width: 300,
  },
  artUploadHeader: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'left',
  },
  artUploadBox: {
    marginVertical: 20,
    padding: 20,
    backgroundColor: palette.cardBackground,
    border: '10px dashed #9A9A9A',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  artUploadText: {
    fontSize: 14,
    color: palette.textSecondary,
    textAlign: 'justify',
  },
});
