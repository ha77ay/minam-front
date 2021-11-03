import Layout from "../components/layout";

import Head from "next/head";
import styles from "../styles/Home.module.css";

interface HomeProp {
  todo: Todo;
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Home = ({ todo }: HomeProp) => {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>미남TV</title>
          <meta name="description" content="미남이시네요" />
          <link rel="icon" href="/minam-icon.svg" />
        </Head>

        <main className={styles.main}>
          내용입니다
          <div>{todo.title}</div>
        </main>

        <footer className={styles.footer}></footer>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const todo: Todo = await res.json();

  return { props: { todo } };
};

export default Home;
