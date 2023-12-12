import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Search } from "../../components/search/search";
import { Content } from "../../components/content/content";
import * as S from "./main.styles";

export const Main = () => {
  return (
    <>
      <Header></Header>
      <S.Main>
        <Search></Search>
        <S.MainContainer data-id="main__container">
          <S.MainH2 data-id="main__h2">Объявления</S.MainH2>
          <Content></Content>
        </S.MainContainer>
      </S.Main>
      <Footer></Footer>
    </>
  );
};
