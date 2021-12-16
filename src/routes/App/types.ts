import { CarJson } from "@store/slices/carSlice/types";

export type RootAppStackNavigator = {
  CarsOverview: undefined;
  CarsDetail: { car: CarJson };
  Cart: undefined;
};
export type RootAppDrawerNavigator = {
  Cars: undefined;
  Account: undefined;
};

export type RootAccountStackNavigator = {
  AccountScreen: undefined;
};
