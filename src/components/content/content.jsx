import * as S from "./content.styles";
import { Link } from "react-router-dom";
import ReactTimeAgo from "react-time-ago";

export const Content = ({ ads }) => {
  if (!ads) {
    return <S.MainContent>Здесь еще нет ни одного объявления</S.MainContent>;
  }

  return (
    <S.MainContent data-id="main__content">
      <S.Cards data-id="content__cards cards">
        {ads.map((post) => {
          let imgUrl;
          if (post.images && post.images.length > 0) {
            imgUrl = `http://127.0.0.1:8090/${post.images[0].url}`;
          }

          return (
            <S.CardItem data-id="cards__item" key={post.id}>
              <S.Card data-id="cards__card card">
                <S.CardImage data-id="card__image">
                  <Link to={`/article/${post.id}`}>
                    <img
                      src={imgUrl ? imgUrl : "/img/no_image.png"}
                      alt="none"
                    />
                  </Link>
                </S.CardImage>
                <S.CardContent data-id="card__content">
                  <Link to={`/article/${post.id}`}>
                    <S.CardTitle data-id="card__title">
                      {post.title}
                    </S.CardTitle>
                  </Link>
                  <S.CardPrice data-id="card__price">
                    {post.price} ₽
                  </S.CardPrice>
                  <S.CardData data-id="card__place">
                    {post.user.city}
                  </S.CardData>
                  <S.CardData data-id="card__date">
                    <ReactTimeAgo
                      date={new Date(post.created_on)}
                    ></ReactTimeAgo>
                  </S.CardData>
                </S.CardContent>
              </S.Card>
            </S.CardItem>
          );
        })}
      </S.Cards>
    </S.MainContent>
  );
};
