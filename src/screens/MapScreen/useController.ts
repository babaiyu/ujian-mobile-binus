import {result} from 'lodash';
import TypeNavigation, {TData} from '../../interfaces/TypeNavigation';
import {useEffect} from 'react';

// Controller for MapScreen
export default function useController({navigation, route}: TypeNavigation) {
  const data: TData = result(route, 'params.data', {
    name: '',
    coordinate: {latitude: 0, longitude: 0},
    logo: '',
  });

  // Set header title based on data from
  useEffect(() => {
    navigation.setOptions({title: `Peta ${data?.name}`});

    return () => {
      navigation.setOptions({title: ''});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.name]);

  return {data};
}
