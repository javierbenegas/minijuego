import { View, Text, Button } from 'react-native';

import Card from '../../components/Card';
import React, { useEffect, useState } from 'react';
import styles from './styles';

const GameScreen = ({ handleResult }) => {
  const [currentGuess, setCurrentGuess] = useState ();

  useEffect (() => {
    setCurrentGuess(Math.floor(Math.random() * (99 - 1) + 1))
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>The opponent's assumtion is</Text>
      <Text style={styles.textColor}>{currentGuess}</Text>
      <Card otherStyles={styles.buttonContainer}>
        <Button title="Lower" onPress={() => handleResult("lower", currentGuess)}/>
        <Button title="Higher" onPress={() => handleResult("higher", currentGuess)}/>
      </Card>
    </View>
  )
}

export default GameScreen;