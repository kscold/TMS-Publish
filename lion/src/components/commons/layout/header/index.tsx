// header/index.tsx(LayoutHeader)
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { UserOutlined } from "@ant-design/icons";
import { useRecoilState } from "recoil";
import { isLoginVisibleState, userNameState } from "./recoilState";
import LoginButton from "../../../units/login";
import {
  NavBarWrapper,
  Logo,
  NavLink,
  NavLinks,
  UserNameButton,
  UserNameSection,
} from "./headercss";

const LayoutHeader = (): JSX.Element => {
  const router = useRouter();
  const [isLoginVisible, setIsLoginVisible] =
    useRecoilState(isLoginVisibleState);
  const [userName, setUserName] = useRecoilState(userNameState); // Use the Recoil state for userName

  console.log("userName in LayoutHeader:", userName);

  const onClickNavigation = (path: string): void => {
    setIsLoginVisible(false); // Hide the login floating window before navigating
    void router.push(path);
  };

  const onClickLogin = (): void => {
    setIsLoginVisible(!isLoginVisible);
  };

  // Hide the login floating window when navigating to a different page
  useEffect(() => {
    const handleRouteChange = (): void => {
      setIsLoginVisible(false);
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router, setIsLoginVisible]);

  const onClickLogout = (): void => {
    localStorage.removeItem("isLoggedIn");
    setUserName(null); // Set the userName in Recoil state to null upon logout
  };

  // Check if the user is already logged in and hide the login window
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <NavBarWrapper>
        <Logo
          onClick={() => {
            onClickNavigation("/");
          }}
        >
          <img
            src="/logo.png"
            alt="Logo"
            style={{ width: "130px", height: "70px" }}
          />
        </Logo>
        <NavLinks>
          <NavLink
            onClick={() => {
              onClickNavigation("/queryroom");
            }}
            className={router.pathname === "/queryroom" ? "selected" : ""}
          >
            질문방
          </NavLink>
          <NavLink
            onClick={() => {
              onClickNavigation("/blog");
            }}
            className={router.pathname === "/blog" ? "selected" : ""}
          >
            지식 공유
          </NavLink>
          <UserNameButton
            isLoginVisible={isLoginVisible}
            onClick={onClickLogin}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {userName ? (
              <>
                <UserOutlined />
                {`Welcome ${userName}!`}
                <UserNameSection isHovered={isHovered} isLoggedIn={!userName}>
                  <NavLink>My Page</NavLink>
                  {userName && (
                    <NavLink onClick={onClickLogout}>Logout</NavLink>
                  )}
                </UserNameSection>
              </>
            ) : (
              <>
                <UserOutlined />
                login
              </>
            )}
          </UserNameButton>
        </NavLinks>
      </NavBarWrapper>
      {isLoginVisible && !userName && <LoginButton />}
    </>
  );
};

export default LayoutHeader;
