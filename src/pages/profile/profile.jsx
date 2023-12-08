import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import "./profile.css";
import { Content } from "../../components/content/content";

export const Profile = () => {
  return (
    <>
      <Header></Header>
      <main className="main">
        <div className="main__container">
          <div className="main__center-block">
            <div className="main__menu menu">
              <a className="menu__logo-link" href="" target="_blank">
                <img className="menu__logo-img" src="img/logo.png" alt="logo" />
              </a>
              <form className="menu__form" action="#">
                <button className="menu__btn btn-hov02" id="btnGoBack">
                  Вернуться на&nbsp;главную
                </button>
              </form>
            </div>

            <h2 className="main__h2">Здравствуйте, Антон!</h2>

            <div className="main__profile profile">
              <div className="profile__content">
                <h3 className="profile__title title">Настройки профиля</h3>
                <div className="profile__settings settings">
                  <div className="settings__left">
                    <div className="settings__img">
                      <a href="" target="_self">
                        <img src="#" alt="" />
                      </a>
                    </div>
                    <a
                      className="settings__change-photo"
                      href=""
                      target="_self"
                    >
                      Заменить
                    </a>
                  </div>
                  <div className="settings__right">
                    <form className="settings__form" action="#">
                      <div className="settings__div">
                        <label htmlFor="fname">Имя</label>
                        <input
                          className="settings__f-name"
                          id="settings-fname"
                          name="fname"
                          type="text"
                          value="Ан"
                          placeholder=""
                        />
                      </div>

                      <div className="settings__div">
                        <label htmlFor="lname">Фамилия</label>
                        <input
                          className="settings__l-name"
                          id="settings-lname"
                          name="lname"
                          type="text"
                          value="Городецкий"
                          placeholder=""
                        />
                      </div>

                      <div className="settings__div">
                        <label htmlFor="city">Город</label>
                        <input
                          className="settings__city"
                          id="settings-city"
                          name="city"
                          type="text"
                          value="Санкт-Петербург"
                          placeholder=""
                        />
                      </div>

                      <div className="settings__div">
                        <label htmlFor="phone">Телефон</label>
                        <input
                          className="settings__phone"
                          id="settings-phone"
                          name="phone"
                          type="tel"
                          value="89161234567"
                          placeholder="+79161234567"
                        />
                      </div>

                      <button
                        className="settings__btn btn-hov02"
                        id="settings-btn"
                      >
                        Сохранить
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="main__title title">Мои товары</h3>
          </div>
          <Content></Content>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};
