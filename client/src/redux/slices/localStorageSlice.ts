import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CheckType {
  id: string;
  title: string;
  content: string;
}

const LOCAL_STORAGE_KEY = "notes";

function getStateDataFromLocalStorage(): CheckType[] {
  try {
    const store = localStorage.getItem(LOCAL_STORAGE_KEY);
    return store ? JSON.parse(store) : [];
  } catch (error: unknown) {
    console.log("Failed to parse the JSON data", error);
    return [];
  }
}

const initialState: CheckType[] = getStateDataFromLocalStorage();

const localStorageSlice = createSlice({
  name: "localNotes",
  initialState,
  reducers: {
    addNotesToLocalStorage: (
      state,
      action: PayloadAction<{ title: string; content: string }>
    ) => {
      const userInput: CheckType = {
        id: crypto.randomUUID(),
        title: action.payload.title,
        content: action.payload.content,
      };
      state.push(userInput);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
    },
    removeNotesFromLocalStorage: (state, action: PayloadAction<string>) => {
      const filteredState = state.filter((item) => item.id !== action.payload);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(filteredState));
      return filteredState;
    },
    updateNotesInLocalStorage: (
      state,
      action: PayloadAction<{ id: string; title: string; content: string }>
    ) => {
      const { id, title, content } = action.payload;
      const updatedState = state.map((item) =>
        item.id === id ? { ...item, title, content } : item
      );
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedState));
      return updatedState;
    },
  },
});

export const {
  addNotesToLocalStorage,
  removeNotesFromLocalStorage,
  updateNotesInLocalStorage,
} = localStorageSlice.actions;

export const localStorageReducer = localStorageSlice.reducer;
export default localStorageSlice;
