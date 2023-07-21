// import styled from "@emotion/styled";
// import { useRouter } from "next/router";
// import { UserOutlined } from "@ant-design/icons";

// const NavBarWrapper = styled.nav`
//   /* background-color: lightgreen; */
//   /* color: #fff; */

//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 20px;
//   display: flex;
//   list-style: none;
//   padding: 0;
//   margin: 0;
//   background-color: #ffffff;
//   border-top: 4px solid #5eb6f6;
//   border-bottom: 1px solid #d8d8d8;
//   overflow: hidden;
// `;

// const Logo = styled.div`
//   width: 100px;
//   height: 70px;
//   /* font-size: 24px;
//   font-weight: bold; */
//   cursor: pointer;
// `;

// const NavLinks = styled.ul`
//   display: flex;
//   list-style: none;
// `;

// const NavLink = styled.li`
//   margin-right: 20px;
//   cursor: pointer;
//   transition: opacity 0.2s ease-in-out;
//   /*
//   &:hover {
//     opacity: 0.8;
//   } */
//   cursor: pointer;
//   padding: 15px 60px;
//   font-size: 16px;
//   font-weight: bold;
//   text-transform: uppercase;
//   color: #000;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #f2f2f2;
//   }

//   &.selected {
//     background-color: #000;
//     color: #fff;
//   }

//   &:last-child {
//     margin-right: 20px;
//   }
// `;

// const LayoutNavigation = (): JSX.Element => {
//   const router = useRouter();

//   const onClickNavigation = (path: string): void => {
//     void router.push(path);
//   };

//   return (
//     <NavBarWrapper>
//       <Logo onClick={() => onClickNavigation("/")}>
//         <img
//           src="/logo.png"
//           alt="Logo"
//           style={{ width: "130px", height: "70px" }}
//         />
//       </Logo>
//       <NavLinks>
//         <NavLink onClick={() => onClickNavigation("/queryroom")}>
//           질문방
//         </NavLink>
//         <NavLink onClick={() => onClickNavigation("/blog")}>지식 공유</NavLink>
//         <NavLink>
//           <UserOutlined onClick={() => onClickNavigation("/login")}>
//             login
//           </UserOutlined>
//         </NavLink>
//       </NavLinks>
//     </NavBarWrapper>
//   );
// };

// export default LayoutNavigation;

import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { UserOutlined } from "@ant-design/icons";

const NavBarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #ffffff;
  border-top: 4px solid #5eb6f6;
  border-bottom: 1px solid #d8d8d8;
  overflow: hidden;
`;

const Logo = styled.div`
  width: 100px;
  height: 70px;
  cursor: pointer;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
`;

const NavLink = styled.li`
  margin-right: 20px;
  cursor: pointer;
  padding: 15px 60px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: #000;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f2f2f2;
  }

  &.selected {
    background-color: #5eb6f6;
    color: #fff;
  }

  &:last-child {
    margin-right: 20px;
  }
`;

const LayoutNavigation = (): JSX.Element => {
  const router = useRouter();

  const onClickNavigation = (path: string): void => {
    void router.push(path);
  };

  return (
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
          className={router.pathname === "/login" ? "selected" : ""}
          onClick={() => onClickNavigation("/login")}
        >
          <UserOutlined />
          login
        </NavLink>
      </NavLinks>
    </NavBarWrapper>
  );
};

export default LayoutNavigation;
