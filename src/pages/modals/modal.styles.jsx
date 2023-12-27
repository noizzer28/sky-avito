import { styled } from "styled-components";

export const ModalWrapper = styled.div`
  min-width: 100%;
  height: 100vh;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  padding-top: 20px;
  @media screen and (max-width: 768px) {
    padding-top: 0px;
  }
`;

export const ModalBlock = styled.div`
  margin: 0 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    margin: 0;
  }
`;
export const ModalNew = styled.div`
  max-width: 768px;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    margin-top: 0;
  }
`;
export const ModalReview = styled.div`
  min-width: 900px;
  @media screen and (max-width: 900px) {
    min-width: 700px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100vh;
    overflow-y: hidden;
    margin-top: 0;
  }
`;
export const Modal = styled.div`
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

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100vh;
    border-radius: 0px;
    padding: 10px 20px;
  }
`;

export const Title = styled.h3`
  font-size: 32px;
  line-height: 46px;
  font-weight: 500;
  color: #000000;
  &:hover::before {
    border-top: 2px solid #0080c1;
    border-left: 2px solid #0080c1;
  }

  @media screen and (max-width: 768px) {
    font-size: 24px;
    line-height: 29px;
    padding: 0 0 0 26px;
    position: relative;

    }
  }
`;

export const ModalClose = styled.div`
  width: 23px;
  height: 23px;
  position: absolute;
  top: 47px;
  right: 50px;
  z-index: 3;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const ModalCloseMob = styled.div`
  @media screen and (max-width: 768px) {
    display: block;
    width: 12px;
    height: 12px;
    background-color: transparent;
    border-top: 2px solid #000000;
    border-left: 2px solid #000000;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    position: absolute;
    top: 9px;
    left: 0;
    cursor: pointer;
  }
  display: none;
`;
export const ModalCloseLine = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 47%;
    right: -4px;
  }
  &:hover::before,
  &:hover::after {
    background-color: #0080c1;
  }

  &::before {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  &::after {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const ModalContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  width: 100%;
  height: auto;
  padding: 32px 50px 42px;
  background-color: #ffffff;
  border-radius: 12px;
  position: relative;
  max-height: 1100px;

  @media screen and (max-width: 768px) {
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    width: 100%;
    min-width: 320px;
    height: auto;
    padding: 30px 20px 30px;
  }
`;
export const ModalForm = styled.form`
  width: 100%;
  margin-top: 22px;
  @media screen and (max-width: 768px) {
    margin-top: 22px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
  }
`;
export const ModalInput = styled.div`
width: 100%;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
    -ms-flex-direction: column;
        flex-direction: column;
margin-bottom: 20px;
@media screen and (max-width: 768px) {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  margin-bottom: 18px;
  
  `;
export const Label = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
  line-height: 21px;
  color: #000000;
`;
export const Input = styled.input`
  margin-top: 5px;
  padding: 13px 19px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  &::-webkit-input-placeholder,
  &::-ms-input-placeholder,
  &::placeholder,
  &::-ms-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const InputDescription = styled.textarea`
  margin-top: 5px;
  padding: 13px 19px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  width: 100%;
  font-size: 16px;
  resize: none;
  line-height: 24px;
  &::-webkit-input-placeholder,
  &::-ms-input-placeholder,
  &::placeholder,
  &::-ms-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const InputText = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 10px;
  span {
    margin-left: 10px;
    color: rgba(0, 0, 0, 0.3);
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 10px;
    span {
      display: block;
      margin-left: 0px;
      color: rgba(0, 0, 0, 0.3);
    }
  }
`;

export const ModalImageFlex = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 10px;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: start;
    margin: 0px -5px 10px;
    overflow-x: scroll;
  }
`;
export const ModalImage = styled.div`
  width: 90px;
  height: 90px;
  margin-right: 10px;
  position: relative;
  z-index: 0;

  img {
    display: block;
    width: 100%;
    height: auto;
    -o-object-fit: cover;
    object-fit: cover;
    z-index: 2;
  }

  @media screen and (max-width: 768px) {
    display: block;
    width: 90px;
    min-width: 90px;
    height: 90px;
    background-color: #f0f0f0;
    margin: 0 5px;
    img {
      display: block;
      width: 100%;
      height: auto;
      -o-object-fit: cover;
      object-fit: cover;
    }
  }
`;
export const ModalImageCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #f0f0f0;
  z-index: -1;

  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 50%;
    right: calc(50% - (30px / 2));
  }
  &::before {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
`;
export const ModalPriceInput = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-bottom: 18px;
  }
`;
export const InputPrice = styled(Input)`
  padding: 9px 17px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 16px;
  line-height: 1;
  width: 200px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  &::-webkit-input-placeholder,
  &:-ms-input-placeholder,
  &::-ms-input-placeholder,
  &::placeholder {
    text-align: end;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }
  // &::after {
  //   content: "₽";
  //   width: 24px;
  //   height: 24px;
  //   position: absolute;
  //   font-size: 16px;
  //   line-height: 24px;
  //   color: #000000;
  //   z-index: 2;
  // }
  @media screen and (max-width: 768px) {
    width: 100%;
    &::-webkit-input-placeholder,
    &:-ms-input-placeholder,
    &::-ms-input-placeholder,
    &::placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #000000;
    }
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  max-width: 200px;
`;

export const Price = styled.div`

  width: 24px;
  height: 24px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;

  @media screen and (max-width: 768px) {
    width: 21px;
    height: 21px;
    font-size: 14px;
    line-height: 21px;
    bottom: 9px;
    left: auto;
    right: 18px;
    &::after {
      font-size: 14px;
      line-height: 21px;
    }
  }
}`;

export const ModalButton = styled.button`
  margin-top: 10px;
  width: 181px;
  height: 50px;
  background: #d9d9d9;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;

  @media screen and (max-width: 768px) {
    margin-top: 10px;
    width: 100%;
    height: 46px;
  }
`;

export const HeaderWrapper = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
export const ModalReviews = styled.div`
  width: 100%;
  margin-top: 20px;
  overflow-y: scroll;
  scrollbar-color: #ffffff #2e2e2e;
  scrollbar-width: thin;
  scrollbar-width: 0px;
  height: 100%;
  padding-bottom: 50px;

  &::-webkit-scrollbar {
    width: 0px;
    background-color: #009ee4;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #0080c1;
    border-radius: 3px;
  }
`;
export const Reviews = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: flex-start;
  margin: 15px 0;
`;
export const ReviewItem = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`;
export const ReviewLeft = styled.div`
  margin-right: 12px;
`;
export const ReviewRight = styled.div`
  display: block;
`;
export const ReviewImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f0f0;
  img {
    display: block;
    width: 100%;
    height: auto;
    -o-object-fit: cover;
    object-fit: cover;
  }
`;
export const ReviewText = styled.p`
  margin-bottom: 12px;
  font-weight: 600;
  span {
    margin-left: 10px;
    color: #5f5f5f;
  }
`;
export const ReviewComm = styled.p`
  margin-bottom: 12px;
  font-weight: 400;
`;
export const AuthModalWarning = styled.p`
  margin-top: 20px;
  font-size: 18px;
  span {
    cursor: pointer;
    color: #009ee4;
  }
`;
