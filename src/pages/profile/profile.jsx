import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import * as S from "./profile-styles";
import { Content } from "../../components/content/content";
import { ComeBackElement } from "../../components/comeBack/comeBack";
import { useNavigate, useSubmit } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setInitialState, setUserData } from "../../components/store/userSlice";
import { useEffect, useState } from "react";
import {
  useGetUserQuery,
  useChangeUserMutation,
  useGetUserPostQuery,
} from "../../components/store/postsApi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonLoading } from "../../components/content/loading";

export const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data = [], isLoading, error } = useGetUserQuery();
  const { data: userPosts } = useGetUserPostQuery();
  console.log(userPosts);

  useEffect(() => {
    dispatch(setUserData(data));
  }, [isLoading]);

  const user = useSelector((state) => state.user);
  const [isDisabled, setDisabled] = useState(true);
  const [userName, setName] = useState();
  const [userSurname, setSurname] = useState();
  const [userCity, setCity] = useState();
  const [userPhone, setPhone] = useState();
  const [userAvatar, setAvatar] = useState();

  useEffect(() => {
    setSurname(user.surname);
    setPhone(user.phone);
    setCity(user.city);
    setName(user.name);
  }, [user]);

  useEffect(() => {
    if (
      userName != user.name ||
      userCity != user.city ||
      user.phone != userPhone ||
      user.surname != userSurname
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  });

  const handleLogout = () => {
    localStorage.clear();
    dispatch(setInitialState());
    navigate("/login");
  };

  const [changeUserData] = useChangeUserMutation();

  const handleSaveData = async () => {
    const response = await changeUserData({
      name: userName,
      surname: userSurname,
      phone: userPhone,
      city: userCity,
    }).unwrap();
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result;
        setAvatar(() => [{ file: file, src: imageUrl }]);
      };
      reader.readAsDataURL(file);
    }
  };
  console.log(userAvatar);

  return (
    <>
      <Header></Header>
      <S.Main data-id="main">
        <S.ProfileContainer data-id="profile__container">
          <S.MainCenterBlock data-id="main__center-block">
            <ComeBackElement></ComeBackElement>
            {isLoading ? (
              <S.MainH2 data-id="main__h2">
                <Skeleton width={"50%"}></Skeleton>
              </S.MainH2>
            ) : (
              <S.MainH2 data-id="main__h2">Здравствуйте, {user.name}!</S.MainH2>
            )}

            <S.MainProfile data-id="main__profile profile">
              <S.ProfileContent data-id="profile__content">
                <S.ProfileTitle data-id="profile__title title">
                  {isLoading ? (
                    <Skeleton width={"50%"}></Skeleton>
                  ) : (
                    "Настройки профиля"
                  )}
                </S.ProfileTitle>

                <S.ProfileSettings data-id="profile__settings settings">
                  <S.SettingsLeft data-id="settings__left">
                    <S.SettingsImg data-id="settings__img">
                      {user.avatar && <img src={user.avatar} alt="userPic" />}
                    </S.SettingsImg>
                    <S.SettingsPhoto
                      data-id="settings__change-photo"
                      htmlFor="fileInput"
                    >
                      {isLoading ? (
                        <Skeleton></Skeleton>
                      ) : (
                        <>
                          Заменить
                          <S.InputPicture
                            type="file"
                            data-id="inputpicture"
                            id="fileInput"
                            onChange={(e) => handlePhotoChange(e)}
                          ></S.InputPicture>
                        </>
                      )}
                    </S.SettingsPhoto>
                  </S.SettingsLeft>
                  <S.SettingsRight data-id="settings__right">
                    <S.SettingsForm data-id="settings__form" action="#">
                      <S.SettingsDiv data-id="settings__div">
                        <label htmlFor="fname">
                          {" "}
                          {isLoading ? <Skeleton></Skeleton> : "Имя"}
                        </label>
                        <S.SettingsInput
                          data-id="settings__f-name"
                          id="settings-fname"
                          name="fname"
                          type="text"
                          value={userName ? userName : ""}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </S.SettingsDiv>

                      <S.SettingsDiv data-id="settings__div">
                        <label htmlFor="lname">
                          {" "}
                          {isLoading ? <Skeleton></Skeleton> : "Фамилия"}
                        </label>
                        <S.SettingsInput
                          data-id="settings__l-name"
                          id="settings-lname"
                          name="lname"
                          type="text"
                          value={userSurname ? userSurname : ""}
                          onChange={(e) => setSurname(e.target.value)}
                        />
                      </S.SettingsDiv>

                      <S.SettingsDiv data-id="settings__div">
                        <label htmlFor="city">
                          {" "}
                          {isLoading ? <Skeleton></Skeleton> : "Город"}
                        </label>
                        <S.SettingsInput
                          data-id="settings__city"
                          id="settings-city"
                          name="city"
                          type="text"
                          value={userCity ? userCity : ""}
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </S.SettingsDiv>

                      <S.SettingsDiv data-id="settings__div">
                        <label htmlFor="phone">
                          {" "}
                          {isLoading ? <Skeleton></Skeleton> : "Телефон"}
                        </label>
                        <S.SettingsInputPhone
                          data-id="settings__phone"
                          id="settings-phone"
                          name="phone"
                          type="tel"
                          value={userPhone ? userPhone : ""}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </S.SettingsDiv>

                      <S.SettingsButton
                        data-id="settings__btn "
                        className="btn-hov02"
                        id="settings-btn"
                        type="submit"
                        disabled={isDisabled ? true : false}
                        onClick={handleSaveData}
                      >
                        Сохранить
                      </S.SettingsButton>
                      <S.SettingsButton
                        data-id="settings__btn "
                        className="btn-hov02"
                        id="settings-btn"
                        type="button"
                        disabled={isLoading ? true : false}
                        onClick={handleLogout}
                      >
                        Выйти
                      </S.SettingsButton>
                    </S.SettingsForm>
                  </S.SettingsRight>
                </S.ProfileSettings>
              </S.ProfileContent>
            </S.MainProfile>

            <S.MainTitle data-id="main__title title">Мои товары</S.MainTitle>
          </S.MainCenterBlock>
          {isLoading ? (
            <SkeletonLoading amount={4}></SkeletonLoading>
          ) : (
            <Content ads={userPosts}></Content>
          )}
        </S.ProfileContainer>
      </S.Main>
      <Footer></Footer>
    </>
  );
};
