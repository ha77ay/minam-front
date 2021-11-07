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
  playVideo: Content;
}

const ContentDetail = ({ playVideo }: DetailProp) => {
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
            <source src={playVideo.contentUrl} type="video/mp4" />
          </video>
        </div>
        <div className="d-flex flex-column mt-3">
          <h2>{playVideo.contentName}</h2>
          <h6>{playVideo.createdDay}</h6>
        </div>
      </section>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;

  // Fetch data from external API

  const playVideo = {
    contentId: 1,
    id: 1,
    contentName: "1분 안에 알아보는 윤곽주사 Before & After",
    contentUrl: "https://ddbee68k5dh5z.cloudfront.net/sample-mp4-file.mp4",
    contentTags: "윤곽주사",
    createdDay: "2021.10.09",
    viewCount: 0,
  };
  // Pass data to the page via props
  return { props: { playVideo } };
};

export default ContentDetail;
