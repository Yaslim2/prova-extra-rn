import { configureStore } from "@reduxjs/toolkit";
import { carSlice, cartSlice, authSlice } from "./slices/index";

const store = configureStore({
  reducer: {
    car: carSlice,
    cart: cartSlice,
    auth: authSlice,
  },
});

export default store;
