import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = { user: { email: string } | undefined };

const initialState: UserState = { user: undefined };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state: UserState, action: PayloadAction<{ email: string }>) => {
      state.user = action.payload;
    },

    logout: (state: UserState) => {
      state.user = undefined;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
