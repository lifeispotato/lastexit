import React, { useState } from "react";
import styled from "styled-components";
import MainText from "../atoms/text/mainText";
import MainInput from "../atoms/input/mainInput";

function CofferModal({ setIsOpen }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);

  const savePrice = () => {
    if (title.length <= 0 || price.length <= 0) return;

    const list = JSON.parse(localStorage.getItem("propertyList"));

    const obj = {
      title,
      price,
    };

    if (list) {
      list.push(obj);
      localStorage.setItem("propertyList", JSON.stringify(list));
      setIsOpen(false);
    } else {
      localStorage.setItem("propertyList", JSON.stringify([obj]));
      setIsOpen(false);
    }
  };

  return (
    <ModalWrapper>
      <ModalBox>
        <MainText
          style={{
            minWidth: "50px",
            color: "#000",
            fontSize: "20px",
            fontWeight: "600",
            lineHeight: "23px",
            marginBottom: "20px",
          }}
        >
          재산입력
        </MainText>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "5px", marginBottom: "20px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <MainText
              style={{
                minWidth: "50px",
                color: "#999",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "23px",
              }}
            >
              재산명
            </MainText>
            <MainInput
              type={"text"}
              placeholder={"재산명을 입력해주세요"}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <MainText
              style={{
                minWidth: "50px",
                color: "#999",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "23px",
              }}
            >
              금액
            </MainText>
            <MainInput
              type={"text"}
              placeholder={"재산명을 입력해주세요"}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>
        </div>
        <div style={{ width: "100%", display: "flex", gap: "10px" }}>
          <div
            style={{
              width: "100%",
              height: "40px",
              background: "#dddddd",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "5px",
            }}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <MainText
              style={{
                color: "#555555",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "23px",
              }}
            >
              취소
            </MainText>
          </div>
          <div
            style={{
              width: "100%",
              height: "40px",
              background: "#0694d1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "5px",
            }}
            onClick={savePrice}
          >
            <MainText
              style={{
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "23px",
              }}
            >
              확인
            </MainText>
          </div>
        </div>
      </ModalBox>
    </ModalWrapper>
  );
}

export default CofferModal;

const ModalWrapper = styled.div.attrs((props) => {})`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
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
