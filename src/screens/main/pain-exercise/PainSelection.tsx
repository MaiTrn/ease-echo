import React, { useState } from 'react';
import { StyleSheet, Text, Switch, View, ScrollView } from 'react-native';
import Body from 'react-native-body-highlighter';
import { Container, Header, ScrollContainer } from '../../../components';
import { Button } from 'react-native-paper';
import Slider from '@react-native-community/slider'; // or use the default Slider if you prefer
import { palette } from '../../../assets/constants';

const painFrequency = ['Seldom', 'Often', 'Usually', 'Always'];
export const PainSelection = ({ navigation }): React.ReactElement => {
  const [bodyPartsSelected, setBodyPartsSelected] = useState([]);
  const [isBackSideEnabled, setIsBackSideEnabled] = useState(false);
  const [painIntensity, setPainIntensity] = useState(0);
  const [painFrequency, setPainFrequency] = useState('');

  const toggleSwitch = () => setIsBackSideEnabled((previousState) => !previousState);

  const selectBodyPart = (muscle) => {
    if (bodyPartsSelected.some((item) => item.slug === muscle.slug)) {
      setBodyPartsSelected(bodyPartsSelected.filter((item) => item.slug !== muscle.slug));
    } else {
      setBodyPartsSelected([...bodyPartsSelected, { slug: muscle.slug, intensity: 1 }]);
    }
  };

  const handleSave = () => {
    console.log('save');
  };

  const handleReset = () => {
    setBodyPartsSelected([]);
    setIsBackSideEnabled(false);
    setPainIntensity(0);
    setPainFrequency('');
  };

  const navigateToNextPage = () => {
    const bodyParts = bodyPartsSelected?.map((item) => item.slug);
    console.log(bodyParts);
    navigation.navigate('ExerciseList', { bodyParts });
  };

  return (
    <Container
      styleOverrides={{
        paddingTop: 100,
      }}
    >
      <Header title="Manage your pain" />
      <ScrollContainer>
        <Text style={styles.headerText}>What kind of pain do you have?</Text>
        <Body
          data={bodyPartsSelected}
          onBodyPartPress={selectBodyPart}
          side={isBackSideEnabled ? 'back' : 'front'}
          scale={0.75}
          frontOnly={false}
          backOnly={false}
        />
        <Switch onValueChange={toggleSwitch} value={isBackSideEnabled} />
        <Text style={styles.label}>Pain Intensity</Text>
        <Slider
          style={styles.slider}
          value={painIntensity}
          onValueChange={setPainIntensity}
          minimumValue={0}
          maximumValue={10}
          step={1}
        />
        <Text style={styles.label}>Pain Frequency</Text>

        <Container styleOverrides={styles.buttonFrequency}>
          <Button
            mode="outlined"
            textColor={palette.primary}
            contentStyle={styles.button}
            onPress={() => setPainFrequency(painFrequency[0])}
          >
            <Text style={styles.painButtonText}>1</Text>
          </Button>
          <Button
            mode="outlined"
            textColor={palette.primary}
            style={styles.button}
            onPress={() => setPainFrequency(painFrequency[1])}
          >
            <Text style={styles.painButtonText}>2</Text>
          </Button>
          <Button
            mode="outlined"
            textColor={palette.primary}
            style={styles.button}
            onPress={() => setPainFrequency(painFrequency[2])}
          >
            <Text style={styles.painButtonText}>3</Text>
          </Button>
          <Button
            mode="outlined"
            textColor={palette.primary}
            style={styles.button}
            onPress={() => setPainFrequency(painFrequency[3])}
          >
            <Text style={styles.painButtonText}>4</Text>
          </Button>
        </Container>

        <Container styleOverrides={styles.buttonContainer}>
          <Button mode="contained" onPress={handleReset} style={styles.resetButton}>
            <Text style={styles.buttonText}>Reset</Text>
          </Button>
          <Button
            buttonColor={palette.primary}
            style={styles.saveButton}
            onPress={navigateToNextPage}
          >
            <Text style={styles.buttonText}>Go to exercise</Text>
          </Button>
        </Container>
      </ScrollContainer>
    </Container>
  );
};
const styles = StyleSheet.create({
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  exerciseButton: {
    marginTop: 20,
  },
  button: {
    width: 70,
  },
  painButtonText: {
    fontSize: 18,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: '5%',
    marginTop: 20,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  saveButton: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: palette.accent,
  },
  resetButton: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: palette.darkGray,
  },
  buttonFrequency: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    gap: 10,
    paddingTop: 10,
  },
});
