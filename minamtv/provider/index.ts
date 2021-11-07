import { configureStore } from "@reduxjs/toolkit";

// 최상위 사가
// import createSagaMiddleware from "@redux-saga/core";

// const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {},
  devTools: true,
});

// root state 타입 정의
export type RootState = ReturnType<typeof store.getState>;

// dispatch 타입 정의
export type AppDispatch = typeof store.dispatch;
