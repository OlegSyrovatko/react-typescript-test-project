import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "./todo.models";

const initialState: Todo[] = [
  { id: "t1", text: "useState" },
  { id: "t2", text: "use redux" },
  { id: "t3", text: "use redux-persist" },
];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({ id: Math.random().toString(), text: action.payload });
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
