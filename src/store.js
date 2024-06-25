import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Slices/TodoSlice"
import {
    // persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
//   import { PersistGate } from "redux-persist/integration/react";


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
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
