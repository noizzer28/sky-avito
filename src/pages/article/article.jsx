import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import * as S from "./article-style";

export const Article = () => {
  return (
    <>
      <Header></Header>
      <S.Main data-id="main">
        <S.MainContainer data-id="main__container">
          <S.MainMenu data-id="main__menu menu">
            <S.MenuLogoLink data-id="menu__logo-link" href="" target="_blank">
              <S.MenuLogoImg
                data-id="menu__logo-img"
                src="img/logo.png"
                alt="logo"
              />
            </S.MenuLogoLink>
            <S.MenuForm data-id="menu__form" action="#">
              <S.MenuButtonSearch data-id="menu__btn-serch btn-hov02">
                Вернуться на главную
              </S.MenuButtonSearch>
            </S.MenuForm>
          </S.MainMenu>
        </S.MainContainer>

        <S.MainArtic data-id="main__artic artic">
          <S.ArticContent data-id="artic__content article">
            <S.ArticleLeft data-id="article__left">
              <S.ArticleFillImg data-id="article__fill-img">
                <S.AtricleImg data-id="article__img">
                  <img src="" alt="" />
                </S.AtricleImg>
                <S.AtricleImgBar data-id="article__img-bar">
                  <S.AtricleImgBarDiv data-id="article__img-bar-div">
                    <img src="" alt="" />
                  </S.AtricleImgBarDiv>
                  <S.AtricleImgBarDiv data-id="article__img-bar-div">
                    <img src="" alt="" />
                  </S.AtricleImgBarDiv>
                  <S.AtricleImgBarDiv data-id="article__img-bar-div">
                    <img src="" alt="" />
                  </S.AtricleImgBarDiv>
                  <S.AtricleImgBarDiv data-id="article__img-bar-div">
                    <img src="" alt="" />
                  </S.AtricleImgBarDiv>
                  <S.AtricleImgBarDiv data-id="article__img-bar-div">
                    <img src="" alt="" />
                  </S.AtricleImgBarDiv>
                  <S.AtricleImgBarDiv data-id="article__img-bar-div">
                    <img src="" alt="" />
                  </S.AtricleImgBarDiv>
                </S.AtricleImgBar>
                <S.AtricleImgMob data-id="article__img-bar-mob img-bar-mob">
                  <S.ImgCircleMob data-id="img-bar-mob__circle circle-active"></S.ImgCircleMob>
                  <S.ImgCircleMob data-id="img-bar-mob__circle"></S.ImgCircleMob>
                  <S.ImgCircleMob data-id="img-bar-mob__circle"></S.ImgCircleMob>
                  <S.ImgCircleMob data-id="img-bar-mob__circle"></S.ImgCircleMob>
                  <S.ImgCircleMob data-id="img-bar-mob__circle"></S.ImgCircleMob>
                </S.AtricleImgMob>
              </S.ArticleFillImg>
            </S.ArticleLeft>
            <S.AtricleRight data-id="article__right">
              <S.AtricleBlock data-id="article__block">
                <S.AtricleTitle data-id="article__title title">
                  Ракетка для большого тенниса Triumph Pro STС Б/У
                </S.AtricleTitle>
                <S.AtricleInfo data-id="article__info">
                  <S.AtricleData data-id="article__date">
                    Сегодня в 10:45
                  </S.AtricleData>
                  <S.AtricleData data-id="article__city">
                    Санкт-Петербург
                  </S.AtricleData>
                  <S.AtricleLink
                    data-id="article__link"
                    href=""
                    target="_blank"
                    rel=""
                  >
                    23 отзыва
                  </S.AtricleLink>
                </S.AtricleInfo>
                <S.AtriclePrice data-id="article__price">
                  2 200 ₽
                </S.AtriclePrice>
                <S.AtricleButton data-id="article__btn btn-hov02">
                  Показать&nbsp;телефон
                  <span>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
                </S.AtricleButton>
                <S.AtricleAuthor data-id="article__author author">
                  <S.AuthorImg data-id="author__img">
                    <img src="" alt="" />
                  </S.AuthorImg>
                  <S.AuthorCont data-id="author__cont">
                    <S.AuthorName data-id="author__name">Кирилл</S.AuthorName>
                    <S.AuthorAbout data-id="author__about">
                      Продает товары с августа 2021
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </S.MainText>
          </S.MainContent>
        </S.MainContainer>
      </S.Main>
      <Footer></Footer>
    </>
  );
};
