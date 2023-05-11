import { StyleSheet, View } from 'react-native';

import GameScreen from './src/screens/GameScreen';
import Header from './src/components/Header';
import StartGame from './src/screens/StartGame';
import { useState } from 'react';
import ResultScreen from './src/screens/ResultScreen';
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    "Alata-Regular": require('./src/assets/fonts/Alata-Regular.ttf'),
  });

  const [userNumber, setUserNumber] = useState();
  const [winOrLose, setWinOrLose] = useState(false);
  const [result, setResult] = useState("")

  const handleStartGame = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  const handleGameResult = (selection, number) => {
    if (
      (selection === "lower" && userNumber < number) ||
      (selection === "higher" && userNumber > number)) {
      setResult("win");
    } else {
      setResult("lose");
    }
    setWinOrLose(true);
  }

  let content = <StartGame onStartGame={handleStartGame} />;

  if (userNumber && winOrLose === true) {
    content = <ResultScreen result={result} />;
  } else if (userNumber) {
    content = <GameScreen handleResult={handleGameResult}/>;
  }; 

  if(!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Header title={"Adivina el número"} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily:"Alata-Regular",
  },
});
