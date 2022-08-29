import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
};
export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    details: (state, action) => {
      state.user = action.payload;
      state.loading = true;
    },
  },
});
export const { details } = auth.actions;
export default auth.reducer;
