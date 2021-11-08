import { createSlice } from "@reduxjs/toolkit";

// 데이터 구조를 interface로 만듦
interface ContentItem {
  id: number;
  title: string;
  description?: string;
  videoUrl: string;
  fileType: string;
  fileName: string;
  authorId: string;
  viewCount: number;
  like: number;
  unlike: number;
  favorite: boolean;
  createdTime: number;
  tags: string;
  cmtId: number;
}

// 백엔드 연동 고려해서 state 구조를 설계
interface ContentState {
  data: ContentItem[];
  isFetched: boolean;
}

const initialState: ContentState = {
  data: [
    {
      id: 1,
      title: "필링시술은 피부자극에 자극 더하기다?",
      description:
        "알라딘필, 아쿠아필, 라라필, 블랙필 등등등 많고 많은 필링시술 환절기로 잔뜩 예민한 내 피부에 자극을 더 주는 건 아닐까? 예민한 피부에도 필링은 효과가 있을까? 괜히 자극줘서 더 트러블 올라오는 것 아닐까? 그래서 조이PD가 또 뽀개봤습니다! 필링시술 너 정말 안전하게 받아도 되는 시술 맞니?",
      videoUrl: "https://ddbee68k5dh5z.cloudfront.net/sample-mp4-file.mp4",
      fileType: "video/mp4",
      fileName: "필링시술.mp4",
      authorId: "강남언니 방송반",
      viewCount: 39148,
      like: 285,
      unlike: 3,
      favorite: false,
      createdTime: 201231230812903,
      tags: "#필링 #각질제거 #아쿠아필 #알라딘필 #필링시술",
      cmtId: 1,
    },
  ],
  isFetched: false,
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {},
});

export default contentSlice.reducer;
