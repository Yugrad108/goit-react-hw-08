import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { api } from "../api";

export const setAuthHeader = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  api.defaults.headers.common.Authorization = "";
};

const checkToken = (getState) => {
  const state = getState();
  const token = state.auth.token;
  if (!token) throw new Error("No token");
  setAuthHeader(token);
};

export const registration = createAsyncThunk(
  "auth/register",
  async (newUser, { rejectWithValue }) => {
    try {
      const res = await api.post("/users/signup", newUser);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      toast.error("Registration error!");
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (user, { rejectWithValue }) => {
    try {
      const res = await api.post("/users/login", user);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      toast.error("Login error!");
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.post("/users/logout");
      clearAuthHeader();
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, { rejectWithValue, getState }) => {
    try {
      checkToken(getState);
      const res = await api.get("/users/current");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
