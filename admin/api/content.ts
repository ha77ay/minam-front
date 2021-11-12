import axios from "axios";

// 서버로 부터 받아오는 데이터 1건에 대한 타입
interface ContentItemResponse {
  id: number;
  title: string;
  description?: string;
  videoUrl: string;
  fileType?: string;
  fileName?: string;
  userId: string;
  like: number;
  unlike: number;
  createdTime: number;
  tags?: string;
}

interface ContentItemRequest {
  title: string | undefined;
  description?: string;
  videoUrl?: string;
  userId: string | undefined;
  tags?: string;
}

// 서버하고 데이터 연동하는 api처리 목록을 별도의 객체로 작성
// process.env.변수명
const contentApi = {
  // axios.get<응답데이터의타입>(요청URL);
  // GET 요청URL HTTP/1.1
  fetch: () =>
    axios.get<ContentItemResponse[]>(`${process.env.NEXT_PUBLIC_API_BASE}/mtv`),

  // axios.post<응답타입>(요청URL, 요청객체(JSON바디));
  // POST 요청URL HTTP/1.1  {...}
  add: (contentItem: ContentItemRequest) =>
    axios.post<ContentItemResponse>(
      `${process.env.NEXT_PUBLIC_API_BASE}/mtv`,
      contentItem
    ),
  // axios.delete<응답타입>(요청URL);
  // DELETE 요청URL HTTP/1.1
  // remove: (id: number) =>
  //   axios.delete<boolean>(`${process.env.NEXT_PUBLIC_API_BASE}/todos/${id}`),

  // axios.PUT<응답타입>(요청URL, 요청객체(JSON바디));
  // PUT 요청URL HTTP/1.1  {...}
  // modify: (id: number, todoItem: TodoItemRequest) =>
  //   axios.put<TodoItemResponse>(
  //     `${process.env.NEXT_PUBLIC_API_BASE}/todos/${id}`,
  //     todoItem
  //   ),
};

export default contentApi;
