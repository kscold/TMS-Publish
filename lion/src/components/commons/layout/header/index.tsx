import { useRouter } from "next/router";
import { UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import LoginPage from "../../../../../pages/login";
import { NavBarWrapper, Logo, NavLink, NavLinks } from "./headercss";

const LayoutNavigation = (): JSX.Element => {
  const router = useRouter();
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const onClickNavigation = (path: string): void => {
    if (isLoginVisible) {
      setIsLoginVisible(false);
    }
    void router.push(path);
  };

  const onClickLogin = (): void => {
    setIsLoginVisible(!isLoginVisible);
  };

  return (
    <>
      <NavBarWrapper>
        <Logo onClick={() => onClickNavigation("/")}>
          <img
            src="/logo.png"
            alt="Logo"
            style={{ width: "130px", height: "70px" }}
          />
        </Logo>
        <NavLinks>
          <NavLink
            onClick={() => onClickNavigation("/queryroom")}
            className={router.pathname === "/queryroom" ? "selected" : ""}
          >
            질문방
          </NavLink>
          <NavLink
            onClick={() => onClickNavigation("/blog")}
            className={router.pathname === "/blog" ? "selected" : ""}
          >
            지식 공유
          </NavLink>
          <NavLink
            className={isLoginVisible ? "selected" : ""}
            onClick={onClickLogin}
          >
            <UserOutlined />
            login
          </NavLink>
        </NavLinks>
      </NavBarWrapper>
      {isLoginVisible && <LoginPage onClose={() => setIsLoginVisible(false)} />}
    </>
  );
};

export default LayoutNavigation;
