import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import "./article.css";

export const Article = () => {
  return (
    <>
      <Header></Header>
      <main className="main">
        <div className="main__container">
          <div className="main__menu menu">
            <a className="menu__logo-link" href="" target="_blank">
              <img className="menu__logo-img" src="img/logo.png" alt="logo" />
            </a>
            <form className="menu__form" action="#">
              <button className="menu__btn-serch btn-hov02" id="btnGoBack">
                Вернуться на главную
              </button>
            </form>
          </div>
        </div>

        <div className="main__artic artic">
          <div className="artic__content article">
            <div className="article__left">
              <div className="article__fill-img">
                <div className="article__img">
                  <img src="" alt="" />
                </div>
                <div className="article__img-bar">
                  <div className="article__img-bar-div">
                    <img src="" alt="" />
                  </div>
                  <div className="article__img-bar-div">
                    <img src="" alt="" />
                  </div>
                  <div className="article__img-bar-div">
                    <img src="" alt="" />
                  </div>
                  <div className="article__img-bar-div">
                    <img src="" alt="" />
                  </div>
                  <div className="article__img-bar-div">
                    <img src="" alt="" />
                  </div>
                  <div className="article__img-bar-div">
                    <img src="" alt="" />
                  </div>
                </div>
                <div className="article__img-bar-mob img-bar-mob">
                  <div className="img-bar-mob__circle circle-active"></div>
                  <div className="img-bar-mob__circle"></div>
                  <div className="img-bar-mob__circle"></div>
                  <div className="img-bar-mob__circle"></div>
                  <div className="img-bar-mob__circle"></div>
                </div>
              </div>
            </div>
            <div className="article__right">
              <div className="article__block">
                <h3 className="article__title title">
                  Ракетка для большого тенниса Triumph Pro STС Б/У
                </h3>
                <div className="article__info">
                  <p className="article__date">Сегодня в 10:45</p>
                  <p className="article__city">Санкт-Петербург</p>
                  <a className="article__link" href="" target="_blank" rel="">
                    23 отзыва
                  </a>
                </div>
                <p className="article__price">2 200 ₽</p>
                <button className="article__btn btn-hov02">
                  Показать&nbsp;телефон
                  <span>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
                </button>
                <div className="article__author author">
                  <div className="author__img">
                    <img src="" alt="" />
                  </div>
                  <div className="author__cont">
                    <p className="author__name">Кирилл</p>
                    <p className="author__about">
                      Продает товары с августа 2021
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main__container">
          <h3 className="main__title title">Описание товара</h3>
          <div className="main__content">
            <p className="main__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};
