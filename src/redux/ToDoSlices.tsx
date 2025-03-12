import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ToDoInitialState, ToDoType } from '../types/type'


const initialState: ToDoInitialState = {
    todos: [],

}
export const ToDoSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        createToDo: (state: ToDoInitialState, action: PayloadAction<ToDoType>) => {
            state.todos = [...state.todos, action.payload]
        },
        removeToDoByID: (state: ToDoInitialState, action: PayloadAction<number>) => {
            state.todos = [...state.todos.filter((todo: ToDoType) => todo.id !== action.payload)]
        }

    }
})
export const { createToDo, removeToDoByID } = ToDoSlice.actions

export default ToDoSlice.reducer