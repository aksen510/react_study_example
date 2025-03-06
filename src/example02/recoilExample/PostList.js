"use client";

import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  errorState,
  loadingState,
  postsState,
  selectedPostIdState,
  selectedPostState,
} from "./atoms/postAtoms";

export default function PostList({ styles }) {
  const [posts, setPosts] = useRecoilState(postsState);
  const [loading, setLoading] = useRecoilState(loadingState);
  const [error, setError] = useRecoilState(errorState);
  const [selectedPostId, setSelectedPostId] =
    useRecoilState(selectedPostIdState);

  const selectedPost = useRecoilValue(selectedPostState);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true); // 로딩 상태 활성화
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) throw new Error("포스트 로딩 실패");
        const data = await response.json();
        setPosts(data); // 상태 업데이트
        setLoading(false); // 로딩 상태 비활성화
      } catch (err) {
        setError(err.message); // 에러 상태 설정
        setLoading(false);
      }
    };

    fetchPosts(); // 컴포넌트 초기 렌더링 시 데이터 가져오기
  }, [setPosts, setLoading, setError]);

  const selectPost = (id) => {
    setSelectedPostId(id); // 클릭한 게시글의 ID 설정
  };

  if (loading) return <div>로딩중...</div>;
  if (error) return <div className={styles.errorMessage}>{error}</div>;

  return (
    <div className={styles.postContainer}>
      <h2 className={styles.postTitle}>Recoil로 구현한 게시글 목록</h2>
      <div className={styles.postGrid}>
        <div className={styles.postList}>
          {posts?.map((post) => (
            <div
              key={post.id}
              className={`${styles.postItem} ${
                selectedPostId === post.id ? styles.selected : ""
              }`}
              onClick={() => selectPost(post.id)}
            >
              <h3 className={styles.postItemTitle}>{post.title}</h3>
              <p className={styles.postItemBody}>{post.body}</p>
            </div>
          ))}
        </div>
        {selectedPostId && (
          <div className={styles.postDetail}>
            {selectedPost.map((post) => (
              <div key={post.id}>
                <h3 className={styles.postDetailTitle}>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
