// loginfunc.tsx
import React, { useState } from "react";
import Link from "next/link";
import {
  ButtonWithMarginTop,
  Footer,
  StyledInput,
  LoginWrapper,
  LoginFormWrapper,
} from "./logincss";

import KakaoLoginButton from "./KakaoLoginButton";
import { useRecoilState } from "recoil";
import { userNameState } from "../../commons/layout/header/recoilState";

const Login = (): JSX.Element => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [userName, setUserName] = useRecoilState(userNameState); // Use the Recoil state for userName

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitLogin = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (
      formData.username === "chan6502@gmail.com" &&
      formData.password === "tmdcks6502"
    ) {
      console.log("Login successful");
      localStorage.setItem("isLoggedIn", "true");
      setUserName("John Doe"); // Set the userName in Recoil state upon successful login
    } else {
      console.log("Login failed");
    }
  };

  const onClickLogout = (): void => {
    localStorage.removeItem("isLoggedIn");
    setUserName(null); // Set the userName in Recoil state to null upon logout
  };

  return (
    <LoginWrapper>
      <LoginFormWrapper>
        <h3 style={{ marginBottom: "4px" }}>로그인</h3>
        <form onSubmit={onSubmitLogin}>
          <StyledInput
            autoComplete="username"
            name="username"
            placeholder="id"
            value={formData.username}
            onChange={onChangeInput}
          />
          <StyledInput
            autoComplete="current-password"
            name="password"
            placeholder="password"
            type="password"
            value={formData.password}
            onChange={onChangeInput}
          />
          <ButtonWithMarginTop fullWidth type="submit">
            login
          </ButtonWithMarginTop>
        </form>
        <KakaoLoginButton />
        <Footer>
          <Link href="/register">회원가입</Link>
          {userName && <button onClick={onClickLogout}>Logout</button>}
        </Footer>
      </LoginFormWrapper>
    </LoginWrapper>
  );
};

export default Login;
