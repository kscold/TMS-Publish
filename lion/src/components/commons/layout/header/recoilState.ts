// recoilState.ts

import { atom } from "recoil";

export const isLoginVisibleState = atom<boolean>({
  key: "isLoginVisibleState",
  default: false,
});
