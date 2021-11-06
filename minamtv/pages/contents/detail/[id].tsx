import { auto } from "@popperjs/core";
import { useRouter } from "next/router";
import Layout from "../../../components/layout";

const ContentDetail = () => {
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
            <source
              src="https://ddbee68k5dh5z.cloudfront.net/sample-mp4-file.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="d-flex flex-wrap justify-content-center mt-3">
          <h2>{id}번 콘텐츠 상세페이지입니다.</h2>
        </div>
      </section>
    </Layout>
  );
};

export default ContentDetail;
