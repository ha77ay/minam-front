import contentReducer, {
  addContent,
  initialContent,
} from "../../provider/modules/content";

import { ContentItem } from "../../provider/modules/content";

import { createAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import api, { ContentItemResponse } from "../../api/content";
import { call, put, takeLatest } from "@redux-saga/core/effects";

// 전체 데이터 조회에서 추가할 때
export const requestAddContent = createAction<ContentItem>(
  `${contentReducer.name}/requestAddContent`
);

export const requestFetchContents = createAction(
  `${contentReducer.name}/requestFetchContents`
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
        cmtCnt: item.cmnCnt,
      } as ContentItem)
  );

  // state 초기화 reducer 실행
  yield put(initialContent(contents));
}

// =================== saga action을 감지하는 부분 ======================
export default function* contentSaga() {
  yield takeLatest(requestFetchContents, fetchData);
}
