import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {Card, Text, TouchableRipple} from 'react-native-paper';
import TypeNavigation from '../../interfaces/TypeNavigation';

// Import list of data region
import dataRegion from '../../data/region.json';
import useController from './useController';

export default function HomeScreen(props: TypeNavigation) {
  const {onGoMap} = useController(props);

  // Card Item
  const renderItem = ({item}: {item: (typeof dataRegion.region)[0]}) => (
    <TouchableRipple
      onPress={onGoMap(item)}
      rippleColor="rgba(0, 0, 0, .32)"
      style={s.card}>
      <Card>
        <Card.Cover source={{uri: item?.logo}} />
        <Card.Content>
          <Text variant="titleMedium">{item?.name}</Text>
        </Card.Content>
      </Card>
    </TouchableRipple>
  );

  const renderFooter = () => <View style={s.emptyFooter} />;

  return (
    <SafeAreaView>
      {/* Create list for showing data region */}
      <FlatList
        key="region_list"
        numColumns={2}
        data={dataRegion?.region ?? []}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={s.contentContainerStyle}
        columnWrapperStyle={s.columnWrapperStyle}
        ListFooterComponent={renderFooter}
      />
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  card: {
    width: '47.5%',
    marginBottom: 20,
  },
  contentContainerStyle: {
    marginTop: 20,
  },
  columnWrapperStyle: {
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  emptyFooter: {
    height: 100,
  },
});
