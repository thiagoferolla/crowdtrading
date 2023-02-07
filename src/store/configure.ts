import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import fundsReducer from "./funds/fundsSlice";

const Store = configureStore({
  reducer: {
    user: userReducer,
    funds: fundsReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;
