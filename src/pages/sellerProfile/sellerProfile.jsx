import React from 'react'
import { ComeBackElement } from '../../components/comeBack/comeBack'
import { Header } from '../../components/header/header'
import { Footer } from '../../components/footer/footer'
import { Content } from '../../components/content/content'
import * as S from './sellerProfile.styles'
import { useParams } from 'react-router-dom'
import {
  useGetAllPostsQuery,
  useGetAllUsersQuery,
} from '../../components/store/postsApi'
import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale/ru'
import Skeleton from 'react-loading-skeleton'
import { handleShowNumber } from '../article/article'
import { Link } from 'react-router-dom'

export const SellerProfile = () => {
  const { id } = useParams()
  const [user, setUser] = useState([])

  const [userPosts, setUserPosts] = useState([])
  const [userDate, setUserDate] = useState()
  const [isHidden, setIsHidden] = useState(false)

  const { data, isSuccess } = useGetAllPostsQuery()
  const {
    data: users,
    isSuccess: userSuccess,
    isLoading: userLoading,
  } = useGetAllUsersQuery()

  console.log(data)
  console.log(users)

  useEffect(() => {
    if (isSuccess && userSuccess) {
      const userPost = data.filter((post) => {
        if (post.user.id == id) {
          return true
        }
      })
      setUserPosts(userPost)
      const arr = users.filter((user) => {
        if (user.id == id) {
          return true
        }
      })
      console.log(arr)
      setUser(arr[0])
      setUserDate(arr[0].sells_from)
    }
  }, [data, users])

  console.log(user, userPosts)
  console.log(userDate)
  console.log(userLoading)
  return (
    <>
      <Header></Header>
      <S.Main data-id="main">
        <S.MainContainer data-id="main__container">
          <S.MainCenterBlock data-id="main__center-block">
            <ComeBackElement></ComeBackElement>
            <Link to={'/'}>
              <S.MainH2 data-id="main__h2">Профиль продавца</S.MainH2>
            </Link>
            <S.MainProfileSell data-id="main__profile-sell profile-sell">
              <S.ProfileCellContent data-id="profile-sell__content">
                <S.ProfileSeller data-id="profile-sell__seller seller">
                  <S.SellerLeft data-id="seller__left">
                    <S.SellerImg data-id="seller__img">
                      {userLoading ? (
                        <Skeleton height={'100%'}></Skeleton>
                      ) : (
                        user?.avatar && (
                          <img
                            src={`http://127.0.0.1:8090/${user?.avatar}`}
                            alt="no"
                          />
                        )
                      )}
                    </S.SellerImg>
                  </S.SellerLeft>
                  <S.SellerRight data-id="seller__right">
                    <S.SellerTitle data-id="seller__title">
                      {userLoading ? <Skeleton></Skeleton> : user?.name}
                    </S.SellerTitle>
                    <S.SellerInfo data-id="seller__city">
                      {userLoading ? <Skeleton></Skeleton> : user?.city}
                    </S.SellerInfo>
                    <S.SellerInfo data-id="seller__inf">
                      {userDate &&
                        `Продает товары с ${format(
                          new Date(userDate),
                          'd MMMM yyyy',
                          {
                            locale: ru,
                          },
                        )} г.`}
                    </S.SellerInfo>

                    <S.SellerImgMobBlock data-id="seller__img-mob-block">
                      <S.SellerImgMob data-id="seller__img-mob">
                        {user?.avatar && (
                          <img
                            src={`http://127.0.0.1:8090/${user?.avatar}`}
                            alt="no"
                          />
                        )}
                      </S.SellerImgMob>
                    </S.SellerImgMobBlock>

                    <S.SellerButton
                      disabled={!user?.phone}
                      data-id="seller btn"
                      className="btn-hov02"
                      onClick={() => setIsHidden((prev) => !prev)}
                    >
                      {isHidden ? 'Скрыть' : 'Показать'}&nbsp;телефон
                      {user?.phone && (
                        <span>
                          {isHidden
                            ? user.phone
                            : handleShowNumber(user?.phone)}
                        </span>
                      )}
                    </S.SellerButton>
                  </S.SellerRight>
                </S.ProfileSeller>
              </S.ProfileCellContent>
            </S.MainProfileSell>

            <S.MainTitle data-id="main__title ">Товары продавца</S.MainTitle>
          </S.MainCenterBlock>
          <Content ads={userPosts}></Content>
        </S.MainContainer>
      </S.Main>
      <Footer></Footer>
    </>
  )
}
