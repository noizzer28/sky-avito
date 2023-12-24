import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Search } from "../../components/search/search";
import { Content } from "../../components/content/content";
import * as S from "./main.styles";
import { useGetPostsQuery } from "../../components/store/postsApi";

export const Main = () => {
  const { data = [], isLoading, error } = useGetPostsQuery();
  console.log(data);
  console.log(isLoading);

  return (
    <>
      <Header></Header>
      <S.Main data-id="main">
        <Search></Search>
        <S.MainContainer data-id="main__container">
          <S.MainH2 data-id="main__h2">Объявления</S.MainH2>
          <Content ads={data}></Content>
        </S.MainContainer>
      </S.Main>
      <Footer></Footer>
    </>
  );
};
