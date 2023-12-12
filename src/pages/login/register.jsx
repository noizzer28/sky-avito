import { Link } from "react-router-dom";
import * as S from "./login.styles";
import { DarkBG } from "../../app.styles";
import { useNavigate } from "react-router-dom";

export function Register() {
  const navigate = useNavigate();
  const error = false;
  const isLoading = false;

  return (
    <S.ModalWrapper data-id="wrapper">
      <S.ModalBlock data-id="modal-block">
        <S.Modal data-id="modal">
          <Link to="/">
            <S.ModalLogo data-id="modalLogo">
              <img src="/img/logo_modal.png" alt="logo" />
            </S.ModalLogo>
          </Link>
          <S.Inputs data-id="input">
            <S.ModalInput
              type="text"
              name="login"
              placeholder="Почта"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
            <S.ModalInput
              type="password"
              name="password"
              placeholder="Пароль"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
            <S.ModalInput
              type="password"
              name="repeat-password"
              placeholder="Повторите пароль"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
            <S.ModalInput
              type="text"
              name="name"
              placeholder="Имя (необязательно)"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
            <S.ModalInput
              type="text"
              name="last-name"
              placeholder="Фамилия (необязательно)"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
            <S.ModalInput
              type="text"
              name="city"
              placeholder="Город (необязательно)"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
          </S.Inputs>
          {error && <S.Error>{error}</S.Error>}
          <S.Buttons data-id="buttons">
            <S.PrimaryButton disabled={isLoading ? true : false}>
              Зарегистрироваться
            </S.PrimaryButton>
            <Link to="/login">
              <S.SecondaryButton>Войти</S.SecondaryButton>
            </Link>
          </S.Buttons>
        </S.Modal>
      </S.ModalBlock>
    </S.ModalWrapper>
  );
}
