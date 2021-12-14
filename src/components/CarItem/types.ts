import { CarJson } from "@store/slices/carSlice/types";

export type CarItemProps = {
  car: CarJson;
  onPress: (id: string) => void;
};
