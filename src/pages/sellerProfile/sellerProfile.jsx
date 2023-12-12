import { ComeBackElement } from "../../components/comeBack/comeBack";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Content } from "../../components/content/content";
import * as S from "./sellerProfile.styles";

export const SellerProfile = () => {
  return (
    <>
      <Header></Header>
      <S.Main data-id="main">
        <S.MainContainer data-id="main__container">
          <S.MainCenterBlock data-id="main__center-block">
            <ComeBackElement></ComeBackElement>

            <S.MainH2 data-id="main__h2">Профиль продавца</S.MainH2>

            <S.MainProfileSell data-id="main__profile-sell profile-sell">
              <S.ProfileCellContent data-id="profile-sell__content">
                <S.ProfileSeller data-id="profile-sell__seller seller">
                  <S.SellerLeft data-id="seller__left">
                    <S.SellerImg data-id="seller__img">
                      <a href="" target="_self">
                        <img src="#" alt="" />
                      </a>
                    </S.SellerImg>
                  </S.SellerLeft>
                  <S.SellerRight data-id="seller__right">
                    <S.SellerTitle data-id="seller__title">
                      Кирилл Матвеев
                    </S.SellerTitle>
                    <S.SellerInfo data-id="seller__city">
                      Санкт-Петербург
                    </S.SellerInfo>
                    <S.SellerInfo data-id="seller__inf">
                      Продает товары с августа 2021
                    </S.SellerInfo>

                    <S.SellerImgMobBlock data-id="seller__img-mob-block">
                      <S.SellerImgMob data-id="seller__img-mob">
                        <a href="" target="_self">
                          <img src="#" alt="" />
                        </a>
                      </S.SellerImgMob>
                    </S.SellerImgMobBlock>

                    <S.SellerButton
                      data-id="seller__btn "
                      className="btn-hov02"
                    >
                      Показать&nbsp;телефон
                      <span>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
                    </S.SellerButton>
                  </S.SellerRight>
                </S.ProfileSeller>
              </S.ProfileCellContent>
            </S.MainProfileSell>

            <S.MainTitle data-id="main__title ">Товары продавца</S.MainTitle>
          </S.MainCenterBlock>
          <Content></Content>
        </S.MainContainer>
      </S.Main>
      <Footer></Footer>
    </>
  );
};
