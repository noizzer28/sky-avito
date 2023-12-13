import { Link } from "react-router-dom";
import * as S from "./modal.styles";

export function EditModal({ page }) {
  return (
    <S.ModalWrapper data-id="modal-wrapper">
      <S.ModalBlock data-id="modal__block">
        <S.Modal data-id="modal">
          <S.ModalContent>
            <S.Title data-id="title">Новое объявление</S.Title>
            <S.ModalClose data-id="modalclose">
              <S.ModalCloseLine data-id="modalline"></S.ModalCloseLine>
            </S.ModalClose>
            <S.ModalForm data-id="ModalForms" id="formNewArt" action="#">
              <S.ModalInput data-id="ModalInput">
                <S.Label htmlFor="name">Название</S.Label>
                <S.Input
                  type="text"
                  name="name"
                  id="formName"
                  placeholder="Введите название"
                />
              </S.ModalInput>
              <S.ModalInput data-id="ModalInput">
                <S.Label htmlFor="name">Описание</S.Label>
                <S.Input
                  name="text"
                  id="formArea"
                  cols="auto"
                  rows="10"
                  placeholder="Введите описание"
                />
              </S.ModalInput>

              <S.ModalInput>
                <S.InputText data-id="InputText">
                  Фотографии товара<span>не более 5 фотографий</span>
                </S.InputText>
                <S.ModalImageFlex data-id="form-newArt__bar-img">
                  <S.ModalImage data-id="form-newArt__img">
                    <img src="" alt="" />
                    <S.ModalImageCover data-id="form-newArt__img-cover"></S.ModalImageCover>
                  </S.ModalImage>
                  <S.ModalImage data-id="form-newArt__img">
                    <img src="" alt="" />
                    <S.ModalImageCover data-id="form-newArt__img-cover"></S.ModalImageCover>
                  </S.ModalImage>
                  <S.ModalImage data-id="form-newArt__img">
                    <img src="" alt="" />
                    <S.ModalImageCover data-id="form-newArt__img-cover"></S.ModalImageCover>
                  </S.ModalImage>
                  <S.ModalImage data-id="form-newArt__img">
                    <img src="" alt="" />
                    <S.ModalImageCover data-id="form-newArt__img-cover"></S.ModalImageCover>
                  </S.ModalImage>
                  <S.ModalImage data-id="form-newArt__img">
                    <img src="" alt="" />
                    <S.ModalImageCover data-id="form-newArt__img-cover"></S.ModalImageCover>
                  </S.ModalImage>
                </S.ModalImageFlex>
              </S.ModalInput>
              <S.ModalPriceInput data-id="form-newArt__block PriceInput">
                <S.Label htmlFor="price">Цена</S.Label>
                <S.InputWrapper>
                  <S.InputPrice
                    data-id="form-newArt__input-price"
                    type="number"
                    name="price"
                    id="formName"
                  />
                  <S.Price data-id="form-newArt__input-price-cover">₽</S.Price>
                </S.InputWrapper>
              </S.ModalPriceInput>

              <S.ModalButton
                data-id="form-newArt__btn-pub btn-hov02"
                className="btn-hov02"
                id="btnPublish"
              >
                Опубликовать
              </S.ModalButton>
            </S.ModalForm>
          </S.ModalContent>
        </S.Modal>
      </S.ModalBlock>
    </S.ModalWrapper>
  );
}
