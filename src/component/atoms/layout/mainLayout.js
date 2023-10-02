import React from "react";
import styled from "styled-components";

function MainLayout(props) {
  return (
    <>
      <MainLayoutWrapper
        style={{
          ...props.style,
        }}
      >
        {props.children}
      </MainLayoutWrapper>
    </>
  );
}

export default MainLayout;

const MainLayoutWrapper = styled.div.attrs((props) => {})`
  width: 100%;
  min-height: 812px;
  height: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #fff;
`;
