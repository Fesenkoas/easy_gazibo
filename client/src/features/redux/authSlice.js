import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  loading: false,
  status: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.status = null;
    },
    registerUser(state, action) {
      state.loading = false;
      state.status = action.payload.message;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loading = true;
    },
    loginUser(state, action) {
      state.loading = false;
      state.status = action.payload.message;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loading = true;
    },
    getMe(state, action) {
      state.loading = false;
      state.status = null;
      state.user = action.payload?.user;
      state.token = action.payload?.token;
      state.loading = true;
    },
    loading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const checkIsAuth = (state) => Boolean(state.authFile.token);
export default authSlice.reducer;
export const { registerUser, loginUser,getMe, logout } = authSlice.actions;
