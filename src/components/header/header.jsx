import * as S from "./header-styles";

export const Header = () => {
  return (
    <S.Header className="header">
      <S.HeaderNav className="header__nav">
        <S.HeaderLogo className="header__logo logo-mob">
          <S.HeaderLogoMobLink
            className="logo-mob__link"
            href=""
            target="_blank"
          >
            <S.HeaderLogoMobImg
              className="logo-mob__img"
              src="img/logo-mob.png"
              alt="logo"
            />
          </S.HeaderLogoMobLink>
        </S.HeaderLogo>
        <S.HeaderButton className="header__btn-putAd btn-hov01" id="btputAd">
          Разместить объявление
        </S.HeaderButton>
        <S.HeaderButton className="header__btn-lk btn-hov01" id="btnlk">
          Личный кабинет
        </S.HeaderButton>
      </S.HeaderNav>
    </S.Header>
  );
};
