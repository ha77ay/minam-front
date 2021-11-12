import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../../provider";
import "bootstrap-icons/font/bootstrap-icons.css";
import { getTimeString } from "../../lib/string";
import api from "../../api/content";

interface ContentItemState {
  id: number;
  title: string | undefined;
  description?: string;
  videoUrl: string;
  userId: string;
  createdTime: number;
}

const Mtv = () => {
  // data fetch 해올때 이용할 local state
  const [contentList, setContentList] = useState<ContentItemState[]>([]);
  // redux store에서 content state 전체를 가져옴
  const content = useSelector((state: RootState) => state.content);
  const router = useRouter();

  const fetchData = async () => {
    // 백엔드에서 데이터를 받아옴
    const res = await api.fetch();

    // axios로 서버에서 응답받은 data를 state 객체로 변환함
    const contents = res.data.map((item) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      videoUrl: item.videoUrl,
      userId: item.userId,
      createdTime: item.createdTime,
    })) as ContentItemState[];

    setContentList(contents); // local state를 업데이트
    console.log("-- 2. await axios.get completed--");
  };

  useEffect(() => {
    console.log("--1. mounted--");
    // 백엔드에서 데이터를 받아올 것임 마운팅되는 시점에
    fetchData();
  }, []);

  return (
    <>
      <div
        className="d-flex flex-column align-items-center"
        style={{ width: "calc(100vw - 250px)" }}
      >
        {/* 컨텐트 */}
        <h2 className="my-5">Hello MTV</h2>
        {/* 신규 콘텐츠 등록버튼 */}
        <div className="align-self-end" style={{ paddingRight: "50px" }}>
          <button
            className="btn btn-dark"
            onClick={() => {
              router.push("/mtv/create");
            }}
          >
            <i className="bi bi-plus" />
            추가
          </button>
        </div>
        <table
          className="table table-striped table-hover mt-1"
          style={{ width: "calc(100vw - 350px)" }}
        >
          <thead>
            <tr>
              <th scope="col">콘텐츠ID</th>
              <th scope="col">제목</th>
              <th scope="col">담당자</th>
              <th scope="col">등록일</th>
            </tr>
          </thead>
          <tbody>
            {contentList.map((item, index) => (
              <tr
                key={`content-item-${index}`}
                onClick={() => router.push(`/mtv/detail/${item.id}`)}
              >
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td>{item.userId}</td>
                <td>{getTimeString(item.createdTime)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Mtv;
