import React from "react";
import styled from "styled-components";
import MainText from "../atoms/text/mainText";
import { useNavigate } from "react-router-dom";

function DetailGoBack(props) {
  const navigate = useNavigate();

  return (
    <DetailGoBackWrapper style={props.style}>
      <img
        src="/assets/imgs/pageTop/goBack-black.svg"
        style={{ position: "absolute", top: "21px", left: "16px" }}
        alt=""
        onClick={() => navigate(-1)}
      />
      <GoBackTitle>{props.title}</GoBackTitle>
    </DetailGoBackWrapper>
  );
}

export default DetailGoBack;

const DetailGoBackWrapper = styled.div.attrs((props) => {})`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: center;
  background-color: #fff;
  padding: 15px 64px;
  position: relative;
`;

const GoBackTitle = styled(MainText).attrs((props) => {})`
  color: #191919;
  font-size: 16px;
  font-weight: 600;
  line-height: 25.2px; /* 142.857% */
`;
