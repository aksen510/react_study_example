"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/page.module.css";

const links = [
  { href: "/reduxExample", label: "Redux" },
  { href: "/recoilExample", label: "Recoil" },
  { href: "/zustandExample", label: "Zustand" },
];

export default function Home() {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>상태 관리 라이브러리 비교</h1>
      <p className={styles.description}>Redux, Recoil, Zustand 비교 분석</p>
      <nav className={styles.nav}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${styles.link} ${
              pathname === link.href ? styles.active : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
