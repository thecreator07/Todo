import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Slices/TodoSlice"
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


// export const store = configureStore({
//     reducer: todoReducer
// })


const persistConfig = {
    key: "root",
    storage,
    todoReducer,
};

const persistedReducer = persistReducer(persistConfig, todoReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
});
