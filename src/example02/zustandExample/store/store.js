import { create } from "zustand";

const initialState = {
  posts: [],
  loading: false,
  error: null,
  selectedPostId: null,
};

export const useStore = create((set) => ({
  ...initialState,

  // posts를 가져오는 함수
  fetchPosts: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) throw new Error("포스트 로딩 실패");
      const data = await response.json();
      console.log("data>>>>>", data);
      set({ posts: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // post를 선택하는 함수
  selectPost: (postId) => {
    set({ selectedPostId: postId });
  },
}));
