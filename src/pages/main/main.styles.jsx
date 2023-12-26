import styled from "styled-components";

export const Main = styled.main`
  height: calc(100vh - 90px);
  overflow: hidden;
`;

export const MainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 52px 10px 37px;
  overflow: hidden;
  height: calc(100vh - 200px);
  @media screen and (max-width: 590px) {
    padding: 15px 10px 84px;
    height: 100vh;
  }
`;

export const MainH2 = styled.h2`
  font-style: normal;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 30px;

  &:hover::before {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    background-color: transparent;
    border-top: 2px solid #0080c1;
    border-left: 2px solid #0080c1;
    transform: rotate(-45deg);
    position: absolute;
    top: 9px;
    left: 13px;
    cursor: pointer;
  }

  @media screen and (max-width: 590px) {
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    margin-bottom: 20px;
    position: relative;

    &::before {
      content: "";
      display: block;
      width: 12px;
      height: 12px;
      background-color: transparent;
      border-top: 2px solid #000000;
      border-left: 2px solid #000000;
      transform: rotate(-45deg);
      position: absolute;
      top: 9px;
      left: 13px;
      cursor: pointer;
    }
  }
`;

export const Error = styled.div`
  color: #8c0303;
  font-size: 20px;
`;
