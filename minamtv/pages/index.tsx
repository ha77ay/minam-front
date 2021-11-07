import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

import { useRouter } from "next/router";

interface Thumbnail {
  contentId: number;
  id: number;
  contentName: string;
  contentUrl: string;
  contentTags: string;
  createdDay: string;
  viewCount: number;
}

interface IndexProp {
  thumbnails: Thumbnail[];
}

const Home = ({ thumbnails }: IndexProp) => {
  const router = useRouter();
  console.log(thumbnails);

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
              {thumbnails.map((item, index) => (
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
                    <video>
                      <source src={item.contentUrl} type="video/mp4" />
                    </video>
                    <div className="card-body px-0">
                      <h6 className="card-title">{item.contentName}</h6>
                      <h6 className="view-counter">조회수 {item.viewCount}</h6>
                      <h6 className="text-muted">{item.createdDay}</h6>
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
  // const res = await fetch(
  //   "https://jsonplaceholder.typicode.com/photos?_start=0&_end=8"
  // );
  // const thumbnails = await res.json();
  const thumbnails = [
    {
      contentId: 1,
      id: 1,
      contentName: "1분 안에 알아보는 윤곽주사 Before & After",
      contentUrl: "https://ddbee68k5dh5z.cloudfront.net/sample-mp4-file.mp4",
      contentTags: "윤곽주사",
      createdDay: "2021.10.09",
      viewCount: 0,
    },
    {
      contentId: 2,
      id: 2,
      contentName: "포텐자와 스킨부스터 같이 받으면 부작용도 두배?!",
      contentUrl: "https://ddbee68k5dh5z.cloudfront.net/sample-mp4-file.mp4",
      contentTags: "포젠자",
      createdDay: "2021.11.06",
      viewCount: 243,
    },
    {
      contentId: 3,
      id: 3,
      contentName: "곳곳에 신경쓰이는 색소침착, 시술로 해결 가능할까?",
      contentUrl: "https://ddbee68k5dh5z.cloudfront.net/sample-mp4-file.mp4",
      contentTags: "색소침착",
      createdDay: "2021.09.16",
      viewCount: 1354,
    },
    {
      contentId: 4,
      id: 4,
      contentName: "찐경험자가 말하는 레이저제모 vs 왁싱",
      contentUrl: "https://ddbee68k5dh5z.cloudfront.net/sample-mp4-file.mp4",
      contentTags: "제모",
      createdDay: "2021.08.31",
      viewCount: 31503,
    },
    {
      contentId: 5,
      id: 5,
      contentName: "올리지오 리프팅으로 내피부나이는 내리지오!",
      contentUrl: "https://ddbee68k5dh5z.cloudfront.net/sample-mp4-file.mp4",
      contentTags: "올리지오",
      createdDay: "2021.08.27",
      viewCount: 59193,
    },
    {
      contentId: 6,
      id: 6,
      contentName: "리니어펌, 레이저리프팅이 3분만에 끝난다고?",
      contentUrl: "https://ddbee68k5dh5z.cloudfront.net/sample-mp4-file.mp4",
      contentTags: "리프팅",
      createdDay: "2021.08.13",
      viewCount: 37241,
    },
    {
      contentId: 7,
      id: 7,
      contentName: "스킨부스터 정보 꿀잼퀴즈로 재미있게 알아가세요.",
      contentUrl: "https://ddbee68k5dh5z.cloudfront.net/sample-mp4-file.mp4",
      contentTags: "",
      createdDay: "2021.08.06",
      viewCount: 12052,
    },
    {
      contentId: 8,
      id: 8,
      contentName: "종아리보톡스 한번에 효과 볼 수 있나요?",
      contentUrl: "https://ddbee68k5dh5z.cloudfront.net/sample-mp4-file.mp4",
      contentTags: "보톡스",
      createdDay: "2021.07.16",
      viewCount: 2201,
    },
  ];

  // Pass data to the page via props
  return { props: { thumbnails } };
};

export default Home;
