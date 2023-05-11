import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useEffect, useState } from 'react';

import styles from './styles';
import Card from '../../components/Card';
import win from "../../assets/images/win.jpg"
import lose from "../../assets/images/lose.jpg"

const ResultScreen = ({ result }) => {
    const [image, setImage] = useState("");

    useEffect(() => {
        handleImage();
    }, []);

    const handleImage = () => {
        if (result === "win") {
            setImage(win);
            return;
        }
        setImage(lose);
    };

  return (
    <SafeAreaView style={styles.container}>
        <View>
            <Card>
                <Text>{`You ${result}`}</Text>
            </Card>
            <Image style={styles.imageContainer} source={image} />
        </View>
    </SafeAreaView>
  )
}

export default ResultScreen;