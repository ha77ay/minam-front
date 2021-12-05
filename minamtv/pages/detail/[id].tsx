import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/layout";
import axios from "axios";

interface ContentItem {
  id: number;
  title: string;
  description: string;
  commentCnt: number;
  videoUrl: string;
  fileType: string;
  fileName: string;
  createdTime: number;
  userId: string;
}

interface DetailProp {
  uploadedVideo: ContentItem;
}

const ContentDetail = ({ uploadedVideo }: DetailProp) => {
  const router = useRouter();

  // /contents/detail/[id]
  const id = router.query.id as string;
  console.log(id);

  return (
    <Layout>
      <section
        className="d-flex d-flex flex-column align-items-center"
        style={{ backgroundColor: "black" }}
      >
        {/* 비디오 플레이어 */}
        <div>
          <video style={{ width: "100vw" }} controls>
            <source src={uploadedVideo.videoUrl} type="video/mp4" />
          </video>
        </div>
        {/* 영상 상세정보 */}
        <div className="mt-2" style={{ color: "white" }}>
          <h3>{uploadedVideo.title}</h3>
          <h6 className="my-4" style={{ width: "80vw" }}>
            {uploadedVideo.description}
          </h6>
        </div>
      </section>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;

  // Fetch data from external API
  const res = await axios.get<ContentItem>(
    `${process.env.NEXT_PUBLIC_API_BASE}/mtv/${id}`
  );
  const uploadedVideo = res.data;

  // Pass data to the page via props
  return { props: { uploadedVideo } };
};

export default ContentDetail;
