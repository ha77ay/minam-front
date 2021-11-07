import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
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
      <section>
        <div className="d-flex flex-wrap justify-content-center">
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
        <div className="d-flex flex-column mt-3">
          <h2>{uploadedVideo.contentName}</h2>
          <h6>{uploadedVideo.createdDay}</h6>
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
