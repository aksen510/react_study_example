import { atom, selector } from "recoil";

// TODO: posts를 저장할 atom을 구현
export const postsState = atom({
  key: "postsState",
  // 기본값 설정
});

// TODO: loading 상태를 저장할 atom을 구현
export const loadingState = atom({
  // 구현해주세요
});

// TODO: error 상태를 저장할 atom을 구현
export const errorState = atom({
  // 구현해주세요
});

// TODO: 선택된 post의 id를 저장할 atom을 구현
export const selectedPostIdState = atom({
  // 구현해주세요
});

// TODO: 선택된 post를 반환하는 selector를 구현
export const selectedPostState = selector({
  key: "selectedPostState",
  get: ({ get }) => {
    // posts와 selectedId를 가져와서
    // 선택된 post를 찾아 반환하는 로직 구현
  },
});
