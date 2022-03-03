import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      state.items.push(newItem);
      state.changed = true;
      console.log("entered into addItemToCart", state);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
