// const initialState = {
//   success: false,
//   loading: false,
//   user: null,
// };

// const auth = function (state = initialState, action) {
//   switch (action.type) {
//     default: {
//       return state;
//     }
//   }
// };

// export default auth;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  success: false,
  loading: false,
  user: null,
};
export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authentication: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const { authentication } = auth.actions;
export default auth.reducer;
