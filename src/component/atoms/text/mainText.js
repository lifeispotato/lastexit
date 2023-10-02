import React from "react";
import styled from "styled-components";

const MainText = (props) => {
  return <MainTextWrapper {...props} />;
};

export default MainText;

const MainTextWrapper = styled.div.attrs((props) => {})`
  font-family: "Pretendard";
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  display: block;
`;
