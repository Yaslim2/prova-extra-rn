import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartSliceState } from "./types";

const initialState: CartSliceState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      state.items.push(action.payload);
      state.totalAmount += action.payload.price;
    },
    removeFromCart(state, action: PayloadAction<{ id: string }>) {
      const removedItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.totalAmount -= removedItem!.price;
    },
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
