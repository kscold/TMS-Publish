import styled from "@emotion/styled";
import palette from "../../../../styles/palette";
import Button from "../../../components/commons/button/loginbutton";

// export const AuthFormBlock = styled.div`
//   position: fixed;
//   left: 92%;
//   top: 34%;
//   transform: translate(-50%, -50%);
//   z-index: 10;
//   background-color: #ffffff;
//   padding: 2rem;
//   border-radius: 8px;
//   box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);

//   &::before {
//     content: "";
//     position: absolute;
//     bottom: 100%;
//     left: 50%;
//     margin-left: -10px; /* Adjust the value to position the tail */
//     border-width: 10px;
//     border-style: solid;
//     border-color: transparent transparent #ffffff transparent;
//   }
//   @media (max-width: 768px) {
//     left: 10px; /* Change the left position for small screens */
//     top: calc(100% + 1rem);
//     transform: none;
//     width: calc(100% - 20px); /* Make it full width */
//   }
// `;

export const AuthFormBlock = styled.div`
  width: 300px;
  height: 350px;
  position: absolute;
  left: 1150px;
  top: 100px;
  z-index: 10;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);

  &::before {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent #ffffff transparent;
  }
`;

export const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

export const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: ${palette.gray[7]};
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

export const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;
