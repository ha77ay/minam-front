import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

import { useRouter } from "next/router";

interface ThumbsProp {
  thumbs: Thumb[];
}

interface Thumb {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const Home = ({ thumbs }: ThumbsProp) => {
  const router = useRouter();
  console.log(thumbs);

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>미남TV</title>
          <meta name="description" content="미남이시네요" />
          <link rel="icon" href="/minam-icon.svg" />
        </Head>

        <main className={styles.main}>
          <h2 style={{ fontWeight: "bold" }}>미남TV</h2>
          <section>
            <div className="d-flex flex-wrap justify-content-center">
              {/* state 데이터 배열에 맵함수로 출력 */}
              {thumbs.map((item, index) => (
                <div
                  key={`content-item-${index}`}
                  className="card"
                  style={{
                    marginRight: "1rem",
                    marginTop: "0.5rem",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    router.push(`contents/detail/${item.id}`);
                  }}
                >
                  {/* 컨텐트 wrapper --- 시작 */}
                  <div>
                    <Image
                      src={item.thumbnailUrl}
                      alt={item.title}
                      // 이미지 크기에 맞게 가운데부분 노출
                      // layout="responsive"
                      // objectFit="cover"
                      // -----
                      width={300}
                      height={150}
                    />
                    <div className="card-body">
                      <h5 className="card-title">영상 제목</h5>
                      <h6 className="view-counter">조회수</h6>
                      <h6 className="text-muted">2021년 10월 23일</h6>
                    </div>
                  </div>
                  {/* 컨텐트 wrapper --- 끝 */}
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer className={styles.footer}></footer>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_start=0&_end=8"
  );
  const thumbs = await res.json();

  return { props: { thumbs } };
};

export default Home;
