import React, { useState, useEffect } from "react";
import styled from "styled-components";

function TextArea({ type, placeholder, value, onChange, disabled, style }) {
  return (
    <>
      <TextAreaWrapper
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          ...style,
        }}
      />
    </>
  );
}

export default TextArea;

const TextAreaWrapper = styled.textarea.attrs((props) => {})`
  width: 100%;
  height: 200px;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #adb4ba;
  background: #fff;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  color: #555555;
  letter-spacing: -0.048px;
  resize: none;

  &::placeholder {
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    color: #999;
    letter-spacing: -0.048px;
  }

  &:focus {
    outline: none;
    border: 1px solid var(--sub-color-3, #0077e5);
  }
`;
