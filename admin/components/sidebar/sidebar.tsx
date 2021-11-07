import React from "react";
import Link from "next/link";
import styles from "./sidebar.module.scss";

export default function Sidebar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>파트너관리</a>
      </Link>
      <Link href="/">
        <a>이벤트관리</a>
      </Link>
      <Link href="/">
        <a>과금관리</a>
      </Link>
      <Link href="mtvpanel">
        <a href="/mtvpanel">미남TV관리</a>
      </Link>
    </nav>
  );
}
