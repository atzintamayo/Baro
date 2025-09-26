import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Reducers
import userSlice from "./user/user-slice";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["user"],
};

export const rootReducers = combineReducers({
  user: userSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  // devTools: config.env === "development",
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
