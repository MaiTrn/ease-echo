import React, { useState } from 'react';
import { StyleSheet, Text, Switch } from 'react-native';
import Body from 'react-native-body-highlighter';
import { Button, Container } from '../../../components';
import { CommonActions } from '@react-navigation/native';

export const PainSelection = ({ navigation }): React.ReactElement => {
  const [bodyPartsSelected, setBodyPartsSelected] = useState([]);
  const [isBackSideEnabled, setIsBackSideEnabled] = useState(false);

  const toggleSwitch = () => setIsBackSideEnabled((previousState) => !previousState);

  const selectBodyPart = (muscle) => {
    if (bodyPartsSelected.some((item) => item.slug === muscle.slug)) {
      setBodyPartsSelected(bodyPartsSelected.filter((item) => item.slug !== muscle.slug));
    } else {
      setBodyPartsSelected([...bodyPartsSelected, { slug: muscle.slug, intensity: 1 }]);
    }
  };
  console.log(bodyPartsSelected.map((item) => item.slug));

  const navigateToNextPage = () => {
    navigation.dispatch(CommonActions.navigate('Exercise'));
  };

  return (
    <Container>
      <Text style={styles.headerText}>What kind of pain do you have?</Text>
      <Body
        data={bodyPartsSelected}
        onBodyPartPress={selectBodyPart}
        side={isBackSideEnabled ? 'back' : 'front'}
        scale={1}
        frontOnly={false}
        backOnly={false}
      />
      <Switch onValueChange={toggleSwitch} value={isBackSideEnabled} />
      <Button buttonStyle={styles.button} onPress={navigateToNextPage}>
        <Text style={styles.buttonText}>Go to exercise</Text>
      </Button>
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
});