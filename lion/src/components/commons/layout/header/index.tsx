// import React, { useEffect } from "react";
// import { useRouter } from "next/router";
// import { UserOutlined } from "@ant-design/icons";
// import { useRecoilState } from "recoil";
// import { isLoginVisibleState } from "./recoilState";
// import LoginButton from "../../../units/login";
// import { NavBarWrapper, Logo, NavLink, NavLinks } from "./headercss";

// const LayoutHeader = (): JSX.Element => {
//   const router = useRouter();
//   const [isLoginVisible, setIsLoginVisible] =
//     useRecoilState(isLoginVisibleState);

//   const onClickNavigation = (path: string): void => {
//     setIsLoginVisible(false); // Hide the login floating window before navigating
//     void router.push(path);
//   };

//   const onClickLogin = (): void => {
//     setIsLoginVisible(!isLoginVisible);
//   };

//   // Hide the login floating window when navigating to a different page
//   useEffect(() => {
//     const handleRouteChange = (): void => {
//       setIsLoginVisible(false);
//     };
//     router.events.on("routeChangeStart", handleRouteChange);
//     return () => {
//       router.events.off("routeChangeStart", handleRouteChange);
//     };
//   }, [router, setIsLoginVisible]);

//   return (
//     <>
//       <NavBarWrapper>
//         <Logo
//           onClick={() => {
//             onClickNavigation("/");
//           }}
//         >
//           <img
//             src="/logo.png"
//             alt="Logo"
//             style={{ width: "130px", height: "70px" }}
//           />
//         </Logo>
//         <NavLinks>
//           <NavLink
//             onClick={() => {
//               onClickNavigation("/queryroom");
//             }}
//             className={router.pathname === "/queryroom" ? "selected" : ""}
//           >
//             질문방
//           </NavLink>
//           <NavLink
//             onClick={() => {
//               onClickNavigation("/blog");
//             }}
//             className={router.pathname === "/blog" ? "selected" : ""}
//           >
//             지식 공유
//           </NavLink>
//           <NavLink
//             className={isLoginVisible ? "selected" : ""}
//             onClick={onClickLogin}
//           >
//             <UserOutlined />
//             login
//           </NavLink>
//         </NavLinks>
//       </NavBarWrapper>
//       {isLoginVisible && <LoginButton />}
//     </>
//   );
// };

// export default LayoutHeader;

import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { UserOutlined } from "@ant-design/icons";
import { useRecoilState } from "recoil";
import { isLoginVisibleState, userNameState } from "./recoilState";
import LoginButton from "../../../units/login";
import { NavBarWrapper, Logo, NavLink, NavLinks } from "./headercss";

const LayoutHeader = (): JSX.Element => {
  const router = useRouter();
  const [isLoginVisible, setIsLoginVisible] =
    useRecoilState(isLoginVisibleState);
  const [userName, setUserName] = useRecoilState(userNameState); // Use the Recoil state for userName

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
          <NavLink
            className={isLoginVisible ? "selected" : ""}
            onClick={onClickLogin}
          >
            {userName ? (
              <>
                <UserOutlined />
                로그인됨
              </>
            ) : (
              <UserOutlined /> && "login"
            )}
          </NavLink>
        </NavLinks>
      </NavBarWrapper>
      {isLoginVisible && <LoginButton />}
    </>
  );
};

export default LayoutHeader;
