import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CarSliceState } from "./types";
import { carsJson } from "@assets/index";

const initialState: CarSliceState = {
  cars: carsJson,
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

export const {} = carSlice.actions;

export default carSlice.reducer;
