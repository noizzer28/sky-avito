import * as S from "./modal.styles";
import { Header } from "../../components/header/header";

export const ReviewsModal = ({ reviews, isModal }) => {
  console.log(isModal);
  console.log(reviews);
  const toggleModal = () => {
    isModal((prev) => !prev);
  };
  return (
    <S.ModalWrapper data-id="modal-wrapper" onClick={toggleModal}>
      <S.ModalReview
        data-id="modal__review"
        onClick={(e) => e.stopPropagation()}
      >
        <S.HeaderWrapper data-id="header wrapper">
          <Header></Header>
        </S.HeaderWrapper>
        <S.ModalBlock data-id="modalBlock">
          <S.Modal data-id="modal">
            <S.ModalContent data-id="modal-content">
              <S.Title data-id="title">Отзывы о товаре</S.Title>
              <S.ModalClose data-id="modalclose" onClick={toggleModal}>
                <S.ModalCloseLine data-id="modalline"></S.ModalCloseLine>
              </S.ModalClose>
              <S.ModalForm data-id="ModalForms" id="formNewArt" action="#">
                <S.ModalInput data-id="ModalInput">
                  <S.Label htmlFor="name">Добавить отзыв</S.Label>
                  <S.InputDescription
                    type="text"
                    name="name"
                    id="formName"
                    rows="6"
                    placeholder="Введите отзыв"
                  />
                </S.ModalInput>

                <S.ModalButton
                  data-id="form-newArt__btn-pub btn-hov02"
                  className="btn-hov02"
                  id="btnPublish"
                >
                  Сохранить
                </S.ModalButton>
              </S.ModalForm>

              <S.ModalReviews data-id="modal__reviews reviews">
                <S.Reviews data-id="reviews__review review">
                  <S.ReviewItem data-id="review__item">
                    <S.ReviewLeft data-id="review__left">
                      <S.ReviewImg data-id="review__img">
                        <img src="" alt="" />
                      </S.ReviewImg>
                    </S.ReviewLeft>
                    <S.ReviewRight data-id="review__right">
                      <S.ReviewText data-id="review__name font-t">
                        Олег <span>14 августа</span>
                      </S.ReviewText>
                      <S.ReviewText data-id="review__title font-t">
                        Комментарий
                      </S.ReviewText>
                      <S.ReviewComm data-id="review__text font-t">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </S.ReviewComm>
                    </S.ReviewRight>
                  </S.ReviewItem>
                </S.Reviews>
                <S.Reviews data-id="reviews__review review">
                  <S.ReviewItem data-id="review__item">
                    <S.ReviewLeft data-id="review__left">
                      <S.ReviewImg data-id="review__img">
                        <img src="" alt="" />
                      </S.ReviewImg>
                    </S.ReviewLeft>
                    <S.ReviewRight data-id="review__right">
                      <S.ReviewText data-id="review__name font-t">
                        Олег <span>14 августа</span>
                      </S.ReviewText>
                      <S.ReviewText data-id="review__title font-t">
                        Комментарий
                      </S.ReviewText>
                      <S.ReviewComm data-id="review__text font-t">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </S.ReviewComm>
                    </S.ReviewRight>
                  </S.ReviewItem>
                </S.Reviews>
                <S.Reviews data-id="reviews__review review">
                  <S.ReviewItem data-id="review__item">
                    <S.ReviewLeft data-id="review__left">
                      <S.ReviewImg data-id="review__img">
                        <img src="" alt="" />
                      </S.ReviewImg>
                    </S.ReviewLeft>
                    <S.ReviewRight data-id="review__right">
                      <S.ReviewText data-id="review__name font-t">
                        Олег <span>14 августа</span>
                      </S.ReviewText>
                      <S.ReviewText data-id="review__title font-t">
                        Комментарий
                      </S.ReviewText>
                      <S.ReviewComm data-id="review__text font-t">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </S.ReviewComm>
                    </S.ReviewRight>
                  </S.ReviewItem>
                </S.Reviews>
              </S.ModalReviews>
            </S.ModalContent>
          </S.Modal>
        </S.ModalBlock>
      </S.ModalReview>
    </S.ModalWrapper>
  );
};
