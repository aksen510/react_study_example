"use client";

import { useEffect } from "react";
import { useStore } from "./store/store";

export default function PostList({ styles }) {
  const { posts, loading, error, selectedPostId, fetchPosts, selectPost } =
    useStore();

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
            {posts
              ?.filter((post) => post.id === selectedPostId)
              .map((post) => (
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
