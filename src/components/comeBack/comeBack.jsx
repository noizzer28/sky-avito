import { Link } from "react-router-dom";
import * as S from "./comeBack.styles";

export const ComeBackElement = () => {
  return (
    <S.MainMenu data-id="main__menu menu">
      <S.MenuLogoLink data-id="menu__logo-link" href="" target="_blank">
        <S.MenuLogoImg
          data-id="menu__logo-img"
          src="/img/logo-mob.png"
          alt="logo"
        />
      </S.MenuLogoLink>
      <S.MenuForm data-id="menu__form" action="#">
        <Link to={"/"}>
          <S.MenuButtonSearch data-id="menu__btn-serch " className="btn-hov02">
            Вернуться на главную
          </S.MenuButtonSearch>
        </Link>
      </S.MenuForm>
    </S.MainMenu>
  );
};
