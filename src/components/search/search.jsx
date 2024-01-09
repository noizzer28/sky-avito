import * as S from './search.styles'
import { setFilteredPosts } from '../store/postsSlice'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

export const Search = () => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(setFilteredPosts(search))
  }
  return (
    <S.MainSearch data-id="main__search search">
      <S.SearchLogoLink data-id="search__logo-link" href="/">
        <img data-id="search__logo-img" src="img/logo.png" alt="logo" />
      </S.SearchLogoLink>
      <S.SearchLogoMobLink data-id="search__logo-mob-link" href="/">
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
          onChange={(e) => setSearch(e.target.value)}
        />
        <S.SearchTextMob
          data-id="search__text-mob"
          type="search"
          placeholder="Поиск"
          name="search-mob"
          onChange={(e) => setSearch(e.target.value)}
        />
        <S.SearchButton
          data-id="search__btn "
          className="btn-hov02"
          onClick={(e) => handleSearch(e)}
        >
          Найти
        </S.SearchButton>
      </S.SearchForm>
    </S.MainSearch>
  )
}
