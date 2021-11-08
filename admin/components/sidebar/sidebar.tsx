import React from "react";
import Link from "next/link";
import styles from "./sidebar.module.scss";
import Image from "next/image";

export default function Sidebar() {
  return (
    <nav className={styles.nav}>
      <Image src="/brand-logo-b.svg" alt="미남로고" width="166" height="44" />
      <Link href="/">
        <a className="mt-3">DASHBOARD</a>
      </Link>
      <Link href="/ptnpanel">
        <a>PARTNERS</a>
      </Link>
      <Link href="/eventpanel">
        <a>EVENTS</a>
      </Link>
      <Link href="/salespanel">
        <a>SALES</a>
      </Link>
      <Link href="mtvpanel">
        <a>미남TV</a>
      </Link>
    </nav>
  );
}
