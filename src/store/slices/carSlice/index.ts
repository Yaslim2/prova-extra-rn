import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CarJson, CarSliceState } from "./types";
import cars from "@assets/data/cars.json";

const initialState: CarSliceState = {
  cars: cars,
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

export const {} = carSlice.actions;

export default carSlice.reducer;
