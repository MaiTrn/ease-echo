import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { palette } from '../../../assets/constants';
import { Container, Header } from '../../../components';
import { artPrompts } from '../../../assets/art-prompts';
import { Button } from 'react-native-paper';
import { Info, Image as ImageIcon, ArrowUDownLeft, FolderSimpleStar } from 'phosphor-react-native';
import { CommonActions } from '@react-navigation/native';

export const Art = ({ navigation }) => {
  const [photo, setPhoto] = useState(null);

  const artPrompt = artPrompts[Math.floor(Math.random() * artPrompts.length)];

  const handleChoosePhoto = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 300,
        maxWidth: 300,
      },
      (response) => {
        console.log(response);
        setPhoto(response.assets[0]);
      },
    );
  };

  const handleSave = () => {
    navigation.navigate('LevelComplete');
  };

  const handleReset = () => {
    setPhoto(null);
  };

  return (
    <Container>
      <Header
        title="Art distractions"
        leftIcon={<ArrowUDownLeft />}
        rightIcon={<FolderSimpleStar />}
      />
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
        {photo && (
          <Image source={{ uri: photo.uri }} style={{ marginTop: 20, width: 200, height: 200 }} />
        )}
        {!photo && (
          // <View style={styles.artUploadBox}>
          <TouchableWithoutFeedback onPress={handleChoosePhoto}>
            <View style={styles.artUploadBox}>
              <ImageIcon size={24} color="#9a9a9a" />
              <Text style={styles.artUploadText}>Select an image</Text>
            </View>
          </TouchableWithoutFeedback>
          // </View>
        )}
      </View>

      <View style={styles.buttonContainer}>
        <Button mode="outlined" onPress={handleReset} style={styles.resetButton}>
          <Text>Reset</Text>
        </Button>
        <Button mode="contained" onPress={handleSave} style={styles.saveButton} disabled={!photo}>
          <Text>Save</Text>
        </Button>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    marginHorizontal: 20,
  },
  saveButton: {
    flex: 1,
    marginHorizontal: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    backgroundColor: palette.success,
  },
  resetButton: {
    flex: 1,
    marginHorizontal: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    backgroundColor: palette.danger,
  },
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
    gap: 30,
    borderRadius: 13,
  },
  extraText: {
    fontSize: 14,
    color: palette.textSecondary,
  },
  artUpload: {
    marginTop: 20,
    width: 300,
    alignItems: 'center',
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
    borderWidth: 1,
    borderColor: palette.textSecondary,
    borderStyle: 'dashed',
    borderRadius: 5,
    display: 'flex',
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  artUploadText: {
    fontSize: 14,
    color: palette.textSecondary,
    textAlign: 'justify',
  },
});
