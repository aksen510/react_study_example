"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsFailure,
  selectPost,
} from "./store/actions";

export default function PostList({ styles }) {
  const dispatch = useDispatch();
  const { posts, loading, error, selectedPostId } = useSelector(
    (state) => state.posts
  );

  useEffect(() => {
    const fetchPosts = async () => {
      dispatch(fetchPostsRequest());
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) throw new Error("포스트 로딩 실패");
        const data = await response.json();
        dispatch(fetchPostsSuccess(data));
      } catch (error) {
        dispatch(
          fetchPostsFailure(
            error instanceof Error ? error.message : "에러가 발생했습니다"
          )
        );
      }
    };

    fetchPosts();
  }, [dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div className={styles.errorMessage}>{error}</div>;

  return (
    <div className={styles.postContainer}>
      <h2 className={styles.postTitle}>Redux로 구현한 게시글 목록</h2>
      <div className={styles.postGrid}>
        <div className={styles.postList}>
          {posts.map((post) => (
            <div
              key={post.id}
              className={`${styles.postItem} ${
                selectedPostId === post.id ? styles.selected : ""
              }`}
              onClick={() => dispatch(selectPost(post.id))}
            >
              <h3 className={styles.postItemTitle}>{post.title}</h3>
              <p className={styles.postItemBody}>{post.body}</p>
            </div>
          ))}
        </div>
        {selectedPostId && (
          <div className={styles.postDetail}>
            {posts
              .filter((post) => post.id === selectedPostId)
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
