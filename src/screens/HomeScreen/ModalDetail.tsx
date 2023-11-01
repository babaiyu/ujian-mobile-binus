import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Modal, Portal, Text, TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  data: any | null;
  onDismiss: () => void;
  onGoMap: () => void;
  onGoLink: () => void;
}

export default function ModalDetail({
  data,
  onDismiss,
  onGoMap,
  onGoLink,
}: Props) {
  const _onGoMap = () => {
    onDismiss();
    setTimeout(() => {
      onGoMap();
    }, 250);
  };

  const _onGoLink = () => {
    onDismiss();
    setTimeout(() => {
      onGoLink();
    }, 250);
  };

  return (
    <Portal>
      <Modal
        visible={data !== null}
        onDismiss={onDismiss}
        contentContainerStyle={s.modalContainer}>
        {/* Title */}
        <Text variant="titleMedium" style={s.title}>
          {data?.name}
        </Text>

        {/* Address */}
        <View style={s.rowCenter}>
          <Icon name="map-outline" size={16} color="#222222" style={s.icon} />
          <Text>{data?.address_office}</Text>
        </View>

        {/* Website */}
        <TouchableRipple onPress={_onGoLink} style={s.rowCenter}>
          <>
            <Icon name="web" size={16} color="#222222" style={s.icon} />
            <Text style={s.textLink}>{data?.address_web}</Text>
          </>
        </TouchableRipple>

        {/* Telp / Fax */}
        <View style={s.rowCenter}>
          <Icon name="phone-outline" size={16} color="#222222" style={s.icon} />
          <Text>{data?.telp_fax}</Text>
        </View>

        {/* See Map Location */}
        <TouchableRipple onPress={_onGoMap} style={s.rowCenter}>
          <>
            <Icon
              name="map-marker-outline"
              size={16}
              color={s.textLink.color}
              style={s.icon}
            />
            <Text style={s.textLink}>Lihat lokasi map</Text>
          </>
        </TouchableRipple>
      </Modal>
    </Portal>
  );
}

const s = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#F2F2F2',
    padding: 20,
    marginHorizontal: 20,
  },
  rowCenter: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 8,
    marginTop: 2,
  },
  title: {marginBottom: 8},
  textLink: {
    color: '#2196f3',
  },
});
