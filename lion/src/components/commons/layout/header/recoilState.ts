// recoilState.ts

import { atom } from "recoil";

export const isLoginVisibleState = atom<boolean>({
  key: "isLoginVisibleState",
  default: false,
});

// 카카오 이름
export const userNameState = atom<string | null>({
  key: "userNameState",
  default: null,
});
