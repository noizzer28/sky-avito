import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Search } from "../../components/search/search";
import { Content } from "../../components/content/content";
import * as S from "./main.styles";
import { useGetPostsQuery } from "../../components/store/postsApi";
import { useState, useEffect } from "react";
import { GetPostsApi } from "../../components/store/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { SkeletonLoading } from "../../components/content/loading";

export const Main = () => {
  const dispatch = useDispatch();
  const { posts, error, loading } = useSelector((state) => state.post);
  console.log(posts);

  useEffect(() => {
    dispatch(GetPostsApi());
  }, []);

  return (
    <>
      <Header></Header>
      <S.Main data-id="main">
        <Search></Search>
        <S.MainContainer data-id="main__container">
          <S.MainH2 data-id="main__h2">Объявления</S.MainH2>
          {loading ? (
            <SkeletonLoading amount={8} />
          ) : (
            <Content ads={posts}></Content>
          )}
        </S.MainContainer>
      </S.Main>
      <Footer></Footer>
    </>
  );
};
