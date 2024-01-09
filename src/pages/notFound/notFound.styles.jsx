import { styled } from "styled-components";

export const CenterBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 10vh;
  color: var(--monochrome-white-20);
`;
export const Title = styled.div`
  font-size: 160px;
`;
export const TitleText = styled.div`
  font-size: 40px;
  margin: 40px 0;
`;
export const ParagraphText = styled.p`
  font-size: 18px;
  line-height: 133%;
  color: #4e4e4e;
  margin-bottom: 40px;
`;
export const ParagraphImg = styled.img`
  width: auto;
  height: 350px;
`;
export const Wrapper = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  min-height: 100vh;
  //   background-color: #b7e6e8;
  overflow: hidden;
`;
export const Button = styled.button`
  width: 241px;
  height: 50px;
  background-color: #009ee4;
  border: 1px solid #009ee4;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;
