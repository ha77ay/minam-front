import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./modules/content";

// 최상위 사가
import rootSaga from "../middleware";
import createSagaMiddleware from "@redux-saga/core";

// saga middleware 생성
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    // content state 처리하는 reducer를 등록
    content: contentReducer,
  },
  middleware: [sagaMiddleware],
  devTools: true,
});

// saga middleware를 실행
// rootSaga와 하위에 정의한 감지할 Saga Action들에 대해서 감지를 시작함
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
