import { iteratorSymbol } from "immer/dist/internal";
import { useSelector } from "react-redux";
import { RootState } from "../provider";

const mtvPanel = () => {
  // content state 전체를 가져옴
  const content = useSelector((state: RootState) => state.content);

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <div>Hello MinamTV</div>
        <div>(필수)콘텐츠 등록 및 삭제 기능</div>
      </div>
    </>
  );
};

export default mtvPanel;
