import styled from "styled-components";
import MainLayout from "../../component/atoms/layout/mainLayout";
import MainText from "../../component/atoms/text/mainText";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { route } from "../../routes/route";

function FootBtn(props) {
  const navigate = useNavigate();

  return (
    <FootBtnWrapper>
      <FootBtnBtn>{props.title}</FootBtnBtn>
    </FootBtnWrapper>
  );
}

export default FootBtn;

const FootBtnWrapper = styled.div.attrs((props) => {})`
  width: 100%;
  height: 91px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  padding: 10px 16px;
  background-color: #fff;
`;

const FootBtnBtn = styled.button.attrs((props) => {})`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0a94d1;
  border-radius: 4px;
  color: var(--white, #fff);
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 22.25px; /* 139.063% */
`;
