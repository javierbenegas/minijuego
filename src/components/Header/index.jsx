import { SafeAreaView, Text } from 'react-native';

import React from 'react';
import styles from './styles';

const Header = ({ title }) => {
  return (
    <SafeAreaView style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </SafeAreaView>
  )
}

export default Header;