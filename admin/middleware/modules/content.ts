import contentReducer, { addContent } from "../../provider/modules/content";

import { ContentItem } from "../../provider/modules/content";

import { createAction } from "@reduxjs/toolkit";

// 전체 데이터 조회에서 추가할 때
export const requestAddContent = createAction<ContentItem>(
  `${contentReducer.name}/requestAddContent`
);

export const requestFetchContents = createAction<ContentItem>(
  `${contentReducer.name}/requestFetchContents`
);
