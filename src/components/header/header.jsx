import * as S from "./header.styles";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import { Modal } from "../../pages/modals/newModal";

export const Header = () => {
  const navigate = useNavigate();
  const [isModal, setModal] = useState(false);
  const { isAuth } = useAuth();

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <>
      <S.Header className="header">
        <S.HeaderNav className="header__nav">
          {isAuth ? (
            <>
              <S.HeaderLogo className="header__logo logo-mob">
                <S.HeaderLogoMobLink
                  className="logo-mob__link"
                  href=""
                  target="_blank"
                >
                  <S.HeaderLogoMobImg
                    className="logo-mob__img"
                    src="/img/logo-mob.png"
                    alt="logo"
                  />
                </S.HeaderLogoMobLink>
              </S.HeaderLogo>
              <S.HeaderButton className="btn-hov01" onClick={toggleModal}>
                Разместить объявление
              </S.HeaderButton>
              <Link to={"/profile"}>
                <S.HeaderButton className="btn-hov01">
                  Личный кабинет
                </S.HeaderButton>
              </Link>
              {isModal && <Modal isNew={true} isModal={toggleModal}></Modal>}
            </>
          ) : (
            <>
              <S.HeaderButton
                className="btn-hov01"
                onClick={() => navigate("/login")}
              >
                Вход в личный кабинет
              </S.HeaderButton>
            </>
          )}
        </S.HeaderNav>
      </S.Header>
    </>
  );
};
