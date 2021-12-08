import Head from "next/head";
import axios from "axios";

import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

import { useRouter } from "next/router";

import { getTimeString } from "../lib/string";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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

interface IndexProp {
  contents: ContentItem[];
}

const Home = ({ contents }: IndexProp) => {
  const router = useRouter();

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>미남TV</title>
          <meta name="description" content="미남이시네요" />
          <link rel="icon" href="/minam-icon.svg" />
        </Head>

        <main className={styles.main}>
          {/* <h2 style={{ fontWeight: "bold" }}>미남TV</h2> */}
          <section>
            <div className="d-flex flex-wrap justify-content-center">
              {/* state 데이터 배열에 맵함수로 출력 */}
              {contents.map((item, index) => (
                <div
                  key={`content-item-${index}`}
                  className="card"
                  style={{
                    width: "calc((100% - 3rem) / 4)",
                    marginLeft: index % 4 === 0 ? "0" : "1rem",
                    marginTop: index > 3 ? "1rem" : "0",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    router.push(`detail/${item.id}`);
                  }}
                >
                  {/* 컨텐트 wrapper --- 시작 */}
                  <div>
                    <video
                      style={{
                        width: "100%",
                      }}
                    >
                      <source src={item.videoUrl} type="video/mp4" />
                    </video>
                    <div className="card-body px-0">
                      <h6 className="card-title">{item.title}</h6>
                      {/* <h6>{item.description}</h6> */}
                      <h6>{item.userId}</h6>
                      <h6 className="text-muted">
                        {getTimeString(item.createdTime)}
                      </h6>
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

export async function getServerSideProps() {
  const res = await axios.get<ContentItem[]>(
    `${process.env.NEXT_PUBLIC_API_BASE}/mtv`
  );
  const contents = res.data;

  // Pass data to the page via props
  return { props: { contents } };
}

export default Home;
