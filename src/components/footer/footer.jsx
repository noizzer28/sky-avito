import * as S from "./footer.styles";
export const Footer = () => {
  return (
    <S.Footer data-id="footer">
      <S.FooterContainer data-id="footer__container">
        <S.FooterImg data-id="footer__img">
          <a href="/" target="_self">
            <img src="img/icon_01.png" alt="home" />
          </a>
        </S.FooterImg>
        <S.FooterImg data-id="footer__img">
          <a href="/" target="_self">
            <img src="img/icon_02.png" alt="home" />
          </a>
        </S.FooterImg>
        <S.FooterImg data-id="footer__img">
          <a href="/" target="_self">
            <img src="img/icon_03.png" alt="home" />
          </a>
        </S.FooterImg>
      </S.FooterContainer>
    </S.Footer>
  );
};
