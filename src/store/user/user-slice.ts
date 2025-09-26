// Create a slice of state for the session with TypeScript

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { User } from "@utils/types/User/index";

export interface SessionState {
  token: string | null;
  user: User;
}

const initialState: SessionState = {
  token: "",
  user: {
    role: "",
    fechaCreacion: new Date().toISOString(),
    _id: "",
    email: "",
    nombre: "",
    apellido: "",
    celular: 0,
    __v: 0,
  },
};

export const sessionSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    removeToken: (state) => {
      state.token = "";
      state.user = initialState.user;
    },
  },
});

export const { setToken, setUser, removeToken } = sessionSlice.actions;
export default sessionSlice.reducer;
