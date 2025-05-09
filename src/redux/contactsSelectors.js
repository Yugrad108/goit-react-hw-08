import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "./filtersSlice";
import { slice } from "./contactsSlice";

export const selectContacts = (state) => state.contacts.items;
export const { addContact, deleteContact } = slice.actions;

export const selectIsLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filters) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filters.toLowerCase())
    );
  }
);
