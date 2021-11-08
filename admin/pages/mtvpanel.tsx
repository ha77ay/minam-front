import React from "react";
import { Table } from "react-bootstrap";
import { Ellipsis } from "react-bootstrap/esm/PageItem";
import { useSelector } from "react-redux";
import { RootState } from "../provider";

const mtvPanel = () => {
  // content state 전체를 가져옴
  const content = useSelector((state: RootState) => state.content);

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        {/* 컨텐트 */}
        <h2>Hello MinamTV</h2>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">콘텐츠ID</th>
              <th scope="col">제목</th>
              <th scope="col">등록일</th>
              <th scope="col">조회수</th>
              <th scope="col">영상 url</th>
            </tr>
          </thead>
          <tbody>
            {content.data.map((item, index) => (
              <tr key={`content-item-${index}`}>
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td>{item.createdTime}</td>
                <td>{item.viewCount}</td>
                <td>{item.videoUrl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default mtvPanel;
