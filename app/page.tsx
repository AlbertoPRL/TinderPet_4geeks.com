"use client";

import { useRouter } from "next/navigation";
import { useUserStore } from "./lib/stores/user";
import styles from "./page.module.css";

export default function Home() {
  const route = useRouter();
  const token = useUserStore((state) => state.userToken);

  return <main className={styles.main}>{token}</main>;
}
