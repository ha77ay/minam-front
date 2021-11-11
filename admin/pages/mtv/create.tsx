import router from "next/router";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../provider";
import { addContent, ContentItem } from "../../provider/modules/content";
import api from "../../api/content";

const MtvCreate = () => {
  // 입력 폼 ref 객체
  const titleInput = useRef<HTMLInputElement>(null);
  const descTxta = useRef<HTMLTextAreaElement>(null);
  const tagInput = useRef<HTMLInputElement>(null);
  const authorInput = useRef<HTMLInputElement>(null);
  const fileInput = useRef<HTMLInputElement>(null);

  // 콘텐츠 데이터 배열 가져오기
  const contentData = useSelector((state: RootState) => state.content.data);

  // 디스패치 함수 만들기
  const dispatch = useDispatch<AppDispatch>();

  // 리덕스에 추가해주는 메서드
  const handleAddClick = () => {
    // console.log(titleInput.current?.value);
    // console.log(descTxta.current?.value);
    // console.log(authorInput.current?.value);
    if (fileInput.current?.files?.length) {
      // console.log(fileInput.current?.files[0]);
    }

    if (fileInput.current?.files?.length) {
      const videoFile = fileInput.current.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        // 추가할 객체 생성
        const item: ContentItem = {
          id: contentData.length ? contentData[0].id + 1 : 1,
          title: titleInput.current ? titleInput.current.value : "",
          description: descTxta.current?.value,
          videoUrl: reader.result ? reader.result.toString() : "",
          fileType: videoFile.type,
          fileName: videoFile.name,
          authorId: authorInput.current ? authorInput.current.value : "",
          like: 0,
          unlike: 0,
          createdTime: new Date().getTime(),
          tags: tagInput.current?.value,
        };

        // console.log(item);

        // state에 데이터 추가
        // addContent 함수에서 Action 객체를 생성함
        // Action 객체를 Dispatcher에 전달함
        // Dispatcher에서 Action.type에 맞는 리듀서 함수를 실행

        dispatch(addContent(item));
        router.push("/mtv");
      };

      reader.readAsDataURL(videoFile);
    }
  };

  // 백엔드 연동하는 async 메서드(POST)
  const add = async () => {
    const result = await api.add({
      title: titleInput.current?.value,
      description: descTxta.current?.value,
      videoUrl: fileInput.current?.value,
      authorId: authorInput.current?.value,
      tags: tagInput.current?.value,
    });
    console.log(result);
    router.push("/mtv");
  };

  return (
    <section style={{ width: "40vw", marginTop: "10vh" }} className="mx-auto">
      <h2 className="text-center">신규 콘텐츠 등록</h2>
      <form>
        <table className="table">
          <tbody>
            <tr>
              <th>제목</th>
              <td>
                <input className="form-control" type="text" ref={titleInput} />
              </td>
            </tr>
            <tr>
              <th>설명</th>
              <td>
                <textarea
                  className="form-control"
                  style={{ height: "30vh" }}
                  ref={descTxta}
                ></textarea>
              </td>
            </tr>
            <tr>
              <th>태그</th>
              <td>
                <input className="form-control" type="text" ref={tagInput} />
              </td>
            </tr>
            <tr>
              <th>담당자</th>
              <td>
                <input className="form-control" type="text" ref={authorInput} />
              </td>
            </tr>
            <tr>
              <th>동영상</th>
              <td>
                <input
                  className="form-control"
                  type="file"
                  accept="video/*"
                  ref={fileInput}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <div>
        <button
          className="btn btn-secondary float-start"
          onClick={() => {
            router.push("/mtv");
          }}
        >
          <i className="bi bi-grid-3x3-gap me-1"></i>
          목록
        </button>
        <button
          className="btn btn-primary float-end"
          onClick={() => {
            // handleAddClick(); -- redux로 처리함
            add();
          }}
        >
          <i className="bi bi-check" />
          저장
        </button>
      </div>
    </section>
  );
};

export default MtvCreate;
