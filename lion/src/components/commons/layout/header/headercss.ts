// import styled from "@emotion/styled";

// export const NavBarWrapper = styled.nav`
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

// export const Logo = styled.div`
//   width: 100px;
//   height: 70px;
//   cursor: pointer;
// `;

// export const NavLinks = styled.ul`
//   display: flex;
//   list-style: none;
// `;

// export const NavLink = styled.li`
//   margin-right: 20px;
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
//     background-color: #5eb6f6;
//     color: #fff;
//   }

//   &:last-child {
//     margin-right: 20px;
//   }
// `;

import styled from "@emotion/styled";

export const NavBarWrapper = styled.nav`
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

export const Logo = styled.div`
  width: 100px;
  height: 70px;
  cursor: pointer;
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
`;

export const NavLink = styled.li`
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

export const UserNameSection = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #f2f2f2;
  padding: 10px;
  z-index: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const UserNameButton = styled(NavLink)`
  &:hover ${UserNameSection} {
    display: block;
  }
`;
