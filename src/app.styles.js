import { styled, createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  @font-face {
    font-family: "Roboto";
    src:
      local("Roboto"),
      url("/fonts/Roboto-Regular.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
  }
  
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  a,
  a:visited {
    text-decoration: none;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
  }
  
  button,
  ._btn {
    cursor: pointer;
  }
  
  ul li {
    list-style: none;
  }
  .btn-hov01:hover {
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid #FFFFFF;
  }
  
  .btn-hov02:hover {
    background-color: #0080C1;
  }
  
  html,
  body {
    width: 100%;
    height: 100%;
    font-family: "Roboto", sans-serif;
    color: #000000;
    background-color: #f1f1f1;
  }
  
  div,
  button,
  a,
  textarea {
    font-family: "Roboto", sans-serif;
  }
  
  
  button:hover {
      background-color: #0080c1;
    }
  
    button:active {
      background-color: #015681;
    }
  
    button:disabled {
      background-color: #5e5e5e;
      cursor: not-allowed;
    }
  
  .btn-hov01:hover {
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid #ffffff;
  }
  
  .btn-hov02:hover {
    background-color: #0080c1;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;
`;

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: #ffffff;

  @media screen and (max-width: 590px) {
    width: 100%;
    min-width: 320px;
    min-height: 100vh;
    background-color: #ffffff;
  }
`;

export const Title = styled.h3``;
