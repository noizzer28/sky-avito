import * as S from "./search.styles";
export const Search = () => {
  return (
    <S.MainSearch data-id="main__search search">
      <S.SearchLogoLink data-id="search__logo-link" href="/" target="_blank">
        <img data-id="search__logo-img" src="img/logo.png" alt="logo" />
      </S.SearchLogoLink>
      <S.SearchLogoMobLink
        data-id="search__logo-mob-link"
        href="/"
        target="_blank"
      >
        <S.SearchLogoMobImg
          data-id="search__logo-mob-img"
          src="img/logo-mob.png"
          alt="logo"
        />
      </S.SearchLogoMobLink>
      <S.SearchForm data-id="search__form" action="/">
        <S.SearchText
          data-id="search__text"
          type="search"
          placeholder="Поиск по объявлениям"
          name="search"
        />
        <S.SearchTextMob
          data-id="search__text-mob"
          type="search"
          placeholder="Поиск"
          name="search-mob"
        />
        <S.SearchButton data-id="search__btn " className="btn-hov02">
          Найти
        </S.SearchButton>
      </S.SearchForm>
    </S.MainSearch>
  );
};
