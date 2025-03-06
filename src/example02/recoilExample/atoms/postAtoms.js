import { atom, selector } from "recoil";

export const postsState = atom({
  key: "postsState",
  // 기본값 설정
  default: [],
});

export const loadingState = atom({
  // 구현해주세요
  key: "loadingState",
  default: false,
});

export const errorState = atom({
  // 구현해주세요
  key: "errorState",
  default: null,
});

export const selectedPostIdState = atom({
  // 구현해주세요
  key: "selectedPostIdState",
  default: null,
});

export const selectedPostState = selector({
  key: "selectedPostState",
  get: ({ get }) => {
    // posts와 selectedId를 가져와서
    // 선택된 post를 찾아 반환하는 로직 구현
    const posts = get(postsState);
    const selectedId = get(selectedPostIdState);

    return posts?.filter((post) => post.id === selectedId) || null;
  },
});
