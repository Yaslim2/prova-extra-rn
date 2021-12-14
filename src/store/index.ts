import { configureStore } from "@reduxjs/toolkit";
import { carSlice } from "./slices/index";

const store = configureStore({
  reducer: {
    car: carSlice,
  },
});

export default store;
