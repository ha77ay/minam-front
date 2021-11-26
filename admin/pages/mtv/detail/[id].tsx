import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getTimeString } from "../../../lib/string";
import { AppDispatch, RootState } from "../../../provider";
import { removeContent } from "../../../provider/modules/content";
// import { ContentItem } from "../../../provider/modules/content";
import { requestRemoveContent } from "../../../middleware/modules/content";
import { useEffect } from "react";

const MtvDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  // mtv/detail/[id]
  const id = router.query.id as string;
  // console.log(id);

  let contentItem = useSelector((state: RootState) =>
    state.content.data.find((item) => item.id === +id)
  );

  // 삭제 여부 감지 및 가져오기
  const isRemoveCompleted = useSelector(
    (state: RootState) => state.content.isRemoveCompleted
  );

  useEffect(() => {
    isRemoveCompleted && router.push("/mtv");
  }, [isRemoveCompleted, router]);

  const handDeleteClick = () => {
    // saga action으로 대체
    dispatch(requestRemoveContent(+id));
  };

  return (
    <section style={{ width: "40vw", marginTop: "5vh" }} className="mx-auto">
      <h2 className="text-center">MTV Detail</h2>
      {!contentItem && (
        <div className="text-center my-5">데이터가 없습니다.</div>
      )}
      {contentItem && (
        <table className="table">
          <tbody>
            <tr>
              <th style={{ width: "10vw" }}>제목</th>
              <td>{contentItem.title}</td>
            </tr>
            <tr>
              <th>설명</th>
              <td>{contentItem.description}</td>
            </tr>
            <tr>
              <th>담당자</th>
              <td>{contentItem.userId}</td>
            </tr>
            <tr>
              <th>등록일</th>
              <td>{getTimeString(contentItem.createdTime)}</td>
            </tr>

            <tr>
              <th>동영상</th>
              <td>
                <video width={400} height={300} controls>
                  <source src={contentItem.videoUrl} type="video/mp4" />
                </video>
              </td>
            </tr>
          </tbody>
        </table>
      )}

      <div className="d-flex">
        <div style={{ width: "50%" }}>
          <button
            className="btn btn-secondary me-1"
            onClick={() => {
              router.push("/mtv");
            }}
          >
            <i className="bi bi-grid-3x3-gap me-1"></i>
            목록
          </button>
        </div>
        <div style={{ width: "50%" }} className="d-flex justify-content-end">
          <button
            className="btn btn-danger"
            onClick={() => {
              handDeleteClick();
            }}
          >
            <i className="bi bi-trash me-1" />
            삭제
          </button>
        </div>
      </div>
    </section>
  );
};

export default MtvDetail;
