import contentReducer, {
  addContent,
  initialCompleted,
  initialContent,
  removeContent,
} from "../../provider/modules/content";

import { ContentItem } from "../../provider/modules/content";

import { createAction, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import api, {
  ContentItemRequest,
  ContentItemResponse,
} from "../../api/content";
import {
  call,
  put,
  select,
  takeEvery,
  takeLatest,
} from "@redux-saga/core/effects";
import { dataUrlToFile } from "../../lib/string";
import fileApi from "../../api/file";
import { RootState } from "../../provider";

// content를 가져오는 action
export const requestFetchContents = createAction(
  `${contentReducer.name}/requestFetchContents`
);

// content를 추가하는 action
export const requestAddContent = createAction<ContentItem>(
  `${contentReducer.name}/requestAddContent`
);

// content를 삭제하는 action
export const requestRemoveContent = createAction<number>(
  `${contentReducer.name}/requestRemoveContent`
);

// ================= saga action을 처리하는 부분 =====================

function* fetchData() {
  yield console.log("--fetchData--");

  // spinner 보여주기

  // 백엔드에서 데이터 받아오기
  const result: AxiosResponse<ContentItemResponse[]> = yield call(api.fetch);

  // spinner 사라지게하기

  // 응답데이터 배열을 액션 페이로드 배열로 변환
  // ContentItemResponse[] => ContentItem[]
  const contents = result.data.map(
    (item) =>
      ({
        id: item.id,
        title: item.title,
        description: item.description,
        videoUrl: item.videoUrl,
        fileType: item.fileType,
        fileName: item.fileName,
        userId: item.userId,
        createdTime: item.createdTime,
        cmtCnt: item.cmtCnt,
      } as ContentItem)
  );

  // state 초기화 reducer 실행
  yield put(initialContent(contents));
}

function* addDataNext(action: PayloadAction<ContentItem>) {
  yield console.log("--addDataNext--");

  const contentItemPayload = action.payload;

  // spinner 보여주기

  /* ------------ s3 업로드 처리 --------------- */
  // 1. dataUrl -> file 변환
  const file: File = yield call(
    dataUrlToFile,
    contentItemPayload.videoUrl,
    contentItemPayload.fileName,
    contentItemPayload.fileType
  );

  // 2.form data 객체 생성
  const formFile = new FormData();
  formFile.set("file", file);

  // 3. multipart/form-data로 업로드
  const fileUrl: AxiosResponse<string> = yield call(fileApi.upload, formFile);
  /* --------------------------------------- */

  // rest api로 보낼 요청객체
  const contentItemRequest: ContentItemRequest = {
    title: contentItemPayload.title,
    description: contentItemPayload.description,
    videoUrl: fileUrl.data,
    fileType: contentItemPayload.fileType,
    fileName: contentItemPayload.fileName,
    userId: contentItemPayload.userId,
    createdTime: contentItemPayload.createdTime,
  };

  // ---------------- 1. rest api에 post로 데이터 보냄
  const result: AxiosResponse<ContentItemResponse> = yield call(
    api.add,
    contentItemRequest
  );

  // spinner 사라지게 하기

  // ----------------- 2. redux state를 변경함
  // 백엔드에서 처리한 데이터 객체로 state를 변경할 payload 객체를 생성
  const contentItem: ContentItem = {
    id: result.data.id,
    title: result.data.title,
    description: result.data.description,
    videoUrl: result.data.videoUrl,
    fileType: result.data.fileType,
    fileName: result.data.fileName,
    userId: result.data.userId,
    createdTime: result.data.createdTime,
    cmtCnt: result.data.cmtCnt,
  };

  yield put(addContent(contentItem));

  // completed 속성 삭제
  yield put(initialCompleted());

  // 예외처리 추가
}

function* removeDataNext(action: PayloadAction<number>) {
  yield console.log("--removeDataNext--");

  const id = action.payload;

  // spinner 보여주기

  /* ----- s3 파일 삭제 로직 ----- */
  // redux state에서 id로 object key 가져오기
  const contentItem: ContentItem = yield select((state: RootState) =>
    state.content.data.find((item) => item.id === id)
  );
  const urlArr = contentItem.videoUrl.split("/");
  const objectKey = urlArr[urlArr.length - 1];

  // file api 호출해서 s3에 파일 삭제
  yield call(fileApi.remove, objectKey);
  /* ----- s3 파일 삭제 로직 끝 ----- */

  // rest api 연동
  const result: AxiosResponse<boolean> = yield call(api.remove, id);

  // spinner 사라지게하기

  // redux state 변경
  if (result.data) {
    yield put(removeContent(id));
  } else {
    yield console.log("----alert----");
  }

  yield put(initialCompleted());
}
// =================== saga action을 감지하는 부분 ======================
export default function* contentSaga() {
  yield takeLatest(requestFetchContents, fetchData);
  yield takeEvery(requestAddContent, addDataNext);
  yield takeEvery(requestRemoveContent, removeDataNext);
}
