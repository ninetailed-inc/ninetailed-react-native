import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  button: {
    marginBottom: 12,
  },
  text: {
    textAlign: 'center',
  },
});

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the home screen</Text>
      <Button
        title="Hero posts from Contentful"
        onPress={() => navigation.navigate('Contentful')}
        style={styles.button}
      />
    </View>
  );
}
