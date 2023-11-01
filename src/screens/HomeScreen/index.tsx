import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import TypeNavigation from '../../interfaces/TypeNavigation';
import Item from './Item';
import useController from './useController';
import ModalDetail from './ModalDetail';

// Import list of data region
import dataRegion from '../../data/region.json';

const ITEM_HEIGHT = 100;

export default function HomeScreen(props: TypeNavigation) {
  const {modal, showModal, closeModal, onGoMap, onGoLink} =
    useController(props);

  // Card Item
  const renderItem = ({item}: {item: (typeof dataRegion.region)[0]}) => (
    <Item item={item} onPress={showModal(item)} />
  );

  const renderFooter = () => <View style={s.emptyFooter} />;

  const getItemLayout = (__: any, index: number) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  });

  return (
    <>
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
          removeClippedSubviews
          getItemLayout={getItemLayout}
        />
      </SafeAreaView>

      {/* Modal show detail */}
      <ModalDetail
        data={modal}
        onDismiss={closeModal}
        onGoMap={onGoMap}
        onGoLink={onGoLink}
      />
    </>
  );
}

const s = StyleSheet.create({
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
