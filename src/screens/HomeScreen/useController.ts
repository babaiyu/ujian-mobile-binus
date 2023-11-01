import {useState} from 'react';
import TypeNavigation from '../../interfaces/TypeNavigation';
import {Linking} from 'react-native';

// Controller for HomeScreen
export default function useController({navigation}: TypeNavigation) {
  const [modal, setModal] = useState<any | null>(null);

  // Modal action
  const showModal = (item: any) => () => {
    requestAnimationFrame(() => {
      setModal(item);
    });
  };

  const closeModal = () => {
    setModal(null);
  };

  // Navigate to MAP_SCREEN
  const onGoMap = () => {
    requestAnimationFrame(() => {
      navigation.navigate('MAP_SCREEN', {data: modal});
    });
  };

  // Navigate to website
  const onGoLink = () => {
    requestAnimationFrame(async () => {
      const link: string = modal?.address_web ?? '';
      await Linking.openURL(link.trim());
    });
  };

  return {modal, showModal, closeModal, onGoMap, onGoLink};
}
