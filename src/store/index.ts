import { configureStore } from "@reduxjs/toolkit";
import { carSlice, cartSlice } from "./slices/index";

const store = configureStore({
  reducer: {
    car: carSlice,
    cart: cartSlice,
  },
});

export default store;
