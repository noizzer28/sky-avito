import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import * as S from "./profile-styles";
import { Content } from "../../components/content/content";
import { ComeBackElement } from "../../components/comeBack/comeBack";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setInitialState } from "../../components/store/userSlice";

export const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.clear();
    dispatch(setInitialState());
    navigate("/login");
  };
  return (
    <>
      <Header></Header>
      <S.Main data-id="main">
        <S.MainContainer data-id="main__container">
          <S.MainCenterBlock data-id="main__center-block">
            <ComeBackElement></ComeBackElement>

            <S.MainH2 data-id="main__h2">Здравствуйте, Антон!</S.MainH2>

            <S.MainProfile data-id="main__profile profile">
              <S.ProfileContent data-id="profile__content">
                <S.ProfileTitle data-id="profile__title title">
                  Настройки профиля
                </S.ProfileTitle>
                <S.ProfileSettings data-id="profile__settings settings">
                  <S.SettingsLeft data-id="settings__left">
                    <S.SettingsImg data-id="settings__img">
                      <a href="" target="_self">
                        <img src="#" alt="" />
                      </a>
                    </S.SettingsImg>
                    <S.SettingsPhoto
                      data-id="settings__change-photo"
                      href=""
                      target="_self"
                    >
                      Заменить
                    </S.SettingsPhoto>
                  </S.SettingsLeft>
                  <S.SettingsRight data-id="settings__right">
                    <S.SettingsForm data-id="settings__form" action="#">
                      <S.SettingsDiv data-id="settings__div">
                        <label htmlFor="fname">Имя</label>
                        <S.SettingsInput
                          data-id="settings__f-name"
                          id="settings-fname"
                          name="fname"
                          type="text"
                          value="Ан"
                          placeholder=""
                        />
                      </S.SettingsDiv>

                      <S.SettingsDiv data-id="settings__div">
                        <label htmlFor="lname">Фамилия</label>
                        <S.SettingsInput
                          data-id="settings__l-name"
                          id="settings-lname"
                          name="lname"
                          type="text"
                          value="Городецкий"
                          placeholder=""
                        />
                      </S.SettingsDiv>

                      <S.SettingsDiv data-id="settings__div">
                        <label htmlFor="city">Город</label>
                        <S.SettingsInput
                          data-id="settings__city"
                          id="settings-city"
                          name="city"
                          type="text"
                          value="Санкт-Петербург"
                          placeholder=""
                        />
                      </S.SettingsDiv>

                      <S.SettingsDiv data-id="settings__div">
                        <label htmlFor="phone">Телефон</label>
                        <S.SettingsInputPhone
                          data-id="settings__phone"
                          id="settings-phone"
                          name="phone"
                          type="tel"
                          value="89161234567"
                          placeholder="+79161234567"
                        />
                      </S.SettingsDiv>

                      <S.SettingsButton
                        data-id="settings__btn "
                        className="btn-hov02"
                        id="settings-btn"
                      >
                        Сохранить
                      </S.SettingsButton>
                      <S.SettingsButton
                        data-id="settings__btn "
                        className="btn-hov02"
                        id="settings-btn"
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
          <Content></Content>
        </S.MainContainer>
      </S.Main>
      <Footer></Footer>
    </>
  );
};
