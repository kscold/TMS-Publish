import React from "react";
import Link from "next/link";
import {
  AuthFormBlock,
  ButtonWithMarginTop,
  Footer,
  StyledInput,
} from "./logincss";

const Login = (): JSX.Element => {
  return (
    <AuthFormBlock>
      <h3 style={{ marginBottom: "4px" }}>로그인</h3>
      <form>
        <StyledInput autoComplete="username" name="username" placeholder="id" />
        <StyledInput
          autoComplete="current-password"
          name="password"
          placeholder="password"
          type="password"
        />
        <ButtonWithMarginTop fullWidth>login</ButtonWithMarginTop>
      </form>
      <Footer>
        <Link href="/register">회원가입</Link>
      </Footer>
    </AuthFormBlock>
  );
};

export default Login;
