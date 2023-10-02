import React from "react";
import styled from "styled-components";

function MainInput({ type, placeholder, value, onChange, onClick, disabled, style, dataPlaceholder, onKeyDown, step }) {
  return (
    <>
      <MainInputWrapper
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        data-placeholder={dataPlaceholder}
        value={value}
        onChange={onChange}
        onClick={onClick}
        onKeyDown={onKeyDown}
        step={step}
        style={{
          ...style,
        }}
      />
    </>
  );
}

export default MainInput;

const MainInputWrapper = styled.input.attrs((props) => {})`
  width: 100%;
  height: 48px;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #adb4ba;
  background: #fff;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  color: #555;

  &::placeholder {
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    color: #999;
  }

  &:focus {
    outline: none;
    border: 1px solid #999;
  }

  &:disabled {
    outline: none;
    border: 1px solid #d7dbe0;
    background: #eef2f3;
    color: #b8bfc4;
  }
`;
