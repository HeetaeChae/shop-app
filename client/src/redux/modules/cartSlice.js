import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addReducer: (state, action) => {
      state = state.push(action.payload);
    },
    deleteReducer: (state, action) => {
      for (let i = 0; i < state.length; i++) {
        if (state[i]._id === action.payload) {
          state.splice(i, 1);
        }
      }
    },
  },
});
export const { addReducer, deleteReducer } = cartSlice.actions;
export default cartSlice.reducer;
