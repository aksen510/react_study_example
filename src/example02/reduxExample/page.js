"use client";

import styles from "../styles/page.module.css";

import ReduxProvider from "./Provider";
import PostList from "./PostList";

export default function ReduxExample() {
  return (
    <ReduxProvider>
      <PostList styles={styles} />
    </ReduxProvider>
  );
}
