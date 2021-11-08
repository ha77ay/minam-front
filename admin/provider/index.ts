import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./modules/content";

export const store = configureStore({
  reducer: {
    // content state 처리하는 reducer를 등록
    content: contentReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
