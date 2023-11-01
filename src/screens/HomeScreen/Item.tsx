import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Text, TouchableRipple} from 'react-native-paper';

interface Props {
  item: any;
  onPress: () => void;
}

export default function Item({item, onPress}: Props) {
  return (
    <TouchableRipple
      onPress={onPress}
      rippleColor="rgba(0, 0, 0, .32)"
      style={s.card}>
      <Card>
        <Card.Cover source={{uri: item?.logo}} />
        <Card.Content>
          <Text variant="titleSmall">{item?.name}</Text>
        </Card.Content>
      </Card>
    </TouchableRipple>
  );
}

const s = StyleSheet.create({
  card: {
    width: '47.5%',
    marginBottom: 20,
  },
});
