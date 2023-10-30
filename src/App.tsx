import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PaperProvider} from 'react-native-paper';

// Import all screens here
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';

// Config stack for screens
const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HOME_SCREEN"
          component={HomeScreen}
          options={{title: 'Beranda'}}
        />
        <Stack.Screen
          name="MAP_SCREEN"
          component={MapScreen}
          options={{title: 'Peta Wilayah'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <PaperProvider>
      <Routes />
    </PaperProvider>
  );
}
