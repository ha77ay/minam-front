import React from "react";
import Link from "next/link";
import styles from "./sidebar.module.scss";
import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Sidebar() {
  return (
    <nav className={styles.nav}>
      <Image
        src="/brand-logo-w.svg"
        alt="미남로고"
        width="166"
        height="44"
        priority
      />
      <Link href="/">
        <a className="mt-4">
          <i className="bi bi-speedometer2 me-4" />
          <span className="me-5">대시보드</span>
          <i className="bi bi-chevron-right" />
        </a>
      </Link>
      <Link href="/mtv">
        <a>
          <i className="bi bi-youtube me-4" />
          <span className="me-5">미남TV</span>
          <i className="bi bi-chevron-right ms-2" />
        </a>
      </Link>
    </nav>
  );
}
