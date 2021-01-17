import React from "react";
import styled from "styled-components";

export const FormElement = styled.div`
  padding-bottom: 5px;
  padding-top: 5px;
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
`;
export const Input = styled.input`
  width: 200px;
  height: 30px;
  text-align: center;
  border: 0;
  border-radius: 5px;
  background-color: #fff;
  color: #6874d0;
  font-weight: bold;
  box-shadow: 0 0 1px 0px white inset, 0 0 1px 0px white;
`;

export const Button = styled.button`
  width: 200px;
  height: 30px;
  border-radius: 5px;
  background-color: #3ae8e1;
  color: #fff;
  font-weight: bold;
  border: 0;
`;

export const Text = styled.div`
  color: #4954ad;
  font-weight: bold;
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-right: 15px;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${(props) => (props.checked ? "#3ae8e1" : "papayawhip")};
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

export const Checkbox = ({ checked, ...props }) => (
  <CheckboxContainer>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked} {...props}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);
