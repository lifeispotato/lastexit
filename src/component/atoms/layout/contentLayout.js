import React, { useState } from "react";
import styled from "styled-components";

function ContentLayout(props) {
  return (
    <>
      <ContentLayoutWrapper
        style={{
          ...props.style,
        }}
      >
        {props.children}
      </ContentLayoutWrapper>
    </>
  );
}

export default ContentLayout;

const ContentLayoutWrapper = styled.div.attrs((props) => {})`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: #fff;
  padding: 0 16px;
`;
