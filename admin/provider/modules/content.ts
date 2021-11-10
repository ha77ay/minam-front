import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 데이터 구조를 interface로 만듦
export interface ContentItem {
  id: number;
  title: string;
  description?: string;
  videoUrl: string;
  fileType: string;
  fileName: string;
  authorId: string;
  like: number;
  unlike: number;
  createdTime: number;
  tags?: string;
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
  data: [
    {
      id: 2,
      title: "필링시술은 피부자극에 자극 더하기다?",
      description:
        "알라딘필, 아쿠아필, 라라필, 블랙필 등등등 많고 많은 필링시술 환절기로 잔뜩 예민한 내 피부에 자극을 더 주는 건 아닐까? 예민한 피부에도 필링은 효과가 있을까? 괜히 자극줘서 더 트러블 올라오는 것 아닐까? 그래서 조이PD가 또 뽀개봤습니다! 필링시술 너 정말 안전하게 받아도 되는 시술 맞니?",
      videoUrl: "https://ddbee68k5dh5z.cloudfront.net/sample-mp4-file.mp4",
      fileType: "video/mp4",
      fileName: "필링시술.mp4",
      authorId: "조이PD",
      like: 285,
      unlike: 3,
      createdTime: new Date().getTime(),
      tags: "#필링 #각질제거 #아쿠아필 #알라딘필 #필링시술",
    },
    {
      id: 1,
      title: "리쥬란힐러 아픈만큼 효과있음?",
      description:
        "이 시술 꽤나 인기 많았는데 조금 늦었습니다... 죄송해요... 스테디셀러 시술 리쥬란힐러! 스킨 부스터 중에 인기짱! 근데 통증도 짱... 리쥬란힐러 대체 왜 아픈걸까? 그래서 고찔이(고통찌질이) 조이PD가 제대로 털어봤습니다!",
      videoUrl: "https://ddbee68k5dh5z.cloudfront.net/sample-mp4-file.mp4",
      fileType: "video/mp4",
      fileName: "리쥬란힐러.mp4",
      authorId: "정수진PD",
      like: 47,
      unlike: 5,
      createdTime: new Date().getTime(),
      tags: "#피부시술 #스킨부스터 리쥬란힐러 #연어주사",
    },
    {
      id: 0,
      title: "써마지효과, 울쎄라와 차이점! 써마지받다가 FLEX 했지 뭐야",
      description:
        "피부과에 신상 리프팅 기계가 들어오면 생기는 일 선생님 저도 한번만... 신상 써마지가 들어왔다는 소식에 냅다 달려간 기범쌤 4대 써마지 보러갔다가 효과, 통증, 울쎼라와의 차이점까지 알아버렸지 뭐니 써마지리프팅 궁금하셨던 분들 어서오세요!!",
      videoUrl: "https://ddbee68k5dh5z.cloudfront.net/sample-mp4-file.mp4",
      fileType: "video/mp4",
      fileName: "리쥬란힐러.mp4",
      authorId: "최유리PD",
      like: 264,
      unlike: 13,
      createdTime: new Date().getTime(),
      tags: "#써마지통증 #써마지리프팅 #울쎄라",
    },
  ],
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
        contentItem.authorId = modifyItem.authorId;
        contentItem.tags = modifyItem.tags;
        contentItem.videoUrl = modifyItem.videoUrl;
        contentItem.fileName = modifyItem.fileName;
        // contentItem.fileType = modifyItem.fileType;
      }
      state.isModifyCompleted = true;
    },
  },
});

export const { addContent, removeContent, modifyContent } =
  contentSlice.actions;

export default contentSlice.reducer;
