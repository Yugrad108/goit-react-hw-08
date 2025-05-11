import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, registration } from "./operations";

const handleRegistrationFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const handleLogoutFulfilled = (state) => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const handleRefreshUserFulfilled = (state, action) => {
  state.isLoggedIn = true;
  state.user = action.payload;
  state.isRefreshing = false;
};

export const slice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(registration.fulfilled, handleRegistrationFulfilled)
      .addCase(login.fulfilled, handleRegistrationFulfilled)
      .addCase(logout.fulfilled, handleLogoutFulfilled)
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, handleRefreshUserFulfilled)
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export default slice.reducer;
