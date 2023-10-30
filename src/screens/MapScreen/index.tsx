import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from 'react-native-paper';
import TypeNavigation from '../../interfaces/TypeNavigation';
import useController from './useController';

export default function MapScreen(props: TypeNavigation) {
  const {data} = useController(props);

  return (
    <SafeAreaView>
      <Text>Map here...</Text>
      <Text>{JSON.stringify(data)}</Text>
    </SafeAreaView>
  );
}
