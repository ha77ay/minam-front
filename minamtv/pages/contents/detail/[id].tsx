import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import Layout from "../../../components/layout";

interface Content {
  contentId: number;
  id: number;
  contentName: string;
  contentUrl: string;
  contentTags: string;
  createdDay: string;
  viewCount: number;
}

interface DetailProp {
  uploadedVideo: Content;
}

const ContentDetail = ({ uploadedVideo }: DetailProp) => {
  const router = useRouter();

  // /contents/detail/[id]
  const id = router.query.id as string;
  console.log(id);

  return (
    <Layout>
      <section className="d-flex d-flex flex-column align-items-center">
        {/* 비디오 플레이어 */}
        <div>
          <video
            width={500}
            height={400}
            controls
            // onClick={(e) => {
            //   router.push("/");
            // }}
          >
            <source src={uploadedVideo.contentUrl} type="video/mp4" />
          </video>
        </div>
        {/* 영상 상세정보 */}
        <div className="mt-4">
          <h2>{uploadedVideo.contentName}</h2>
          <h6>
            조회수 {uploadedVideo.viewCount}회 <span>&#183;</span>{" "}
            {uploadedVideo.createdDay}
          </h6>
          <hr style={{ color: "black" }} />
          <h6 className="mb-3">댓글 21개</h6>
          <InputGroup>
            <FormControl
              placeholder="공개 댓글 추가..."
              aria-label="댓글작성란"
            />
            <Button variant="outline-secondary">취소</Button>
            <Button variant="outline-secondary">댓글</Button>
          </InputGroup>
        </div>
      </section>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;

  // Fetch data from external API

  const uploadedVideo = {
    contentId: 1,
    id: 1,
    contentName: "1분 안에 알아보는 윤곽주사 Before & After",
    contentUrl: "https://ddbee68k5dh5z.cloudfront.net/sample-mp4-file.mp4",
    contentTags: "윤곽주사",
    createdDay: "2021.10.09",
    viewCount: 0,
  };
  // Pass data to the page via props
  return { props: { uploadedVideo } };
};

export default ContentDetail;
