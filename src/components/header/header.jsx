import * as S from "./header.styles";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const Header = () => {
  const navigate = useNavigate();

  const { isAuth } = useAuth();
  console.log(isAuth);
  return (
    <S.Header className="header">
      <S.HeaderNav className="header__nav">
        {isAuth ? (
          <>
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
            <S.HeaderButton className="btn-hov01">
              Разместить объявление
            </S.HeaderButton>
            <S.HeaderButton className="btn-hov01">
              Личный кабинет
            </S.HeaderButton>
          </>
        ) : (
          <>
            <S.HeaderButton
              className="btn-hov01"
              onClick={() => navigate("/login")}
            >
              Вход в личный кабинет
            </S.HeaderButton>
          </>
        )}
      </S.HeaderNav>
    </S.Header>
  );
};
