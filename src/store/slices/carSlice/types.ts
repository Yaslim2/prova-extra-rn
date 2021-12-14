export type TypesCar = {
  color: string;
  pathImg: string;
};

export type CarJson = {
  id: string;
  brand: string;
  model: string;
  pathImg: string;
  iconImg: string;
  rent: number;
  types: TypesCar[];
};

export type CarSliceState = {
  cars: CarJson[];
};
