import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Import all screens here
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';

// Config stack for screens
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HOME_SCREEN" component={HomeScreen} />
        <Stack.Screen name="MAP_SCREEN" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
