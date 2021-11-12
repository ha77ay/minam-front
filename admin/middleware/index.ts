import { fork } from "redux-saga/effects";
import contentSaga from "./modules/content";

export default function* rootSaga() {
  yield fork(contentSaga);
}
