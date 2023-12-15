import { Link } from "react-router-dom";
import { Header } from "../../components/header/header";
import * as S from "./notFound.styles";

export const NotFound = () => {
  return (
    <>
      <S.Wrapper>
        <Header></Header>
        <S.CenterBlock>
          <S.ParagraphImg src={"/img/not-found.jpg"}></S.ParagraphImg>
          <S.TitleText>Страница не найдена</S.TitleText>
          <S.ParagraphText>
            Возможно, она была удалена <br /> или перенесена на другой адрес
          </S.ParagraphText>

          <Link to={`/`}>
            <S.Button>Вернуться на главную</S.Button>
          </Link>
        </S.CenterBlock>
      </S.Wrapper>
    </>
  );
};
