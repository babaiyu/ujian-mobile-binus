// Created interface for all route react-navigation
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type TData = {
  name: string;
  coordinate: {
    latitude: number;
    longitude: number;
  };
  logo: string;
};

// All screens type based on ./src/screens
type TRouteList = {
  HOME_SCREEN: undefined;
  MAP_SCREEN: {data?: TData} | undefined;
};

// Export to be reusable
type TypeNavigation = NativeStackScreenProps<TRouteList>;
export default TypeNavigation;
