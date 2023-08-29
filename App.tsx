import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationStack from './components/NavigationStack';

export default function App() {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
}
