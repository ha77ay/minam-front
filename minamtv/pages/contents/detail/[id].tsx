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
        <h2>여기는 {id}의 상세페이지입니다.</h2>
      </section>
    </Layout>
  );
};

export default ContentDetail;
