/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import * as S from "./modal.styles";
import { Header } from "../../components/header/header";
import { format } from "date-fns";
import { ru } from "date-fns/locale/ru";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAddFeedbackMutation } from "../../components/store/postsApi";
import { useState, useEffect } from "react";

export const ReviewsModal = ({ reviews, isModal, postId }) => {
  const email = useSelector((state) => state.user.email);
  const [review, setReview] = useState("");
  const toggleModal = () => {
    isModal((prev) => !prev);
  };

  const [addReview] = useAddFeedbackMutation();

  const handlePostReview = async (e) => {
    e.preventDefault();
    const response = await addReview({
      text: {
        text: review,
      },
      postId: postId,
    }).unwrap();
    if (response?.id) {
      setReview("");
    }
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
              <S.Title data-id="title">
                <S.ModalCloseMob onClick={toggleModal}></S.ModalCloseMob>
                Отзывы о товаре
              </S.Title>
              <S.ModalClose data-id="modalclose" onClick={toggleModal}>
                <S.ModalCloseLine data-id="modalline"></S.ModalCloseLine>
              </S.ModalClose>
              {email ? (
                <S.ModalForm data-id="ModalForms" id="formNewArt" action="#">
                  <S.ModalInput data-id="ModalInput">
                    <S.Label htmlFor="name">Добавить отзыв</S.Label>
                    <S.InputDescription
                      type="text"
                      name="name"
                      id="formName"
                      rows="6"
                      value={review}
                      placeholder="Введите отзыв"
                      onChange={(e) => setReview(e.target.value)}
                    />
                  </S.ModalInput>

                  <S.ModalButton
                    data-id="form-newArt__btn-pub btn-hov02"
                    className="btn-hov02"
                    id="btnPublish"
                    disabled={review === "" ? true : false}
                    onClick={handlePostReview}
                  >
                    Сохранить
                  </S.ModalButton>
                </S.ModalForm>
              ) : (
                <S.AuthModalWarning>
                  Чтобы оставлять комментарии{" "}
                  <Link to={"/login"}>
                    <span>войдите</span>
                  </Link>{" "}
                  или{" "}
                  <Link to={"/register"}>
                    <span>зарегистрируйтесь</span>
                  </Link>
                </S.AuthModalWarning>
              )}

              <S.ModalReviews data-id="modal__reviews reviews">
                {reviews.map((item) => {
                  return (
                    <S.Reviews data-id="reviews__review review" key={item.id}>
                      <S.ReviewItem data-id="review__item">
                        <S.ReviewLeft data-id="review__left">
                          <S.ReviewImg data-id="review__img">
                            {item?.author?.avatar && (
                              <img
                                src={`http://127.0.0.1:8090/${item.author.avatar}`}
                                alt="no"
                              />
                            )}
                          </S.ReviewImg>
                        </S.ReviewLeft>
                        <S.ReviewRight data-id="review__right">
                          <S.ReviewText data-id="review__name font-t">
                            {item.author.name}{" "}
                            <span>
                              {format(
                                new Date(item.created_on),
                                "d MMMM yyyy",
                                {
                                  locale: ru,
                                }
                              )}
                            </span>
                          </S.ReviewText>
                          <S.ReviewText data-id="review__title font-t">
                            Комментарий
                          </S.ReviewText>
                          <S.ReviewComm data-id="review__text font-t">
                            {item.text}
                          </S.ReviewComm>
                        </S.ReviewRight>
                      </S.ReviewItem>
                    </S.Reviews>
                  );
                })}
              </S.ModalReviews>
            </S.ModalContent>
          </S.Modal>
        </S.ModalBlock>
      </S.ModalReview>
    </S.ModalWrapper>
  );
};
