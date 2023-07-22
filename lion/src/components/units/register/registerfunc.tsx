import React from "react";
import styled from "@emotion/styled";
import palette from "../../../../styles/palette";

// 회원가입 / 로그인 페이지의 레이아웃 담당
const AuthTemplateBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Change 'flex-end' to 'flex-start' to move it to the upper left corner */
  align-items: flex-end; /* Change 'center' to 'flex-start' to move it to the upper left corner */
  margin-top: 30px; /* Add some margin at the top for better positioning */
  margin-left: 30px;
`;

// white box

const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    /* 글자 간격 */
    letter-spacing: 2px;
  }
`;

const AuthTemplate = ({ children }): JSX.Element => {
  // 부모 컴포넌트 안에 있는 자식 컴포넌트 요소 띄우기
  return (
    <AuthTemplateBlock>
      <WhiteBox className="틀">{children}</WhiteBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
