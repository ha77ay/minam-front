import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 데이터 구조를 interface로 만듦
export interface ContentItem {
  id: number;
  title: string | undefined;
  description?: string;
  videoUrl: string;
  fileType: string;
  fileName: string;
  userId: string | undefined;
  createdTime: number;
}

// 백엔드 연동 고려해서 state 구조를 설계
interface ContentState {
  data: ContentItem[];
  isFetched: boolean;
  isAddCompleted?: boolean;
  isRemoveCompleted?: boolean;
  isModifyCompleted?: boolean;
}

const initialState: ContentState = {
  data: [],
  isFetched: false,
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    addContent: (state, action: PayloadAction<ContentItem>) => {
      const content = action.payload;
      // console.log("--in reducer function--");
      // console.log(content);
      state.data.unshift(content);
      state.isAddCompleted = true;
    },
    removeContent: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.data.splice(
        state.data.findIndex((item) => item.id === id),
        1
      );
      state.isRemoveCompleted = true;
    },
    modifyContent: (state, action: PayloadAction<ContentItem>) => {
      const modifyItem = action.payload;
      const contentItem = state.data.find((item) => item.id === modifyItem.id);
      if (contentItem) {
        contentItem.title = modifyItem.title;
        contentItem.description = modifyItem.description;
        contentItem.userId = modifyItem.userId;
        contentItem.videoUrl = modifyItem.videoUrl;
        contentItem.fileName = modifyItem.fileName;
        // contentItem.fileType = modifyItem.fileType;
      }
      state.isModifyCompleted = true;
    },
    initialContent: (state, action: PayloadAction<ContentItem[]>) => {
      const contents = action.payload;
      // 백엔드에서 받아온 데이터??
      state.data = contents;
      state.isFetched = true;
    },
  },
});

export const { addContent, removeContent, modifyContent, initialContent } =
  contentSlice.actions;

export default contentSlice.reducer;
