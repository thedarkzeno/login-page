import styled, { createGlobalStyle, keyframes } from "styled-components";
import wallpaper from "../Assets/wallpaper.jpg";

const rotate = keyframes`
  from {
    display: none;
    opacity: 0;
    }

  to {
    display: block;
    opacity: 1;
  }
`;

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #8690da;
  width: 30%;
  padding: 50px;
  min-width: 300px;
  margin: auto;
  margin-top: 200px;
  border-radius: 20px;
  /* box-shadow: 0 0 1px 0px white inset, 0 0 1px 0px white; */
  animation: ${rotate} 1.5s ease-out;
`;

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *, input, button {
    font-family: sans-serif;
  }
  html {
    background-color: #6874d0;
    background: url(${wallpaper}) no-repeat center center fixed;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
