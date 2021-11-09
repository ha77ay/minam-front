import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../provider";
import { ContentItem, modifyContent } from "../../../provider/modules/content";

const ContentEdit = () => {
  const router = useRouter();

  const id = router.query.id as string;
  // console.log(id);

  const contentItem = useSelector((state: RootState) =>
    state.content.data.find((item) => item.id === +id)
  );
  // console.log(contentItem);

  const dispatch = useDispatch<AppDispatch>();

  const [url, setUrl] = useState<string | undefined>(contentItem?.videoUrl);

  // 입력 폼 ref 객체
  const titleInput = useRef<HTMLInputElement>(null);
  const descTxta = useRef<HTMLTextAreaElement>(null);
  const tagInput = useRef<HTMLInputElement>(null);
  const authorInput = useRef<HTMLInputElement>(null);
  const fileInput = useRef<HTMLInputElement>(null);

  // -- 이벤트에 대해서 처리하는 부분 --
  const changeFile = () => {
    console.log("change");
    if (fileInput.current?.files?.length) {
      const videoFile = fileInput.current.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        setUrl(reader.result?.toString());
      };

      reader.readAsDataURL(videoFile);
      console.log(videoFile);
    }
    console.log(url);
  };

  const handleSaveClick = () => {
    // 파일이 있을 때 처리
    if (fileInput.current?.files?.length) {
      const videoFile = fileInput.current.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        if (contentItem) {
          // 기존 데이터 카피
          const item = { ...contentItem };
          // 변경할 속성만 대입
          item.title = titleInput.current ? titleInput.current.value : "";
          item.description = descTxta.current?.value;
          item.tags = tagInput.current?.value;
          item.authorId = authorInput.current ? authorInput.current.value : "";
          item.videoUrl = reader.result ? reader.result.toString() : "";
          item.fileType = videoFile.type;
          item.fileName = videoFile.name;

          // reducer로 state 수정 및 목록으로 이동
          saveItem(item);

          // // SSR 상태로 redux store가 없다면
          // if (!isModifyCompleted) {
          //   router.push("/photos");
          // }
        }
      };

      reader.readAsDataURL(videoFile);
    }
    // 파일이 없을 때 처리
    else {
      if (contentItem) {
        // 기존 데이터 카피
        const item = { ...contentItem };
        // 변경할 속성만 대입
        item.title = titleInput.current ? titleInput.current.value : "";
        item.description = descTxta.current?.value;
        item.tags = tagInput.current?.value;
        item.authorId = authorInput.current ? authorInput.current.value : "";

        // reducer로 state 수정 및 목록으로 이동
        saveItem(item);
      }
    }
  };

  const saveItem = (item: ContentItem) => {
    dispatch(modifyContent(item));
    // dispatch(requestModifyPhoto(item)); // saga action으로 대체
    router.push(`/mtv/detail/${id}`);
  };

  return (
    <section style={{ width: "40vw", marginTop: "5vh" }} className="mx-auto">
      <h2 className="text-center">MTV Edit</h2>
      <form>
        <table className="table">
          <tbody>
            <tr>
              <th>제목</th>
              <td>
                <input
                  className="form-control"
                  type="text"
                  defaultValue={contentItem?.title}
                  ref={titleInput}
                />
              </td>
            </tr>
            <tr>
              <th>설명</th>
              <td>
                <textarea
                  className="form-control"
                  style={{ height: "30vh" }}
                  defaultValue={contentItem?.description}
                  ref={descTxta}
                ></textarea>
              </td>
            </tr>
            <tr>
              <th>태그</th>
              <td>
                <input
                  className="form-control"
                  type="text"
                  defaultValue={contentItem?.tags}
                  ref={tagInput}
                />
              </td>
            </tr>
            <tr>
              <th>담당자</th>
              <td>
                <input
                  className="form-control"
                  type="text"
                  defaultValue={contentItem?.authorId}
                  ref={authorInput}
                />
              </td>
            </tr>
            <tr>
              <th>동영상</th>
              <td>
                <video width={500} height={400} controls key={url}>
                  <source src={url} type="video/mp4" />
                </video>
                <input
                  className="form-control"
                  type="file"
                  accept="video/*"
                  ref={fileInput}
                  onChange={() => {
                    changeFile();
                  }}
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
            handleSaveClick();
          }}
        >
          <i className="bi bi-check" />
          저장
        </button>
      </div>
    </section>
  );
};

export default ContentEdit;
