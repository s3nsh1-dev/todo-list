import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { notesTypes } from "../../constants/commonInterfaces";
import { notes } from "../../constants/sliceDataset";

interface initialStateTypes {
  notes: notesTypes[];
}

const initialState: initialStateTypes = {
  notes: notes,
};

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    createNotes: (
      state,
      action: PayloadAction<{ title: string; content: string }>
    ) => {
      state.notes.push({
        id: crypto.randomUUID(),
        title: action.payload.title,
        content: action.payload.content,
        date: new Date().toLocaleString(),
      });
    },
    removeNotes: (state, action: PayloadAction<string>) => {
      state.notes.filter((note) => note.id !== action.payload);
    },
    updateNotes: (
      state,
      action: PayloadAction<{ id: string; title: string; content: string }>
    ) => {
      //   const note = state.notes.find((note) => note.id === action.payload.id);
      //   if (note) {
      //     note.title = action.payload.title;
      //     note.content = action.payload.content;
      //   }
      state.notes.map((note) => {
        return note.id === action.payload.id
          ? {
              id: note.id,
              title: action.payload.title,
              content: action.payload.content,
            }
          : note;
      });
    },
  },
});

export default noteSlice;
export const notesSliceReducer = noteSlice.reducer;
export const { createNotes, updateNotes, removeNotes } = noteSlice.actions;
