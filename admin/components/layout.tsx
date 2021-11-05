import Head from "next/head";

import React from "react";
import styles from "./layout.module.css";
import SideBar from "./sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Myworkspace</title>
      </Head>
      <header>
        {" "}
        <SideBar />
      </header>
      <main className={styles.main}>{children}</main>
    </>
  );
}
