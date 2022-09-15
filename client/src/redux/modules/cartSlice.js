import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addReducer: (state, action) => {
      state = state.push(action.payload);
    },
  },
});
export const { addReducer } = cartSlice.actions;
export default cartSlice.reducer;
