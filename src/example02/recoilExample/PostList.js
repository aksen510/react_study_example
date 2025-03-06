"use client";

import { useRecoilState } from "recoil";

export default function PostList({ styles }) {
	// TODO: 필요한 recoil 상태들을 가지고 오기
	const { posts, setPosts } = useRecoilState(postsState);

	// https://velog.io/@juno7803/Recoil-Recoil-200-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0
	// https://jeonghodong.tistory.com/entry/React-Recoil-%EC%82%AC%EC%9A%A9%EB%B2%95-RecoilRoot-atom-selector

	useEffect(() => {
		fetchPosts();
	}, [fetchPosts]);

	if (loading) return <div>로딩중...</div>;
	if (error) return <div className={styles.errorMessage}>{error}</div>;
	return (
		<div className={styles.postContainer}>
			<h2 className={styles.postTitle}>zustand로 구현한 게시글 목록</h2>
			<div className={styles.postGrid}>
				<div className={styles.postList}>
					{posts?.map((post) => (
						<div
							key={post.id}
							className={`${styles.postItem} ${
								selectedPostId === post.id
									? styles.selected
									: ""
							}`}
							onClick={() => selectPost(post.id)}
						>
							<h3 className={styles.postItemTitle}>
								{post.title}
							</h3>
							<p className={styles.postItemBody}>{post.body}</p>
						</div>
					))}
				</div>
				{selectedPostId && (
					<div className={styles.postDetail}>
						{posts
							?.filter((post) => post.id === selectedPostId)
							.map((post) => (
								<div key={post.id}>
									<h3 className={styles.postDetailTitle}>
										{post.title}
									</h3>
									<p>{post.body}</p>
								</div>
							))}
					</div>
				)}
			</div>
		</div>
	);
}
