import Link from "next/link";
import styles from "./sidebar.module.css";

export default function Sidebar() {
  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder="Search..." />
      <Link href="/about">
        <a>1번</a>
      </Link>
      <Link href="/about/history">
        <a>History</a>
      </Link>
      <Link href="/about/contact">
        <a>Contact</a>
      </Link>
    </nav>
  );
}
