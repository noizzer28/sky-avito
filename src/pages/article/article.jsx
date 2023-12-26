import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import * as S from "./article-style";
import { ComeBackElement } from "../../components/comeBack/comeBack";
import { useParams } from "react-router-dom";
import { useGetPostQuery } from "../../components/store/postsApi";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ReactTimeAgo from "react-time-ago";

export const Article = () => {
  const { id } = useParams();
  const [images, setImages] = useState([]);
  const [activeImage, setActiveImage] = useState(null);
  const [isHidden, setIsHidden] = useState(false);
  const { data = [], error, isLoading, isSuccess } = useGetPostQuery(id);

  console.log(data);
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

  return (
    <>
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
                    href=""
                    target="_blank"
                    rel=""
                  >
                    {isLoading ? <Skeleton></Skeleton> : `feedbacks`}
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
                  Показать&nbsp;телефон
                  {data?.user?.phone && (
                    <span>
                      {isHidden
                        ? data.user.phone
                        : handleHideNumber(data.user.phone)}
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
                        formatDate(data.user.sells_from)
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

function handleHideNumber(mob) {
  const lastIndex = mob.length - 4;
  const replacedString = mob.substring(0, lastIndex) + "X".repeat(4);
  return replacedString;
}

function formatDate(inputDate) {
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  const dateParts = inputDate.split("-");
  const year = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10) - 1;
  const day = parseInt(dateParts[2], 10);

  const formattedDate = `Продает товары с ${day} ${months[month]} ${year} г.`;

  return formattedDate;
}
