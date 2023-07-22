// import React from "react";
// import Link from "next/link";
// import {
//   ButtonWithMarginTop,
//   Footer,
//   StyledInput,
//   LoginWrapper,
//   LoginFormWrapper,
// } from "./logincss";

// const Login = (): JSX.Element => {
//   return (
//     <LoginWrapper>
//       <LoginFormWrapper>
//         <h3 style={{ marginBottom: "4px" }}>로그인</h3>
//         <form>
//           <StyledInput
//             autoComplete="username"
//             name="username"
//             placeholder="id"
//           />
//           <StyledInput
//             autoComplete="current-password"
//             name="password"
//             placeholder="password"
//             type="password"
//           />
//           <ButtonWithMarginTop fullWidth>login</ButtonWithMarginTop>
//         </form>
//         <Footer>
//           <Link href="/register">회원가입</Link>
//         </Footer>
//       </LoginFormWrapper>
//     </LoginWrapper>
//   );
// };

// export default Login;

import React, { useState } from "react";
import Link from "next/link";
import {
  ButtonWithMarginTop,
  Footer,
  StyledInput,
  LoginWrapper,
  LoginFormWrapper,
} from "./logincss";

const Login = (): JSX.Element => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you can simulate the login process by checking the user data in local storage or any other client-side method
    // For example, you can use localStorage.getItem() to get the user data and simulate login.
    // For this example, let's assume we have hardcoded the username and password for demonstration purposes.
    if (
      formData.username === "chan6502@gmail.com" &&
      formData.password === "tmdcks6502"
    ) {
      console.log("Login successful");
      // You can set a flag or user data in local storage to indicate that the user is logged in.
      // For this example, let's use a flag called "isLoggedIn".
      localStorage.setItem("isLoggedIn", "true");
    } else {
      console.log("Login failed");
    }
  };

  return (
    <LoginWrapper>
      <LoginFormWrapper>
        <h3 style={{ marginBottom: "4px" }}>로그인</h3>
        <form onSubmit={handleLogin}>
          <StyledInput
            autoComplete="username"
            name="username"
            placeholder="id"
            value={formData.username}
            onChange={handleInputChange}
          />
          <StyledInput
            autoComplete="current-password"
            name="password"
            placeholder="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <ButtonWithMarginTop fullWidth type="submit">
            login
          </ButtonWithMarginTop>
        </form>
        <Footer>
          <Link href="/register">회원가입</Link>
        </Footer>
      </LoginFormWrapper>
    </LoginWrapper>
  );
};

export default Login;
