import React from "react";
import styled from "styled-components";
import MainText from "../atoms/text/mainText";

function ContactModal(props) {
  return (
    <ModalWrapper>
      <ModalBox>
        <ModalTitle>{props.title || "상담이 접수 되었습니다"}</ModalTitle>
        <ModalCaption>{props.text || "내용 확인 후 신속하게 답변드리겠습니다"}</ModalCaption>
        <ModalBtn onClick={props.onClick}>확인</ModalBtn>
      </ModalBox>
    </ModalWrapper>
  );
}

export default ContactModal;

const ModalWrapper = styled.div.attrs((props) => {})`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000050;
  padding: 0 20px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 30;
`;

const ModalBox = styled.div.attrs((props) => {})`
  width: 100%;
  min-height: 170px;
  height: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.15);
  position: relative;
`;

const ModalTitle = styled(MainText).attrs((props) => {})`
  color: #191919;
  font-size: 22px;
  font-weight: 600;
  line-height: 24px; /* 150% */
  margin-bottom: 20px;
`;

const ModalCaption = styled(MainText).attrs((props) => {})`
  color: #333333;
  font-size: 18px;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  margin-bottom: 40px;
`;

const ModalBtn = styled.button.attrs((props) => {})`
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
