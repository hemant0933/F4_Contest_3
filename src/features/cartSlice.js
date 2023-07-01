import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    total(state) {
      return state.reduce((item, sum) => item.price + sum, 0);
    },
  },
});

export const { add, remove, total } = cartSlice.actions;
export default cartSlice.reducer;
