import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, title: "good morning", iscomplete: false }]
}

export const todoSlice = createSlice({
    name: "Todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                title: action.payload
            }
            state.todos.push(todo)
            state.todos.sort((a, b) => (a.iscomplete === b.iscomplete ? 0 : a.iscomplete ? -1 : 1));
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        editTodo: (state, action) => {
            const { id, title } = action.payload;
            const existingTodo = state.todos.find(todo => todo.id === id);

            if (existingTodo) {
                existingTodo.title = title;
            }
        },
        completeTask: (state, action) => {
            const iscompletedtask = state.todos.find(todo => todo.id === action.payload);

            if (iscompletedtask) {
                iscompletedtask.iscomplete = iscompletedtask.iscomplete === true ? false : true;
                state.todos.sort((a, b) => (a.iscomplete === b.iscomplete ? 0 : a.iscomplete ? -1 : 1));

            }
        }
    }
})

export const { addTodo, removeTodo, editTodo, completeTask } = todoSlice.actions
export default todoSlice.reducer