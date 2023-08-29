import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/Home';
import HeroPage from '../pages/HeroPage';

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />
      <Stack.Screen
        name="Contentful"
        component={HeroPage}
        options={{title: 'Hero Entries from Contentful'}}
      />
    </Stack.Navigator>
  );
};

export default NavigationStack;
