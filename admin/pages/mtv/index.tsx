import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../../provider";
import "bootstrap-icons/font/bootstrap-icons.css";
import { getTimeString } from "../../lib/string";

const Mtv = () => {
  // content state 전체를 가져옴
  const content = useSelector((state: RootState) => state.content);
  const router = useRouter();

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
            {content.data.map((item, index) => (
              <tr
                key={`content-item-${index}`}
                onClick={() => router.push(`/mtv/detail/${item.id}`)}
              >
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td>{item.authorId}</td>
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
