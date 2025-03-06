"use client";

import { RecoilRoot } from "recoil";
import styles from "../styles/page.module.css";
import PostList from "./PostList";

export default function RecoilExample() {
	return (
		<RecoilRoot>
			<PostList styles={styles} />
		</RecoilRoot>
	);
}
