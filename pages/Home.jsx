import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useProfile} from '@ninetailed/experience.js-react';

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
  const {profile} = useProfile();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the home screen</Text>
      <Button
        title="Hero posts from Contentful"
        onPress={() => navigation.navigate('Contentful')}
        style={styles.button}
      />
      <Text>Profile:</Text>
      <Text>{JSON.stringify(profile, null, 2)}</Text>
    </View>
  );
}
