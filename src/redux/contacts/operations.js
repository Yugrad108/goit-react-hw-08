import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api";
import toast from "react-hot-toast";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/contacts");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, { rejectWithValue }) => {
    try {
      const res = await api.post("/contacts", contact);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  "contacts/editContact",
  async (contact, { rejectWithValue }) => {
    try {
      const response = await api.patch(`/contacts/${contact.id}`, {
        name: contact.name,
        number: contact.number,
      });
      return response.data;
    } catch (error) {
      toast.error("Ooomm... Please, try again!");
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
