import * as S from "./content.styles";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonLoading = ({ amount }) => {
  const skeletonItems = Array.from({ length: amount }, (_, index) => (
    <S.CardItem key={index}>
      <S.Card>
        <S.CardImage>
          <Skeleton></Skeleton>
        </S.CardImage>
        <S.CardContent>
          <Skeleton></Skeleton>
          <S.CardPrice>
            <Skeleton width={"50%"}></Skeleton>
          </S.CardPrice>
          <S.CardData>
            <Skeleton width={"40%"}></Skeleton>
          </S.CardData>
        </S.CardContent>
      </S.Card>
    </S.CardItem>
  ));

  return (
    <S.MainContent>
      <S.Cards>{skeletonItems}</S.Cards>
    </S.MainContent>
  );
};
