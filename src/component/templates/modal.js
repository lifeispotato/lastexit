import React from "react";
import styled from "styled-components";
import MainText from "../atoms/text/mainText";

function Modal(props) {
  return (
    <ModalWrapper>
      <ModalBox>
        <ModalTitle>{props.title}</ModalTitle>
        <ModalCaption>{props.content}</ModalCaption>
        <img
          src="/assets/imgs/modal/x.svg"
          style={{ position: "absolute", top: "12px", right: "12px" }}
          onClick={props.onClick}
          alt=""
        />
      </ModalBox>
    </ModalWrapper>
  );
}

export default Modal;

const ModalWrapper = styled.div.attrs((props) => {})`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: #00000050;
  padding: 0 16px;
  padding-top: 84px;
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
  align-items: flex-start;
  gap: 6px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.15);
  position: relative;
`;

const ModalTitle = styled(MainText).attrs((props) => {})`
  color: #191919;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px; /* 150% */
`;

const ModalCaption = styled(MainText).attrs((props) => {})`
  color: #191919;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
`;
