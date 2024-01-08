import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Search } from "../../components/search/search";
import { Content } from "../../components/content/content";
import * as S from "./main.styles";
import { SkeletonLoading } from "../../components/content/loading";
import { useGetAllPostsQuery } from "../../components/store/postsApi";

export const Main = () => {



  const { data, isError, isLoading } = useGetAllPostsQuery();

  console.log(data);

  return (
    <>
      <Header></Header>
      <S.Main data-id="main">
        <Search></Search>
        <S.MainContainer data-id="main__container">
          <S.MainH2 data-id="main__h2">Объявления</S.MainH2>
          {isError && (
            <S.Error>Не удалось загрузить данные с сервера: {isError}</S.Error>
          )}
          {isLoading ? (
            <SkeletonLoading amount={8} />
          ) : (
            <Content ads={data}></Content>
          )}
        </S.MainContainer>
      </S.Main>
      <Footer></Footer>
    </>
  );
};
