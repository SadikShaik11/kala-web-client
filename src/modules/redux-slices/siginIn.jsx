import { createSlice } from "@reduxjs/toolkit";

const signInSlice = createSlice({
  name: "signIn",
  initialState: {
    isSignedIn: false,
  },
  reducers: {
    signIn: (state, action) => {
      state.isSignedIn = action.payload;
    },
    changeSignIn: (state) => {
      state.isSignedIn = false;
    },
  },
});

export const { signIn, changeSignIn } = signInSlice.actions;

export default signInSlice.reducer;
