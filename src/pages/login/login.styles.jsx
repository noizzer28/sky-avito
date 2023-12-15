import { styled } from "styled-components";

export const ModalWrapper = styled.div`
  min-width: 100%;
  height: 100vh;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: #2492ca;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBlock = styled.div`
  position: absolute;
  z-index: 2;
  left: calc(50% - (366px / 2));
  top: calc(50% - (647px / 2));
  opacity: 1;
  @media screen and (max-width: 768px) {
    left: calc(50% - (320px / 2));
    top: 55px;
  }
`;
export const Modal = styled.div`
  width: 400px;
  background-color: #ffffff;
  border-radius: 12px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 43px 42px 47px;

  @media screen and (max-width: 768px) {
    width: 320px;
    height: auto;
    border-radius: 0px;
    padding: 40px 20px;
  }
`;

export const ModalLogo = styled.div`
width: 140px;
height: 21px;
margin-bottom: 42px;
background-color: transparent;
img {
  width: 140px;
  height: auto;
}
@media screen and (max-width: 768px) {

    width: 120px;
    height: 18px;
    margin-bottom: 30px;
    background-color: transparent;
  
  img {
    width: 120px;
    height: auto;
  }
`;

export const ModalInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #d0cece;
  padding: 8px 1px;
  outline: none;

  &::placeholder,
  &::-webkit-input-placeholder,
  &::-ms-input-placeholder,
  &::-ms-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #d0cece;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    border: 1px solid #d9d9d9;
    border-radius: 30px;
    padding: 9px 19px;
    margin-bottom: 14px;
    &::placeholder,
    &::-webkit-input-placeholder,
    &::-ms-input-placeholder,
    &::-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #b3b3b3;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  width: 278px;
  height: 52px;
  border-radius: 6px;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;

  &:disabled {
    background-color: #303030;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const PrimaryButton = styled(Button)`
  color: #ffffff;
  background-color: #009ee4;
  &:hover {
    background-color: #0080c1;
  }

  &:active {
    background-color: #015681;
  }

  &:disabled {
    background-color: #5e5e5e;
    cursor: not-allowed;
  }
`;
export const SecondaryButton = styled(Button)`
  color: #000000;
  background-color: transparent;
  border: 1px solid #d0cece;

  &:hover {
    background-color: #f4f5f6;
  }

  &:active {
    background-color: #d9d9d9;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 60px;
  width: 100%;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin-top: 15px;
    gap: 10px;
  }
`;

export const Inputs = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  @media screen and (max-width: 768px) {
    gap: 0;
  }
`;

export const Error = styled.div`
  color: coral;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin-top: 20px;
  text-align: left;
`;
