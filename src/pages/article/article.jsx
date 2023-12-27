import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import * as S from "./article-style";
import { ComeBackElement } from "../../components/comeBack/comeBack";
import { useParams } from "react-router-dom";
import {
  useGetPostQuery,
  useGetFeedbacksQuery,
} from "../../components/store/postsApi";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ReactTimeAgo from "react-time-ago";
import { skipToken } from "@reduxjs/toolkit/query";
import { ReviewsModal } from "../modals/reviews";
import { format } from "date-fns";
import { ru } from "date-fns/locale/ru";

export const Article = () => {
  const { id } = useParams();
  const [images, setImages] = useState([]);
  const [activeImage, setActiveImage] = useState(null);
  const [isHidden, setIsHidden] = useState(false);
  const [isModal, setModal] = useState(false);
  const { data = [], isLoading } = useGetPostQuery(id);

  useEffect(() => {
    if (data.images && data.images.length > 0) {
      const arr = data.images.map((item, index) => {
        if (index === 0) {
          setActiveImage(`http://127.0.0.1:8090/${item.url}`);
        }
        return `http://127.0.0.1:8090/${item.url}`;
      });
      setImages(arr);
    }
  }, [data]);

  const { data: reviews, isLoading: reviewsLoading } = useGetFeedbacksQuery(
    data.id ?? skipToken
  );

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <>
      {isModal && (
        <ReviewsModal reviews={reviews} isModal={toggleModal}></ReviewsModal>
      )}
      <Header></Header>
      <S.Main data-id="main">
        <S.MainContainer data-id="main__container">
          <ComeBackElement></ComeBackElement>
        </S.MainContainer>

        <S.MainArtic data-id="main__artic artic">
          <S.ArticContent data-id="artic__content article">
            <S.ArticleLeft data-id="article__left">
              <S.ArticleFillImg data-id="article__fill-img">
                <S.BackArrowMob data-id="BackArrowMob"></S.BackArrowMob>
                <S.ArticleImg data-id="article__img">
                  {activeImage ? (
                    <img src={activeImage} alt="no" />
                  ) : (
                    <img src="/img/no_image.png" alt="no" />
                  )}
                </S.ArticleImg>

                <S.AtricleImgBar data-id="article__img-bar">
                  {images.map((item, index) => {
                    if (item === activeImage) {
                      return (
                        <S.AtricleImgBarActive
                          key={index}
                          data-id="article__img_active"
                        >
                          <img src={item} alt="no" />
                        </S.AtricleImgBarActive>
                      );
                    } else {
                      return (
                        <S.AtricleImgBarDiv
                          key={index}
                          data-id="article__img"
                          onClick={() => setActiveImage(item)}
                        >
                          <img src={item} alt="no" />
                        </S.AtricleImgBarDiv>
                      );
                    }
                  })}
                </S.AtricleImgBar>
                <S.AtricleImgMob data-id="article__img-mob">
                  {images.map((item, index) => {
                    if (item === activeImage) {
                      return (
                        <S.ImgCircleMobActive
                          key={index}
                          data-id="ImgCircleMobActive"
                        ></S.ImgCircleMobActive>
                      );
                    } else {
                      return (
                        <S.ImgCircleMob
                          key={index}
                          data-id="ImgCircleMob"
                          onClick={() => setActiveImage(item)}
                        ></S.ImgCircleMob>
                      );
                    }
                  })}
                </S.AtricleImgMob>
              </S.ArticleFillImg>
            </S.ArticleLeft>
            <S.AtricleRight data-id="article__right">
              <S.AtricleBlock data-id="article__block">
                <S.AtricleTitle data-id="article__title title">
                  {isLoading ? <Skeleton></Skeleton> : data.title}
                </S.AtricleTitle>
                <S.AtricleInfo data-id="article__info">
                  <S.AtricleData data-id="article__date">
                    {isLoading ? (
                      <Skeleton></Skeleton>
                    ) : (
                      <ReactTimeAgo
                        date={new Date(data.created_on)}
                      ></ReactTimeAgo>
                    )}
                  </S.AtricleData>
                  <S.AtricleData data-id="articledata">
                    {isLoading ? <Skeleton></Skeleton> : data.user.city}
                  </S.AtricleData>
                  <S.AtricleLink
                    data-id="article__link"
                    onClick={() => setModal(true)}
                  >
                    {isLoading || reviewsLoading ? (
                      <Skeleton></Skeleton>
                    ) : reviews?.length > 0 ? (
                      formatComments(reviews.length)
                    ) : (
                      "Оставить первый комментарий"
                    )}
                  </S.AtricleLink>
                </S.AtricleInfo>
                <S.AtriclePrice data-id="article__price">
                  {isLoading ? <Skeleton></Skeleton> : `${data.price} ₽`}
                </S.AtriclePrice>

                <S.AtricleButton
                  disabled={!data?.user?.phone}
                  data-id="article__btn"
                  className="btn-hov02"
                  onClick={() => setIsHidden((prev) => !prev)}
                >
                  {isHidden ? "Скрыть" : "Показать"}&nbsp;телефон
                  {data?.user?.phone && (
                    <span>
                      {isHidden
                        ? data.user.phone
                        : handleShowNumber(data.user.phone)}
                    </span>
                  )}
                </S.AtricleButton>

                <S.AtricleAuthor data-id="article__author author">
                  <S.AuthorImg data-id="author__img">
                    {isLoading ? (
                      <Skeleton></Skeleton>
                    ) : (
                      data.user.avatar && (
                        <img
                          src={`http://127.0.0.1:8090/${data?.user?.avatar}`}
                          alt="no"
                        />
                      )
                    )}
                  </S.AuthorImg>
                  <S.AuthorCont data-id="author__cont">
                    <S.AuthorName data-id="author__name">
                      {isLoading ? <Skeleton></Skeleton> : data.user.name}
                    </S.AuthorName>
                    <S.AuthorAbout data-id="author__about">
                      {isLoading ? (
                        <Skeleton></Skeleton>
                      ) : (
                        `Продает товары с ${format(
                          new Date(data.user.sells_from),
                          "d MMMM yyyy",
                          {
                            locale: ru,
                          }
                        )} г.`
                      )}
                    </S.AuthorAbout>
                  </S.AuthorCont>
                </S.AtricleAuthor>
              </S.AtricleBlock>
            </S.AtricleRight>
          </S.ArticContent>
        </S.MainArtic>

        <S.MainContainer data-id="main__container">
          <S.MainTitle data-id="main__title title">Описание товара</S.MainTitle>
          <S.MainContent data-id="main__content">
            <S.MainText data-id="main__text">
              {isLoading ? (
                <Skeleton count={5}></Skeleton>
              ) : data.description ? (
                data.description
              ) : (
                "Пользователь еще не добавил описание"
              )}
            </S.MainText>
          </S.MainContent>
        </S.MainContainer>
      </S.Main>
      <Footer></Footer>
    </>
  );
};

function handleShowNumber(mob) {
  const lastIndex = mob.length - 4;
  const replacedString = mob.substring(0, lastIndex) + "X".repeat(4);
  return replacedString;
}

function formatComments(length) {
  const lastDigit = length % 10;
  if (lastDigit === 1) {
    return `${length} отзыв`;
  } else if (lastDigit > 1 && lastDigit < 5) {
    return `${length} отзыва`;
  } else {
    return `${length} отзывов`;
  }
}
