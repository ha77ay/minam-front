import Head from "next/head";

import React from "react";
import head from "next/head";

import styles from "./layout.module.css";
import Sidebar from "./sidebar/sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Myworkspace</title>
      </Head>
      <header>헤더입니다</header>
      <main className={styles.main}></main>
    </>
  );
}
