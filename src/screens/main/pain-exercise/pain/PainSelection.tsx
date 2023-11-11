import React, { useState } from 'react';
import { StyleSheet, Text, Switch, View } from 'react-native';
import Body from 'react-native-body-highlighter';
import { Container } from '../../../../components';
import { Button } from 'react-native-paper';
import Slider from '@react-native-community/slider'; // or use the default Slider if you prefer
import { palette } from '../../../../assets/constants';

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
    navigation.navigate('Exercise', { bodyParts });
  };

  return (
    <Container>
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
      <Button style={styles.button} onPress={navigateToNextPage}>
        <Text style={styles.buttonText}>Go to exercise</Text>
      </Button>
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
          mode="contained"
          style={styles.button}
          onPress={() => setPainFrequency(painFrequency[0])}
        >
          <Text>Seldom</Text>
        </Button>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => setPainFrequency(painFrequency[1])}
        >
          <Text>Often</Text>
        </Button>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => setPainFrequency(painFrequency[2])}
        >
          <Text>Usually</Text>
        </Button>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => setPainFrequency(painFrequency[3])}
        >
          <Text>Always</Text>
        </Button>
      </Container>

      <Container styleOverrides={styles.buttonContainer}>
        <Button mode="outlined" onPress={handleReset} style={styles.resetButton}>
          <Text>Reset</Text>
        </Button>
        <Button mode="contained" onPress={handleSave} style={styles.saveButton}>
          <Text>Save</Text>
        </Button>
      </Container>
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
    margin: 10,
    backgroundColor: palette.primary,
    width: 25,
    height: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
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
    backgroundColor: palette.success,
  },
  resetButton: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: palette.danger,
  },
  buttonFrequency: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});
