import * as S from "./footer.styles";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <S.Footer data-id="footer">
      <S.FooterContainer data-id="footer__container">
        <S.FooterImg data-id="footer__img">
          <Link to="/">
            <img src="/img/icon_01.png" alt="home" />
          </Link>
        </S.FooterImg>
        <S.FooterImg data-id="footer__img">
          <Link to="/">
            <img src="/img/icon_02.png" alt="home" />
          </Link>
        </S.FooterImg>
        <S.FooterImg data-id="footer__img">
          <Link to="/profile">
            <img src="/img/icon_03.png" alt="home" />
          </Link>
        </S.FooterImg>
      </S.FooterContainer>
    </S.Footer>
  );
};
