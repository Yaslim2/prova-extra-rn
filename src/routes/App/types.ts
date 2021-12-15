import { CarJson } from "@store/slices/carSlice/types";

export type RootAppStackNavigator = {
  CarsOverview: undefined;
  CarsDetail: { car: CarJson };
  Cart: undefined;
};
