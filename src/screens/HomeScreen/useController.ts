import TypeNavigation, {TData} from '../../interfaces/TypeNavigation';

// Controller for HomeScreen
export default function useController({navigation}: TypeNavigation) {
  // Navigate to MAP_SCREEN
  const onGoMap = (data: TData) => () => {
    requestAnimationFrame(() => {
      navigation.navigate('MAP_SCREEN', {data});
    });
  };

  return {onGoMap};
}
